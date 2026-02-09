import type { Metadata } from 'next'
import './globals.css'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Srimathi Santharaghuraman Kalyana Mandapam | Wedding Venue Chittoor',
  description: 'Premium wedding hall and event venue in Chittoor, Andhra Pradesh. Fully equipped with dining facilities, spacious halls, and family rooms. Perfect for your special day.',
  keywords: 'kalyana mandapam, wedding hall, event venue, Chittoor, Tirupati Road, wedding celebration',
  authors: [{ name: 'Srimathi Santharaghuraman Kalyana Mandapam' }],
  viewport: 'width=device-width, initial-scale=1.0',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kalyana-mandapam.com',
    siteName: 'Srimathi Santharaghuraman Kalyana Mandapam',
    title: 'Premium Wedding Venue in Chittoor',
    description: 'Book your dream wedding at our elegant mandapam with world-class facilities',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        {children}
        <Footer />
      </body>
    </html>
  )
}
