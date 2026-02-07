import { WifiOff, MessageSquareText, Headphones, Users, Map, Feather } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/config/site";

const features = [
  {
    name: "Offline-Ready",
    description: "Download lessons once, learn on a plane, in a forest, or at a cafe without Wi-Fi.",
    icon: WifiOff,
  },
  {
    name: "Practical Phrases",
    description: "Skip the \"my uncle has a red decorative spoon\" nonsense. Learn what you actually need.",
    icon: MessageSquareText,
  },
  {
    name: "Audio Practice",
    description: "Listen to native speakers and perfect your pronunciation with focused listening exercises.",
    icon: Headphones,
  },
  {
    name: "Role-Play Scenarios",
    description: "Practice real-life dialogues (ordering coffee, buying tickets) in a stress-free environment.",
    icon: Users,
  },
  {
    name: "Structured Path",
    description: "A clear A1 curriculum that guides you step-by-step. No guessing what to learn next.",
    icon: Map,
  },
  {
    name: "Lightweight",
    description: "Designed to run smoothly on your phone without draining your battery or data plan.",
    icon: Feather,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold text-neutral-900 sm:text-4xl">
            Why learn with {siteConfig.name}?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600">
            We focus on what matters: getting you speaking confidently without the fluff.
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
      </div>
    </section>
  );
}
