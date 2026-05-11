import { getDb } from "../db";
import { blogPosts } from "../../drizzle/schema";
import { desc, gte, sql } from "drizzle-orm";
import { sendNewsletter } from "./email";

/**
 * Generate and send weekly newsletter digest
 */
export async function generateAndSendWeeklyDigest() {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  // Get latest 3 blog posts from the past week
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  const recentPosts = await db
    .select()
    .from(blogPosts)
    .where(gte(blogPosts.publishedDate, oneWeekAgo))
    .orderBy(desc(blogPosts.publishedDate))
    .limit(3);

  // If no recent posts, get the 3 most recent posts overall
  const postsToFeature = recentPosts.length > 0 
    ? recentPosts 
    : await db
        .select()
        .from(blogPosts)
        .orderBy(desc(blogPosts.publishedDate))
        .limit(3);

  // Generate email content
  const subject = `Weekly Insurance Tips - ${new Date().toLocaleDateString("en-US", { 
    month: "long", 
    day: "numeric", 
    year: "numeric" 
  })}`;

  const content = `
    <h2 style="margin: 0 0 24px; font-size: 24px; color: #333333;">Your Weekly Insurance Digest</h2>
    
    <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #333333;">
      Hello! Here's your weekly roundup of insurance insights and updates from Insurance Glossary.
    </p>

    <div style="margin: 32px 0;">
      <h3 style="margin: 0 0 16px; font-size: 20px; color: #d4a574;">📚 Latest Articles</h3>
      ${postsToFeature.map(post => `
        <div style="margin: 0 0 20px; padding: 16px; background-color: #f9f9f9; border-left: 4px solid #d4a574; border-radius: 4px;">
          <h4 style="margin: 0 0 8px; font-size: 18px; color: #333333;">
            <a href="https://theinsuranceglossary.com/blog/${post.slug}" style="color: #333333; text-decoration: none;">
              ${post.title}
            </a>
          </h4>
          <p style="margin: 0 0 12px; font-size: 14px; line-height: 1.6; color: #666666;">
            ${post.excerpt}
          </p>
          <a href="https://theinsuranceglossary.com/blog/${post.slug}" style="color: #d4a574; text-decoration: none; font-weight: 600; font-size: 14px;">
            Read More →
          </a>
        </div>
      `).join("")}
    </div>

    <div style="margin: 32px 0;">
      <h3 style="margin: 0 0 16px; font-size: 20px; color: #d4a574;">💡 Did You Know?</h3>
      <div style="padding: 20px; background-color: #f0f9ff; border-radius: 8px; border: 1px solid #bfdbfe;">
        <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #333333;">
          <strong>Understanding your deductible</strong> is key to choosing the right insurance policy. 
          A higher deductible usually means lower premiums, but you'll pay more out-of-pocket if you file a claim.
        </p>
      </div>
    </div>

    <div style="margin: 32px 0; padding: 24px; background: linear-gradient(135deg, #d4a574 0%, #c8956a 100%); border-radius: 8px; text-align: center;">
      <h3 style="margin: 0 0 12px; font-size: 20px; color: #ffffff;">Explore Our Glossary</h3>
      <p style="margin: 0 0 20px; font-size: 16px; color: #ffffff; opacity: 0.95;">
        Browse 215+ insurance terms with clear, easy-to-understand definitions
      </p>
      <a href="https://theinsuranceglossary.com" style="display: inline-block; padding: 12px 32px; background-color: #ffffff; color: #d4a574; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">
        Browse Glossary
      </a>
    </div>

    <div style="margin: 32px 0;">
      <h3 style="margin: 0 0 16px; font-size: 20px; color: #d4a574;">🎯 Quick Links</h3>
      <ul style="margin: 0; padding-left: 20px; font-size: 16px; line-height: 2; color: #333333;">
        <li><a href="https://theinsuranceglossary.com/quiz" style="color: #d4a574; text-decoration: none;">Take Our Insurance Quiz</a></li>
        <li><a href="https://theinsuranceglossary.com/calculators" style="color: #d4a574; text-decoration: none;">Try Our Calculators</a></li>
        <li><a href="https://theinsuranceglossary.com/blog" style="color: #d4a574; text-decoration: none;">Read All Articles</a></li>
      </ul>
    </div>

    <p style="margin: 32px 0 0; font-size: 14px; line-height: 1.6; color: #666666;">
      Have questions or feedback? Just reply to this email—we'd love to hear from you!
    </p>

    <p style="margin: 16px 0 0; font-size: 14px; color: #999999;">
      Stay informed,<br>
      <strong>The Insurance Glossary Team</strong>
    </p>
  `;

  return {
    subject,
    content,
    postsCount: postsToFeature.length,
  };
}

/**
 * Send weekly digest to all active subscribers
 */
export async function sendWeeklyDigest() {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  // Get all active subscribers
  const { newsletterSubscribers } = await import("../../drizzle/schema");
  const { eq } = await import("drizzle-orm");

  const subscribers = await db
    .select()
    .from(newsletterSubscribers)
    .where(eq(newsletterSubscribers.status, "active"));

  if (subscribers.length === 0) {
    console.log("No active subscribers to send weekly digest to");
    return {
      success: false,
      message: "No active subscribers",
      sent: 0,
    };
  }

  const emails = subscribers.map((sub) => sub.email);

  // Generate digest content
  const digest = await generateAndSendWeeklyDigest();

  // Send newsletter
  const result = await sendNewsletter({
    to: emails,
    subject: digest.subject,
    content: digest.content,
  });

  if (result.success) {
    console.log(`Weekly digest sent to ${emails.length} subscribers`);
    return {
      success: true,
      message: `Weekly digest sent to ${emails.length} subscribers`,
      sent: emails.length,
    };
  } else {
    console.error("Failed to send weekly digest:", result.error);
    return {
      success: false,
      message: `Failed to send: ${result.error}`,
      sent: 0,
    };
  }
}
