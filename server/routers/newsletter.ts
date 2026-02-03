import { z } from "zod";
import { publicProcedure, router } from "../_core/trpc";
import { getDb } from "../db";
import { newsletterSubscribers } from "../../drizzle/schema";
import { eq } from "drizzle-orm";

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
});
