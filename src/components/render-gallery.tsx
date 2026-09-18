"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface RenderGalleryProps {
  images: string[];
  projectTitle: string;
}

export function RenderGallery({ images, projectTitle }: RenderGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Keyboard navigation & ESC key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1));
      }
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, images.length]);

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((imgUrl, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className="group relative aspect-[16/10] w-full border border-border bg-card overflow-hidden cursor-pointer hover:border-accent transition-all duration-200"
          >
            <Image
              src={imgUrl}
              alt={`${projectTitle} render ${idx + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="bg-background/90 border border-border px-3 py-1.5 text-sm font-mono text-foreground flex items-center space-x-2">
                <Maximize2 className="w-3.5 h-3.5 text-accent" />
                <span>Expand</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Controls Bar */}
          <div
            className="absolute top-4 left-4 right-4 flex items-center justify-between text-sm font-mono text-white/80 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-black/60 border border-white/10 px-3 py-1.5">
              <span>{projectTitle}</span>
              <span className="text-white/40 mx-2">//</span>
              <span className="text-accent">Render {selectedIndex + 1} of {images.length}</span>
            </div>

            <button
              onClick={() => setSelectedIndex(null)}
              className="bg-black/60 border border-white/10 hover:border-white p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Previous Button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1));
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 border border-white/10 hover:border-white p-3 text-white/80 hover:text-white transition-colors z-10"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Image Container */}
          <div
            className="relative w-full max-w-6xl max-h-[85vh] h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selectedIndex]}
              alt={`${projectTitle} full render ${selectedIndex + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Next Button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0));
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 border border-white/10 hover:border-white p-3 text-white/80 hover:text-white transition-colors z-10"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Hint */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/50 hidden sm:block">
            Use Left / Right arrow keys to navigate · ESC or Click outside to close
          </div>
        </div>
      )}
    </>
  );
}
