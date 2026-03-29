import { Metadata } from "next";
import Link from "next/link";
import { getAllContent } from "@/lib/mdx";
import { BookOpen, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Lithuanian Learning Resources",
  description: "Free grammar guides, phrasebooks, and learning tips for Lithuanian beginners. Practical resources to supplement your studies.",
  openGraph: {
    title: "Free Lithuanian Learning Resources",
    description: "Free guides to help you learn Lithuanian. Grammar basics, practical phrases, and cultural tips for beginners.",
    type: "website",
  },
};

export default async function ResourcesIndexPage() {
  const resources = getAllContent("resources");

  return (
    <div className="container mx-auto px-4 py-16 md:px-6">
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <h1 className="mb-4 font-heading text-4xl font-bold text-neutral-900">Lithuanian Learning Resources</h1>
        <p className="text-xl text-neutral-600">
          Free guides to help you understand Lithuanian grammar, learn practical phrases, and navigate everyday situations in Lithuania.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => (
          <Link 
            key={resource.slug} 
            href={"/resources/" + resource.slug}
            className="group flex flex-col rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:border-violet-200 hover:shadow-md card-base hover-lift"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-100 text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors">
              <BookOpen className="h-5 w-5" />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <h2 className="font-heading text-xl font-bold text-neutral-900 group-hover:text-violet-700">
                {resource.title}
              </h2>
              {resource.level && (
                <span className="inline-flex items-center gap-1 rounded-full bg-teal-100 px-2 py-0.5 text-xs font-medium text-teal-700">
                  <Star className="h-3 w-3" />
                  {resource.level}
                </span>
              )}
            </div>
            <p className="mb-4 text-sm text-neutral-600 flex-1">{resource.excerpt}</p>
            <div className="mt-auto text-sm font-medium text-violet-600 group-hover:underline">
              Read Guide
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}