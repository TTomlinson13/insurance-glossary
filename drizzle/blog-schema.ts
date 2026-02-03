import { int, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Blog posts table for AI-generated insurance articles
 */
export const blogPosts = mysqlTable("blog_posts", {
  id: int("id").autoincrement().primaryKey(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  title: text("title").notNull(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  author: varchar("author", { length: 255 }).notNull().default("Insurance Glossary Team"),
  publishedDate: timestamp("publishedDate").defaultNow().notNull(),
  category: varchar("category", { length: 100 }).notNull(),
  readTime: varchar("readTime", { length: 50 }).notNull(),
  relatedTerms: text("relatedTerms").notNull(), // JSON array stored as text
  seoKeywords: text("seoKeywords").notNull(), // JSON array stored as text
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertBlogPost = typeof blogPosts.$inferInsert;
