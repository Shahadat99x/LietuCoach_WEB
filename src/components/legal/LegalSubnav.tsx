"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/data-deletion", label: "Data Deletion" },
  { href: "/support", label: "Support" },
];

export function LegalSubnav() {
  const pathname = usePathname();

  return (
    <nav className="mb-8 flex flex-wrap gap-4 border-b border-neutral-200 pb-4">
      {legalLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`text-sm font-medium transition-colors hover:text-violet-600 ${
            pathname === link.href
              ? "text-violet-700 font-bold"
              : "text-neutral-500"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
