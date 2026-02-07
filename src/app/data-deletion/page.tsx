
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Data Deletion Request",
  description: `Instructions for requesting data deletion from ${siteConfig.name}.`,
};

export default function DataDeletionPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-16 md:px-6">
      <h1 className="mb-8 font-heading text-4xl font-bold text-neutral-900">Request Data Deletion</h1>
      
      <div className="prose prose-violet max-w-none text-neutral-700">
        <p className="lead text-xl text-neutral-600 mb-8">
          At {siteConfig.name}, we prioritize your privacy. Since our app is primarily offline-first, most data resides solely on your device.
        </p>

        <div className="mb-10 rounded-xl bg-neutral-50 p-6 border border-neutral-100">
          <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900">Scenario A: You never created an account</h2>
          <p className="mb-4">
            If you have used the app as a &quot;Guest&quot; without signing in, simply <strong>uninstall the app</strong>.
          </p>
          <p>
            This effectively clears all your local learning progress and settings from your device. We do not hold any personal data for guest users on our servers.
          </p>
        </div>

        <div className="mb-10 rounded-xl bg-neutral-50 p-6 border border-neutral-100">
          <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-900">Scenario B: You created an account</h2>
          <p className="mb-4">
            If you opted into cloud services (when available), you can request full deletion of your profile and synced progress.
          </p>
          
          <h3 className="text-lg font-semibold mb-2">To request deletion:</h3>
          <ol className="list-decimal space-y-2 pl-5 mb-6">
            <li>Send an email to <a href={`mailto:${siteConfig.links.supportEmail}`} className="font-medium text-violet-600 hover:underline">{siteConfig.links.supportEmail}</a>.</li>
            <li><strong>Subject Line:</strong> &quot;Data Deletion Request - [Your Email Address]&quot;</li>
            <li><strong>Body:</strong> Please delete my account associated with [Your Email Address].</li>
          </ol>
          
          <p className="text-sm text-neutral-500">
            <strong>Timeline:</strong> We will process your request and permanently delete your data within 30 days.
          </p>
        </div>
      </div>
    </div>
  );
}
