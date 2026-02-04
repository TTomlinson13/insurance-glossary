/* Spanish keyword landing page: "Términos de seguro en español" 
 * Targets Spanish search query for insurance terms in Spanish
 */

import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Languages, Search, ArrowRight } from "lucide-react";
import { glossaryTerms, categoryColors } from "@/data/glossary";
import { generateSlug } from "@/lib/utils-slug";
import { useEffect, useMemo } from "react";

export default function TerminosSeguroEspanol() {
  // SEO meta tags
  useEffect(() => {
    document.title = "Términos de Seguro en Español | Glosario Bilingüe";
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Glosario completo de términos de seguro en español. Más de 50 definiciones traducidas para ayudarte a entender tu póliza.');
    }
    
    // Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Términos de Seguro en Español | Glosario Bilingüe');
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Glosario completo de términos de seguro en español con más de 50 definiciones traducidas.');
    }
  }, []);

  // Filter terms that have Spanish translations
  const spanishTerms = useMemo(() => {
    return glossaryTerms.filter(term => term.termEs && term.definitionEs);
  }, []);

  // Group by category
  const termsByCategory = useMemo(() => {
    const grouped: Record<string, typeof spanishTerms> = {};
    spanishTerms.forEach(term => {
      if (!grouped[term.category]) {
        grouped[term.category] = [];
      }
      grouped[term.category].push(term);
    });
    return grouped;
  }, [spanishTerms]);

  const categories = Object.keys(termsByCategory).sort();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="mb-4" variant="outline">
              <Languages className="w-4 h-4 mr-2" />
              Glosario Bilingüe
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-semibold text-foreground leading-tight">
              Términos de Seguro en Español
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Más de {spanishTerms.length} términos de seguro traducidos al español para ayudarte a entender tu póliza
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-semibold text-primary">{spanishTerms.length}+</div>
                <div className="text-sm text-muted-foreground">Términos Traducidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-primary">{categories.length}</div>
                <div className="text-sm text-muted-foreground">Categorías</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Gratis</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 border-b border-border/50">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="card-organic">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <BookOpen className="w-7 h-7 text-primary" />
                  ¿Por Qué Necesitas Este Glosario?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg leading-relaxed">
                  Entender los términos de tu póliza de seguro puede ser difícil, especialmente si el inglés no es tu primer idioma. Este glosario bilingüe te ayuda a comprender conceptos importantes de seguros en español claro y sencillo.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Cada término incluye la definición en español y en inglés, para que puedas entender completamente tu cobertura y tomar decisiones informadas sobre tu seguro.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Terms by Category */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-semibold">Explora Términos por Categoría</h2>
              <p className="text-lg text-muted-foreground">
                Selecciona una categoría para ver todos los términos traducidos
              </p>
            </div>

            {categories.map(category => (
              <div key={category} className="space-y-6">
                <div className="flex items-center gap-4">
                  <Badge 
                    className="text-lg py-2 px-4"
                    style={{ 
                      backgroundColor: categoryColors[category],
                      color: "oklch(0.98 0.01 85)"
                    }}
                  >
                    {category}
                  </Badge>
                  <h3 className="text-2xl font-semibold">
                    {termsByCategory[category].length} términos
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {termsByCategory[category].map(term => (
                    <Link key={term.term} href={`/term/${generateSlug(term.term)}`}>
                      <Card className="card-organic hover:scale-[1.02] transition-transform duration-300 cursor-pointer h-full">
                        <CardHeader>
                          <CardTitle className="text-xl flex items-center justify-between gap-2">
                            <span>{term.termEs}</span>
                            <ArrowRight className="w-5 h-5 text-primary shrink-0" />
                          </CardTitle>
                          <CardDescription className="text-sm text-muted-foreground">
                            {term.term}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm leading-relaxed text-foreground/80 line-clamp-3">
                            {term.definitionEs}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Terms */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-semibold">Términos Más Buscados</h2>
              <p className="text-lg text-muted-foreground">
                Los términos de seguro que más personas buscan en español
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/que-es-deducible">
                <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      ¿Qué es un Deducible?
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Guía completa sobre deducibles: qué son, cómo funcionan, y cómo elegir el deducible correcto.
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/seguro-auto-barato">
                <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      Seguro de Auto Barato
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Consejos prácticos para ahorrar dinero en tu póliza de auto sin sacrificar cobertura.
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/term/premium">
                <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      Prima (Premium)
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      La cantidad que pagas por tu seguro, generalmente mensual, trimestral o anualmente.
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/term/claim">
                <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      Reclamación (Claim)
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Solicitud formal a tu aseguradora para recibir pago por una pérdida cubierta.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 border-primary/20">
            <CardContent className="pt-12 pb-12 text-center space-y-6">
              <Search className="w-16 h-16 mx-auto text-primary" />
              <h3 className="text-3xl md:text-4xl font-semibold">
                ¿Buscas un Término Específico?
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Usa nuestro buscador para encontrar rápidamente cualquier término de seguro en inglés o español.
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Link href="/">
                  <Button size="lg" className="rounded-full px-8">
                    Buscar en el Glosario
                  </Button>
                </Link>
                <Link href="/">
                  <Button size="lg" variant="outline" className="rounded-full px-8">
                    View in English
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
