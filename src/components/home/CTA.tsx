import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { getPlayStoreLink } from "@/lib/analytics";

export function CTA() {
  return (
    <section className="bg-violet-600 py-24 text-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="mb-4 font-heading text-3xl font-bold text-white sm:text-4xl">
          Ready to start speaking?
        </h2>
        <p className="mb-8 text-violet-100 text-lg max-w-2xl mx-auto">
          Join thousands of learners mastering Lithuanian the practical way with {siteConfig.name}.
        </p>
        <Button 
          href={getPlayStoreLink("home_mid")} 
          variant="secondary" 
          size="lg"
          className="font-bold text-teal-900 bg-teal-400 hover:bg-teal-300 shadow-xl shadow-violet-900/20"
        >
          Get the App Now
        </Button>
      </div>
    </section>
  );
}
