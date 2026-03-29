import { WifiOff, MessageSquareText, Headphones, Users, Map, Feather } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const features = [
  {
    name: "Works Completely Offline",
    description: "Download lessons once and learn anywhere - on a plane, in a cafe, or underground. No WiFi required.",
    icon: WifiOff,
  },
  {
    name: "Practical Phrases",
    description: "Learn what you actually need - ordering coffee, asking for directions, making small talk. Skip the textbook fluff.",
    icon: MessageSquareText,
  },
  {
    name: "Native Audio",
    description: "Hear clear Lithuanian pronunciation from native speakers. Practice until it sounds natural.",
    icon: Headphones,
  },
  {
    name: "Real Conversations",
    description: "Role-play everyday scenarios - at the market, on the bus, in a restaurant. Build real confidence.",
    icon: Users,
  },
  {
    name: "Guided Learning Path",
    description: "A clear A1 curriculum that takes you from zero to basic conversations. No guessing what to learn next.",
    icon: Map,
  },
  {
    name: "Lightweight App",
    description: "Small download, smooth performance, and minimal battery usage. Built for real phones, not just flagship devices.",
    icon: Feather,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold text-neutral-900 sm:text-4xl">
            Why LietuCoach works for beginners.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600">
            We focus on practical Lithuanian - the kind you can actually use in everyday situations in Lithuania.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.name} className="flex flex-col items-center text-center p-8 border-none bg-neutral-50/50 hover:bg-white">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 shadow-sm">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 font-heading text-xl font-bold text-neutral-900">{feature.name}</h3>
              <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/resources" className="text-violet-700 font-semibold hover:text-violet-800 inline-flex items-center gap-2">
            Browse free Lithuanian guides
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}