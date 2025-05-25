import React from 'react'

import Hero from '@/components/ui/About/Hero';
import Services from '@/components/ui/About/Services';
import Statistics from '@/components/ui/About/Statistics';
import LogoTicker from '@/components/ui/About/LogoTicker';
import type { Metadata } from 'next';
import { WebPageJsonLd } from '@/components/SEO/WebPageJsonLd';
export const metadata: Metadata = {
  title: "About Pirmada ",
  description: "Pirmada is a full-service web design and development agency—crafting custom sites with strategic UX, elegant visuals, and robust code to elevate your online presence and drive growth.",
  openGraph: {
    url: "/about",
    title: "About Pirmada ",
    description: "Pirmada is a full-service web design and development agency—crafting custom sites with strategic UX, elegant visuals, and robust code to elevate your online presence and drive growth.",
    images: [{ url: "/og-about.png", width:1200, height:630 }],
  },
};
const page = () => {
   const titleString = metadata.title as string
      const desc = metadata.description!
  return (
   <>
    <WebPageJsonLd
              name={titleString}
              description={desc}
              url="/about"
            />
   <Hero/>
   <LogoTicker/>
   <Services/>
  
   <Statistics/>
   
   </>
  )
}

export default page


