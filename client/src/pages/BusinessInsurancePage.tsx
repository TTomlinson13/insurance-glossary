import { useState, useMemo } from "react";
import { Link } from "wouter";
import { Search, Building2, Shield, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { glossaryTerms } from "@/data/glossary";
import { generateSlug } from "@/lib/utils-slug";
import QuoteForm from "@/components/QuoteForm";

/**
 * Design Philosophy: Organic Modernism with Financial Sophistication
 * - Warm earth tones with professional credibility
 * - Rounded cards with soft shadows for approachability
 * - Clear hierarchy for B2B decision-makers
 */

export default function BusinessInsurancePage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter only Business category terms
  const businessTerms = useMemo(() => {
    return glossaryTerms.filter((term) => term.category === "Business");
  }, []);

  const filteredTerms = useMemo(() => {
    return businessTerms.filter((term) =>
      term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, businessTerms]);

  // Group terms by type
  const industrySpecific = filteredTerms.filter(term => 
    ["Restaurant Insurance", "Contractor Insurance", "Technology Errors and Omissions", 
     "Retail Insurance", "Medical Malpractice Insurance", "Legal Malpractice Insurance",
     "Salon and Spa Insurance", "Real Estate Errors and Omissions", "Trucking Insurance",
     "Janitorial Insurance", "Landscaping Insurance", "Hospitality Insurance",
     "Daycare Insurance", "Fitness Center Insurance", "Event Insurance"].includes(term.term)
  );

  const generalBusiness = filteredTerms.filter(term => !industrySpecific.includes(term));

  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Comprehensive Protection",
      description: "Protect your business from liability, property damage, cyber threats, and employee-related risks"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Business Continuity",
      description: "Ensure your operations continue even after unexpected events with business interruption coverage"
    },
    {
      icon: <Building2 className="w-8 h-8 text-primary" />,
      title: "Industry-Specific Solutions",
      description: "Tailored coverage for your specific industry, from restaurants to tech companies to contractors"
    }
  ];

  const essentialPolicies = [
    {
      name: "General Liability",
      description: "Protects against third-party injury and property damage claims",
      slug: "commercial-general-liability"
    },
    {
      name: "Workers' Compensation",
      description: "Required coverage for employee injuries and illnesses",
      slug: "workers-compensation-insurance"
    },
    {
      name: "Professional Liability",
      description: "Covers errors, omissions, and negligence in professional services",
      slug: "professional-liability-insurance"
    },
    {
      name: "Commercial Property",
      description: "Protects buildings, equipment, and inventory from damage",
      slug: "commercial-property-insurance"
    },
    {
      name: "Cyber Liability",
      description: "Essential protection against data breaches and cyberattacks",
      slug: "cyber-liability-insurance"
    },
    {
      name: "Business Interruption",
      description: "Covers lost income when operations are suspended",
      slug: "business-interruption-insurance"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-xl">📖</span>
                </div>
                <span className="font-semibold text-lg ui-text">Insurance Glossary</span>
              </div>
            </Link>
            <nav className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" className="rounded-full ui-text">Home</Button>
              </Link>
              <Link href="/compare">
                <Button variant="outline" className="rounded-full ui-text">Compare Quotes</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 shadow-sm">
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium ui-text">Business Insurance Guide</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Protect Your Business with the Right Insurance
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive guide to commercial insurance. Understand coverage options, compare quotes, and find the perfect protection for your business.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link href="#quote">
                <Button size="lg" className="rounded-full px-8 ui-text">
                  Get Free Quotes
                </Button>
              </Link>
              <Link href="#terms">
                <Button size="lg" variant="outline" className="rounded-full px-8 ui-text">
                  Browse Terms
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-semibold text-primary">{businessTerms.length}+</div>
                <div className="text-sm text-muted-foreground ui-text">Business Insurance Terms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-primary">{industrySpecific.length}</div>
                <div className="text-sm text-muted-foreground ui-text">Industry-Specific Policies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-primary">100%</div>
                <div className="text-sm text-muted-foreground ui-text">Free Resources</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Business Insurance Matters</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Protect your investment, employees, and future with comprehensive commercial insurance coverage
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border/50 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
                <CardHeader>
                  <div className="mb-4">{benefit.icon}</div>
                  <CardTitle className="ui-text">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Essential Policies Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Essential Business Insurance Policies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Most businesses need these core coverages to protect against common risks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {essentialPolicies.map((policy, index) => (
              <Link key={index} href={`/term/${policy.slug}`}>
                <Card className="border-border/50 shadow-sm hover:shadow-md hover:border-primary/50 transition-all rounded-2xl cursor-pointer h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2 ui-text">{policy.name}</CardTitle>
                        <CardDescription>{policy.description}</CardDescription>
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote" className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Get Free Business Insurance Quotes</h2>
                <p className="text-lg text-muted-foreground">
                  Compare quotes from top commercial insurance providers and save up to 40% on your business insurance.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium ui-text">Fast & Free Comparison</div>
                      <div className="text-sm text-muted-foreground">Get multiple quotes in minutes</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium ui-text">Top-Rated Providers</div>
                      <div className="text-sm text-muted-foreground">Compare coverage from trusted insurers</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium ui-text">Expert Support</div>
                      <div className="text-sm text-muted-foreground">Get help choosing the right coverage</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <QuoteForm category="Business" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Business Terms Section */}
      <section id="terms" className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Complete Business Insurance Glossary</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse all {businessTerms.length} commercial insurance terms and definitions
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search business insurance terms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 rounded-2xl text-lg border-border/50 focus:border-primary/50"
              />
            </div>
          </div>

          {/* Industry-Specific Terms */}
          {industrySpecific.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Industry-Specific Insurance</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {industrySpecific.map((term) => (
                  <Link key={term.term} href={`/term/${generateSlug(term.term)}`}>
                    <Card className="border-border/50 shadow-sm hover:shadow-md hover:border-primary/50 transition-all rounded-2xl cursor-pointer h-full">
                      <CardHeader>
                        <CardTitle className="text-lg ui-text">{term.term}</CardTitle>
                        <CardDescription className="line-clamp-3">
                          {term.definition}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* General Business Terms */}
          {generalBusiness.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold mb-6">General Commercial Insurance</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {generalBusiness.map((term) => (
                  <Link key={term.term} href={`/term/${generateSlug(term.term)}`}>
                    <Card className="border-border/50 shadow-sm hover:shadow-md hover:border-primary/50 transition-all rounded-2xl cursor-pointer h-full">
                      <CardHeader>
                        <CardTitle className="text-lg ui-text">{term.term}</CardTitle>
                        <CardDescription className="line-clamp-3">
                          {term.definition}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {filteredTerms.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No terms found matching "{searchQuery}"
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 bg-card/30">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-xl">📖</span>
                </div>
                <span className="font-semibold ui-text">Insurance Glossary</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your trusted guide to understanding insurance terminology.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 ui-text">Quick Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li><Link href="/business-insurance" className="hover:text-primary transition-colors">Business Insurance</Link></li>
                <li><Link href="/compare" className="hover:text-primary transition-colors">Compare Quotes</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 ui-text">Categories</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/#terms" className="hover:text-primary transition-colors">Auto Insurance</a></li>
                <li><a href="/#terms" className="hover:text-primary transition-colors">Health Insurance</a></li>
                <li><a href="/#terms" className="hover:text-primary transition-colors">Life Insurance</a></li>
                <li><a href="/#terms" className="hover:text-primary transition-colors">Property Insurance</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 ui-text">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Insurance Guides</a></li>
                <li><Link href="/compare" className="hover:text-primary transition-colors">Compare Quotes</Link></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
            <p>© 2026 Insurance Glossary. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
