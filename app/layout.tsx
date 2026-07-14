import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig, organizationSchema, imageGallerySchema } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
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
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "./",
  },
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
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              organizationSchema,
              imageGallerySchema,
            ]),
          }}
        />
      </body>
    </html>
  );
}
