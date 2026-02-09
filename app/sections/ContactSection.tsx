'use client'

import FadeInUp from '@/app/components/FadeInUp'
import Button from '@/app/components/Button'
import { VENUE_INFO } from '@/lib/data'
import { FaPhone, FaMapMarkerAlt, FaStar } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeInUp>
          <div className="text-center mb-16">
            <h2 className="heading-md text-gray-900 mb-4">Location & Contact</h2>
            <div className="h-1 w-16 bg-gradient-gold mx-auto rounded-full"></div>
          </div>
        </FadeInUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <FadeInUp delay={0.1}>
            <div className="rounded-2xl overflow-hidden shadow-2xl h-96 lg:h-full min-h-96">
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
            <div className="space-y-6 flex flex-col justify-center">
              {/* Address */}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex gap-4 p-6 rounded-xl bg-gold-50 border border-gold-200/50"
              >
                <div className="text-gold-600 text-2xl flex-shrink-0 mt-1">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-700">{VENUE_INFO.address}</p>
                  <p className="text-sm text-gold-600 font-semibold mt-2">
                    Plus Code: {VENUE_INFO.plusCode}
                  </p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.a
                href={VENUE_INFO.phoneLink}
                whileHover={{ x: 5 }}
                className="flex gap-4 p-6 rounded-xl bg-blue-50 border border-blue-200/50 hover:shadow-lg transition-shadow"
              >
                <div className="text-blue-600 text-2xl flex-shrink-0 mt-1">
                  <FaPhone />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-gray-900 mb-1">
                    Call Us
                  </h3>
                  <p className="text-gray-700 text-2xl font-bold text-blue-600">
                    {VENUE_INFO.phone}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">Available 24/7 for inquiries</p>
                </div>
              </motion.a>

              {/* Hours */}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex gap-4 p-6 rounded-xl bg-emerald-50 border border-emerald-200/50"
              >
                <div className="text-emerald-600 text-2xl flex-shrink-0 mt-1">🕐</div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-gray-900 mb-1">
                    Venue Hours
                  </h3>
                  <p className="text-gray-700">
                    Opens: <span className="font-semibold">{VENUE_INFO.timings.open}</span>
                  </p>
                  <p className="text-gray-700">
                    Closes: <span className="font-semibold">{VENUE_INFO.timings.close}</span>
                  </p>
                </div>
              </motion.div>

              {/* Rating */}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex gap-4 p-6 rounded-xl bg-orange-50 border border-orange-200/50"
              >
                <div className="text-orange-600 text-2xl flex-shrink-0 mt-1">⭐</div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-gray-900 mb-1">
                    Guest Rating
                  </h3>
                  <p className="text-gray-700">
                    <span className="text-2xl font-bold text-orange-600">{VENUE_INFO.rating}</span>
                    <span className="text-gray-600"> / 5.0</span>
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Based on {VENUE_INFO.reviews} reviews
                  </p>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-4">
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
