import { MetadataRoute } from "next";
import { galleryItems } from "@/lib/gallery";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://castingphoto.com";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const portfolioPages: MetadataRoute.Sitemap = galleryItems.map((item) => ({
    url: `${baseUrl}/portfolio/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...portfolioPages];
}
