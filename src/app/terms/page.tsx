import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { LegalSubnav } from "@/components/legal/LegalSubnav";

export const metadata: Metadata = {
  title: "Terms of Service - LietuCoach",
  description: "Terms and conditions for using " + siteConfig.name + ". Learn the rules and guidelines for using the app.",
  openGraph: {
    title: "Terms of Service | " + siteConfig.name,
    description: "Terms and conditions for using LietuCoach.",
    type: "website",
  },
};

export default function TermsPage() {
  const lastUpdated = "February 12, 2026";

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 md:px-6">
      <h1 className="mb-8 font-heading text-4xl font-bold text-neutral-900">Terms of Service</h1>
      <p className="mb-8 text-neutral-500">Last Updated: {lastUpdated}</p>

      <LegalSubnav />

      <div className="space-y-8 text-neutral-700">
        <section>
          <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By downloading, installing, or using LietuCoach, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the app.
          </p>
        </section>

        <section>
          <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900">2. Description of Service</h2>
          <p className="mb-4">
            LietuCoach is a Lithuanian language learning app. It provides vocabulary practice, audio lessons, and interactive exercises to help users learn basic Lithuanian. The app is provided as is and is currently free to use.
          </p>
        </section>

        <section>
          <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900">3. Accounts</h2>
          <p className="mb-4">
            You may use the app without an account. Creating an account is optional and lets you sync your progress across devices. You are responsible for maintaining the confidentiality of your account credentials.
          </p>
        </section>

        <section>
          <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900">4. License and Acceptable Use</h2>
          <p className="mb-4">
            We grant you a personal, non-transferable, non-exclusive license to use the app for personal, non-commercial language learning purposes.
          </p>
          <p className="mb-4">
            You agree not to:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Reverse engineer, decompile, or disassemble the app.</li>
            <li>Use the app for any illegal purpose.</li>
            <li>Attempt to gain unauthorized access to our servers or user data.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900">5. Educational Disclaimer</h2>
          <p className="mb-4">
            The app is improved continuously, but we do not guarantee that the content is free of errors. Language learning is a complex process, and we are not responsible if you do not achieve specific fluency results.
          </p>
        </section>

        <section>
          <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900">6. Limitation of Liability</h2>
          <p className="mb-4">
            To the fullest extent permitted by law, LietuCoach and its developer shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the app.
          </p>
        </section>

        <section>
          <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900">7. Termination</h2>
          <p className="mb-4">
            We reserve the right to suspend or terminate your access to the app at our sole discretion, without notice, for conduct that violates these Terms.
          </p>
          <p className="mb-4">
            You may stop using the app at any time by deleting it and, if you have an account, deleting your account. See our <a href="/data-deletion" className="text-violet-600 hover:underline">Data Deletion page</a> for instructions.
          </p>
        </section>

        <section>
          <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900">8. Contact</h2>
          <p>
            Questions about these Terms? Contact us at: <br />
            <strong><a href="mailto:hello@dhossain.com" className="text-violet-600 hover:underline">hello@dhossain.com</a></strong>
          </p>
        </section>
      </div>
    </div>
  );
}