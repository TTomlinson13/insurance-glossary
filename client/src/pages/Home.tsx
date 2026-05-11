/* Design: Organic Modernism - Warm earth tones, flowing layouts, layered depth
 * Hero with organic background, search bar, category filters, glossary cards
 */

import { useState, useMemo, useRef, useEffect } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { Input } from "@/components/ui/input";
import InsuranceChatbot from "@/components/InsuranceChatbot";
import NewsletterSignup from "@/components/NewsletterSignup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen, Shield, TrendingUp, ExternalLink } from "lucide-react";
import { glossaryTerms, categoryColors, categoryIcons, type GlossaryTerm } from "@/data/glossary";
import { generateSlug } from "@/lib/utils-slug";
import { Link } from "wouter";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  
  // Get top 8 matching suggestions
  const suggestions = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return glossaryTerms
      .filter((term) => 
        term.term.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .slice(0, 8);
  }, [searchQuery]);
  
  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const categories = ["All", "Auto", "Health", "Life", "Property", "Business", "General", "Claims", "Industry"];

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
          backgroundImage: "url(https://files.manuscdn.com/user_upload_by_module/session_file/103860271/CllOIHrnYViGWNXO.png)",
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

            {/* Search Bar with Autocomplete */}
            <div className="max-w-2xl mx-auto mt-8" ref={searchRef}>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground z-10" />
                <Input
                  type="text"
                  placeholder="Search insurance terms..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSuggestions(true);
                    setSelectedSuggestionIndex(-1);
                  }}
                  onFocus={() => searchQuery && setShowSuggestions(true)}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowDown') {
                      e.preventDefault();
                      setSelectedSuggestionIndex(prev => 
                        prev < suggestions.length - 1 ? prev + 1 : prev
                      );
                    } else if (e.key === 'ArrowUp') {
                      e.preventDefault();
                      setSelectedSuggestionIndex(prev => prev > 0 ? prev - 1 : -1);
                    } else if (e.key === 'Enter') {
                      e.preventDefault();
                      if (selectedSuggestionIndex >= 0 && suggestions[selectedSuggestionIndex]) {
                        // Navigate to selected suggestion
                        window.location.href = `/term/${generateSlug(suggestions[selectedSuggestionIndex].term)}`;
                      } else if (searchQuery.trim()) {
                        // Scroll to results section
                        setShowSuggestions(false);
                        const resultsSection = document.getElementById('search-results');
                        if (resultsSection) {
                          resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }
                    } else if (e.key === 'Escape') {
                      setShowSuggestions(false);
                    }
                  }}
                  className="pl-12 pr-4 py-6 text-lg rounded-2xl bg-card/90 backdrop-blur-sm border-2 border-border/50 focus:border-primary shadow-xl"
                />
                
                {/* Suggestions Dropdown */}
                {showSuggestions && suggestions.length > 0 && (
                  <div className="absolute top-full mt-2 w-full bg-card border-2 border-border rounded-2xl shadow-2xl overflow-hidden z-50">
                    {suggestions.map((term, index) => (
                      <Link key={term.term} href={`/term/${generateSlug(term.term)}`}>
                        <div
                          className={`px-4 py-3 cursor-pointer transition-colors ${
                            index === selectedSuggestionIndex
                              ? 'bg-primary/10'
                              : 'hover:bg-muted'
                          }`}
                          onMouseEnter={() => setSelectedSuggestionIndex(index)}
                          onClick={() => setShowSuggestions(false)}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex-1">
                              <div className="font-medium text-foreground">{term.term}</div>
                              <div className="text-sm text-muted-foreground line-clamp-1">
                                {term.definition}
                              </div>
                            </div>
                            <Badge
                              className="shrink-0 text-xs"
                              style={{
                                backgroundColor: categoryColors[term.category],
                                color: "oklch(0.98 0.01 85)"
                              }}
                            >
                              {term.category}
                            </Badge>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-semibold text-primary">{glossaryTerms.length}+</div>
                <div className="text-sm text-muted-foreground ui-text">Insurance Terms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-primary">8</div>
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
                  <img src={categoryIcons[category]} alt={`${category} insurance icon`} className="w-4 h-4 mr-2" />
                )}
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary Terms */}
      <section id="search-results" className="py-16">
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
                      <Link key={term.term} href={`/term/${generateSlug(term.term)}`}>
                        <Card 
                          className="card-organic hover:scale-[1.02] transition-transform duration-400 cursor-pointer h-full"
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
                      </Link>
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
              Continue Your Insurance Education
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore our blog for in-depth guides and expert insights on insurance topics.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link href="/quiz">
                <Button size="lg" className="rounded-full px-8 ui-text">
                  Take Quiz
                </Button>
              </Link>
              <Link href="/calculators">
                <Button size="lg" variant="outline" className="rounded-full px-8 ui-text">
                  Use Calculators
                </Button>
              </Link>
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
              <div className="mt-6">
                <h3 className="font-semibold mb-3 ui-text">Weekly Insurance Tips</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Get expert insurance insights delivered to your inbox every week.
                </p>
                <NewsletterSignup />
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 ui-text">Categories</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Auto Insurance</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Health Insurance</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Life Insurance</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Property Insurance</a></li>
                <li><Link href="/business-insurance" className="hover:text-primary transition-colors">Business Insurance</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 ui-text">By State</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/florida-insurance" className="hover:text-primary transition-colors">Florida</Link></li>
                <li><Link href="/california-insurance" className="hover:text-primary transition-colors">California</Link></li>
                <li><Link href="/texas-insurance" className="hover:text-primary transition-colors">Texas</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 ui-text">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                <li><Link href="/calculators" className="hover:text-primary transition-colors">Insurance Calculators</Link></li>
                <li><Link href="/iso-forms" className="hover:text-primary transition-colors">ISO Forms Guide</Link></li>
                <li><Link href="/business-insurance" className="hover:text-primary transition-colors">Business Insurance</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border/50">
            <div className="text-center mb-6">
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium mb-3">Powered by Tomlinson &amp; Co Insurance</p>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
                <a href="https://tomlinsonandco.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Tomlinson &amp; Co Insurance</a>
                <a href="https://hoinsurance.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Florida Home Insurance</a>
                <a href="https://flawc.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Florida Workers' Comp</a>
                <a href="https://easycommercialinsurance.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Commercial Insurance</a>
              </div>
            </div>
            <div className="text-center text-sm text-muted-foreground">
              <p>© 2026 Insurance Glossary. All rights reserved. | Educational purposes only - not insurance advice.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Chatbot */}
      <InsuranceChatbot />
    </div>
  );
}
