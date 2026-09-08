import type { MetadataRoute } from 'next'

import { site } from '@/content/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.legalName} — Design & development studio`,
    short_name: site.legalName,
    description: site.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#060607',
    theme_color: '#060607',
    icons: [
      { src: '/icon1.png', sizes: '96x96', type: 'image/png' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
      { src: '/icon0.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
  }
}
