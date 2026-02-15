import type { MetadataRoute } from "next";

const baseUrl = "https://nul.brotto.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/pricing",
    "/faq",
    "/support",
    "/legal/terms",
    "/legal/privacy",
    "/legal/cookies",
    "/safety",
    "/status"
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.7
  }));
}
