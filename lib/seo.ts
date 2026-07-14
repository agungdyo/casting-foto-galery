export const siteConfig = {
  name: "Casting Photo Gallery",
  description: "Professional photography studio specializing in portrait, fashion, commercial, and editorial photography. Capturing moments, creating art.",
  url: "https://castingphoto.com",
  ogImage: "https://picsum.photos/seed/og-image/1200/630",
  links: {
    twitter: "https://twitter.com/castingphoto",
    github: "https://github.com/castingphoto",
  },
};

export const siteMetadata = {
  title: {
    default: "Casting Photo Gallery | Professional Photography Studio",
    template: "%s | Casting Photo Gallery",
  },
  description:
    "Professional photography studio specializing in portrait, fashion, commercial, and editorial photography. Based in New York, serving clients worldwide.",
  keywords: [
    "photography",
    "portrait photography",
    "fashion photography",
    "commercial photography",
    "editorial photography",
    "product photography",
    "event photography",
    "New York photographer",
  ],
  authors: [{ name: "Casting Photo Gallery" }],
  creator: "Casting Photo Gallery",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Casting Photo Gallery | Professional Photography Studio",
    description:
      "Professional photography studio specializing in portrait, fashion, commercial, and editorial photography.",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Casting Photo Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casting Photo Gallery | Professional Photography Studio",
    description:
      "Professional photography studio specializing in portrait, fashion, commercial, and editorial photography.",
    images: [siteConfig.ogImage],
    creator: "@castingphoto",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

// JSON-LD Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Casting Photo Gallery",
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  sameAs: [
    "https://instagram.com/castingphoto",
    "https://twitter.com/castingphoto",
    "https://facebook.com/castingphoto",
    "https://linkedin.com/company/castingphoto",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-555-123-4567",
    contactType: "customer service",
    email: "hello@castingphoto.com",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Creative Avenue",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10001",
    addressCountry: "US",
  },
};

export const imageGallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Casting Photo Gallery Portfolio",
  description: "Professional photography portfolio showcasing portrait, fashion, commercial, and editorial work.",
  url: `${siteConfig.url}/portfolio`,
  author: {
    "@type": "Organization",
    name: "Casting Photo Gallery",
  },
};
