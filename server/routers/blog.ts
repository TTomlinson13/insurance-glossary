import { z } from "zod";
import { publicProcedure, protectedProcedure, router } from "../_core/trpc";
import { getDb } from "../db";
import { blogPosts, type InsertBlogPost } from "../../drizzle/schema";
import { invokeLLM } from "../_core/llm";
import { eq, desc } from "drizzle-orm";

/**
 * Tolerant parser for relatedTerms / seoKeywords columns.
 * These are supposed to be JSON arrays stored as text, but legacy/seed rows
 * may hold a bare list like "[Business Owner, Liability]" which is NOT valid
 * JSON. Blindly JSON.parse-ing those throws and takes down the whole list
 * endpoint, so tolerate every shape and always return a string[].
 */
function safeParseArray(value: unknown): string[] {
  if (Array.isArray(value)) return (value as unknown[]).map(String);
  if (typeof value !== "string") return [];
  const s = value.trim();
  if (!s) return [];
  try {
    const parsed = JSON.parse(s);
    if (Array.isArray(parsed)) return parsed.map(String);
    if (parsed == null) return [];
    return [String(parsed)];
  } catch {
    // Legacy formats: "[a, b, c]" or "a, b, c"
    const inner = s.replace(/^\[/, "").replace(/\]$/, "");
    return inner
      .split(",")
      .map((t) => t.trim().replace(/^["']|["']$/g, ""))
      .filter(Boolean);
  }
}


/**
 * Blog router for AI-generated insurance articles
 */
export const blogRouter = router({
  /**
   * Get all blog posts (public)
   */
  list: publicProcedure.query(async () => {
    const db = await getDb();
    if (!db) return [];
    
    const posts = await db.select().from(blogPosts).orderBy(desc(blogPosts.publishedDate));
    
    // Parse JSON fields
    return posts.map(post => ({
      ...post,
      relatedTerms: safeParseArray(post.relatedTerms),
      seoKeywords: safeParseArray(post.seoKeywords),
    }));
  }),

  /**
   * Get single blog post by slug (public)
   */
  getBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) return null;
      
      const result = await db.select().from(blogPosts).where(eq(blogPosts.slug, input.slug)).limit(1);
      
      if (result.length === 0) return null;
      
      const post = result[0];
      return {
        ...post,
        relatedTerms: safeParseArray(post.relatedTerms),
        seoKeywords: safeParseArray(post.seoKeywords),
      };
    }),

  /**
   * Generate new blog post using AI (protected - admin only)
   */
  generate: protectedProcedure
    .input(z.object({
      topic: z.string().min(5).max(200),
      category: z.enum(["Insurance Basics", "Auto Insurance", "Health Insurance", "Life Insurance", "Property Insurance", "Business Insurance"]),
      targetKeywords: z.array(z.string()).optional(),
    }))
    .mutation(async ({ input, ctx }) => {
      // Only admins can generate blog posts
      if (ctx.user.role !== "admin") {
        throw new Error("Only admins can generate blog posts");
      }

      const db = await getDb();
      if (!db) {
        throw new Error("Database not available");
      }

      // Generate blog post using LLM
      const systemPrompt = `You are an expert insurance writer creating educational blog content for an insurance glossary website. 
Your goal is to write comprehensive, SEO-optimized articles that help readers understand insurance concepts.

Guidelines:
- Write in a clear, professional, and accessible style
- Use markdown formatting with proper headings (##, ###)
- Include practical examples and real-world scenarios
- Focus on education, not sales or quotes
- Use bullet points and numbered lists for clarity
- Include key takeaways at the end
- Target 1000-1500 words
- Use the provided keywords naturally throughout the content`;

      const userPrompt = `Write a comprehensive blog post about: "${input.topic}"

Category: ${input.category}
${input.targetKeywords ? `Target SEO keywords: ${input.targetKeywords.join(", ")}` : ""}

The article should:
1. Have an engaging title (60-70 characters)
2. Include a compelling excerpt/summary (150-160 characters)
3. Cover the topic thoroughly with multiple sections
4. Include practical examples
5. End with key takeaways
6. Be formatted in markdown

Return ONLY a JSON object with this structure (no markdown code blocks, just raw JSON):
{
  "title": "Article Title Here",
  "excerpt": "Brief summary here",
  "content": "Full markdown content here",
  "relatedTerms": ["Term 1", "Term 2", "Term 3", "Term 4"],
  "seoKeywords": ["keyword1", "keyword2", "keyword3", "keyword4"],
  "readTime": "X min read"
}`;

      try {
        const response = await invokeLLM({
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt },
          ],
          response_format: {
            type: "json_schema",
            json_schema: {
              name: "blog_post",
              strict: true,
              schema: {
                type: "object",
                properties: {
                  title: { type: "string" },
                  excerpt: { type: "string" },
                  content: { type: "string" },
                  relatedTerms: {
                    type: "array",
                    items: { type: "string" },
                  },
                  seoKeywords: {
                    type: "array",
                    items: { type: "string" },
                  },
                  readTime: { type: "string" },
                },
                required: ["title", "excerpt", "content", "relatedTerms", "seoKeywords", "readTime"],
                additionalProperties: false,
              },
            },
          },
        });

        const content = response.choices[0].message.content;
        if (typeof content !== 'string') {
          throw new Error('Invalid response format from LLM');
        }
        const generatedPost = JSON.parse(content);

        // Generate slug from title
        const slug = generatedPost.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "");

        // Insert into database
        const newPost: InsertBlogPost = {
          slug,
          title: generatedPost.title,
          excerpt: generatedPost.excerpt,
          content: generatedPost.content,
          author: "Insurance Glossary Team",
          category: input.category,
          readTime: generatedPost.readTime,
          relatedTerms: JSON.stringify(generatedPost.relatedTerms),
          seoKeywords: JSON.stringify(generatedPost.seoKeywords),
          publishedDate: new Date(),
        };

        await db.insert(blogPosts).values(newPost);

        return {
          success: true,
          slug,
          title: generatedPost.title,
        };
      } catch (error) {
        console.error("Error generating blog post:", error);
        throw new Error("Failed to generate blog post");
      }
    }),

  /**
   * Delete blog post (protected - admin only)
   */
  delete: protectedProcedure
    .input(z.object({ slug: z.string() }))
    .mutation(async ({ input, ctx }) => {
      if (ctx.user.role !== "admin") {
        throw new Error("Only admins can delete blog posts");
      }

      const db = await getDb();
      if (!db) {
        throw new Error("Database not available");
      }

      await db.delete(blogPosts).where(eq(blogPosts.slug, input.slug));

      return { success: true };
    }),
});
