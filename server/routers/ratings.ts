import { z } from "zod";
import { publicProcedure, router } from "../_core/trpc";
import { getDb } from "../db";
import { termRatings } from "../../drizzle/schema";
import { eq, and, sql } from "drizzle-orm";

export const ratingsRouter = router({
  /**
   * Submit a rating for a glossary term
   */
  submitRating: publicProcedure
    .input(
      z.object({
        termSlug: z.string(),
        rating: z.enum(["up", "down"]), // thumbs up or down
        sessionId: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { termSlug, rating, sessionId } = input;
      const db = await getDb();
      if (!db) {
        throw new Error("Database not available");
      }

      const ratingValue = rating === "up" ? 1 : -1;
      const userId = ctx.user?.id;
      
      // Get IP address from request
      const ipAddress = ctx.req.ip || ctx.req.headers['x-forwarded-for'] as string || 'unknown';

      // Check if user/session already rated this term
      const existingRating = await db
        .select()
        .from(termRatings)
        .where(
          and(
            eq(termRatings.termSlug, termSlug),
            userId 
              ? eq(termRatings.userId, userId)
              : eq(termRatings.sessionId, sessionId || '')
          )
        )
        .limit(1);

      if (existingRating.length > 0) {
        return {
          success: false,
          message: "You've already rated this term",
          alreadyRated: true
        };
      }

      // Insert new rating
      await db.insert(termRatings).values({
        termSlug,
        rating: ratingValue,
        userId: userId || null,
        sessionId: sessionId || null,
        ipAddress,
      });

      return {
        success: true,
        message: "Thanks for your feedback!",
        alreadyRated: false
      };
    }),

  /**
   * Get rating stats for a term
   */
  getTermStats: publicProcedure
    .input(
      z.object({
        termSlug: z.string(),
      })
    )
    .query(async ({ input }) => {
      const { termSlug } = input;
      const db = await getDb();
      if (!db) {
        throw new Error("Database not available");
      }

      // Get total positive and negative ratings
      const stats = await db
        .select({
          positive: sql<number>`SUM(CASE WHEN ${termRatings.rating} = 1 THEN 1 ELSE 0 END)`,
          negative: sql<number>`SUM(CASE WHEN ${termRatings.rating} = -1 THEN 1 ELSE 0 END)`,
          total: sql<number>`COUNT(*)`,
        })
        .from(termRatings)
        .where(eq(termRatings.termSlug, termSlug));

      const result = stats[0];
      const positive = Number(result?.positive || 0);
      const negative = Number(result?.negative || 0);
      const total = Number(result?.total || 0);
      
      const percentage = total > 0 ? Math.round((positive / total) * 100) : 0;

      return {
        positive,
        negative,
        total,
        percentage,
      };
    }),

  /**
   * Check if user/session has already rated a term
   */
  checkUserRating: publicProcedure
    .input(
      z.object({
        termSlug: z.string(),
        sessionId: z.string().optional(),
      })
    )
    .query(async ({ input, ctx }) => {
      const { termSlug, sessionId } = input;
      const db = await getDb();
      if (!db) {
        throw new Error("Database not available");
      }

      const userId = ctx.user?.id;

      const existingRating = await db
        .select()
        .from(termRatings)
        .where(
          and(
            eq(termRatings.termSlug, termSlug),
            userId 
              ? eq(termRatings.userId, userId)
              : eq(termRatings.sessionId, sessionId || '')
          )
        )
        .limit(1);

      return {
        hasRated: existingRating.length > 0,
        rating: existingRating.length > 0 
          ? (existingRating[0].rating === 1 ? "up" : "down")
          : null
      };
    }),
});
