import Link from "next/link";
import { BookOpen } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getPlayStoreLink } from "@/lib/analytics";

// ... existing code ...



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
              {siteConfig.description}
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-neutral-900">Product</h3>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li><Link href="/" className="hover:text-violet-600">Home</Link></li>
              <li><Link href="/resources" className="hover:text-violet-600">Resources</Link></li>
              <li><Link href="/blog" className="hover:text-violet-600">Blog</Link></li>
              <li>
                {siteConfig.links.playStore ? (
                   <a 
                    href={getPlayStoreLink("footer")} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block transition-transform hover:scale-105 mt-2"
                  >
                     <div className="rounded-lg bg-neutral-900 px-3 py-1.5 text-white inline-flex flex-col items-start leading-none">
                        <span className="text-[10px] font-medium opacity-80">GET IT ON</span>
                        <span className="text-sm font-bold">Google Play</span>
                     </div>
                  </a>
                ) : (
                  <span className="text-neutral-400 italic">Android App Coming Soon</span>
                )}
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-neutral-900">Support</h3>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li><Link href="/support" className="hover:text-violet-600">Help Center</Link></li>
              <li><a href={`mailto:${siteConfig.links.supportEmail}`} className="hover:text-violet-600">Contact Us</a></li>
              <li><Link href="/data-deletion" className="hover:text-violet-600">Request Data Deletion</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-neutral-900">Legal</h3>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li><Link href="/privacy" className="hover:text-violet-600">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-violet-600">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-neutral-200 pt-8 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} {siteConfig.author.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
