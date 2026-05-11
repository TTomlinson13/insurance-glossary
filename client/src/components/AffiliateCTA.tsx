import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, TrendingUp, Shield } from "lucide-react";
import { CANOPY_CONNECT_CTA } from "@/config/affiliates";

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
  buttonText,
  variant = "default",
}: AffiliateCTAProps) {
  // All CTAs now point to Tomlinson & Co's Canopy Connect quote flow
  const affiliateLink = CANOPY_CONNECT_CTA.url;
  const defaultButtonText = buttonText || CANOPY_CONNECT_CTA.text;

  const defaultTitles = {
    auto: "Get a Free Auto Insurance Quote",
    home: "Get a Free Home Insurance Quote",
    life: "Get a Free Life Insurance Quote",
    renters: "Get a Free Renters Insurance Quote",
    disability: "Get a Free Disability Insurance Quote",
  };

  const defaultDescriptions = {
    auto: "Tomlinson & Co shops multiple carriers to find you the best rate — no obligation, no spam.",
    home: "Tomlinson & Co shops multiple carriers to find you the best rate — no obligation, no spam.",
    life: "Tomlinson & Co shops multiple carriers to find you the best rate — no obligation, no spam.",
    renters: "Tomlinson & Co shops multiple carriers to find you the best rate — no obligation, no spam.",
    disability: "Tomlinson & Co shops multiple carriers to find you the best rate — no obligation, no spam.",
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
            {defaultButtonText}
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
              {defaultButtonText}
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
                {defaultButtonText}
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
        <div className="text-xs text-muted-foreground pt-3 border-t border-border/50">
          💡 Local independent agency • No obligation • Multiple carriers
        </div>
      </CardContent>
    </Card>
  );
}
