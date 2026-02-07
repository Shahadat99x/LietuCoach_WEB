import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContentBySlug, getAllContent } from "@/lib/mdx";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXComponents } from "@/components/mdx/MDXComponents";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/config/site";
import Script from "next/script";
import { Card } from "@/components/ui/Card";
import { ArrowRight } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getContentBySlug("blog", slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  const posts = getAllContent("blog");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getContentBySlug("blog", slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": post.author,
    },
    "datePublished": post.date,
    "image": `${siteConfig.url}/og-image.jpg`, // Fallback
    "url": `${siteConfig.url}/blog/${slug}`,
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.url}/favicon.ico`,
      },
    },
  };

  return (
    <article className="container mx-auto max-w-3xl px-4 py-16 md:px-6">
      <Script
        id={`json-ld-article-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs 
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.title, href: `/blog/${slug}` },
        ]} 
      />
      
      <header className="mb-10 text-center">
        <h1 className="mb-4 font-heading text-4xl font-bold text-neutral-900 md:text-5xl">{post.title}</h1>
        <p className="text-lg text-neutral-600 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-center gap-4 text-sm text-neutral-500">
          <span>{post.date}</span>
          <span>•</span>
          <span>By {post.author}</span>
        </div>
      </header>

      <div className="prose prose-violet max-w-none text-neutral-800">
        <MDXRemote source={post.content} components={MDXComponents} />
      </div>

      <hr className="my-12 border-neutral-200" />

      {/* Related Resources */}
      <section className="mb-12">
        <h3 className="mb-6 font-heading text-2xl font-bold text-neutral-900">Related Resources</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {getAllContent("resources")
            .slice(0, 2)
            .map((resource) => (
              <Card key={resource.slug} className="group p-6 hover:border-violet-200">
                <Link href={`/resources/${resource.slug}`} className="block">
                    <h4 className="mb-2 text-lg font-bold text-neutral-900 group-hover:text-violet-700">
                    {resource.title}
                    </h4>
                    <p className="mb-4 line-clamp-2 text-sm text-neutral-600">
                    {resource.excerpt}
                    </p>
                    <div className="flex items-center text-sm font-medium text-violet-700">
                    Read Guide <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                </Link>
              </Card>
            ))}
        </div>
      </section>
      
      {/* Footer CTA */}
      <div className="mt-16 rounded-2xl bg-violet-50 p-8 text-center border border-violet-100">
        <h3 className="mb-2 font-heading text-2xl font-bold text-violet-900">Enjoyed this post?</h3>
        <p className="mb-6 text-violet-700">Start learning Lithuanian with structured lessons and audio practice.</p>
        <Button href="https://play.google.com/store/apps/details?id=com.lietucoach.app">
          Get the App
        </Button>
      </div>
    </article>
  );
}
