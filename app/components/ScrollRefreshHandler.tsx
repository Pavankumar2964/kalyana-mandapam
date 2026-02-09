'use client'

import { useEffect } from 'react'

export default function ScrollRefreshHandler() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const sectionIds = ['home', 'about', 'gallery', 'facilities', 'reviews', 'contact']

    // Track scroll position to determine which section is most visible
    const trackVisibleSection = () => {
      let mostVisibleSection = 'home'
      let maxIntersection = 0

      sectionIds.forEach((id) => {
        const el = document.getElementById(id)
        if (!el) return

        const rect = el.getBoundingClientRect()
        const elementTop = Math.max(0, rect.top)
        const elementBottom = Math.min(window.innerHeight, rect.bottom)
        const intersection = Math.max(0, elementBottom - elementTop)

        if (intersection > maxIntersection) {
          maxIntersection = intersection
          mostVisibleSection = id
        }
      })

      try {
        sessionStorage.setItem('currentSection', mostVisibleSection)
      } catch (e) {
        // ignore sessionStorage errors
      }
    }

    // Listen to scroll events to track visible section
    window.addEventListener('scroll', trackVisibleSection, { passive: true })

    // Also track on first load/mount
    setTimeout(() => {
      trackVisibleSection()
    }, 100)

    // On page load, check if we need to reset to home
    setTimeout(() => {
      try {
        const last = sessionStorage.getItem('currentSection')
        if (last && last !== 'home') {
          console.log(`[RefreshHandler] Resetting from ${last} to home`)
          const newUrl = window.location.pathname + '#home'
          window.history.replaceState(null, '', newUrl)
          const el = document.getElementById('home')
          if (el) {
            el.scrollIntoView({ behavior: 'instant' })
          } else {
            window.scrollTo({ top: 0, behavior: 'instant' })
          }
          sessionStorage.removeItem('currentSection')
        }
      } catch (e) {
        // ignore
      }
    }, 50)

    return () => {
      window.removeEventListener('scroll', trackVisibleSection)
    }
  }, [])

  return null
}
