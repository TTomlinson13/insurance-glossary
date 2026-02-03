import { useState } from "react";
import { Link } from "wouter";
import { Calculator, TrendingDown, Shield, DollarSign, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Alert, AlertDescription } from "@/components/ui/alert";

/**
 * Insurance Calculators Page
 * Interactive educational tools for understanding insurance costs and coverage
 */

export default function CalculatorsPage() {
  // Deductible Impact Calculator State
  const [premiumAmount, setPremiumAmount] = useState(1200);
  const [deductible, setDeductible] = useState([1000]);
  
  // Coverage Gap Analyzer State
  const [homeValue, setHomeValue] = useState(300000);
  const [coverageAmount, setCoverageAmount] = useState(250000);
  const [personalProperty, setPersonalProperty] = useState(50000);
  
  // Insurance Cost Estimator State
  const [estimatorAge, setEstimatorAge] = useState(35);
  const [estimatorCoverage, setEstimatorCoverage] = useState(500000);

  // Deductible Impact Calculations
  const calculateDeductibleImpact = () => {
    const baseDeductible = 500;
    const selectedDeductible = deductible[0];
    const deductibleDifference = selectedDeductible - baseDeductible;
    const savingsPercentage = (deductibleDifference / baseDeductible) * 0.15; // Approximate 15% savings per $500 increase
    const estimatedAnnualPremium = premiumAmount * (1 - savingsPercentage);
    const annualSavings = premiumAmount - estimatedAnnualPremium;
    
    return {
      estimatedAnnualPremium: Math.max(estimatedAnnualPremium, premiumAmount * 0.6), // Cap at 40% savings
      annualSavings: Math.min(annualSavings, premiumAmount * 0.4),
      monthlyPremium: Math.max(estimatedAnnualPremium / 12, (premiumAmount * 0.6) / 12),
    };
  };

  const deductibleResults = calculateDeductibleImpact();

  // Coverage Gap Analysis
  const analyzeCoverageGap = () => {
    const replacementCostGap = homeValue - coverageAmount;
    const recommendedCoverage = homeValue * 1.0; // 100% replacement cost
    const propertyGap = (homeValue * 0.5) - personalProperty; // Typically 50% of dwelling
    
    return {
      hasGap: replacementCostGap > 0,
      replacementCostGap,
      recommendedCoverage,
      propertyGap: Math.max(propertyGap, 0),
      coveragePercentage: (coverageAmount / homeValue) * 100,
    };
  };

  const gapAnalysis = analyzeCoverageGap();

  // Life Insurance Cost Estimation
  const estimateLifeInsurance = () => {
    // Simplified estimation based on age and coverage
    const baseRatePerThousand = estimatorAge < 30 ? 0.15 : 
                                 estimatorAge < 40 ? 0.25 :
                                 estimatorAge < 50 ? 0.45 :
                                 estimatorAge < 60 ? 0.85 : 1.50;
    
    const monthlyEstimate = (estimatorCoverage / 1000) * baseRatePerThousand;
    const annualEstimate = monthlyEstimate * 12;
    
    return {
      monthlyEstimate,
      annualEstimate,
      coverageMultiple: estimatorCoverage / 50000,
    };
  };

  const lifeInsuranceEstimate = estimateLifeInsurance();

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
              <Calculator className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium ui-text">Insurance Calculators</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Insurance Calculators & Tools
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Interactive tools to help you understand insurance costs, coverage gaps, and make informed decisions about your protection needs.
            </p>

            <Alert className="max-w-2xl mx-auto">
              <Info className="h-4 w-4" />
              <AlertDescription>
                These calculators provide educational estimates only. Actual insurance costs vary based on many factors including location, claims history, credit score, and specific policy details.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* Calculators */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto space-y-12">
            
            {/* Deductible Impact Calculator */}
            <Card className="card-organic">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <TrendingDown className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Deductible Impact Calculator</CardTitle>
                    <CardDescription>See how your deductible choice affects your premium</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="premium">Current Annual Premium</Label>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-semibold">$</span>
                        <Input
                          id="premium"
                          type="number"
                          value={premiumAmount}
                          onChange={(e) => setPremiumAmount(Number(e.target.value))}
                          className="text-lg"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Label>Select Deductible: ${deductible[0].toLocaleString()}</Label>
                      <Slider
                        value={deductible}
                        onValueChange={setDeductible}
                        min={250}
                        max={5000}
                        step={250}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>$250</span>
                        <span>$2,500</span>
                        <span>$5,000</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 p-6 bg-muted/30 rounded-2xl">
                    <h3 className="font-semibold text-lg mb-4">Estimated Impact</h3>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Estimated Annual Premium:</span>
                        <span className="text-2xl font-bold text-primary">
                          ${deductibleResults.estimatedAnnualPremium.toFixed(0)}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Monthly Premium:</span>
                        <span className="text-xl font-semibold">
                          ${deductibleResults.monthlyPremium.toFixed(0)}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center pt-3 border-t">
                        <span className="text-muted-foreground">Annual Savings:</span>
                        <span className="text-xl font-semibold text-green-600">
                          ${deductibleResults.annualSavings.toFixed(0)}
                        </span>
                      </div>
                    </div>

                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertDescription className="text-sm">
                        Higher deductibles mean lower premiums, but you'll pay more out-of-pocket when filing a claim.
                      </AlertDescription>
                    </Alert>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Coverage Gap Analyzer */}
            <Card className="card-organic">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Coverage Gap Analyzer</CardTitle>
                    <CardDescription>Identify potential gaps in your homeowners insurance</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="homeValue">Home Replacement Value</Label>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-semibold">$</span>
                        <Input
                          id="homeValue"
                          type="number"
                          value={homeValue}
                          onChange={(e) => setHomeValue(Number(e.target.value))}
                          className="text-lg"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="coverage">Current Coverage Amount</Label>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-semibold">$</span>
                        <Input
                          id="coverage"
                          type="number"
                          value={coverageAmount}
                          onChange={(e) => setCoverageAmount(Number(e.target.value))}
                          className="text-lg"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="property">Personal Property Coverage</Label>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-semibold">$</span>
                        <Input
                          id="property"
                          type="number"
                          value={personalProperty}
                          onChange={(e) => setPersonalProperty(Number(e.target.value))}
                          className="text-lg"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 p-6 bg-muted/30 rounded-2xl">
                    <h3 className="font-semibold text-lg mb-4">Gap Analysis</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-muted-foreground">Coverage Level:</span>
                          <span className="text-2xl font-bold">
                            {gapAnalysis.coveragePercentage.toFixed(0)}%
                          </span>
                        </div>
                        <div className="w-full bg-border rounded-full h-3">
                          <div 
                            className={`h-3 rounded-full transition-all ${
                              gapAnalysis.coveragePercentage >= 100 ? 'bg-green-500' :
                              gapAnalysis.coveragePercentage >= 80 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${Math.min(gapAnalysis.coveragePercentage, 100)}%` }}
                          />
                        </div>
                      </div>

                      {gapAnalysis.hasGap && (
                        <Alert variant="destructive">
                          <Info className="h-4 w-4" />
                          <AlertDescription>
                            <strong>Coverage Gap Detected!</strong><br />
                            You're underinsured by ${gapAnalysis.replacementCostGap.toLocaleString()}
                          </AlertDescription>
                        </Alert>
                      )}

                      {!gapAnalysis.hasGap && (
                        <Alert>
                          <Info className="h-4 w-4" />
                          <AlertDescription>
                            <strong>Good Coverage!</strong><br />
                            Your dwelling coverage meets replacement cost needs.
                          </AlertDescription>
                        </Alert>
                      )}

                      <div className="space-y-2 pt-3 border-t">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Recommended Coverage:</span>
                          <span className="font-semibold">${gapAnalysis.recommendedCoverage.toLocaleString()}</span>
                        </div>
                        {gapAnalysis.propertyGap > 0 && (
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Property Coverage Gap:</span>
                            <span className="font-semibold text-orange-600">${gapAnalysis.propertyGap.toLocaleString()}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Life Insurance Cost Estimator */}
            <Card className="card-organic">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Life Insurance Cost Estimator</CardTitle>
                    <CardDescription>Estimate term life insurance costs based on age and coverage</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <Label>Your Age: {estimatorAge}</Label>
                      <Slider
                        value={[estimatorAge]}
                        onValueChange={(val) => setEstimatorAge(val[0])}
                        min={20}
                        max={65}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>20</span>
                        <span>40</span>
                        <span>65</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Label>Coverage Amount: ${estimatorCoverage.toLocaleString()}</Label>
                      <Slider
                        value={[estimatorCoverage]}
                        onValueChange={(val) => setEstimatorCoverage(val[0])}
                        min={100000}
                        max={2000000}
                        step={50000}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>$100K</span>
                        <span>$1M</span>
                        <span>$2M</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 p-6 bg-muted/30 rounded-2xl">
                    <h3 className="font-semibold text-lg mb-4">Estimated Cost</h3>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Monthly Premium:</span>
                        <span className="text-3xl font-bold text-primary">
                          ${lifeInsuranceEstimate.monthlyEstimate.toFixed(2)}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Annual Premium:</span>
                        <span className="text-xl font-semibold">
                          ${lifeInsuranceEstimate.annualEstimate.toFixed(2)}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center pt-3 border-t">
                        <span className="text-muted-foreground">Coverage Amount:</span>
                        <span className="text-xl font-semibold">
                          ${estimatorCoverage.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertDescription className="text-sm">
                        This is a simplified estimate for term life insurance. Actual rates depend on health, lifestyle, and other factors.
                      </AlertDescription>
                    </Alert>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Calculator className="w-16 h-16 mx-auto text-primary" />
            <h2 className="text-4xl md:text-5xl font-semibold">
              Learn More About Insurance
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore our comprehensive glossary and blog to understand insurance terms and make informed decisions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link href="/">
                <Button size="lg" className="rounded-full px-8 ui-text">
                  Browse Glossary
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
            <p className="mt-2">Calculator results are estimates and do not constitute insurance quotes or guarantees.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
