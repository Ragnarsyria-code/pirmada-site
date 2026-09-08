import type { Metadata } from 'next'

import Approach from '@/components/home/Approach'
import Clients from '@/components/home/Clients'
import Hero from '@/components/home/Hero'
import Principles from '@/components/home/Principles'
import SelectedWork from '@/components/home/SelectedWork'
import ServicesList from '@/components/home/ServicesList'
import WebPageJsonLd from '@/components/seo/WebPageJsonLd'
import { site } from '@/content/site'

const title = 'Pirmada — Design & development studio'

export const metadata: Metadata = {
  title: { absolute: title },
  description: site.description,
  alternates: { canonical: '/' },
  openGraph: { url: '/', title, description: site.description },
  twitter: { title, description: site.description },
}

export default function HomePage() {
  return (
    <>
      <WebPageJsonLd name={title} description={site.description} path="/" />
      <Hero />
      <Clients />
      <SelectedWork />
      <ServicesList />
      <Principles />
      <Approach />
    </>
  )
}
