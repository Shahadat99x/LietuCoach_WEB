import { siteConfig } from "@/config/site";

export type AnalyticsPlacement = 
  | "home_hero"
  | "home_mid" 
  | "footer"
  | "mobile_sticky"
  | "resource_cta"
  | "blog_cta"
  | "start_page"
  | "download_page"
  | "nav"
  | "not_found";

/**
 * Generates a Play Store URL with standard UTM parameters for attribution.
 * Defaults to the siteConfig.links.playStore URL.
 */
export function getPlayStoreLink(placement: AnalyticsPlacement, campaign: string = "launch"): string {
  const baseUrl = siteConfig.links.playStore;
  
  // If no Play Store URL is configured (Launch Mode), return empty or a placeholder anchor
  if (!baseUrl) return "#";

  try {
    const url = new URL(baseUrl);
    url.searchParams.set("utm_source", "website");
    url.searchParams.set("utm_medium", "cta");
    url.searchParams.set("utm_campaign", campaign);
    url.searchParams.set("utm_content", placement);
    
    return url.toString();
  } catch (e) {
    // Fallback if baseUrl is not a valid URL (e.g. relative path or broken config)
    console.error("Invalid Play Store URL in config", e);
    return baseUrl;
  }
}
