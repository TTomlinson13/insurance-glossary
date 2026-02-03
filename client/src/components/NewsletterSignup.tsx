import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { trpc } from "@/lib/trpc";
import { Loader2, Mail, CheckCircle2 } from "lucide-react";


export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const subscribeMutation = trpc.newsletter.subscribe.useMutation({
    onSuccess: (data) => {
      if (data.success) {
        setIsSuccess(true);
        setEmail("");
        setErrorMessage("");
        
        // Reset success state after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      }
    },
    onError: (error) => {
      setErrorMessage(error.message || "Failed to subscribe. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    subscribeMutation.mutate({
      email,
      source: "footer_form",
    });
  };

  if (isSuccess) {
    return (
      <div className="flex items-center gap-2 text-green-600">
        <CheckCircle2 className="w-5 h-5" />
        <span className="text-sm font-medium">Thanks for subscribing!</span>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md">
      <div className="relative flex-1">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={subscribeMutation.isPending}
          className="pl-10"
          required
        />
      </div>
      <Button 
        type="submit" 
        disabled={subscribeMutation.isPending || !email}
        className="shrink-0"
      >
        {subscribeMutation.isPending ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Subscribing...
          </>
        ) : (
          "Subscribe"
        )}
      </Button>
      </form>
      {errorMessage && (
        <p className="text-sm text-red-500">{errorMessage}</p>
      )}
    </div>
  );
}
