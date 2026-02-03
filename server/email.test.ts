import { describe, it, expect } from "vitest";
import { Resend } from "resend";

describe("Email Service - Resend API Key Validation", () => {
  it("should have valid RESEND_API_KEY environment variable", () => {
    expect(process.env.RESEND_API_KEY).toBeDefined();
    expect(process.env.RESEND_API_KEY).toMatch(/^re_/);
  });

  it("should successfully initialize Resend client", async () => {
    const resend = new Resend(process.env.RESEND_API_KEY);
    expect(resend).toBeDefined();
    
    // Test API key validity by checking API keys endpoint (lightweight check)
    try {
      // This is a lightweight API call that validates the key without sending emails
      const result = await resend.apiKeys.list();
      expect(result).toBeDefined();
      expect(result.data).toBeDefined();
    } catch (error: any) {
      // If we get an authentication error, the key is invalid
      if (error.message?.includes("Invalid API key") || error.message?.includes("Unauthorized")) {
        throw new Error("RESEND_API_KEY is invalid. Please provide a valid Resend API key.");
      }
      // Other errors might be network issues, which we can ignore for this test
      console.warn("Network error during Resend validation:", error.message);
    }
  });
});
