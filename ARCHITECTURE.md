# Architecture Documentation

## Project Architecture Overview

This document describes the technical architecture of the Casting Photo Gallery project.

---

## Technology Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | Next.js | 15.x |
| UI Library | React | 19.x |
| Language | TypeScript | 5.x |
| Styling | TailwindCSS | 4.x |
| Components | shadcn/ui | latest |
| Animations | Framer Motion | 11.x |
| Icons | Lucide React | latest |
| Theme | next-themes | latest |

---

## Directory Structure

```
casting-foto-galery/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Landing page
│   ├── globals.css         # Global styles
│   ├── robots.ts           # SEO robots.txt
│   └── sitemap.ts          # SEO sitemap.xml
│
├── components/             # React components
│   ├── layout/             # Layout components
│   │   ├── header.tsx     # Navigation header
│   │   └── footer.tsx     # Footer with links
│   │
│   ├── sections/           # Page sections
│   │   ├── hero.tsx       # Hero section
│   │   ├── about.tsx      # About section
│   │   ├── services.tsx   # Services section
│   │   └── contact.tsx    # Contact section
│   │
│   ├── portfolio/         # Portfolio gallery
│   │   ├── portfolio.tsx   # Main portfolio container
│   │   ├── gallery-filters.tsx
│   │   ├── gallery-search.tsx
│   │   ├── gallery-grid.tsx
│   │   ├── gallery-item.tsx
│   │   └── gallery-modal.tsx
│   │
│   ├── providers/          # Context providers
│   │   └── theme-provider.tsx
│   │
│   └── ui/                # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── input.tsx
│       └── ...
│
├── lib/                    # Utilities and helpers
│   ├── utils.ts           # cn() helper, utilities
│   ├── gallery.ts         # Gallery data and helpers
│   ├── animations.ts      # Framer Motion variants
│   └── seo.ts             # SEO metadata and schemas
│
├── types/                 # TypeScript types
│   └── gallery.ts         # Gallery item types
│
├── data/                  # JSON data files
│   ├── gallery.json       # Gallery items
│   └── company.json       # Company information
│
└── public/                # Static assets
    └── gallery/          # Gallery images
```

---

## Component Architecture

### Server vs Client Components

**Server Components** (default):
- `app/layout.tsx`
- `app/page.tsx`
- `app/sitemap.ts`
- `app/robots.ts`

**Client Components** (`'use client'`):
- All interactive components
- Components using hooks (useState, useEffect)
- Components using Framer Motion
- Theme-dependent components

### Component Hierarchy

```
<ThemeProvider>
  <Header />
  <main>
    <Hero />
    <About />
    <Services />
    <Portfolio>
      <GalleryFilters />
      <GallerySearch />
      <GalleryGrid>
        <GalleryItem />
        <GalleryItem />
        ...
      </GalleryGrid>
      <GalleryModal />
    </Portfolio>
    <Contact />
  </main>
  <Footer />
</ThemeProvider>
```

---

## Data Flow

### Gallery Data

1. Static data imported from `/data/gallery.json`
2. Parsed in `/lib/gallery.ts`
3. Filtered/searched in Portfolio component
4. Passed to child components as props

### Theme Data

1. ThemeProvider wraps the app
2. Theme stored in localStorage (client-side)
3. CSS variables updated via Tailwind dark mode

### SEO Data

1. Metadata defined in `/lib/seo.ts`
2. Applied via Next.js metadata API
3. JSON-LD scripts injected in layout

---

## Styling Architecture

### TailwindCSS Configuration

- Uses Tailwind CSS 4.x with CSS-first configuration
- Custom CSS variables for theming
- Dark mode via `class` strategy

### Design Tokens

```css
/* Light mode */
--background: #ffffff
--foreground: #09090b
--primary: #18181b
--primary-foreground: #ffffff
--muted: #f4f4f5
--muted-foreground: #71717a
--accent: #f4f4f5
--accent-foreground: #18181b
--border: #e4e4e7
--card: #ffffff
--card-foreground: #09090b

/* Dark mode */
--background: #09090b
--foreground: #fafafa
--primary: #fafafa
--primary-foreground: #18181b
--muted: #27272a
--muted-foreground: #a1a1aa
--accent: #27272a
--accent-foreground: #fafafa
--border: #27272a
--card: #18181b
--card-foreground: #fafafa
```

---

## Performance Optimizations

### Image Optimization
- Next.js Image component
- WebP/Avif automatic format selection
- Lazy loading for below-fold images
- Blur placeholder for gallery items

### Code Splitting
- Route-based splitting (automatic)
- Dynamic imports for heavy components
- Tree-shaking enabled

### Bundle Size
- Target: <150KB initial JS
- No unnecessary dependencies
- Optimized font loading with `next/font`

---

## SEO Architecture

### Metadata Structure
```
Root Metadata
├── Title Template: "%s | Casting Photo Gallery"
├── Description
├── Keywords
├── Authors
├── OpenGraph
│   ├── Title
│   ├── Description
│   ├── URL
│   ├── Site Name
│   └── Images
├── Twitter
│   ├── Card
│   ├── Title
│   ├── Description
│   └── Images
└── Robots
    ├── Index
    ├── Follow
    └── GoogleBot
```

### Structured Data (JSON-LD)
```json
[
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Casting Photo Gallery",
    "url": "https://castingphoto.com"
  },
  {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Casting Photo Gallery Portfolio"
  }
]
```

---

## Accessibility Features

### Semantic HTML
- Proper heading hierarchy (h1 → h2 → h3)
- Semantic landmarks (`<header>`, `<main>`, `<footer>`)
- Meaningful link text

### ARIA Implementation
- `aria-label` on buttons and links
- `aria-selected` on filter tabs
- `aria-label` for modal content

### Keyboard Navigation
- Tab navigation through all interactive elements
- Arrow keys for gallery navigation
- Escape to close modals
- Focus trap in modals

### Color Contrast
- All text meets WCAG AA (4.5:1)
- Interactive elements meet WCAG AA (3:1)

---

## Deployment Architecture

### Vercel (Primary)
- Zero-config deployment
- Automatic SSL
- Edge network
- Built-in analytics

### Build Output
```bash
npm run build
# Output: .next/
```

### Environment Variables
- None required (static site)
- Images served from external URLs (picsum.photos)

---

## Security Considerations

- No server-side secrets
- No database connections
- External image domains whitelisted
- CSP headers via Vercel config
- Sanitized user inputs in forms

---

## Future Considerations

### Scalability
- Consider ISR for large gallery collections
- Implement image CDN for custom images
- Add pagination/infinite scroll for large datasets

### Features
- Multi-language support (i18n)
- CMS integration (Contentful, Sanity)
- Analytics dashboard
- Contact form API integration
