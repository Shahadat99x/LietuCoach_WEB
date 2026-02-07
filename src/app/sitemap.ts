import { MetadataRoute } from "next";
import { getAllContent } from "@/lib/mdx";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Static pages
  const routes = [
    "",
    "/blog",
    "/resources",
    "/support",
    "/privacy",
    "/terms",
    "/data-deletion",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic Blog Posts
  const blogPosts = getAllContent("blog").map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic Resources
  const resources = getAllContent("resources").map((resource) => ({
    url: `${baseUrl}/resources/${resource.slug}`,
    lastModified: new Date(resource.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...blogPosts, ...resources];
}
