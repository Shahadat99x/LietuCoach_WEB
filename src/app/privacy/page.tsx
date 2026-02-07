import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `${siteConfig.name} Privacy Policy. We respect your data and privacy.`,
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 md:px-6">
      <h1 className="mb-8 font-heading text-4xl font-bold text-neutral-900">Privacy Policy</h1>
      <p className="mb-8 text-neutral-500">Last Updated: {siteConfig.lastUpdated}</p>

      {/* Plain Language Summary */}
      <div className="mb-12 rounded-xl bg-violet-50 p-6 border border-violet-100">
        <h2 className="mb-4 font-heading text-xl font-bold text-violet-900">Plain Language Summary</h2>
        <ul className="list-disc space-y-2 pl-5 text-violet-800">
          <li><strong>We respect your privacy.</strong> {siteConfig.name} is designed to be an offline learning tool.</li>
          <li><strong>Your data is yours.</strong> Your learning progress is stored locally on your device unless you explicitly enable cloud features.</li>
          <li><strong>No creeps.</strong> We do not sell your personal data to third parties.</li>
          <li><strong>Safe.</strong> We only collect the minimum data needed to make the app work (like crash logs to fix bugs).</li>
        </ul>
      </div>

      <div className="space-y-8 text-neutral-700">
        <section>
          <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900">1. Information We Collect</h2>
          <p className="mb-4">
            Since {siteConfig.name} is primarily an offline-first application, most of your data (learning progress, settings) remains on your device.
          </p>
          <p>
            We may collect anonymous usage data (e.g., app crashes, feature usage) to help us improve the app stability. This data is not linked to your personal identity.
          </p>
        </section>

        <section>
          <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900">2. Device Permissions</h2>
          <p className="mb-4">
            The app may request access to your device's storage to save offline content packs (audio files). This permission is strictly used for app functionality.
          </p>
        </section>

        <section>
          <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900">3. Third-Party Services</h2>
          <p className="mb-4">
            We use Google Play Services for app distribution and basic analytics. Please refer to Google's privacy policy for details on how they handle data.
          </p>
        </section>

        <section>
          <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900">4. Contact Us</h2>
          <p>
            If you have any questions about this policy, please contact us at <a href={`mailto:${siteConfig.links.supportEmail}`} className="text-violet-600 hover:underline">{siteConfig.links.supportEmail}</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
