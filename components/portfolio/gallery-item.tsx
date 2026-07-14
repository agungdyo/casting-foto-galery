"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { MapPin, Calendar, Images } from "lucide-react";
import { GalleryItem } from "@/types/gallery";

interface GalleryItemCardProps {
  item: GalleryItem;
  index: number;
  onClick: () => void;
}

export function GalleryItemCard({ item, index, onClick }: GalleryItemCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Calculate animation delay based on index
  const delay = index * 0.05;

  return (
    <motion.div
      className="break-inside-avoid mb-4 lg:mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay }}
      layout
    >
      <motion.div
        className="group relative cursor-pointer overflow-hidden rounded-2xl bg-muted"
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        {/* Image with blur placeholder */}
        <div className="relative aspect-[3/4] overflow-hidden">
          {/* Blur placeholder */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-muted">
              <Skeleton className="w-full h-full" />
            </div>
          )}

          <Image
            src={item.thumbnail}
            alt={item.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={`object-cover transition-all duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            } ${isHovered ? "scale-105" : "scale-100"}`}
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
          />

          {/* Gradient overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Featured badge */}
          {item.featured && (
            <Badge
              className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm"
              variant="default"
            >
              Featured
            </Badge>
          )}

          {/* Content overlay */}
          <div
            className={`absolute inset-0 flex flex-col justify-end p-4 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <Badge variant="secondary" className="w-fit mb-2">
              {item.category}
            </Badge>
            <h3 className="text-white font-semibold text-lg leading-tight mb-1">
              {item.title}
            </h3>
            <div className="flex items-center gap-4 text-white/80 text-sm">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {item.location}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {item.year}
              </span>
            </div>
          </div>

          {/* Image count indicator */}
          {item.images.length > 1 && (
            <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs">
              <Images className="w-3 h-3" />
              {item.images.length}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
