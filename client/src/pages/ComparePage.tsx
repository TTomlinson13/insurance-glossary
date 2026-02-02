/* Design: Organic Modernism - Insurance comparison landing page
 * Main conversion page for affiliate monetization
 */

import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Shield, TrendingUp, CheckCircle2, Star, Clock, DollarSign } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";

export default function ComparePage() {
  const [selectedType, setSelectedType] = useState<string>("");

  const insuranceTypes = [
    {
      type: "Auto",
      icon: "🚗",
      description: "Compare car insurance rates and save up to 40%",
      avgSavings: "$450/year",
      topProviders: ["Geico", "Progressive", "State Farm", "Allstate"]
    },
    {
      type: "Health",
      icon: "🏥",
      description: "Find affordable health insurance plans for you and your family",
      avgSavings: "$2,400/year",
      topProviders: ["Blue Cross", "UnitedHealthcare", "Aetna", "Cigna"]
    },
    {
      type: "Life",
      icon: "👨‍👩‍👧‍👦",
      description: "Protect your family's future with life insurance coverage",
      avgSavings: "$600/year",
      topProviders: ["Northwestern Mutual", "New York Life", "MassMutual", "Prudential"]
    },
    {
      type: "Property",
      icon: "🏠",
      description: "Secure your home and belongings with homeowners insurance",
      avgSavings: "$850/year",
      topProviders: ["State Farm", "Allstate", "Liberty Mutual", "Farmers"]
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Save Time",
      description: "Compare quotes from 10+ insurers in minutes, not days"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Save Money",
      description: "Find the best rates and save hundreds on insurance"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Private",
      description: "Your information is protected with bank-level security"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="py-6 border-b border-border/50 sticky top-0 bg-background/95 backdrop-blur-sm z-40">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer">
                <BookOpen className="w-6 h-6 text-primary" />
                <span className="text-xl font-semibold">Insurance Glossary</span>
              </div>
            </Link>
            <Link href="/">
              <Button variant="outline" className="rounded-full ui-text">
                Back to Glossary
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative py-20 md:py-28 overflow-hidden"
        style={{
          backgroundImage: "url(/images/hero-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="category-badge text-base px-4 py-2" style={{ backgroundColor: "oklch(0.58 0.12 35)", color: "oklch(0.98 0.01 85)" }}>
              Free Insurance Comparison
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-semibold text-foreground leading-tight">
              Compare Insurance Quotes & Save Up To 40%
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Get personalized quotes from top-rated insurance providers. 
              Free, fast, and no obligation.
            </p>

            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="text-sm text-muted-foreground ml-2">4.8/5 from 12,000+ users</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-organic text-center">
                <CardContent className="pt-8">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content - Insurance Types & Form */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Insurance Types */}
            <div className="lg:col-span-2 space-y-6">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-semibold mb-3">
                  Choose Your Insurance Type
                </h2>
                <p className="text-lg text-muted-foreground">
                  Select the type of insurance you're looking for to get started
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {insuranceTypes.map((insurance) => (
                  <Card 
                    key={insurance.type}
                    className={`card-organic cursor-pointer transition-all duration-300 ${
                      selectedType === insurance.type ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => setSelectedType(insurance.type)}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className="text-4xl">{insurance.icon}</div>
                        {selectedType === insurance.type && (
                          <CheckCircle2 className="w-6 h-6 text-primary" />
                        )}
                      </div>
                      <CardTitle className="text-2xl">{insurance.type} Insurance</CardTitle>
                      <CardDescription className="text-base">
                        {insurance.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">Avg. Savings: {insurance.avgSavings}</span>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground mb-2">Top Providers:</div>
                          <div className="flex flex-wrap gap-1">
                            {insurance.topProviders.map((provider) => (
                              <Badge key={provider} variant="outline" className="text-xs">
                                {provider}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Trust Indicators */}
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardContent className="pt-6">
                  <div className="grid sm:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-semibold text-primary mb-1">10+</div>
                      <div className="text-sm text-muted-foreground">Insurance Partners</div>
                    </div>
                    <div>
                      <div className="text-3xl font-semibold text-primary mb-1">$450</div>
                      <div className="text-sm text-muted-foreground">Average Annual Savings</div>
                    </div>
                    <div>
                      <div className="text-3xl font-semibold text-primary mb-1">2 min</div>
                      <div className="text-sm text-muted-foreground">To Get Quotes</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quote Form Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <QuoteForm category={selectedType} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
              How It Works
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Tell Us About You",
                  description: "Fill out a simple form with your basic information and insurance needs"
                },
                {
                  step: "2",
                  title: "Compare Quotes",
                  description: "Receive personalized quotes from multiple top-rated insurance providers"
                },
                {
                  step: "3",
                  title: "Choose & Save",
                  description: "Select the best coverage for your needs and start saving money"
                }
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  q: "Is this service really free?",
                  a: "Yes! Our comparison service is 100% free with no hidden fees. We're compensated by insurance providers when you choose their coverage."
                },
                {
                  q: "How do you protect my information?",
                  a: "We use bank-level encryption to protect your data. Your information is never sold to third parties and is only shared with providers you choose to get quotes from."
                },
                {
                  q: "Am I obligated to buy insurance?",
                  a: "Not at all. You can compare quotes with no obligation to purchase. Take your time to review options and make the best decision for your needs."
                },
                {
                  q: "How long does it take to get quotes?",
                  a: "Most users receive their first quotes within minutes. The entire process typically takes less than 5 minutes to complete."
                }
              ].map((faq, index) => (
                <Card key={index} className="card-organic">
                  <CardHeader>
                    <CardTitle className="text-xl">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
                <span className="text-xl font-semibold">Insurance Glossary</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Your comprehensive guide to understanding insurance terminology. 
                Making insurance accessible for everyone.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 ui-text">Quick Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/" className="hover:text-primary transition-colors">Glossary Home</Link></li>
                <li><Link href="/compare" className="hover:text-primary transition-colors">Compare Quotes</Link></li>
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 ui-text">Insurance Types</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Auto Insurance</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Health Insurance</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Life Insurance</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Home Insurance</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
            <p>© 2026 Insurance Glossary. All rights reserved. | Educational purposes only - not insurance advice.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
