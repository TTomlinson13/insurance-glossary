import { useEffect } from "react";

/**
 * Google AdSense Ad Component
 * 
 * This component displays Google AdSense ads throughout the site.
 * 
 * SETUP INSTRUCTIONS:
 * 1. Apply for Google AdSense at https://www.google.com/adsense
 * 2. Get approved (usually takes 1-2 weeks)
 * 3. Create ad units in AdSense dashboard
 * 4. Replace ADSENSE_CLIENT_ID and ADSENSE_SLOT_ID with your actual values
 * 5. Add AdSense script to client/index.html <head>:
 *    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX" crossorigin="anonymous"></script>
 */

interface AdSenseAdProps {
  slot: string; // Ad unit slot ID from AdSense dashboard
  format?: "auto" | "rectangle" | "vertical" | "horizontal";
  responsive?: boolean;
  className?: string;
}

export function AdSenseAd({ 
  slot, 
  format = "auto", 
  responsive = true,
  className = ""
}: AdSenseAdProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      if (window.adsbygoogle && process.env.NODE_ENV === "production") {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, []);

  // Show placeholder in development mode
  if (process.env.NODE_ENV !== "production") {
    return (
      <div className={`border-2 border-dashed border-muted-foreground/30 rounded-lg p-4 text-center ${className}`}>
        <div className="text-sm text-muted-foreground font-medium mb-2">
          📢 AdSense Ad Placeholder
        </div>
        <div className="text-xs text-muted-foreground">
          Slot: {slot} | Format: {format}
        </div>
        <div className="text-xs text-muted-foreground mt-1">
          Ads will appear here in production
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-XXXXXXXXXX" // Replace with your AdSense client ID
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
}
