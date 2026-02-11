'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { VENUE_INFO } from '@/lib/data'
import { MdCall } from 'react-icons/md'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gold-200/30 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <div className="text-gold-600 text-xl sm:text-2xl font-serif font-bold">✨</div>
            <div className="hidden sm:block">
              <div className="text-xs sm:text-sm font-serif font-bold text-gray-900 leading-tight">
                Srimathi Santharaghuraman
              </div>
              <div className="text-xs text-gold-600">Kalyana Mandapam</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-gold-600 transition-colors serif text-xs sm:text-sm font-medium whitespace-nowrap"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href={VENUE_INFO.phoneLink}
              className="hidden sm:flex items-center gap-1 sm:gap-2 text-gold-600 hover:text-gold-700 font-semibold text-xs sm:text-sm whitespace-nowrap"
              title={VENUE_INFO.phone}
            >
              <MdCall size={18} className="sm:w-5 sm:h-5 text-gold-600" />
              <span className="hidden lg:inline">{VENUE_INFO.phone}</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col gap-1 focus:outline-none p-1 hover:bg-gold-50 rounded transition-colors"
              aria-label="Menu"
              aria-expanded={isMenuOpen}
            >
              <div
                className={`h-0.5 w-5 bg-gold-600 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></div>
              <div
                className={`h-0.5 w-5 bg-gold-600 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              ></div>
              <div
                className={`h-0.5 w-5 bg-gold-600 transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-t border-gold-200/30 py-3 px-2 space-y-2 max-h-screen overflow-y-auto"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-700 hover:text-gold-600 hover:bg-gold-50 px-3 py-2 rounded text-sm transition-colors"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
