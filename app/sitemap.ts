import type { MetadataRoute } from "next"
import { profile, siteUrl } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: profile.cv,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]
}
