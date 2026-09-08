import type { StaticImageData } from 'next/image'

import allert02 from '@/assets/work/allert-02.jpg'
import ibCover from '@/assets/work/ib-cover.jpg'
import pentaCover from '@/assets/work/penta-cover.jpg'
import pixel02 from '@/assets/work/pixel-02.jpg'
import syncCover from '@/assets/work/sync-cover.jpg'

export type Service = {
  id: string
  title: string
  short: string
  description: string
  deliverables: string[]
  image: StaticImageData
  imageAlt: string
}

export const services: Service[] = [
  {
    id: 'web',
    title: 'Websites & web platforms',
    short: 'Marketing sites, portals and e-commerce built to perform.',
    description:
      'From marketing sites to property portals and online stores. We design the experience and engineer the front end and CMS, so what launches is fast, accessible and easy for your team to run.',
    deliverables: ['Web design', 'Front-end development', 'CMS & e-commerce', 'Performance & SEO'],
    image: pentaCover,
    imageAlt: 'Penta Real Estate website on a laptop',
  },
  {
    id: 'apps',
    title: 'Mobile & web apps',
    short: 'Products for iOS, Android and the browser.',
    description:
      'Product design and development for iOS, Android and the browser. We shape the flows, design the interface system and build the app, with the detail work that makes software feel considered.',
    deliverables: ['Product strategy', 'UX flows & prototyping', 'iOS & Android', 'Design systems'],
    image: syncCover,
    imageAlt: 'SYNC mobile app screens',
  },
  {
    id: 'uiux',
    title: 'UI/UX design',
    short: 'Interfaces that are clear, intentional and a pleasure to use.',
    description:
      'Research-informed interface design for web and mobile. We map the journey, resolve the hierarchy and design every state, then hand over a system your engineers can build from without guessing.',
    deliverables: ['UX research & audits', 'Wireframes', 'UI design', 'Interactive prototypes'],
    image: pixel02,
    imageAlt: 'Pixel course catalogue interface',
  },
  {
    id: 'brand',
    title: 'Brand & visual identity',
    short: 'Identities that hold together across every channel.',
    description:
      'Logo, typography, colour and visual language, designed as one system. The result is a brand that looks as deliberate on a business card as it does in a product interface.',
    deliverables: ['Logo & identity', 'Typography & colour', 'Brand guidelines', 'Marketing assets'],
    image: ibCover,
    imageAlt: 'IB portfolio with bold typographic branding on a phone',
  },
  {
    id: 'launch',
    title: 'Zero-to-launch for startups',
    short: 'One team from first idea to public release, and beyond.',
    description:
      'For founders who need a brand, a product and a site together. One team carries the work from concept to public launch, then stays on for maintenance, performance tuning and the next release.',
    deliverables: ['MVP scoping', 'Brand + product + website', 'Launch support', 'Ongoing management'],
    image: allert02,
    imageAlt: 'ALLERT agency website homepage',
  },
]
