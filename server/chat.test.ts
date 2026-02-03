import { describe, expect, it, beforeEach, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the LLM invocation
vi.mock("./_core/llm", () => ({
  invokeLLM: vi.fn().mockResolvedValue({
    choices: [{
      message: {
        content: "I can help you understand insurance terms. What would you like to know?"
      }
    }]
  })
}));

// Mock the database functions
vi.mock("./chatDb", () => ({
  createConversation: vi.fn().mockResolvedValue(1),
  getConversation: vi.fn().mockResolvedValue({
    id: 1,
    sessionId: "test-session",
    userId: null,
    title: "Test conversation",
    leadData: null,
    convertedToLead: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  }),
  getConversationBySessionId: vi.fn().mockResolvedValue(null),
  updateConversation: vi.fn().mockResolvedValue(undefined),
  addMessage: vi.fn().mockResolvedValue(1),
  getMessages: vi.fn().mockResolvedValue([]),
  createLead: vi.fn().mockResolvedValue(1),
}));

function createTestContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("chat router", () => {
  let ctx: TrpcContext;
  let caller: ReturnType<typeof appRouter.createCaller>;

  beforeEach(() => {
    ctx = createTestContext();
    caller = appRouter.createCaller(ctx);
  });

  describe("sendMessage", () => {
    it("creates a new conversation and returns AI response", async () => {
      const result = await caller.chat.sendMessage({
        message: "What is a deductible?",
        sessionId: "test-session-123",
      });

      expect(result).toHaveProperty("conversationId");
      expect(result).toHaveProperty("message");
      expect(result.conversationId).toBe(1);
      expect(typeof result.message).toBe("string");
    });

    it("detects term lookup intent", async () => {
      const result = await caller.chat.sendMessage({
        message: "What is comprehensive coverage?",
        sessionId: "test-session-123",
      });

      expect(result.intentType).toBe("term_lookup");
    });

    it("detects coverage recommendation intent", async () => {
      const result = await caller.chat.sendMessage({
        message: "What insurance do I need for my restaurant?",
        sessionId: "test-session-123",
      });

      expect(result.intentType).toBe("coverage_recommendation");
    });
  });

  describe("captureLead", () => {
    it("captures lead from quote form without conversation", async () => {
      const result = await caller.chat.captureLead({
        name: "John Doe",
        email: "john@example.com",
        zipCode: "12345",
        insuranceType: "Auto",
        currentlyInsured: "yes",
      });

      expect(result.success).toBe(true);
      expect(result.leadId).toBe(1);
    });

    it("captures lead from chatbot conversation", async () => {
      const result = await caller.chat.captureLead({
        conversationId: 1,
        name: "Jane Smith",
        email: "jane@example.com",
        zipCode: "54321",
        insuranceType: "Business",
      });

      expect(result.success).toBe(true);
      expect(result.leadId).toBe(1);
    });

    it("validates email format", async () => {
      await expect(
        caller.chat.captureLead({
          name: "Invalid Email",
          email: "not-an-email",
          zipCode: "12345",
          insuranceType: "Health",
        })
      ).rejects.toThrow();
    });
  });
});
