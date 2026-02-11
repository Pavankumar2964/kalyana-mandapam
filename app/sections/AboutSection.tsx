'use client'

import FadeInUp from '@/app/components/FadeInUp'
import { VENUE_INFO, HIGHLIGHTS, LIMITATIONS } from '@/lib/data'

export default function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <FadeInUp>
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="heading-md text-gray-900 mb-3 sm:mb-4">About Our Mandapam</h2>
            <div className="h-1 w-12 sm:w-16 bg-gradient-gold mx-auto rounded-full"></div>
          </div>
        </FadeInUp>

        {/* Main Description */}
      <FadeInUp delay={0.1}>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-12 md:mb-16">
    
    <div className="space-y-4 sm:space-y-6">
      <p className="text-lg sm:text-xl text-gray-800 font-display italic leading-relaxed">
        Srimathi Santharaghuraman Kalyana Mandapam is a trusted wedding venue in Chittoor, known for its spacious halls, excellent facilities, and convenient location.
      </p>
      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
        Designed to host traditional weddings and grand celebrations, our mandapam provides a comfortable and elegant setting for your special occasions.
      </p>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
        Located at {VENUE_INFO.address}, our venue is easily accessible and welcomes
        guests from across the region. We pride ourselves on delivering excellence in
        every detail.
      </p>
    </div>

    <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl">
      <img
        src="/KL.jpeg"
        alt="Kalyana Mandapam"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg sm:rounded-xl md:rounded-2xl"></div>
    </div>

  </div>
</FadeInUp>

        {/* Highlights */}
        <FadeInUp delay={0.2}>
          <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold mb-6 sm:mb-8 text-gray-900">Why Choose Us?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {HIGHLIGHTS.map((highlight, idx) => (
              <div
                key={idx}
                className="glass p-4 sm:p-6 rounded-lg sm:rounded-xl border border-gold-200/50 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="text-lg sm:text-xl font-serif font-bold text-gold-600 mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </FadeInUp>

        {/* Limitations - Honest Disclosure */}
        <FadeInUp delay={0.3}>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 sm:p-6 md:p-8 rounded-lg">
            <h3 className="text-lg sm:text-xl font-serif font-bold text-amber-900 mb-4">
              📝 Important to Know
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {LIMITATIONS.map((limitation, idx) => (
                <div key={idx}>
                  <h4 className="font-bold text-amber-900 mb-1 text-sm sm:text-base">{limitation.title}</h4>
                  <p className="text-amber-800 text-xs sm:text-sm leading-relaxed">{limitation.description}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
