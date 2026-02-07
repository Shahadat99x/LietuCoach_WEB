import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

interface Props {
  title: string;
  breadcrumbs: { label: string; href: string }[];
  children: React.ReactNode;
}

export function SupportLayout({ title, breadcrumbs, children }: Props) {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-16 md:px-6 min-h-screen">
      <div className="mb-8">
        <Breadcrumbs items={breadcrumbs} />
      </div>
      
      <h1 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
        {title}
      </h1>
      
      <div className="prose prose-violet max-w-none text-neutral-800">
        {children}
      </div>

      <hr className="my-12 border-neutral-200" />
      
      <div className="text-center">
         <Link href="/support" className="text-violet-700 font-semibold hover:underline">
            &larr; Back to Help Center
         </Link>
      </div>
    </div>
  );
}
