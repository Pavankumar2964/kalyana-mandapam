'use client'

import { motion } from 'framer-motion'
import Button from '@/app/components/Button'
import { VENUE_INFO } from '@/lib/data'

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen h-screenflex items-center justify-center overflow-hidden pt-14 sm:pt-16"
    >
      {/* Background with parallax effect */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1519224557371-0ab8d3b3db4d?w=1200&h=800&fit=crop")',
          transform: 'scale(1.05)',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center py-12 sm:py-16 md:py-20">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 sm:mb-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-2 sm:mb-4"
          >
            <span className="inline-block bg-gold-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap">
              ✨ Premium Wedding Venue
            </span>
          </motion.div>

          <h1 className="heading-lg text-white text-shadow mb-2 sm:mb-4">
            Srimathi Santharaghuraman
            <br />
            <span className="text-gold-300">Kalyana Mandapam</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed text-shadow px-2">
            A premier destination for your dream wedding and celebrations in Chittoor
          </p>
        </motion.div>

        {/* Rating */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-1 sm:gap-2 mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center gap-1 bg-gold-600/90 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
            <span className="text-base sm:text-lg">⭐</span>
            <span className="font-semibold">{VENUE_INFO.rating}</span>
            <span className="text-xs sm:text-sm">({VENUE_INFO.reviews} reviews)</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
        >
          <Button variant="primary" size="lg" href={VENUE_INFO.phoneLink}>
            📞 Book Now
          </Button>
          <Button variant="outline" size="lg" href="#gallery">
            📸 View Gallery
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="text-white text-xl sm:text-2xl">↓</div>
        </motion.div>
      </div>
    </section>
  )
}
