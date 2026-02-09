'use client'

import Link from 'next/link'
import { VENUE_INFO } from '@/lib/data'
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gradient-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Venue Info */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 text-gold-400">
              {VENUE_INFO.shortName}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              A premier wedding and event venue in Chittoor, dedicated to making your special
              day unforgettable.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4 text-gold-400">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <FaPhone className="text-gold-400 mt-0.5 flex-shrink-0" />
                <a
                  href={VENUE_INFO.phoneLink}
                  className="text-gray-300 hover:text-gold-400 transition-colors"
                >
                  {VENUE_INFO.phone}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-gold-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">{VENUE_INFO.address}</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4 text-gold-400">Venue Hours</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Opens: {VENUE_INFO.timings.open}</p>
              <p>Closes: {VENUE_INFO.timings.close}</p>
              <p className="text-xs text-gold-400 mt-3">
                ⭐ Rating: {VENUE_INFO.rating} ({VENUE_INFO.reviews} reviews)
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="text-center text-sm text-gray-400">
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
