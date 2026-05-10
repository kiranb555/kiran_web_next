"use client";

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface PhotoSliderProps {
  photos: string[];
  autoSlideInterval?: number;
  quality?: number;
}

const PhotoSlider = ({ photos, autoSlideInterval = 4000, quality = 75 }: PhotoSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextImageIndex = useMemo(() =>
    currentIndex === photos.length - 1 ? 0 : currentIndex + 1
  , [currentIndex, photos.length]);

  const nextSlide = () => setCurrentIndex(prev => prev === photos.length - 1 ? 0 : prev + 1);
  const prevSlide = () => setCurrentIndex(prev => prev === 0 ? photos.length - 1 : prev - 1);

  useEffect(() => {
    if (photos.length <= 1 || isPaused) return;
    const timer = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(timer);
  }, [currentIndex, isPaused, photos.length, autoSlideInterval]);

  return (
    <div
      className="relative w-full h-72 md:h-[480px] overflow-hidden bg-gray-100 dark:bg-gray-900"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {photos.length > 1 && (
        <link
          rel="preload"
          as="image"
          href={photos[nextImageIndex]}
        />
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0"
        >
          <Image
            src={photos[currentIndex]}
            alt={`Photography ${currentIndex + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 80vw"
            className="object-contain p-2"
            quality={quality}
            priority={currentIndex === 0}
            loading={currentIndex === 0 ? 'eager' : 'lazy'}
            placeholder="blur"
            blurDataURL={shimmer(700, 475)}
          />
        </motion.div>
      </AnimatePresence>

      {photos.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prevSlide(); setIsPaused(true); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-xl bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm transition-all duration-200 hover:scale-105 z-10"
            aria-label="Previous photo"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextSlide(); setIsPaused(true); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-xl bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm transition-all duration-200 hover:scale-105 z-10"
            aria-label="Next photo"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(index); setIsPaused(true); }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-6 bg-white'
                    : 'w-1.5 bg-white/40 hover:bg-white/70'
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

const shimmer = (w: number, h: number) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#1e293b" offset="20%" />
        <stop stop-color="#0f172a" offset="50%" />
        <stop stop-color="#1e293b" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#1e293b" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite" />
  </svg>`;

export default PhotoSlider;
