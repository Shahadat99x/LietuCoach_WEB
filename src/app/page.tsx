import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Features } from "@/components/home/Features";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";
import { getAllContent } from "@/lib/mdx";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const latestBlogs = getAllContent("blog").slice(0, 2);
  const topResources = getAllContent("resources").slice(0, 3);

  return (
    <>
      <Hero />
      <HowItWorks />
      <Features />
      
      {/* Latest Updates Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold font-heading text-neutral-900 mb-4">Latest from LietuCoach</h2>
              <p className="text-neutral-600 max-w-2xl">
                Tips, guides, and culture notes to help you master Lithuanian.
              </p>
            </div>
            <Link href="/blog" className="text-violet-700 font-semibold hover:text-violet-800 inline-flex items-center gap-2">
              View all posts <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
             {/* Render 2 Blogs + 1 Resource or mix. Let's show 3 Items total for grid balance */}
             {latestBlogs.map((post) => (
                <Card key={post.slug} className="flex flex-col h-full hover:shadow-lg transition-all p-6 bg-white border-neutral-200">
                  <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-violet-600">
                    Blog
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-violet-700">
                    <Link href={`/blog/${post.slug}`} className="hover:underline focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-neutral-600 flex-1 line-clamp-3 mb-4">{post.excerpt}</p>
                  <div className="text-sm text-neutral-500 mt-auto">{post.date}</div>
                </Card>
             ))}
             {topResources.slice(0,1).map((resource) => (
                <Card key={resource.slug} className="flex flex-col h-full hover:shadow-lg transition-all p-6 bg-white border-neutral-200">
                   <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-teal-600">
                    Resource
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-teal-700">
                    <Link href={`/resources/${resource.slug}`} className="hover:underline focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {resource.title}
                    </Link>
                  </h3>
                  <p className="text-neutral-600 flex-1 line-clamp-3 mb-4">{resource.excerpt}</p>
                   <div className="text-sm text-neutral-500 mt-auto">Guide</div>
                </Card>
             ))}
          </div>
        </div>
      </section>

      <FAQ />
      <CTA />
    </>
  );
}
