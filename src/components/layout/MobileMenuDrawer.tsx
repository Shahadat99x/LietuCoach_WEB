"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { publicNavItems } from "@/config/nav";
import { Button } from "@/components/ui/Button";
import { useMobileNav } from "./MobileNavContext";

export function MobileMenuDrawer() {
  const { isOpen, setIsOpen } = useMobileNav();

  return (
    <div
      id="mobile-nav-drawer"
      className={`fixed inset-y-0 right-0 z-[9999] w-80 max-w-[85vw] bg-white shadow-2xl md:hidden transform transition-transform duration-300 ease-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-neutral-100">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Navigation</span>
          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5 text-neutral-600" />
          </button>
        </div>

        <div className="flex flex-col px-4 pt-4 overflow-y-auto flex-1">
          <nav className="flex flex-col gap-1">
            {publicNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  item.highlight
                    ? "font-semibold text-teal-600 px-4 py-4 rounded-xl bg-teal-50 text-base"
                    : "font-medium text-neutral-700 px-4 py-4 rounded-xl hover:bg-neutral-50 transition-colors text-base"
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-6 pt-5 border-t border-neutral-100">
            {siteConfig.links.playStore ? (
              <Button
                href={siteConfig.links.playStore}
                variant="primary"
                className="w-full justify-center py-4 text-base font-semibold"
              >
                Get the App
              </Button>
            ) : (
              <div className="text-center text-sm text-neutral-500 py-4">
                App coming soon
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}