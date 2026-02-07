import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-neutral-500 mb-6">
      <Link href="/" className="hover:text-violet-600 flex items-center">
        <Home className="h-4 w-4" />
        <span className="sr-only">Home</span>
      </Link>
      
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center space-x-2">
          <ChevronRight className="h-4 w-4 text-neutral-400" />
          <Link 
            href={item.href}
            className={`hover:text-violet-600 transition-colors ${
              index === items.length - 1 ? "font-medium text-neutral-900 pointer-events-none" : ""
            }`}
             aria-current={index === items.length - 1 ? "page" : undefined}
          >
            {item.label}
          </Link>
        </div>
      ))}
    </nav>
  );
}
