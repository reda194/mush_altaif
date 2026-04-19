import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/board",
    "/vision",
    "/goals",
    "/structure",
    "/committees",
    "/strategic-plan",
    "/operational-plan",
    "/governance",
    "/launch",
    "/news",
    "/gallery",
    "/events",
    "/programs",
    "/partners",
    "/trails",
    "/hiking",
    "/volunteer",
    "/membership",
    "/jobs",
    "/banking",
    "/contact",
    "/hajj-service",
  ];

  const dynamicSlugs = [
    { prefix: "/news", slugs: ["masar-al-ward", "taif-marathon", "al-shifa-trail-launch", "nutrition-workshop"] },
    { prefix: "/events", slugs: ["masar-al-ward-2025", "hajj-service-2025", "taif-marathon-2025"] },
    { prefix: "/programs", slugs: ["wadi-al-kharar-hiking", "hakir-walking", "masar-al-ward"] },
    { prefix: "/trails", slugs: ["al-khamsin", "al-radaf", "al-urfa"] },
    { prefix: "/hiking", slugs: ["darb-al-jamala", "wadi-al-kharar"] },
  ];

  const staticEntries = staticPages.map((page) => ({
    url: `${SITE_URL}${page}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: page === "" ? 1 : 0.8,
  }));

  const dynamicEntries = dynamicSlugs.flatMap(({ prefix, slugs }) =>
    slugs.map((slug) => ({
      url: `${SITE_URL}${prefix}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return [...staticEntries, ...dynamicEntries];
}
