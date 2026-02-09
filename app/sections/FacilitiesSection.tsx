'use client'

import FadeInUp from '@/app/components/FadeInUp'
import { FACILITIES, SEATING_CAPACITY } from '@/lib/data'

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeInUp>
          <div className="text-center mb-16">
            <h2 className="heading-md text-gray-900 mb-4">Facilities & Features</h2>
            <div className="h-1 w-16 bg-gradient-gold mx-auto rounded-full"></div>
          </div>
        </FadeInUp>

        {/* Seating Capacity */}
        <FadeInUp delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-gradient-gold text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-lg font-semibold mb-2">Marriage Hall Capacity</h3>
              <p className="text-3xl font-bold">{SEATING_CAPACITY.marriageHall}</p>
              <p className="text-sm opacity-90 mt-2">Elegant first-floor venue with premium décor</p>
            </div>
            <div className="bg-gold-100 text-gold-900 p-8 rounded-2xl shadow-xl">
              <h3 className="text-lg font-semibold mb-2">Dining Hall Capacity</h3>
              <p className="text-3xl font-bold">{SEATING_CAPACITY.diningHall}</p>
              <p className="text-sm opacity-80 mt-2">Ground floor with comprehensive catering setup</p>
            </div>
          </div>
        </FadeInUp>

        {/* Facilities Grid */}
        <FadeInUp delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACILITIES.map((facility, idx) => (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border border-gold-200/30 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{facility.icon}</div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  {facility.title}
                </h3>
                <p className="text-gray-700">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </FadeInUp>

        {/* Additional Info */}
        <FadeInUp delay={0.3}>
          <div className="mt-16 bg-blue-50 border-l-4 border-blue-400 p-8 rounded-lg">
            <h3 className="text-xl font-serif font-bold text-blue-900 mb-4">ℹ️ Venue Features</h3>
            <ul className="space-y-2 text-blue-800">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Well-designed 2-floor layout for efficient guest management</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Professional décor team available for setup and arrangements</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>24/7 support staff during your event</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Flexible timing and event customization options</span>
              </li>
            </ul>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}

// Add missing import
import { motion } from 'framer-motion'
