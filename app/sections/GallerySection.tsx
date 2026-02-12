"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInUp from "@/app/components/FadeInUp";
import Image from "next/image";
import { GALLERY_IMAGES, GALLERY_CATEGORIES } from "@/lib/data";

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const filteredImages =
    selectedCategory === "all"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <FadeInUp>
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="heading-md text-gray-900 mb-3 sm:mb-4">Gallery</h2>
            <div className="h-1 w-12 sm:w-16 bg-gradient-gold mx-auto rounded-full mb-3 sm:mb-4"></div>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-2">
              Explore our beautiful venue through stunning visuals
            </p>
          </div>
        </FadeInUp>

        {/* Category Filter */}
        <FadeInUp delay={0.1}>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-8 sm:mb-10 md:mb-12 px-2">
            {GALLERY_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-gold text-white shadow-lg scale-105"
                    : "bg-white text-gold-600 border-2 border-gold-600 hover:bg-gold-50"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </FadeInUp>

        {/* Superimposed Sliding Gallery */}
        <GallerySlider
          images={filteredImages}
          setSelectedImage={(id: number) => setSelectedImage(id)}
        />

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-2 sm:p-4"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl max-h-screen max-h-[90vh] w-full"
              >
                {GALLERY_IMAGES.map(
                  (image) =>
                    image.id === selectedImage && (
                      <div key={image.id} className="bg-black rounded-lg overflow-hidden">
                        <img src={image.src} alt={image.alt} className="w-full h-auto" />
                        <div className="bg-gray-900 p-3 sm:p-4 text-white text-center">
                          <p className="font-semibold text-sm sm:text-base">{image.title}</p>
                        </div>
                      </div>
                    )
                )}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/20 hover:bg-white/40 text-white rounded-full w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center transition-colors text-lg sm:text-xl"
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

// GallerySlider component for swipe and arrow navigation
type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: string;
};

interface GallerySliderProps {
  images: GalleryImage[];
  setSelectedImage: (id: number) => void;
}

function GallerySlider({ images, setSelectedImage }: GallerySliderProps) {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.changedTouches[0].screenX;
  };
  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 50) {
        setCurrent((prev) => (prev + 1) % images.length);
      } else if (diff < -50) {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="relative w-full aspect-[4/3] max-w-3xl mx-auto mb-10 select-none"
      onTouchStart={isMobile ? handleTouchStart : undefined}
      onTouchMove={isMobile ? handleTouchMove : undefined}
      onTouchEnd={isMobile ? handleTouchEnd : undefined}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={images[current]?.id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0, zIndex: 2 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          onClick={() => setSelectedImage(images[current]?.id)}
          className="absolute inset-0 rounded-2xl overflow-hidden cursor-pointer shadow-premium border border-premium-gold/5"
          style={{ zIndex: 2 }}
        >
          <img
            src={images[current]?.src}
            alt={images[current]?.alt}
            className={`w-full h-full object-cover hover:scale-105 transition-transform duration-700 ${isMobile ? 'pointer-events-none' : ''}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-premium-charcoal/80 via-premium-charcoal/20 to-transparent opacity-0 hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
            <span className="text-gold-400 text-xs font-bold tracking-widest uppercase mb-1">{images[current]?.category}</span>
            <h3 className="text-white font-display text-lg leading-tight">{images[current]?.title}</h3>
            <div className="h-0.5 w-10 bg-premium-gold mt-2 transform scale-x-0 hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </div>
          {/* Specific descriptive overlays for key sections */}
          {images[current]?.id === 2 && (
            <div className="absolute top-4 left-4 bg-premium-gold/90 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider z-10">
              Spacious Dining Area for 500+ Guests
            </div>
          )}
          {images[current]?.id === 1 && (
            <div className="absolute top-4 left-4 bg-premium-gold/90 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider z-10">
              Grand Stage for Your Special Day
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      {/* Next/Prev Controls - always visible on desktop */}
      {!isMobile && (
        <>
          <div className="absolute inset-y-0 left-0 flex items-center z-20">
            <button
              onClick={() => setCurrent((prev) => (prev - 1 + images.length) % images.length)}
              className="bg-white/70 hover:bg-premium-gold text-premium-charcoal hover:text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg m-2"
              aria-label="Previous image"
              style={{ zIndex: 20 }}
            >
              &#8592;
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center z-20">
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
              className="bg-white/70 hover:bg-premium-gold text-premium-charcoal hover:text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg m-2"
              aria-label="Next image"
              style={{ zIndex: 20 }}
            >
              &#8594;
            </button>
          </div>
        </>
      )}
    </div>
  );
}
