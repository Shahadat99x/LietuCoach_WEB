"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { publicNavItems } from "@/config/nav";
import { getPlayStoreLink } from "@/lib/analytics";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/80 backdrop-blur-md transition-all ease-in-out">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-heading text-xl font-bold text-violet-700 z-[60] relative">
          <BookOpen className="h-6 w-6" />
          <span>LietuCoach</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {publicNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                item.highlight
                  ? "text-sm font-bold text-teal-600 hover:text-teal-700"
                  : "text-sm font-medium text-neutral-600 hover:text-violet-600"
              }
            >
              {item.label}
            </Link>
          ))}
          {siteConfig.links.playStore && (
            <Button href={getPlayStoreLink("nav")} variant="primary" size="sm">
              Get the App
            </Button>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="flex md:hidden z-[60] relative p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X className="h-6 w-6 text-neutral-900" /> : <Menu className="h-6 w-6 text-neutral-900" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[9999] bg-white w-full h-full md:hidden transition-opacity duration-200 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Close button at top right */}
        <div className="absolute top-4 right-4 z-[10000]">
          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-6 w-6 text-neutral-900" />
          </button>
        </div>

        {/* Menu content */}
        <div className="flex flex-col h-full w-full pt-20 px-6 pb-6">
          <nav className="flex flex-col gap-1 text-lg">
            {publicNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  item.highlight
                    ? "font-bold text-teal-600 border-b border-neutral-100 py-4 px-2"
                    : "font-medium text-neutral-900 border-b border-neutral-100 py-4 px-2"
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-6 px-2">
              {siteConfig.links.playStore && (
                <Button
                  href={siteConfig.links.playStore}
                  variant="primary"
                  className="w-full justify-center text-lg h-12"
                >
                  Get the App
                </Button>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}