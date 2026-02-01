export interface GlossaryTerm {
  term: string;
  definition: string;
  category: 'Auto' | 'Health' | 'Life' | 'Property' | 'General' | 'Claims' | 'Industry';
  relatedTerms?: string[];
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Accident",
    definition: "An unexpected event or circumstance without deliberate intent that results in injury, damage, or loss.",
    category: "General",
    relatedTerms: ["Claim", "Coverage", "Peril"]
  },
  {
    term: "Accident Insurance",
    definition: "Insurance coverage for unforeseen bodily injury resulting from an accident.",
    category: "Health",
    relatedTerms: ["Health Insurance", "Disability Insurance"]
  },
  {
    term: "Actuary",
    definition: "A business professional who analyzes probabilities of risk and risk management, including calculation of premiums, dividends, and other applicable insurance industry standards.",
    category: "Industry",
    relatedTerms: ["Premium", "Risk", "Underwriting"]
  },
  {
    term: "Adjuster",
    definition: "A person who investigates claims and recommends settlement options based on estimates of damage and insurance policies held.",
    category: "Claims",
    relatedTerms: ["Claim", "Settlement", "Loss"]
  },
  {
    term: "Actual Cash Value",
    definition: "The repayment value for indemnification due to loss or damage of property; in most cases it is replacement cost minus depreciation.",
    category: "Property",
    relatedTerms: ["Replacement Cost", "Depreciation", "Indemnity"]
  },
  {
    term: "Beneficiary",
    definition: "The person or entity designated to receive the benefits or proceeds from an insurance policy.",
    category: "Life",
    relatedTerms: ["Death Benefit", "Policy", "Insured"]
  },
  {
    term: "Claim",
    definition: "A formal request by a policyholder to an insurance company for coverage or compensation for a covered loss or policy event.",
    category: "Claims",
    relatedTerms: ["Adjuster", "Coverage", "Deductible"]
  },
  {
    term: "Collision Coverage",
    definition: "Insurance coverage that pays for damage to your vehicle resulting from a collision with another vehicle or object.",
    category: "Auto",
    relatedTerms: ["Comprehensive Coverage", "Deductible", "Premium"]
  },
  {
    term: "Comprehensive Coverage",
    definition: "Insurance coverage for damage to your vehicle from causes other than collision, such as theft, vandalism, fire, weather events, or hitting an animal.",
    category: "Auto",
    relatedTerms: ["Collision Coverage", "Deductible", "Premium"]
  },
  {
    term: "Copayment",
    definition: "A fixed amount you pay for a covered health care service, usually when you receive the service.",
    category: "Health",
    relatedTerms: ["Coinsurance", "Deductible", "Out-of-Pocket Maximum"]
  },
  {
    term: "Coverage",
    definition: "The scope of protection provided under an insurance policy, including the types of losses and risks that are covered.",
    category: "General",
    relatedTerms: ["Policy", "Exclusion", "Limit"]
  },
  {
    term: "Deductible",
    definition: "The amount you must pay out-of-pocket before your insurance coverage begins to pay for covered losses.",
    category: "General",
    relatedTerms: ["Premium", "Coverage", "Claim"]
  },
  {
    term: "Depreciation",
    definition: "The decrease in value of property over time due to wear, tear, age, or obsolescence.",
    category: "Property",
    relatedTerms: ["Actual Cash Value", "Replacement Cost"]
  },
  {
    term: "Exclusion",
    definition: "Specific conditions, circumstances, or types of losses that are not covered by an insurance policy.",
    category: "General",
    relatedTerms: ["Coverage", "Policy", "Endorsement"]
  },
  {
    term: "Endorsement",
    definition: "A written amendment or addition to an insurance policy that modifies the coverage, terms, or conditions.",
    category: "General",
    relatedTerms: ["Rider", "Policy", "Coverage"]
  },
  {
    term: "Grace Period",
    definition: "A specified period after a premium payment is due during which the policy remains in force without penalty.",
    category: "General",
    relatedTerms: ["Premium", "Lapse", "Policy"]
  },
  {
    term: "Hazard",
    definition: "A condition or situation that increases the likelihood or potential severity of a loss.",
    category: "General",
    relatedTerms: ["Risk", "Peril", "Underwriting"]
  },
  {
    term: "Indemnity",
    definition: "Compensation for loss or damage, restoring the insured to their financial position before the loss occurred.",
    category: "General",
    relatedTerms: ["Claim", "Loss", "Coverage"]
  },
  {
    term: "Insured",
    definition: "The person or entity covered by an insurance policy and protected against specified losses or risks.",
    category: "General",
    relatedTerms: ["Policyholder", "Beneficiary", "Coverage"]
  },
  {
    term: "Insurer",
    definition: "The insurance company that provides coverage and agrees to pay for covered losses in exchange for premium payments.",
    category: "General",
    relatedTerms: ["Policy", "Premium", "Coverage"]
  },
  {
    term: "Liability Coverage",
    definition: "Insurance that covers legal responsibility for injuries or damage caused to others or their property.",
    category: "General",
    relatedTerms: ["Liability Limit", "Premium", "Claim"]
  },
  {
    term: "Liability Limit",
    definition: "The maximum amount an insurance policy will pay for covered liability claims.",
    category: "General",
    relatedTerms: ["Liability Coverage", "Policy Limit", "Coverage"]
  },
  {
    term: "Lapse",
    definition: "The termination of an insurance policy due to non-payment of premiums or other policy requirements.",
    category: "General",
    relatedTerms: ["Grace Period", "Premium", "Policy"]
  },
  {
    term: "Loss",
    definition: "The basis of a claim for damages under the terms of an insurance policy.",
    category: "General",
    relatedTerms: ["Claim", "Coverage", "Indemnity"]
  },
  {
    term: "Peril",
    definition: "The cause of a possible loss, such as fire, theft, windstorm, or collision.",
    category: "General",
    relatedTerms: ["Hazard", "Risk", "Coverage"]
  },
  {
    term: "Policy",
    definition: "The written contract between the insurer and insured that outlines the terms, conditions, coverage, and exclusions of the insurance agreement.",
    category: "General",
    relatedTerms: ["Coverage", "Premium", "Endorsement"]
  },
  {
    term: "Policyholder",
    definition: "The person or entity that owns an insurance policy and is responsible for premium payments.",
    category: "General",
    relatedTerms: ["Insured", "Policy", "Premium"]
  },
  {
    term: "Premium",
    definition: "The amount paid by the policyholder to the insurance company for coverage, typically on a monthly, quarterly, or annual basis.",
    category: "General",
    relatedTerms: ["Policy", "Deductible", "Coverage"]
  },
  {
    term: "Replacement Cost",
    definition: "The cost to replace damaged or destroyed property with new property of similar kind and quality, without deduction for depreciation.",
    category: "Property",
    relatedTerms: ["Actual Cash Value", "Depreciation", "Coverage"]
  },
  {
    term: "Rider",
    definition: "An add-on provision to an insurance policy that provides additional coverage or modifies the standard policy terms.",
    category: "General",
    relatedTerms: ["Endorsement", "Policy", "Coverage"]
  },
  {
    term: "Risk",
    definition: "The chance of loss or the person, property, or entity insured under a policy.",
    category: "General",
    relatedTerms: ["Hazard", "Peril", "Underwriting"]
  },
  {
    term: "Subrogation",
    definition: "The right of an insurer to pursue a third party that caused an insurance loss to the insured, allowing the insurer to recover the amount paid to the insured.",
    category: "Claims",
    relatedTerms: ["Claim", "Loss", "Settlement"]
  },
  {
    term: "Term Life Insurance",
    definition: "Life insurance coverage for a specified period of time, providing a death benefit if the insured dies during the term.",
    category: "Life",
    relatedTerms: ["Whole Life Insurance", "Death Benefit", "Premium"]
  },
  {
    term: "Underwriting",
    definition: "The process by which an insurer evaluates the risk of insuring a person or property and determines coverage terms and premium rates.",
    category: "Industry",
    relatedTerms: ["Risk", "Premium", "Actuary"]
  },
  {
    term: "Uninsured Motorist Coverage",
    definition: "Insurance that covers you if you're in an accident caused by a driver who doesn't have liability insurance.",
    category: "Auto",
    relatedTerms: ["Liability Coverage", "Collision Coverage", "Premium"]
  },
  {
    term: "Whole Life Insurance",
    definition: "Permanent life insurance that provides coverage for the insured's entire lifetime and includes a cash value component.",
    category: "Life",
    relatedTerms: ["Term Life Insurance", "Cash Value", "Death Benefit"]
  },
  {
    term: "Coinsurance",
    definition: "A cost-sharing arrangement where the insured pays a specified percentage of covered expenses after the deductible is met.",
    category: "Health",
    relatedTerms: ["Copayment", "Deductible", "Out-of-Pocket Maximum"]
  },
  {
    term: "Out-of-Pocket Maximum",
    definition: "The most you have to pay for covered services in a plan year. After you reach this amount, the insurance pays 100% of covered services.",
    category: "Health",
    relatedTerms: ["Deductible", "Coinsurance", "Copayment"]
  },
  {
    term: "Pre-existing Condition",
    definition: "A health condition that existed before the start date of a new insurance policy.",
    category: "Health",
    relatedTerms: ["Coverage", "Exclusion", "Health Insurance"]
  },
  {
    term: "Umbrella Policy",
    definition: "Additional liability insurance that provides coverage beyond the limits of your standard policies.",
    category: "General",
    relatedTerms: ["Liability Coverage", "Liability Limit", "Premium"]
  },
  {
    term: "Flood Insurance",
    definition: "Specialized insurance coverage for property damage caused by flooding, typically not covered by standard homeowners insurance.",
    category: "Property",
    relatedTerms: ["Homeowners Insurance", "Coverage", "Exclusion"]
  },
  {
    term: "Homeowners Insurance",
    definition: "Insurance coverage that protects your home and personal property against damage, theft, and liability claims.",
    category: "Property",
    relatedTerms: ["Property Insurance", "Liability Coverage", "Deductible"]
  },
  {
    term: "Renters Insurance",
    definition: "Insurance coverage for tenants that protects personal property and provides liability coverage, but does not cover the building structure.",
    category: "Property",
    relatedTerms: ["Homeowners Insurance", "Liability Coverage", "Personal Property"]
  },
  {
    term: "Disability Insurance",
    definition: "Insurance that provides income replacement if you become unable to work due to illness or injury.",
    category: "Health",
    relatedTerms: ["Health Insurance", "Premium", "Benefit"]
  },
  {
    term: "Long-Term Care Insurance",
    definition: "Insurance that covers the cost of long-term care services, such as nursing home care or in-home assistance.",
    category: "Health",
    relatedTerms: ["Health Insurance", "Premium", "Benefit"]
  },
  {
    term: "Annuity",
    definition: "A financial product that provides regular payments to an individual, typically used for retirement income.",
    category: "Life",
    relatedTerms: ["Premium", "Benefit", "Policy"]
  },
  {
    term: "Cash Value",
    definition: "The savings component of a permanent life insurance policy that accumulates over time and can be borrowed against or withdrawn.",
    category: "Life",
    relatedTerms: ["Whole Life Insurance", "Universal Life Insurance", "Premium"]
  },
  {
    term: "Death Benefit",
    definition: "The amount paid to beneficiaries upon the death of the insured under a life insurance policy.",
    category: "Life",
    relatedTerms: ["Beneficiary", "Life Insurance", "Policy"]
  },
  {
    term: "Universal Life Insurance",
    definition: "A type of permanent life insurance with flexible premiums and death benefits, along with a cash value component.",
    category: "Life",
    relatedTerms: ["Whole Life Insurance", "Cash Value", "Premium"]
  },
  {
    term: "Variable Life Insurance",
    definition: "Permanent life insurance where the cash value is invested in various investment options, with returns varying based on performance.",
    category: "Life",
    relatedTerms: ["Universal Life Insurance", "Cash Value", "Investment"]
  }
];

export const categoryColors: Record<string, string> = {
  Auto: "oklch(0.58 0.12 35)",
  Health: "oklch(0.62 0.10 120)",
  Life: "oklch(0.72 0.11 75)",
  Property: "oklch(0.52 0.08 195)",
  General: "oklch(0.48 0.08 260)",
  Claims: "oklch(0.65 0.14 25)",
  Industry: "oklch(0.45 0.05 240)"
};

export const categoryIcons: Record<string, string> = {
  Auto: "/images/category-auto.png",
  Health: "/images/category-health.png",
  Life: "/images/category-life.png",
  Property: "/images/category-property.png",
  General: "",
  Claims: "",
  Industry: ""
};
