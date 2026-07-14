"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GallerySearchProps {
  value: string;
  onChange: (value: string) => void;
  resultCount: number;
}

export function GallerySearch({ value, onChange, resultCount }: GallerySearchProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex items-center gap-2 w-full sm:w-auto">
      <div className="relative flex-1 sm:flex-initial">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search portfolio..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={cn(
            "pl-10 pr-10 w-full sm:w-64 rounded-xl",
            isFocused && "ring-2 ring-primary/20"
          )}
          aria-label="Search portfolio"
        />
        {value && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
            onClick={() => onChange("")}
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>
      <span className="text-sm text-muted-foreground hidden sm:block">
        {resultCount} {resultCount === 1 ? "item" : "items"}
      </span>
    </div>
  );
}
