export interface GlossaryTerm {
  term: string;
  definition: string;
  category: 'Auto' | 'Health' | 'Life' | 'Property' | 'General' | 'Claims' | 'Industry' | 'Business';
  relatedTerms?: string[];
  // Spanish translations (optional - for bilingual support)
  termEs?: string;
  definitionEs?: string;
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
    relatedTerms: ["Premium", "Risk", "Underwriting"],
    termEs: "Actuario",
    definitionEs: "Un profesional de negocios que analiza probabilidades de riesgo y gestión de riesgos, incluyendo el cálculo de primas, dividendos y otros estándares aplicables de la industria de seguros."
  },
  {
    term: "Adjuster",
    definition: "A person who investigates claims and recommends settlement options based on estimates of damage and insurance policies held.",
    category: "Claims",
    relatedTerms: ["Claim", "Settlement", "Loss"],
    termEs: "Ajustador / Perito",
    definitionEs: "Una persona que investiga reclamos y recomienda opciones de liquidación basadas en estimaciones de daños y pólizas de seguro vigentes."
  },
  {
    term: "Actual Cash Value",
    definition: "The repayment value for indemnification due to loss or damage of property; in most cases it is replacement cost minus depreciation.",
    category: "Property",
    relatedTerms: ["Replacement Cost", "Depreciation", "Indemnity"],
    termEs: "Valor Real en Efectivo",
    definitionEs: "El valor de reembolso por indemnización debido a pérdida o daño de propiedad; en la mayoría de los casos es el costo de reemplazo menos la depreciación."
  },
  {
    term: "Beneficiary",
    definition: "The person or entity designated to receive the benefits or proceeds from an insurance policy.",
    category: "Life",
    relatedTerms: ["Death Benefit", "Policy", "Insured"],
    termEs: "Beneficiario",
    definitionEs: "La persona o entidad designada para recibir los beneficios o ganancias de una póliza de seguro."
  },
  {
    term: "Claim",
    definition: "A formal request by a policyholder to an insurance company for coverage or compensation for a covered loss or policy event.",
    category: "Claims",
    relatedTerms: ["Adjuster", "Coverage", "Deductible"],
    termEs: "Reclamo / Reclamación",
    definitionEs: "Una solicitud formal del asegurado a la compañía de seguros para obtener cobertura o compensación por una pérdida cubierta o evento de póliza."
  },
  {
    term: "Collision Coverage",
    definition: "Insurance coverage that pays for damage to your vehicle resulting from a collision with another vehicle or object.",
    category: "Auto",
    relatedTerms: ["Comprehensive Coverage", "Deductible", "Premium"],
    termEs: "Cobertura de Colisión",
    definitionEs: "Seguro de auto que paga por daños a su vehículo resultantes de una colisión con otro vehículo u objeto, independientemente de quién tenga la culpa."
  },
  {
    term: "Comprehensive Coverage",
    definition: "Insurance coverage for damage to your vehicle from causes other than collision, such as theft, vandalism, fire, weather events, or hitting an animal.",
    category: "Auto",
    relatedTerms: ["Collision Coverage", "Deductible", "Premium"],
    termEs: "Cobertura Integral / Cobertura Amplia",
    definitionEs: "Seguro de auto que cubre daños a su vehículo causados por eventos que no sean colisiones, como robo, vandalismo, incendio, granizo o inundación."
  },
  {
    term: "Copayment",
    definition: "A fixed amount you pay for a covered health care service, usually when you receive the service.",
    category: "Health",
    relatedTerms: ["Coinsurance", "Deductible", "Out-of-Pocket Maximum"],
    termEs: "Copago",
    definitionEs: "Una cantidad fija que paga por un servicio de atención médica cubierto, generalmente cuando recibe el servicio."
  },
  {
    term: "Coverage",
    definition: "The scope of protection provided under an insurance policy, including the types of losses and risks that are covered.",
    category: "General",
    relatedTerms: ["Policy", "Exclusion", "Limit"],
    termEs: "Cobertura",
    definitionEs: "El alcance de la protección proporcionada bajo una póliza de seguro, incluyendo los tipos de pérdidas y riesgos que están cubiertos."
  },
  {
    term: "Deductible",
    definition: "The amount you must pay out-of-pocket before your insurance coverage begins to pay for covered losses.",
    category: "General",
    relatedTerms: ["Premium", "Coverage", "Claim"],
    termEs: "Deducible",
    definitionEs: "La cantidad que debe pagar de su bolsillo antes de que su cobertura de seguro comience a pagar las pérdidas cubiertas."
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
    relatedTerms: ["Coverage", "Policy", "Endorsement"],
    termEs: "Exclusión",
    definitionEs: "Condiciones o circunstancias específicas que no están cubiertas por una póliza de seguro."
  },
  {
    term: "Endorsement",
    definition: "A written amendment or addition to an insurance policy that modifies the coverage, terms, or conditions.",
    category: "General",
    relatedTerms: ["Rider", "Policy", "Coverage"],
    termEs: "Endoso / Anexo",
    definitionEs: "Una enmienda o adición a una póliza de seguro existente que modifica los términos o cobertura de la póliza original."
  },
  {
    term: "Grace Period",
    definition: "A specified period after a premium payment is due during which the policy remains in force without penalty.",
    category: "General",
    relatedTerms: ["Premium", "Lapse", "Policy"],
    termEs: "Período de Gracia",
    definitionEs: "Un período de tiempo después de la fecha de vencimiento del pago de la prima durante el cual la póliza permanece en vigor y se puede realizar el pago sin penalización."
  },
  {
    term: "Hazard",
    definition: "A condition or situation that increases the likelihood or potential severity of a loss.",
    category: "General",
    relatedTerms: ["Risk", "Peril", "Underwriting"],
    termEs: "Peligro / Factor de Riesgo",
    definitionEs: "Una condición que aumenta la probabilidad o severidad potencial de una pérdida."
  },
  {
    term: "Indemnity",
    definition: "Compensation for loss or damage, restoring the insured to their financial position before the loss occurred.",
    category: "General",
    relatedTerms: ["Claim", "Loss", "Coverage"],
    termEs: "Indemnización",
    definitionEs: "Compensación por daño, pérdida o lesión sufrida; el principio de restaurar al asegurado a su posición financiera anterior a la pérdida."
  },
  {
    term: "Insured",
    definition: "The person or entity covered by an insurance policy and protected against specified losses or risks.",
    category: "General",
    relatedTerms: ["Policyholder", "Beneficiary", "Coverage"],
    termEs: "Asegurado",
    definitionEs: "La persona o entidad cubierta por una póliza de seguro."
  },
  {
    term: "Insurer",
    definition: "The insurance company that provides coverage and agrees to pay for covered losses in exchange for premium payments.",
    category: "General",
    relatedTerms: ["Policy", "Premium", "Coverage"],
    termEs: "Aseguradora / Compañía de Seguros",
    definitionEs: "La compañía que proporciona cobertura de seguro y asume el riesgo financiero a cambio de primas."
  },
  {
    term: "Liability Coverage",
    definition: "Insurance that covers legal responsibility for injuries or damage caused to others or their property.",
    category: "General",
    relatedTerms: ["Liability Limit", "Premium", "Claim"],
    termEs: "Cobertura de Responsabilidad Civil",
    definitionEs: "Seguro que lo protege contra reclamos legales si usted es responsable de causar lesiones a otra persona o daños a la propiedad de otra persona."
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
    relatedTerms: ["Grace Period", "Premium", "Policy"],
    termEs: "Caducidad / Vencimiento",
    definitionEs: "La terminación de una póliza de seguro debido a la falta de pago de primas."
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
    relatedTerms: ["Hazard", "Risk", "Coverage"],
    termEs: "Peligro / Riesgo Cubierto",
    definitionEs: "Un evento o causa específica de pérdida cubierta por una póliza de seguro, como incendio, robo o viento."
  },
  {
    term: "Policy",
    definition: "The written contract between the insurer and insured that outlines the terms, conditions, coverage, and exclusions of the insurance agreement.",
    category: "General",
    relatedTerms: ["Coverage", "Premium", "Endorsement"],
    termEs: "Póliza",
    definitionEs: "Un contrato escrito entre el asegurado y la aseguradora que detalla los términos, condiciones, coberturas y exclusiones del acuerdo de seguro."
  },
  {
    term: "Policyholder",
    definition: "The person or entity that owns an insurance policy and is responsible for premium payments.",
    category: "General",
    relatedTerms: ["Insured", "Policy", "Premium"],
    termEs: "Titular de la Póliza / Asegurado",
    definitionEs: "La persona que posee una póliza de seguro."
  },
  {
    term: "Premium",
    definition: "The amount paid by the policyholder to the insurance company for coverage, typically on a monthly, quarterly, or annual basis.",
    category: "General",
    relatedTerms: ["Policy", "Deductible", "Coverage"],
    termEs: "Prima",
    definitionEs: "El monto que paga regularmente (mensual, trimestral o anualmente) para mantener su póliza de seguro activa."
  },
  {
    term: "Replacement Cost",
    definition: "The cost to replace damaged or destroyed property with new property of similar kind and quality, without deduction for depreciation.",
    category: "Property",
    relatedTerms: ["Actual Cash Value", "Depreciation", "Coverage"],
    termEs: "Costo de Reemplazo",
    definitionEs: "El costo de reemplazar propiedad dañada o destruida con propiedad nueva de tipo y calidad similar, sin deducir por depreciación."
  },
  {
    term: "Rider",
    definition: "An add-on provision to an insurance policy that provides additional coverage or modifies the standard policy terms.",
    category: "General",
    relatedTerms: ["Endorsement", "Policy", "Coverage"],
    termEs: "Cláusula Adicional / Anexo",
    definitionEs: "Una enmienda a una póliza de seguro que agrega, elimina o modifica la cobertura."
  },
  {
    term: "Risk",
    definition: "The chance of loss or the person, property, or entity insured under a policy.",
    category: "General",
    relatedTerms: ["Hazard", "Peril", "Underwriting"],
    termEs: "Riesgo",
    definitionEs: "La posibilidad de pérdida, daño o lesión; en seguros, es la probabilidad de que ocurra un evento asegurado."
  },
  {
    term: "Subrogation",
    definition: "The right of an insurer to pursue a third party that caused an insurance loss to the insured, allowing the insurer to recover the amount paid to the insured.",
    category: "Claims",
    relatedTerms: ["Claim", "Loss", "Settlement"],
    termEs: "Subrogación",
    definitionEs: "El derecho legal de una aseguradora de buscar recuperación de un tercero responsable después de pagar un reclamo al asegurado."
  },
  {
    term: "Term Life Insurance",
    definition: "Life insurance coverage for a specified period of time, providing a death benefit if the insured dies during the term.",
    category: "Life",
    relatedTerms: ["Whole Life Insurance", "Death Benefit", "Premium"],
    termEs: "Seguro de Vida a Término / Seguro de Vida Temporal",
    definitionEs: "Cobertura de seguro de vida que proporciona protección por un período específico de tiempo (término), como 10, 20 o 30 años."
  },
  {
    term: "Underwriting",
    definition: "The process by which an insurer evaluates the risk of insuring a person or property and determines coverage terms and premium rates.",
    category: "Industry",
    relatedTerms: ["Risk", "Premium", "Actuary"],
    termEs: "Suscripción / Evaluación de Riesgos",
    definitionEs: "El proceso mediante el cual una aseguradora evalúa el riesgo de asegurar a un cliente potencial y determina la prima y los términos de cobertura."
  },
  {
    term: "Uninsured Motorist Coverage",
    definition: "Insurance that covers you if you're in an accident caused by a driver who doesn't have liability insurance.",
    category: "Auto",
    relatedTerms: ["Liability Coverage", "Collision Coverage", "Premium"],
    termEs: "Cobertura contra Conductores Sin Seguro",
    definitionEs: "Cobertura que lo protege si resulta lesionado en un accidente causado por un conductor que no tiene seguro."
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
    relatedTerms: ["Term Life Insurance", "Cash Value", "Death Benefit"],
    termEs: "Seguro de Vida Entera / Seguro de Vida Permanente",
    definitionEs: "Seguro de vida permanente que proporciona cobertura de por vida y acumula valor en efectivo con el tiempo."
  },
  {
    term: "Coinsurance",
    definition: "A cost-sharing arrangement where the insured pays a specified percentage of covered expenses after the deductible is met.",
    category: "Health",
    relatedTerms: ["Copayment", "Deductible", "Out-of-Pocket Maximum"],
    termEs: "Coseguro",
    definitionEs: "El porcentaje de los costos que usted paga después de cumplir con su deducible. Por ejemplo, si su coseguro es del 20%, usted paga el 20% y su seguro paga el 80%."
  },
  {
    term: "Out-of-Pocket Maximum",
    definition: "The most you have to pay for covered services in a plan year. After you reach this amount, the insurance pays 100% of covered services.",
    category: "Health",
    relatedTerms: ["Deductible", "Coinsurance", "Copayment"],
    termEs: "Máximo de Gastos de Bolsillo",
    definitionEs: "La cantidad máxima que pagará de su bolsillo por servicios cubiertos en un año del plan. Después de alcanzar este límite, su seguro paga el 100% de los servicios cubiertos."
  },
  {
    term: "Pre-existing Condition",
    definition: "A health condition that existed before the start date of a new insurance policy.",
    category: "Health",
    relatedTerms: ["Coverage", "Exclusion", "Health Insurance"],
    termEs: "Condición Preexistente",
    definitionEs: "Un problema de salud que existía antes de la fecha de inicio de una nueva póliza de seguro de salud."
  },
  {
    term: "Umbrella Policy",
    definition: "Additional liability insurance that provides coverage beyond the limits of your standard policies.",
    category: "General",
    relatedTerms: ["Liability Coverage", "Liability Limit", "Premium"]
  },
  {
    term: "Homeowners Insurance",
    definition: "Insurance coverage that protects your home and personal property against damage, theft, and liability claims.",
    category: "Property",
    relatedTerms: ["Property Insurance", "Liability Coverage", "Deductible"],
    termEs: "Seguro de Propietarios de Vivienda",
    definitionEs: "Cobertura de seguro que protege su hogar y propiedad personal contra daños, robo y responsabilidad civil."
  },
  {
    term: "Renters Insurance",
    definition: "Insurance coverage for tenants that protects personal property and provides liability coverage, but does not cover the building structure.",
    category: "Property",
    relatedTerms: ["Homeowners Insurance", "Liability Coverage", "Personal Property"],
    termEs: "Seguro de Inquilinos / Seguro para Arrendatarios",
    definitionEs: "Cobertura de seguro para inquilinos que protege la propiedad personal y proporciona cobertura de responsabilidad civil, pero no cubre la estructura del edificio."
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
    relatedTerms: ["Health Insurance", "Premium", "Benefit"],
    termEs: "Seguro de Incapacidad / Seguro por Discapacidad",
    definitionEs: "Cobertura que reemplaza una porción de su ingreso si no puede trabajar debido a una enfermedad o lesión."
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
  {
    term: "ACORD",
    definition: "Association for Cooperative Operations Research and Development - an organization that develops standardized forms and data standards for the insurance industry, widely used for certificates of insurance and policy applications.",
    category: "Industry",
    relatedTerms: ["Certificate of Insurance","ISO","Standardization"]
  },
  {
    term: "ACORD 25",
    definition: "The standard Certificate of Liability Insurance form used to provide evidence of insurance coverage to third parties, showing policy types, limits, and effective dates without altering the actual policy.",
    category: "Industry",
    relatedTerms: ["ACORD","Certificate of Insurance","Certificate Holder","Additional Insured"]
  },
  {
    term: "ACORD 27",
    definition: "Evidence of Property Insurance form used to certify property insurance coverage, commonly required by lenders and lessors to verify building and contents coverage.",
    category: "Industry",
    relatedTerms: ["ACORD","Certificate of Insurance","Property Insurance","Loss Payee"]
  },
  {
    term: "ACORD 28",
    definition: "Evidence of Commercial Property Insurance form providing detailed information about property coverage, including building values, contents, business interruption, and special coverages.",
    category: "Industry",
    relatedTerms: ["ACORD","Commercial Property Insurance","Business Interruption","Certificate of Insurance"]
  },
  {
    term: "Non-Admitted Carrier",
    definition: "An insurance company not licensed in a particular state but allowed to provide coverage for risks that admitted carriers won't insure, typically through surplus lines brokers. Also called 'non-admitted' or 'excess and surplus' carriers.",
    category: "Industry",
    relatedTerms: ["Admitted Carrier","Surplus Lines","Excess and Surplus Lines"]
  },
  {
    term: "Surplus Lines",
    definition: "Insurance coverage placed with non-admitted carriers for risks that standard admitted carriers are unwilling to insure, typically requiring a licensed surplus lines broker and subject to special state taxes and regulations.",
    category: "Industry",
    relatedTerms: ["Non-Admitted Carrier","Admitted Carrier","Excess and Surplus Lines","Hard-to-Place Risk"]
  },
  {
    term: "Citizens Property Insurance (Florida)",
    definition: "Florida's state-run property insurer of last resort, providing coverage to property owners who cannot obtain insurance in the private market, primarily for hurricane and windstorm exposure.",
    category: "Property",
    relatedTerms: ["FAIR Plan","Windstorm Insurance","Hurricane Coverage","State Insurance Pool"]
  },
  {
    term: "FAIR Plan",
    definition: "Fair Access to Insurance Requirements Plan - state-mandated insurance programs providing property coverage to high-risk properties that cannot obtain insurance in the standard market, available in multiple states including California, Illinois, and Massachusetts.",
    category: "Property",
    relatedTerms: ["Citizens Property Insurance","High-Risk Property","State Insurance Pool"]
  },
  {
    term: "California Earthquake Authority (CEA)",
    definition: "California's state-run earthquake insurance program providing residential earthquake coverage, created after the 1994 Northridge earthquake when private insurers stopped offering earthquake insurance.",
    category: "Property",
    relatedTerms: ["Earthquake Insurance","FAIR Plan","State Insurance Pool"]
  },
  {
    term: "Texas Windstorm Insurance Association (TWIA)",
    definition: "Texas's state-run windstorm and hail insurance pool providing coverage for coastal properties that cannot obtain coverage in the private market, covering 14 coastal counties and portions of Harris County.",
    category: "Property",
    relatedTerms: ["Windstorm Insurance","Citizens Property Insurance","Hurricane Coverage","State Insurance Pool"]
  },
  {
    term: "New York No-Fault Insurance",
    definition: "New York's mandatory auto insurance system requiring Personal Injury Protection (PIP) coverage of at least $50,000, providing immediate medical and lost wage benefits regardless of who caused the accident.",
    category: "Auto",
    relatedTerms: ["Personal Injury Protection","PIP","No-Fault Insurance","Auto Insurance"]
  },
  {
    term: "Louisiana Road Home Program",
    definition: "Louisiana's disaster recovery program providing grants to homeowners for hurricane damage repair and rebuilding, created after Hurricanes Katrina and Rita in 2005.",
    category: "Property",
    relatedTerms: ["Hurricane Coverage","Disaster Recovery","State Insurance Program"]
  },
  {
    term: "Massachusetts Auto Insurance Law",
    definition: "Massachusetts's unique auto insurance system requiring specific coverage combinations and using a managed competition model where insurers must offer coverage to all drivers but rates are regulated by the state.",
    category: "Auto",
    relatedTerms: ["Auto Insurance","State Insurance Regulation","Compulsory Insurance"]
  },
  {
    term: "Michigan Catastrophic Claims Association (MCCA)",
    definition: "Michigan's state reinsurance facility that reimburses auto insurers for Personal Injury Protection (PIP) claims exceeding a specific threshold, funded by assessments on all Michigan auto policies.",
    category: "Auto",
    relatedTerms: ["Personal Injury Protection","PIP","No-Fault Insurance","Reinsurance"]
  },
  {
    term: "Hawaii Hurricane Relief Fund",
    definition: "Hawaii's state program providing reinsurance to property insurers for hurricane losses, helping maintain availability of hurricane coverage in the private market.",
    category: "Property",
    relatedTerms: ["Hurricane Coverage","Reinsurance","State Insurance Pool"]
  },
  {
    term: "Coverage A - Dwelling",
    definition: "The primary coverage in a homeowners insurance policy that protects the physical structure of your home, including walls, roof, floors, built-in appliances, and attached structures like an attached garage. This coverage pays to repair or rebuild your home if it's damaged or destroyed by a covered peril such as fire, wind, hail, or lightning. The coverage limit should reflect the cost to rebuild your home at current construction prices, not the home's market value or purchase price.",
    category: "Property",
    relatedTerms: ["Homeowners Insurance","Replacement Cost","Actual Cash Value","Coverage B"]
  },
  {
    term: "Coverage B - Other Structures",
    definition: "Coverage in a homeowners policy that protects structures on your property that are not attached to your main dwelling, such as detached garages, sheds, fences, gazebos, and guesthouses. This coverage is typically set at 10% of your Coverage A (dwelling) limit, though you can often increase it for an additional premium. The same perils that cover your dwelling also apply to other structures.",
    category: "Property",
    relatedTerms: ["Coverage A","Homeowners Insurance","Detached Structure","Property Coverage"]
  },
  {
    term: "Coverage C - Personal Property",
    definition: "Coverage that protects your personal belongings inside your home and, in many cases, anywhere in the world. This includes furniture, clothing, electronics, appliances, and other personal items. Standard policies typically provide coverage equal to 50-70% of your Coverage A limit. You can choose between actual cash value (which factors in depreciation) or replacement cost coverage (which pays to replace items at current prices). High-value items like jewelry, art, or collectibles may have sub-limits and require additional scheduled coverage.",
    category: "Property",
    relatedTerms: ["Personal Property","Replacement Cost","Actual Cash Value","Scheduled Personal Property"]
  },
  {
    term: "Coverage D - Loss of Use",
    definition: "Also known as Additional Living Expenses (ALE), this coverage pays for increased costs of living if your home becomes uninhabitable due to a covered loss. It covers expenses such as hotel bills, restaurant meals, temporary rental housing, storage fees, and other costs that exceed your normal living expenses while your home is being repaired or rebuilt. Coverage is typically 20-30% of your Coverage A limit and usually has time limits, often 12-24 months.",
    category: "Property",
    relatedTerms: ["Additional Living Expenses","ALE","Homeowners Insurance","Temporary Housing"]
  },
  {
    term: "Coverage E - Personal Liability",
    definition: "Liability protection that covers you if you're found legally responsible for injuring someone or damaging their property. This coverage pays for legal defense costs, court judgments, and settlements up to your policy limit. It covers incidents that occur on your property (like a guest slipping and falling) and many incidents that occur away from home (like your dog biting someone at the park). Standard policies typically offer $100,000 to $500,000 in liability coverage, though higher limits are available and recommended.",
    category: "Property",
    relatedTerms: ["Personal Liability","Liability Insurance","Coverage F","Umbrella Insurance"]
  },
  {
    term: "Coverage F - Medical Payments to Others",
    definition: "Coverage that pays medical expenses for people injured on your property or by your activities, regardless of who is at fault. This is a 'no-fault' coverage that can help avoid liability claims by quickly paying for minor injuries like cuts, sprains, or broken bones. It covers reasonable medical expenses incurred within a specific time period (usually 1-3 years) after the accident. Standard limits range from $1,000 to $5,000 per person. This coverage does not apply to you or regular residents of your household.",
    category: "Property",
    relatedTerms: ["Medical Payments","Coverage E","Personal Liability","No-Fault Coverage"]
  },
  {
    term: "NFIP",
    definition: "The National Flood Insurance Program is a federal program created by Congress in 1968 to provide flood insurance to property owners, renters, and businesses. Managed by FEMA, the NFIP makes flood insurance available in communities that adopt and enforce floodplain management regulations to reduce future flood damage. Standard homeowners insurance does not cover flood damage, making NFIP policies essential for properties in flood-prone areas. The program offers up to $250,000 in building coverage and $100,000 in contents coverage.",
    category: "Property",
    relatedTerms: ["Flood Insurance","FEMA","Flood Zone","Base Flood Elevation"]
  },
  {
    term: "National Flood Insurance Program",
    definition: "A federal program administered by FEMA that provides flood insurance to property owners, renters, and businesses in participating communities. Created in 1968 because standard homeowners insurance excludes flood coverage, the NFIP helps reduce the socio-economic impact of floods by providing affordable insurance and encouraging communities to adopt floodplain management regulations. Coverage limits are $250,000 for residential buildings and $100,000 for contents. Properties in high-risk flood zones with federally backed mortgages are required to carry flood insurance.",
    category: "Property",
    relatedTerms: ["NFIP","Flood Insurance","FEMA","Special Flood Hazard Area"]
  },
  {
    term: "Flood Insurance",
    definition: "Insurance coverage that protects against losses from flooding, which is specifically excluded from standard homeowners and renters insurance policies. Flood insurance covers direct physical losses caused by flooding, including overflow of inland or tidal waters, unusual accumulation of surface water, mudflow, and collapse of land along a body of water. Available primarily through the National Flood Insurance Program (NFIP) or private insurers, with a typical 30-day waiting period before coverage takes effect. Essential for properties in flood zones but recommended for all properties since 25% of flood claims come from low-risk areas.",
    category: "Property",
    relatedTerms: ["NFIP","Flood Zone","FEMA","Base Flood Elevation"],
    termEs: "Seguro contra Inundaciones",
    definitionEs: "Cobertura de seguro que protege contra pérdidas por inundación, que está específicamente excluida de las pólizas estándar de propietarios de vivienda."
  },
  {
    term: "Flood Zone",
    definition: "Geographic areas that FEMA defines according to varying levels of flood risk. These zones are depicted on Flood Insurance Rate Maps (FIRMs) and determine flood insurance requirements and premiums. High-risk zones (Special Flood Hazard Areas) include Zone A (1% annual chance of flooding) and Zone V (coastal high-hazard areas with wave action). Moderate-to-low risk zones include Zone B, C, and X. Properties in high-risk zones with federally backed mortgages must carry flood insurance. Zone designations directly impact insurance costs and building requirements.",
    category: "Property",
    relatedTerms: ["NFIP","Flood Insurance","FEMA","Special Flood Hazard Area","FIRM"]
  },
  {
    term: "Base Flood Elevation",
    definition: "The computed elevation to which floodwater is anticipated to rise during a base flood (a flood with a 1% chance of occurring in any given year, also called a 100-year flood). Shown on FEMA Flood Insurance Rate Maps (FIRMs), the BFE is used to determine flood insurance premiums and building requirements. Structures built below the BFE face higher insurance costs and greater flood risk. Local building codes typically require new construction in flood zones to have the lowest floor elevated at or above the BFE. Knowing your property's BFE is crucial for flood risk assessment and insurance decisions.",
    category: "Property",
    relatedTerms: ["Flood Zone","NFIP","FIRM","100-Year Flood","Elevation Certificate"]
  },
  {
    term: "Special Flood Hazard Area",
    definition: "High-risk flood zones designated by FEMA where there is at least a 1% chance of flooding in any given year (also known as the 100-year floodplain). Properties located in SFHAs and secured by federally backed mortgages are required by law to carry flood insurance. These areas are shown on Flood Insurance Rate Maps (FIRMs) and include Zone A (riverine flooding) and Zone V (coastal flooding with wave action). Buildings in SFHAs face significantly higher flood insurance premiums than those in moderate or low-risk zones.",
    category: "Property",
    relatedTerms: ["Flood Zone","NFIP","Base Flood Elevation","100-Year Flood"]
  },
  {
    term: "FIRM",
    definition: "Flood Insurance Rate Map - an official map created by FEMA that shows flood risk zones, base flood elevations, and floodplain boundaries for a community. FIRMs are used to determine flood insurance requirements and premium rates under the National Flood Insurance Program. These maps identify Special Flood Hazard Areas where flood insurance is mandatory for federally backed mortgages. Property owners can use FIRMs to understand their flood risk and make informed decisions about insurance coverage and property improvements. Maps are periodically updated as flood risk data changes.",
    category: "Property",
    relatedTerms: ["Flood Zone","Base Flood Elevation","NFIP","FEMA"]
  },
  {
    term: "100-Year Flood",
    definition: "A flood event that has a 1% probability of occurring in any given year, not a flood that happens once every 100 years. This statistical measure defines the Special Flood Hazard Area and base flood elevation used by FEMA and the National Flood Insurance Program. Properties in 100-year floodplains face mandatory flood insurance requirements if they have federally backed mortgages. The term is often misunderstood—a 100-year flood can occur multiple times within 100 years, or not at all. Over a 30-year mortgage, a property in a 100-year floodplain has a 26% chance of experiencing such a flood.",
    category: "Property",
    relatedTerms: ["Flood Zone","Base Flood Elevation","Special Flood Hazard Area","NFIP"]
  },
  {
    term: "Elevation Certificate",
    definition: "An official FEMA document that provides elevation information about a building's lowest floor and the ground elevation around the structure. Prepared by a licensed surveyor or engineer, this certificate is used to determine accurate flood insurance premium rates under the National Flood Insurance Program. Properties built at or above the Base Flood Elevation typically qualify for lower insurance rates. An Elevation Certificate may be required when purchasing flood insurance, refinancing a mortgage, or applying for a Letter of Map Amendment. The certificate is valid indefinitely unless the property or surrounding area is significantly altered.",
    category: "Property",
    relatedTerms: ["Base Flood Elevation","NFIP","Flood Insurance","FIRM"]
  },
  {
    term: "LFE",
    definition: "Lowest Floor Elevation - the measured distance of a building's lowest floor above the National Geodetic Vertical Datum (NGVD) or North American Vertical Datum (NAVD) as specified on the Flood Insurance Rate Map. The LFE is a critical measurement used to determine flood insurance premium rates under the National Flood Insurance Program. For buildings with basements, the LFE is the basement floor elevation. For buildings without basements, it's the elevation of the lowest floor including any attached garage or enclosure. A higher LFE relative to the Base Flood Elevation results in lower insurance premiums.",
    category: "Property",
    relatedTerms: ["Base Flood Elevation","Elevation Certificate","NFIP","Flood Insurance"]
  },
  {
    term: "Lowest Floor Elevation",
    definition: "The elevation of the lowest floor of a building, including basement, crawlspace, or enclosure, measured above a specific datum (NGVD or NAVD). This measurement is documented on an Elevation Certificate and is the primary factor in determining flood insurance rates. For rating purposes, the lowest floor includes any area with a floor below the Base Flood Elevation, even if it's only used for parking or storage. Buildings with the lowest floor at or above the BFE qualify for preferred risk or lower premium rates. Elevating the lowest floor is one of the most effective flood mitigation strategies.",
    category: "Property",
    relatedTerms: ["LFE","Base Flood Elevation","Elevation Certificate","Freeboard"]
  },
  {
    term: "DFE",
    definition: "Design Flood Elevation - the regulatory flood elevation adopted by a community that meets or exceeds the Base Flood Elevation. Many communities require structures to be built above the BFE by adding freeboard (typically 1-3 feet) to provide an additional margin of safety. The DFE is the minimum elevation at which new construction and substantial improvements must be built to comply with local floodplain management regulations. Building to the DFE rather than just the BFE provides better flood protection and may result in lower insurance premiums. The DFE is determined by local ordinances and varies by community.",
    category: "Property",
    relatedTerms: ["Base Flood Elevation","Freeboard","NFIP","Floodplain Management"]
  },
  {
    term: "Design Flood Elevation",
    definition: "The elevation of the design flood, which is the flood magnitude selected for floodplain management purposes and used to establish regulatory requirements. The DFE typically equals the Base Flood Elevation plus any freeboard required by the community. Local governments adopt DFE standards that meet or exceed FEMA's minimum BFE requirements to reduce flood risk and qualify for Community Rating System discounts. New buildings and substantial improvements must have their lowest floor (or lowest horizontal structural member in V zones) at or above the DFE. Compliance with DFE requirements is verified through Elevation Certificates.",
    category: "Property",
    relatedTerms: ["DFE","Base Flood Elevation","Freeboard","Community Rating System"]
  },
  {
    term: "BFD",
    definition: "Base Flood Depth - the depth shown on Flood Insurance Rate Maps for Zone AO that indicates the depth of water above the highest adjacent grade resulting from a base flood (1% annual chance flood). Unlike other flood zones that show elevation, Zone AO shows flood depth in feet. This depth measurement is used to determine the required elevation for new construction and to calculate flood insurance premiums. Properties in Zone AO must be elevated so that the lowest floor is above the highest adjacent grade by at least the BFD shown on the FIRM, plus any additional freeboard required by local ordinance.",
    category: "Property",
    relatedTerms: ["Base Flood Elevation","Zone AO","FIRM","Highest Adjacent Grade"]
  },
  {
    term: "Base Flood Depth",
    definition: "The vertical distance between the highest adjacent grade and the water surface elevation during a base flood (100-year flood). Shown on FIRMs for Zone AO areas where shallow flooding or sheet flow occurs, typically ranging from 1 to 3 feet. The BFD is used instead of Base Flood Elevation in areas where detailed hydraulic analyses have not been performed. Buildings in these zones must be elevated above the highest adjacent grade by at least the BFD amount. Insurance rates in Zone AO are based on the BFD and the building's elevation relative to the highest adjacent grade.",
    category: "Property",
    relatedTerms: ["BFD","Zone AO","Base Flood Elevation","Sheet Flow"]
  },
  {
    term: "Freeboard",
    definition: "Additional elevation above the Base Flood Elevation required by many communities as a factor of safety against higher flood levels than predicted. Freeboard compensates for uncertainties in flood calculations, wave action, and future development that may increase flood heights. Common freeboard requirements range from 1 to 3 feet above the BFE. Building with freeboard provides better flood protection and typically results in lower flood insurance premiums through the Community Rating System. Some communities mandate freeboard for new construction, while others offer it as a voluntary best practice. Freeboard is especially important in coastal areas subject to wave action.",
    category: "Property",
    relatedTerms: ["Base Flood Elevation","Design Flood Elevation","Community Rating System","Flood Insurance"]
  },
  {
    term: "Floodway",
    definition: "The channel of a river or stream and the adjacent land areas that must be reserved to discharge the base flood without cumulatively increasing the water surface elevation more than a designated height (typically one foot). Floodways are shown on Flood Insurance Rate Maps and represent the most hazardous portion of the floodplain due to high velocity water and debris. Development in floodways is strictly regulated or prohibited because any obstruction could increase flood heights on other properties. Buildings in floodways face the highest flood insurance rates and may be difficult or impossible to insure. Floodway boundaries are determined through detailed hydraulic modeling.",
    category: "Property",
    relatedTerms: ["Floodplain","Base Flood Elevation","FIRM","Special Flood Hazard Area"]
  },
  {
    term: "Floodplain",
    definition: "Any land area susceptible to being inundated by floodwater from any source, including rivers, streams, coastal waters, and areas with inadequate drainage. The regulatory floodplain is the land area covered by the floodwaters of the base flood (1% annual chance flood), also called the Special Flood Hazard Area. Floodplain management regulations restrict development in these areas to reduce flood damage and protect lives. Properties in the regulatory floodplain typically require flood insurance if they have federally backed mortgages. Floodplain boundaries are shown on FEMA Flood Insurance Rate Maps and are subject to change as conditions evolve.",
    category: "Property",
    relatedTerms: ["Special Flood Hazard Area","Floodway","Base Flood Elevation","FIRM"]
  },
  {
    term: "Pre-FIRM",
    definition: "A building constructed before the effective date of the first Flood Insurance Rate Map (FIRM) for a community. Pre-FIRM buildings were built before current floodplain management regulations and often do not meet modern elevation requirements. These structures typically qualify for subsidized flood insurance rates under the National Flood Insurance Program, though these subsidies are being phased out. Pre-FIRM buildings can maintain grandfathered rates if they met the floodplain management requirements in effect at the time of construction. When Pre-FIRM buildings undergo substantial improvement or substantial damage, they must be brought into compliance with current standards.",
    category: "Property",
    relatedTerms: ["Post-FIRM","FIRM","Grandfathered Rate","Substantial Improvement"]
  },
  {
    term: "Post-FIRM",
    definition: "A building constructed after the effective date of the first Flood Insurance Rate Map for a community. Post-FIRM buildings are required to meet floodplain management regulations, including elevation requirements, and typically have lower flood risk than Pre-FIRM structures. Flood insurance rates for Post-FIRM buildings are based on actuarial risk and are generally lower than Pre-FIRM rates if the building is properly elevated. These buildings must have an Elevation Certificate to document compliance with local regulations. Post-FIRM construction standards significantly reduce flood damage and insurance costs compared to older, non-compliant structures.",
    category: "Property",
    relatedTerms: ["Pre-FIRM","FIRM","Elevation Certificate","Base Flood Elevation"]
  },
  {
    term: "Substantial Improvement",
    definition: "Any reconstruction, rehabilitation, addition, or improvement of a building where the cost equals or exceeds 50% of the market value of the structure before the improvement began. When a building undergoes substantial improvement, it must be brought into compliance with current floodplain management regulations, including elevation requirements. This trigger applies cumulatively over a specified period (often 10 years) to prevent incremental improvements from avoiding compliance. Substantial improvement determinations are made by local floodplain administrators and can significantly impact project costs. Property owners should consult with local officials before starting major renovation projects in flood zones.",
    category: "Property",
    relatedTerms: ["Substantial Damage","Base Flood Elevation","Floodplain Management","Pre-FIRM"]
  },
  {
    term: "Substantial Damage",
    definition: "Damage of any origin sustained by a building where the cost of restoring the structure to its pre-damaged condition equals or exceeds 50% of the market value before the damage occurred. Substantially damaged buildings must be brought into compliance with current floodplain management regulations when repaired, including meeting elevation requirements. This applies to damage from any cause (flood, fire, earthquake, etc.), not just flooding. The 50% threshold is calculated using the building's market value excluding land value. Communities track cumulative damage over time to prevent property owners from avoiding compliance through multiple smaller repairs. Substantial damage determinations are made by local floodplain administrators.",
    category: "Property",
    relatedTerms: ["Substantial Improvement","Base Flood Elevation","Floodplain Management","Market Value"]
  },
  {
    term: "ICC Coverage",
    definition: "Increased Cost of Compliance coverage - an additional flood insurance benefit of up to $30,000 to help pay for mitigation measures that reduce flood risk after a flood loss. ICC coverage is automatically included in all NFIP policies at no additional cost. It can be used for elevation, relocation, demolition, or floodproofing of buildings that have been substantially damaged or repetitively flooded. ICC funds are paid in addition to building claim payments but cannot exceed $30,000. To qualify, the building must be declared substantially damaged by the community, and the mitigation work must meet NFIP and local requirements. ICC coverage helps property owners comply with floodplain management regulations after a loss.",
    category: "Property",
    relatedTerms: ["NFIP","Substantial Damage","Flood Insurance","Mitigation"]
  },
  {
    term: "Increased Cost of Compliance",
    definition: "Additional flood insurance coverage that pays up to $30,000 for costs to bring a substantially damaged or repetitively flooded building into compliance with current floodplain management regulations. This coverage is included automatically in all National Flood Insurance Program policies. Eligible activities include elevating the building above the Base Flood Elevation, relocating it outside the floodplain, demolishing it, or floodproofing (for non-residential buildings only). ICC payments are made after a qualifying flood loss and are separate from the building coverage limit. The property must be declared substantially damaged by the local floodplain administrator to access ICC benefits.",
    category: "Property",
    relatedTerms: ["ICC Coverage","NFIP","Substantial Damage","Base Flood Elevation"]
  },
  {
    term: "CRS",
    definition: "Community Rating System - a voluntary incentive program that recognizes and rewards communities for exceeding minimum National Flood Insurance Program floodplain management requirements. Communities that participate in CRS implement additional flood mitigation activities and receive discounted flood insurance rates for their residents. CRS classes range from 10 (no discount) to 1 (45% discount), with each class improvement providing a 5% premium reduction in Special Flood Hazard Areas and 10% in preferred risk areas. Activities that earn CRS credit include enhanced mapping, public information programs, drainage system maintenance, and higher regulatory standards. Over 1,500 communities participate in CRS, providing millions of dollars in annual premium savings.",
    category: "Property",
    relatedTerms: ["NFIP","Community Rating System","Flood Insurance","Floodplain Management"]
  },
  {
    term: "Community Rating System",
    definition: "A program administered by FEMA that provides flood insurance premium discounts to residents of communities that implement floodplain management practices beyond NFIP minimum requirements. Communities earn points through activities in four categories: public information, mapping and regulations, flood damage reduction, and warning and response. Points determine the community's CRS class (1-10), with each class providing a 5% premium discount in Special Flood Hazard Areas. Class 1 communities receive a 45% discount. The program encourages communities to reduce flood risk, protect natural floodplain functions, and facilitate accurate insurance rating. CRS communities must recertify annually and undergo detailed verification every few years.",
    category: "Property",
    relatedTerms: ["CRS","NFIP","Flood Insurance","Special Flood Hazard Area"]
  },
  {
    term: "LOMA",
    definition: "Letter of Map Amendment - an official document from FEMA that removes a property from the Special Flood Hazard Area when it is shown to be at or above the Base Flood Elevation. A LOMA is issued when a property was incorrectly included in the flood zone on the Flood Insurance Rate Map due to natural grade elevation. Property owners must submit an application with elevation data certified by a licensed surveyor or engineer. Once approved, a LOMA eliminates the mandatory flood insurance requirement for federally backed mortgages and may significantly reduce insurance costs. LOMAs are permanent unless the FIRM is revised. Similar letters include LOMR (Letter of Map Revision) for map changes based on physical alterations.",
    category: "Property",
    relatedTerms: ["LOMR","FIRM","Special Flood Hazard Area","Base Flood Elevation"]
  },
  {
    term: "Letter of Map Amendment",
    definition: "An official amendment issued by FEMA to remove a property or structure from a Special Flood Hazard Area shown on a Flood Insurance Rate Map. LOMAs are granted when elevation data demonstrates that the property is naturally at or above the Base Flood Elevation and was inadvertently included in the flood zone. The amendment does not physically change the FIRM but provides legal documentation that the property is not in the SFHA. Property owners must provide an Elevation Certificate and topographic data certified by a licensed professional. LOMA approval eliminates mandatory flood insurance requirements and can reduce insurance costs substantially. Processing typically takes 60-90 days and there is no fee for most residential properties.",
    category: "Property",
    relatedTerms: ["LOMA","FIRM","Base Flood Elevation","Elevation Certificate"]
  },
  {
    term: "Lloyd's of London",
    definition: "The world's specialist insurance and reinsurance marketplace, established in London in the 17th century. Lloyd's is not itself an insurance company but rather a marketplace where members join together in syndicates to underwrite insurance risks. The market separates capital provision (members) from underwriting expertise (managing agents). Lloyd's operates through a unique three-tier capital structure called the Chain of Security, which backs all policies written through the market. The Corporation of Lloyd's provides infrastructure and regulatory oversight, while syndicates conduct the actual underwriting. Lloyd's is known for insuring unique, complex, and high-value risks that may be difficult to place in standard markets.",
    category: "Industry",
    relatedTerms: ["Syndicate","Managing Agent","Coverholder","Excess and Surplus Lines"]
  },
  {
    term: "Syndicate",
    definition: "A Lloyd's syndicate is formed by one or more members joining together to accept insurance risks at Lloyd's of London. Each syndicate sets its own appetite for risk, develops a business plan, arranges reinsurance protection, and manages exposures and claims. A syndicate is not a legal entity and is formed for a single calendar year called a year of account. At the end of the year, it may reform with identical or similar membership. Syndicates are managed by Managing Agents who employ underwriters and oversee day-to-day operations. Each syndicate is identified by a unique number and operates independently within the Lloyd's marketplace.",
    category: "Industry",
    relatedTerms: ["Lloyd's of London","Managing Agent","Active Underwriter","Year of Account"]
  },
  {
    term: "Managing Agent",
    definition: "A company authorized and regulated by the UK's Prudential Regulation Authority (PRA) and Financial Conduct Authority (FCA), as well as Lloyd's, that manages one or more syndicates on behalf of members at Lloyd's of London. Managing agents employ underwriters, oversee underwriting operations, manage infrastructure, handle day-to-day syndicate operations, and ensure compliance with regulatory requirements. They act as the operational arm of Lloyd's syndicates, executing the business plan and managing the syndicate's exposures and claims on behalf of the capital-providing members.",
    category: "Industry",
    relatedTerms: ["Syndicate","Lloyd's of London","Active Underwriter","Coverholder"]
  },
  {
    term: "Coverholder",
    definition: "A company or partnership authorized by a Lloyd's Managing Agent to enter into contracts of insurance to be underwritten by syndicate members. Coverholders act as agents of the managing agent (not the policyholder) under a binding authority agreement. This delegation allows the coverholder to issue policies and handle claims within specified parameters without referring each risk back to the syndicate. Coverholders are typically located in markets outside London and provide local market access and expertise. They must comply with Lloyd's standards and are subject to oversight by the managing agent.",
    category: "Industry",
    relatedTerms: ["Binding Authority","Managing Agent","Lloyd's of London","Syndicate"]
  },
  {
    term: "Binding Authority",
    definition: "An agreement between a Lloyd's Managing Agent and a Coverholder under which the Managing Agent delegates authority to enter into contracts of insurance on behalf of syndicate members. The binding authority specifies the types of risks that can be underwritten, premium limits, terms and conditions, claims handling procedures, and reporting requirements. This arrangement allows coverholders to bind coverage immediately without seeking approval for each individual risk, providing efficiency and local market responsiveness while maintaining oversight and control parameters set by the managing agent.",
    category: "Industry",
    relatedTerms: ["Coverholder","Managing Agent","Lloyd's of London","Delegated Authority"]
  },
  {
    term: "Active Underwriter",
    definition: "The individual at the underwriting box within Lloyd's of London with principal authority to accept insurance and reinsurance risk on behalf of the members of a syndicate. The active underwriter is responsible for setting underwriting strategy, making binding decisions on risks presented by Lloyd's brokers, managing the syndicate's portfolio, and ensuring that underwriting activities align with the syndicate's business plan and risk appetite. This role requires deep technical expertise, market knowledge, and strong decision-making capabilities as the active underwriter's choices directly impact syndicate performance and member returns.",
    category: "Industry",
    relatedTerms: ["Syndicate","Underwriting Box","Lloyd's Broker","Managing Agent"]
  },
  {
    term: "Lloyd's Broker",
    definition: "An accredited broker authorized to place insurance business at Lloyd's of London. Lloyd's brokers act on behalf of policyholders to negotiate terms with syndicates and secure coverage. They present risks to active underwriters at the underwriting box, negotiate premiums and terms, and coordinate placement across multiple syndicates when risks are shared. Lloyd's brokers must meet strict accreditation requirements and maintain professional standards. They serve as the critical intermediary between clients seeking coverage and the syndicates willing to underwrite risks, leveraging market relationships and technical expertise to achieve optimal placements.",
    category: "Industry",
    relatedTerms: ["Lloyd's of London","Syndicate","Active Underwriter","Underwriting Box"]
  },
  {
    term: "Underwriting Box",
    definition: "The physical location (desk or area) within the Lloyd's of London building where syndicate underwriters sit and where Lloyd's brokers meet them to place insurance risks. The underwriting box is where face-to-face negotiations occur, terms are discussed, and coverage decisions are made. Each syndicate maintains its own underwriting box, and the active underwriter conducts business from this location. While much Lloyd's business has moved to electronic platforms, the underwriting box remains an iconic feature of the Lloyd's marketplace and continues to facilitate complex risk placements that benefit from direct negotiation and relationship-based underwriting.",
    category: "Industry",
    relatedTerms: ["Active Underwriter","Lloyd's Broker","Syndicate","Lloyd's of London"]
  },
  {
    term: "Excess and Surplus Lines",
    definition: "The non-admitted insurance market for risks that cannot be placed in the standard admitted market due to unique characteristics, high risk, or lack of available coverage. Excess and surplus lines insurers are not licensed (admitted) in the state where the risk is located, which provides them flexibility in rates and policy forms not subject to state prior approval requirements. However, they must meet financial requirements and are listed on state-approved eligible surplus lines insurer lists. The E&S market serves as a critical safety valve for the insurance system, providing coverage for unique, high-risk, or emerging exposures. Common E&S placements include high-value properties, unusual liability risks, and specialized commercial coverages. The U.S. surplus lines market exceeded $131 billion in direct premiums written in 2024, representing approximately 12% of the total property and casualty market.",
    category: "Industry",
    relatedTerms: ["Non-Admitted Insurance","Surplus Lines Broker","Diligent Search","Admitted Carrier"]
  },
  {
    term: "Non-Admitted Insurance",
    definition: "Insurance placed with carriers not licensed (admitted) in the state where the insured risk is located. Non-admitted insurers, also called surplus lines insurers, are not subject to state rate and form approval requirements, giving them flexibility to underwrite unique or high-risk exposures. However, they must meet financial requirements and be listed on the state's approved eligible surplus lines insurer list. Non-admitted policies are not protected by state guaranty funds in the event of insurer insolvency, though historical insolvency rates for surplus lines carriers are low. Non-admitted insurance can only be placed after a surplus lines broker conducts a diligent search in the admitted market and documents that coverage is not available from admitted carriers.",
    category: "Industry",
    relatedTerms: ["Excess and Surplus Lines","Admitted Carrier","Surplus Lines Broker","Guaranty Fund"]
  },
  {
    term: "Surplus Lines Broker",
    definition: "A specially licensed insurance broker authorized to place insurance with non-admitted (surplus lines) carriers. Surplus lines brokers must hold a surplus lines license in addition to a standard insurance broker license. Before placing coverage in the surplus lines market, the broker is required to conduct a diligent search to demonstrate that coverage is not available from admitted carriers in the standard market. The surplus lines broker is responsible for ensuring the surplus lines insurer meets state eligibility criteria, collecting and remitting surplus lines premium taxes to the state, and providing required filings and documentation. They serve as the critical link between clients with hard-to-place risks and the non-admitted insurance market.",
    category: "Industry",
    relatedTerms: ["Excess and Surplus Lines","Diligent Search","Surplus Lines Tax","Non-Admitted Insurance"]
  },
  {
    term: "Diligent Search",
    definition: "The requirement that a surplus lines broker must make a good-faith effort to place insurance coverage with admitted carriers in the standard market before resorting to the non-admitted (surplus lines) market. The diligent search typically requires the broker to contact a specified number of admitted insurers (often three or more, depending on state requirements) and document their declinations or inability to provide adequate coverage. The broker must maintain records of the search efforts, including which carriers were contacted, dates of contact, and reasons for declination. This requirement protects the admitted market and ensures that surplus lines are used only when standard market options are genuinely unavailable.",
    category: "Industry",
    relatedTerms: ["Surplus Lines Broker","Excess and Surplus Lines","Admitted Carrier","Non-Admitted Insurance"]
  },
  {
    term: "Surplus Lines Tax",
    definition: "A tax imposed by states on surplus lines (non-admitted) insurance premiums, typically ranging from 2% to 6% of the premium amount. The surplus lines tax is collected by the surplus lines broker at the time of policy placement and remitted to the state where the insured risk is located (the 'home state' under the Nonadmitted and Reinsurance Reform Act). This tax serves as a substitute for the premium taxes that admitted insurers pay. The broker is responsible for calculating, collecting, and remitting the tax, along with required filings documenting the placement. Stamping offices often facilitate the collection and distribution of surplus lines taxes across multiple states.",
    category: "Industry",
    relatedTerms: ["Surplus Lines Broker","Excess and Surplus Lines","Stamping Office","Non-Admitted Insurance"]
  },
  {
    term: "Admitted Carrier",
    definition: "An insurance company that is licensed by a state's insurance department to do business in that state. Admitted carriers must comply with state regulations including rate and form approval requirements, financial solvency standards, and market conduct rules. Their policies are backed by the state guaranty fund, which provides protection to policyholders in the event of insurer insolvency. Admitted carriers file rates and policy forms with state regulators for approval before use. They are subject to regular financial examinations and must meet ongoing reporting requirements. The admitted market represents the standard insurance marketplace, as distinguished from the surplus lines (non-admitted) market.",
    category: "Industry",
    relatedTerms: ["Non-Admitted Insurance","Excess and Surplus Lines","Guaranty Fund","Certificate of Authority"]
  },
  {
    term: "Stamping Office",
    definition: "An organization that collects surplus lines premium taxes, fees, and required filings on behalf of surplus lines brokers and forwards them to state regulatory authorities. Stamping offices serve as clearinghouses that simplify the administrative burden of multi-state surplus lines placements by providing a centralized point for tax collection and regulatory compliance. They verify that surplus lines insurers are eligible to write business in the applicable states, validate diligent search documentation, and ensure proper tax calculation and remittance. The Surplus Line Taxes and Fees Multi-State Compliance Compact (SLTC) is a prominent example of a stamping office that facilitates compliance across multiple jurisdictions.",
    category: "Industry",
    relatedTerms: ["Surplus Lines Tax","Surplus Lines Broker","Excess and Surplus Lines","NAIC"]
  },
  {
    term: "NAIC",
    definition: "The National Association of Insurance Commissioners, an organization of state insurance regulators from all 50 states, the District of Columbia, and U.S. territories. The NAIC develops model laws and regulations, provides regulatory support and education, maintains insurance industry databases, and coordinates regulatory oversight across jurisdictions. While the NAIC itself does not have regulatory authority, its model acts and guidelines are frequently adopted by state legislatures and insurance departments, creating consistency in insurance regulation across the United States. The NAIC oversees initiatives including risk-based capital standards, financial reporting requirements, market conduct standards, and the Quarterly Listing of Alien Insurers eligible for surplus lines placements.",
    category: "Industry",
    relatedTerms: ["Admitted Carrier","Surplus Lines Broker","Risk-Based Capital","State Insurance Department"]
  },
  {
    term: "Guaranty Fund",
    definition: "A funding mechanism employed by states to provide funds to cover policyholder obligations of insolvent insurance companies. State guaranty associations are established by state law and funded by assessments on insurance companies licensed in that state. When an admitted insurer becomes insolvent, the guaranty fund steps in to pay covered claims up to statutory limits, ensuring policyholders receive benefits they were promised. Coverage limits vary by state but typically range from $300,000 to $500,000 per claim. Guaranty fund protection applies only to policies issued by admitted carriers; surplus lines (non-admitted) insurance is not covered by guaranty funds. All licensed insurers in a state are required to participate in and contribute to the state guaranty association.",
    category: "Industry",
    relatedTerms: ["Admitted Carrier","Non-Admitted Insurance","Insolvency","State Insurance Department"]
  },
  {
    term: "Alien Insurer",
    definition: "An insurance company formed according to the laws of a foreign country (outside the United States). To legally sell insurance products in a U.S. state, an alien insurer must conform to that state's regulatory standards and obtain necessary approvals. Alien insurers may write business as admitted carriers (if licensed in the state) or as surplus lines carriers (if listed on the NAIC Quarterly Listing of Alien Insurers). Lloyd's of London syndicates are classified as alien insurers when writing business in the United States. Alien insurers must meet financial requirements, maintain trust funds or letters of credit in the U.S., and comply with applicable state regulations to maintain their eligibility.",
    category: "Industry",
    relatedTerms: ["Lloyd's of London","Non-Admitted Insurance","NAIC","Foreign Insurer"]
  },
  {
    term: "Year of Account",
    definition: "The calendar year in which an insurance policy is written at Lloyd's of London. All premiums and claims from policies incepting in a specific year are allocated to that year of account, regardless of when claims are paid. Years of account run for a minimum of 36 months before being closed through a process called Reinsurance to Close (RITC), which transfers all remaining liabilities to a subsequent year of account. This accounting method allows Lloyd's syndicates to assess the profitability of each underwriting year separately and provides a mechanism for managing long-tail liabilities. The year of account system is unique to Lloyd's and differs from standard annual accounting used by traditional insurance companies.",
    category: "Industry",
    relatedTerms: ["Syndicate","Lloyd's of London","Reinsurance to Close","Underwriting Year"]
  },
  {
    term: "Admitted Company",
    definition: "An insurance company licensed to do business in a state, even if domiciled in an alternative state or country. Admitted companies hold a Certificate of Authority from the state insurance department, allowing them to write policies for risks located in that state. They must comply with all state regulations including rate and form filings, financial reporting, market conduct standards, and participation in the state guaranty fund. Admitted companies are subject to the state's regulatory oversight and examination authority. The term 'admitted' distinguishes these licensed carriers from 'non-admitted' or surplus lines insurers that are not licensed in the state but may write business under surplus lines laws.",
    category: "Industry",
    relatedTerms: ["Certificate of Authority","Non-Admitted Insurance","Guaranty Fund","Domiciliary State"]
  },
  {
    term: "Certificate of Authority",
    definition: "A license issued by a state insurance department that authorizes an insurance company to transact insurance business in that state. Also called a license to do business, the certificate of authority is granted after the insurer demonstrates it meets the state's financial, organizational, and regulatory requirements. The certificate specifies which lines of insurance the company is authorized to write. Insurers must maintain compliance with ongoing requirements including financial reporting, examinations, and solvency standards to keep their certificate of authority in force. Companies holding a certificate of authority in a state are considered 'admitted' carriers in that state and are subject to full state regulatory oversight.",
    category: "Industry",
    relatedTerms: ["Admitted Company","State Insurance Department","Domiciliary State","Foreign Insurer"]
  },
  {
    term: "Domiciliary State",
    definition: "The state in which an insurance company is incorporated or organized. The domiciliary state has primary regulatory authority over the insurer, including conducting financial examinations, approving corporate changes, and overseeing solvency. The domiciliary state insurance department serves as the lead regulator even when the company is licensed to do business in multiple states. If an insurer becomes insolvent, the domiciliary state's insurance commissioner typically serves as the receiver or liquidator. Insurers must comply with the insurance laws and regulations of their domiciliary state as well as any other states where they are licensed to write business (called 'foreign' states from the insurer's perspective).",
    category: "Industry",
    relatedTerms: ["Admitted Company","Foreign Insurer","State Insurance Department","Certificate of Authority"]
  },
  {
    term: "Foreign Insurer",
    definition: "An insurance company that is licensed to do business in a state other than its domiciliary state. From the perspective of any given state, a 'foreign' insurer is one incorporated or organized in a different U.S. state. For example, a company domiciled in Connecticut writing business in New York would be considered a foreign insurer in New York. Foreign insurers must obtain a Certificate of Authority from each state where they wish to write business and comply with that state's regulatory requirements. This term is distinct from 'alien insurer,' which refers to companies formed in countries outside the United States. Most insurance companies operate as foreign insurers in multiple states beyond their domiciliary state.",
    category: "Industry",
    relatedTerms: ["Domiciliary State","Alien Insurer","Certificate of Authority","Admitted Company"]
  },
  {
    term: "Advisory Organization",
    definition: "A group supported by member insurance companies whose function is to gather loss statistics, develop loss costs and rating information, and make this data available to members. Advisory organizations also file rates on behalf of smaller insurance companies and develop standardized policy forms. Examples include the Insurance Services Office (ISO) and the National Council on Compensation Insurance (NCCI). These organizations provide actuarial services, research, and statistical analysis that help insurers price policies accurately and comply with regulatory requirements. Unlike rating bureaus of the past, modern advisory organizations provide information and recommendations but do not set mandatory rates; each insurer makes independent pricing decisions based on the advisory data.",
    category: "Industry",
    relatedTerms: ["Rating Bureau","Loss Costs","ISO","Actuarial Data"]
  },
  {
    term: "Risk-Based Capital",
    definition: "A regulatory framework that requires insurance companies to maintain capital reserves proportional to the risks inherent in their business operations. The NAIC Risk-Based Capital (RBC) system calculates minimum capital requirements based on four categories of risk: asset risk (investments), underwriting risk (pricing and reserving), credit risk (reinsurance and other recoverables), and off-balance sheet risk. Insurers must file annual RBC reports, and regulatory intervention is triggered if an insurer's actual capital falls below specified RBC thresholds. The RBC ratio compares an insurer's total adjusted capital to its risk-based capital requirement. Ratios below certain levels trigger increasingly severe regulatory actions, from company action level (200%) to mandatory control level (70%), where regulators must place the insurer under regulatory control.",
    category: "Industry",
    relatedTerms: ["NAIC","Solvency","Capital and Surplus","Financial Examination"]
  },
  {
    term: "MCCA",
    definition: "Michigan Catastrophic Claims Association - a state-mandated reinsurance association that reimburses auto insurers for Personal Injury Protection (PIP) medical claims exceeding a set threshold. The MCCA collects an assessment fee from every insured Michigan driver to fund catastrophic injury claims under Michigan's no-fault auto insurance system.",
    category: "Auto",
    relatedTerms: ["No-Fault Insurance","Personal Injury Protection","Unlimited PIP"]
  },
  {
    term: "Michigan Catastrophic Claims Association",
    definition: "A private, non-profit association created by the Michigan Legislature in 1978 to protect the financial integrity of Michigan's auto insurance industry. The MCCA provides reinsurance for unlimited lifetime medical benefits under Michigan's no-fault system, reimbursing insurers for PIP claims that exceed the retention limit.",
    category: "Auto",
    relatedTerms: ["MCCA","No-Fault Insurance","Personal Injury Protection"]
  },
  {
    term: "Unlimited PIP",
    definition: "A unique feature of Michigan's no-fault auto insurance system that provides unlimited lifetime medical coverage for injuries sustained in auto accidents. Policyholders can choose unlimited PIP or select capped amounts ($500,000, $250,000, or $50,000) under Michigan's 2019 auto insurance reform.",
    category: "Auto",
    relatedTerms: ["Personal Injury Protection","MCCA","No-Fault Insurance"]
  },
  {
    term: "Managed Competition",
    definition: "Massachusetts' unique auto insurance system implemented in 2008, replacing the prior state-set rate system. Under managed competition, insurance companies can set their own rates and compete for customers, but insurers are still required to provide coverage to all drivers who apply (no cherry-picking).",
    category: "Auto",
    relatedTerms: ["Rate Bureau","Admitted Carrier"]
  },
  {
    term: "Lava Zone",
    definition: "Hawaii's volcanic hazard classification system ranging from Zone 1 (highest risk) to Zone 9 (lowest risk), based on the frequency and coverage of historic lava flows. Lava zones significantly affect property insurance availability and rates, with properties in Zones 1 and 2 often requiring coverage through the Hawaii Property Insurance Association.",
    category: "Property",
    relatedTerms: ["HPIA","Volcanic Eruption Coverage","All-Risk Coverage"]
  },
  {
    term: "HPIA",
    definition: "Hawaii Property Insurance Association - a residual market mechanism that provides property insurance for homes in high-risk lava zones (primarily Zones 1 and 2) that cannot obtain coverage in the voluntary market. HPIA is an association of all property insurers licensed in Hawaii.",
    category: "Property",
    relatedTerms: ["Lava Zone","Residual Market","FAIR Plan"]
  },
  {
    term: "Wind Pool",
    definition: "A residual market mechanism (also called Wind and Hail Underwriting Association) that provides wind and hail coverage for coastal properties unable to obtain coverage in the voluntary market. Common in hurricane-prone states like South Carolina, North Carolina, Texas, and Louisiana.",
    category: "Property",
    relatedTerms: ["FAIR Plan","Residual Market","Hurricane Deductible"]
  },
  {
    term: "HHRF",
    definition: "Hawaii Hurricane Relief Fund - a state program that provides hurricane insurance coverage for condominium associations (AOAOs) that have been denied coverage by at least two private insurers. The fund was created to address the hurricane insurance availability crisis in Hawaii.",
    category: "Property",
    relatedTerms: ["Hurricane Insurance","Wind Pool","Residual Market"]
  },
  {
    term: "MVAIC",
    definition: "Motor Vehicle Accident Indemnification Corporation - a New York state fund that provides compensation to innocent victims injured by uninsured motorists, hit-and-run drivers, or financially irresponsible motorists. MVAIC is funded by assessments on auto insurers doing business in New York.",
    category: "Auto",
    relatedTerms: ["Uninsured Motorist Coverage","Hit and Run","Financially Irresponsible Motorist"]
  },
  {
    term: "Financially Irresponsible Motorist",
    definition: "A New York insurance term for a driver who fails to maintain required auto insurance coverage or cannot pay for damages they cause. Victims of financially irresponsible motorists may file claims with MVAIC (Motor Vehicle Accident Indemnification Corporation).",
    category: "Auto",
    relatedTerms: ["MVAIC","Uninsured Motorist Coverage","Underinsured Motorist Coverage"]
  },
  {
    term: "Rate Bureau",
    definition: "An organization that collects loss statistics and develops advisory insurance rates for its member companies. North Carolina Rate Bureau (NCRB) is a prominent example, providing rating services for auto, property, and workers compensation insurance. Some states use rate bureaus while others allow insurers to file their own rates.",
    category: "Industry",
    relatedTerms: ["Advisory Organization","NAIC","Loss Ratio"]
  },
  {
    term: "NCRB",
    definition: "North Carolina Rate Bureau - a non-profit rating bureau created by the North Carolina General Assembly that provides services and programs for automobile, property, and workers compensation insurance. The NCRB collects loss data, develops rates, and administers various insurance programs in North Carolina.",
    category: "Industry",
    relatedTerms: ["Rate Bureau","Advisory Organization","Workers Compensation"]
  },
  {
    term: "Volcanic Eruption Coverage",
    definition: "Insurance protection for property damage caused by volcanic activity, including lava flow, volcanic blast, airborne shock waves, ash, dust, or particulate matter. In Hawaii, most all-risk homeowners policies include volcanic eruption coverage, though availability varies by lava zone. There is no specific 'lava insurance' policy.",
    category: "Property",
    relatedTerms: ["Lava Zone","HPIA","All-Risk Coverage"]
  },
  {
    term: "Beach Plan",
    definition: "A state-sponsored property insurance program that provides wind and hail coverage for coastal properties in hurricane-prone areas. Beach Plans operate as residual markets when private insurers decline to provide coverage. Also known as Wind Pools or Wind and Hail Underwriting Associations.",
    category: "Property",
    relatedTerms: ["Wind Pool","FAIR Plan","Residual Market"]
  },
  {
    term: "Regulation 62",
    definition: "New York's insurance regulation (11 NYCRR 52) that governs health insurance practices, including minimum loss ratio requirements (typically 65% for group health), claims payment standards, and preexisting condition provisions. Regulation 62 is one of New York's most important health insurance regulations.",
    category: "Health",
    relatedTerms: ["Loss Ratio","DFS","Claims-Made Policy"]
  }
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
  Auto: "https://files.manuscdn.com/user_upload_by_module/session_file/103860271/UTnWZGQKiFCXSrix.png",
  Health: "https://files.manuscdn.com/user_upload_by_module/session_file/103860271/nwNyPXGkqnKggHhR.png",
  Life: "https://files.manuscdn.com/user_upload_by_module/session_file/103860271/rlmPRimXyAXvRvHV.png",
  Property: "https://files.manuscdn.com/user_upload_by_module/session_file/103860271/niZqJgXhEbsdrVRb.png",
  Business: "https://files.manuscdn.com/user_upload_by_module/session_file/103860271/UTnWZGQKiFCXSrix.png",
  General: "https://files.manuscdn.com/user_upload_by_module/session_file/103860271/UTnWZGQKiFCXSrix.png",
  Claims: "https://files.manuscdn.com/user_upload_by_module/session_file/103860271/UTnWZGQKiFCXSrix.png",
  Industry: "https://files.manuscdn.com/user_upload_by_module/session_file/103860271/UTnWZGQKiFCXSrix.png"
};
