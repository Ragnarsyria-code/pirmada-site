import type { Metadata } from 'next'

import Reveal from '@/components/motion/Reveal'
import TextReveal from '@/components/motion/TextReveal'
import WebPageJsonLd from '@/components/seo/WebPageJsonLd'
import DesignShots from '@/components/work/DesignShots'
import ProjectFeature from '@/components/work/ProjectFeature'
import { projects } from '@/content/projects'

const title = 'Work'
const description =
  'Selected projects by Pirmada: websites, property portals, e-commerce stores, mobile apps and interface design for clients in media, real estate, technology and education.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/work' },
  openGraph: { url: '/work', title: `${title} — Pirmada`, description },
  twitter: { title: `${title} — Pirmada`, description },
}

export default function WorkPage() {
  return (
    <>
      <WebPageJsonLd name={`${title} — Pirmada`} description={description} path="/work" />

      <section aria-labelledby="work-heading" className="container-x pt-32 md:pt-44">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="eyebrow flex items-center gap-3">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                Work
              </p>
            </Reveal>
            <TextReveal
              as="h1"
              id="work-heading"
              trigger="mount"
              delay={0.1}
              text="Work that has to perform, not just look the part."
              className="mt-8 max-w-[16ch] text-h1"
            />
          </div>
          <Reveal delay={0.4} className="flex flex-col justify-end gap-6 lg:col-span-4">
            <p className="max-w-[40ch] text-body-lg text-fg-muted">
              Websites, portals, stores and apps for clients in media, real estate, technology and education. Each one
              designed and engineered by the same team.
            </p>
            <dl className="flex gap-10 text-small">
              <div>
                <dt className="eyebrow mb-2">Projects</dt>
                <dd className="text-fg">{String(projects.length).padStart(2, '0')} featured</dd>
              </div>
              <div>
                <dt className="eyebrow mb-2">Sectors</dt>
                <dd className="text-fg">Media · Property · Retail · Social</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <div className="mt-16 md:mt-24">
          {projects.map((p, i) => (
            <ProjectFeature key={p.slug} project={p} index={i} flip={i % 2 === 1} priority={i === 0} />
          ))}
        </div>
      </section>

      <DesignShots />
    </>
  )
}
