import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://tarzia.tech";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${siteUrl}/projects/etera-home.webp`,
        `${siteUrl}/projects/etera-collections.webp`,
        `${siteUrl}/projects/etera-netplay.webp`,
        `${siteUrl}/projects/etera-rankings.webp`,
        `${siteUrl}/projects/etera-launcher.webp`,
        `${siteUrl}/projects/oraculo-icon.webp`,
        `${siteUrl}/projects/oraculo-home.webp`,
        `${siteUrl}/projects/oraculo-tarot.webp`,
      ],
    },
  ];
}
