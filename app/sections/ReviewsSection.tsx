'use client'

import FadeInUp from '@/app/components/FadeInUp'
import { REVIEWS } from '@/lib/data'
import { motion } from 'framer-motion'

export default function ReviewsSection() {
  const Star = ({ filled }: { filled: boolean }) => (
    <span className={filled ? '⭐' : '☆'}>{'⭐'}</span>
  )

  return (
    <section id="reviews" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <FadeInUp>
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="heading-md text-gray-900 mb-3 sm:mb-4">What Our Guests Say</h2>
            <div className="h-1 w-12 sm:w-16 bg-gradient-gold mx-auto rounded-full"></div>
          </div>
        </FadeInUp>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {REVIEWS.map((review, idx) => (
            <FadeInUp key={review.id} delay={idx * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl border border-gray-200 shadow-md hover:shadow-lg md:hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-base sm:text-lg">
                      {i < review.rating ? '⭐' : '☆'}
                    </span>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-gray-700 mb-4 flex-grow leading-relaxed">"{review.text}"</p>

                {/* Author Info */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gradient-gold flex items-center justify-center text-white text-xs sm:text-sm font-bold flex-shrink-0">
                      {review.author.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-gray-900 text-xs sm:text-sm truncate">{review.author}</p>
                      {review.verified && (
                        <p className="text-xs text-gold-600 font-semibold">✓ Verified Guest</p>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </div>
              </motion.div>
            </FadeInUp>
          ))}
        </div>

        {/* Overall Rating Card */}
        <FadeInUp delay={0.5}>
          <div className="mt-12 md:mt-16 bg-gradient-to-r from-gold-600 to-gold-700 text-white p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl md:rounded-2xl text-center shadow-lg md:shadow-2xl">
            <div className="text-3xl sm:text-4xl md:text-5xl mb-2">⭐</div>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">3.8 Rating</p>
            <p className="text-sm sm:text-base text-gold-100">Based on 240 authentic guest reviews</p>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
