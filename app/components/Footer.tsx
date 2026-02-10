'use client'

import Link from 'next/link'
import { VENUE_INFO } from '@/lib/data'
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gradient-dark text-white py-8 sm:py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 md:mb-8">
          {/* Venue Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-serif font-bold mb-3 sm:mb-4 text-gold-400">
              {VENUE_INFO.shortName}
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              A premier wedding and event venue in Chittoor, dedicated to making your special
              day unforgettable.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base sm:text-lg font-serif font-bold mb-3 sm:mb-4 text-gold-400">Contact</h4>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <FaPhone className="text-gold-400 mt-0.5 flex-shrink-0 text-xs sm:text-sm" />
                <a
                  href={VENUE_INFO.phoneLink}
                  className="text-gray-300 hover:text-gold-400 transition-colors break-all"
                >
                  {VENUE_INFO.phone}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-gold-400 mt-0.5 flex-shrink-0 text-xs sm:text-sm" />
                <p className="text-gray-300 break-words">{VENUE_INFO.address}</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-base sm:text-lg font-serif font-bold mb-3 sm:mb-4 text-gold-400">Venue Hours</h4>
            <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
              <p>Opens: {VENUE_INFO.timings.open}</p>
              <p>Closes: {VENUE_INFO.timings.close}</p>
              <p className="text-xs text-gold-400 mt-3 sm:mt-4">
                ⭐ Rating: {VENUE_INFO.rating} ({VENUE_INFO.reviews} reviews)
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6 md:pt-8 mt-6 md:mt-8">
          <div className="text-center text-xs sm:text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} Srimathi Santharaghuraman Kalyana Mandapam. All rights
              reserved.
            </p>
            <p className="mt-2">
              Designed & Developed with ❤️ | Google Plus Code: {VENUE_INFO.plusCode}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
