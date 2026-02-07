"use client";

import { Button } from "@/components/ui/Button";
import { Download, WifiOff } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getPlayStoreLink } from "@/lib/analytics";

interface ContentCTAProps {
  title?: string;
  description?: string;
  variant?: "primary" | "secondary";
}

export function ContentCTA({ 
  title = "Start Speaking Lithuanian Today", 
  description = "Get the full offline course with audio nuances, role-play scenarios, and structured lessons.",
  variant = "primary"
}: ContentCTAProps) {
  
  // If no Play Store link, show "Coming Soon" styling
  const isLive = !!siteConfig.links.playStore;

  return (
    <div className={`my-8 rounded-2xl p-8 border ${
      variant === "primary" 
        ? "bg-violet-50 border-violet-100" 
        : "bg-teal-50 border-teal-100"
    }`}>
      <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
        <div className="flex-1">
          <h3 className={`mb-2 font-heading text-2xl font-bold ${
            variant === "primary" ? "text-violet-900" : "text-teal-900"
          }`}>
            {title}
          </h3>
          <p className={`${
            variant === "primary" ? "text-violet-700" : "text-teal-800"
          } mb-4`}>
            {description}
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm font-medium opacity-80">
            <span className="flex items-center gap-1.5">
              <WifiOff className="w-4 h-4" /> Offline-first
            </span>
            <span className="flex items-center gap-1.5">
              <span>🗣️</span> Native Audio
            </span>
          </div>
        </div>
        
        <div className="flex-shrink-0">
          {isLive ? (
             <Button 
              href={getPlayStoreLink("resource_cta")} 
              size="lg" 
              className="gap-2 shadow-lg"
              variant={variant === "primary" ? "primary" : "secondary"}
            >
              <Download className="w-4 h-4" />
              Get the App
            </Button>
          ) : (
             <Button 
              href="#features" 
              size="lg" 
              className="gap-2 shadow-lg opacity-90"
              variant="outline"
            >
              🚀 Launching Soon
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
