import { SITE_URL, site } from '@/content/site'

type Props = {
  name: string
  description: string
  path: string
}

export default function WebPageJsonLd({ name, description, path }: Props) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: `${SITE_URL}${path}`,
    inLanguage: 'en',
    isPartOf: { '@type': 'WebSite', name: site.legalName, url: SITE_URL },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
