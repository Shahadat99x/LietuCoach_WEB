import { Metadata } from "next";
import Link from "next/link";
import { getAllContent } from "@/lib/mdx";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Blog",
  description: "LietuCoach Blog - Tips, culture, and guides for learning Lithuanian.",
};

export default async function BlogIndexPage() {
  const blogPosts = getAllContent("blog");

  return (
    <div className="container mx-auto px-4 py-16 md:px-6">
      <div className="mb-12 text-center">
        <h1 className="mb-4 font-heading text-4xl font-bold text-neutral-900">Blog</h1>
        <p className="text-xl text-neutral-600">
          Stories, tips, and cultural insights from the LietuCoach team.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article key={post.slug} className="flex flex-col rounded-2xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-md card-base hover-lift">
            <div className="p-6 flex flex-col flex-1">
              <div className="mb-4 text-sm text-violet-600 font-medium">{post.date}</div>
              <h2 className="mb-3 font-heading text-2xl font-bold text-neutral-900">
                <Link href={`/blog/${post.slug}`} className="hover:text-violet-700">
                  {post.title}
                </Link>
              </h2>
              <p className="mb-6 text-neutral-600 flex-1">{post.excerpt}</p>
              <Button href={`/blog/${post.slug}`} variant="outline" size="sm" className="w-full">
                Read Article
              </Button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
