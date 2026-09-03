import { publicProcedure, router } from "../_core/trpc";
import { glossaryTerms } from "../../client/src/data/glossary";
import { generateSlug } from "../../client/src/lib/utils-slug";
import { getDb } from "../db";
import { blogPosts } from "../../drizzle/schema";
import { desc } from "drizzle-orm";

/**
 * Generate XML sitemap for SEO.
 * Blog posts are read LIVE from the blog_posts table (not a static file), so
 * newly published articles appear automatically. Posts with an empty slug are
 * skipped so we never advertise a broken URL.
 */
export const sitemapRouter = router({
  generate: publicProcedure.query(async () => {
    const baseUrl = "https://theinsuranceglossary.com";
    const currentDate = new Date().toISOString().split('T')[0];

    // Static pages
    const staticPages = [
      { url: '', priority: '1.0', changefreq: 'weekly' },
      { url: '/compare', priority: '0.8', changefreq: 'monthly' },
      { url: '/business-insurance', priority: '0.8', changefreq: 'monthly' },
      { url: '/blog', priority: '0.8', changefreq: 'weekly' },
    ];

    // Dynamic term pages
    const termPages = glossaryTerms.map(term => ({
      url: `/term/${generateSlug(term.term)}`,
      priority: '0.7',
      changefreq: 'monthly'
    }));

    // Blog posts from the database (live)
    let dbPosts: { slug: string | null }[] = [];
    try {
      const db = await getDb();
      if (db) {
        dbPosts = await db
          .select({ slug: blogPosts.slug })
          .from(blogPosts)
          .orderBy(desc(blogPosts.publishedDate));
      }
    } catch (err) {
      console.error("Sitemap: failed to load blog posts from DB:", err);
      dbPosts = [];
    }

    const blogPages = dbPosts
      .filter(p => !!p.slug && p.slug.trim().length > 0)
      .map(post => ({
        url: `/blog/${post.slug}`,
        priority: '0.7',
        changefreq: 'monthly'
      }));

    // Combine all pages
    const allPages = [...staticPages, ...termPages, ...blogPages];

    // Generate XML
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    return xml;
  }),
});
