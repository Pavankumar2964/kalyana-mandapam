'use client'

import { FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'
import { MdCall } from 'react-icons/md'
import { VENUE_INFO } from '@/lib/data'

export default function StickyBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-premium-gold/20 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-4 py-3">
      <div className="grid grid-cols-3 gap-4">
        <a
          href="tel:+919440076063"
          className="flex flex-col items-center justify-center gap-1 text-premium-maroon active:scale-95 transition-transform"
        >
          <div className="bg-premium-maroon/10 p-2 rounded-full">
            <MdCall className="text-xl" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider">Call</span>
        </a>
        
        <a
          href="https://wa.me/919440076063"
          className="flex flex-col items-center justify-center gap-1 text-green-600 active:scale-95 transition-transform"
        >
          <div className="bg-green-100 p-2 rounded-full">
            <FaWhatsapp className="text-xl" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
        </a>

        <a
          href="https://maps.app.goo.gl/WeNPKDR7QBgaUEwk9"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 text-premium-gold active:scale-95 transition-transform"
        >
          <div className="bg-premium-gold/10 p-2 rounded-full">
            <FaMapMarkerAlt className="text-lg" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider">Directions</span>
        </a>
      </div>
    </div>
  )
}
