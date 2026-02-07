import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { getPlayStoreLink } from "@/lib/analytics";
import { Check, Smartphone, Download as DownloadIcon, HelpCircle, WifiOff } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Download LietuCoach - Offline Lithuanian Learning",
  description: "Get the offline-first Lithuanian learning app. Practice pronunciation, role-play scenarios, and learn survival phrases anywhere.",
};

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-violet-700 text-white py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto max-w-4xl relative z-10 font-sans">
          <div className="inline-flex items-center justify-center p-3 bg-violet-600 rounded-2xl mb-8 shadow-inner">
             <Smartphone className="w-8 h-8 text-teal-300" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Get LietuCoach for Android
          </h1>
          <p className="text-xl text-violet-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            The only offline-first app designed specifically for surviving and thriving in Lithuania.
          </p>
          
          <div className="flex flex-col items-center gap-4">
            {siteConfig.links.playStore ? (
               <Button 
                href={getPlayStoreLink("download_page")}
                size="lg" 
                className="bg-teal-500 hover:bg-teal-600 text-white shadow-xl shadow-violet-900/20 border-none h-14 px-8 text-lg"
              >
                <DownloadIcon className="mr-2 h-5 w-5" />
                Download on Google Play
              </Button>
            ) : (
               <div className="px-6 py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <span className="font-bold text-teal-300">🚀 Launching Soon to Play Store</span>
               </div>
            )}
            <div className="text-sm text-violet-300 mt-2">
              Requires Android 8.0+ • 100% Free to Start
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold text-neutral-900 mb-6">
                Why download the app?
              </h2>
              <div className="space-y-4">
                {[
                  "Complete Offline Access (No WiFi needed)",
                  "Native Audio Pronunciation",
                  "Role-Play Scenarios (Cafe, Bus, Taxi)",
                  "7-Day Structured A1 Course",
                  "No Ads, No Distractions"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-teal-100 text-teal-700 rounded-full p-1">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="text-lg text-neutral-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-100">
               <div className="flex items-center gap-4 mb-6">
                  <div className="bg-violet-100 p-3 rounded-full text-violet-600">
                    <WifiOff size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900">Offline-First Design</h3>
                    <p className="text-sm text-neutral-500">Download once, learn anywhere.</p>
                  </div>
               </div>
               <p className="text-neutral-600 mb-6 leading-relaxed">
                 Most language apps break when you lose signal. LietuCoach is built for the real world—whether you're on a plane to Vilnius or in a basement bar in Kaunas.
               </p>
               <div className="h-2 w-full bg-neutral-100 rounded-full overflow-hidden">
                 <div className="h-full bg-teal-500 w-3/4"></div>
               </div>
               <p className="text-xs text-neutral-400 mt-2 text-right">Download size: ~45MB</p>
            </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white border-t border-neutral-200">
         <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-8 text-center">
              Common Questions
            </h2>
            
            <div className="space-y-6">
              <div className="border border-neutral-200 rounded-lg p-5">
                <h3 className="font-bold text-neutral-900 mb-2 flex items-center gap-2">
                  <HelpCircle size={18} className="text-violet-500" />
                  Is there an iOS version?
                </h3>
                <p className="text-neutral-600">
                  Not yet. We are focusing on perfecting the Android experience first. An iOS version is planned for the future.
                </p>
              </div>

              <div className="border border-neutral-200 rounded-lg p-5">
                 <h3 className="font-bold text-neutral-900 mb-2 flex items-center gap-2">
                  <HelpCircle size={18} className="text-violet-500" />
                  Do I need an internet connection?
                </h3>
                <p className="text-neutral-600">
                  You only need internet to download the app and the initial content pack. After that, everything works 100% offline.
                </p>
              </div>
              
              <div className="border border-neutral-200 rounded-lg p-5">
                 <h3 className="font-bold text-neutral-900 mb-2 flex items-center gap-2">
                  <HelpCircle size={18} className="text-violet-500" />
                  Is it really free?
                </h3>
                <p className="text-neutral-600">
                  Yes. The core "Survival A1" course is completely free. We may add premium advanced content later, but the basics will always be free.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
               <p className="text-neutral-500 mb-4">Have another question?</p>
               <Link href="/support" className="text-violet-700 font-semibold hover:underline">
                 Visit our Help Center
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
