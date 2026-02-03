/**
 * Insurance 101 Learning Path
 * A guided tutorial series covering insurance basics
 */

export type Lesson = {
  id: number;
  title: string;
  description: string;
  duration: string;
  content: {
    introduction: string;
    keyPoints: string[];
    examples: { title: string; description: string }[];
    quiz: {
      question: string;
      options: string[];
      correctAnswer: number;
      explanation: string;
    }[];
    relatedTerms: string[];
  };
};

export const insurance101Lessons: Lesson[] = [
  {
    id: 1,
    title: "What is Insurance?",
    description: "Understanding the basics of insurance and why it matters",
    duration: "5 min",
    content: {
      introduction:
        "Insurance is a contract between you and an insurance company where you pay regular premiums in exchange for financial protection against specific risks. Think of it as a safety net that catches you when unexpected events happen.",
      keyPoints: [
        "Insurance transfers risk from you to an insurance company",
        "You pay premiums (regular payments) for coverage",
        "The insurer pays claims when covered events occur",
        "Insurance provides financial protection and peace of mind",
        "Different types of insurance cover different risks",
      ],
      examples: [
        {
          title: "Car Accident",
          description:
            "You pay $100/month for auto insurance. When you have an accident causing $5,000 in damage, your insurance pays for repairs (minus your deductible).",
        },
        {
          title: "Medical Emergency",
          description:
            "Your health insurance covers a $50,000 hospital stay, and you only pay your deductible and copays instead of the full amount.",
        },
      ],
      quiz: [
        {
          question: "What is a premium?",
          options: [
            "The amount you pay when filing a claim",
            "Regular payments you make for insurance coverage",
            "The maximum amount insurance will pay",
            "A discount on your insurance",
          ],
          correctAnswer: 1,
          explanation:
            "A premium is the regular payment (usually monthly or annually) you make to maintain your insurance coverage.",
        },
      ],
      relatedTerms: ["Premium", "Claim", "Coverage", "Policy"],
    },
  },
  {
    id: 2,
    title: "Understanding Deductibles",
    description: "Learn how deductibles work and affect your costs",
    duration: "6 min",
    content: {
      introduction:
        "A deductible is the amount you must pay out-of-pocket before your insurance starts covering costs. It's one of the most important factors affecting your premium and out-of-pocket expenses.",
      keyPoints: [
        "You pay the deductible first, then insurance covers the rest",
        "Higher deductibles mean lower premiums",
        "Lower deductibles mean higher premiums",
        "Deductibles reset annually (for health insurance)",
        "Some services may be covered before meeting your deductible",
      ],
      examples: [
        {
          title: "$500 Deductible Example",
          description:
            "You have a $500 deductible and $3,000 in covered repairs. You pay $500, and insurance pays $2,500.",
        },
        {
          title: "High vs Low Deductible",
          description:
            "$1,000 deductible = $80/month premium. $250 deductible = $150/month premium. Choose based on your risk tolerance and savings.",
        },
      ],
      quiz: [
        {
          question: "If you have a $1,000 deductible and a $2,500 claim, how much does insurance pay?",
          options: ["$1,000", "$1,500", "$2,500", "$3,500"],
          correctAnswer: 1,
          explanation:
            "You pay the $1,000 deductible first, then insurance pays the remaining $1,500 ($2,500 - $1,000 = $1,500).",
        },
      ],
      relatedTerms: ["Deductible", "Premium", "Out-of-Pocket Maximum", "Copayment"],
    },
  },
  {
    id: 3,
    title: "Types of Insurance Coverage",
    description: "Explore the main types of insurance everyone should know",
    duration: "8 min",
    content: {
      introduction:
        "There are many types of insurance designed to protect different aspects of your life. Understanding which types you need is essential for comprehensive financial protection.",
      keyPoints: [
        "Auto insurance protects you while driving",
        "Health insurance covers medical expenses",
        "Homeowners/renters insurance protects your property",
        "Life insurance provides for your dependents",
        "Disability insurance replaces lost income",
      ],
      examples: [
        {
          title: "Essential Coverage Package",
          description:
            "Most adults need: health insurance (medical costs), auto insurance (if you drive), renters/homeowners insurance (property protection), and life insurance (if you have dependents).",
        },
        {
          title: "Optional but Recommended",
          description:
            "Disability insurance (income protection), umbrella insurance (extra liability coverage), and long-term care insurance (aging costs).",
        },
      ],
      quiz: [
        {
          question: "Which insurance is legally required in most states?",
          options: [
            "Health insurance",
            "Life insurance",
            "Auto liability insurance",
            "Homeowners insurance",
          ],
          correctAnswer: 2,
          explanation:
            "Auto liability insurance is required by law in most states to cover damages you cause to others in an accident.",
        },
      ],
      relatedTerms: [
        "Auto Insurance",
        "Health Insurance",
        "Life Insurance",
        "Homeowners Insurance",
        "Disability Insurance",
      ],
    },
  },
  {
    id: 4,
    title: "How Claims Work",
    description: "Step-by-step guide to filing and managing insurance claims",
    duration: "7 min",
    content: {
      introduction:
        "A claim is a formal request to your insurance company for payment based on your policy terms. Understanding the claims process helps you get the coverage you're entitled to quickly and efficiently.",
      keyPoints: [
        "Report the incident to your insurer as soon as possible",
        "Provide all required documentation and evidence",
        "An adjuster may investigate your claim",
        "The insurer approves or denies based on policy terms",
        "You receive payment minus your deductible",
      ],
      examples: [
        {
          title: "Auto Claim Process",
          description:
            "1) Accident occurs, 2) Call insurer and police, 3) Document damage with photos, 4) Get repair estimates, 5) Adjuster reviews, 6) Claim approved, 7) Repairs completed, 8) You pay deductible.",
        },
        {
          title: "Health Claim Process",
          description:
            "Often automatic: Your doctor submits the claim, insurer processes it, you receive an Explanation of Benefits (EOB), then pay your portion (copay, coinsurance, or deductible).",
        },
      ],
      quiz: [
        {
          question: "What should you do first after an incident that may result in a claim?",
          options: [
            "Wait to see if you need to file",
            "Contact your insurance company immediately",
            "Get three repair estimates",
            "Hire a lawyer",
          ],
          correctAnswer: 1,
          explanation:
            "You should contact your insurance company as soon as possible after an incident to start the claims process and get guidance on next steps.",
        },
      ],
      relatedTerms: ["Claim", "Adjuster", "Deductible", "Coverage", "Policy"],
    },
  },
  {
    id: 5,
    title: "Reading Your Policy",
    description: "Understand key policy terms and what your coverage includes",
    duration: "7 min",
    content: {
      introduction:
        "Your insurance policy is a legal contract that outlines what is and isn't covered. Learning to read your policy helps you understand your rights, responsibilities, and coverage limits.",
      keyPoints: [
        "Declarations page shows your coverage amounts and premiums",
        "Coverage sections explain what's protected",
        "Exclusions list what's NOT covered",
        "Conditions outline your responsibilities",
        "Endorsements modify standard coverage",
      ],
      examples: [
        {
          title: "Auto Policy Structure",
          description:
            "Declarations (your info, vehicle, premiums), Liability Coverage (damages to others), Collision (your vehicle damage), Comprehensive (theft, weather), Exclusions (intentional damage, racing).",
        },
        {
          title: "Common Exclusions",
          description:
            "Most policies exclude: intentional acts, wear and tear, certain natural disasters (floods in homeowners), and pre-existing conditions (health insurance).",
        },
      ],
      quiz: [
        {
          question: "What section of your policy tells you what is NOT covered?",
          options: ["Declarations", "Coverage", "Exclusions", "Endorsements"],
          correctAnswer: 2,
          explanation:
            "The Exclusions section lists specific situations, events, or damages that are not covered by your policy.",
        },
      ],
      relatedTerms: ["Policy", "Coverage", "Exclusions", "Declarations", "Endorsement"],
    },
  },
  {
    id: 6,
    title: "Saving Money on Insurance",
    description: "Smart strategies to reduce premiums without sacrificing coverage",
    duration: "6 min",
    content: {
      introduction:
        "Insurance is essential, but it doesn't have to break the bank. There are many legitimate ways to reduce your premiums while maintaining adequate protection.",
      keyPoints: [
        "Bundle multiple policies with one insurer for discounts",
        "Increase your deductible to lower premiums",
        "Maintain a good credit score (affects rates)",
        "Ask about all available discounts",
        "Review and adjust coverage annually",
      ],
      examples: [
        {
          title: "Bundling Savings",
          description:
            "Combine auto and home insurance with one company to save 15-25% on both policies. Example: $1,200/year auto + $800/year home = $2,000. With bundle discount: $1,700 total ($300 savings).",
        },
        {
          title: "Common Discounts",
          description:
            "Safe driver (no accidents), good student (grades), multi-car, security systems, automatic payments, paperless billing, professional associations.",
        },
      ],
      quiz: [
        {
          question: "Which strategy typically saves the most money on insurance?",
          options: [
            "Paying annually instead of monthly",
            "Bundling multiple policies",
            "Installing a security system",
            "Going paperless",
          ],
          correctAnswer: 1,
          explanation:
            "Bundling multiple policies (like auto and home) with one insurer typically provides the largest discount, often 15-25% off your total premiums.",
        },
      ],
      relatedTerms: ["Premium", "Deductible", "Discount", "Bundle", "Policy"],
    },
  },
  {
    id: 7,
    title: "When to Review Your Coverage",
    description: "Life events that should trigger an insurance review",
    duration: "5 min",
    content: {
      introduction:
        "Your insurance needs change as your life changes. Regularly reviewing your coverage ensures you're adequately protected without paying for coverage you don't need.",
      keyPoints: [
        "Review annually at policy renewal",
        "Major life events require coverage updates",
        "Changes in assets or income affect needs",
        "New laws or regulations may impact coverage",
        "Shop around every 2-3 years for better rates",
      ],
      examples: [
        {
          title: "Life Events Requiring Review",
          description:
            "Marriage, divorce, new baby, home purchase, job change, retirement, starting a business, significant asset increase, or moving to a new state.",
        },
        {
          title: "Annual Review Checklist",
          description:
            "Check: Are premiums still competitive? Has your coverage kept up with inflation? Do you have new assets to protect? Have you qualified for new discounts? Is your deductible still appropriate?",
        },
      ],
      quiz: [
        {
          question: "How often should you review your insurance coverage?",
          options: [
            "Only when you have a claim",
            "Every 5 years",
            "At least annually",
            "Never, it stays the same",
          ],
          correctAnswer: 2,
          explanation:
            "You should review your insurance coverage at least annually, and also whenever you experience major life changes.",
        },
      ],
      relatedTerms: ["Policy", "Coverage", "Premium", "Deductible", "Renewal"],
    },
  },
];
