/**
 * In-container daily blog generator for theinsuranceglossary.com.
 * Replaces the orphaned VPS1 script: picks a fresh topic (deduped against
 * existing titles), writes the article via OpenRouter, and inserts straight
 * into blog_posts via Drizzle. Bundled to dist/generate-daily.js and run via:
 *   docker exec insurance-glossary-app-1 node dist/generate-daily.js
 *
 * Robustness: the article BODY is fetched as raw markdown (never JSON-parsed,
 * so unescaped quotes/newlines can't break it). Only small metadata is JSON,
 * with a graceful fallback so the post still publishes if that call hiccups.
 *
 * Env: OPENROUTER_API_KEY (required), OPENROUTER_MODEL (optional,
 * default google/gemini-2.5-flash), DATABASE_URL (from the app's env_file).
 */
import { desc } from "drizzle-orm";
import { getDb } from "../server/db";
import { blogPosts } from "../drizzle/schema";

const CATEGORIES = [
  "Insurance Basics",
  "Auto Insurance",
  "Health Insurance",
  "Life Insurance",
  "Property Insurance",
  "Business Insurance",
] as const;

const OPENROUTER_KEY = process.env.OPENROUTER_API_KEY || "";
const MODEL = process.env.OPENROUTER_MODEL || "google/gemini-2.5-flash";

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function stripFences(raw: string): string {
  return (raw || "").trim().replace(/^```(?:markdown|md|json)?/i, "").replace(/```$/i, "").trim();
}

function extractJson(raw: string): string {
  const s = stripFences(raw);
  const a = s.indexOf("{");
  const b = s.lastIndexOf("}");
  if (a < 0 || b <= a) throw new Error("no JSON object in response");
  return s.slice(a, b + 1);
}

async function callLLM(messages: Array<{ role: string; content: string }>, maxTokens = 4000): Promise<string> {
  if (!OPENROUTER_KEY) throw new Error("OPENROUTER_API_KEY is not set in the container env");
  const resp = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${OPENROUTER_KEY}`,
      "HTTP-Referer": "https://theinsuranceglossary.com",
      "X-Title": "Insurance Glossary Daily Blog",
    },
    body: JSON.stringify({ model: MODEL, messages, temperature: 0.7, max_tokens: maxTokens }),
  });
  if (!resp.ok) {
    const t = await resp.text();
    throw new Error(`OpenRouter ${resp.status} ${resp.statusText} - ${t.slice(0, 300)}`);
  }
  const data: any = await resp.json();
  const content = data?.choices?.[0]?.message?.content;
  if (typeof content !== "string" || !content.trim()) throw new Error("empty OpenRouter response");
  return content;
}

async function pickTopic(existingTitles: string[]): Promise<{ title: string; category: string }> {
  const system =
    "You are an editorial planner for a Florida-focused insurance education website. " +
    "Propose ONE new, genuinely useful consumer blog topic NOT already covered by the " +
    "existing titles and not closely overlapping them. Prefer evergreen, SEO-friendly, " +
    "long-tail topics. Category MUST be exactly one of: " + CATEGORIES.join(", ") + ".";
  const user =
    "Existing titles (avoid duplicates/near-duplicates):\n" +
    existingTitles.map((t) => "- " + t).join("\n") +
    '\n\nReturn ONLY a JSON object, no code fences: ' +
    '{"title":"...","category":"<one allowed category>"}. ' +
    "Title 50-70 characters, specific and compelling. Keep the title on one line with no quotes inside it.";
  const t = JSON.parse(extractJson(await callLLM([
    { role: "system", content: system },
    { role: "user", content: user },
  ], 400)));
  if (!t.title || typeof t.title !== "string") throw new Error("topic: missing title");
  if (!CATEGORIES.includes(t.category)) t.category = "Insurance Basics";
  return t;
}

async function writeArticle(topic: { title: string; category: string }) {
  // 1) Article body as RAW markdown (never JSON-parsed -> immune to escaping bugs)
  const bodySystem =
    "You are an expert insurance writer creating educational content for an insurance " +
    "glossary website. Write clear, professional, SEO-optimized prose with markdown headings " +
    "(##, ###), practical examples, Florida-relevant detail where applicable, and a final " +
    '"## Key Takeaways" section. 1000-1500 words. Educational, not sales.';
  const bodyUser =
    `Write a comprehensive blog post titled "${topic.title}" (category: ${topic.category}). ` +
    "Return ONLY the article body in Markdown - no preamble, no JSON, no code fences.";
  const content = stripFences(await callLLM([
    { role: "system", content: bodySystem },
    { role: "user", content: bodyUser },
  ], 6000));

  // 2) Small metadata as JSON (short fields -> reliable), with graceful fallback
  let meta: any = {};
  try {
    const metaRaw = await callLLM([
      { role: "system", content: "Return ONLY compact JSON. No prose, no code fences." },
      {
        role: "user",
        content:
          `For a blog post titled "${topic.title}" (category ${topic.category}), return ONLY JSON: ` +
          '{"excerpt":"a 150-160 character plain-text summary","relatedTerms":["t1","t2","t3","t4"],' +
          '"seoKeywords":["k1","k2","k3","k4"]}',
      },
    ], 600);
    meta = JSON.parse(extractJson(metaRaw));
  } catch (e) {
    console.warn("[generate-daily] metadata call failed, using fallbacks:", (e as any)?.message || e);
  }

  const words = content.split(/\s+/).filter(Boolean).length;
  const fallbackExcerpt = content
    .replace(/[#*`>_\-]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 157);

  return {
    title: topic.title,
    content,
    excerpt: (typeof meta.excerpt === "string" && meta.excerpt.trim()) ? meta.excerpt.trim() : fallbackExcerpt,
    relatedTerms: Array.isArray(meta.relatedTerms) ? meta.relatedTerms.map(String) : [],
    seoKeywords: Array.isArray(meta.seoKeywords) ? meta.seoKeywords.map(String) : [],
    readTime: `${Math.max(1, Math.round(words / 200))} min read`,
    words,
  };
}

async function main() {
  const db = await getDb();
  if (!db) throw new Error("Database not available (DATABASE_URL not set / unreachable)");

  const existing = await db
    .select({ slug: blogPosts.slug, title: blogPosts.title })
    .from(blogPosts)
    .orderBy(desc(blogPosts.publishedDate));
  const slugs = new Set(existing.map((r) => r.slug));
  const titles = existing.map((r) => r.title).filter(Boolean) as string[];

  const topic = await pickTopic(titles);
  console.log(`[generate-daily] topic: ${topic.title} | ${topic.category}`);

  const art = await writeArticle(topic);
  if (art.words < 300) throw new Error(`article too short (${art.words} words) - aborting insert`);

  let slug = slugify(art.title);
  if (!slug) throw new Error("generated an empty slug");
  if (slugs.has(slug)) slug = `${slug}-${Date.now().toString(36).slice(-4)}`;

  await db.insert(blogPosts).values({
    slug,
    title: art.title,
    excerpt: art.excerpt.slice(0, 500),
    content: art.content,
    author: "Insurance Glossary Team",
    category: topic.category,
    readTime: art.readTime,
    relatedTerms: JSON.stringify(art.relatedTerms),
    seoKeywords: JSON.stringify(art.seoKeywords),
  });

  console.log(`[generate-daily] inserted "${art.title}" -> /blog/${slug} (${art.words} words, ${topic.category})`);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error("[generate-daily] FAILED:", e?.message || e);
    process.exit(1);
  });
