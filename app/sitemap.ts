import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nul-app.app";
  const now = new Date().toISOString();
  return [
    { url: base, lastModified: now },
    { url: `${base}/pricing`, lastModified: now },
    { url: `${base}/faq`, lastModified: now },
    { url: `${base}/safety`, lastModified: now },
    { url: `${base}/support`, lastModified: now },
    { url: `${base}/status`, lastModified: now },
    { url: `${base}/legal/terms`, lastModified: now },
    { url: `${base}/legal/privacy`, lastModified: now },
    { url: `${base}/legal/cookies`, lastModified: now }
  ];
}
