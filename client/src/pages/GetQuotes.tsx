/**
 * Insurance Quotes Comparison Page
 * Central hub for comparing insurance quotes from affiliate partners
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, TrendingUp, Clock, CheckCircle2, ExternalLink } from "lucide-react";
import { CANOPY_CONNECT_CTA } from "@/config/affiliates";
import { useEffect } from "react";

export default function GetQuotes() {
  // SEO meta tags
  useEffect(() => {
    document.title = "Compare Insurance Quotes | Save Up to 40% on Coverage";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Compare insurance quotes from top providers and save up to 40% on auto, home, life, and health insurance. Free, fast, and no obligation.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="mb-4" variant="outline">
              <TrendingUp className="w-4 h-4 mr-2" />
              Save Up to 40%
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-semibold text-foreground leading-tight">
              Compare Insurance Quotes
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Find the best insurance rates from top-rated providers. Free comparison, no obligation.
            </p>

            <div className="flex flex-wrap gap-6 justify-center pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm">100% Free</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm">No Obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm">Compare Multiple Quotes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Types */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-semibold">Choose Your Insurance Type</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Select the type of insurance you need and get personalized quotes in minutes
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Auto Insurance */}
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-2">Auto Insurance</CardTitle>
                      <CardDescription className="text-base">
                        Compare rates from 50+ carriers and save up to $500/year
                      </CardDescription>
                    </div>
                    <div className="text-4xl">🚗</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Liability, Collision, Comprehensive</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Uninsured Motorist Coverage</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Roadside Assistance</span>
                    </div>
                  </div>
                  <Button asChild className="w-full" size="lg">
                    <a href={CANOPY_CONNECT_CTA.url} target="_blank" rel="noopener noreferrer">
                      {CANOPY_CONNECT_CTA.text}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Home Insurance */}
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-2">Home Insurance</CardTitle>
                      <CardDescription className="text-base">
                        Protect your home and belongings with affordable coverage
                      </CardDescription>
                    </div>
                    <div className="text-4xl">🏠</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Dwelling & Personal Property</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Liability Protection</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Additional Living Expenses</span>
                    </div>
                  </div>
                  <Button asChild className="w-full" size="lg">
                    <a href={CANOPY_CONNECT_CTA.url} target="_blank" rel="noopener noreferrer">
                      {CANOPY_CONNECT_CTA.text}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Life Insurance */}
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-2">Life Insurance</CardTitle>
                      <CardDescription className="text-base">
                        Secure your family's financial future with life insurance
                      </CardDescription>
                    </div>
                    <div className="text-4xl">❤️</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Term & Whole Life Options</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Flexible Coverage Amounts</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>No Medical Exam Options</span>
                    </div>
                  </div>
                  <Button asChild className="w-full" size="lg">
                    <a href={CANOPY_CONNECT_CTA.url} target="_blank" rel="noopener noreferrer">
                      {CANOPY_CONNECT_CTA.text}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Renters Insurance */}
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-2">Renters Insurance</CardTitle>
                      <CardDescription className="text-base">
                        Protect your belongings for as low as $12/month
                      </CardDescription>
                    </div>
                    <div className="text-4xl">🔑</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Personal Property Coverage</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Liability Protection</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Temporary Living Expenses</span>
                    </div>
                  </div>
                  <Button asChild className="w-full" size="lg">
                    <a href={CANOPY_CONNECT_CTA.url} target="_blank" rel="noopener noreferrer">
                      {CANOPY_CONNECT_CTA.text}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-accent/5">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-semibold">How It Works</h2>
              <p className="text-lg text-muted-foreground">
                Get personalized insurance quotes in 3 simple steps
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-3xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold">Answer a Few Questions</h3>
                <p className="text-muted-foreground">
                  Tell us about yourself, your property, or your vehicle. Takes just 2-3 minutes.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-3xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold">Compare Quotes</h3>
                <p className="text-muted-foreground">
                  Receive personalized quotes from multiple top-rated insurance providers.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-3xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold">Choose & Save</h3>
                <p className="text-muted-foreground">
                  Select the best coverage for your needs and start saving immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="py-8 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground">
            <p>
              💡 <strong>Disclosure:</strong> We may earn a commission when you click on certain links and purchase insurance. 
              This helps us keep the Insurance Glossary free for everyone. Our editorial content is not influenced by affiliate partnerships.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
