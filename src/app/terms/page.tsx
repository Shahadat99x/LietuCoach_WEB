import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `${siteConfig.name} Terms of Service.`,
};

export default function TermsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 md:px-6">
      <h1 className="mb-8 font-heading text-4xl font-bold text-neutral-900">Terms of Service</h1>
      <p className="mb-8 text-neutral-500">Last Updated: {siteConfig.lastUpdated}</p>

      <div className="space-y-8 text-neutral-700">
        <section>
          <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900">1. Acceptance of Terms</h2>
          <p>
            By downloading or using the {siteConfig.name} app, you agree to these terms. If you do not agree, please do not use the app.
          </p>
        </section>

        <section>
          <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900">2. Personal Use License</h2>
          <p>
            {siteConfig.name} grants you a personal, non-exclusive, non-transferable license to use the app for your own language learning. You agree not to copy, modify, or resell any part of our content.
          </p>
        </section>

        <section>
          <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900">3. Content Accuracy</h2>
          <p>
            While we strive for accuracy in our Lithuanian language lessons, language is complex and evolving. We are not liable for any errors or inaccuracies in the content. If you spot a mistake, please let us know!
          </p>
        </section>

        <section>
          <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900">4. Changes to Terms</h2>
          <p>
            We may update these terms from time to time. Continued use of the app after changes constitutes acceptance of the new terms.
          </p>
        </section>

        <section>
          <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900">5. Contact</h2>
          <p>
            Questions? Email us at <a href={`mailto:${siteConfig.links.supportEmail}`} className="text-violet-600 hover:underline">{siteConfig.links.supportEmail}</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
