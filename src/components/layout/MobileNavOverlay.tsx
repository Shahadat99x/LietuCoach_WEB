"use client";

import { useMobileNav } from "./MobileNavContext";
import { MobileMenuDrawer } from "./MobileMenuDrawer";

export function MobileNavOverlay() {
  const { isOpen, setIsOpen } = useMobileNav();

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9998] md:hidden transition-opacity duration-300"
        onClick={() => setIsOpen(false)}
      />
      <MobileMenuDrawer />
    </>
  );
}