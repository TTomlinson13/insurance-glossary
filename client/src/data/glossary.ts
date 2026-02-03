export interface GlossaryTerm {
  term: string;
  definition: string;
  category: 'Auto' | 'Health' | 'Life' | 'Property' | 'General' | 'Claims' | 'Industry' | 'Business';
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
    term: "Motorcycle Insurance",
    definition: "Specialized insurance coverage for motorcycles including liability, collision, comprehensive, uninsured motorist, and optional coverages like accessory coverage and roadside assistance.",
    category: "Auto",
    relatedTerms: ["Auto Insurance", "Collision Coverage", "Comprehensive Coverage"]
  },
  {
    term: "Golf Cart Insurance",
    definition: "Insurance coverage for golf carts used on golf courses or private property, typically including liability, physical damage, and medical payments. May be covered under homeowners insurance or require separate policy.",
    category: "Auto",
    relatedTerms: ["Auto Insurance", "Liability Coverage", "Homeowners Insurance"]
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
    term: "Jewelry Insurance",
    definition: "Specialized insurance coverage for valuable jewelry, watches, and gemstones that provides protection against loss, theft, damage, and mysterious disappearance. Often purchased as a scheduled personal property endorsement to homeowners or renters insurance.",
    category: "Property",
    relatedTerms: ["Homeowners Insurance", "Personal Property", "Scheduled Personal Property"]
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
  },
  {
    term: "Business Interruption Insurance",
    definition: "Coverage that compensates a business for lost income during periods when operations are suspended due to covered perils such as fire, natural disaster, or other insured events.",
    category: "Business",
    relatedTerms: ["Commercial Property Insurance", "Extra Expense Coverage", "Business Income"]
  },
  {
    term: "Commercial General Liability",
    definition: "Insurance that protects businesses against claims of bodily injury, property damage, personal injury, and advertising injury that occur during normal business operations.",
    category: "Business",
    relatedTerms: ["Professional Liability", "Product Liability", "Liability Coverage"]
  },
  {
    term: "Workers' Compensation Insurance",
    definition: "Required insurance that provides medical benefits and wage replacement to employees who are injured or become ill in the course of employment.",
    category: "Business",
    relatedTerms: ["Employer's Liability", "Occupational Injury", "Disability Insurance"]
  },
  {
    term: "Professional Liability Insurance",
    definition: "Also known as Errors and Omissions (E&O) insurance, this coverage protects professionals against claims of negligence, mistakes, or failure to perform professional duties.",
    category: "Business",
    relatedTerms: ["Errors and Omissions", "Malpractice Insurance", "Commercial General Liability"]
  },
  {
    term: "Commercial Property Insurance",
    definition: "Insurance that covers buildings, equipment, inventory, and other physical assets owned or used by a business against damage from fire, theft, vandalism, and other covered perils.",
    category: "Business",
    relatedTerms: ["Business Interruption Insurance", "Property Insurance", "Replacement Cost"]
  },
  {
    term: "Cyber Liability Insurance",
    definition: "Coverage that protects businesses against losses from data breaches, cyberattacks, network security failures, and privacy violations.",
    category: "Business",
    relatedTerms: ["Data Breach", "Network Security", "Professional Liability Insurance"]
  },
  {
    term: "Business Owners Policy",
    definition: "A bundled insurance package (BOP) that combines commercial property insurance, general liability coverage, and business interruption insurance at a discounted rate for small to medium-sized businesses.",
    category: "Business",
    relatedTerms: ["Commercial General Liability", "Commercial Property Insurance", "Business Interruption Insurance"]
  },
  {
    term: "Directors and Officers Insurance",
    definition: "Liability insurance that protects the personal assets of corporate directors and officers if they are sued for alleged wrongful acts in managing a company.",
    category: "Business",
    relatedTerms: ["Employment Practices Liability", "Fiduciary Liability", "Professional Liability Insurance"]
  },
  {
    term: "Employment Practices Liability Insurance",
    definition: "Coverage that protects businesses against claims by employees alleging discrimination, wrongful termination, harassment, or other employment-related issues.",
    category: "Business",
    relatedTerms: ["Directors and Officers Insurance", "Workers' Compensation Insurance", "Liability Coverage"]
  },
  {
    term: "Product Liability Insurance",
    definition: "Coverage that protects manufacturers, distributors, and retailers against claims of injury or damage caused by defective products.",
    category: "Business",
    relatedTerms: ["Commercial General Liability", "Professional Liability Insurance", "Liability Coverage"]
  },
  {
    term: "Commercial Auto Insurance",
    definition: "Insurance coverage for vehicles owned or used by a business, providing liability, collision, and comprehensive coverage for business vehicles and drivers.",
    category: "Business",
    relatedTerms: ["Auto Insurance", "Fleet Insurance", "Liability Coverage"]
  },
  {
    term: "Key Person Insurance",
    definition: "Life or disability insurance purchased by a business on the life of an owner, founder, or key employee whose death or disability would significantly impact the company's operations and finances.",
    category: "Business",
    relatedTerms: ["Life Insurance", "Disability Insurance", "Business Continuation"]
  },
  {
    term: "Fidelity Bond",
    definition: "Insurance that protects a business against losses caused by employee dishonesty, theft, fraud, or embezzlement.",
    category: "Business",
    relatedTerms: ["Crime Insurance", "Employee Dishonesty", "Commercial General Liability"]
  },
  {
    term: "Surety Bond",
    definition: "A three-party agreement where the surety guarantees to the obligee that the principal will fulfill their contractual obligations, commonly required in construction and government contracts.",
    category: "Business",
    relatedTerms: ["Performance Bond", "Payment Bond", "Contract Bond"]
  },
  {
    term: "Errors and Omissions Insurance",
    definition: "Professional liability coverage that protects service providers against claims of inadequate work, negligent actions, or failure to perform services as promised.",
    category: "Business",
    relatedTerms: ["Professional Liability Insurance", "Malpractice Insurance", "Commercial General Liability"]
  },
  {
    term: "Commercial Umbrella Insurance",
    definition: "Additional liability coverage that extends beyond the limits of a business's primary liability policies, providing extra protection against large claims.",
    category: "Business",
    relatedTerms: ["Umbrella Policy", "Commercial General Liability", "Excess Liability"]
  },
  {
    term: "Inland Marine Insurance",
    definition: "Coverage for movable property, equipment, and goods in transit over land, including tools, equipment, and merchandise being transported or stored off-premises.",
    category: "Business",
    relatedTerms: ["Commercial Property Insurance", "Equipment Coverage", "Transit Insurance"]
  },
  {
    term: "Builders Risk Insurance",
    definition: "Specialized property insurance that covers buildings under construction, including materials, fixtures, and equipment, against damage from fire, theft, vandalism, and weather.",
    category: "Business",
    relatedTerms: ["Commercial Property Insurance", "Construction Insurance", "Property Insurance"]
  },
  {
    term: "Crime Insurance",
    definition: "Coverage that protects businesses against losses from criminal acts such as theft, burglary, robbery, forgery, and computer fraud.",
    category: "Business",
    relatedTerms: ["Fidelity Bond", "Employee Dishonesty", "Cyber Liability Insurance"]
  },
  {
    term: "Liquor Liability Insurance",
    definition: "Coverage for businesses that manufacture, sell, serve, or distribute alcoholic beverages, protecting against claims arising from alcohol-related incidents.",
    category: "Business",
    relatedTerms: ["Commercial General Liability", "Dram Shop Liability", "Hospitality Insurance"]
  },
  {
    term: "Malpractice Insurance",
    definition: "Professional liability coverage for licensed professionals such as doctors, lawyers, and accountants, protecting against claims of negligence or inadequate professional services.",
    category: "Business",
    relatedTerms: ["Professional Liability Insurance", "Errors and Omissions Insurance", "Medical Malpractice"]
  },
  {
    term: "Pollution Liability Insurance",
    definition: "Coverage that protects businesses against claims and cleanup costs related to pollution, contamination, or environmental damage caused by business operations.",
    category: "Business",
    relatedTerms: ["Environmental Liability", "Commercial General Liability", "Cleanup Costs"]
  },
  {
    term: "Fiduciary Liability Insurance",
    definition: "Coverage that protects those who manage employee benefit plans against claims of mismanagement, breach of fiduciary duty, or errors in plan administration.",
    category: "Business",
    relatedTerms: ["Directors and Officers Insurance", "ERISA", "Employee Benefits"]
  },
  {
    term: "Business Income Coverage",
    definition: "Insurance that reimburses a business for lost income and continuing expenses during periods when operations are suspended due to covered property damage.",
    category: "Business",
    relatedTerms: ["Business Interruption Insurance", "Extra Expense Coverage", "Commercial Property Insurance"]
  },
  {
    term: "Extra Expense Coverage",
    definition: "Insurance that pays for additional costs incurred to continue business operations following a covered loss, such as renting temporary space or equipment.",
    category: "Business",
    relatedTerms: ["Business Interruption Insurance", "Business Income Coverage", "Commercial Property Insurance"]
  },
  {
    term: "Equipment Breakdown Insurance",
    definition: "Coverage for repair or replacement of mechanical and electrical equipment that breaks down due to internal causes such as motor burnout, electrical arcing, or mechanical failure.",
    category: "Business",
    relatedTerms: ["Commercial Property Insurance", "Boiler and Machinery Insurance", "Business Interruption Insurance"]
  },
  {
    term: "Garage Liability Insurance",
    definition: "Specialized coverage for auto repair shops, dealerships, and parking garages, protecting against liability claims arising from business operations and customer vehicles.",
    category: "Business",
    relatedTerms: ["Commercial Auto Insurance", "Garagekeepers Insurance", "Commercial General Liability"]
  },
  {
    term: "Garagekeepers Insurance",
    definition: "Coverage that protects auto repair shops and parking facilities against liability for damage to customers' vehicles while in their care, custody, or control.",
    category: "Business",
    relatedTerms: ["Garage Liability Insurance", "Bailee Coverage", "Commercial General Liability"]
  },
  {
    term: "Media Liability Insurance",
    definition: "Coverage for businesses involved in advertising, publishing, or broadcasting, protecting against claims of libel, slander, copyright infringement, and invasion of privacy.",
    category: "Business",
    relatedTerms: ["Professional Liability Insurance", "Cyber Liability Insurance", "Advertising Injury"]
  },
  {
    term: "Contingent Business Interruption",
    definition: "Coverage that protects a business against income loss when operations are disrupted due to damage at a supplier's, customer's, or other dependent business location.",
    category: "Business",
    relatedTerms: ["Business Interruption Insurance", "Supply Chain Insurance", "Business Income Coverage"]
  },
  {
    term: "Restaurant Insurance",
    definition: "Specialized insurance package for restaurants and food service businesses, typically including general liability, property coverage, liquor liability, and food contamination coverage.",
    category: "Business",
    relatedTerms: ["Liquor Liability Insurance", "Commercial General Liability", "Business Owners Policy"]
  },
  {
    term: "Contractor Insurance",
    definition: "Comprehensive coverage for construction contractors including general liability, workers' compensation, tools and equipment coverage, and professional liability for design-build projects.",
    category: "Business",
    relatedTerms: ["Builders Risk Insurance", "Commercial General Liability", "Workers' Compensation Insurance"]
  },
  {
    term: "Technology Errors and Omissions",
    definition: "Specialized professional liability insurance for technology companies, covering claims arising from software failures, data loss, system downtime, or failure to deliver promised services.",
    category: "Business",
    relatedTerms: ["Professional Liability Insurance", "Cyber Liability Insurance", "Errors and Omissions Insurance"]
  },
  {
    term: "Retail Insurance",
    definition: "Insurance coverage designed for retail businesses, including property coverage for inventory and fixtures, general liability, business interruption, and employee dishonesty coverage.",
    category: "Business",
    relatedTerms: ["Commercial Property Insurance", "Business Owners Policy", "Crime Insurance"]
  },
  {
    term: "Medical Malpractice Insurance",
    definition: "Professional liability coverage for healthcare providers protecting against claims of medical negligence, errors in diagnosis or treatment, and failure to obtain informed consent.",
    category: "Business",
    relatedTerms: ["Malpractice Insurance", "Professional Liability Insurance", "Healthcare Insurance"]
  },
  {
    term: "Legal Malpractice Insurance",
    definition: "Professional liability insurance for attorneys and law firms covering claims of negligence, missed deadlines, conflicts of interest, or errors in legal advice.",
    category: "Business",
    relatedTerms: ["Malpractice Insurance", "Professional Liability Insurance", "Errors and Omissions Insurance"]
  },
  {
    term: "Salon and Spa Insurance",
    definition: "Specialized coverage for beauty and wellness businesses including general liability, professional liability for services, property coverage, and product liability.",
    category: "Business",
    relatedTerms: ["Professional Liability Insurance", "Commercial General Liability", "Product Liability Insurance"]
  },
  {
    term: "Real Estate Errors and Omissions",
    definition: "Professional liability insurance for real estate agents and brokers covering claims of negligence, misrepresentation, failure to disclose, or errors in transactions.",
    category: "Business",
    relatedTerms: ["Professional Liability Insurance", "Errors and Omissions Insurance", "Real Estate Insurance"]
  },
  {
    term: "Trucking Insurance",
    definition: "Specialized commercial auto insurance for trucking companies including liability coverage, physical damage, cargo insurance, and non-trucking liability for owner-operators.",
    category: "Business",
    relatedTerms: ["Commercial Auto Insurance", "Cargo Insurance", "Motor Truck Cargo"]
  },
  {
    term: "Janitorial Insurance",
    definition: "Coverage for cleaning and janitorial services including general liability, workers' compensation, commercial auto for service vehicles, and bonding for employee honesty.",
    category: "Business",
    relatedTerms: ["Commercial General Liability", "Workers' Compensation Insurance", "Fidelity Bond"]
  },
  {
    term: "Landscaping Insurance",
    definition: "Insurance for landscaping businesses covering general liability, workers' compensation, commercial auto, inland marine for equipment, and pollution liability for pesticide use.",
    category: "Business",
    relatedTerms: ["Commercial General Liability", "Inland Marine Insurance", "Pollution Liability Insurance"]
  },
  {
    term: "Hospitality Insurance",
    definition: "Comprehensive coverage for hotels, motels, and lodging businesses including property, general liability, liquor liability, employment practices liability, and business interruption.",
    category: "Business",
    relatedTerms: ["Commercial Property Insurance", "Liquor Liability Insurance", "Business Interruption Insurance"]
  },
  {
    term: "Daycare Insurance",
    definition: "Specialized coverage for childcare facilities including general liability, abuse and molestation coverage, property insurance, and professional liability for educational services.",
    category: "Business",
    relatedTerms: ["Commercial General Liability", "Professional Liability Insurance", "Abuse and Molestation Coverage"]
  },
  {
    term: "Fitness Center Insurance",
    definition: "Coverage for gyms and fitness facilities including general liability, professional liability for trainers, property coverage for equipment, and sexual abuse and molestation coverage.",
    category: "Business",
    relatedTerms: ["Commercial General Liability", "Professional Liability Insurance", "Equipment Coverage"]
  },
  {
    term: "Event Insurance",
    definition: "Short-term coverage for special events including general liability, liquor liability, event cancellation, and property coverage for rented equipment and venues.",
    category: "Business",
    relatedTerms: ["Commercial General Liability", "Liquor Liability Insurance", "Cancellation Insurance"]
  },
  {
    term: "Reinsurance",
    definition: "Insurance purchased by insurance companies to transfer portions of their risk portfolios to other insurers, reducing the likelihood of large payouts from claims.",
    category: "Industry",
    relatedTerms: ["Risk Transfer", "Ceding Company", "Retrocession"]
  },
  {
    term: "Loss Ratio",
    definition: "The ratio of losses paid plus loss reserves to premiums earned, used by insurers to measure underwriting profitability and pricing adequacy.",
    category: "Industry",
    relatedTerms: ["Combined Ratio", "Underwriting", "Premium"]
  },
  {
    term: "Combined Ratio",
    definition: "The sum of the loss ratio and expense ratio, measuring an insurer's overall underwriting profitability. A ratio below 100% indicates underwriting profit.",
    category: "Industry",
    relatedTerms: ["Loss Ratio", "Expense Ratio", "Underwriting"]
  },
  {
    term: "Captive Insurance",
    definition: "An insurance company created and owned by a business or group of businesses to insure their own risks, providing more control over coverage and potential cost savings.",
    category: "Industry",
    relatedTerms: ["Self-Insurance", "Risk Retention", "Alternative Risk Transfer"]
  },
  {
    term: "Surplus Lines Insurance",
    definition: "Insurance coverage from non-admitted insurers for risks that standard insurance companies won't cover, often for unusual or high-risk exposures.",
    category: "Industry",
    relatedTerms: ["Non-Admitted Insurer", "Excess and Surplus", "Specialty Insurance"]
  },
  {
    term: "Loss Reserve",
    definition: "Funds set aside by an insurance company to pay future claims that have been reported but not yet settled (case reserves) or that have occurred but not been reported (IBNR).",
    category: "Industry",
    relatedTerms: ["IBNR", "Case Reserve", "Claims"]
  },
  {
    term: "IBNR",
    definition: "Incurred But Not Reported - reserves set aside for insurance claims that have occurred but have not yet been reported to the insurer.",
    category: "Industry",
    relatedTerms: ["Loss Reserve", "Claims", "Actuarial"]
  },
  {
    term: "Admitted Insurer",
    definition: "An insurance company licensed and approved by a state's insurance department to do business in that state, subject to state regulation and guaranty fund protection.",
    category: "Industry",
    relatedTerms: ["Non-Admitted Insurer", "State Insurance Department", "Surplus Lines Insurance"]
  },
  {
    term: "Non-Admitted Insurer",
    definition: "An insurance company not licensed in a particular state but allowed to provide surplus lines coverage for risks that admitted insurers won't cover.",
    category: "Industry",
    relatedTerms: ["Admitted Insurer", "Surplus Lines Insurance", "Excess and Surplus"]
  },
  {
    term: "Binder",
    definition: "A temporary insurance contract that provides coverage until a formal policy is issued, typically valid for 30 to 90 days.",
    category: "Industry",
    relatedTerms: ["Policy", "Coverage", "Temporary Insurance"]
  },
  {
    term: "Certificate of Insurance",
    definition: "A document issued by an insurer or agent that verifies the existence of insurance coverage and summarizes key policy information for third parties.",
    category: "Industry",
    relatedTerms: ["Policy", "Proof of Insurance", "Additional Insured"]
  },
  {
    term: "Additional Insured",
    definition: "A person or entity added to an insurance policy who receives coverage under that policy, commonly required in contracts and leases.",
    category: "Industry",
    relatedTerms: ["Certificate of Insurance", "Endorsement", "Named Insured"]
  },
  {
    term: "Named Insured",
    definition: "The person or entity specifically identified in an insurance policy as the insured, having full rights and responsibilities under the policy.",
    category: "Industry",
    relatedTerms: ["Additional Insured", "Insured", "Policyholder"]
  },
  {
    term: "Aggregate Limit",
    definition: "The maximum amount an insurance policy will pay for all covered losses during a policy period, regardless of the number of claims.",
    category: "Industry",
    relatedTerms: ["Policy Limit", "Per Occurrence Limit", "Liability Limit"]
  },
  {
    term: "Per Occurrence Limit",
    definition: "The maximum amount an insurance policy will pay for a single claim or occurrence, separate from the aggregate limit.",
    category: "Industry",
    relatedTerms: ["Aggregate Limit", "Policy Limit", "Liability Limit"]
  },
  {
    term: "Retention",
    definition: "The amount of risk or loss that an insured retains before insurance coverage applies, similar to a deductible but typically used in commercial insurance.",
    category: "Industry",
    relatedTerms: ["Deductible", "Self-Insured Retention", "Risk Retention"]
  },
  {
    term: "Self-Insured Retention",
    definition: "A specified dollar amount that the insured must pay on a claim before the insurance policy responds, commonly used in liability policies.",
    category: "Industry",
    relatedTerms: ["Retention", "Deductible", "Self-Insurance"]
  },
  {
    term: "Occurrence Policy",
    definition: "An insurance policy that covers claims for incidents that occur during the policy period, regardless of when the claim is filed.",
    category: "Industry",
    relatedTerms: ["Claims-Made Policy", "Coverage Trigger", "Policy Period"]
  },
  {
    term: "Claims-Made Policy",
    definition: "An insurance policy that covers claims only if both the incident and the claim occur during the policy period or extended reporting period.",
    category: "Industry",
    relatedTerms: ["Occurrence Policy", "Tail Coverage", "Retroactive Date"]
  },
  {
    term: "Tail Coverage",
    definition: "Extended reporting period coverage purchased for claims-made policies, allowing claims to be reported after the policy expires for incidents that occurred during the policy period.",
    category: "Industry",
    relatedTerms: ["Claims-Made Policy", "Extended Reporting Period", "Professional Liability Insurance"]
  },
  {
    term: "Retroactive Date",
    definition: "The date in a claims-made policy before which incidents are not covered, even if the claim is made during the policy period.",
    category: "Industry",
    relatedTerms: ["Claims-Made Policy", "Prior Acts Coverage", "Coverage Trigger"]
  }
