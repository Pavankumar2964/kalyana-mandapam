import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'
import './globals.css'
import Footer from './components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
})

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Srimathi Santharaghuraman Kalyana Mandapam | Premium Wedding Hall in Chittoor',
  description: 'Experience elegance at Chittoors finest wedding venue. Srimathi Santharaghuraman Kalyana Mandapam offers spacious halls, premium amenities, and a perfect setting for weddings and grand celebrations.',
  keywords: 'Kalyana Mandapam in Chittoor, Wedding Hall Chittoor, Marriage Hall Chittoor, Luxury Wedding Venue Chittoor, Srimathi Santharaghuraman',
  authors: [{ name: 'Srimathi Santharaghuraman Kalyana Mandapam' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://kalyanamandapamchittoor.com',
    siteName: 'Srimathi Santharaghuraman Kalyana Mandapam',
    title: 'Srimathi Santharaghuraman Kalyana Mandapam | Premium Wedding Hall in Chittoor',
    description: 'Book the most elegant wedding venue in Chittoor for your special day.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable} scroll-smooth`}>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-sans bg-white text-gray-900 antialiased">
        {children}
        <Footer />
      </body>
    </html>
  )
}
