import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { MobileNavOverlay } from "@/components/layout/MobileNavOverlay";
import { MobileNavProvider } from "@/components/layout/MobileNavContext";
import Script from "next/script";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    template: "%s | " + siteConfig.name,
    default: siteConfig.name + " - " + siteConfig.tagline,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [siteConfig.author],
  creator: siteConfig.author.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name + " - " + siteConfig.tagline,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary",
    title: siteConfig.name + " - " + siteConfig.tagline,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": siteConfig.url + "/#organization",
        "name": siteConfig.name,
        "url": siteConfig.url,
        "logo": {
          "@type": "ImageObject",
          "url": siteConfig.url + "/icon.svg",
        },
        "sameAs": [
          siteConfig.links.twitter,
          siteConfig.links.github,
        ]
      },
      {
        "@type": "SoftwareApplication",
        "name": siteConfig.name,
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "Android",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "description": siteConfig.description,
        ...(siteConfig.links.playStore ? { "installUrl": siteConfig.links.playStore } : {})
      }
    ]
  };

  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={outfit.variable + " " + inter.variable + " flex min-h-screen flex-col antialiased font-sans w-full overflow-x-hidden"}
      >
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MobileNavProvider>
          <Header />
          <MobileNavOverlay />
          <main className="flex-1 w-full flex flex-col">
            {children}
          </main>
          <Footer />
          <MobileStickyCTA />
        </MobileNavProvider>
      </body>
    </html>
  );
}