import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ViewTransitions } from 'next-view-transitions'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import OrganizationJsonLd from '@/components/seo/OrganizationJsonLd'
import { SITE_URL, site } from '@/content/site'

import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Pirmada — Design & development studio',
    template: '%s — Pirmada',
  },
  applicationName: site.legalName,
  description: site.description,
  keywords: [
    'Pirmada',
    'digital agency',
    'design studio',
    'web design',
    'web development',
    'UI/UX design',
    'mobile app development',
    'brand identity',
    'startup',
    'UAE',
  ],
  authors: [{ name: site.legalName, url: SITE_URL }],
  creator: site.legalName,
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: site.legalName,
    title: 'Pirmada — Design & development studio',
    description: site.description,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Pirmada — design and development studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pirmada — Design & development studio',
    description: site.description,
    images: ['/og-image.png'],
    creator: site.twitterHandle,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#060607',
  colorScheme: 'dark',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransitions>
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
        <body className="antialiased">
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <OrganizationJsonLd />
        </body>
      </html>
    </ViewTransitions>
  )
}
