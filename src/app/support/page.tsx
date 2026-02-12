import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { LegalSubnav } from "@/components/legal/LegalSubnav";

export const metadata: Metadata = {
  title: "Support Center",
  description: `Get help with ${siteConfig.name}. Contact support or report bugs.`,
  openGraph: {
    title: "Support | LietuCoach",
    description: "Need help? Contact our support team.",
    type: "website",
  },
};

export default function SupportPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 md:px-6">
      <h1 className="mb-8 font-heading text-4xl font-bold text-neutral-900">Support Center</h1>
      
      <LegalSubnav />

      <div className="grid gap-8 md:grid-cols-2">
        {/* Main Contact Card */}
        <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900">Contact Us</h2>
          <p className="mb-6 text-neutral-600">
            The quickest way to get help is to email the developer directly.
          </p>
          <a 
            href="mailto:hello@dhossain.com" 
            className="inline-block rounded-lg bg-violet-600 px-6 py-3 font-bold text-white transition-colors hover:bg-violet-700"
          >
            Email Support
          </a>
          <p className="mt-4 text-sm text-neutral-500">
            hello@dhossain.com
          </p>
        </div>

        {/* Bug Report Info */}
        <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
          <h2 className="mb-4 font-heading text-xl font-bold text-neutral-900">Reporting a Bug?</h2>
          <p className="mb-4 text-neutral-600">
            To help us fix the issue faster, please include:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-600">
            <li><strong>Device Model:</strong> (e.g. Pixel 7, iPhone 14)</li>
            <li><strong>Android/iOS Version:</strong> (e.g. Android 14)</li>
            <li><strong>App Version:</strong> (Check Profile &rarr; Settings)</li>
            <li><strong>Screenshots:</strong> If possible, attach a screenshot of the error.</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 space-y-8 text-neutral-700">
        <section>
          <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900">Frequently Asked Questions</h2>
          
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
                Yes, LietuCoach is currently completely free to use. There are no ads or subscriptions.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-bold text-neutral-900">Why can&apos;t I hear audio?</h3>
              <p className="text-neutral-600">
                The app downloads audio packs for offline use. Ensure you have granted storage permissions if asked, and check your device volume settings. If the issue persists, try reinstalling the app.
              </p>
            </div>
            
             <div>
              <h3 className="mb-2 font-bold text-neutral-900">How do I delete my data?</h3>
              <p className="text-neutral-600">
                You can delete your account from the app settings. See our <a href="/data-deletion" className="text-violet-600 hover:underline">Data Deletion page</a> for more details.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
