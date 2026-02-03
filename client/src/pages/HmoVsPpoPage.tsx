import { useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check, X } from "lucide-react";
import InsuranceChatbot from "@/components/InsuranceChatbot";

export default function HmoVsPpoPage() {
  useEffect(() => {
    document.title = "HMO vs PPO: Health Insurance Plan Comparison - Insurance Glossary";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Compare HMO and PPO health insurance plans side-by-side. Understand costs, flexibility, and coverage differences to choose the right plan for your needs.");
    }
    
    // Update Open Graph and Twitter meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', "HMO vs PPO: Health Insurance Plan Comparison");
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', "Compare HMO and PPO health insurance plans side-by-side. Understand costs, flexibility, and coverage differences.");
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', "https://insurance-glossary.manus.space/compare/hmo-vs-ppo");
    
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', "HMO vs PPO: Health Insurance Plan Comparison");
    
    const twitterDesc = document.querySelector('meta[property="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', "Compare HMO and PPO health insurance plans side-by-side. Understand costs, flexibility, and coverage differences.");
    
    const twitterUrl = document.querySelector('meta[property="twitter:url"]');
    if (twitterUrl) twitterUrl.setAttribute('content', "https://insurance-glossary.manus.space/compare/hmo-vs-ppo");
    
    // Add Schema.org ComparisonTable structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "HMO vs PPO Health Insurance Comparison",
      "description": "Detailed comparison of HMO and PPO health insurance plans including costs, flexibility, and coverage",
      "mainEntity": {
        "@type": "Table",
        "about": "Health insurance plan comparison"
      }
    };
    
    let script = document.getElementById('comparison-structured-data') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = 'comparison-structured-data';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/95 backdrop-blur-sm sticky top-0 z-40">
        <div className="container py-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Glossary
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <Badge className="mb-2">Health Insurance Comparison</Badge>
            <h1 className="text-4xl md:text-5xl font-semibold">
              HMO vs PPO: Which Health Insurance Plan is Right for You?
            </h1>
            <p className="text-xl text-muted-foreground">
              Compare costs, flexibility, and coverage to make an informed decision about your health insurance plan.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6">
            {/* HMO Card */}
            <Card className="card-organic">
              <CardHeader>
                <CardTitle className="text-3xl">HMO</CardTitle>
                <p className="text-muted-foreground">Health Maintenance Organization</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="text-lg">💰</span> Cost
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Lower monthly premiums</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Lower out-of-pocket costs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Fixed copays for most services</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="text-lg">🏥</span> Network & Flexibility
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span>Must use in-network providers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span>Requires primary care physician (PCP)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span>Referrals needed for specialists</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span>No out-of-network coverage (except emergencies)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="text-lg">✅</span> Best For
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Budget-conscious individuals and families</li>
                    <li>• Those who don't mind coordinating care through a PCP</li>
                    <li>• People with predictable healthcare needs</li>
                    <li>• Those living in areas with strong HMO networks</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* PPO Card */}
            <Card className="card-organic border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-3xl">PPO</CardTitle>
                <p className="text-muted-foreground">Preferred Provider Organization</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="text-lg">💰</span> Cost
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span>Higher monthly premiums</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span>Higher deductibles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Coinsurance after deductible</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="text-lg">🏥</span> Network & Flexibility
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Can see any provider (in or out-of-network)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span>No PCP required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span>No referrals needed for specialists</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Out-of-network coverage available (higher cost)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="text-lg">✅</span> Best For
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Those who value flexibility and choice</li>
                    <li>• People who see specialists frequently</li>
                    <li>• Individuals with established doctors outside HMO networks</li>
                    <li>• Those willing to pay more for convenience</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Side-by-Side Comparison Table */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Quick Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold">Feature</th>
                      <th className="text-center py-3 px-4 font-semibold">HMO</th>
                      <th className="text-center py-3 px-4 font-semibold">PPO</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4">Monthly Premium</td>
                      <td className="text-center py-3 px-4 text-green-600 font-semibold">Lower</td>
                      <td className="text-center py-3 px-4 text-red-600">Higher</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Deductible</td>
                      <td className="text-center py-3 px-4 text-green-600 font-semibold">Lower</td>
                      <td className="text-center py-3 px-4 text-red-600">Higher</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Primary Care Physician Required</td>
                      <td className="text-center py-3 px-4">Yes</td>
                      <td className="text-center py-3 px-4 text-green-600 font-semibold">No</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Specialist Referrals</td>
                      <td className="text-center py-3 px-4">Required</td>
                      <td className="text-center py-3 px-4 text-green-600 font-semibold">Not Required</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Out-of-Network Coverage</td>
                      <td className="text-center py-3 px-4 text-red-600">No (except emergencies)</td>
                      <td className="text-center py-3 px-4 text-green-600 font-semibold">Yes (higher cost)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Flexibility</td>
                      <td className="text-center py-3 px-4">Limited</td>
                      <td className="text-center py-3 px-4 text-green-600 font-semibold">High</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Best For</td>
                      <td className="text-center py-3 px-4 text-sm">Budget-conscious, predictable care</td>
                      <td className="text-center py-3 px-4 text-sm">Flexibility, frequent specialists</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Key Takeaways */}
          <Card className="mt-8 bg-accent/10">
            <CardHeader>
              <CardTitle>Key Takeaways</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                <strong>Choose HMO if:</strong> You want lower premiums and out-of-pocket costs, don't mind coordinating care through a primary care physician, and have access to a strong local HMO network.
              </p>
              <p>
                <strong>Choose PPO if:</strong> You value flexibility and choice in providers, see specialists frequently, have established relationships with out-of-network doctors, or are willing to pay higher premiums for convenience.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> Some employers offer both HMO and PPO options. Review your specific plan documents, provider networks, and total estimated costs (premiums + expected out-of-pocket) before deciding.
              </p>
            </CardContent>
          </Card>

          {/* Related Terms */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Related Insurance Terms</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link href="/term/copayment">
                <Card className="card-organic hover:scale-[1.02] transition-transform cursor-pointer">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Copayment</h3>
                    <p className="text-sm text-muted-foreground">Fixed amount for covered services</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/term/coinsurance">
                <Card className="card-organic hover:scale-[1.02] transition-transform cursor-pointer">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Coinsurance</h3>
                    <p className="text-sm text-muted-foreground">Percentage of costs you pay</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/term/deductible">
                <Card className="card-organic hover:scale-[1.02] transition-transform cursor-pointer">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Deductible</h3>
                    <p className="text-sm text-muted-foreground">Amount paid before insurance kicks in</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/term/out-of-pocket-maximum">
                <Card className="card-organic hover:scale-[1.02] transition-transform cursor-pointer">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Out-of-Pocket Maximum</h3>
                    <p className="text-sm text-muted-foreground">Maximum you'll pay in a year</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/term/premium">
                <Card className="card-organic hover:scale-[1.02] transition-transform cursor-pointer">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Premium</h3>
                    <p className="text-sm text-muted-foreground">Monthly insurance payment</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/term/in-network">
                <Card className="card-organic hover:scale-[1.02] transition-transform cursor-pointer">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">In-Network</h3>
                    <p className="text-sm text-muted-foreground">Providers contracted with your plan</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <InsuranceChatbot />
    </div>
  );
}
