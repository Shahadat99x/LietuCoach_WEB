import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { LegalSubnav } from "@/components/legal/LegalSubnav";

export const metadata: Metadata = {
  title: "Data Deletion Request",
  description: `How to delete your data from ${siteConfig.name}.`,
  openGraph: {
    title: "Data Deletion | LietuCoach",
    description: "Instructions for deleting your LietuCoach account and data.",
    type: "website",
  },
};

export default function DataDeletionPage() {
  const lastUpdated = "February 12, 2026";

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 md:px-6">
      <h1 className="mb-8 font-heading text-4xl font-bold text-neutral-900">Data Deletion</h1>
      <p className="mb-8 text-neutral-500">Last Updated: {lastUpdated}</p>

      <LegalSubnav />

      <div className="space-y-8 text-neutral-700">
        {/* Step-by-step Instructions */}
        <div className="rounded-xl border border-violet-100 bg-violet-50 p-8">
          <h2 className="mb-4 font-heading text-2xl font-bold text-violet-900">How to Delete Your Account</h2>
          <p className="mb-6 text-violet-800">
            Deleting your account is permanent. All associated data (progress, streaks, saved words) will be wiped from our servers immediately.
          </p>
          
          <ol className="list-decimal space-y-4 pl-5 font-medium text-neutral-900">
            <li>Open the <strong>LietuCoach</strong> app on your device.</li>
            <li>Go to the <strong>Profile</strong> tab (bottom right icon).</li>
            <li>Tap the <strong>Settings</strong> (gear icon) in the top right.</li>
            <li>Scroll down and tap <strong>Delete Account</strong>.</li>
            <li>Confirm your choice. You will be logged out immediately.</li>
          </ol>
        </div>

        <section>
          <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900">What Getting Deleted Means</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong>User Record:</strong> Your email and user ID are removed from our authentication system (Supabase Auth).</li>
            <li><strong>Learning Data:</strong> All your progress, card schedules, and stats are deleted from our database.</li>
            <li><strong>Cloud Sync:</strong> Syncing will stop immediately. Any local data on your device will also be cleared upon next launch or re-install.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900">What is NOT Deleted by Us</h2>
          <p className="mb-4">
            We do not have access to manage your <strong>Google Account</strong> itself. Deleting your LietuCoach account only removes data from our application.
          </p>
        </section>

        <section>
          <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900">Manual Deletion Request</h2>
          <p className="mb-4">
            If you cannot access the app or have trouble deleting your account, you can request manual deletion by emailing our support team.
          </p>
          <p className="mb-4">
           Please email <strong><a href="mailto:hello@dhossain.com" className="text-violet-600 hover:underline">hello@dhossain.com</a></strong> with the subject line &quot;Data Deletion Request&quot;.
          </p>
          <p>
            Please send the email from the <strong>same email address</strong> associated with your LietuCoach account so we can verify ownership. We will process your request within 30 days.
          </p>
        </section>
      </div>
    </div>
  );
}
