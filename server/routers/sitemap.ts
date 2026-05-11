import { publicProcedure, router } from "../_core/trpc";
import { glossaryTerms } from "../../client/src/data/glossary";
import { blogPosts } from "../../client/src/data/blog";
import { generateSlug } from "../../client/src/lib/utils-slug";

/**
 * Generate XML sitemap for SEO
 * Includes all static pages and dynamic term pages
 */
export const sitemapRouter = router({
  generate: publicProcedure.query(() => {
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
    
    // Blog posts
    const blogPages = blogPosts.map(post => ({
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
