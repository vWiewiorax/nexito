import type { MetadataRoute } from "next";

import { services } from "@/content/services";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", ...services.map((service) => `/uslugi/${service.slug}`), "/portfolio", "/polityka-prywatnosci", "/cookies"];
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
