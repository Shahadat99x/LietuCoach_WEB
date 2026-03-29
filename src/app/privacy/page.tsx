import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { LegalSubnav } from "@/components/legal/LegalSubnav";

export const metadata: Metadata = {
  title: "Privacy Policy - " + siteConfig.name,
  description: siteConfig.name + " respects your privacy. We collect minimal data only to sync your progress. No ads, no tracking, no selling your data.",
  openGraph: {
    title: "Privacy Policy | " + siteConfig.name,
    description: "We collect minimal data to sync your progress. No ads, no tracking, no selling your data.",
    type: "website",
  },
};

export default function PrivacyPage() {
  const lastUpdated = "February 12, 2026";

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 md:px-6">
      <h1 className="mb-8 font-heading text-4xl font-bold text-neutral-900">Privacy Policy</h1>
      <p className="mb-8 text-neutral-500">Last Updated: {lastUpdated}</p>

      <LegalSubnav />

      <div className="space-y-8 text-neutral-700">
        <section>
          <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900">1. Who We Are</h2>
          <p className="mb-4">
            LietuCoach is a Lithuanian language learning application. This app is built and maintained by individual developer D. Hossain.
          </p>
          <p>
            Questions about this policy or your data? Contact us at: <br />
            <strong><a href="mailto:hello@dhossain.com" className="text-violet-600 hover:underline">hello@dhossain.com</a></strong>
          </p>
        </section>

        <section>
          <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900">2. What We Collect</h2>
          <p className="mb-4">
            We only collect data necessary for the app to function:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong>Account Info:</strong> If you sign in with Google (via Supabase Auth), we store your email and a user ID.</li>
            <li><strong>Learning Progress:</strong> Your lesson completion, streaks, and practice stats for syncing across devices.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900">3. What We Do NOT Collect</h2>
          <p className="mb-4">
            We believe in privacy by default. We do not:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong>Show ads</strong> or share data with advertisers</li>
            <li><strong>Track your location</strong></li>
            <li><strong>Access your contacts</strong></li>
            <li><strong>Use third-party analytics</strong> (like Google Analytics or Crashlytics)</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900">4. How We Use Your Data</h2>
          <p className="mb-4">
            Your data is used only for:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong>Authentication:</strong> Logging you in and securing your account.</li>
            <li><strong>Syncing:</strong> Saving your progress across devices.</li>
            <li><strong>Support:</strong> Helping you if you contact us with a problem.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900">5. Your GDPR Rights</h2>
          <p className="mb-4">
            If you are in the EEA or UK, you have the right to access, correct, delete, or export your data. Contact us at the email above to exercise these rights.
          </p>
        </section>

        <section>
          <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900">6. Data Retention</h2>
          <p className="mb-4">
            We keep your data while your account is active. Deleting your account removes all your data from our servers immediately.
          </p>
        </section>

        <section>
          <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900">7. Deleting Your Data</h2>
          <p className="mb-4">
            Delete your account from the app: <em>Profile &rarr; Settings &rarr; Delete Account</em>.
          </p>
          <p>
            Or visit our <a href="/data-deletion" className="text-violet-600 hover:underline">Data Deletion page</a> for more options.
          </p>
        </section>

        <section>
          <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900">8. Changes to This Policy</h2>
          <p className="mb-4">
            If we make material changes to this policy, we will update the date at the top of this page.
          </p>
        </section>

        <div className="mt-12 rounded-xl bg-violet-50 p-6 border border-violet-100">
          <h3 className="mb-2 font-bold text-violet-900">Questions?</h3>
          <p className="text-violet-800">
            Email us at <a href="mailto:hello@dhossain.com" className="font-bold hover:underline">hello@dhossain.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}