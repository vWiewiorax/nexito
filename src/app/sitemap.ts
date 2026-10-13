import type { MetadataRoute } from "next";

import { services } from "@/content/services";
import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", ...services.map((service) => `/uslugi/${service.slug}`), "/portfolio", "/blog", ...getAllPosts().map((post) => `/blog/${post.slug}`), "/polityka-prywatnosci", "/regulamin", "/cookies"];
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
