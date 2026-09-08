import type { StaticImageData } from 'next/image'

import allert01 from '@/assets/work/allert-01.jpg'
import allert02 from '@/assets/work/allert-02.jpg'
import chaos01 from '@/assets/work/chaos-01.jpg'
import chaos02 from '@/assets/work/chaos-02.jpg'
import ibCover from '@/assets/work/ib-cover.jpg'
import nhtCover from '@/assets/work/nht-cover.jpg'
import penta01 from '@/assets/work/penta-01.jpg'
import pentaCover from '@/assets/work/penta-cover.jpg'
import pixel01 from '@/assets/work/pixel-01.jpg'
import pixel02 from '@/assets/work/pixel-02.jpg'
import scicast01 from '@/assets/work/scicast-01.jpg'
import scicastCover from '@/assets/work/scicast-cover.jpg'
import syncCover from '@/assets/work/sync-cover.jpg'

export type Project = {
  slug: string
  title: string
  client: string
  industry: string
  services: string[]
  platform: string
  summary: string
  cover: StaticImageData
  coverAlt: string
  /** Additional interface shots shown on the Work page. */
  shots?: { src: StaticImageData; alt: string }[]
  href?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'scicast',
    title: 'SciCast',
    client: 'SciCast',
    industry: 'Science media',
    services: ['Web design', 'Front-end development', 'Custom CMS'],
    platform: 'Website',
    summary:
      'A publishing platform for long-form science articles: an editorial reading experience with a branded identity and a custom CMS built for a fast-moving editorial team.',
    cover: scicastCover,
    coverAlt: 'SciCast article page shown on a tablet resting on dark textured stone',
    shots: [{ src: scicast01, alt: 'SciCast homepage layout with featured technology articles' }],
    featured: true,
  },
  {
    slug: 'penta',
    title: 'Penta Real Estate',
    client: 'Penta Skyline',
    industry: 'Real estate · UAE',
    services: ['UI/UX design', 'Web development'],
    platform: 'Property portal',
    summary:
      'A property portal for the UAE market with intuitive search, interactive listings and clear buying and selling journeys, presented with the confidence a premium real-estate brand needs.',
    cover: pentaCover,
    coverAlt: 'Penta Real Estate website homepage on a laptop set against dark rock',
    shots: [{ src: penta01, alt: 'Penta Real Estate journey section with Dubai skyline photography' }],
    featured: true,
  },
  {
    slug: 'sync',
    title: 'SYNC',
    client: 'SYNC',
    industry: 'Social networking',
    services: ['Product design', 'Mobile app development'],
    platform: 'iOS & Android app',
    summary:
      'A social networking app built for real-time connection: messaging, media sharing and branded interactive experiences in a dark, focused interface.',
    cover: syncCover,
    coverAlt: 'SYNC mobile app screens arranged on a dark background beside the SYNC logo',
    featured: true,
  },
  {
    slug: 'nht',
    title: 'NHT High Technology',
    client: 'NHT',
    industry: 'Dental supplies · E-commerce',
    services: ['E-commerce design', 'Web development'],
    platform: 'Online store',
    summary:
      'A scalable e-commerce site for a dental technology supplier, with a responsive catalogue, secure checkout and fast page performance.',
    cover: nhtCover,
    coverAlt: 'NHT Dental UAE storefront homepage displayed on a laptop',
    href: 'https://nhthightec.com/',
  },
  {
    slug: 'ib',
    title: 'IB Designer Portfolio',
    client: 'IB',
    industry: 'Creative portfolio',
    services: ['Web design', 'Development'],
    platform: 'Website',
    summary:
      'A responsive portfolio for a designer, built around dynamic project galleries and a distraction-free reading experience that puts the work first.',
    cover: ibCover,
    coverAlt: 'IB designer portfolio shown on a phone with bold black typography',
  },
]

export const featuredProjects = projects.filter((p) => p.featured)

/** Interface design work shown as a secondary visual index on the Work page. */
export const designShots: { title: string; discipline: string; src: StaticImageData; alt: string }[] = [
  { title: 'ALLERT', discipline: 'UI/UX design', src: allert01, alt: 'ALLERT brand hero with blue textile photography' },
  { title: 'CHAOS', discipline: 'UI/UX design', src: chaos01, alt: 'CHAOS studio landing page with large serif wordmark' },
  { title: 'Pixel', discipline: 'UI/UX design', src: pixel01, alt: 'Pixel UX education platform landing page' },
  { title: 'ALLERT', discipline: 'Website design', src: allert02, alt: 'ALLERT agency website homepage' },
  { title: 'Pixel', discipline: 'Product design', src: pixel02, alt: 'Pixel course catalogue with role filters' },
  { title: 'CHAOS', discipline: 'Website design', src: chaos02, alt: 'CHAOS website navigation and hero' },
]
