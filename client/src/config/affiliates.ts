/**
 * Affiliate Program Configuration
 * 
 * This file contains affiliate links and tracking parameters for insurance comparison services.
 * 
 * SETUP INSTRUCTIONS:
 * 1. Sign up for each affiliate program
 * 2. Get your unique affiliate ID/tracking code
 * 3. Replace placeholder IDs with your actual affiliate IDs
 * 4. Test links to ensure proper tracking
 * 
 * AFFILIATE PROGRAMS:
 * - Insurify: https://www.insurify.com/partners
 * - Policygenius: https://www.policygenius.com/about/partnerships
 * - The Zebra: https://www.thezebra.com/partners
 * - EverQuote: https://www.everquote.com/partners
 */

export const AFFILIATE_LINKS = {
  // Insurify - Auto, Home, Renters Insurance
  insurify: {
    auto: "https://www.insurify.com/auto-insurance?utm_source=YOUR_AFFILIATE_ID&utm_medium=referral&utm_campaign=insurance_glossary",
    home: "https://www.insurify.com/home-insurance?utm_source=YOUR_AFFILIATE_ID&utm_medium=referral&utm_campaign=insurance_glossary",
    renters: "https://www.insurify.com/renters-insurance?utm_source=YOUR_AFFILIATE_ID&utm_medium=referral&utm_campaign=insurance_glossary",
  },
  
  // Policygenius - Life, Disability, Home, Auto
  policygenius: {
    life: "https://www.policygenius.com/life-insurance/?ref=YOUR_AFFILIATE_ID",
    disability: "https://www.policygenius.com/disability-insurance/?ref=YOUR_AFFILIATE_ID",
    home: "https://www.policygenius.com/homeowners-insurance/?ref=YOUR_AFFILIATE_ID",
    auto: "https://www.policygenius.com/auto-insurance/?ref=YOUR_AFFILIATE_ID",
  },
  
  // The Zebra - Auto Insurance Comparison
  theZebra: {
    auto: "https://www.thezebra.com/?aid=YOUR_AFFILIATE_ID",
  },
  
  // EverQuote - Multi-product Insurance Comparison
  everquote: {
    auto: "https://www.everquote.com/auto-insurance/?source=YOUR_AFFILIATE_ID",
    home: "https://www.everquote.com/home-insurance/?source=YOUR_AFFILIATE_ID",
    life: "https://www.everquote.com/life-insurance/?source=YOUR_AFFILIATE_ID",
  },
};

// Helper function to get affiliate link by category
export function getAffiliateLink(category: "auto" | "home" | "life" | "renters" | "disability"): string {
  switch (category) {
    case "auto":
      return AFFILIATE_LINKS.insurify.auto; // Primary auto insurance affiliate
    case "home":
      return AFFILIATE_LINKS.policygenius.home; // Primary home insurance affiliate
    case "life":
      return AFFILIATE_LINKS.policygenius.life; // Primary life insurance affiliate
    case "renters":
      return AFFILIATE_LINKS.insurify.renters;
    case "disability":
      return AFFILIATE_LINKS.policygenius.disability;
    default:
      return AFFILIATE_LINKS.insurify.auto;
  }
}

// Affiliate disclosure text
export const AFFILIATE_DISCLOSURE = "We may earn a commission when you click on certain links. This helps us keep the Insurance Glossary free for everyone. Our editorial content is not influenced by affiliate partnerships.";
