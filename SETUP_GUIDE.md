# Getting Started Guide

## Initial Setup

### 1. Dependencies Installation
```bash
npm install
```

This installs all required dependencies:
- **next** - React framework
- **react** & **react-dom** - UI library
- **framer-motion** - Animation library
- **react-icons** - Icon library
- **tailwindcss** - Utility CSS framework
- **typescript** - Type safety

### 2. Development Server
```bash
npm run dev
```

Opens at `http://localhost:3000`

### 3. Build for Production
```bash
npm run build
npm run start
```

## Project Organization

### Components (`app/components/`)
- **Navbar.tsx** - Navigation bar with mobile menu
- **Footer.tsx** - Footer with contact information
- **Button.tsx** - Reusable button component
- **FadeInUp.tsx** - Animation wrapper component

### Sections (`app/sections/`)
- **HeroSection.tsx** - Fullscreen hero with parallax
- **AboutSection.tsx** - Venue description and highlights
- **GallerySection.tsx** - Interactive image gallery
- **FacilitiesSection.tsx** - Features and seating capacity
- **ReviewsSection.tsx** - Guest testimonials
- **ContactSection.tsx** - Location, map, and contact info

### Configuration Files
- **layout.tsx** - Root layout with SEO metadata
- **page.tsx** - Home page
- **globals.css** - Global styles and utilities
- **tailwind.config.ts** - Tailwind color scheme
- **next.config.js** - Next.js configuration
- **tsconfig.json** - TypeScript configuration

## Customization Guide

### Update Venue Information
Edit `lib/data.ts`:

```typescript
export const VENUE_INFO = {
  name: 'Your Venue Name',
  phone: 'Your Phone',
  address: 'Your Address',
  // ... etc
}
```

### Replace Images
1. Update image URLs in `lib/data.ts` under `GALLERY_IMAGES`
2. Use high-quality images (at least 800x600px recommended)
3. Consider using Next.js Image optimization

### Modify Colors
Edit `tailwind.config.ts` to change:
- Gold accent colors
- Maroon/dark colors
- Background gradients

### Add More Content
Create new sections in `app/sections/` and import them in `app/page.tsx`

## Performance Optimization

✅ **Already Implemented:**
- Image lazy loading
- Code splitting with Next.js
- Tailwind CSS optimization
- Framer Motion optimized animations
- Responsive design

## SEO Features

✅ **Already Implemented:**
- Meta title and description
- Open Graph tags
- Viewport meta tags
- Semantic HTML structure
- Responsive meta viewport

### Add robots.txt
Create `public/robots.txt`:
```
User-agent: *
Allow: /
Disallow: /admin

Sitemap: https://yourdomain.com/sitemap.xml
```

### Add sitemap.xml
Create `public/sitemap.xml` for search engines.

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import project
4. Auto-deploys on git push

### Manual Deployment
1. Run `npm run build`
2. Upload `.next` folder to your server
3. Set environment: `NODE_ENV=production`
4. Run `npm start`

## Environment Variables

Create `.env.local` for local development:
```
# Add any environment variables needed
NEXT_PUBLIC_API_URL=YOUR_API_URL
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Accessibility

✅ Already implemented:
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Color contrast compliance
- Mobile touch targets

## Troubleshooting

### Build Fails
```bash
rm -rf .next
npm run build
```

### Development Server Won't Start
```bash
npm install
npm run dev -- --port 3001  # Use different port
```

### Images Not Loading
- Check image URLs are accessible
- Ensure image dimensions are set
- Check Next.js Image configuration

## Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Version Info

- Next.js: 14.0+
- React: 18.2+
- TypeScript: 5.2+
- Tailwind CSS: 3.3+
- Framer Motion: 10.16+

## Support

For issues or questions:
1. Check Next.js documentation
2. Review component code comments
3. Test in development with `npm run dev`
4. Build and test with `npm run build`

---

**Ready to deploy? Change the domain settings and you're live!** 🚀
