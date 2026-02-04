/* Spanish keyword landing page: "¿Qué es un deducible?" 
 * Targets high-volume Spanish search query for deductible definition
 */

import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, DollarSign, Shield, ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect } from "react";
import { AffiliateCTA } from "@/components/AffiliateCTA";

export default function QueEsDeducible() {
  // SEO meta tags
  useEffect(() => {
    document.title = "¿Qué es un Deducible? | Guía Completa de Seguros";
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Aprende qué es un deducible de seguro, cómo funciona, y cómo elegir el deducible correcto para tu póliza de auto, salud o hogar.');
    }
    
    // Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', '¿Qué es un Deducible? | Guía Completa de Seguros');
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Aprende qué es un deducible de seguro, cómo funciona, y cómo elegir el deducible correcto para tu póliza.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="mb-4" variant="outline">
              <BookOpen className="w-4 h-4 mr-2" />
              Guía en Español
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-semibold text-foreground leading-tight">
              ¿Qué es un Deducible?
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Una guía completa para entender los deducibles de seguro y cómo afectan tus costos
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Definition Card */}
            <Card className="card-organic">
              <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3">
                  <DollarSign className="w-8 h-8 text-primary" />
                  Definición de Deducible
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg leading-relaxed">
                  Un <strong>deducible</strong> es la cantidad de dinero que debes pagar de tu bolsillo antes de que tu compañía de seguros comience a pagar por las pérdidas cubiertas.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Por ejemplo, si tienes un deducible de $500 y presentas un reclamo de $2,000, tú pagas los primeros $500 y tu seguro paga los $1,500 restantes.
                </p>
              </CardContent>
            </Card>

            {/* How It Works */}
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold">¿Cómo Funciona un Deducible?</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-primary">1</span>
                    </div>
                    <CardTitle>Ocurre un Evento</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Tienes un accidente de auto, daño a tu hogar, o necesitas atención médica.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-primary">2</span>
                    </div>
                    <CardTitle>Pagas el Deducible</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Tú pagas la cantidad del deducible de tu bolsillo primero.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-primary">3</span>
                    </div>
                    <CardTitle>El Seguro Paga</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Tu compañía de seguros paga el resto de los costos cubiertos.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Types of Deductibles */}
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold">Tipos de Deducibles</h2>
              
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Deducible por Evento</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Pagas el deducible cada vez que presentas un reclamo. Común en seguros de auto y hogar.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Deducible Anual</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Pagas el deducible una vez al año, sin importar cuántos reclamos presentes. Común en seguros de salud.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Deducible de Porcentaje</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      El deducible es un porcentaje del valor asegurado (ej: 2% del valor de tu hogar). Común en seguros contra huracanes y terremotos.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Choosing the Right Deductible */}
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold">¿Cómo Elegir el Deducible Correcto?</h2>
              
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Deducible Alto = Prima Baja</h3>
                      <p className="text-muted-foreground">
                        Si eliges un deducible más alto (ej: $1,000), pagarás menos en tu prima mensual, pero más de tu bolsillo si presentas un reclamo.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Deducible Bajo = Prima Alta</h3>
                      <p className="text-muted-foreground">
                        Si eliges un deducible más bajo (ej: $250), pagarás más en tu prima mensual, pero menos de tu bolsillo si presentas un reclamo.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Considera tu Situación Financiera</h3>
                      <p className="text-muted-foreground">
                        Elige un deducible que puedas pagar cómodamente en caso de emergencia. No elijas un deducible tan alto que no puedas pagarlo si lo necesitas.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Examples by Insurance Type */}
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold">Ejemplos de Deducibles por Tipo de Seguro</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Seguro de Auto</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">Deducibles típicos: $250, $500, $1,000</p>
                    <p className="text-sm">
                      <strong>Ejemplo:</strong> Accidente con $3,000 en daños. Con deducible de $500, pagas $500 y el seguro paga $2,500.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Seguro de Salud</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">Deducibles típicos: $1,000, $2,500, $5,000</p>
                    <p className="text-sm">
                      <strong>Ejemplo:</strong> Cirugía de $10,000. Con deducible de $2,500, pagas $2,500 y el seguro paga $7,500.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Seguro de Hogar</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">Deducibles típicos: $500, $1,000, $2,500</p>
                    <p className="text-sm">
                      <strong>Ejemplo:</strong> Daño por agua de $5,000. Con deducible de $1,000, pagas $1,000 y el seguro paga $4,000.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Seguro contra Huracanes</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">Deducibles típicos: 2%, 5%, 10% del valor asegurado</p>
                    <p className="text-sm">
                      <strong>Ejemplo:</strong> Casa asegurada por $300,000 con deducible de 2% = $6,000 que pagas tú.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Affiliate CTA */}
            <AffiliateCTA 
              category="auto"
              title="¿Listo para Ahorrar en tu Seguro de Auto?"
              description="Compara cotizaciones de las mejores aseguradoras y ahorra hasta $500 al año en tu seguro de auto."
              buttonText="Comparar Cotizaciones"
              variant="banner"
            />

            {/* Related Terms */}
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold">Términos Relacionados</h2>
              
              <div className="flex flex-wrap gap-3">
                <Link href="/term/premium">
                  <Badge variant="outline" className="text-base py-2 px-4 cursor-pointer hover:bg-primary/10">
                    Prima (Premium) <ArrowRight className="w-4 h-4 ml-2" />
                  </Badge>
                </Link>
                <Link href="/term/copayment">
                  <Badge variant="outline" className="text-base py-2 px-4 cursor-pointer hover:bg-primary/10">
                    Copago (Copayment) <ArrowRight className="w-4 h-4 ml-2" />
                  </Badge>
                </Link>
                <Link href="/term/out-of-pocket-maximum">
                  <Badge variant="outline" className="text-base py-2 px-4 cursor-pointer hover:bg-primary/10">
                    Máximo de Gastos de Bolsillo <ArrowRight className="w-4 h-4 ml-2" />
                  </Badge>
                </Link>
                <Link href="/term/claim">
                  <Badge variant="outline" className="text-base py-2 px-4 cursor-pointer hover:bg-primary/10">
                    Reclamo (Claim) <ArrowRight className="w-4 h-4 ml-2" />
                  </Badge>
                </Link>
              </div>
            </div>

            {/* CTA */}
            <Card className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 border-primary/20">
              <CardContent className="pt-8 pb-8 text-center space-y-6">
                <Shield className="w-16 h-16 mx-auto text-primary" />
                <h3 className="text-2xl md:text-3xl font-semibold">
                  Explora Más Términos de Seguro en Español
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Nuestro glosario tiene más de 50 términos de seguro traducidos al español para ayudarte a entender tu póliza.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="/">
                    <Button size="lg" className="rounded-full px-8">
                      Ver Glosario Completo
                    </Button>
                  </Link>
                  <Link href="/term/deductible">
                    <Button size="lg" variant="outline" className="rounded-full px-8">
                      Read in English
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
