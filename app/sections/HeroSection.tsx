'use client'

import { motion } from 'framer-motion'
import Button from '@/app/components/Button'
import { VENUE_INFO } from '@/lib/data'
import { MdCall } from 'react-icons/md'

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen h-screenflex items-center justify-center overflow-hidden pt-14 sm:pt-16"
    >
      {/* Background with parallax effect */}
     <div
  className="absolute inset-0 w-full h-full bg-[url('/mandapam.jpeg')] bg-cover bg-center bg-fixed"
  style={{
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
            A Grand Venue for Your Most
            <br />
            <span className="text-gold-300">Memorable Moments</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed text-shadow px-2">
            Srimathi Santharaghuraman Kalyana Mandapam offers a spacious, elegant, and fully equipped wedding hall in Chittoor — perfect for weddings, receptions, and family celebrations.
          </p>
          <div className="mt-4 flex justify-center items-center gap-4 text-white/90 font-medium">
             <span className="flex items-center gap-1">📍 Chittoor</span>
             <span className="flex items-center gap-1">👥 1000+ Guests</span>
          </div>
        </motion.div>

        {/* Rating */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-1 sm:gap-2 mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-sm">
            <span className="text-gold-400">★★★★★</span>
            <span className="font-semibold">4.3/5</span>
            <span className="opacity-80">(622 Reviews)</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button variant="primary" size="lg" href="tel:+919440076063" className="w-full sm:w-auto min-w-[200px] shadow-gold-500/50 shadow-lg flex items-center justify-center gap-3">
             <MdCall size={24} /> Call for Booking
          </Button>
          <Button variant="outline" size="lg" href="https://maps.app.goo.gl/QpzVaTXfWdWrSVhW6" className="w-full sm:w-auto min-w-[200px] bg-white/20 backdrop-blur-sm border-white">
            📍 Get Directions
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
