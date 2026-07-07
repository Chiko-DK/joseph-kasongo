import type { MetadataRoute } from "next"
import { profile, siteUrl } from "@/lib/site"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Joseph Kasongo | Chiko DK Portfolio",
    short_name: "Chiko DK",
    description: profile.description,
    start_url: "/",
    scope: "/",
    display: "browser",
    background_color: "#fff8f5",
    theme_color: "#2b1115",
    icons: [
      {
        src: `${siteUrl}/icon.svg`,
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  }
}
