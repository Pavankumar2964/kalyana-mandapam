'use client'

import FadeInUp from '@/app/components/FadeInUp'
import Button from '@/app/components/Button'
import { VENUE_INFO } from '@/lib/data'
import { FaPhone, FaMapMarkerAlt, FaStar } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <FadeInUp>
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="heading-md text-gray-900 mb-3 sm:mb-4">Location & Contact</h2>
            <div className="h-1 w-12 sm:w-16 bg-gradient-gold mx-auto rounded-full"></div>
          </div>
        </FadeInUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Map */}
          <FadeInUp delay={0.1}>
            <div className="rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl h-64 sm:h-80 md:h-96 lg:h-full lg:min-h-96">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src={VENUE_INFO.mapEmbedUrl}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Venue Location"
              />
            </div>
          </FadeInUp>

          {/* Contact Info */}
          <FadeInUp delay={0.2}>
            <div className="space-y-4 sm:space-y-5 md:space-y-6 flex flex-col justify-center">
              {/* Address */}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl bg-gold-50 border border-gold-200/50 hover:shadow-md transition-shadow"
              >
                <div className="text-gold-600 text-lg sm:text-xl md:text-2xl flex-shrink-0 mt-0.5">
                  <FaMapMarkerAlt />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-serif font-bold text-gray-900 mb-1">Address</h3>
                  <p className="text-sm sm:text-base text-gray-700 break-words">{VENUE_INFO.address}</p>
                  <p className="text-xs sm:text-sm text-gold-600 font-semibold mt-2">
                    Plus Code: {VENUE_INFO.plusCode}
                  </p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.a
                href={VENUE_INFO.phoneLink}
                whileHover={{ x: 5 }}
                className="flex gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl bg-blue-50 border border-blue-200/50 hover:shadow-md md:hover:shadow-lg transition-shadow"
              >
                <div className="text-blue-600 text-lg sm:text-xl md:text-2xl flex-shrink-0 mt-0.5">
                  <FaPhone />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-gray-900 mb-1">
                    Call Us
                  </h3>
                  <p className="text-base sm:text-lg md:text-2xl font-bold text-blue-600">
                    {VENUE_INFO.phone}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">Available 24/7 for inquiries</p>
                </div>
              </motion.a>

              {/* Hours */}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl bg-emerald-50 border border-emerald-200/50 hover:shadow-md transition-shadow"
              >
                <div className="text-emerald-600 text-lg sm:text-xl md:text-2xl flex-shrink-0 mt-0.5">🕐</div>
                <div>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-gray-900 mb-1">
                    Venue Hours
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    Opens: <span className="font-semibold">{VENUE_INFO.timings.open}</span>
                  </p>
                  <p className="text-sm sm:text-base text-gray-700">
                    Closes: <span className="font-semibold">{VENUE_INFO.timings.close}</span>
                  </p>
                </div>
              </motion.div>

              {/* Rating */}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl bg-orange-50 border border-orange-200/50 hover:shadow-md transition-shadow"
              >
                <div className="text-orange-600 text-lg sm:text-xl md:text-2xl flex-shrink-0 mt-0.5">⭐</div>
                <div>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-gray-900 mb-1">
                    Guest Rating
                  </h3>
                  <p className="text-gray-700">
                    <span className="text-lg sm:text-xl md:text-2xl font-bold text-orange-600">{VENUE_INFO.rating}</span>
                    <span className="text-gray-600"> / 5.0</span>
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    Based on {VENUE_INFO.reviews} reviews
                  </p>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 md:pt-4">
                <Button variant="primary" size="md" href={VENUE_INFO.phoneLink}>
                  📞 Call Now
                </Button>
                <Button variant="secondary" size="md" href={VENUE_INFO.mapEmbedUrl}>
                  📍 Get Directions
                </Button>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  )
}
