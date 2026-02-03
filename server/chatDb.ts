import { eq, desc } from "drizzle-orm";
import { conversations, messages, leads, type InsertConversation, type InsertMessage, type InsertLead } from "../drizzle/schema";
import { getDb } from "./db";

/**
 * Create a new conversation
 */
export async function createConversation(data: InsertConversation) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const result = await db.insert(conversations).values(data);
  return result[0].insertId;
}

/**
 * Get conversation by ID
 */
export async function getConversation(conversationId: number) {
  const db = await getDb();
  if (!db) return null;

  const result = await db
    .select()
    .from(conversations)
    .where(eq(conversations.id, conversationId))
    .limit(1);

  return result[0] || null;
}

/**
 * Get conversation by session ID (for anonymous users)
 */
export async function getConversationBySessionId(sessionId: string) {
  const db = await getDb();
  if (!db) return null;

  const result = await db
    .select()
    .from(conversations)
    .where(eq(conversations.sessionId, sessionId))
    .orderBy(desc(conversations.createdAt))
    .limit(1);

  return result[0] || null;
}

/**
 * Update conversation
 */
export async function updateConversation(conversationId: number, data: Partial<InsertConversation>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db
    .update(conversations)
    .set(data)
    .where(eq(conversations.id, conversationId));
}

/**
 * Add message to conversation
 */
export async function addMessage(data: InsertMessage) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const result = await db.insert(messages).values(data);
  return result[0].insertId;
}

/**
 * Get messages for a conversation
 */
export async function getMessages(conversationId: number) {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(messages)
    .where(eq(messages.conversationId, conversationId))
    .orderBy(messages.createdAt);
}

/**
 * Create a lead
 */
export async function createLead(data: InsertLead) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const result = await db.insert(leads).values(data);
  return result[0].insertId;
}

/**
 * Get all leads (for admin dashboard)
 */
export async function getLeads(limit = 100) {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(leads)
    .orderBy(desc(leads.createdAt))
    .limit(limit);
}

/**
 * Update lead status
 */
export async function updateLeadStatus(leadId: number, status: "new" | "contacted" | "qualified" | "converted" | "lost") {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db
    .update(leads)
    .set({ status })
    .where(eq(leads.id, leadId));
}
