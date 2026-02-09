'use client'

import FadeInUp from '@/app/components/FadeInUp'
import { REVIEWS } from '@/lib/data'
import { motion } from 'framer-motion'

export default function ReviewsSection() {
  const Star = ({ filled }: { filled: boolean }) => (
    <span className={filled ? '⭐' : '☆'}>{'⭐'}</span>
  )

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeInUp>
          <div className="text-center mb-16">
            <h2 className="heading-md text-gray-900 mb-4">What Our Guests Say</h2>
            <div className="h-1 w-16 bg-gradient-gold mx-auto rounded-full"></div>
          </div>
        </FadeInUp>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review, idx) => (
            <FadeInUp key={review.id} delay={idx * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">
                      {i < review.rating ? '⭐' : '☆'}
                    </span>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 mb-4 flex-grow leading-relaxed">"{review.text}"</p>

                {/* Author Info */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-white font-bold">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{review.author}</p>
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
          <div className="mt-16 bg-gradient-to-r from-gold-600 to-gold-700 text-white p-8 rounded-2xl text-center shadow-2xl">
            <div className="text-5xl mb-2">⭐</div>
            <p className="text-4xl font-bold mb-1">3.8 Rating</p>
            <p className="text-gold-100">Based on 240 authentic guest reviews</p>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
