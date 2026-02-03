import { invokeLLM } from "./server/_core/llm.ts";
import { getDb } from "./server/db.ts";
import { blogPosts } from "./drizzle/schema.ts";

const blogTopics = [
  {
    topic: "What is a Deductible in Simple Terms",
    category: "Insurance Basics",
    keywords: ["insurance deductible", "what is deductible", "how deductibles work", "deductible explained"]
  },
  {
    topic: "Business Insurance for Restaurants Explained",
    category: "Business Insurance",
    keywords: ["restaurant insurance", "business insurance restaurant", "restaurant liability", "food service insurance"]
  },
  {
    topic: "Understanding Health Insurance Copays vs Coinsurance",
    category: "Health Insurance",
    keywords: ["copay vs coinsurance", "health insurance costs", "out of pocket costs", "copayment explained"]
  },
  {
    topic: "Auto Insurance Coverage Types Explained",
    category: "Auto Insurance",
    keywords: ["auto insurance types", "car insurance coverage", "liability collision comprehensive", "auto policy types"]
  },
  {
    topic: "Life Insurance Term vs Whole Life",
    category: "Life Insurance",
    keywords: ["term life vs whole life", "life insurance types", "permanent vs term insurance", "life insurance comparison"]
  },
  {
    topic: "Homeowners Insurance What Does It Cover",
    category: "Property Insurance",
    keywords: ["homeowners insurance coverage", "home insurance what covered", "property insurance basics", "dwelling coverage"]
  },
  {
    topic: "Liability Insurance for Small Business",
    category: "Business Insurance",
    keywords: ["small business liability", "general liability insurance", "business insurance coverage", "liability protection"]
  },
  {
    topic: "Workers Compensation Insurance Requirements",
    category: "Business Insurance",
    keywords: ["workers comp requirements", "workers compensation insurance", "employee injury insurance", "workers comp by state"]
  },
  {
    topic: "Professional Liability Insurance Who Needs It",
    category: "Business Insurance",
    keywords: ["professional liability", "errors and omissions", "E&O insurance", "professional indemnity"]
  },
  {
    topic: "Umbrella Insurance Is It Worth It",
    category: "Insurance Basics",
    keywords: ["umbrella insurance", "excess liability", "umbrella policy worth it", "personal umbrella coverage"]
  },
  {
    topic: "Commercial Property Insurance Guide",
    category: "Business Insurance",
    keywords: ["commercial property insurance", "business property coverage", "building insurance business", "commercial real estate insurance"]
  },
  {
    topic: "Cyber Insurance for Businesses",
    category: "Business Insurance",
    keywords: ["cyber insurance", "cyber liability coverage", "data breach insurance", "cybersecurity insurance"]
  },
  {
    topic: "Understanding Insurance Premiums",
    category: "Insurance Basics",
    keywords: ["insurance premium", "how premiums calculated", "insurance cost factors", "premium explained"]
  },
  {
    topic: "How Insurance Claims Work",
    category: "Insurance Basics",
    keywords: ["insurance claims process", "filing insurance claim", "how claims work", "claim settlement"]
  },
  {
    topic: "Choosing the Right Insurance Agent",
    category: "Insurance Basics",
    keywords: ["insurance agent", "choosing insurance broker", "agent vs broker", "finding insurance agent"]
  }
];

async function generateBlogPost(topic, category, keywords) {
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

  const userPrompt = `Write a comprehensive blog post about: "${topic}"

Category: ${category}
Target SEO keywords: ${keywords.join(", ")}

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
    const generatedPost = JSON.parse(content);

    // Generate slug from title
    const slug = generatedPost.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    return {
      slug,
      title: generatedPost.title,
      excerpt: generatedPost.excerpt,
      content: generatedPost.content,
      author: "Insurance Glossary Team",
      category,
      readTime: generatedPost.readTime,
      relatedTerms: JSON.stringify(generatedPost.relatedTerms),
      seoKeywords: JSON.stringify(generatedPost.seoKeywords),
      publishedDate: new Date(),
    };
  } catch (error) {
    console.error(`Error generating blog post for "${topic}":`, error);
    throw error;
  }
}

async function main() {
  console.log("Starting blog generation...");
  const db = await getDb();
  
  if (!db) {
    console.error("Database not available");
    process.exit(1);
  }

  for (let i = 0; i < blogTopics.length; i++) {
    const { topic, category, keywords } = blogTopics[i];
    console.log(`\n[${i + 1}/${blogTopics.length}] Generating: ${topic}...`);
    
    try {
      const post = await generateBlogPost(topic, category, keywords);
      await db.insert(blogPosts).values(post);
      console.log(`✓ Generated: ${post.title} (slug: ${post.slug})`);
    } catch (error) {
      console.error(`✗ Failed to generate: ${topic}`);
    }
    
    // Add delay to avoid rate limiting
    if (i < blogTopics.length - 1) {
      console.log("Waiting 2 seconds...");
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
  
  console.log("\n✓ Blog generation complete!");
  process.exit(0);
}

main();
