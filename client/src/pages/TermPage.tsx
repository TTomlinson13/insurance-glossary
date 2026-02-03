/* Individual term page with SEO-friendly URLs
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
        
        // Add Schema.org structured data for SEO
        const structuredData = {
          "@context": "https://schema.org",
          "@type": "DefinedTerm",
          "name": foundTerm.term,
          "description": foundTerm.definition,
          "inDefinedTermSet": {
            "@type": "DefinedTermSet",
            "name": "Insurance Glossary",
            "description": "Comprehensive insurance terminology guide"
          },
          "termCode": foundTerm.category
        };
        
        // Update or create script tag for structured data
        let script = document.getElementById('term-structured-data') as HTMLScriptElement | null;
        if (!script) {
          script = document.createElement('script');
          script.id = 'term-structured-data';
          script.type = 'application/ld+json';
          document.head.appendChild(script);
        }
        script.textContent = JSON.stringify(structuredData);
        
        // Update page title and meta description
        document.title = `${foundTerm.term} - Insurance Glossary`;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
          metaDesc.setAttribute('content', foundTerm.definition);
        }
        
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
    
    // Cleanup structured data when component unmounts
    return () => {
      const script = document.getElementById('term-structured-data');
      if (script) {
        script.remove();
      }
      // Reset title
      document.title = 'Insurance Glossary - Your Complete Guide to Insurance Terms';
    };
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
                      <div className="grid gap-4 md:grid-cols-2">
                        {relatedTermsData.map((relatedTerm) => (
                          <Link key={relatedTerm.term} href={`/term/${generateSlug(relatedTerm.term)}`}>
                            <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer h-full">
                              <CardHeader>
                                <CardTitle className="text-lg flex items-center gap-2">
                                  {relatedTerm.term}
                                  <ExternalLink className="w-4 h-4" />
                                </CardTitle>
                              </CardHeader>
                              <CardContent>
                                <CardDescription className="line-clamp-2">
                                  {relatedTerm.definition}
                                </CardDescription>
                              </CardContent>
                            </Card>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <QuoteForm category={term.category} />
            </div>
          </div>
        </div>
      </div>

      {/* Chatbot */}
      <InsuranceChatbot />
    </div>
  );
}
