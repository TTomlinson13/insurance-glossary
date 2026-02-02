/* Design: Organic Modernism - Quote comparison form with affiliate integration
 * Collects user info for insurance quotes, integrates with affiliate partners
 */

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, TrendingUp, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

interface QuoteFormProps {
  category?: string;
}

export default function QuoteForm({ category = "General" }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    zipCode: "",
    insuranceType: category === "General" ? "" : category,
    currentlyInsured: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.zipCode || !formData.insuranceType) {
      toast.error("Please fill in all required fields");
      return;
    }

    // In production, this would send to your backend which forwards to affiliate partners
    // For now, we'll simulate success
    console.log("Quote request:", formData);
    
    setIsSubmitted(true);
    toast.success("Quote request submitted! We'll send you personalized quotes shortly.");
    
    // In production, redirect to affiliate partner or show comparison results
    // Example: window.location.href = `https://affiliate-partner.com/quotes?email=${formData.email}&type=${formData.insuranceType}`;
  };

  if (isSubmitted) {
    return (
      <Card className="card-organic bg-gradient-to-br from-primary/10 to-accent/5">
        <CardContent className="pt-6 text-center space-y-4">
          <CheckCircle2 className="w-16 h-16 mx-auto text-primary" />
          <h3 className="text-2xl font-semibold">Request Received!</h3>
          <p className="text-muted-foreground">
            We're finding the best insurance quotes for you. Check your email for personalized options.
          </p>
          <Button 
            variant="outline" 
            onClick={() => setIsSubmitted(false)}
            className="rounded-full ui-text"
          >
            Submit Another Request
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="card-organic border-2 border-primary/20">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Shield className="w-6 h-6 text-primary" />
          <CardTitle className="text-2xl">Compare Quotes</CardTitle>
        </div>
        <CardDescription className="text-base">
          Get personalized insurance quotes from top providers. Free, fast, and secure.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="rounded-xl"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="rounded-xl"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="zipCode">ZIP Code *</Label>
            <Input
              id="zipCode"
              type="text"
              placeholder="12345"
              value={formData.zipCode}
              onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
              className="rounded-xl"
              maxLength={5}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="insuranceType">Insurance Type *</Label>
            <Select 
              value={formData.insuranceType} 
              onValueChange={(value) => setFormData({ ...formData, insuranceType: value })}
              required
            >
              <SelectTrigger id="insuranceType" className="rounded-xl">
                <SelectValue placeholder="Select insurance type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Auto">Auto Insurance</SelectItem>
                <SelectItem value="Health">Health Insurance</SelectItem>
                <SelectItem value="Life">Life Insurance</SelectItem>
                <SelectItem value="Property">Home/Property Insurance</SelectItem>
                <SelectItem value="Renters">Renters Insurance</SelectItem>
                <SelectItem value="Business">Business Insurance</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="currentlyInsured">Currently Insured?</Label>
            <Select 
              value={formData.currentlyInsured} 
              onValueChange={(value) => setFormData({ ...formData, currentlyInsured: value })}
            >
              <SelectTrigger id="currentlyInsured" className="rounded-xl">
                <SelectValue placeholder="Select option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
                <SelectItem value="not-sure">Not Sure</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            type="submit" 
            className="w-full rounded-xl py-6 text-base ui-text"
            size="lg"
          >
            Get Free Quotes
            <TrendingUp className="w-4 h-4 ml-2" />
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting, you agree to receive quotes from our partners. 
            Your information is secure and never sold.
          </p>
        </form>

        {/* Trust Indicators */}
        <div className="mt-6 pt-6 border-t border-border/50 space-y-3">
          <div className="flex items-start gap-3 text-sm">
            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span className="text-muted-foreground">Compare quotes from 10+ top insurers</span>
          </div>
          <div className="flex items-start gap-3 text-sm">
            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span className="text-muted-foreground">Save up to 40% on insurance</span>
          </div>
          <div className="flex items-start gap-3 text-sm">
            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span className="text-muted-foreground">100% free, no obligation</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
