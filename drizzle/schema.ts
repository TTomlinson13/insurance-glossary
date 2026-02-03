import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, json } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Chat conversations table
 * Stores conversation sessions between users and the AI chatbot
 */
export const conversations = mysqlTable("conversations", {
  id: int("id").autoincrement().primaryKey(),
  /** Session ID for anonymous users, null for authenticated users */
  sessionId: varchar("sessionId", { length: 255 }),
  /** User ID for authenticated users, null for anonymous */
  userId: int("userId"),
  /** Conversation title (auto-generated from first message) */
  title: text("title"),
  /** Lead capture data (name, email, phone, insurance type, etc.) */
  leadData: json("leadData").$type<{
    name?: string;
    email?: string;
    phone?: string;
    zipCode?: string;
    insuranceType?: string;
    currentlyInsured?: string;
  }>(),
  /** Whether this conversation resulted in a quote form submission */
  convertedToLead: int("convertedToLead").default(0).notNull(), // 0 = false, 1 = true
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Conversation = typeof conversations.$inferSelect;
export type InsertConversation = typeof conversations.$inferInsert;

/**
 * Chat messages table
 * Stores individual messages in conversations
 */
export const messages = mysqlTable("messages", {
  id: int("id").autoincrement().primaryKey(),
  conversationId: int("conversationId").notNull(),
  /** 'user' or 'assistant' */
  role: mysqlEnum("role", ["user", "assistant"]).notNull(),
  /** Message content */
  content: text("content").notNull(),
  /** Optional metadata (e.g., suggested terms, related glossary entries) */
  metadata: json("metadata").$type<{
    suggestedTerms?: string[];
    relatedCategories?: string[];
    intentType?: "question" | "coverage_recommendation" | "term_lookup" | "general";
  }>(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Message = typeof messages.$inferSelect;
export type InsertMessage = typeof messages.$inferInsert;

/**
 * Leads table
 * Stores captured leads from chatbot conversations and quote forms
 */
export const leads = mysqlTable("leads", {
  id: int("id").autoincrement().primaryKey(),
  /** Reference to conversation if lead came from chatbot */
  conversationId: int("conversationId"),
  /** Lead source: 'chatbot', 'quote_form', 'compare_page', 'business_page' */
  source: varchar("source", { length: 50 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 50 }),
  zipCode: varchar("zipCode", { length: 20 }),
  insuranceType: varchar("insuranceType", { length: 100 }).notNull(),
  currentlyInsured: varchar("currentlyInsured", { length: 50 }),
  /** Additional context from chatbot conversation */
  notes: text("notes"),
  /** Lead status: 'new', 'contacted', 'qualified', 'converted', 'lost' */
  status: mysqlEnum("status", ["new", "contacted", "qualified", "converted", "lost"]).default("new").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Lead = typeof leads.$inferSelect;
export type InsertLead = typeof leads.$inferInsert;