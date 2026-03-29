/**
 * Single source of truth for public site navigation.
 * Used by both desktop and mobile header nav rendering.
 */

export interface NavItem {
  label: string;
  href: string;
  /** Optional Tailwind classes to override default link styling */
  className?: string;
  /** Whether this is a primary/CTA-style link */
  highlight?: boolean;
}

export const publicNavItems: NavItem[] = [
  { label: "Resources", href: "/resources" },
  { label: "Blog", href: "/blog" },
  { label: "Start Here", href: "/start", highlight: true },
  { label: "Support", href: "/support" },
];
