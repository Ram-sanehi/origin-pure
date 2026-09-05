import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
  className?: string;
}

export const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
  images = [],
  productName,
  className = ''
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Fallback if no images provided
  const displayImages = images.length > 0 ? images : ['/placeholder.png'];
  const currentImage = displayImages[selectedIndex] || displayImages[0];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? displayImages.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === displayImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={`flex flex-col md:flex-row gap-3 sm:gap-4 lg:gap-6 w-full select-none ${className}`}>
      {/* ── Desktop & Tablet: Vertical Thumbnail Strip (Left) ── */}
      <div className="hidden md:flex flex-col gap-3 shrink-0">
        {displayImages.map((img, idx) => {
          const isActive = idx === selectedIndex;
          return (
            <button
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              onMouseEnter={() => setSelectedIndex(idx)}
              className={`relative w-16 h-16 lg:w-20 lg:h-20 rounded-2xl overflow-hidden bg-sand-100 border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teagreen-800 ${
                isActive
                  ? 'border-teagreen-800 ring-2 ring-teagreen-800/30 shadow-sm scale-105'
                  : 'border-cream-300 hover:border-cream-400 opacity-70 hover:opacity-100'
              }`}
              aria-label={`View ${productName} image ${idx + 1}`}
              aria-selected={isActive}
            >
              <img
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                className="w-full h-full object-contain p-1.5"
                loading="lazy"
              />
              {isActive && (
                <div className="absolute inset-0 bg-teagreen-950/5 pointer-events-none" />
              )}
            </button>
          );
        })}
      </div>

      {/* ── Center: Main Large Product Viewer (Static, Clean Image) ── */}
      <div className="relative flex-1 bg-sand-100 border border-cream-300 rounded-2xl sm:rounded-3xl overflow-hidden aspect-square sm:aspect-[4/3] flex items-center justify-center p-3 sm:p-5 group">
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={selectedIndex}
              src={currentImage}
              alt={`${productName} view ${selectedIndex + 1}`}
              initial={{ opacity: 0.4 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.4 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="w-full h-full object-contain pointer-events-none"
              loading="lazy"
              decoding="async"
            />
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        {displayImages.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 min-h-11 min-w-11 rounded-full bg-cream-50/90 border border-cream-300/80 hover:bg-cream-100 hover:border-teagreen-800 text-teagreen-950 flex items-center justify-center transition-all duration-200 opacity-80 hover:opacity-100 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-teagreen-800"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 min-h-11 min-w-11 rounded-full bg-cream-50/90 border border-cream-300/80 hover:bg-cream-100 hover:border-teagreen-800 text-teagreen-950 flex items-center justify-center transition-all duration-200 opacity-80 hover:opacity-100 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-teagreen-800"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Image Counter Badge */}
        {displayImages.length > 1 && (
          <div className="absolute bottom-4 right-4 px-2.5 py-1 rounded-full bg-cream-100/90 border border-cream-300/80 text-[10px] font-bold text-teagreen-950 tracking-wider backdrop-blur-sm">
            {selectedIndex + 1} / {displayImages.length}
          </div>
        )}
      </div>

      {/* ── Mobile: Horizontal Scrollable Thumbnail Strip (Bottom) ── */}
      <div className="flex md:hidden items-center justify-center gap-3 overflow-x-auto py-1 px-1 no-scrollbar">
        {displayImages.map((img, idx) => {
          const isActive = idx === selectedIndex;
          return (
            <button
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={`relative w-14 h-14 shrink-0 rounded-xl overflow-hidden bg-sand-100 border transition-all duration-200 focus:outline-none ${
                isActive
                  ? 'border-teagreen-800 ring-2 ring-teagreen-800/30 scale-105'
                  : 'border-cream-300 opacity-70'
              }`}
              aria-label={`View ${productName} image ${idx + 1}`}
              aria-selected={isActive}
            >
              <img
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                className="w-full h-full object-contain p-1"
                loading="lazy"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};
