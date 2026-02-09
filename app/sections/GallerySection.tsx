'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeInUp from '@/app/components/FadeInUp'
import Image from 'next/image'
import { GALLERY_IMAGES, GALLERY_CATEGORIES } from '@/lib/data'

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<null | number>(null)

  const filteredImages =
    selectedCategory === 'all'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === selectedCategory)

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeInUp>
          <div className="text-center mb-12">
            <h2 className="heading-md text-gray-900 mb-4">Gallery</h2>
            <div className="h-1 w-16 bg-gradient-gold mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our beautiful venue through stunning visuals
            </p>
          </div>
        </FadeInUp>

        {/* Category Filter */}
        <FadeInUp delay={0.1}>
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {GALLERY_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-gold text-white shadow-lg scale-105'
                    : 'bg-white text-gold-600 border-2 border-gold-600 hover:bg-gold-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </FadeInUp>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, idx) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(image.id)}
                className="group relative h-64 rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                  <div>
                    <p className="text-white font-semibold">{image.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl max-h-screen"
              >
                {GALLERY_IMAGES.map(
                  (image) =>
                    image.id === selectedImage && (
                      <div key={image.id} className="bg-black rounded-lg overflow-hidden">
                        <img src={image.src} alt={image.alt} className="w-full h-auto" />
                        <div className="bg-gray-900 p-4 text-white text-center">
                          <p className="font-semibold">{image.title}</p>
                        </div>
                      </div>
                    )
                )}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
