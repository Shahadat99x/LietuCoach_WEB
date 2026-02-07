import { SupportLayout } from "@/components/support/SupportLayout";

export const metadata = {
  title: "Offline Mode - Help Center",
  description: "How to use LietuCoach without an internet connection."
};

export default function OfflineSupport() {
  return (
    <SupportLayout 
      title="Using Offline Mode"
      breadcrumbs={[{ label: "Support", href: "/support" }, { label: "Offline", href: "/support/offline" }]}
    >
      <h3>Does the app work offline?</h3>
      <p>
        <strong>Yes!</strong> LietuCoach is "Offline First". This means the core functionality (lessons, phrases, basic audio) is designed to work without WiFi.
      </p>

      <h3>How do I download content?</h3>
      <p>
        When you first open the app, it will ask to download the "Core Content Pack" (~45MB). 
      </p>
      <ol>
        <li>Connect to WiFi (recommended).</li>
        <li>The download should start automatically.</li>
        <li>Once finished, you can turn on Airplane Mode and keep learning.</li>
      </ol>

      <h3>"Download Failed" Error</h3>
      <p>
        If the initial download fails:
      </p>
      <ul>
        <li>Check your internet connection.</li>
        <li>Ensure you have at least 100MB of free space on your device.</li>
        <li>Clear the app cache (Android Settings {">"} Apps {">"} LietuCoach {">"} Storage {">"} Clear Cache).</li>
      </ul>
    </SupportLayout>
  );
}
