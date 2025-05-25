// app/page.tsx
import type { Metadata } from 'next'
import { WebPageJsonLd } from '@/components/SEO/WebPageJsonLd'
import Hero from '@/components/ui/Hero'
import AboutBentoGrid from '@/components/ui/Services/AboutBentoGrid'
import Features from '@/components/ui/Features/FeaturesDesktop'
import ContactSection from '@/components/ui/Contact/Form'


export const metadata: Metadata = {
  title: 'PIRMADA | Creative Design and Development Agency',
  description:
    'Pirmada is a premium creative agency helping brands ignite vision and elevate their digital presence with expert design & development.',
  openGraph: {
    url: '/',
    title: 'PIRMADA | Creative Design and Development Agency',
    description:
      'Pirmada is a premium creative agency helping brands ignite vision and elevate their digital presence with expert design & development.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'PIRMADA Logo' }],
  },
}

export default function HomePage() {
  // Assert to TS that this is a string
  const titleString = metadata.title as string
  const desc = metadata.description!

  return (
    <>
      <WebPageJsonLd
        name={titleString}
        description={desc}
        url="https://pirmada.com/"
      />

      <p style={{ display: 'none' }}>{desc}</p>

      
      

      <Hero />
      <AboutBentoGrid />
      <Features />
      <ContactSection />
    </>
  )
}