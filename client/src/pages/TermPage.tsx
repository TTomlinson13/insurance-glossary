/* Design: Organic Modernism - Individual term page with SEO optimization
 * Dedicated URL structure for each term, related terms, breadcrumbs, quote CTA
 */

import { useEffect, useState } from "react";
import { useRoute, Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import InsuranceChatbot from "@/components/InsuranceChatbot";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, ExternalLink } from "lucide-react";
import { glossaryTerms, categoryColors, type GlossaryTerm } from "@/data/glossary";
import { findTermBySlug, generateSlug } from "@/lib/utils-slug";
import QuoteForm from "@/components/QuoteForm";

export default function TermPage() {
  const [, params] = useRoute("/term/:slug");
  const [term, setTerm] = useState<GlossaryTerm | null>(null);
  const [relatedTermsData, setRelatedTermsData] = useState<GlossaryTerm[]>([]);

  useEffect(() => {
    if (params?.slug) {
      const foundTerm = findTermBySlug(params.slug, glossaryTerms);
      if (foundTerm) {
        setTerm(foundTerm);
        
        // Find related terms data
        if (foundTerm.relatedTerms) {
          const related = foundTerm.relatedTerms
            .map(relatedName => glossaryTerms.find(t => t.term === relatedName))
            .filter((t): t is GlossaryTerm => t !== undefined);
          setRelatedTermsData(related);
        }
      } else {
        setTerm(null);
      }
    }
  }, [params?.slug]);

  if (!term) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-3xl font-semibold">Term Not Found</h1>
          <p className="text-muted-foreground">The insurance term you're looking for doesn't exist.</p>
          <Link href="/">
            <Button className="rounded-full ui-text">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Glossary
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="py-6 border-b border-border/50 sticky top-0 bg-background/95 backdrop-blur-sm z-40">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="rounded-full ui-text">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Glossary
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="font-semibold">Insurance Glossary</span>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="py-4 border-b border-border/50">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/" className="hover:text-primary transition-colors">Glossary</Link>
            <span>/</span>
            <span className="text-foreground">{term.term}</span>
          </nav>
        </div>
      </div>

      <div className="py-12">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Term Card */}
              <Card className="card-organic">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h1 className="text-4xl md:text-5xl font-semibold">{term.term}</h1>
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
                <CardContent className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Definition</h2>
                    <p className="text-lg leading-relaxed text-foreground/90">
                      {term.definition}
                    </p>
                  </div>

                  {/* Related Terms */}
                  {relatedTermsData.length > 0 && (
                    <div className="pt-6 border-t border-border/50">
                      <h2 className="text-xl font-semibold mb-4">Related Terms</h2>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {relatedTermsData.map((relatedTerm) => (
                          <Link 
                            key={relatedTerm.term} 
                            href={`/term/${generateSlug(relatedTerm.term)}`}
                          >
                            <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                              <CardHeader>
                                <CardTitle className="text-lg flex items-center justify-between">
                                  {relatedTerm.term}
                                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                                </CardTitle>
                                <CardDescription className="line-clamp-2">
                                  {relatedTerm.definition}
                                </CardDescription>
                              </CardHeader>
                            </Card>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* More from Category */}
                  <div className="pt-6 border-t border-border/50">
                    <h2 className="text-xl font-semibold mb-4">More {term.category} Insurance Terms</h2>
                    <div className="flex flex-wrap gap-2">
                      {glossaryTerms
                        .filter(t => t.category === term.category && t.term !== term.term)
                        .slice(0, 8)
                        .map(t => (
                          <Link key={t.term} href={`/term/${generateSlug(t.term)}`}>
                            <Badge 
                              variant="outline" 
                              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                              {t.term}
                            </Badge>
                          </Link>
                        ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar - Quote Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <QuoteForm category={term.category} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50 bg-muted/30">
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
                <li><Link href="/" className="hover:text-primary transition-colors">Auto Insurance</Link></li>
                <li><Link href="/" className="hover:text-primary transition-colors">Health Insurance</Link></li>
                <li><Link href="/" className="hover:text-primary transition-colors">Life Insurance</Link></li>
                <li><Link href="/" className="hover:text-primary transition-colors">Property Insurance</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 ui-text">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/" className="hover:text-primary transition-colors">All Terms</Link></li>
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

      {/* AI Chatbot */}
      <InsuranceChatbot />
    </div>
  );
}
