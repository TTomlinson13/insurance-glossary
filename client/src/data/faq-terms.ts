// FAQ structured data for top 20 most-viewed glossary terms
// These FAQs help capture "People Also Ask" boxes in Google search results

export interface TermFAQ {
  term: string;
  questions: {
    question: string;
    answer: string;
  }[];
}

export const termFAQs: TermFAQ[] = [
  {
    term: "Deductible",
    questions: [
      {
        question: "What is a deductible in insurance?",
        answer: "A deductible is the amount you must pay out-of-pocket before your insurance coverage begins to pay for covered losses. For example, if you have a $500 deductible and file a claim for $2,000 in damages, you pay the first $500 and your insurance covers the remaining $1,500."
      },
      {
        question: "How does a higher deductible affect my premium?",
        answer: "Choosing a higher deductible typically lowers your insurance premium because you're agreeing to pay more out-of-pocket before insurance kicks in. This reduces the insurer's risk and they pass those savings to you through lower monthly or annual premiums."
      },
      {
        question: "Do I pay a deductible every time I file a claim?",
        answer: "Yes, in most cases you pay your deductible each time you file a separate claim. However, some policies have annual deductibles (common in health insurance) where you only pay once per year regardless of how many claims you file."
      }
    ]
  },
  {
    term: "Premium",
    questions: [
      {
        question: "What is an insurance premium?",
        answer: "An insurance premium is the amount you pay to an insurance company to keep your policy active. Premiums can be paid monthly, quarterly, semi-annually, or annually depending on your policy terms and payment preferences."
      },
      {
        question: "What factors affect my insurance premium?",
        answer: "Insurance premiums are affected by multiple factors including your age, location, coverage amount, deductible level, claims history, credit score (in some states), and risk factors specific to the type of insurance (driving record for auto, health conditions for health insurance, home age for homeowners insurance)."
      },
      {
        question: "Can my premium change during my policy term?",
        answer: "For most policies, premiums are locked in for the policy term (typically 6 or 12 months). However, premiums can change at renewal based on claims filed, changes in risk factors, or market conditions. Some policies like health insurance may have mid-term adjustments."
      }
    ]
  },
  {
    term: "Claim",
    questions: [
      {
        question: "What is an insurance claim?",
        answer: "An insurance claim is a formal request by a policyholder to an insurance company for coverage or compensation for a covered loss or policy event. This initiates the process where the insurer investigates and determines whether to approve payment."
      },
      {
        question: "How long does it take to process an insurance claim?",
        answer: "Claim processing time varies by type and complexity. Simple claims (like minor auto damage) may be processed in days, while complex claims (like major property damage or disputed liability) can take weeks or months. Most insurers aim to respond within 30 days."
      },
      {
        question: "What happens if my claim is denied?",
        answer: "If your claim is denied, the insurer must provide a written explanation citing the specific policy language or exclusion. You can appeal the decision by providing additional documentation, requesting a review, or filing a complaint with your state insurance department if you believe the denial is unfair."
      }
    ]
  },
  {
    term: "Coverage",
    questions: [
      {
        question: "What does insurance coverage mean?",
        answer: "Insurance coverage refers to the scope of protection provided under an insurance policy, including the types of losses and risks that are covered, the dollar limits of protection, and any conditions or exclusions that apply."
      },
      {
        question: "How do I know what my policy covers?",
        answer: "Your policy declarations page lists your coverage types and limits. The full policy document details what is and isn't covered, including exclusions and conditions. You can also contact your insurance agent or company representative for clarification on specific coverage questions."
      },
      {
        question: "Can I add more coverage to my existing policy?",
        answer: "Yes, most policies allow you to add coverage through endorsements or riders. Common additions include increasing liability limits, adding flood or earthquake coverage to homeowners insurance, or adding rental car coverage to auto insurance. Additional coverage typically increases your premium."
      }
    ]
  },
  {
    term: "Liability Insurance",
    questions: [
      {
        question: "What is liability insurance?",
        answer: "Liability insurance protects you financially if you're legally responsible for causing injury to another person or damage to their property. It covers legal defense costs and any settlements or judgments up to your policy limits."
      },
      {
        question: "How much liability insurance do I need?",
        answer: "Experts recommend liability coverage equal to your net worth plus future earnings potential. Minimum state requirements for auto insurance are often insufficient. Many people carry $100,000-$300,000 per person and $300,000-$500,000 per accident, plus an umbrella policy for additional protection."
      },
      {
        question: "Does liability insurance cover my own injuries?",
        answer: "No, liability insurance only covers injuries or damage you cause to others. To cover your own injuries or property damage, you need other coverage types like collision/comprehensive (auto), medical payments coverage, or health insurance."
      }
    ]
  },
  {
    term: "Copayment",
    questions: [
      {
        question: "What is a copayment in health insurance?",
        answer: "A copayment (or copay) is a fixed amount you pay for a covered health care service, usually when you receive the service. For example, you might pay a $30 copay for a doctor's visit or $10 for a prescription medication."
      },
      {
        question: "What's the difference between a copay and coinsurance?",
        answer: "A copay is a fixed dollar amount ($20, $50, etc.), while coinsurance is a percentage of the cost (20%, 30%, etc.). Copays are typically used for routine services like doctor visits, while coinsurance applies after you meet your deductible for larger expenses like hospital stays."
      },
      {
        question: "Do copays count toward my deductible?",
        answer: "Usually no. Copays typically don't count toward your deductible, but they do count toward your out-of-pocket maximum. However, plan rules vary, so check your specific policy documents or contact your insurer to confirm."
      }
    ]
  },
  {
    term: "Beneficiary",
    questions: [
      {
        question: "What is a beneficiary in life insurance?",
        answer: "A beneficiary is the person or entity you designate to receive the death benefit from your life insurance policy when you die. You can name one or multiple beneficiaries and specify what percentage each receives."
      },
      {
        question: "Can I change my beneficiary after buying a policy?",
        answer: "Yes, most life insurance policies allow you to change beneficiaries at any time by completing a beneficiary change form with your insurance company. It's important to review and update beneficiaries after major life events like marriage, divorce, or the birth of a child."
      },
      {
        question: "What happens if my beneficiary dies before me?",
        answer: "If your primary beneficiary dies before you and you haven't named a contingent (backup) beneficiary, the death benefit typically goes to your estate and is distributed according to your will or state inheritance laws. It's wise to always name contingent beneficiaries."
      }
    ]
  },
  {
    term: "Underwriting",
    questions: [
      {
        question: "What is underwriting in insurance?",
        answer: "Underwriting is the process insurance companies use to evaluate risk and determine whether to offer coverage, at what price, and under what terms. Underwriters analyze factors like age, health, driving record, or property condition to assess the likelihood of claims."
      },
      {
        question: "How long does underwriting take?",
        answer: "Underwriting timeframes vary by insurance type. Auto and homeowners insurance may be instant or take a few days. Life insurance underwriting can take 2-8 weeks depending on whether medical exams are required. Simplified or accelerated underwriting can be faster."
      },
      {
        question: "Can I be denied coverage during underwriting?",
        answer: "Yes, insurers can deny coverage if they determine the risk is too high or doesn't meet their underwriting guidelines. Common reasons include poor health (life insurance), bad driving record (auto), high-risk property location (homeowners), or previous claims history."
      }
    ]
  },
  {
    term: "Exclusion",
    questions: [
      {
        question: "What is an exclusion in insurance?",
        answer: "An exclusion is a specific condition, circumstance, or type of loss that is not covered by an insurance policy. Exclusions are listed in your policy documents and define the limits of your coverage."
      },
      {
        question: "What are common insurance exclusions?",
        answer: "Common exclusions include intentional damage, wear and tear, flood and earthquake (in standard homeowners policies), acts of war, nuclear incidents, and pre-existing conditions (in some health policies). Exclusions vary by policy type and insurer."
      },
      {
        question: "Can I get coverage for excluded items?",
        answer: "Sometimes yes. Many exclusions can be covered by purchasing separate policies or endorsements. For example, flood insurance is excluded from homeowners policies but available through the National Flood Insurance Program. Earthquake coverage can be added as an endorsement."
      }
    ]
  },
  {
    term: "Policyholder",
    questions: [
      {
        question: "What is a policyholder?",
        answer: "A policyholder is the person or entity that owns an insurance policy. The policyholder is responsible for paying premiums and has the right to make changes to the policy, file claims, and receive benefits according to the policy terms."
      },
      {
        question: "Is the policyholder always the insured person?",
        answer: "Not always. In life insurance, the policyholder (owner) may be different from the insured person. For example, a parent might own a policy on their child's life. In auto insurance, the policyholder typically owns the vehicle and policy, but may add other drivers as insured."
      },
      {
        question: "Can I transfer policy ownership to someone else?",
        answer: "Yes, most policies allow ownership transfer through an assignment or change of ownership form. This is common in life insurance for estate planning purposes. However, some restrictions may apply, and the insurance company must approve the transfer."
      }
    ]
  },
  {
    term: "Replacement Cost",
    questions: [
      {
        question: "What is replacement cost in insurance?",
        answer: "Replacement cost is the amount it would cost to replace damaged or destroyed property with new property of similar kind and quality, without deducting for depreciation. This provides more comprehensive coverage than actual cash value."
      },
      {
        question: "What's the difference between replacement cost and actual cash value?",
        answer: "Replacement cost pays to replace your property with new items, while actual cash value deducts depreciation based on age and condition. For example, a 5-year-old roof damaged in a storm would be replaced with a new roof under replacement cost, but you'd only receive the depreciated value under actual cash value."
      },
      {
        question: "Does replacement cost coverage cost more?",
        answer: "Yes, replacement cost coverage typically has higher premiums than actual cash value because it provides more comprehensive protection. However, many homeowners find the extra cost worthwhile to avoid out-of-pocket expenses for depreciation when replacing damaged items."
      }
    ]
  },
  {
    term: "Rider",
    questions: [
      {
        question: "What is a rider in insurance?",
        answer: "A rider (also called an endorsement) is an amendment or addition to an insurance policy that modifies coverage, adds benefits, or changes terms. Riders allow you to customize your policy to better fit your specific needs."
      },
      {
        question: "What are common insurance riders?",
        answer: "Common riders include accidental death benefit (life insurance), waiver of premium (continues coverage if you become disabled), scheduled personal property (covers specific valuable items), and long-term care rider (adds nursing home coverage to life insurance)."
      },
      {
        question: "Do riders increase my premium?",
        answer: "Yes, most riders increase your premium because they add coverage or benefits beyond the base policy. The cost varies depending on the type of rider and the additional risk it covers. Some riders like guaranteed insurability may have minimal cost."
      }
    ]
  },
  {
    term: "Coinsurance",
    questions: [
      {
        question: "What is coinsurance in health insurance?",
        answer: "Coinsurance is the percentage of covered medical costs you pay after meeting your deductible. For example, with 20% coinsurance, you pay 20% of the bill and your insurance pays 80% until you reach your out-of-pocket maximum."
      },
      {
        question: "How is coinsurance different from a copay?",
        answer: "Coinsurance is a percentage of the cost (like 20%), while a copay is a fixed dollar amount (like $30). Coinsurance typically applies to larger expenses after your deductible is met, while copays are fixed amounts for specific services like doctor visits or prescriptions."
      },
      {
        question: "Does coinsurance apply to all medical services?",
        answer: "Not always. Many health plans cover preventive care at 100% with no coinsurance. Other services may have different coinsurance rates - for example, 20% for in-network providers and 40% for out-of-network. Check your policy's summary of benefits for specific coinsurance rates."
      }
    ]
  },
  {
    term: "Out-of-Pocket Maximum",
    questions: [
      {
        question: "What is an out-of-pocket maximum?",
        answer: "The out-of-pocket maximum is the most you'll pay for covered health care services in a plan year. After you reach this limit, your insurance pays 100% of covered services for the rest of the year. This includes deductibles, copays, and coinsurance."
      },
      {
        question: "What doesn't count toward my out-of-pocket maximum?",
        answer: "Premiums, balance billing charges, services not covered by your plan, and out-of-network care (in most plans) don't count toward your out-of-pocket maximum. Some plans also exclude certain services or have separate out-of-pocket maximums for prescription drugs."
      },
      {
        question: "How does the out-of-pocket maximum protect me?",
        answer: "The out-of-pocket maximum protects you from catastrophic medical costs. Even if you have a serious illness or injury requiring extensive treatment, once you reach this limit, you won't pay any more for covered services that year, providing financial protection and peace of mind."
      }
    ]
  },
  {
    term: "Collision Coverage",
    questions: [
      {
        question: "What is collision coverage in auto insurance?",
        answer: "Collision coverage pays for damage to your vehicle resulting from a collision with another vehicle or object (like a tree, guardrail, or building), regardless of who is at fault. It's optional coverage beyond state-required minimums."
      },
      {
        question: "Do I need collision coverage if I have an older car?",
        answer: "It depends on your car's value and your financial situation. If your car is worth less than $3,000-$4,000, collision coverage may not be cost-effective since you'll pay a deductible and the maximum payout is the car's actual cash value. Consider dropping collision on older, low-value vehicles."
      },
      {
        question: "Does collision coverage pay if the other driver is at fault?",
        answer: "Yes, collision coverage pays regardless of fault. However, if the other driver is at fault and has insurance, their liability coverage should pay for your damages. You might use your collision coverage to get repairs started quickly, and your insurer will seek reimbursement from the at-fault driver's insurance."
      }
    ]
  },
  {
        term: "Comprehensive Coverage",
    questions: [
      {
        question: "What is comprehensive coverage in auto insurance?",
        answer: "Comprehensive coverage pays for damage to your vehicle from causes other than collision, such as theft, vandalism, fire, weather events (hail, floods), falling objects, or hitting an animal. It's often called 'other than collision' coverage."
      },
      {
        question: "Is comprehensive coverage required?",
        answer: "Comprehensive coverage is not required by law, but it may be required by your lender if you have a car loan or lease. Even if not required, it's often recommended to protect against unexpected non-collision damage, especially for newer or valuable vehicles."
      },
      {
        question: "Does comprehensive coverage cover hitting a deer?",
        answer: "Yes, hitting an animal (including deer) is covered under comprehensive coverage, not collision. This is one of the most common comprehensive claims. You'll pay your comprehensive deductible, and your insurer will cover the remaining repair costs up to your vehicle's actual cash value."
      }
    ]
  },
  {
    term: "Actual Cash Value",
    questions: [
      {
        question: "What is actual cash value in insurance?",
        answer: "Actual cash value (ACV) is the replacement cost of property minus depreciation. It represents what your property is worth at the time of loss, accounting for age, wear, and condition. ACV is typically less than what you originally paid or what it would cost to replace with new."
      },
      {
        question: "How is actual cash value calculated?",
        answer: "ACV is calculated by taking the replacement cost of the item and subtracting depreciation based on age, condition, and expected lifespan. For example, a 5-year-old roof with a 20-year lifespan would be depreciated by 25%, so if replacement costs $10,000, the ACV would be $7,500."
      },
      {
        question: "Should I choose actual cash value or replacement cost coverage?",
        answer: "Replacement cost coverage is generally better because it pays to replace items with new ones without depreciation deduction. ACV coverage has lower premiums but may leave you with significant out-of-pocket costs. Consider replacement cost for your home and valuable possessions."
      }
    ]
  },
  {
    term: "Depreciation",
    questions: [
      {
        question: "What is depreciation in insurance?",
        answer: "Depreciation is the decrease in value of property over time due to wear, tear, age, or obsolescence. Insurance companies use depreciation to calculate actual cash value payouts, reducing the replacement cost by the amount the item has depreciated."
      },
      {
        question: "What items depreciate the fastest?",
        answer: "Electronics, appliances, and vehicles typically depreciate fastest. A new car can lose 20-30% of its value in the first year. Roofs, HVAC systems, and other home components depreciate based on their expected lifespan. Some items like land, jewelry, and fine art may appreciate or hold value."
      },
      {
        question: "Can I avoid depreciation in insurance claims?",
        answer: "Yes, by purchasing replacement cost coverage instead of actual cash value coverage. Replacement cost policies pay to replace damaged items with new ones without deducting for depreciation. This costs more in premiums but provides better protection and avoids out-of-pocket depreciation costs."
      }
    ]
  },
  {
    term: "Endorsement",
    questions: [
      {
        question: "What is an endorsement in insurance?",
        answer: "An endorsement (also called a rider) is a written amendment or addition to an insurance policy that modifies the coverage, terms, or conditions. Endorsements can add coverage, remove coverage, change limits, or update policy information like addresses or named insureds."
      },
      {
        question: "When do I need an endorsement?",
        answer: "You need an endorsement when you want to change your policy mid-term - for example, adding a teen driver to auto insurance, increasing liability limits, adding scheduled personal property coverage for jewelry, or updating your address. Some changes require endorsements rather than waiting for renewal."
      },
      {
        question: "Do endorsements cost extra?",
        answer: "It depends on the type of endorsement. Endorsements that add coverage or increase limits typically increase your premium. Endorsements that remove coverage or reduce limits may decrease your premium. Administrative changes like address updates usually have no cost or a small processing fee."
      }
    ]
  },
  {
    term: "Grace Period",
    questions: [
      {
        question: "What is a grace period in insurance?",
        answer: "A grace period is a specified length of time after your premium payment is due during which your policy remains in force even if you haven't paid. If you pay during the grace period, your coverage continues without interruption. Grace periods typically range from 10 to 31 days."
      },
      {
        question: "What happens if I don't pay during the grace period?",
        answer: "If you don't pay your premium by the end of the grace period, your policy will lapse (terminate). You'll lose coverage, and any claims during the lapsed period won't be covered. You may be able to reinstate the policy by paying overdue premiums, but there may be penalties or a waiting period."
      },
      {
        question: "Does the grace period vary by insurance type?",
        answer: "Yes, grace periods vary. Health insurance typically has a 30-day grace period. Life insurance may have 30-31 days. Auto and homeowners insurance often have shorter grace periods (10-20 days) or none at all. Check your specific policy documents for your grace period terms."
      }
    ]
  }
];
