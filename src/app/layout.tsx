import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
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
    template: `%s | ${siteConfig.name}`,
    default: `${siteConfig.name} - ${siteConfig.tagline}`,
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
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: siteConfig.name,
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
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
        "@id": `${siteConfig.url}/#organization`,
        "name": siteConfig.name,
        "url": siteConfig.url,
        "logo": {
          "@type": "ImageObject",
          "url": `${siteConfig.url}/favicon.ico`, // Fallback to favicon for now
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
        // Only include installUrl if present
        ...(siteConfig.links.playStore ? { "installUrl": siteConfig.links.playStore } : {})
      }
    ]
  };

  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${inter.variable} flex min-h-screen flex-col antialiased font-sans`}
      >
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
