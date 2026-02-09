import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import GallerySection from './sections/GallerySection'
import FacilitiesSection from './sections/FacilitiesSection'
import ReviewsSection from './sections/ReviewsSection'
import ContactSection from './sections/ContactSection'
import ScrollRefreshHandler from './components/ScrollRefreshHandler'

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <ScrollRefreshHandler />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <FacilitiesSection />
      <ReviewsSection />
      <ContactSection />
    </main>
  )
}
