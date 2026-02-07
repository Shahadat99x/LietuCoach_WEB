import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { getPlayStoreLink } from "@/lib/analytics";
import { Card } from "@/components/ui/Card";
import { CheckCircle, Headphones, MessageSquare, BookOpen, Trophy } from "lucide-react";
import Link from "next/link";
import { getAllContent } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Start Here: Your 7-Day Lithuanian Roadmap",
  description: "A practical, step-by-step plan to reach A1 basics in Lithuanian. Download the app for the full experience.",
  openGraph: {
    title: "Start Here: Your 7-Day Lithuanian Roadmap",
    description: "Beginner-friendly roadmap to speaking Lithuanian.",
  }
};

export default function StartPage() {
  const roadmapSteps = [
    {
      day: "Day 1",
      title: "The Sounds of Lithuanian",
      task: "Master the alphabet and pronunciation. Don't worry about grammar yet.",
      icon: Headphones,
      link: "/resources/lithuanian-alphabet-mastery", // Will exist soon
    },
    {
      day: "Day 2",
      title: "Essential Greetings",
      task: "Learn to say 'Labas' (Hi) and 'Ačiū' (Thank you) confidently.",
      icon: MessageSquare,
      link: "/resources/essential-greetings",
    },
    {
      day: "Day 3",
      title: "I Don't Understand",
      task: "Learn survival phrases for when you get stuck.",
      icon: BookOpen,
      link: "/resources/asking-for-help",
    },
    {
      day: "Day 4",
      title: "Numbers & Coffee",
      task: "Learn to count to 10 and order a coffee in a cafe.",
      icon: CheckCircle,
      link: "/resources/ordering-food-drink",
    },
    {
      day: "Day 5",
      title: "Transport Survival",
      task: "Navigate buses and trolleybuses in Vilnius.",
      icon: BookOpen,
      link: "/resources/public-transport-guide",
    },
     {
      day: "Day 6",
      title: "Introduction to Grammar",
      task: "Understand the concept of Cases (without memorizing tables).",
      icon: BookOpen,
      link: "/resources/understanding-cases-gentle",
    },
     {
      day: "Day 7",
      title: "First Conversation",
      task: "Practice a full dialogue using the LietuCoach app.",
      icon: Trophy,
      appAction: true,
    },
  ];

  const topResources = getAllContent("resources").slice(0, 3);

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-violet-700 text-white py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="inline-block px-3 py-1 bg-violet-600 rounded-full text-sm font-semibold mb-6 border border-violet-500">
            Absolute Beginner? Start Here.
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Your 7-Day Roadmap to <span className="text-teal-300">Speaking</span>
          </h1>
          <p className="text-xl md:text-2xl text-violet-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Forget boring textbooks. Here is a practical, week-long plan to survive and thrive in Lithuania.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             {siteConfig.links.playStore ? (
                <Button 
                  href={getPlayStoreLink("start_page")}
                  size="lg" 
                  className="bg-teal-500 hover:bg-teal-600 text-white shadow-xl shadow-violet-900/20 border-none"
                >
                  Download the Companion App
                </Button>
             ) : (
                <Button 
                  href="#roadmap"
                  size="lg" 
                  className="bg-white text-violet-700 hover:bg-violet-50"
                >
                  Start the Roadmap
                </Button>
             )}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 container mx-auto px-4 md:px-6 max-w-5xl">
        <h2 className="font-heading text-3xl font-bold text-neutral-900 mb-12 text-center">
          The 7-Day Plan
        </h2>
        
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-200 before:to-transparent">
          {roadmapSteps.map((step, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-violet-100 text-violet-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <step.icon className="w-5 h-5" />
              </div>
              
              {/* Content */}
              <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white hover:border-violet-300 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-600">
                    {step.day}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{step.title}</h3>
                <p className="text-neutral-600 mb-4">{step.task}</p>
                
                {step.appAction ? (
                   <div className="bg-violet-50 p-3 rounded-lg text-sm text-violet-800 font-medium flex items-center gap-2">
                      <span>📱 Best done in the App</span>
                   </div>
                ) : (
                     <Link href={step.link || "#"} className="text-violet-700 font-semibold text-sm hover:underline flex items-center gap-1">
                     Read Guide &rarr;
                   </Link>
                )}
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Why App? */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-neutral-900 mb-6">
            Why use the App?
          </h2>
          <p className="text-lg text-neutral-600 mb-10">
            This website gives you the theory, but the LietuCoach app gives you the 
            <strong> muscle memory</strong>. Listen to native audio, role-play real conversations, 
            and practice offline.
          </p>
          {siteConfig.links.playStore && (
            <Button href={getPlayStoreLink("start_page")} size="lg" variant="primary">
               Download for Android Free
            </Button>
          )}
        </div>
      </section>
    </div>
  );
}
