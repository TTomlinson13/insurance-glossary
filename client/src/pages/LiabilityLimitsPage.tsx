import { useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, AlertTriangle, Shield, TrendingUp } from "lucide-react";
import InsuranceChatbot from "@/components/InsuranceChatbot";

export default function LiabilityLimitsPage() {
  useEffect(() => {
    document.title = "Understanding Liability Insurance Limits: Complete Guide - Insurance Glossary";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Compare liability insurance limits (25/50/25, 100/300/100, 250/500/250) and understand how much coverage you need to protect your assets.");
    }
    
    // Update Open Graph and Twitter meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', "Understanding Liability Insurance Limits: Complete Guide");
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', "Compare liability insurance limits and understand how much coverage you need to protect your assets.");
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', "https://insurance-glossary.manus.space/compare/liability-limits");
    
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', "Understanding Liability Insurance Limits: Complete Guide");
    
    const twitterDesc = document.querySelector('meta[property="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', "Compare liability insurance limits and understand how much coverage you need.");
    
    const twitterUrl = document.querySelector('meta[property="twitter:url"]');
    if (twitterUrl) twitterUrl.setAttribute('content', "https://insurance-glossary.manus.space/compare/liability-limits");
    
    // Add Schema.org structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Understanding Liability Insurance Limits",
      "description": "Comprehensive guide to liability insurance limits including common coverage levels and recommendations",
      "mainEntity": {
        "@type": "Table",
        "about": "Liability insurance limits comparison"
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
            <Badge className="mb-2">Auto & Liability Insurance Guide</Badge>
            <h1 className="text-4xl md:text-5xl font-semibold">
              Understanding Liability Insurance Limits
            </h1>
            <p className="text-xl text-muted-foreground">
              Learn what liability limits mean, compare common coverage levels, and determine how much protection you need.
            </p>
          </div>
        </div>
      </section>

      {/* What Do the Numbers Mean */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <Card className="bg-accent/10">
            <CardHeader>
              <CardTitle className="text-2xl">What Do the Numbers Mean?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Liability limits are expressed as three numbers (e.g., 100/300/100). Here's what each number represents:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-background rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">100</div>
                  <div className="text-sm font-semibold mb-1">Bodily Injury Per Person</div>
                  <div className="text-xs text-muted-foreground">Maximum paid for injuries to one person in an accident</div>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">300</div>
                  <div className="text-sm font-semibold mb-1">Bodily Injury Per Accident</div>
                  <div className="text-xs text-muted-foreground">Maximum paid for all injuries in one accident</div>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">100</div>
                  <div className="text-sm font-semibold mb-1">Property Damage</div>
                  <div className="text-xs text-muted-foreground">Maximum paid for property damage in an accident</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground pt-4">
                <strong>Example:</strong> With 100/300/100 coverage, if you cause an accident injuring 3 people, your insurance pays up to $100,000 per person (max $300,000 total) for their injuries, plus up to $100,000 for property damage. Anything beyond these limits comes out of your pocket.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Common Coverage Levels */}
      <section className="py-8">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-semibold mb-8 text-center">Common Coverage Levels</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Minimum Coverage */}
            <Card className="card-organic">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                  <Badge variant="outline" className="text-red-600 border-red-600">Minimum</Badge>
                </div>
                <CardTitle className="text-3xl">25/50/25</CardTitle>
                <p className="text-muted-foreground">State Minimum (varies)</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Per Person:</span>
                    <span className="font-semibold">$25,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Per Accident:</span>
                    <span className="font-semibold">$50,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Property Damage:</span>
                    <span className="font-semibold">$25,000</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2 text-sm">Annual Premium</h4>
                  <div className="text-2xl font-bold text-primary">~$400-600</div>
                  <p className="text-xs text-muted-foreground">Lowest cost option</p>
                </div>

                <div className="pt-4">
                  <h4 className="font-semibold mb-2 text-sm text-red-600">⚠️ Risks</h4>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li>• Easily exceeded in serious accidents</li>
                    <li>• Medical bills can exceed $25k per person</li>
                    <li>• New cars cost more than $25k property limit</li>
                    <li>• Personal assets at risk</li>
                  </ul>
                </div>

                <div className="pt-4">
                  <h4 className="font-semibold mb-2 text-sm">Best For</h4>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li>• Minimal assets to protect</li>
                    <li>• Very tight budget</li>
                    <li>• Not recommended for most people</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Standard Coverage */}
            <Card className="card-organic border-2 border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-6 h-6 text-blue-600" />
                  <Badge className="bg-blue-600">Recommended</Badge>
                </div>
                <CardTitle className="text-3xl">100/300/100</CardTitle>
                <p className="text-muted-foreground">Standard Coverage</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Per Person:</span>
                    <span className="font-semibold">$100,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Per Accident:</span>
                    <span className="font-semibold">$300,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Property Damage:</span>
                    <span className="font-semibold">$100,000</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2 text-sm">Annual Premium</h4>
                  <div className="text-2xl font-bold text-primary">~$500-750</div>
                  <p className="text-xs text-muted-foreground">Only $100-150 more than minimum</p>
                </div>

                <div className="pt-4">
                  <h4 className="font-semibold mb-2 text-sm text-green-600">✅ Benefits</h4>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li>• Covers most accident scenarios</li>
                    <li>• Adequate for typical medical bills</li>
                    <li>• Covers most vehicle damage</li>
                    <li>• Good balance of cost and protection</li>
                  </ul>
                </div>

                <div className="pt-4">
                  <h4 className="font-semibold mb-2 text-sm">Best For</h4>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li>• Most drivers and families</li>
                    <li>• Moderate assets ($50k-$250k)</li>
                    <li>• Homeowners</li>
                    <li>• Standard risk tolerance</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* High Coverage */}
            <Card className="card-organic">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                  <Badge variant="outline" className="text-green-600 border-green-600">Premium</Badge>
                </div>
                <CardTitle className="text-3xl">250/500/250</CardTitle>
                <p className="text-muted-foreground">High Coverage</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Per Person:</span>
                    <span className="font-semibold">$250,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Per Accident:</span>
                    <span className="font-semibold">$500,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Property Damage:</span>
                    <span className="font-semibold">$250,000</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2 text-sm">Annual Premium</h4>
                  <div className="text-2xl font-bold text-primary">~$600-900</div>
                  <p className="text-xs text-muted-foreground">Only $100-200 more than standard</p>
                </div>

                <div className="pt-4">
                  <h4 className="font-semibold mb-2 text-sm text-green-600">✅ Benefits</h4>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li>• Maximum protection</li>
                    <li>• Covers severe multi-injury accidents</li>
                    <li>• Protects significant assets</li>
                    <li>• Peace of mind</li>
                  </ul>
                </div>

                <div className="pt-4">
                  <h4 className="font-semibold mb-2 text-sm">Best For</h4>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li>• High net worth individuals ($250k+)</li>
                    <li>• Homeowners with equity</li>
                    <li>• Business owners</li>
                    <li>• Those wanting maximum protection</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-8">
        <div className="container max-w-6xl">
          <Card>
            <CardHeader>
              <CardTitle>Coverage Level Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold">Coverage Level</th>
                      <th className="text-center py-3 px-4 font-semibold">25/50/25</th>
                      <th className="text-center py-3 px-4 font-semibold bg-primary/5">100/300/100</th>
                      <th className="text-center py-3 px-4 font-semibold">250/500/250</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4">Annual Premium</td>
                      <td className="text-center py-3 px-4">$400-600</td>
                      <td className="text-center py-3 px-4 bg-primary/5 font-semibold">$500-750</td>
                      <td className="text-center py-3 px-4">$600-900</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Per Person Injury</td>
                      <td className="text-center py-3 px-4 text-red-600">$25,000</td>
                      <td className="text-center py-3 px-4 bg-primary/5 font-semibold">$100,000</td>
                      <td className="text-center py-3 px-4 text-green-600">$250,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Total Accident Injury</td>
                      <td className="text-center py-3 px-4 text-red-600">$50,000</td>
                      <td className="text-center py-3 px-4 bg-primary/5 font-semibold">$300,000</td>
                      <td className="text-center py-3 px-4 text-green-600">$500,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Property Damage</td>
                      <td className="text-center py-3 px-4 text-red-600">$25,000</td>
                      <td className="text-center py-3 px-4 bg-primary/5 font-semibold">$100,000</td>
                      <td className="text-center py-3 px-4 text-green-600">$250,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Asset Protection</td>
                      <td className="text-center py-3 px-4 text-red-600">Minimal</td>
                      <td className="text-center py-3 px-4 bg-primary/5 font-semibold">Good</td>
                      <td className="text-center py-3 px-4 text-green-600">Excellent</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Recommended For</td>
                      <td className="text-center py-3 px-4 text-sm">Minimal assets only</td>
                      <td className="text-center py-3 px-4 bg-primary/5 text-sm font-semibold">Most people</td>
                      <td className="text-center py-3 px-4 text-sm">High net worth</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How to Choose */}
      <section className="py-8">
        <div className="container max-w-4xl">
          <Card className="bg-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl">How to Choose Your Liability Limits</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">1. Calculate Your Net Worth</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Add up your assets (home equity, savings, investments, retirement accounts) minus debts. Your liability coverage should at least equal your net worth to protect against lawsuits.
                </p>
                <div className="bg-background p-4 rounded-lg text-sm">
                  <strong>Example:</strong> Home equity $150k + Savings $30k + Retirement $80k = $260k net worth → Choose 250/500/250 or add umbrella policy
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">2. Consider Your Risk Factors</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>High mileage drivers:</strong> More time on road = higher accident risk → Higher limits</li>
                  <li>• <strong>Teen drivers:</strong> Inexperienced drivers = higher risk → Higher limits</li>
                  <li>• <strong>Urban areas:</strong> More traffic = more accident potential → Higher limits</li>
                  <li>• <strong>Commuters:</strong> Daily highway driving → Higher limits</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">3. Evaluate Cost vs. Protection</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Increasing from minimum (25/50/25) to recommended (100/300/100) typically costs only $100-150 more per year—about $10/month for 4x the protection. The cost increase to 250/500/250 is similarly modest.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-3">4. Consider an Umbrella Policy</h3>
                <p className="text-sm text-muted-foreground">
                  If you have significant assets ($500k+), consider adding a $1-2 million umbrella policy for $150-300/year. It provides additional liability coverage beyond your auto/home limits and is very cost-effective for high protection.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Real-World Scenarios */}
      <section className="py-8">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-semibold mb-8 text-center">Real-World Accident Scenarios</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <Badge variant="outline" className="mb-2 w-fit">Scenario 1: Minor Accident</Badge>
                <CardTitle className="text-xl">Rear-End Collision</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  You rear-end another car at a stoplight. One person has minor whiplash.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Medical bills:</span>
                    <span className="font-semibold">$8,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Vehicle damage:</span>
                    <span className="font-semibold">$12,000</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="font-semibold">Total:</span>
                    <span className="font-semibold">$20,000</span>
                  </div>
                </div>
                <div className="pt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-green-600">✅</span>
                    <span>25/50/25 covers this</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-green-600">✅</span>
                    <span>100/300/100 covers this</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-green-600">✅</span>
                    <span>250/500/250 covers this</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Badge variant="outline" className="mb-2 w-fit text-red-600 border-red-600">Scenario 2: Serious Accident</Badge>
                <CardTitle className="text-xl">Multi-Vehicle Crash</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  You cause a 3-car accident. Two people are seriously injured.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Person 1 medical:</span>
                    <span className="font-semibold">$85,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Person 2 medical:</span>
                    <span className="font-semibold">$120,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Vehicle damage (2 cars):</span>
                    <span className="font-semibold">$65,000</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="font-semibold">Total:</span>
                    <span className="font-semibold text-red-600">$270,000</span>
                  </div>
                </div>
                <div className="pt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-red-600">❌</span>
                    <span>25/50/25 pays $75k → You owe $195k</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-orange-600">⚠️</span>
                    <span>100/300/100 pays $265k → You owe $5k</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-green-600">✅</span>
                    <span>250/500/250 covers all $270k</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-8">
        <div className="container max-w-4xl">
          <Card className="bg-accent/10">
            <CardHeader>
              <CardTitle>Key Takeaways</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">1.</span>
                  <span><strong>Minimum coverage is rarely enough.</strong> State minimums (25/50/25) are easily exceeded in serious accidents, leaving you personally liable for the difference.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">2.</span>
                  <span><strong>100/300/100 is the sweet spot for most people.</strong> It provides solid protection for only $100-150 more per year than minimum coverage.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">3.</span>
                  <span><strong>Match coverage to your net worth.</strong> If you have $250k+ in assets, consider 250/500/250 or an umbrella policy to protect against lawsuits.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">4.</span>
                  <span><strong>Higher limits cost less than you think.</strong> Doubling or tripling your coverage typically adds only $10-20/month to your premium.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Terms */}
      <section className="py-8">
        <div className="container max-w-6xl">
          <h2 className="text-2xl font-semibold mb-6">Related Insurance Terms</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link href="/term/liability-insurance">
              <Card className="card-organic hover:scale-[1.02] transition-transform cursor-pointer">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Liability Insurance</h3>
                  <p className="text-sm text-muted-foreground">Coverage for damages you cause</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/term/bodily-injury-liability">
              <Card className="card-organic hover:scale-[1.02] transition-transform cursor-pointer">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Bodily Injury Liability</h3>
                  <p className="text-sm text-muted-foreground">Covers injuries to others</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/term/property-damage-liability">
              <Card className="card-organic hover:scale-[1.02] transition-transform cursor-pointer">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Property Damage Liability</h3>
                  <p className="text-sm text-muted-foreground">Covers damage to others' property</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/term/umbrella-insurance">
              <Card className="card-organic hover:scale-[1.02] transition-transform cursor-pointer">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Umbrella Insurance</h3>
                  <p className="text-sm text-muted-foreground">Extra liability protection</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/term/uninsured-motorist">
              <Card className="card-organic hover:scale-[1.02] transition-transform cursor-pointer">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Uninsured Motorist</h3>
                  <p className="text-sm text-muted-foreground">Protection from uninsured drivers</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/term/premium">
              <Card className="card-organic hover:scale-[1.02] transition-transform cursor-pointer">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Premium</h3>
                  <p className="text-sm text-muted-foreground">Cost of insurance coverage</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <InsuranceChatbot />
    </div>
  );
}
