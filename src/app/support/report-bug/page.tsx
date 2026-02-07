import { SupportLayout } from "@/components/support/SupportLayout";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Report a Bug - Help Center",
  description: "Found an issue? Let us know."
};

export default function BugSupport() {
  return (
    <SupportLayout 
      title="Report a Bug"
      breadcrumbs={[{ label: "Support", href: "/support" }, { label: "Report Bug", href: "/support/report-bug" }]}
    >
      <p className="lead">
        We apologize if you encountered an issue. Please help us fix it by sending a report.
      </p>

      <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 my-6">
        <h3 className="mt-0">What to include in your email:</h3>
        <ul className="mb-0">
          <li><strong>Phone Model:</strong> (e.g., Samsung Galaxy S22, Pixel 7)</li>
          <li><strong>Android Version:</strong> (e.g., Android 13)</li>
          <li><strong>What happened?</strong> (e.g., &quot;App crashed when I clicked &apos;Start Lesson&apos;&quot;)</li>
          <li><strong>Screenshots:</strong> (Highly appreciated!)</li>
        </ul>
      </div>

      <Button 
        href={`mailto:${siteConfig.links.supportEmail}?subject=Bug Report - [Device Name]`} 
        size="lg"
      >
        Send Bug Report Email
      </Button>

      <p className="text-sm text-neutral-500 mt-4">
        We typically respond within 24-48 hours.
      </p>
    </SupportLayout>
  );
}
