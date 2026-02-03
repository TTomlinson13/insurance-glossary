import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown, Loader2 } from "lucide-react";
import { trpc } from "@/lib/trpc";

type TermRatingProps = {
  termSlug: string;
  sessionId: string;
};

export default function TermRating({ termSlug, sessionId }: TermRatingProps) {
  const [hasRated, setHasRated] = useState(false);
  const [userRating, setUserRating] = useState<"up" | "down" | null>(null);

  // Check if user has already rated
  const { data: ratingCheck } = trpc.ratings.checkUserRating.useQuery({
    termSlug,
    sessionId,
  });

  // Get rating stats
  const { data: stats, refetch: refetchStats } = trpc.ratings.getTermStats.useQuery({
    termSlug,
  });

  // Submit rating mutation
  const submitRatingMutation = trpc.ratings.submitRating.useMutation({
    onSuccess: (data) => {
      if (data.success) {
        setHasRated(true);
        refetchStats();
        
        // Track rating in GA4
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'term_rated', {
            event_category: 'engagement',
            event_label: termSlug,
            value: userRating === 'up' ? 1 : 0,
          });
        }
      }
    },
  });

  useEffect(() => {
    if (ratingCheck) {
      setHasRated(ratingCheck.hasRated);
      setUserRating(ratingCheck.rating as "up" | "down" | null);
    }
  }, [ratingCheck]);

  const handleRating = (rating: "up" | "down") => {
    if (hasRated) return;
    
    setUserRating(rating);
    submitRatingMutation.mutate({
      termSlug,
      rating,
      sessionId,
    });
  };

  return (
    <div className="pt-6 border-t border-border/50">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-medium mb-1">Was this definition helpful?</h3>
          {stats && stats.total > 0 && (
            <p className="text-xs text-muted-foreground">
              {stats.percentage}% of {stats.total} {stats.total === 1 ? 'person' : 'people'} found this helpful
            </p>
          )}
        </div>
        
        <div className="flex gap-2">
          <Button
            variant={userRating === "up" ? "default" : "outline"}
            size="sm"
            onClick={() => handleRating("up")}
            disabled={hasRated || submitRatingMutation.isPending}
            className="gap-2"
          >
            {submitRatingMutation.isPending && userRating === "up" ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <ThumbsUp className="w-4 h-4" />
            )}
            {hasRated && userRating === "up" ? "Helpful" : "Yes"}
          </Button>
          
          <Button
            variant={userRating === "down" ? "default" : "outline"}
            size="sm"
            onClick={() => handleRating("down")}
            disabled={hasRated || submitRatingMutation.isPending}
            className="gap-2"
          >
            {submitRatingMutation.isPending && userRating === "down" ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <ThumbsDown className="w-4 h-4" />
            )}
            {hasRated && userRating === "down" ? "Not Helpful" : "No"}
          </Button>
        </div>
      </div>
      
      {hasRated && (
        <p className="text-sm text-muted-foreground mt-2">
          Thanks for your feedback! This helps us improve our definitions.
        </p>
      )}
    </div>
  );
}
