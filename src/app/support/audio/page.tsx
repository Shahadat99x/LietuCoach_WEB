import { SupportLayout } from "@/components/support/SupportLayout";

export const metadata = {
  title: "Audio Troubleshooting - Help Center",
  description: "Fix common audio playback issues in LietuCoach."
};

export default function AudioSupport() {
  return (
    <SupportLayout 
      title="Audio & Pronunciation Troubleshooting"
      breadcrumbs={[{ label: "Support", href: "/support" }, { label: "Audio", href: "/support/audio" }]}
    >
      <h3>I can't hear any audio.</h3>
      <p>
        Please check the following:
      </p>
      <ul>
        <li>Ensure your device volume is turned up (media volume, not just ringer).</li>
        <li>Check if your device is in "Silent Mode" (some Android skins mute media in silent mode).</li>
        <li><strong>Restart the app:</strong> Sometimes the Android audio service gets stuck.</li>
      </ul>

      <h3>The audio sounds robotic.</h3>
      <p>
        LietuCoach uses a hybrid of native recordings and high-quality neural TTS. If it sounds robotic:
      </p>
      <ul>
        <li>You might be offline without the "Offline Pack" downloaded. The app might be falling back to your device's default low-quality engine.</li>
        <li>Go to <strong>Settings {">"} Manage Downloads</strong> and ensure "High Quality Audio" is downloaded.</li>
      </ul>

      <h3>Audio cuts off too early.</h3>
      <p>
        This is often a battery optimization issue on Android.
      </p>
      <ul>
        <li>Go to your phone settings.</li>
        <li>Search for "Battery Optimization" or "Background Usage".</li>
        <li>Find "LietuCoach" and set it to "Unrestricted" or "Don't Optimize".</li>
      </ul>
    </SupportLayout>
  );
}
