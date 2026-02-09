# Srimathi Santharaghuraman Kalyana Mandapam - Website

A modern, production-ready website for a traditional wedding venue in Chittoor, Andhra Pradesh, India.

## 🎯 Features

- ✨ **Modern Design**: Elegant, premium aesthetic with gold accents and warm lighting
- 📱 **Fully Responsive**: Mobile, tablet, and desktop optimized
- 🎨 **Smooth Animations**: Parallax scrolling and Framer Motion animations
- 🖼️ **Gallery**: Interactive image gallery with lightbox and category filtering
- ⭐ **Reviews Section**: Display guest testimonials with ratings
- 🗺️ **Location Integration**: Embedded Google Maps for easy navigation
- 📞 **Easy Contact**: Click-to-call buttons and contact information
- ♿ **Accessible HTML**: ARIA labels and semantic HTML
- 🔍 **SEO Optimized**: Meta tags, structured data, and mobile-friendly
- ⚡ **Fast Performance**: Image optimization with Next.js Image component

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Language**: TypeScript
- **Deployment**: Ready for Vercel

## 📁 Project Structure

```
kalyana-mandapam/
├── app/
│   ├── components/          # Reusable React components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Button.tsx
│   │   └── FadeInUp.tsx
│   ├── sections/            # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── FacilitiesSection.tsx
│   │   ├── ReviewsSection.tsx
│   │   └── ContactSection.tsx
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── lib/
│   └── data.ts              # Mock data and constants
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── next.config.js
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone or navigate to the project:
```bash
cd kalyana-mandapam
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build for Production

```bash
npm run build
npm run start
```

## 🎨 Customization

### Venue Information
Edit `lib/data.ts` to update:
- Venue name and contact details
- Address and opening hours
- Facilities and features
- Gallery images and content
- Reviews and testimonials

### Styling
- Colors are defined in `tailwind.config.ts`
- Custom CSS in `app/globals.css`
- Component-specific styles use Tailwind classes

### Images
Replace image URLs in `lib/data.ts` with your own high-quality photos. The gallery supports:
- Stage decorations
- Dining hall setups
- Family rooms
- Exterior views

## 📝 Pages & Sections

1. **Home**: Fullscreen hero with parallax background and CTAs
2. **About**: Venue description, highlights, and honest limitations
3. **Gallery**: Filterable image gallery with lightbox viewer
4. **Facilities**: Seating capacity and amenity details
5. **Reviews**: Guest testimonials with star ratings
6. **Located & Contact**: Map, address, phone, and hours

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Proper color contrast
- Image alt texts for all images

## 🔍 SEO Features

- Meta title and description
- Open Graph tags for social sharing
- Canonical URLs
- sitemap.xml ready
- robots.txt ready
- Structured data ready

## 📱 Responsive Breakpoints

- Mobile: 320px and up
- Tablet: 768px and up
- Desktop: 1024px and up
- Large Desktop: 1280px and up

## 🎯 Performance

- Image lazy loading
- Code splitting with Next.js
- CSS optimization with Tailwind
- Minimal JavaScript bundle
- Fast Core Web Vitals

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect to Vercel at [vercel.com](https://vercel.com)
3. Vercel automatically deploys on push

### Alternative Deployment Options

- Netlify
- AWS
- Google Cloud
- Azure
- DigitalOcean

## 📄 License

This project is created for Srimathi Santharaghuraman Kalyana Mandapam.

## 👥 Support

For customizations or additional features, contact your web development team.

---

**Made with ❤️ for your special day** ✨
