import { useState, useMemo } from "react";
import { Link } from "wouter";
import { Search, MapPin, Shield, TrendingUp, Wind, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { glossaryTerms } from "@/data/glossary";
import { generateSlug } from "@/lib/utils-slug";

/**
 * Texas Insurance Landing Page
 * State-specific insurance information for Texas residents and businesses
 */

export default function TexasInsurancePage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Texas-specific terms
  const texasSpecificTerms = [
    "Texas Windstorm Insurance Association",
    "Windstorm Insurance",
    "Hail Damage Coverage"
  ];

  const texasTerms = useMemo(() => {
    return glossaryTerms.filter((term) => 
      texasSpecificTerms.includes(term.term) ||
      term.definition.toLowerCase().includes("texas") ||
      term.definition.toLowerCase().includes("windstorm") ||
      term.definition.toLowerCase().includes("hail")
    );
  }, []);

  const filteredTerms = useMemo(() => {
    if (!searchQuery) return texasTerms;
    return texasTerms.filter((term) =>
      term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, texasTerms]);

  const texasFacts = [
    {
      icon: <Wind className="w-8 h-8 text-primary" />,
      title: "Windstorm & Hail Risk",
      description: "Texas coastal areas require TWIA coverage for windstorm protection, while hail damage is a major concern statewide"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "TWIA Coverage",
      description: "Texas Windstorm Insurance Association provides wind and hail coverage for coastal properties"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Minimum Auto Requirements",
      description: "Texas requires 30/60/25 liability coverage for auto insurance with optional UM/UIM protection"
    }
  ];

  const essentialCoverages = [
    {
      name: "Texas Windstorm Insurance",
      description: "Required coverage for coastal properties through TWIA",
      slug: "texas-windstorm-insurance-association"
    },
    {
      name: "Hail Damage Coverage",
      description: "Critical protection against Texas's frequent hailstorms",
      slug: "hail-damage-coverage"
    },
    {
      name: "Flood Insurance",
      description: "Important for coastal and flood-prone areas",
      slug: "flood-insurance"
    },
    {
      name: "Uninsured Motorist Coverage",
      description: "Optional but recommended given Texas's uninsured driver rate",
      slug: "uninsured-motorist-coverage"
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
              <Link href="/blog">
                <Button variant="outline" className="rounded-full ui-text">Blog</Button>
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
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium ui-text">Texas Insurance Guide</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Texas Insurance: What You Need to Know
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive guide to Texas-specific insurance requirements, from TWIA windstorm coverage to hail protection. Understand the unique insurance landscape of the Lone Star State.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <a href="#terms">
                <Button size="lg" className="rounded-full px-8 ui-text">
                  Browse Texas Terms
                </Button>
              </a>
              <Link href="/blog">
                <Button size="lg" variant="outline" className="rounded-full px-8 ui-text">
                  Read Blog
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-semibold text-primary">#1</div>
                <div className="text-sm text-muted-foreground ui-text">Hail Damage State</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-primary">400K+</div>
                <div className="text-sm text-muted-foreground ui-text">TWIA Policies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-primary">100%</div>
                <div className="text-sm text-muted-foreground ui-text">Free Education</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Texas-Specific Facts */}
      <section className="py-16 border-b border-border/50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Texas Insurance is Different</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Texas's unique weather patterns and coastal exposure create special insurance requirements
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {texasFacts.map((fact, index) => (
                <Card key={index} className="card-organic hover:scale-[1.02] transition-transform duration-300">
                  <CardHeader>
                    <div className="mb-4">{fact.icon}</div>
                    <CardTitle className="text-xl">{fact.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {fact.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Essential Texas Coverages */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Essential Texas Coverages</h2>
              <p className="text-lg text-muted-foreground">
                Critical insurance protections for Texas residents
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {essentialCoverages.map((coverage, index) => (
                <Link key={index} href={`/term/${coverage.slug}`}>
                  <Card className="card-organic hover:scale-[1.02] transition-transform duration-300 cursor-pointer h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-xl">{coverage.name}</CardTitle>
                        <ArrowRight className="w-5 h-5 text-primary shrink-0" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {coverage.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Texas Insurance Terms */}
      <section id="terms" className="py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Texas Insurance Terms</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Understand the terminology specific to Texas insurance
              </p>

              {/* Search */}
              <div className="max-w-xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search Texas insurance terms..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 pr-4 py-6 text-lg rounded-2xl bg-card border-2"
                  />
                </div>
              </div>
            </div>

            {filteredTerms.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold mb-2">No terms found</h3>
                <p className="text-muted-foreground">Try adjusting your search</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredTerms.map((term) => (
                  <Link key={term.term} href={`/term/${generateSlug(term.term)}`}>
                    <Card className="card-organic hover:scale-[1.02] transition-transform duration-300 cursor-pointer h-full">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <CardTitle className="text-xl">{term.term}</CardTitle>
                          <Badge 
                            className="category-badge shrink-0"
                            style={{ 
                              backgroundColor: "#8B7355",
                              color: "oklch(0.98 0.01 85)"
                            }}
                          >
                            {term.category}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base leading-relaxed text-foreground/80">
                          {term.definition}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Shield className="w-16 h-16 mx-auto text-primary" />
            <h2 className="text-4xl md:text-5xl font-semibold">
              Learn More About Texas Insurance
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore our comprehensive glossary to understand all insurance terms and make informed decisions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link href="/">
                <Button size="lg" className="rounded-full px-8 ui-text">
                  Full Glossary
                </Button>
              </Link>
              <Link href="/blog">
                <Button size="lg" variant="outline" className="rounded-full px-8 ui-text">
                  Read Blog
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2026 Insurance Glossary. Educational purposes only - not insurance advice.</p>
            <p className="mt-2">Texas-specific information subject to state regulations and carrier availability.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
