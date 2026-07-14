export interface GalleryItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  location: string;
  year: string;
  thumbnail: string;
  images: string[];
  featured: boolean;
}

export interface GalleryCategory {
  id: string;
  name: string;
  slug: string;
}

export type Theme = "light" | "dark" | "system";
