import { SupportLayout } from "@/components/support/SupportLayout";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Account & Privacy - Help Center",
  description: "Managing your profile and data privacy."
};

export default function AccountSupport() {
  return (
    <SupportLayout 
      title="Account & Privacy"
      breadcrumbs={[{ label: "Support", href: "/support" }, { label: "Account", href: "/support/account" }]}
    >
      <h3>Do I need an account?</h3>
      <p>
        <strong>No.</strong> You can use LietuCoach as a "Guest" forever. We do not force you to sign up to learn.
      </p>

      <h3>Why create an account?</h3>
      <p>
        Creating an account (optional) allows you to:
      </p>
      <ul>
        <li><strong>Sync Progress:</strong> Save your streak and completed lessons to the cloud.</li>
        <li><strong>Recover Data:</strong> If you lose your phone, your progress is safe.</li>
        <li><strong>Leaderboards:</strong> (Coming Soon) Compete with friends.</li>
      </ul>

      <h3>How do I delete my data?</h3>
      <p>
        We respect your right to be forgotten.
      </p>
      <ul>
        <li><strong>Guest Users:</strong> Simply uninstall the app. Your data is only on your phone.</li>
        <li><strong>Cloud Users:</strong> Please visit our <Link href="/data-deletion" className="text-violet-600 underline">Data Deletion Request</Link> page.</li>
      </ul>

      <h3>What data do you collect?</h3>
      <p>
        We collect minimal anonymous usage stats (e.g., "Lesson Completed") to improve the app. We do not sell your personal data. Read our <Link href="/privacy" className="text-violet-600 underline">Privacy Policy</Link> for details.
      </p>
    </SupportLayout>
  );
}
