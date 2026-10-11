import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

import { getService } from "@/content/services";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  service: string;
  tags: string[];
  readingMinutes: number;
};

export type BlogPost = BlogPostMeta & { html: string };

function readingMinutes(text: string) {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

function readPost(file: string): BlogPost {
  const slug = file.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
  const { data, content } = matter(raw);
  if (!getService(data.service)) {
    throw new Error(`Post "${slug}" ma nieznaną usługę: ${data.service}`);
  }
  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date),
    category: data.category,
    service: data.service,
    tags: data.tags ?? [],
    readingMinutes: readingMinutes(content),
    html: marked.parse(content, { async: false }),
  };
}

const categoryOrder = ["strony-internetowe", "google-local", "sklepy-internetowe", "aplikacje-saas", "systemy-dla-firm", "automatyzacje"];

function categoryRank(post: BlogPostMeta) {
  const index = categoryOrder.indexOf(post.service);
  return index === -1 ? categoryOrder.length : index;
}

let cache: BlogPost[] | null = null;

function loadPosts() {
  if (!cache) {
    cache = fs
      .readdirSync(BLOG_DIR)
      .filter((file) => file.endsWith(".md"))
      .map(readPost)
      .sort((a, b) => b.date.localeCompare(a.date) || categoryRank(a) - categoryRank(b) || a.title.localeCompare(b.title, "pl"));
  }
  return cache;
}

export function getAllPosts(): BlogPostMeta[] {
  return loadPosts().map((post) => {
    const meta: BlogPostMeta & { html?: string } = { ...post };
    delete meta.html;
    return meta;
  });
}

export function getPost(slug: string) {
  return loadPosts().find((post) => post.slug === slug);
}

export function getRelatedPosts(post: BlogPostMeta, limit = 3) {
  const others = getAllPosts().filter((item) => item.slug !== post.slug);
  const sameCategory = others.filter((item) => item.category === post.category);
  const rest = others.filter((item) => item.category !== post.category);
  return [...sameCategory, ...rest].slice(0, limit);
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("pl-PL", { day: "numeric", month: "long", year: "numeric" }).format(new Date(date));
}
