export const siteConfig = {
  name: "LietuCoach",
  tagline: "Learn Lithuanian offline-first.",
  description: "The practical, offline-first app for mastering real-world Lithuanian conversations. No internet required.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://lietucoach.app",
  links: {
    twitter: "https://twitter.com/lietucoach",
    github: "https://github.com/lietucoach",
    supportEmail: "hello@dhossain.com",
    playStore: "https://play.google.com/store/apps/details?id=com.lietucoach.app", // Set to "" to enable "Coming Soon" mode
  },
  author: {
    name: "LietuCoach Team",
    url: "https://lietucoach.app",
  },
  keywords: [
    "Learn Lithuanian",
    "Lithuanian Language App",
    "Offline Learning",
    "Lithuanian Phrases",
    "Vilnius Guide",
    "Lithuanian Grammar",
    "Travel to Lithuania",
  ],
  version: "1.0.0",
  lastUpdated: new Date().toISOString().split("T")[0], // Dynamic date for build time
};
