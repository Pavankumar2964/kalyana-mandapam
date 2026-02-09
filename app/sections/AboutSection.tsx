'use client'

import FadeInUp from '@/app/components/FadeInUp'
import { VENUE_INFO, HIGHLIGHTS, LIMITATIONS } from '@/lib/data'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeInUp>
          <div className="text-center mb-16">
            <h2 className="heading-md text-gray-900 mb-4">About Our Mandapam</h2>
            <div className="h-1 w-16 bg-gradient-gold mx-auto rounded-full"></div>
          </div>
        </FadeInUp>

        {/* Main Description */}
        <FadeInUp delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                {VENUE_INFO.description}
              </p>
              <p className="text-gray-600 leading-relaxed">
                Located at {VENUE_INFO.address}, our venue is easily accessible and welcomes
                guests from across the region. We pride ourselves on delivering excellence in
                every detail.
              </p>
            </div>

            {/* Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1495632066924-e7b99247bc94?w=600&h=600&fit=crop"
                alt="Kalyana Mandapam"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </FadeInUp>

        {/* Highlights */}
        <FadeInUp delay={0.2}>
          <h3 className="text-2xl font-serif font-bold mb-8 text-gray-900">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {HIGHLIGHTS.map((highlight, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-xl border border-gold-200/50 text-center"
              >
                <h4 className="text-xl font-serif font-bold text-gold-600 mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-700 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </FadeInUp>

        {/* Limitations - Honest Disclosure */}
        <FadeInUp delay={0.3}>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-8 rounded-lg">
            <h3 className="text-xl font-serif font-bold text-amber-900 mb-4">
              📝 Important to Know
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {LIMITATIONS.map((limitation, idx) => (
                <div key={idx}>
                  <h4 className="font-bold text-amber-900 mb-1">{limitation.title}</h4>
                  <p className="text-amber-800 text-sm">{limitation.description}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
