# AI Development Agent - Portfolio Landing Page

## Project Overview

This project is maintained by an AI development agent following strict guidelines for modern web development.

## Technology Stack

### Core Technologies
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **TailwindCSS 4** - Utility-first CSS
- **shadcn/ui** - Reusable components
- **Framer Motion** - Animations
- **next-themes** - Dark mode

### Data Layer
- JSON file database (`/data/`)
- Static assets (`/public/`)
- No external database required

## Development Rules

### Code Standards
1. **TypeScript First** - No `any` types, strict mode enabled
2. **Server Components** - Use by default, add `'use client'` only when needed
3. **Small Components** - Single responsibility principle
4. **No Duplicate Code** - Reuse components and utilities
5. **No Inline Styles** - Use Tailwind classes only

### File Organization
```
app/          - Next.js app router
components/   - React components
lib/          - Utility functions and helpers
types/        - TypeScript type definitions
data/         - JSON data files
hooks/        - Custom React hooks
```

### Naming Conventions
- **Components**: PascalCase (e.g., `GalleryCard.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useGallery.ts`)
- **Types**: PascalCase (e.g., `GalleryItem.ts`)
- **Utils**: camelCase (e.g., `cn.ts`)

### Component Structure
```typescript
// Client Component
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export function MyComponent() {
  const [state, setState] = useState();
  
  return <div>...</div>;
}
```

```typescript
// Server Component
import { db } from '@/lib/db';

export default async function MyPage() {
  const data = await db.query();
  
  return <div>...</div>;
}
```

## Performance Guidelines

### Image Optimization
- Always use `next/image` component
- Specify `sizes` prop for responsive images
- Use `loading="lazy"` for below-fold images
- Provide `alt` text for accessibility

### Code Splitting
- Dynamic imports for heavy components
- Route-based splitting (automatic with App Router)

### Bundle Size
- Keep initial JS under 150KB
- Tree-shake unused code
- Use barrel exports wisely

## Accessibility

### Requirements
1. Semantic HTML elements
2. ARIA labels on interactive elements
3. Keyboard navigation support
4. Focus visible states
5. Color contrast ratio 4.5:1 minimum
6. Skip to content link

### Testing
- Use screen reader to verify
- Test keyboard navigation
- Check color contrast

## SEO Implementation

### Metadata
```typescript
export const metadata = {
  title: 'Page Title | Brand',
  description: 'Page description (160 chars max)',
  keywords: ['keyword1', 'keyword2'],
};
```

### Structured Data
- Organization schema
- ImageGallery schema
- Breadcrumb schema (if applicable)

### Technical
- robots.txt - Allow crawling
- sitemap.xml - Include all pages
- Canonical URLs
- OpenGraph & Twitter Cards

## Git Workflow

### Commit Messages
```
feat: add new feature
fix: resolve bug
refactor: code improvement
docs: documentation changes
style: formatting changes
test: test updates
chore: maintenance tasks
```

### Branch Naming
```
feature/feature-name
fix/bug-description
refactor/improvement-name
docs/documentation
```

## Testing Checklist

Before any deployment:
- [ ] All pages render without errors
- [ ] Navigation works correctly
- [ ] Forms validate and submit
- [ ] Dark/light mode works
- [ ] Images load with blur placeholder
- [ ] Keyboard navigation works
- [ ] No console errors
- [ ] Lighthouse scores >95

## Common Issues

### Hydration Mismatch
- Use `suppressHydrationWarning` on HTML element
- Ensure client-only code uses `'use client'`

### Image Optimization
- Add domains to `next.config.ts`
- Use `unoptimized` for external images if needed

### Theme Toggle Flash
- Wrap app in `ThemeProvider`
- Use `suppressHydrationWarning`

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/docs/)
