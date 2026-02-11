'use client'

import FadeInUp from '@/app/components/FadeInUp'
import { FaCheckCircle, FaMapMarkerAlt, FaCar, FaBolt, FaUtensils, FaUsers } from 'react-icons/fa'

const USPs = [
  {
    icon: <FaUsers className="text-3xl text-gold-600" />,
    title: 'High Seating Capacity',
    description: 'Spacious main hall comfortably accommodating 500-600+ guests.'
  },
  {
    icon: <FaUtensils className="text-3xl text-gold-600" />,
    title: 'Separate Dining Area',
    description: 'Dedicated ground-floor dining space for up to 500 guests.'
  },
  {
    icon: <FaMapMarkerAlt className="text-3xl text-gold-600" />,
    title: 'Prime Location',
    description: 'Easy accessibility from main roads in Kattamanchi, Chittoor.'
  },
  {
    icon: <FaCar className="text-3xl text-gold-600" />,
    title: 'Ample Parking Space',
    description: 'Convenient parking facilities for your guests.'
  },
  {
    icon: <FaBolt className="text-3xl text-gold-600" />,
    title: 'Power Backup',
    description: 'Uninterrupted celebrations with reliable power & water facility.'
  },
  {
    icon: <FaCheckCircle className="text-3xl text-gold-600" />,
    title: '20+ Years Excellence',
    description: 'Trusted venue for weddings, receptions, and family events.'
  }
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-premium-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="text-center mb-16">
            <h2 className="heading-md text-premium-charcoal mb-4 italic font-display">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide the perfect blend of tradition, space, and modern facilities to make your special day truly divine.
            </p>
            <div className="h-1 w-20 bg-premium-gold mx-auto mt-6 rounded-full"></div>
          </div>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {USPs.map((usp, index) => (
            <FadeInUp key={index} delay={0.1 * index}>
              <div className="bg-white p-8 rounded-2xl shadow-premium border border-premium-gold/10 hover:border-premium-gold/30 transition-all group">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {usp.icon}
                </div>
                <h3 className="text-xl font-bold text-premium-charcoal mb-2 font-display">
                  {usp.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {usp.description}
                </p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  )
}
