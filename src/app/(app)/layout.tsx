import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Nav from "@/components/ui/Nav/Navbar";
import Footer from "@/components/ui/Footer/Footer";
import { ViewTransitions } from "next-view-transitions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const biggerFont = localFont({
  src: [
    {
      path: "./fonts/BiggerDisplay.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-bigger",
});



export const metadata: Metadata = {
  title: {
    default: 'Pirmada',
    template: '%s | Pirmada - Technology Agency',
  },
  description: 'Pirmada is a premium creative agency helping brands ignite vision and elevate their digital presence with expert design & development.',
  keywords: [
    'Pirmada',
    'creative agency',
    'digital branding',
    'web design',
    'UI/UX',
    'web development',
    'app design',
    'app development',
    'graphic design',
    'wordpress',
    'website',
    'brand elevation'
  ],
  authors: [
    { name: 'Ibrahim Al Maroof', url: '/' },
    { name: 'Areej Al Khdr', url: '/' }
  ],
  viewport: 'width=device-width, initial-scale=1',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      'index': true,
      'follow': true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  openGraph: {
    title: 'Pirmada - Technology Agency',
    description: 'Explore Pirmada’s services: brand identity, web design, and development crafted to elevate your brand.',
    url: '/',
    siteName: 'Pirmada',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pirmada - Technology Agency'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pirmada - Technology Agency',
    description: 'Elevate your brand with Pirmada’s design & development expertise. Discover our portfolio today.',
    images: ['/og-image.png'],
    creator: '@PirmadaAgency'
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
    other: [
      { rel: 'manifest', url: '/manifest' }
    ]
  },
  themeColor: [
   
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ]
};
function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${biggerFont.variable} antialiased bg-black`}
      > 
      <ViewTransitions>
        <Nav />
       
        {children}
       
       <Footer/>
       </ViewTransitions>
      </body>
    </html>
  );
}

// Attach the font definitions as static properties to the RootLayout component
RootLayout.fonts = {
  biggerFont,
};

export default RootLayout;
