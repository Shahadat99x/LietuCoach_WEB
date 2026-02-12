import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { LegalSubnav } from "@/components/legal/LegalSubnav";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}. We respect your data: no ads, no tracking, no selling data.`,
  openGraph: {
    title: "Privacy Policy | LietuCoach",
    description: "We collect minimal data to sync your progress. No ads, no tracking.",
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
            LietuCoach (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a Lithuanian language learning application. 
            This app is built and maintained by individual developer <strong>D. Hossain</strong>.
          </p>
          <p>
            If you have any questions about this policy or your data, please contact us at: <br />
            <strong><a href="mailto:hello@dhossain.com" className="text-violet-600 hover:underline">hello@dhossain.com</a></strong>
          </p>
        </section>

        <section>
          <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900">2. Information We Collect</h2>
          <p className="mb-4">
            We only collect the data necessary to provide the core functionality of the app (syncing your progress).
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong>Account Information:</strong> When you sign in with Google (via Supabase Auth), we store your email address and a unique user ID to identify your account.</li>
            <li><strong>Learning Data:</strong> We sync your learning progress, including:
              <ul className="list-disc pl-5 mt-1">
                <li>Lesson progress and completion status</li>
                <li>Streak counts and practice statistics</li>
                <li>Spaced Repetition System (SRS) card schedules</li>
                <li>Certificate metadata (e.g., date earned, level)</li>
              </ul>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900">3. What We Do NOT Collect</h2>
          <p className="mb-4">
            We believe in privacy by default. To be clear:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong>No Ads:</strong> We do not show ads and do not share data with advertisers.</li>
            <li><strong>No Payment Info:</strong> The app is free. We do not collect credit card or payment information.</li>
            <li><strong>No Location Data:</strong> We do not track your location.</li>
            <li><strong>No Contact Lists:</strong> We do not access your contacts.</li>
            <li><strong>No Crash Reporting / Analytics:</strong> We do not use third-party analytics (like Google Analytics or Firebase Crashlytics) to track your behavior or app crashes.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900">4. How We Use Your Data</h2>
          <p className="mb-4">
            We use your data solely for the following purposes:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong>Authentication:</strong> To log you in and secure your account.</li>
            <li><strong>Syncing:</strong> To ensure your progress is saved across devices (e.g., if you switch phones).</li>
            <li><strong>Support:</strong> To assist you if you contact us with a problem (we may look up your account by email).</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900">5. Your GDPR Rights</h2>
          <p className="mb-4">
            If you are located in the EEA or UK, you have specific rights regarding your personal data:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong>Access:</strong> You can request a copy of the data we hold about you.</li>
            <li><strong>Rectification:</strong> You can ask us to correct inaccurate data.</li>
            <li><strong>Deletion:</strong> You can request that we delete your account and all associated data (see Section 7).</li>
            <li><strong>Portability:</strong> You can request a copy of your data in a machine-readable format.</li>
            <li><strong>Objection/Restriction:</strong> You can object to or request restriction of processing of your data.</li>
          </ul>
          <p className="mt-4">
            To exercise any of these rights, email <a href="mailto:hello@dhossain.com" className="text-violet-600 hover:underline">hello@dhossain.com</a>.
          </p>
        </section>

        <section>
          <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900">6. Data Retention</h2>
          <p className="mb-4">
            We retain your account information and learning data for as long as your account is active. If you delete your account, your data is removed from our servers immediately (though backups may persist for a short period before being overwritten).
          </p>
        </section>

        <section>
          <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900">7. Data Deletion</h2>
          <p className="mb-4">
            You can delete your account and all associated data at any time.
          </p>
          <p className="mb-4">
            <strong>In-App:</strong> Go to <em>Profile &rarr; Settings &rarr; Delete Account</em>. This will permanently remove your user record and all synced data from our database.
          </p>
          <p>
            For more details, please visit our <a href="/data-deletion" className="text-violet-600 hover:underline">Data Deletion page</a>.
          </p>
        </section>

        <section>
          <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900">8. Changes to This Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. If we make material changes, we will notify you by updating the "Last Updated" date at the top of this policy.
          </p>
        </section>

        <div className="mt-12 rounded-xl bg-violet-50 p-6 border border-violet-100">
          <h3 className="mb-2 font-bold text-violet-900">Contact Support</h3>
          <p className="text-violet-800">
            Have questions? Email us at <a href="mailto:hello@dhossain.com" className="font-bold hover:underline">hello@dhossain.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
