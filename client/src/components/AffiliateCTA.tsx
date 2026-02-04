import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, TrendingUp, Shield } from "lucide-react";
import { getAffiliateLink } from "@/config/affiliates";

interface AffiliateCTAProps {
  category: "auto" | "home" | "life" | "renters" | "disability";
  title?: string;
  description?: string;
  buttonText?: string;
  variant?: "default" | "compact" | "banner";
}

export function AffiliateCTA({
  category,
  title,
  description,
  buttonText = "Compare Quotes",
  variant = "default",
}: AffiliateCTAProps) {
  const affiliateLink = getAffiliateLink(category);

  const defaultTitles = {
    auto: "Ready to Save on Auto Insurance?",
    home: "Find the Best Home Insurance Rates",
    life: "Compare Life Insurance Policies",
    renters: "Get Renters Insurance Quotes",
    disability: "Protect Your Income with Disability Insurance",
  };

  const defaultDescriptions = {
    auto: "Compare quotes from top insurers and save up to $500/year on auto insurance.",
    home: "Get personalized home insurance quotes in minutes from trusted providers.",
    life: "Find affordable life insurance coverage to protect your family's future.",
    renters: "Protect your belongings with affordable renters insurance starting at $12/month.",
    disability: "Secure your income with disability insurance from top-rated carriers.",
  };

  const displayTitle = title || defaultTitles[category];
  const displayDescription = description || defaultDescriptions[category];

  if (variant === "compact") {
    return (
      <div className="flex items-center justify-between gap-4 p-4 bg-accent/10 rounded-lg border border-accent/20">
        <div className="flex items-center gap-3">
          <TrendingUp className="w-5 h-5 text-primary shrink-0" />
          <span className="text-sm font-medium">{displayTitle}</span>
        </div>
        <Button
          asChild
          size="sm"
          className="shrink-0"
        >
          <a href={affiliateLink} target="_blank" rel="noopener noreferrer sponsored">
            {buttonText}
            <ExternalLink className="w-3 h-3 ml-1" />
          </a>
        </Button>
      </div>
    );
  }

  if (variant === "banner") {
    return (
      <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-xl p-6 border border-primary/20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">{displayTitle}</h3>
              <p className="text-sm text-muted-foreground">{displayDescription}</p>
            </div>
          </div>
          <Button
            asChild
            size="lg"
            className="shrink-0"
          >
            <a href={affiliateLink} target="_blank" rel="noopener noreferrer sponsored">
              {buttonText}
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
      <CardContent className="pt-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <TrendingUp className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2">{displayTitle}</h3>
            <p className="text-sm text-muted-foreground mb-4">{displayDescription}</p>
            <Button
              asChild
              className="w-full sm:w-auto"
            >
              <a href={affiliateLink} target="_blank" rel="noopener noreferrer sponsored">
                {buttonText}
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
        <div className="text-xs text-muted-foreground pt-3 border-t border-border/50">
          💡 Free comparison • No obligation • Save up to 40%
        </div>
      </CardContent>
    </Card>
  );
}
