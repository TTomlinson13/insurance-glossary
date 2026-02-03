import { invokeLLM } from "../server/_core/llm.ts";
import { drizzle } from "drizzle-orm/mysql2";
import { blogPosts } from "../drizzle/schema.ts";
import "dotenv/config";

async function generateFirstBlogPost() {
  console.log("Generating first AI blog post...");
  
  const topic = "Understanding Insurance Deductibles: A Complete Guide";
  const category = "general";
  
  const prompt = `Write a comprehensive, SEO-optimized blog article about: "${topic}"

Category: ${category}

Requirements:
- 800-1200 words
- Educational tone, accessible to general audience
- Include practical examples
- Link to relevant insurance terms where appropriate (use format: [Term Name](/term/term-slug))
- Use proper markdown formatting with headers (##, ###)
- Include a brief introduction and conclusion
- Focus on helping readers understand the concept clearly

Write the complete article in markdown format:`;

  try {
    const response = await invokeLLM({
      messages: [
        { role: "system", content: "You are an expert insurance educator who writes clear, helpful articles about insurance topics." },
        { role: "user", content: prompt }
      ]
    });

    const content = response.choices[0].message.content;
    
    // Extract title and generate slug
    const slug = topic.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    
    // Save to database
    const db = drizzle(process.env.DATABASE_URL);
    
    // Calculate read time (average 200 words per minute)
    const wordCount = content.split(/\s+/).length;
    const readTime = `${Math.ceil(wordCount / 200)} min read`;
    
    // Extract related terms and keywords
    const relatedTerms = JSON.stringify(["Deductible", "Premium", "Out-of-Pocket Maximum", "Coinsurance", "Copayment"]);
    const seoKeywords = JSON.stringify(["insurance deductible", "what is a deductible", "high deductible", "low deductible", "deductible vs premium"]);
    
    await db.insert(blogPosts).values({
      title: topic,
      slug,
      excerpt: "Learn everything you need to know about insurance deductibles, how they work, and how to choose the right amount for your needs.",
      content,
      category,
      author: "Insurance Glossary Team",
      readTime,
      relatedTerms,
      seoKeywords,
    });
    
    console.log("✅ Blog post generated and saved successfully!");
    console.log(`Title: ${topic}`);
    console.log(`Slug: ${slug}`);
    console.log(`Content length: ${content.length} characters`);
    console.log(`\nView at: http://localhost:3000/blog/${slug}`);
    
  } catch (error) {
    console.error("❌ Error generating blog post:", error);
    process.exit(1);
  }
  
  process.exit(0);
}

generateFirstBlogPost();
