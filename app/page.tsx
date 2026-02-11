import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import WhyChooseUs from './sections/WhyChooseUs'
import GallerySection from './sections/GallerySection'
import FacilitiesSection from './sections/FacilitiesSection'
import ReviewsSection from './sections/ReviewsSection'
import ContactSection from './sections/ContactSection'
import StickyBottomBar from './components/StickyBottomBar'
import ScrollRefreshHandler from './components/ScrollRefreshHandler'

export default function Home() {
  return (
    <main className="min-h-screen w-full pb-20 md:pb-0">
      <ScrollRefreshHandler />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhyChooseUs />
      <GallerySection />
      <FacilitiesSection />
      <ReviewsSection />
      <ContactSection />
      <StickyBottomBar />
    </main>
  )
}
