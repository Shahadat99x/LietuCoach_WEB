"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { getPlayStoreLink } from "@/lib/analytics";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

export function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has dismissed it previously
    const isDismissed = localStorage.getItem("lietucoach-sticky-dismissed");
    
    // Only show if NOT dismissed and Play Store link exists
    if (!isDismissed && siteConfig.links.playStore) {
      // Small delay to not be annoying immediately on load
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("lietucoach-sticky-dismissed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden animate-in slide-in-from-bottom-10 fade-in duration-500">
      <div className="bg-neutral-900 text-white rounded-xl shadow-2xl p-4 flex items-center justify-between gap-3 border border-neutral-800">
        <div className="flex-1">
          <div className="font-bold text-sm">Get LietuCoach App</div>
          <div className="text-xs text-neutral-400">Offline-first • A1-ready</div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button 
            href={getPlayStoreLink("mobile_sticky")}
            size="sm"
            className="bg-teal-500 hover:bg-teal-600 text-white border-none h-9 px-3 text-xs font-bold"
          >
            Install
          </Button>
          
          <button 
            onClick={handleDismiss}
            className="p-1 rounded-full text-neutral-500 hover:text-white hover:bg-neutral-800 transition-colors"
            aria-label="Dismiss"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
