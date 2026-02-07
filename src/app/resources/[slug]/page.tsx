import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllContent, getContentBySlug } from "@/lib/mdx";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { BookOpen } from "lucide-react";

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
  const resource = getContentBySlug("resources", slug);
  
  if (!resource) {
    return {
      title: "Resource Not Found",
    };
  }

  return {
    title: resource.title,
    description: resource.excerpt,
  };
}

export async function generateStaticParams() {
  const resources = getAllContent("resources");
  return resources.map((resource) => ({
    slug: resource.slug,
  }));
}

export default async function ResourcePage({ params }: Props) {
  const { slug } = await params;
  const resource = getContentBySlug("resources", slug);

  if (!resource) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": resource.title,
    "description": resource.excerpt,
    "learningResourceType": "Guide",
    "educationalLevel": "Beginner",
    "url": `${siteConfig.url}/resources/${slug}`,
    "author": {
      "@type": "Organization",
      "name": siteConfig.name,
    },
    "datePublished": resource.date,
  };

  return (
    <article className="container mx-auto max-w-3xl px-4 py-16 md:px-6">
      <Script
        id={`json-ld-resource-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs 
        items={[
          { label: "Resources", href: "/resources" },
          { label: resource.title, href: `/resources/${slug}` },
        ]} 
      />
      
      <header className="mb-10">
        <div className="mb-4 inline-flex items-center rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
          <BookOpen className="mr-1.5 h-3 w-3" />
          Guide
        </div>
        <h1 className="mb-4 font-heading text-4xl font-bold text-neutral-900 md:text-5xl leading-tight">
          {resource.title}
        </h1>
        <p className="text-xl text-neutral-600">{resource.excerpt}</p>
      </header>

      <div className="prose prose-violet max-w-none text-neutral-800">
         <MDXRemote source={resource.content} components={MDXComponents} />
      </div>

      <hr className="my-12 border-neutral-200" />

      {/* More Guides */}
      <section className="mb-12">
        <h3 className="mb-6 font-heading text-2xl font-bold text-neutral-900">More Guides</h3>
        <div className="grid gap-6 md:grid-cols-2">
            {getAllContent("resources")
            .filter(r => r.slug !== slug) // Exclude current
            .slice(0, 2)
            .map((related) => (
                <Card key={related.slug} className="group p-6 hover:border-teal-200">
                <Link href={`/resources/${related.slug}`} className="block">
                    <h4 className="mb-2 text-lg font-bold text-neutral-900 group-hover:text-teal-700">
                    {related.title}
                    </h4>
                    <p className="mb-4 line-clamp-2 text-sm text-neutral-600">
                    {related.excerpt}
                    </p>
                    <div className="flex items-center text-sm font-medium text-teal-700">
                    Read Guide <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                </Link>
                </Card>
            ))}
        </div>
      </section>
      
      {/* Footer CTA */}
      <div className="mt-16 rounded-2xl bg-teal-50 p-8 border border-teal-100 text-center">
        <h3 className="mb-2 font-heading text-2xl font-bold text-teal-900">Practice what you learned</h3>
        <p className="mb-6 text-teal-800">Download LietuCoach to hear native pronunciation and test your knowledge.</p>
        <Button href="https://play.google.com/store/apps/details?id=com.lietucoach.app" variant="secondary">
          Download App
        </Button>
      </div>
    </article>
  );
}
