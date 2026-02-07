import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Headphones, WifiOff, User, Bug, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Help Center",
  description: `Get support for ${siteConfig.name}. Troubleshooting, FAQs, and contact information.`,
};

export default function SupportPage() {
  const categories = [
    {
      icon: Headphones,
      title: "Audio & Pronunciation",
      description: "Audio not playing? Sound quality issues? START HERE.",
      href: "/support/audio"
    },
    {
      icon: WifiOff,
      title: "Offline Mode",
      description: "How to download content and use the app without internet.",
      href: "/support/offline"
    },
    {
      icon: User,
      title: "Account & Privacy",
      description: "Data deletion, guest mode, and profile settings.",
      href: "/support/account"
    },
    {
      icon: Bug,
      title: "Report a Bug",
      description: "Found something broken? Let us know so we can fix it.",
      href: "/support/report-bug"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 pb-20">
      <section className="bg-white border-b border-neutral-200 py-16 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
           <h1 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
             How can we help?
           </h1>
           <p className="text-xl text-neutral-600 mb-8">
             Search our help topics or browse a category below.
           </p>
           {/* Placeholder for Search Bar if we had one */}
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 -mt-8">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {categories.map((cat, i) => (
            <Link key={i} href={cat.href} className="group">
              <Card className="h-full p-8 hover:shadow-lg transition-all border-neutral-200 hover:border-violet-300">
                <div className="bg-violet-50 w-12 h-12 rounded-xl flex items-center justify-center text-violet-600 mb-6 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                  <cat.icon size={24} />
                </div>
                <h3 className="font-bold text-xl text-neutral-900 mb-2 group-hover:text-violet-700">
                  {cat.title}
                </h3>
                <p className="text-neutral-600">
                  {cat.description}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-16 max-w-2xl text-center">
         <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-6">
           Still stuck?
         </h2>
         <p className="text-neutral-600 mb-8">
           We are a small team, but we read every email.
         </p>
         <Button 
            href={`mailto:${siteConfig.links.supportEmail}`} 
            variant="outline"
            className="gap-2"
          >
           <MessageCircle size={18} />
           Contact Support
         </Button>
      </div>
    </div>
  );
}
