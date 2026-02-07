import { Metadata } from "next";
import Link from "next/link";
import { getAllContent } from "@/lib/mdx";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources",
  description: "Free Lithuanian language learning resources, grammar guides, and phrasebooks.",
};

export default async function ResourcesIndexPage() {
  const resources = getAllContent("resources");

  return (
    <div className="container mx-auto px-4 py-16 md:px-6">
      <div className="mb-12 text-center">
        <h1 className="mb-4 font-heading text-4xl font-bold text-neutral-900">Learning Resources</h1>
        <p className="text-xl text-neutral-600">
          Free guides to help you master the basics of Lithuanian.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => (
          <Link 
            key={resource.slug} 
            href={`/resources/${resource.slug}`}
            className="group flex flex-col rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:border-violet-200 hover:shadow-md card-base hover-lift"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-100 text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors">
              <BookOpen className="h-5 w-5" />
            </div>
            <h2 className="mb-2 font-heading text-xl font-bold text-neutral-900 group-hover:text-violet-700">
              {resource.title}
            </h2>
            <p className="mb-4 text-sm text-neutral-600 flex-1">{resource.excerpt}</p>
            <div className="mt-auto text-sm font-medium text-violet-600 group-hover:underline">
              Read Guide →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
