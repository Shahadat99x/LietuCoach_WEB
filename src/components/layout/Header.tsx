"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { getPlayStoreLink } from "@/lib/analytics";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/80 backdrop-blur-md transition-all ease-in-out">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-heading text-xl font-bold text-violet-700 z-50 relative">
          <BookOpen className="h-6 w-6" />
          <span>LietuCoach</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/resources" className="text-sm font-medium text-neutral-600 hover:text-violet-600">
            Resources
          </Link>
          <Link href="/blog" className="text-sm font-medium text-neutral-600 hover:text-violet-600">
            Blog
          </Link>
          <Link href="/start" className="text-sm font-bold text-teal-600 hover:text-teal-700">
            Start Here
          </Link>
          <Link href="/support" className="text-sm font-medium text-neutral-600 hover:text-violet-600">
            Support
          </Link>
          {siteConfig.links.playStore && (
            <Button href={getPlayStoreLink("nav")} variant="primary" size="sm">
              Get the App
            </Button>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="flex md:hidden z-50 relative p-2"
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
        className={`fixed inset-0 z-40 bg-white transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-6">
          <nav className="flex flex-col gap-6 text-lg">
            <Link
              href="/resources"
              className="font-medium text-neutral-900 border-b border-neutral-100 pb-4"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/blog"
              className="font-medium text-neutral-900 border-b border-neutral-100 pb-4"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/start"
              className="font-bold text-teal-600 border-b border-neutral-100 pb-4"
              onClick={() => setIsOpen(false)}
            >
              Start Here
            </Link>
            <Link
              href="/support"
              className="font-medium text-neutral-900 border-b border-neutral-100 pb-4"
              onClick={() => setIsOpen(false)}
            >
              Support
            </Link>
            <div className="pt-4">
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
