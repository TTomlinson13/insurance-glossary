import { z } from "zod";
import { publicProcedure, router } from "../_core/trpc";
import { invokeLLM } from "../_core/llm";
import { notifyOwner } from "../_core/notification";
import { 
  createConversation, 
  getConversation, 
  getConversationBySessionId,
  updateConversation,
  addMessage, 
  getMessages,
  createLead 
} from "../chatDb";
import { glossaryTerms } from "../../client/src/data/glossary";

/**
 * System prompt for insurance chatbot
 * Provides context about the glossary and how to help users
 */
const SYSTEM_PROMPT = `You are an expert insurance advisor chatbot for an insurance glossary website. Your role is to:

1. **Answer insurance questions** clearly and concisely using the glossary terms as reference
2. **Recommend coverage types** based on user needs (personal or business)
3. **Explain insurance concepts** in simple, accessible language
4. **Help users understand what insurance they need** based on their situation

**Available Insurance Categories:**
- Auto Insurance (collision, comprehensive, liability, uninsured motorist)
- Health Insurance (copayment, coinsurance, deductible, out-of-pocket maximum)
- Life Insurance (term, whole, universal, variable)
- Property Insurance (homeowners, renters, flood)
- Business Insurance (general liability, workers' comp, professional liability, cyber liability, D&O, EPLI)
- Industry-Specific (restaurant, contractor, tech E&O, medical/legal malpractice, trucking, etc.)

**Glossary Terms Available:**
${glossaryTerms.slice(0, 30).map(t => `- ${t.term}: ${t.definition.slice(0, 100)}...`).join('\n')}
... and ${glossaryTerms.length - 30} more terms

**Conversation Guidelines:**
- Be friendly, professional, and helpful
- Ask clarifying questions to understand user needs
- Suggest relevant glossary terms they can explore
- For business owners, ask about their industry to recommend specific coverage
- Keep responses concise (2-3 paragraphs max)
- Use bullet points for lists of coverage types
- Focus purely on education and answering questions
- Do NOT push users toward quotes or connecting with agents
- Let users discover the quote forms on their own through the website

Remember: You're here to educate and inform. Build trust through helpful, unbiased explanations without sales pressure.`;

