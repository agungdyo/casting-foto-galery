# Casting Photo Gallery

A modern, responsive landing page with portfolio gallery built with Next.js 15, React 19, TypeScript, TailwindCSS, shadcn/ui, and Framer Motion.

## Features

### Landing Page Sections
- **Hero** - Stunning animated hero with gradient text and CTA buttons
- **About** - Company story with features and statistics
- **Services** - 6 service cards with icons and features
- **Portfolio Gallery** - Masonry grid with filters, search, and lightbox
- **Contact** - Contact form with validation and social links
- **Footer** - Navigation links and social media

### Portfolio Gallery
- Masonry Grid layout (responsive columns)
- Category filtering (All, Portrait, Fashion, Commercial, Editorial, Event, Product)
- Real-time search (title, description, location)
- Modal preview with image gallery
- Lightbox with navigation
- Image lazy loading with blur placeholder
- Keyboard navigation (arrow keys, Escape)

### SEO
- Dynamic metadata
- OpenGraph tags
- Twitter Cards
- robots.txt
- sitemap.xml
- JSON-LD structured data (Organization, ImageGallery)

### Technical Features
- Dark/Light mode with system preference
- Framer Motion animations
- Responsive design (mobile-first)
- Accessibility (ARIA labels, keyboard navigation)
- Image optimization (Next.js Image, WebP, Avif)
- TypeScript strict mode

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI**: React 19, TailwindCSS, shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **Data**: JSON file database

## Project Structure

```
casting-foto-galery/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── robots.ts          # Robots.txt
│   └── sitemap.ts         # Sitemap.xml
├── components/
│   ├── layout/
│   │   ├── header.tsx     # Navigation header
│   │   └── footer.tsx     # Footer
│   ├── sections/
│   │   ├── hero.tsx       # Hero section
│   │   ├── about.tsx      # About section
│   │   ├── services.tsx   # Services section
│   │   └── contact.tsx    # Contact section
│   ├── portfolio/
│   │   ├── portfolio.tsx  # Main portfolio component
│   │   ├── gallery-filters.tsx
│   │   ├── gallery-search.tsx
│   │   ├── gallery-grid.tsx
│   │   ├── gallery-item.tsx
│   │   └── gallery-modal.tsx
│   ├── providers/
│   │   └── theme-provider.tsx
│   └── ui/                # shadcn/ui components
├── lib/
│   ├── utils.ts           # Utility functions
│   ├── gallery.ts         # Gallery data and helpers
│   ├── animations.ts      # Framer Motion variants
│   └── seo.ts             # SEO metadata
├── types/
│   └── gallery.ts         # TypeScript types
├── data/
│   ├── gallery.json       # Gallery items data
│   └── company.json       # Company information
├── public/
│   └── gallery/           # Static gallery images
└── package.json
```

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/casting-foto-galery.git
cd casting-foto-galery

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

### GitHub Pages

1. Update `next.config.ts`:
   ```typescript
   output: 'export'
   ```
2. Push to GitHub
3. Enable GitHub Pages in settings

## Data Management

Gallery data is stored in `/data/gallery.json`:

```json
{
  "id": "unique-id",
  "title": "Project Title",
  "slug": "project-slug",
  "description": "Project description",
  "category": "Portrait|Fashion|Commercial|Editorial|Event|Product",
  "location": "City, Country",
  "year": "2024",
  "thumbnail": "https://example.com/thumbnail.jpg",
  "images": ["https://example.com/image1.jpg"],
  "featured": true
}
```

## Performance Targets

- Lighthouse Performance: >95
- Lighthouse Accessibility: >95
- Lighthouse SEO: >95
- Lighthouse Best Practices: >95

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
