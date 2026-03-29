import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { getPlayStoreLink } from "@/lib/analytics";
import Link from "next/link";

export function CTA() {
  return (
    <section className="bg-violet-600 py-24 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="mb-4 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
          Start your Lithuanian journey today.
        </h2>
        <p className="mb-8 text-violet-100 text-lg max-w-2xl mx-auto">
          LietuCoach is free to use. Download the app and start learning practical Lithuanian - offline, at your own pace.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button 
            href={getPlayStoreLink("home_mid")} 
            variant="secondary" 
            size="lg"
            className="font-bold text-teal-900 bg-teal-400 hover:bg-teal-300 shadow-xl shadow-violet-900/20"
          >
            Download for Android
          </Button>
          <Button href="/start" variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
            View Learning Roadmap
          </Button>
        </div>
        <p className="text-violet-200 text-sm">
          Free. No account required. Works offline.
        </p>
      </div>
    </section>
  );
}