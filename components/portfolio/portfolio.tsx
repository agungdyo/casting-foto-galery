"use client";

import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryItems, categories } from "@/lib/gallery";
import { GalleryItem } from "@/types/gallery";
import { GalleryFilters } from "./gallery-filters";
import { GallerySearch } from "./gallery-search";
import { GalleryGrid } from "./gallery-grid";
import { GalleryModal } from "./gallery-modal";

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => {
    let items = galleryItems;

    // Filter by category
    if (selectedCategory !== "all") {
      items = items.filter(
        (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      items = items.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.location.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query)
      );
    }

    return items;
  }, [selectedCategory, searchQuery]);

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  const handleSearchChange = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const handleItemClick = useCallback((item: GalleryItem) => {
    setSelectedItem(item);
    document.body.style.overflow = "hidden";
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedItem(null);
    document.body.style.overflow = "";
  }, []);

  return (
    <section id="portfolio" className="py-24 md:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Featured <span className="text-primary">Portfolio</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our collection of stunning photography across various genres
            and styles.
          </p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <GalleryFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
          <GallerySearch
            value={searchQuery}
            onChange={handleSearchChange}
            resultCount={filteredItems.length}
          />
        </motion.div>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          {filteredItems.length > 0 ? (
            <GalleryGrid items={filteredItems} onItemClick={handleItemClick} />
          ) : (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No results found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <GalleryModal item={selectedItem} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </section>
  );
}
