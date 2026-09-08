export const SITE_URL = 'https://www.pirmada.com'

export const site = {
  name: 'Pirmada',
  legalName: 'PIRMADA',
  tagline: 'Design and development studio for serious digital products.',
  description:
    'Pirmada is a design and development studio building websites, apps and brand identities for startups and established businesses. Strategy-led design, engineered to perform.',
  email: 'official@pirmada.com',
  phone: '+971 54 520 0134',
  phoneHref: 'tel:+971545200134',
  whatsappHref: 'https://api.whatsapp.com/send?phone=971508190026',
  twitterHandle: '@PirmadaOfficial',
  social: [
    { label: 'X / Twitter', href: 'https://x.com/PirmadaOfficial' },
    { label: 'WhatsApp', href: 'https://api.whatsapp.com/send?phone=971508190026' },
  ],
} as const

export const navLinks = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const
