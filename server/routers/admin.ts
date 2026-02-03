import { z } from "zod";
import { protectedProcedure, router } from "../_core/trpc";
import { TRPCError } from "@trpc/server";
import { getDb } from "../db";
import { leads, conversations, messages } from "../../drizzle/schema";
import { desc, eq, and, gte, lte, sql } from "drizzle-orm";

/**
 * Admin-only procedures for lead management
 */
const adminProcedure = protectedProcedure.use(({ ctx, next }) => {
  if (ctx.user.role !== 'admin') {
    throw new TRPCError({ code: 'FORBIDDEN', message: 'Admin access required' });
  }
  return next({ ctx });
});

export const adminRouter = router({
  /**
   * Get all leads with filtering options
   */
  getLeads: adminProcedure
    .input(z.object({
      insuranceType: z.string().optional(),
      source: z.enum(['chatbot', 'form']).optional(),
      startDate: z.string().optional(),
      endDate: z.string().optional(),
      limit: z.number().default(50),
      offset: z.number().default(0),
    }))
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Database unavailable' });

      const conditions = [];
      
      if (input.insuranceType) {
        conditions.push(eq(leads.insuranceType, input.insuranceType));
      }
      
      if (input.source) {
        conditions.push(eq(leads.source, input.source));
      }
      
      if (input.startDate) {
        conditions.push(gte(leads.createdAt, new Date(input.startDate)));
      }
      
      if (input.endDate) {
        conditions.push(lte(leads.createdAt, new Date(input.endDate)));
      }

      const whereClause = conditions.length > 0 ? and(...conditions) : undefined;

      const results = await db
        .select()
        .from(leads)
        .where(whereClause)
        .orderBy(desc(leads.createdAt))
        .limit(input.limit)
        .offset(input.offset);

      const total = await db
        .select({ count: sql<number>`count(*)` })
        .from(leads)
        .where(whereClause);

      return {
        leads: results,
        total: total[0]?.count || 0,
      };
    }),

  /**
   * Get lead statistics
   */
  getLeadStats: adminProcedure.query(async () => {
    const db = await getDb();
    if (!db) throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Database unavailable' });

    const totalLeads = await db
      .select({ count: sql<number>`count(*)` })
      .from(leads);

    const chatbotLeads = await db
      .select({ count: sql<number>`count(*)` })
      .from(leads)
      .where(eq(leads.source, 'chatbot'));

    const formLeads = await db
      .select({ count: sql<number>`count(*)` })
      .from(leads)
      .where(eq(leads.source, 'form'));

    const byInsuranceType = await db
      .select({
        type: leads.insuranceType,
        count: sql<number>`count(*)`,
      })
      .from(leads)
      .groupBy(leads.insuranceType);

    return {
      total: totalLeads[0]?.count || 0,
      chatbot: chatbotLeads[0]?.count || 0,
      form: formLeads[0]?.count || 0,
      byType: byInsuranceType,
    };
  }),

  /**
   * Get conversation details for a lead
   */
  getLeadConversation: adminProcedure
    .input(z.object({ leadId: z.number() }))
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Database unavailable' });

      const lead = await db
        .select()
        .from(leads)
        .where(eq(leads.id, input.leadId))
        .limit(1);

      if (!lead[0] || !lead[0].conversationId) {
        return null;
      }

      const conversation = await db
        .select()
        .from(conversations)
        .where(eq(conversations.id, lead[0].conversationId))
        .limit(1);

      if (!conversation[0]) {
        return null;
      }

      const conversationMessages = await db
        .select()
        .from(messages)
        .where(eq(messages.conversationId, conversation[0].id))
        .orderBy(messages.createdAt);

      return {
        conversation: conversation[0],
        messages: conversationMessages,
      };
    }),
});
