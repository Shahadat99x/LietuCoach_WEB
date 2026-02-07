import { Card } from "@/components/ui/Card";
import { Headphones, Download, MessageSquare, Trophy } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Download,
      title: "1. Download & Go Offline",
      description: "Get the app and download the entire course. No internet needed after this point.",
    },
    {
      icon: Headphones,
      title: "2. Listen & Repeat",
      description: "Start with A1 basics. Hear native audio and mimic the intonation.",
    },
    {
      icon: MessageSquare,
      title: "3. Role-Play Scenarios",
      description: "Order coffee or ask for directions in our pressure-free simulator.",
    },
    {
      icon: Trophy,
      title: "4. Speak with Confidence",
      description: "Track your progress and start speaking real Lithuanian in days, not months.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-violet-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            How LietuCoach Works
          </h2>
          <p className="text-lg text-neutral-600">
            We stripped away the gamified fluff. Here is the straight path to speaking.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 border-none shadow-lg bg-white relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-violet-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <step.icon size={24} />
                </div>
                <h3 className="font-bold text-lg text-neutral-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