export const chatRouter = router({
  /**
   * Start or continue a conversation
   */
  sendMessage: publicProcedure
    .input(z.object({
      message: z.string().min(1),
      conversationId: z.number().optional(),
      sessionId: z.string().optional(), // For anonymous users
    }))
    .mutation(async ({ input }) => {
      const { message, conversationId, sessionId } = input;

      // Get or create conversation
      let conversation;
      if (conversationId) {
        conversation = await getConversation(conversationId);
      } else if (sessionId) {
        conversation = await getConversationBySessionId(sessionId);
      }

      if (!conversation) {
        // Create new conversation
        const newConvId = await createConversation({
          sessionId: sessionId || null,
          userId: null, // TODO: Add user ID when authenticated
          title: message.slice(0, 100), // Use first message as title
          leadData: null,
          convertedToLead: 0,
        });
        conversation = await getConversation(newConvId);
      }

      if (!conversation) {
        throw new Error("Failed to create conversation");
      }

      // Save user message
      await addMessage({
        conversationId: conversation.id,
        role: "user",
        content: message,
        metadata: null,
      });

      // Get conversation history
      const history = await getMessages(conversation.id);
      
      // Build messages for LLM
      const llmMessages = [
        { role: "system" as const, content: SYSTEM_PROMPT },
        ...history.slice(-10).map(m => ({ // Last 10 messages for context
          role: m.role as "user" | "assistant",
          content: m.content,
        })),
      ];

      // Get AI response
      const response = await invokeLLM({
        messages: llmMessages,
      });

      const rawContent = response.choices[0]?.message?.content;
      const assistantMessage = typeof rawContent === 'string' 
        ? rawContent 
        : "I'm sorry, I couldn't process that. Could you rephrase your question?";

      // Analyze intent and suggest terms
      const suggestedTerms = findRelevantTerms(message);
      const intentType = detectIntent(message);

      // Save assistant message
      await addMessage({
        conversationId: conversation.id,
        role: "assistant",
        content: assistantMessage,
        metadata: {
          suggestedTerms: suggestedTerms.slice(0, 3),
          intentType,
        },
      });

      return {
        conversationId: conversation.id,
        message: assistantMessage,
        suggestedTerms: suggestedTerms.slice(0, 3),
        intentType,
      };
    }),

  /**
   * Get conversation history
   */
  getHistory: publicProcedure
    .input(z.object({
      conversationId: z.number(),
    }))
    .query(async ({ input }) => {
      const messages = await getMessages(input.conversationId);
      return messages;
    }),

  /**
   * Capture lead from conversation
   */
  captureLead: publicProcedure
    .input(z.object({
      conversationId: z.number().optional(),
      name: z.string(),
      email: z.string().email(),
      phone: z.string().optional(),
      zipCode: z.string().optional(),
      insuranceType: z.string(),
      currentlyInsured: z.string().optional(),
    }))
    .mutation(async ({ input }) => {
      const { conversationId, ...leadData } = input;

      // Get conversation to extract notes (if conversation exists)
      let conversationSummary = "Direct form submission";
      if (conversationId) {
        const conversation = await getConversation(conversationId);
        const messages = await getMessages(conversationId);
        
        // Create summary of conversation for notes
        conversationSummary = messages
          .filter(m => m.role === "user")
          .map(m => m.content)
          .slice(0, 3)
          .join(" | ");
      }

      // Create lead
      const leadId = await createLead({
        conversationId: conversationId || null,
        source: conversationId ? "chatbot" : "quote_form",
        ...leadData,
        notes: `Conversation: ${conversationSummary}`,
        status: "new",
      });

      // Update conversation (if it exists)
      if (conversationId) {
        await updateConversation(conversationId, {
          leadData: leadData as any,
          convertedToLead: 1,
        });
      }

      // Send email notification for high-value leads
      const isHighValue = 
        leadData.insuranceType.toLowerCase().includes("business") ||
        leadData.insuranceType.toLowerCase().includes("commercial") ||
        (conversationId && conversationSummary.length > 50); // Engaged conversation

      if (isHighValue) {
        try {
          await notifyOwner({
            title: `🎯 High-Value Lead: ${leadData.insuranceType}`,
            content: `New lead captured from ${conversationId ? "chatbot" : "quote form"}:\n\nName: ${leadData.name}\nEmail: ${leadData.email}\nPhone: ${leadData.phone || "N/A"}\nZIP: ${leadData.zipCode || "N/A"}\nInsurance Type: ${leadData.insuranceType}\nCurrently Insured: ${leadData.currentlyInsured || "N/A"}\n\nNotes: ${conversationSummary}`,
          });
        } catch (error) {
          console.error("Failed to send notification:", error);
          // Don't fail the lead capture if notification fails
        }
      }

      return { success: true, leadId };
    }),
});

/**
 * Find relevant glossary terms based on user message
 */
function findRelevantTerms(message: string): string[] {
  const messageLower = message.toLowerCase();
  const relevant: string[] = [];

  for (const term of glossaryTerms) {
    const termLower = term.term.toLowerCase();
    const definitionLower = term.definition.toLowerCase();
    
    // Check if term or keywords appear in message
    if (messageLower.includes(termLower) || 
        termLower.split(' ').some(word => word.length > 4 && messageLower.includes(word))) {
      relevant.push(term.term);
    }
  }

  return relevant;
}

/**
 * Detect user intent from message
 */
function detectIntent(message: string): "question" | "coverage_recommendation" | "term_lookup" | "general" {
  const messageLower = message.toLowerCase();

  // Term lookup patterns
  if (messageLower.match(/what is|define|meaning of|explain/)) {
    return "term_lookup";
  }

  // Coverage recommendation patterns
  if (messageLower.match(/need|should i|recommend|best|which insurance|what insurance|starting|buying|opening/)) {
    return "coverage_recommendation";
  }

  // Question patterns
  if (messageLower.match(/\?|how|why|when|where|can i/)) {
    return "question";
  }

  return "general";
}
