// src/components/PhotoSlider/PhotoSlider.tsx
"use client";

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';

interface PhotoSliderProps {
  photos: string[];
  autoSlideInterval?: number;
  quality?: number;
}

const PhotoSlider = ({ 
  photos, 
  autoSlideInterval = 4000,
  quality = 75
}: PhotoSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Calculate next image index for preloading
  const nextImageIndex = useMemo(() => 
    currentIndex === photos.length - 1 ? 0 : currentIndex + 1
  , [currentIndex, photos.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide effect
  useEffect(() => {
    if (photos.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused, photos.length, autoSlideInterval]);

  // Generate optimized image URL with query parameters
  const getOptimizedImageUrl = (url: string, width: number) => {
    if (!url) return '';
    // If using an image optimization service, add the parameters here
    return `${url}?w=${width}&q=${quality}&auto=format`;
    return url;
  };

  return (
    <div 
      className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg dark:bg-gray-800"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Preload next image */}
      {photos.length > 1 && (
        <link 
          rel="preload" 
          as="image" 
          href={getOptimizedImageUrl(photos[nextImageIndex], 1080)}
          imageSrcSet={`
            ${getOptimizedImageUrl(photos[nextImageIndex], 640)} 640w,
            ${getOptimizedImageUrl(photos[nextImageIndex], 750)} 750w,
            ${getOptimizedImageUrl(photos[nextImageIndex], 1080)} 1080w
          `}
        />
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full flex items-center justify-center"
        >
          <div className="relative w-full h-full">
            <Image
              src={photos[currentIndex]}
              alt={`Photography ${currentIndex + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              className="object-contain p-1"
              quality={quality}
              priority={currentIndex === 0}
              loading={currentIndex === 0 ? 'eager' : 'lazy'}
              placeholder="blur"
              blurDataURL={shimmer(700, 475)}
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {photos.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
              setIsPaused(true);
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
            aria-label="Previous photo"
          >
            <FiChevronLeft size={24} />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
              setIsPaused(true);
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
            aria-label="Next photo"
          >
            <FiChevronRight size={24} />
          </button>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                  setIsPaused(true);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'w-6 bg-white' 
                    : 'w-2 bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to photo ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// Simple shimmer effect for image placeholder
const shimmer = (w: number, h: number) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#333" offset="20%" />
        <stop stop-color="#222" offset="50%" />
        <stop stop-color="#333" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#333" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite" />
  </svg>`;

export default PhotoSlider;