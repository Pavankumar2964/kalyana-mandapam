'use client'

import { motion } from 'framer-motion'
import Button from '@/app/components/Button'
import { VENUE_INFO } from '@/lib/data'

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16"
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
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="inline-block bg-gold-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              ✨ Premium Wedding Venue
            </span>
          </motion.div>

          <h1 className="heading-lg text-white text-shadow mb-4">
            Srimathi Santharaghuraman
            <br />
            <span className="text-gold-300">Kalyana Mandapam</span>
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed text-shadow">
            A premier destination for your dream wedding and celebrations in Chittoor
          </p>
        </motion.div>

        {/* Rating */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-2 mb-8"
        >
          <div className="inline-flex items-center gap-1 bg-gold-600/90 text-white px-4 py-2 rounded-full">
            <span className="text-lg">⭐</span>
            <span className="font-semibold">{VENUE_INFO.rating}</span>
            <span className="text-sm">({VENUE_INFO.reviews} reviews)</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
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
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="text-white text-2xl">↓</div>
        </motion.div>
      </div>
    </section>
  )
}
