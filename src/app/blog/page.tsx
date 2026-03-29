import { Metadata } from "next";
import Link from "next/link";
import { getAllContent } from "@/lib/mdx";
import { Button } from "@/components/ui/Button";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "LietuCoach Blog",
  description: "Lithuanian language learning tips, cultural insights, and practical advice for learning Lithuanian as a beginner.",
  openGraph: {
    title: "LietuCoach Blog",
    description: "Tips and guides for learning Lithuanian, understanding Lithuanian culture, and making the most of your language learning journey.",
    type: "website",
  },
};

export default async function BlogIndexPage() {
  const blogPosts = getAllContent("blog");

  return (
    <div className="container mx-auto px-4 py-16 md:px-6">
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center justify-center p-3 bg-violet-100 rounded-xl text-violet-600 mb-4">
          <FileText className="h-6 w-6" />
        </div>
        <h1 className="mb-4 font-heading text-4xl font-bold text-neutral-900">LietuCoach Blog</h1>
        <p className="text-xl text-neutral-600">
          Language learning tips, Lithuanian culture insights, and practical advice for beginners.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article key={post.slug} className="flex flex-col rounded-2xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-md card-base hover-lift">
            <div className="p-6 flex flex-col flex-1">
              <div className="mb-4 text-sm text-violet-600 font-medium">{post.date}</div>
              <h2 className="mb-3 font-heading text-2xl font-bold text-neutral-900">
                <Link href={"/blog/" + post.slug} className="hover:text-violet-700">
                  {post.title}
                </Link>
              </h2>
              <p className="mb-6 text-neutral-600 flex-1">{post.excerpt}</p>
              <Button href={"/blog/" + post.slug} variant="outline" size="sm" className="w-full">
                Read Article
              </Button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}