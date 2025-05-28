import React from 'react'

import Hero from '@/components/ui/About/Hero';
import Services from '@/components/ui/About/Services';
import Statistics from '@/components/ui/About/Statistics';
import LogoTicker from '@/components/ui/About/LogoTicker';
import type { Metadata } from 'next';
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
      const desc = metadata.description!
  return (
   <>
   <p className="sr-only">{desc}</p>

   <Hero/>
   <LogoTicker/>
   <Services/>
  
   <Statistics/>
   
   </>
  )
}

export default page


