import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, FileText, Shield } from "lucide-react";
import { Link } from "wouter";
import { glossaryTerms } from "@/data/glossary";
import { generateSlug } from "@/lib/utils-slug";

export default function ISOFormsPage() {
  // Filter ISO-related terms
  const isoTerms = glossaryTerms.filter(term => 
    term.term.includes("ISO") || 
    term.relatedTerms?.includes("ISO") ||
    term.term.includes("Form (CP") ||
    term.term.includes("Form (CG") ||
    term.term.includes("Form (WC") ||
    term.term.includes("Form (BP")
  );

  const propertyForms = isoTerms.filter(t => t.category === "Property");
  const businessForms = isoTerms.filter(t => t.category === "Business");
  const industryTerms = isoTerms.filter(t => t.category === "Industry");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm shadow-lg mb-4">
              <FileText className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium ui-text">ISO Forms Reference</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-semibold text-foreground leading-tight">
              ISO Insurance Forms Guide
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive reference for Insurance Services Office (ISO) standardized forms used across the property-casualty insurance industry.
            </p>
          </div>
        </div>
      </section>

      {/* What is ISO Section */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <Card className="card-organic">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <Shield className="w-8 h-8 text-primary" />
                What is ISO?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                The <strong>Insurance Services Office (ISO)</strong> is an organization that develops standardized insurance policy forms, rating information, and risk data used by property-casualty insurers across the United States. ISO forms provide consistency and clarity in insurance contracts, making it easier for insurers, agents, and policyholders to understand coverage terms.
              </p>
              <p>
                ISO forms are identified by form numbers (e.g., CP 00 30, CG 00 01) that indicate the type of coverage and version. These standardized forms help ensure uniform coverage language across different insurance companies while allowing for customization through endorsements.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Form Numbering System */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-semibold mb-8 text-center">Understanding ISO Form Numbers</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-organic">
              <CardHeader>
                <CardTitle>Commercial Property (CP)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p><strong>CP 00 10</strong> - Building and Personal Property Coverage Form (Basic)</p>
                <p><strong>CP 00 20</strong> - Building and Personal Property Coverage Form (Broad)</p>
                <p><strong>CP 00 30</strong> - Building and Personal Property Coverage Form (Special)</p>
              </CardContent>
            </Card>

            <Card className="card-organic">
              <CardHeader>
                <CardTitle>Commercial General Liability (CG)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p><strong>CG 00 01</strong> - Commercial General Liability Coverage Form (Occurrence)</p>
                <p><strong>CG 00 02</strong> - Commercial General Liability Coverage Form (Claims-Made)</p>
                <p><strong>CG 21 39</strong> - Additional Insured Endorsement</p>
              </CardContent>
            </Card>

            <Card className="card-organic">
              <CardHeader>
                <CardTitle>Businessowners Policy (BP)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p><strong>BP 00 03</strong> - Businessowners Coverage Form</p>
                <p><strong>BP 04 03</strong> - Businessowners Liability Coverage Form</p>
              </CardContent>
            </Card>

            <Card className="card-organic">
              <CardHeader>
                <CardTitle>Workers Compensation (WC)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p><strong>WC 00 00 01</strong> - Workers Compensation and Employers Liability Policy</p>
                <p><strong>WC 00 03 13</strong> - Waiver of Our Right to Recover From Others Endorsement</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Property Forms */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-semibold mb-8 text-center">Commercial Property Forms</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {propertyForms.map((term) => (
              <Link key={term.term} href={`/term/${generateSlug(term.term)}`}>
                <Card className="card-organic hover:scale-[1.02] transition-transform duration-400 cursor-pointer h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <CardTitle className="text-xl">{term.term}</CardTitle>
                      <Badge 
                        className="category-badge shrink-0"
                        style={{ 
                          backgroundColor: "oklch(0.70 0.12 90)",
                          color: "oklch(0.98 0.01 85)"
                        }}
                      >
                        Property
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
        </div>
      </section>

      {/* Business Forms */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-semibold mb-8 text-center">Business Insurance Forms</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessForms.map((term) => (
              <Link key={term.term} href={`/term/${generateSlug(term.term)}`}>
                <Card className="card-organic hover:scale-[1.02] transition-transform duration-400 cursor-pointer h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <CardTitle className="text-xl">{term.term}</CardTitle>
                      <Badge 
                        className="category-badge shrink-0"
                        style={{ 
                          backgroundColor: "oklch(0.50 0.08 200)",
                          color: "oklch(0.98 0.01 85)"
                        }}
                      >
                        Business
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
        </div>
      </section>

      {/* Industry Terms */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-semibold mb-8 text-center">ISO Industry Terms</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryTerms.map((term) => (
              <Link key={term.term} href={`/term/${generateSlug(term.term)}`}>
                <Card className="card-organic hover:scale-[1.02] transition-transform duration-400 cursor-pointer h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <CardTitle className="text-xl">{term.term}</CardTitle>
                      <Badge 
                        className="category-badge shrink-0"
                        style={{ 
                          backgroundColor: "oklch(0.55 0.06 180)",
                          color: "oklch(0.98 0.01 85)"
                        }}
                      >
                        Industry
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <BookOpen className="w-16 h-16 mx-auto text-primary" />
            <h2 className="text-4xl md:text-5xl font-semibold">
              Explore More Insurance Terms
            </h2>
            <p className="text-xl text-muted-foreground">
              Browse our complete glossary of 215+ insurance terms across all categories.
            </p>
            <div className="pt-4">
              <Link href="/">
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity">
                  Browse Full Glossary
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
