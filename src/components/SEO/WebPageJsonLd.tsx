
'use client'

export function WebPageJsonLd({
  name,
  description,
  url,
}: {
  name: string
  description: string
  url: string
}) {
  return (
    <script
      type="application/ld+json"
      // Reinforce your chosen description for crawlers
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name,
          description,
          url,
        }),
      }}
    />
  )
}
