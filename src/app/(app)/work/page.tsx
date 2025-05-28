import Hero from '@/components/ui/work/Hero';
import Projects from '@/components/ui/work/Projects';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Our Work",
  description: "At Pirmada, we deliver exceptional digital products by combining rigorous quality standards with the latest software technologies to ensure innovative, reliable solutions that exceed expectations.",
  openGraph: {
    url: '/work',
    title: "Our Work",
    description: "At Pirmada, we deliver exceptional digital products by combining rigorous quality standards with the latest software technologies to ensure innovative, reliable solutions that exceed expectations.",
    images: [{   url: "/og-image.png", width:1200, height:630 }],
  },
};
export default function Home() {
    const desc = metadata.description!
  
  return (
   <>
         <p className="sr-only">{desc}</p>

   
    <Hero/>
    <Projects/>
    </>
    
  );
}
