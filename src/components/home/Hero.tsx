import { Button } from "@/components/ui/Button";
import { Download } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getPlayStoreLink } from "@/lib/analytics";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-50 py-20 lg:py-32">
      <div className="container mx-auto flex flex-col items-center px-4 text-center md:px-6">
        <div className="inline-flex items-center rounded-full bg-violet-100 px-3 py-1 text-sm font-medium text-violet-800 mb-6">
          🚀 Launching Soon
        </div>
        <h1 className="mb-6 max-w-4xl font-heading text-5xl font-bold tracking-tight text-neutral-900 sm:text-6xl md:text-7xl">
          Speak Lithuanian. <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-violet-600 to-teal-500 bg-clip-text text-transparent">Anytime. Anywhere.</span>
        </h1>
        <p className="mb-10 max-w-2xl text-lg text-neutral-600 sm:text-xl">
          {siteConfig.description}
        </p>
        <div className="flex flex-col w-full max-w-md gap-4 sm:flex-row sm:max-w-none sm:justify-center">
          {siteConfig.links.playStore ? (
            <Button 
              href={getPlayStoreLink("home_hero")}
              size="lg" 
              className="gap-2 shadow-xl shadow-violet-200 w-full sm:w-auto"
            >
              <Download className="h-5 w-5" />
              Get it on Google Play
            </Button>
          ) : (
            <Button 
              href="#features"
              size="lg" 
              className="gap-2 shadow-xl shadow-violet-200 w-full sm:w-auto"
            >
              🚀 Launching Soon - See Features
            </Button>
          )}
          <Button href="#features" variant="outline" size="lg" className="w-full sm:w-auto">
            See How It Works
          </Button>
        </div>
        
        {/* Abstract Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-200/30 blur-3xl animate-pulse" />
        <div className="absolute top-0 right-0 -z-10 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-200/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-10 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-amber-200/30 blur-3xl" />
      </div>
    </section>
  );
}
