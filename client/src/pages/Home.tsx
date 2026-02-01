/* Design: Organic Modernism - Warm earth tones, flowing layouts, layered depth
 * Hero with organic background, search bar, category filters, glossary cards
 */

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen, Shield, TrendingUp } from "lucide-react";
import { glossaryTerms, categoryColors, categoryIcons, type GlossaryTerm } from "@/data/glossary";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Auto", "Health", "Life", "Property", "General", "Claims", "Industry"];

  const filteredTerms = useMemo(() => {
    return glossaryTerms.filter((term) => {
      const matchesSearch = 
        term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.definition.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || term.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const groupedTerms = useMemo(() => {
    const grouped: Record<string, GlossaryTerm[]> = {};
    filteredTerms.forEach((term) => {
      const firstLetter = term.term[0].toUpperCase();
      if (!grouped[firstLetter]) {
        grouped[firstLetter] = [];
      }
      grouped[firstLetter].push(term);
    });
    return grouped;
  }, [filteredTerms]);

  const alphabet = Object.keys(groupedTerms).sort();

  return (
    <div className="min-h-screen">
      {/* Hero Section with Organic Background */}
      <section 
        className="relative py-24 md:py-32 overflow-hidden"
        style={{
          backgroundImage: "url(/images/hero-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm shadow-lg mb-4">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium ui-text">Your Insurance Knowledge Hub</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-semibold text-foreground leading-tight">
              Insurance Glossary
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Demystify insurance terminology with clear, comprehensive definitions. 
              Your trusted guide to understanding insurance.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mt-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search insurance terms..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 text-lg rounded-2xl bg-card/90 backdrop-blur-sm border-2 border-border/50 focus:border-primary shadow-xl"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-semibold text-primary">{glossaryTerms.length}+</div>
                <div className="text-sm text-muted-foreground ui-text">Insurance Terms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-primary">7</div>
                <div className="text-sm text-muted-foreground ui-text">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-primary">100%</div>
                <div className="text-sm text-muted-foreground ui-text">Free Access</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border/50 sticky top-0 bg-background/95 backdrop-blur-sm z-40">
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full px-6 ui-text transition-all duration-300"
                style={
                  selectedCategory === category && category !== "All"
                    ? { backgroundColor: categoryColors[category], color: "oklch(0.98 0.01 85)" }
                    : {}
                }
              >
                {category !== "All" && categoryIcons[category] && (
                  <img src={categoryIcons[category]} alt="" className="w-4 h-4 mr-2" />
                )}
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary Terms */}
      <section className="py-16">
        <div className="container">
          {filteredTerms.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold mb-2">No terms found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter</p>
            </div>
          ) : (
            <div className="space-y-16">
              {alphabet.map((letter) => (
                <div key={letter} id={letter}>
                  <div className="mb-8">
                    <h2 className="text-6xl md:text-7xl font-semibold text-primary/20 mb-4">
                      {letter}
                    </h2>
                  </div>
                  
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {groupedTerms[letter].map((term) => (
                      <Card 
                        key={term.term} 
                        className="card-organic hover:scale-[1.02] transition-transform duration-400"
                      >
                        <CardHeader>
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <CardTitle className="text-2xl">{term.term}</CardTitle>
                            <Badge 
                              className="category-badge shrink-0"
                              style={{ 
                                backgroundColor: categoryColors[term.category],
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
                          
                          {term.relatedTerms && term.relatedTerms.length > 0 && (
                            <div className="mt-4 pt-4 border-t border-border/50">
                              <div className="text-sm font-medium text-muted-foreground mb-2 ui-text">
                                Related Terms
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {term.relatedTerms.map((related) => (
                                  <Badge 
                                    key={related} 
                                    variant="outline"
                                    className="text-xs rounded-full"
                                  >
                                    {related}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Shield className="w-16 h-16 mx-auto text-primary" />
            <h2 className="text-4xl md:text-5xl font-semibold">
              Ready to Find the Right Insurance?
            </h2>
            <p className="text-xl text-muted-foreground">
              Now that you understand the terminology, compare insurance quotes and find the best coverage for your needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button size="lg" className="rounded-full px-8 ui-text">
                Compare Quotes
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 ui-text">
                Learn More
              </Button>
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
              <h3 className="font-semibold mb-4 ui-text">Categories</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Auto Insurance</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Health Insurance</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Life Insurance</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Property Insurance</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 ui-text">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Insurance Guides</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Compare Quotes</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
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
