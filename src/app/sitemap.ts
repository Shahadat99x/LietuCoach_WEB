import { MetadataRoute } from "next";
import { getAllContent } from "@/lib/mdx";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const routes = [
    { route: "", priority: 1 },
    { route: "/download", priority: 0.9 },
    { route: "/start", priority: 0.8 },
    { route: "/blog", priority: 0.8 },
    { route: "/resources", priority: 0.8 },
    { route: "/support", priority: 0.6 },
    { route: "/privacy", priority: 0.4 },
    { route: "/terms", priority: 0.4 },
    { route: "/data-deletion", priority: 0.4 },
  ].map((item) => ({
    url: baseUrl + item.route,
    lastModified: new Date(),
    changeFrequency: item.route === "" ? "weekly" as const : "monthly" as const,
    priority: item.priority,
  }));

  const blogPosts = getAllContent("blog").map((post) => ({
    url: baseUrl + "/blog/" + post.slug,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const resources = getAllContent("resources").map((resource) => ({
    url: baseUrl + "/resources/" + resource.slug,
    lastModified: new Date(resource.updatedAt || resource.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...blogPosts, ...resources];
}