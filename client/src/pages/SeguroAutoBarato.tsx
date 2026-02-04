/* Spanish keyword landing page: "Seguro de auto barato" 
 * Targets high-volume Spanish search query for cheap auto insurance
 */

import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Car, DollarSign, TrendingDown, CheckCircle2, Shield, ArrowRight } from "lucide-react";
import { useEffect } from "react";

export default function SeguroAutoBarato() {
  // SEO meta tags
  useEffect(() => {
    document.title = "Seguro de Auto Barato | Cómo Ahorrar en Tu Póliza";
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Aprende cómo encontrar seguro de auto barato sin sacrificar cobertura. Consejos para ahorrar dinero en tu póliza de auto.');
    }
    
    // Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Seguro de Auto Barato | Cómo Ahorrar en Tu Póliza');
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Aprende cómo encontrar seguro de auto barato sin sacrificar cobertura.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="mb-4" variant="outline">
              <Car className="w-4 h-4 mr-2" />
              Guía de Ahorro
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-semibold text-foreground leading-tight">
              Cómo Encontrar Seguro de Auto Barato
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Consejos prácticos para ahorrar dinero en tu póliza de auto sin sacrificar cobertura
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introduction */}
            <Card className="card-organic">
              <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3">
                  <TrendingDown className="w-8 h-8 text-primary" />
                  ¿Es Posible Encontrar Seguro de Auto Barato?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg leading-relaxed">
                  Sí, es posible encontrar <strong>seguro de auto económico</strong> sin comprometer la protección que necesitas. La clave está en entender qué factores afectan tu prima y cómo puedes aprovechar descuentos disponibles.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  En promedio, los conductores pueden ahorrar entre $200 y $500 al año comparando cotizaciones y aplicando estrategias de ahorro.
                </p>
              </CardContent>
            </Card>

            {/* Top Ways to Save */}
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold">10 Formas de Ahorrar en Tu Seguro de Auto</h2>
              
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                      1. Compara Cotizaciones de Múltiples Aseguradoras
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Las primas pueden variar hasta $1,000 al año entre compañías. Compara al menos 3-5 cotizaciones para encontrar la mejor tarifa.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                      2. Aumenta Tu Deducible
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Aumentar tu deducible de $250 a $500 o $1,000 puede reducir tu prima en 15-30%. Solo elige un deducible que puedas pagar.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                      3. Agrupa Tus Pólizas (Bundling)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Combina tu seguro de auto con tu seguro de hogar o inquilino en la misma compañía para ahorrar 10-25% en ambas pólizas.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                      4. Mantén un Buen Historial de Manejo
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Evita accidentes y multas. Un historial limpio puede calificarte para descuentos de "buen conductor" de 20-40%.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                      5. Mejora Tu Puntaje de Crédito
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      En la mayoría de los estados, un mejor puntaje de crédito puede reducir tu prima significativamente. Paga tus cuentas a tiempo y reduce deudas.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                      6. Pregunta por Descuentos Disponibles
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Descuentos comunes: estudiante con buenas calificaciones, militar/veterano, bajo millaje, pago automático, póliza pagada por adelantado.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                      7. Usa Seguro Basado en Uso (Telematics)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Programas como Snapshot (Progressive) o DriveEasy (Geico) monitorean tu manejo y pueden ahorrar hasta 30% si conduces de forma segura.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                      8. Elimina Cobertura Innecesaria en Autos Viejos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Si tu auto vale menos de $3,000, considera eliminar cobertura de colisión y comprensiva para ahorrar en prima.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                      9. Toma un Curso de Manejo Defensivo
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Muchas aseguradoras ofrecen descuentos de 5-15% si completas un curso de manejo defensivo aprobado.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                      10. Revisa Tu Póliza Anualmente
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Tu situación cambia con el tiempo. Revisa tu póliza cada año para asegurarte de que sigues obteniendo la mejor tarifa.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Factors That Affect Cost */}
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold">Factores Que Afectan el Costo de Tu Seguro</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Tu Edad y Experiencia</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Conductores jóvenes (menores de 25) y nuevos pagan más. Las tarifas bajan con la edad y experiencia.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Tu Ubicación</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Áreas urbanas con más tráfico y crimen tienen primas más altas que áreas rurales.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Tipo de Vehículo</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Autos deportivos y de lujo cuestan más asegurar. Autos con buenas calificaciones de seguridad cuestan menos.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Historial de Manejo</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Accidentes, multas y DUI aumentan significativamente tu prima por 3-5 años.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Millas Anuales</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Cuanto menos manejes, menor es tu riesgo. Bajo millaje (menos de 7,500 millas/año) puede calificar para descuentos.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Nivel de Cobertura</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Más cobertura = prima más alta. Pero no sacrifiques protección importante solo para ahorrar dinero.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Warning Card */}
            <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3 text-amber-900 dark:text-amber-100">
                  <Shield className="w-6 h-6" />
                  Advertencia: No Sacrifiques Cobertura Esencial
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-900 dark:text-amber-100">
                  Aunque es tentador elegir la póliza más barata, asegúrate de tener cobertura adecuada. El seguro mínimo requerido por ley a menudo no es suficiente para protegerte financieramente en caso de un accidente grave.
                </p>
              </CardContent>
            </Card>

            {/* Related Terms */}
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold">Términos de Seguro de Auto Que Debes Conocer</h2>
              
              <div className="flex flex-wrap gap-3">
                <Link href="/term/auto-insurance">
                  <Badge variant="outline" className="text-base py-2 px-4 cursor-pointer hover:bg-primary/10">
                    Seguro de Auto <ArrowRight className="w-4 h-4 ml-2" />
                  </Badge>
                </Link>
                <Link href="/term/deductible">
                  <Badge variant="outline" className="text-base py-2 px-4 cursor-pointer hover:bg-primary/10">
                    Deducible <ArrowRight className="w-4 h-4 ml-2" />
                  </Badge>
                </Link>
                <Link href="/term/liability">
                  <Badge variant="outline" className="text-base py-2 px-4 cursor-pointer hover:bg-primary/10">
                    Responsabilidad Civil <ArrowRight className="w-4 h-4 ml-2" />
                  </Badge>
                </Link>
                <Link href="/term/collision-coverage">
                  <Badge variant="outline" className="text-base py-2 px-4 cursor-pointer hover:bg-primary/10">
                    Cobertura de Colisión <ArrowRight className="w-4 h-4 ml-2" />
                  </Badge>
                </Link>
                <Link href="/term/comprehensive-coverage">
                  <Badge variant="outline" className="text-base py-2 px-4 cursor-pointer hover:bg-primary/10">
                    Cobertura Comprensiva <ArrowRight className="w-4 h-4 ml-2" />
                  </Badge>
                </Link>
              </div>
            </div>

            {/* CTA */}
            <Card className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 border-primary/20">
              <CardContent className="pt-8 pb-8 text-center space-y-6">
                <DollarSign className="w-16 h-16 mx-auto text-primary" />
                <h3 className="text-2xl md:text-3xl font-semibold">
                  Aprende Más Sobre Seguros en Español
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Explora nuestro glosario completo con más de 50 términos de seguro traducidos al español.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="/">
                    <Button size="lg" className="rounded-full px-8">
                      Ver Glosario Completo
                    </Button>
                  </Link>
                  <Link href="/que-es-deducible">
                    <Button size="lg" variant="outline" className="rounded-full px-8">
                      ¿Qué es un Deducible?
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