,
  {
    term: "ACORD 25 Form",
    definition: "An industry standard form used to create a certificate of insurance (COI). This form provides proof of insurance coverage and is commonly required by clients, contractors, or landlords.",
    category: "Industry",
    relatedTerms: ["Certificate of Insurance","Endorsement","Policy"]
  },
  {
    term: "Appraisal",
    definition: "An assessment of a property's value by an independent professional, often required for insurance purposes to determine appropriate coverage limits or claim settlements.",
    category: "Property",
    relatedTerms: ["Actual Cash Value","Replacement Cost","Valuation"]
  },
  {
    term: "Arbitration",
    definition: "An alternative to going to court where a neutral third-party is used to settle a dispute between an insurer and a policyholder, typically regarding claim settlements or coverage interpretations.",
    category: "Claims",
    relatedTerms: ["Dispute Resolution","Claim","Settlement"]
  },
  {
    term: "Builder's Risk Insurance",
    definition: "A specialized type of property insurance designed to cover materials, fixtures, and equipment used in the building or renovation of a structure in case of loss or damage during construction.",
    category: "Business",
    relatedTerms: ["Commercial Property Insurance","Construction Insurance","Property Insurance"]
  },
  {
    term: "Business Personal Property",
    definition: "Coverage for the cost to repair or replace business property such as computers, furniture, and inventories if they're lost, damaged, or stolen. Generally does not cover property stolen by an employee.",
    category: "Business",
    relatedTerms: ["Commercial Property Insurance","Business Owner's Policy","Contents Insurance"]
  },
  {
    term: "Certificate Holder",
    definition: "A person or entity who has a certificate of insurance (COI) in their possession, which could be the policyholder or someone who requested proof of insurance. Being a certificate holder does not necessarily mean coverage under the policy.",
    category: "Industry",
    relatedTerms: ["Certificate of Insurance","Additional Insured","Named Insured"]
  },
  {
    term: "Claimant",
    definition: "The person or business that makes a claim to the insured person or their insurance company, seeking compensation for damages or losses.",
    category: "Claims",
    relatedTerms: ["Claim","Third Party","Settlement"]
  },
  {
    term: "Class of Business",
    definition: "The type of industry a business falls into, such as 'construction' or 'professional services.' Used by insurers to determine risk levels and set coverage limits and premium costs.",
    category: "Industry",
    relatedTerms: ["Underwriting","Risk Classification","Premium"]
  },
  {
    term: "Loss Payable Provision",
    definition: "An endorsement where an insurer makes claim payments to a third party instead of the named insured, often included when multiple parties have a financial interest in the insured property.",
    category: "Industry",
    relatedTerms: ["Loss Payee","Named Insured","Endorsement"]
  },
  {
    term: "Loss Payee",
    definition: "The person or entity entitled to payment when an insurance claim is settled, which may be the policyholder or another party with a financial interest in the insured property.",
    category: "Industry",
    relatedTerms: ["Loss Payable Provision","Beneficiary","Named Insured"]
  },
  {
    term: "Primary and Noncontributory",
    definition: "'Primary' means the insurance policy responds to a covered claim first before another policy. 'Non-contributory' means the policy must respond without requesting the other policy contribute to paying the claim.",
    category: "Industry",
    relatedTerms: ["Additional Insured","Endorsement","Coverage"]
  },
  {
    term: "Products-Completed Operations Aggregate",
    definition: "The maximum amount of coverage offered under a general liability insurance policy for claims and lawsuits related to injury, illness, or property damage caused by delivered products or completed services.",
    category: "Business",
    relatedTerms: ["General Liability Insurance","Aggregate Limit","Product Liability"]
  },
  {
    term: "Bodily Injury",
    definition: "Physical injury, sickness, or disease sustained by a person, typically covered under liability insurance policies when the insured is legally responsible for causing the injury.",
    category: "General",
    relatedTerms: ["Liability","General Liability Insurance","Personal Injury"]
  },
  {
    term: "Gap Insurance",
    definition: "Auto insurance coverage that pays the difference between what you owe on your car loan or lease and the vehicle's actual cash value if it's totaled or stolen.",
    category: "Auto",
    relatedTerms: ["Actual Cash Value","Total Loss","Loan Payoff"]
  },
  {
    term: "HMO",
    definition: "Health Maintenance Organization - a type of health insurance plan that requires members to use network providers and obtain referrals from a primary care physician to see specialists.",
    category: "Health",
    relatedTerms: ["PPO","Health Insurance","Network Provider"]
  },
  {
    term: "PPO",
    definition: "Preferred Provider Organization - a type of health insurance plan that offers more flexibility than an HMO, allowing members to see out-of-network providers at a higher cost without referrals.",
    category: "Health",
    relatedTerms: ["HMO","Health Insurance","Network Provider"]
  },
  {
    term: "EPO",
    definition: "Exclusive Provider Organization - a health insurance plan that covers services only if you use doctors, specialists, or hospitals in the plan's network, except in emergencies.",
    category: "Health",
    relatedTerms: ["HMO","PPO","Health Insurance"]
  },
  {
    term: "POS Plan",
    definition: "Point of Service Plan - a health insurance plan that combines features of HMO and PPO plans, requiring a primary care physician but allowing out-of-network care at higher costs.",
    category: "Health",
    relatedTerms: ["HMO","PPO","Health Insurance"]
  },
  {
    term: "High Deductible Health Plan",
    definition: "A health insurance plan with lower premiums and higher deductibles than traditional plans, often paired with a Health Savings Account (HSA) for tax-advantaged savings.",
    category: "Health",
    relatedTerms: ["Deductible","Health Savings Account","Premium"]
  },
  {
    term: "Health Savings Account",
    definition: "A tax-advantaged savings account available to individuals enrolled in high-deductible health plans, allowing pre-tax contributions for qualified medical expenses.",
    category: "Health",
    relatedTerms: ["High Deductible Health Plan","Medical Expenses","Tax Deduction"]
  },
  {
    term: "Flexible Spending Account",
    definition: "An employer-sponsored account that allows employees to set aside pre-tax dollars for eligible healthcare or dependent care expenses, with use-it-or-lose-it provisions.",
    category: "Health",
    relatedTerms: ["Health Savings Account","Medical Expenses","Tax Benefit"]
  },
  {
    term: "Living Benefit",
    definition: "A life insurance policy feature that allows the policyholder to access a portion of the death benefit while still alive, typically in cases of terminal illness or chronic conditions.",
    category: "Life",
    relatedTerms: ["Death Benefit","Accelerated Death Benefit","Terminal Illness"]
  },
  {
    term: "Accelerated Death Benefit",
    definition: "A provision that allows terminally ill policyholders to receive a portion of their life insurance death benefit before death to help cover medical or end-of-life expenses.",
    category: "Life",
    relatedTerms: ["Living Benefit","Death Benefit","Terminal Illness"]
  },
  {
    term: "Guaranteed Issue Life Insurance",
    definition: "Life insurance that doesn't require a medical exam or health questions, guaranteeing acceptance but typically offering lower coverage amounts and higher premiums.",
    category: "Life",
    relatedTerms: ["Simplified Issue","Life Insurance","Underwriting"]
  },
  {
    term: "Simplified Issue Life Insurance",
    definition: "Life insurance that requires answering health questions but no medical exam, offering faster approval than fully underwritten policies with moderate coverage amounts.",
    category: "Life",
    relatedTerms: ["Guaranteed Issue Life Insurance","Underwriting","Medical Exam"]
  },
  {
    term: "Dwelling Coverage",
    definition: "The part of a homeowners or renters insurance policy that covers damage to the physical structure of your home, including walls, roof, and built-in appliances.",
    category: "Property",
    relatedTerms: ["Homeowners Insurance","Replacement Cost","Structure"]
  },
  {
    term: "Personal Property Coverage",
    definition: "Insurance coverage for personal belongings such as furniture, clothing, and electronics against theft, damage, or loss, typically included in homeowners and renters policies.",
    category: "Property",
    relatedTerms: ["Renters Insurance","Homeowners Insurance","Contents"]
  },
  {
    term: "Loss of Use Coverage",
    definition: "Coverage that pays for additional living expenses if you must temporarily relocate due to a covered loss that makes your home uninhabitable, such as fire or severe storm damage.",
    category: "Property",
    relatedTerms: ["Homeowners Insurance","Additional Living Expenses","Temporary Housing"]
  },
  {
    term: "Personal Liability Coverage",
    definition: "Protection against lawsuits for bodily injury or property damage that you or family members cause to others, typically included in homeowners and renters insurance policies.",
    category: "Property",
    relatedTerms: ["Liability","Homeowners Insurance","Lawsuit"]
  },
  {
    term: "Medical Payments Coverage",
    definition: "Coverage that pays medical expenses for guests injured on your property, regardless of fault, typically included in homeowners and auto insurance policies with relatively low limits.",
    category: "General",
    relatedTerms: ["Personal Liability Coverage","Bodily Injury","Guest"]
  },
  {
    term: "Ordinance or Law Coverage",
    definition: "Insurance that covers the increased costs of rebuilding to meet current building codes after a covered loss, as older homes may not meet modern code requirements.",
    category: "Property",
    relatedTerms: ["Homeowners Insurance","Building Code","Reconstruction"]
  },
  {
    term: "Water Backup Coverage",
    definition: "Optional homeowners insurance coverage for damage caused by water backing up through sewers or drains, which is typically excluded from standard policies.",
    category: "Property",
    relatedTerms: ["Homeowners Insurance","Sewer Backup","Exclusion"]
  },
  {
    term: "Equipment Breakdown Coverage",
    definition: "Insurance that covers the cost of repairing or replacing home systems and appliances that break down due to mechanical or electrical failure, such as HVAC systems or water heaters.",
    category: "Property",
    relatedTerms: ["Homeowners Insurance","Mechanical Failure","Appliance"]
  },
  {
    term: "Scheduled Personal Property",
    definition: "Additional coverage for high-value items like jewelry, art, or collectibles that exceed standard policy limits, requiring appraisals and separate listing on the policy.",
    category: "Property",
    relatedTerms: ["Personal Property Coverage","Jewelry Insurance","Appraisal"]
  },
  {
    term: "Replacement Cost Coverage",
    definition: "Insurance that pays to replace damaged property with new items of similar kind and quality without deducting for depreciation, resulting in higher payouts than actual cash value coverage.",
    category: "Property",
    relatedTerms: ["Actual Cash Value","Depreciation","Claim"]
  },
  {
    term: "Extended Replacement Cost",
    definition: "Coverage that pays more than the dwelling coverage limit (typically 125-150%) to rebuild your home if construction costs have increased since the policy was written.",
    category: "Property",
    relatedTerms: ["Replacement Cost Coverage","Dwelling Coverage","Inflation"]
  },
  {
    term: "Guaranteed Replacement Cost",
    definition: "The most comprehensive coverage that pays whatever it costs to rebuild your home to its original condition, even if it exceeds your policy limits, regardless of construction cost increases.",
    category: "Property",
    relatedTerms: ["Extended Replacement Cost","Dwelling Coverage","Unlimited"]
  },
  {
    term: "Windstorm Deductible",
    definition: "A separate, typically higher deductible that applies specifically to wind and hail damage, often expressed as a percentage of the dwelling coverage limit rather than a fixed dollar amount.",
    category: "Property",
    relatedTerms: ["Deductible","Hurricane Deductible","Percentage Deductible"]
  },
  {
    term: "Hurricane Deductible",
    definition: "A separate deductible that applies specifically to hurricane damage, typically a percentage of the dwelling coverage (2-5%), and only triggered when a hurricane is officially declared.",
    category: "Property",
    relatedTerms: ["Windstorm Deductible","Percentage Deductible","Named Storm"]
  },
  {
    term: "Earthquake Insurance",
    definition: "Separate coverage for damage caused by earthquakes, typically not included in standard homeowners policies and requiring a separate policy or endorsement with its own deductible.",
    category: "Property",
    relatedTerms: ["Flood Insurance","Catastrophic Coverage","Exclusion"]
  },
  {
    term: "Sinkhole Coverage",
    definition: "Insurance coverage for damage caused by sinkholes, which may be included, excluded, or available as an endorsement depending on the state and insurer.",
    category: "Property",
    relatedTerms: ["Homeowners Insurance","Catastrophic Coverage","Ground Movement"]
  },
  {
    term: "Mold Coverage",
    definition: "Limited coverage for mold damage that results from a covered peril, with most policies capping mold remediation at $10,000-$50,000 and excluding mold from maintenance issues.",
    category: "Property",
    relatedTerms: ["Homeowners Insurance","Water Damage","Exclusion"]
  },
  {
    term: "Identity Theft Coverage",
    definition: "Coverage that reimburses expenses related to restoring your identity after theft, such as legal fees, lost wages, and document replacement costs.",
    category: "General",
    relatedTerms: ["Personal Property Coverage","Fraud","Credit Monitoring"]
  },
  {
    term: "Pet Insurance",
    definition: "Coverage for veterinary expenses related to illness, injury, or preventive care for pets, with policies varying in coverage limits, deductibles, and exclusions.",
    category: "General",
    relatedTerms: ["Health Insurance","Veterinary Care","Wellness Coverage"]
  },
  {
    term: "Travel Insurance",
    definition: "Coverage for unexpected events during travel, including trip cancellation, medical emergencies, lost luggage, and travel delays.",
    category: "General",
    relatedTerms: ["Trip Cancellation","Medical Coverage","Baggage Loss"]
  },
  {
    term: "Trip Cancellation Insurance",
    definition: "Coverage that reimburses prepaid, non-refundable trip costs if you must cancel for covered reasons such as illness, injury, or severe weather.",
    category: "General",
    relatedTerms: ["Travel Insurance","Trip Interruption","Covered Reason"]
  },
  {
    term: "Trip Interruption Insurance",
    definition: "Coverage that reimburses unused trip costs and additional expenses if your trip is cut short due to covered reasons like family emergencies or natural disasters.",
    category: "General",
    relatedTerms: ["Travel Insurance","Trip Cancellation Insurance","Emergency"]
  },
  {
    term: "Baggage Insurance",
    definition: "Coverage for lost, stolen, or damaged luggage and personal items during travel, typically included in comprehensive travel insurance policies.",
    category: "General",
    relatedTerms: ["Travel Insurance","Personal Property Coverage","Lost Luggage"]
  },
  {
    term: "Rental Car Insurance",
    definition: "Coverage for damage to or theft of a rental vehicle, which may be provided by your personal auto policy, credit card, or purchased from the rental company.",
    category: "Auto",
    relatedTerms: ["Collision Coverage","Comprehensive Coverage","Loss Damage Waiver"]
  },
  {
    term: "Loss Damage Waiver",
    definition: "An optional rental car agreement (not insurance) that waives the rental company's right to hold you financially responsible for damage or theft of the rental vehicle.",
    category: "Auto",
    relatedTerms: ["Rental Car Insurance","Collision Damage Waiver","Rental Agreement"]
  },
  {
    term: "Roadside Assistance",
    definition: "Coverage that provides services like towing, tire changes, jump starts, and lockout assistance when your vehicle breaks down, often available as an auto insurance add-on.",
    category: "Auto",
    relatedTerms: ["Towing Coverage","Emergency Service","Auto Insurance"]
  },
  {
    term: "Towing Coverage",
    definition: "Insurance coverage that pays for towing your vehicle to a repair facility after a breakdown or accident, typically with per-incident limits of $50-$100.",
    category: "Auto",
    relatedTerms: ["Roadside Assistance","Auto Insurance","Breakdown"]
  },
  {
    term: "Rental Reimbursement Coverage",
    definition: "Auto insurance coverage that pays for a rental car while your vehicle is being repaired after a covered accident, typically with daily and total limits.",
    category: "Auto",
    relatedTerms: ["Auto Insurance","Collision Coverage","Rental Car"]
  },
  {
    term: "Loan/Lease Payoff Coverage",
    definition: "Similar to gap insurance, this coverage pays the difference between your vehicle's actual cash value and the remaining loan or lease balance after a total loss.",
    category: "Auto",
    relatedTerms: ["Gap Insurance","Total Loss","Auto Loan"]
  },
  {
    term: "New Car Replacement Coverage",
    definition: "Auto insurance coverage that pays to replace your totaled vehicle with a brand new car of the same make and model, rather than paying actual cash value.",
    category: "Auto",
    relatedTerms: ["Gap Insurance","Total Loss","Replacement Cost"]
  },
  {
    term: "Accident Forgiveness",
    definition: "An auto insurance feature that prevents your premium from increasing after your first at-fault accident, helping maintain your good driver discount.",
    category: "Auto",
    relatedTerms: ["Premium","At-Fault Accident","Discount"]
  },
  {
    term: "Vanishing Deductible",
    definition: "An auto insurance program that reduces your deductible by a set amount (typically $50-$100) for each year you go without an accident or violation.",
    category: "Auto",
    relatedTerms: ["Deductible","Safe Driver Discount","Reward Program"]
  },
  {
    term: "Usage-Based Insurance",
    definition: "Auto insurance pricing based on actual driving behavior monitored through telematics devices or smartphone apps, rewarding safe driving with lower premiums.",
    category: "Auto",
    relatedTerms: ["Telematics","Safe Driver Discount","Pay-Per-Mile"]
  },
  {
    term: "Telematics",
    definition: "Technology that monitors driving behavior such as speed, braking, mileage, and time of day to determine auto insurance premiums based on actual risk.",
    category: "Auto",
    relatedTerms: ["Usage-Based Insurance","Safe Driving","Discount"]
  },
  {
    term: "Pay-Per-Mile Insurance",
    definition: "Auto insurance pricing based primarily on miles driven, with a low base rate plus a per-mile charge, ideal for low-mileage drivers.",
    category: "Auto",
    relatedTerms: ["Usage-Based Insurance","Mileage","Low-Mileage Discount"]
  },
  {
    term: "Rideshare Insurance",
    definition: "Coverage designed for drivers who work for rideshare companies like Uber or Lyft, filling gaps between personal auto insurance and the company's commercial coverage.",
    category: "Auto",
    relatedTerms: ["Commercial Auto Insurance","Uber","Lyft"]
  },
  {
    term: "Fleet Insurance",
    definition: "Commercial auto insurance that covers multiple vehicles (typically 5 or more) owned by a business under a single policy, often at discounted rates.",
    category: "Business",
    relatedTerms: ["Commercial Auto Insurance","Business Insurance","Multiple Vehicles"]
  },
  {
    term: "Hired and Non-Owned Auto Coverage",
    definition: "Business insurance that covers liability for vehicles rented by the company or employees' personal vehicles used for business purposes.",
    category: "Business",
    relatedTerms: ["Commercial Auto Insurance","Business Liability","Employee Vehicles"]
  },
  {
    term: "Performance Bond",
    definition: "A surety bond that guarantees a contractor will complete a project according to contract terms, protecting the project owner from financial loss if the contractor defaults.",
    category: "Business",
    relatedTerms: ["Surety Bond","Construction","Contract"]
  },
  {
    term: "Payment Bond",
    definition: "A surety bond that guarantees a contractor will pay subcontractors, laborers, and material suppliers, protecting them from non-payment if the contractor defaults.",
    category: "Business",
    relatedTerms: ["Performance Bond","Surety Bond","Construction"]
  },
  {
    term: "Bid Bond",
    definition: "A surety bond submitted with a construction bid that guarantees the bidder will enter into the contract and provide required performance and payment bonds if awarded the project.",
    category: "Business",
    relatedTerms: ["Performance Bond","Surety Bond","Construction Bid"]
  },
  {
    term: "Maintenance Bond",
    definition: "A surety bond that guarantees a contractor will repair defects in workmanship or materials for a specified period after project completion, typically one year.",
    category: "Business",
    relatedTerms: ["Performance Bond","Warranty","Construction"]
  },
  {
    term: "License and Permit Bond",
    definition: "A surety bond required by government agencies to obtain certain business licenses or permits, guaranteeing compliance with applicable laws and regulations.",
    category: "Business",
    relatedTerms: ["Surety Bond","Business License","Compliance"]
  },
  {
    term: "Prior Acts Coverage",
    definition: "Coverage under a claims-made policy for incidents that occurred before the policy's retroactive date, protecting against claims for past work when switching insurers.",
    category: "General",
    relatedTerms: ["Claims-Made Policy","Retroactive Date","Professional Liability Insurance"]
  },
  {
    term: "ISO",
    definition: "Insurance Services Office - an organization that develops standardized insurance policy forms, rating information, and risk data used by property-casualty insurers across the United States.",
    category: "Industry",
    relatedTerms: ["Policy Form","Standardization","Commercial Insurance"]
  },
  {
    term: "Special Form (CP 00 30)",
    definition: "An ISO commercial property coverage form providing the broadest coverage, insuring against all risks of direct physical loss except those specifically excluded. Also known as 'all-risk' or 'open perils' coverage.",
    category: "Property",
    relatedTerms: ["ISO","Basic Form","Broad Form","Named Perils","Commercial Property Insurance"]
  },
  {
    term: "Basic Form (CP 00 10)",
    definition: "An ISO commercial property coverage form providing the most limited coverage, insuring only against specifically named perils such as fire, lightning, explosion, windstorm, hail, smoke, aircraft, vehicles, riot, vandalism, and sprinkler leakage.",
    category: "Property",
    relatedTerms: ["ISO","Special Form","Broad Form","Named Perils","Commercial Property Insurance"]
  },
  {
    term: "Broad Form (CP 00 20)",
    definition: "An ISO commercial property coverage form providing mid-level coverage between Basic and Special Forms, covering all Basic Form perils plus additional perils like falling objects, weight of snow/ice/sleet, and water damage.",
    category: "Property",
    relatedTerms: ["ISO","Special Form","Basic Form","Named Perils","Commercial Property Insurance"]
  },
  {
    term: "Named Perils",
    definition: "A type of insurance coverage that only protects against losses specifically listed in the policy, as opposed to all-risk coverage which covers all perils except those excluded.",
    category: "General",
    relatedTerms: ["Basic Form","Broad Form","Special Form","All-Risk Coverage"]
  },
  {
    term: "All-Risk Coverage",
    definition: "Insurance coverage that protects against all causes of loss except those specifically excluded in the policy, providing broader protection than named perils coverage. Also called 'open perils' coverage.",
    category: "General",
    relatedTerms: ["Special Form","Named Perils","Exclusions"]
  },
  {
    term: "ISO CGL Form",
    definition: "ISO Commercial General Liability form - a standardized liability insurance policy that covers bodily injury, property damage, personal injury, and advertising injury claims. The most common form is CG 00 01.",
    category: "Business",
    relatedTerms: ["ISO","Commercial General Liability","Liability Insurance","CGL"]
  },
  {
    term: "ISO BOP",
    definition: "ISO Businessowners Policy - a standardized package policy combining property and liability coverage designed for small to medium-sized businesses, typically using form BP 00 03.",
    category: "Business",
    relatedTerms: ["ISO","Business Insurance","Package Policy","Commercial Property"]
  },
  {
    term: "ISO Workers Compensation Form",
    definition: "Standardized ISO forms for workers compensation coverage, including WC 00 00 01 (basic policy) and various endorsements for modifying coverage terms.",
    category: "Business",
    relatedTerms: ["ISO","Workers Compensation","Workplace Injury","Employee Benefits"]
  },
  {
    term: "ISO Endorsement",
    definition: "A standardized form used to modify, add, or delete coverage provisions in an ISO policy, identified by form numbers (e.g., CG 21 39 for Additional Insured endorsement).",
    category: "Industry",
    relatedTerms: ["ISO","Endorsement","Policy Modification","Additional Coverage"]
  },
  {
    term: "Manuscript Policy",
    definition: "A non-standard insurance policy specially drafted to meet unique coverage needs, as opposed to standardized ISO forms. Often used for complex or unusual risks.",
    category: "Industry",
    relatedTerms: ["ISO","Custom Coverage","Non-Standard Policy"]
  },
];

export const categoryColors: Record<string, string> = {
  Auto: "oklch(0.65 0.15 35)",
  Health: "oklch(0.60 0.12 150)",
  Life: "oklch(0.55 0.10 250)",
  Property: "oklch(0.70 0.12 90)",
  Business: "oklch(0.50 0.08 200)",
  General: "oklch(0.60 0.08 300)",
  Claims: "oklch(0.65 0.10 20)",
  Industry: "oklch(0.55 0.06 180)"
};

export const categoryIcons: Record<string, string> = {
  Auto: "/images/category-auto.png",
  Health: "/images/category-health.png",
  Life: "/images/category-life.png",
  Property: "/images/category-property.png",
  Business: "/images/category-auto.png",
  General: "/images/category-auto.png",
  Claims: "/images/category-auto.png",
  Industry: "/images/category-auto.png"
};
