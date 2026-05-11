import { useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check, X } from "lucide-react";
import InsuranceChatbot from "@/components/InsuranceChatbot";

export default function TermVsWholeLifePage() {
  useEffect(() => {
    document.title = "Term vs Whole Life Insurance: Complete Comparison - Insurance Glossary";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Compare Term and Whole Life insurance side-by-side. Understand costs, coverage duration, cash value, and which type is right for your financial goals.");
    }
    
    // Update Open Graph and Twitter meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', "Term vs Whole Life Insurance: Complete Comparison");
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', "Compare Term and Whole Life insurance side-by-side. Understand costs, coverage duration, and cash value.");
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', "https://theinsuranceglossary.com/compare/term-vs-whole-life");
    
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', "Term vs Whole Life Insurance: Complete Comparison");
    
    const twitterDesc = document.querySelector('meta[property="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', "Compare Term and Whole Life insurance side-by-side. Understand costs, coverage duration, and cash value.");
    
    const twitterUrl = document.querySelector('meta[property="twitter:url"]');
    if (twitterUrl) twitterUrl.setAttribute('content', "https://theinsuranceglossary.com/compare/term-vs-whole-life");
    
    // Add Schema.org structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Term vs Whole Life Insurance Comparison",
      "description": "Detailed comparison of Term and Whole Life insurance including costs, coverage duration, and cash value",
      "mainEntity": {
        "@type": "Table",
        "about": "Life insurance type comparison"
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
            <Badge className="mb-2">Life Insurance Comparison</Badge>
            <h1 className="text-4xl md:text-5xl font-semibold">
              Term vs Whole Life Insurance: Which Should You Choose?
            </h1>
            <p className="text-xl text-muted-foreground">
              Compare costs, coverage duration, and investment features to find the right life insurance for your family.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Cards */}
      <section className="py-16">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Term Life Card */}
            <Card className="card-organic border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-3xl">Term Life Insurance</CardTitle>
                <p className="text-muted-foreground">Coverage for a Specific Period</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="text-lg">💰</span> Cost
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Much lower premiums (5-10x cheaper)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Affordable for large coverage amounts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Fixed premiums during term</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="text-lg">⏰</span> Coverage Duration
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span>Expires after term (10, 20, or 30 years)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span>No payout if you outlive the term</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Can often renew or convert to permanent</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="text-lg">📊</span> Cash Value & Investment
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span>No cash value accumulation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span>Cannot borrow against policy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Pure death benefit protection</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="text-lg">✅</span> Best For
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Young families with limited budgets</li>
                    <li>• Covering temporary needs (mortgage, kids' education)</li>
                    <li>• Maximizing death benefit for lowest cost</li>
                    <li>• Those who prefer to invest separately</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Whole Life Card */}
            <Card className="card-organic">
              <CardHeader>
                <CardTitle className="text-3xl">Whole Life Insurance</CardTitle>
                <p className="text-muted-foreground">Permanent Lifetime Coverage</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="text-lg">💰</span> Cost
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span>Much higher premiums (5-10x more expensive)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Fixed premiums for life</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Part of premium builds cash value</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="text-lg">⏰</span> Coverage Duration
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Covers you for entire life</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Guaranteed death benefit payout</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Never expires as long as premiums paid</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="text-lg">📊</span> Cash Value & Investment
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Builds cash value over time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Can borrow against cash value</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Tax-deferred growth</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span>Lower returns than other investments</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="text-lg">✅</span> Best For
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• High-income earners maxing out retirement accounts</li>
                    <li>• Estate planning and wealth transfer</li>
                    <li>• Permanent coverage needs (final expenses, estate taxes)</li>
                    <li>• Those wanting forced savings component</li>
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
                      <th className="text-center py-3 px-4 font-semibold">Term Life</th>
                      <th className="text-center py-3 px-4 font-semibold">Whole Life</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4">Monthly Premium (30-year-old, $500k)</td>
                      <td className="text-center py-3 px-4 text-green-600 font-semibold">$25-40/month</td>
                      <td className="text-center py-3 px-4 text-red-600">$400-600/month</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Coverage Duration</td>
                      <td className="text-center py-3 px-4">10-30 years</td>
                      <td className="text-center py-3 px-4 text-green-600 font-semibold">Lifetime</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Cash Value</td>
                      <td className="text-center py-3 px-4 text-red-600">None</td>
                      <td className="text-center py-3 px-4 text-green-600 font-semibold">Yes</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Can Borrow Against Policy</td>
                      <td className="text-center py-3 px-4 text-red-600">No</td>
                      <td className="text-center py-3 px-4 text-green-600 font-semibold">Yes</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Guaranteed Payout</td>
                      <td className="text-center py-3 px-4">Only if death during term</td>
                      <td className="text-center py-3 px-4 text-green-600 font-semibold">Always (if premiums paid)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Complexity</td>
                      <td className="text-center py-3 px-4 text-green-600 font-semibold">Simple</td>
                      <td className="text-center py-3 px-4">Complex</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Best For</td>
                      <td className="text-center py-3 px-4 text-sm">Temporary needs, budget-conscious</td>
                      <td className="text-center py-3 px-4 text-sm">Permanent needs, estate planning</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Example Scenario */}
          <Card className="mt-8 bg-accent/10">
            <CardHeader>
              <CardTitle>Real-World Example</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                <strong>Scenario:</strong> 30-year-old parent with 2 young children, $300,000 mortgage, spouse, and $60,000 household income.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-green-600">✅ Term Life Makes Sense</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• $500,000 coverage for ~$30/month</li>
                    <li>• 20-year term covers mortgage and kids through college</li>
                    <li>• Affordable on $60k income</li>
                    <li>• Can invest the $370/month savings elsewhere</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-red-600">❌ Whole Life May Not Fit</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• $500,000 coverage costs ~$400/month</li>
                    <li>• Strains budget significantly</li>
                    <li>• May need to reduce coverage amount</li>
                    <li>• Better investment options available (401k, IRA)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Takeaways */}
          <Card className="mt-8 bg-primary/5">
            <CardHeader>
              <CardTitle>Key Takeaways</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                <strong>Choose Term Life if:</strong> You need affordable coverage for a specific period (raising kids, paying off mortgage), want maximum death benefit for lowest cost, or prefer to invest separately in retirement accounts.
              </p>
              <p>
                <strong>Choose Whole Life if:</strong> You have permanent coverage needs (estate taxes, final expenses), have maxed out other tax-advantaged accounts, want guaranteed lifetime coverage, or need the forced savings component.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Expert Tip:</strong> Most financial advisors recommend "buy term and invest the difference" for the majority of people. Term life provides adequate protection at a fraction of the cost, allowing you to invest the savings in higher-return vehicles like 401(k)s and IRAs.
              </p>
            </CardContent>
          </Card>

          {/* Related Terms */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Related Insurance Terms</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link href="/term/beneficiary">
                <Card className="card-organic hover:scale-[1.02] transition-transform cursor-pointer">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Beneficiary</h3>
                    <p className="text-sm text-muted-foreground">Who receives the death benefit</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/term/death-benefit">
                <Card className="card-organic hover:scale-[1.02] transition-transform cursor-pointer">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Death Benefit</h3>
                    <p className="text-sm text-muted-foreground">Amount paid to beneficiaries</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/term/cash-value">
                <Card className="card-organic hover:scale-[1.02] transition-transform cursor-pointer">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Cash Value</h3>
                    <p className="text-sm text-muted-foreground">Savings component in permanent policies</p>
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
              <Link href="/term/underwriting">
                <Card className="card-organic hover:scale-[1.02] transition-transform cursor-pointer">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Underwriting</h3>
                    <p className="text-sm text-muted-foreground">Risk evaluation process</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/term/rider">
                <Card className="card-organic hover:scale-[1.02] transition-transform cursor-pointer">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Rider</h3>
                    <p className="text-sm text-muted-foreground">Additional coverage options</p>
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
