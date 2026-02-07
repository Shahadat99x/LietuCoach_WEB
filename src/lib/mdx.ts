import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export type ContentType = "blog" | "resources";

export interface FrontMatter {
  title: string;
  excerpt: string;
  date: string;
  author?: string;
  category?: string;
  tags?: string[];
  level?: string;
  updatedAt?: string;
  readingTime?: string;
}

export interface ContentItem extends FrontMatter {
  slug: string;
  content: string;
}

export function getFiles(type: ContentType) {
  const dir = path.join(contentDirectory, type);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((file) => file.endsWith(".mdx"));
}

export function getAllContent(type: ContentType): ContentItem[] {
  const files = getFiles(type);
  const content = files.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const filePath = path.join(contentDirectory, type, fileName);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      content,
      ...(data as FrontMatter),
    };
  });

  return content.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));
}

export function getContentBySlug(type: ContentType, slug: string): ContentItem | null {
  try {
    const filePath = path.join(contentDirectory, type, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      content,
      ...(data as FrontMatter),
    };
  } catch {
    return null;
  }
}

export function getRelatedContent(type: ContentType, currentSlug: string, tags: string[] = [], limit: number = 3): ContentItem[] {
  const allContent = getAllContent(type);
  
  if (!tags || tags.length === 0) {
    // Fallback: return recent items excluding current
    return allContent
      .filter(item => item.slug !== currentSlug)
      .slice(0, limit);
  }

  const related = allContent
    .filter(item => item.slug !== currentSlug)
    .map(item => {
      // Calculate intersection of tags
      const intersection = item.tags?.filter(tag => tags.includes(tag)) || [];
      return { item, overlap: intersection.length };
    })
    .sort((a, b) => {
      // Sort by overlap count desc, then date desc
      if (a.overlap > b.overlap) return -1;
      if (a.overlap < b.overlap) return 1;
      return new Date(a.item.date) > new Date(b.item.date) ? -1 : 1;
    });

  return related.map(r => r.item).slice(0, limit);
}
