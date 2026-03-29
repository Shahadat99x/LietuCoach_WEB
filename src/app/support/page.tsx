import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { LegalSubnav } from "@/components/legal/LegalSubnav";
import Link from "next/link";
import { Mail, HelpCircle, Bug, FileQuestion } from "lucide-react";

export const metadata: Metadata = {
  title: "LietuCoach Support Center",
  description: "Get help with LietuCoach. Find answers to common questions, report issues, or contact us directly.",
  openGraph: {
    title: "Support | LietuCoach",
    description: "Help and support for LietuCoach Lithuanian language learning app.",
    type: "website",
  },
};

const helpTopics = [
  {
    icon: HelpCircle,
    title: "Offline Mode",
    description: "How to use LietuCoach without internet.",
    href: "/support/offline",
  },
  {
    icon: FileQuestion,
    title: "Account & Privacy",
    description: "Manage your profile and data.",
    href: "/support/account",
  },
  {
    icon: Bug,
    title: "Report a Bug",
    description: "Found an issue? Let us know.",
    href: "/support/report-bug",
  },
];

export default function SupportPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 md:px-6">
      <div className="mb-12">
        <h1 className="mb-4 font-heading text-4xl font-bold text-neutral-900">Support Center</h1>
        <p className="text-xl text-neutral-600">
          Need help with LietuCoach? Find answers below or contact us directly.
        </p>
      </div>
      
      <LegalSubnav />

      {/* Quick Help Topics */}
      <div className="mb-12">
        <h2 className="mb-6 font-heading text-2xl font-bold text-neutral-900">Quick Help Topics</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {helpTopics.map((topic) => (
            <Link
              key={topic.href}
              href={topic.href}
              className="flex items-start gap-4 rounded-xl border border-neutral-200 bg-white p-5 transition-all hover:border-violet-200 hover:shadow-md"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
                <topic.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900">{topic.title}</h3>
                <p className="text-sm text-neutral-500">{topic.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Main Contact Card */}
        <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900">Email Support</h2>
          <p className="mb-6 text-neutral-600">
            The fastest way to get help is to email the developer directly.
          </p>
          <a 
            href="mailto:hello@dhossain.com" 
            className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-6 py-3 font-bold text-white transition-colors hover:bg-violet-700"
          >
            <Mail className="h-5 w-5" />
            Email hello@dhossain.com
          </a>
          <p className="mt-4 text-sm text-neutral-500">
            We typically respond within 24-48 hours.
          </p>
        </div>

        {/* Bug Report Info */}
        <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
          <h2 className="mb-4 font-heading text-xl font-bold text-neutral-900">Reporting a Bug?</h2>
          <p className="mb-4 text-neutral-600">
            To help us fix the issue faster, please include:
          </p>
          <ul className="space-y-2 text-sm text-neutral-600">
            <li><strong>Device Model:</strong> (e.g. Pixel 7, Samsung Galaxy)</li>
            <li><strong>Android Version:</strong> (e.g. Android 14)</li>
            <li><strong>App Version:</strong> (Profile &rarr; Settings)</li>
            <li><strong>Screenshots:</strong> If possible, attach a screenshot.</li>
          </ul>
        </div>
      </div>

      {/* Common Questions */}
      <div className="mt-12 space-y-8 text-neutral-700">
        <section>
          <h2 className="mb-6 font-heading text-2xl font-bold text-neutral-900">Common Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 font-bold text-neutral-900">I lost my progress. Can you restore it?</h3>
              <p className="text-neutral-600">
                If you were signed in with Google, your progress is synced to the cloud. Try signing out and signing back in. If you were using the app offline without signing in, your progress is only stored on that device and cannot be recovered if the app was deleted.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-bold text-neutral-900">Is the app free?</h3>
              <p className="text-neutral-600">
                Yes, LietuCoach is completely free to use. There are no ads or subscriptions.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-bold text-neutral-900">Why can&apos;t I hear audio?</h3>
              <p className="text-neutral-600">
                The app downloads audio packs for offline use. Ensure you have granted storage permissions and check your device volume settings. If the issue persists, try reinstalling the app. Visit our Audio Troubleshooting page for more help.
              </p>
            </div>
            
            <div>
              <h3 className="mb-2 font-bold text-neutral-900">How do I delete my data?</h3>
              <p className="text-neutral-600">
                Go to Profile &rarr; Settings &rarr; Delete Account in the app. Or visit our <a href="/data-deletion" className="text-violet-600 hover:underline">Data Deletion page</a> for instructions.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-bold text-neutral-900">Can I use LietuCoach without an account?</h3>
              <p className="text-neutral-600">
                Yes. You can use LietuCoach as a guest. An account is optional and lets you sync your progress across devices.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}