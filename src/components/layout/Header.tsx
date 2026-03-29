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
          className="flex md:hidden z-[60] relative p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X className="h-6 w-6 text-neutral-900" /> : <Menu className="h-6 w-6 text-neutral-900" />}
        </button>
      </div>

      {/* Backdrop overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[9998] md:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Nav Drawer - Slide in from right */}
      <div
        id="mobile-menu"
        className={`fixed inset-y-0 right-0 z-[9999] w-72 bg-white shadow-2xl md:hidden transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header with close button */}
        <div className="flex items-center justify-between px-4 pt-4 pb-2">
          <span className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-4 w-4 text-neutral-600" />
          </button>
        </div>

        {/* Menu content */}
        <div className="flex flex-col px-3 pb-6">
          <nav className="flex flex-col gap-1 text-base">
            {publicNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  item.highlight
                    ? "font-semibold text-teal-600 px-3 py-3 rounded-lg bg-teal-50"
                    : "font-medium text-neutral-700 px-3 py-3 rounded-lg hover:bg-neutral-50 transition-colors"
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* App CTA */}
          <div className="mt-6 pt-6 border-t border-neutral-100">
            {siteConfig.links.playStore ? (
              <Button
                href={siteConfig.links.playStore}
                variant="primary"
                className="w-full justify-center"
              >
                Get the App
              </Button>
            ) : (
              <div className="text-center text-sm text-neutral-500 py-3">
                App coming soon
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}