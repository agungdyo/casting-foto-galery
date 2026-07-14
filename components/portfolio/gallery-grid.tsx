"use client";

import { motion } from "framer-motion";
import { GalleryItem as GalleryItemType } from "@/types/gallery";
import { GalleryItemCard } from "./gallery-item";

interface GalleryGridProps {
  items: GalleryItemType[];
  onItemClick: (item: GalleryItemType) => void;
}

export function GalleryGrid({ items, onItemClick }: GalleryGridProps) {
  return (
    <motion.div
      className="columns-1 sm:columns-2 lg:columns-3 gap-4 lg:gap-6"
      layout
    >
      {items.map((item, index) => (
        <GalleryItemCard
          key={item.id}
          item={item}
          index={index}
          onClick={() => onItemClick(item)}
        />
      ))}
    </motion.div>
  );
}
