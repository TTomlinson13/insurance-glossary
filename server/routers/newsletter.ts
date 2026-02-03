import { z } from "zod";
import { publicProcedure, protectedProcedure, router } from "../_core/trpc";
import { getDb } from "../db";
import { newsletterSubscribers } from "../../drizzle/schema";
import { eq, desc, sql, and } from "drizzle-orm";

export const newsletterRouter = router({
  /**
   * Subscribe to newsletter
   */
  subscribe: publicProcedure
    .input(
      z.object({
        email: z.string().email("Invalid email address"),
        source: z.enum(["footer_form", "quiz_result", "blog_post"]).default("footer_form"),
      })
    )
    .mutation(async ({ input }) => {
      const { email, source } = input;
      const db = await getDb();
      if (!db) {
        throw new Error("Database not available");
      }

      // Check if email already exists
      const existing = await db
        .select()
        .from(newsletterSubscribers)
        .where(eq(newsletterSubscribers.email, email))
        .limit(1);

      if (existing.length > 0) {
        const subscriber = existing[0];
        
        // If previously unsubscribed, reactivate
        if (subscriber.status === "unsubscribed") {
          await db
            .update(newsletterSubscribers)
            .set({ 
              status: "active", 
              unsubscribedAt: null,
              source // Update source
            })
            .where(eq(newsletterSubscribers.email, email));
          
          return { 
            success: true, 
            message: "Welcome back! You've been resubscribed to our newsletter.",
            alreadySubscribed: false
          };
        }
        
        // Already subscribed
        return { 
          success: true, 
          message: "You're already subscribed to our newsletter!",
          alreadySubscribed: true
        };
      }

      // New subscription
      await db.insert(newsletterSubscribers).values({
        email,
        source,
        status: "active",
      });

      return { 
        success: true, 
        message: "Thanks for subscribing! Check your email for confirmation.",
        alreadySubscribed: false
      };
    }),

  /**
   * Unsubscribe from newsletter
   */
  unsubscribe: publicProcedure
    .input(
      z.object({
        email: z.string().email("Invalid email address"),
      })
    )
    .mutation(async ({ input }) => {
      const { email } = input;
      const db = await getDb();
      if (!db) {
        throw new Error("Database not available");
      }

      const existing = await db
        .select()
        .from(newsletterSubscribers)
        .where(eq(newsletterSubscribers.email, email))
        .limit(1);

      if (existing.length === 0) {
        return { 
          success: false, 
          message: "Email not found in our subscriber list."
        };
      }

      await db
        .update(newsletterSubscribers)
        .set({ 
          status: "unsubscribed",
          unsubscribedAt: new Date()
        })
        .where(eq(newsletterSubscribers.email, email));

      return { 
        success: true, 
        message: "You've been unsubscribed. We're sorry to see you go!"
      };
    }),

  // Admin procedures
  getAllSubscribers: protectedProcedure
    .input(
      z.object({
        status: z.enum(["all", "active", "unsubscribed"]).optional().default("all"),
        search: z.string().optional(),
      })
    )
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");

      let query = db.select().from(newsletterSubscribers);

      // Filter by status
      if (input.status !== "all") {
        query = query.where(eq(newsletterSubscribers.status, input.status)) as any;
      }

      // Search by email
      if (input.search) {
        query = query.where(sql`${newsletterSubscribers.email} LIKE ${`%${input.search}%`}`) as any;
      }

      const subscribers = await query.orderBy(desc(newsletterSubscribers.subscribedAt));
      return subscribers;
    }),

  getSubscriberStats: protectedProcedure.query(async () => {
    const db = await getDb();
    if (!db) throw new Error("Database not available");

    const [totalResult] = await db
      .select({ count: sql<number>`count(*)` })
      .from(newsletterSubscribers);

    const [activeResult] = await db
      .select({ count: sql<number>`count(*)` })
      .from(newsletterSubscribers)
      .where(eq(newsletterSubscribers.status, "active"));

    const [unsubscribedResult] = await db
      .select({ count: sql<number>`count(*)` })
      .from(newsletterSubscribers)
      .where(eq(newsletterSubscribers.status, "unsubscribed"));

    // Get growth over last 30 days
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const [recentResult] = await db
      .select({ count: sql<number>`count(*)` })
      .from(newsletterSubscribers)
      .where(
        and(
          eq(newsletterSubscribers.status, "active"),
          sql`${newsletterSubscribers.subscribedAt} >= ${thirtyDaysAgo}`
        )
      );

    return {
      total: Number(totalResult?.count || 0),
      active: Number(activeResult?.count || 0),
      unsubscribed: Number(unsubscribedResult?.count || 0),
      recentGrowth: Number(recentResult?.count || 0),
    };
  }),

  exportSubscribers: protectedProcedure
    .input(
      z.object({
        status: z.enum(["all", "active", "unsubscribed"]).optional().default("active"),
      })
    )
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");

      let query = db.select().from(newsletterSubscribers);

      if (input.status !== "all") {
        query = query.where(eq(newsletterSubscribers.status, input.status)) as any;
      }

      const subscribers = await query.orderBy(desc(newsletterSubscribers.subscribedAt));

      // Convert to CSV format
      const headers = ["Email", "Status", "Source", "Subscribed At", "Unsubscribed At"];
      const rows = subscribers.map((sub) => [
        sub.email,
        sub.status,
        sub.source || "",
        sub.subscribedAt?.toISOString() || "",
        sub.unsubscribedAt?.toISOString() || "",
      ]);

      const csv = [
        headers.join(","),
        ...rows.map((row) => row.map((cell) => `"${cell}"`).join(",")),
      ].join("\n");

      return {
        csv,
        filename: `newsletter-subscribers-${new Date().toISOString().split("T")[0]}.csv`,
      };
    }),
});
