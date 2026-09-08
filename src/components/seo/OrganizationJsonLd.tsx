import { SITE_URL, site } from '@/content/site'

export default function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/icon1.png`,
    description: site.description,
    email: site.email,
    telephone: site.phone.replace(/\s/g, ''),
    sameAs: site.social.map((s) => s.href),
    knowsAbout: ['Web design', 'Web development', 'UI/UX design', 'Mobile app development', 'Brand identity'],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
