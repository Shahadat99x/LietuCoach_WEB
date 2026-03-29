import Link from "next/link";
import { BookOpen } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getPlayStoreLink } from "@/lib/analytics";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-heading text-xl font-bold text-violet-700">
              <BookOpen className="h-6 w-6" />
              <span>{siteConfig.name}</span>
            </Link>
            <p className="text-sm text-neutral-500">
              The offline-first Lithuanian learning app for beginners.
            </p>
          </div>

          {/* Learn */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-neutral-900">Learn Lithuanian</h3>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li><Link href="/start" className="hover:text-violet-600">7-Day Roadmap</Link></li>
              <li><Link href="/resources" className="hover:text-violet-600">Free Guides</Link></li>
              <li><Link href="/blog" className="hover:text-violet-600">Blog</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-neutral-900">Support</h3>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li><Link href="/support" className="hover:text-violet-600">Help Center</Link></li>
              <li><a href="mailto:hello@dhossain.com" className="hover:text-violet-600">Contact Us</a></li>
              <li><Link href="/support/offline" className="hover:text-violet-600">Offline Mode FAQ</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-neutral-900">Legal</h3>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li><Link href="/privacy" className="hover:text-violet-600">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-violet-600">Terms of Service</Link></li>
              <li><Link href="/data-deletion" className="hover:text-violet-600">Data Deletion</Link></li>
            </ul>
          </div>
        </div>

        {/* App Download */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-white p-4 border border-neutral-200">
          <div>
            <p className="font-semibold text-neutral-900">Get the LietuCoach App</p>
            <p className="text-sm text-neutral-500">Free Lithuanian lessons for Android.</p>
          </div>
          {siteConfig.links.playStore ? (
            <a 
              href={getPlayStoreLink("footer")} 
              target="_blank" 
              rel="noopener noreferrer"
              className="shrink-0"
            >
              <div className="rounded-lg bg-neutral-900 px-3 py-1.5 text-white inline-flex flex-col items-start leading-none">
                <span className="text-[10px] font-medium opacity-80">GET IT ON</span>
                <span className="text-sm font-bold">Google Play</span>
              </div>
            </a>
          ) : (
            <span className="text-neutral-400 italic">Coming Soon</span>
          )}
        </div>
        
        <div className="mt-8 border-t border-neutral-200 pt-8 text-center text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} {siteConfig.author.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}