"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { GalleryCategory } from "@/types/gallery";

interface GalleryFiltersProps {
  categories: GalleryCategory[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function GalleryFilters({
  categories,
  selectedCategory,
  onCategoryChange,
}: GalleryFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by category">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.slug ? "default" : "outline"}
          size="sm"
          onClick={() => onCategoryChange(category.slug)}
          className={cn(
            "rounded-full px-4 transition-all",
            selectedCategory === category.slug
              ? "bg-primary text-primary-foreground shadow-md"
              : "hover:bg-primary/10"
          )}
          role="tab"
          aria-selected={selectedCategory === category.slug}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
}
