import { GalleryItem, GalleryCategory } from "@/types/gallery";

// Import data from JSON file
import galleryData from "@/data/gallery.json";

// Re-export the data
export const galleryItems: GalleryItem[] = galleryData.items as GalleryItem[];

export const categories: GalleryCategory[] = galleryData.categories as GalleryCategory[];

// Helper functions
export function getGalleryItem(id: string): GalleryItem | undefined {
  return galleryItems.find((item) => item.id === id);
}

export function getGalleryItemBySlug(slug: string): GalleryItem | undefined {
  return galleryItems.find((item) => item.slug === slug);
}

export function getGalleryItemsByCategory(category: string): GalleryItem[] {
  if (category === "all") return galleryItems;
  return galleryItems.filter((item) => item.category.toLowerCase() === category.toLowerCase());
}

export function getFeaturedItems(): GalleryItem[] {
  return galleryItems.filter((item) => item.featured);
}

export function searchGalleryItems(query: string): GalleryItem[] {
  const lowerQuery = query.toLowerCase();
  return galleryItems.filter(
    (item) =>
      item.title.toLowerCase().includes(lowerQuery) ||
      item.description.toLowerCase().includes(lowerQuery) ||
      item.category.toLowerCase().includes(lowerQuery) ||
      item.location.toLowerCase().includes(lowerQuery)
  );
}
