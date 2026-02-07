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
      <h3>I can&apos;t hear any audio.</h3>
      <p>
        Please check the following:
      </p>
      <ul>
        <li>Ensure your device volume is turned up (media volume, not just ringer).</li>
        <li>Check if your device is in &quot;Silent Mode&quot; (some Android skins mute media in silent mode).</li>
        <li><strong>Restart the app:</strong> Sometimes the Android audio service gets stuck.</li>
      </ul>

      <h3>The audio sounds robotic.</h3>
      <p>
        LietuCoach uses a hybrid of native recordings and high-quality neural TTS. If it sounds robotic:
      </p>
      <ul>
        <li>You might be offline without the &quot;Offline Pack&quot; downloaded. The app might be falling back to your device&apos;s default low-quality engine.</li>
        <li>Go to <strong>Settings {">"} Manage Downloads</strong> and ensure &quot;High Quality Audio&quot; is downloaded.</li>
      </ul>

      <h3>Audio cuts off too early.</h3>
      <p>
        This is often a battery optimization issue on Android.
      </p>
      <ul>
        <li>Go to your phone settings.</li>
        <li>Search for &quot;Battery Optimization&quot; or &quot;Background Usage&quot;.</li>
        <li>Find &quot;LietuCoach&quot; and set it to &quot;Unrestricted&quot; or &quot;Don&apos;t Optimize&quot;.</li>
      </ul>
    </SupportLayout>
  );
}
