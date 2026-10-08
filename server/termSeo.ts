/* Server-side SEO/GEO injection for /term/:slug pages.
 *
 * The app is a client-rendered SPA, so without this the raw HTML that
 * non-JS crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.) fetch for a term
 * page contains no definition and no schema. This injects the term's title,
 * meta, canonical, DefinedTerm + BreadcrumbList JSON-LD, and a visible
 * content block into the built index.html before it is served. React's
 * createRoot().render() cleanly replaces the #root content on mount, so
 * users still get the full SPA; the injected <script id="term-structured-data">
 * reuses the same id the client updates, so there is no duplicate schema.
 */
import { glossaryTerms, type GlossaryTerm } from "../client/src/data/glossary";

const SITE = "https://theinsuranceglossary.com";

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function findTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => slugify(t.term) === slug);
}

function escAttr(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function jsonLd(obj: unknown): string {
  // Escape "<" so the JSON can never break out of the <script> element.
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}

function buildStructuredData(term: GlossaryTerm, slug: string) {
  const url = `${SITE}/term/${slug}`;
  const definedTerm: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.term,
    description: term.definition,
    url,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      "@id": `${SITE}/#glossary`,
      name: "The Insurance Glossary",
      url: `${SITE}/`,
    },
    termCode: term.category,
  };
  if (term.termEs && term.definitionEs) {
    definedTerm.inLanguage = ["en", "es"];
    definedTerm.alternateName = term.termEs;
  }
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Glossary", item: `${SITE}/` },
      { "@type": "ListItem", position: 3, name: term.term, item: url },
    ],
  };
  return [definedTerm, breadcrumb];
}

function buildContentBlock(term: GlossaryTerm): string {
  const parts: string[] = [];
  parts.push(
    `<nav style="font-size:14px;color:#6b7280;margin-bottom:12px"><a href="/" style="color:#6b7280">Home</a> / <a href="/" style="color:#6b7280">Glossary</a> / ${escHtml(term.term)}</nav>`
  );
  parts.push(`<h1 style="font-size:2rem;margin:0 0 4px">${escHtml(term.term)}</h1>`);
  parts.push(
    `<p style="color:#9ca3af;font-size:14px;margin:0 0 20px">${escHtml(term.category)} insurance term</p>`
  );
  parts.push(`<h2 style="font-size:1.15rem;margin:0 0 6px">Definition</h2>`);
  parts.push(
    `<p style="font-size:1.1rem;line-height:1.65">${escHtml(term.definition)}</p>`
  );
  if (term.termEs && term.definitionEs) {
    parts.push(`<h2 style="font-size:1.15rem;margin:20px 0 6px">Definición en Español</h2>`);
    parts.push(
      `<p style="font-size:1.05rem;line-height:1.6"><strong>${escHtml(term.termEs)}</strong><br>${escHtml(term.definitionEs)}</p>`
    );
  }
  if (term.relatedReading) {
    parts.push(
      `<p style="margin-top:16px"><a href="${escAttr(term.relatedReading.url)}" rel="noopener">${escHtml(term.relatedReading.label)}</a></p>`
    );
  }
  parts.push(
    `<p style="margin-top:24px"><a href="/">&larr; Back to The Insurance Glossary</a></p>`
  );
  return (
    `<div id="root"><main style="max-width:760px;margin:0 auto;padding:40px 20px;font-family:system-ui,-apple-system,sans-serif;color:#1f2937">` +
    parts.join("\n") +
    `</main></div>`
  );
}

/** Inject per-term SEO/GEO into the built index.html. Pure string transform. */
export function injectTermSeo(html: string, term: GlossaryTerm, slug: string): string {
  const url = `${SITE}/term/${slug}`;
  const title = `${term.term} - Insurance Glossary`;
  const desc = term.definition;

  let out = html;
  out = out.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escHtml(title)}</title>`);
  out = out.replace(
    /(<meta\s+name="description"\s+content=")[^"]*(")/i,
    `$1${escAttr(desc)}$2`
  );
  out = out.replace(
    /(<meta\s+property="og:title"\s+content=")[^"]*(")/i,
    `$1${escAttr(title)}$2`
  );
  out = out.replace(
    /(<meta\s+property="og:description"\s+content=")[^"]*(")/i,
    `$1${escAttr(desc)}$2`
  );
  out = out.replace(
    /(<meta\s+property="og:url"\s+content=")[^"]*(")/i,
    `$1${escAttr(url)}$2`
  );
  out = out.replace(
    /(<meta\s+property="twitter:title"\s+content=")[^"]*(")/i,
    `$1${escAttr(title)}$2`
  );
  out = out.replace(
    /(<meta\s+property="twitter:description"\s+content=")[^"]*(")/i,
    `$1${escAttr(desc)}$2`
  );
  out = out.replace(
    /(<meta\s+property="twitter:url"\s+content=")[^"]*(")/i,
    `$1${escAttr(url)}$2`
  );
  out = out.replace(
    /(<link\s+rel="canonical"\s+href=")[^"]*(")/i,
    `$1${escAttr(url)}$2`
  );

  // Inject term JSON-LD before </head>; client reuses id "term-structured-data".
  const ld = `<script id="term-structured-data" type="application/ld+json">${jsonLd(
    buildStructuredData(term, slug)
  )}</script>`;
  out = out.replace(/<\/head>/i, `${ld}\n  </head>`);

  // Replace the empty #root with a crawler-visible content block.
  out = out.replace(/<div id="root"><\/div>/i, buildContentBlock(term));

  return out;
}
