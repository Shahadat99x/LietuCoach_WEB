"use client";

import Link from "next/link";
import { Menu, X, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { publicNavItems } from "@/config/nav";
import { getPlayStoreLink } from "@/lib/analytics";
import { MobileNavProvider, useMobileNav } from "./MobileNavContext";

function HeaderContent() {
  const { isOpen, setIsOpen } = useMobileNav();

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-white/10 bg-white/80 backdrop-blur-md transition-all ease-in-out">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-heading text-xl font-bold text-violet-700">
          <BookOpen className="h-6 w-6" />
          <span>LietuCoach</span>
        </Link>

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

        <button
          className="flex md:hidden p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-nav-drawer"
        >
          {isOpen ? <X className="h-6 w-6 text-neutral-900" /> : <Menu className="h-6 w-6 text-neutral-900" />}
        </button>
      </div>
    </header>
  );
}

export function Header() {
  return (
    <MobileNavProvider>
      <HeaderContent />
    </MobileNavProvider>
  );
}