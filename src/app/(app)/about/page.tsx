import type { Metadata } from 'next'
import Image from 'next/image'
import { Link } from 'next-view-transitions'

import allert03 from '@/assets/work/allert-03.jpg'
import penta02 from '@/assets/work/penta-02.jpg'
import Clients from '@/components/home/Clients'
import Reveal from '@/components/motion/Reveal'
import TextReveal from '@/components/motion/TextReveal'
import WebPageJsonLd from '@/components/seo/WebPageJsonLd'
import SectionHeader from '@/components/ui/SectionHeader'
import { services } from '@/content/services'

const title = 'About'
const description =
  'Pirmada is a UAE-based design and development studio working with founders and established businesses worldwide. One team for strategy, design, engineering and launch.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/about' },
  openGraph: { url: '/about', title: `${title} — Pirmada`, description, images: [{ url: '/og-about.png', width: 1200, height: 630, alt: 'About Pirmada' }] },
  twitter: { title: `${title} — Pirmada`, description, images: ['/og-about.png'] },
}

const beliefs = [
  {
    title: 'Clarity is the first feature.',
    text: 'If a visitor cannot tell what a product does within seconds, nothing else we build matters. We design hierarchy before we design decoration.',
  },
  {
    title: 'Craft shows in the details nobody lists.',
    text: 'Type that sets well, images that stay sharp, a form that tells you what went wrong. Premium is the sum of a thousand small decisions made on purpose.',
  },
  {
    title: 'Good engineering is invisible.',
    text: 'The product should feel fast and steady on a mid-range phone on a weak connection. Performance, accessibility and maintainability are not extras.',
  },
]

const engagements = [
  {
    name: 'Defined project',
    for: 'A website, store, portal or app with a clear scope.',
    text: 'Fixed deliverables, an agreed timeline and a single team from discovery to launch.',
  },
  {
    name: 'Zero to launch',
    for: 'Startups that need brand, product and website together.',
    text: 'We build the whole first impression as one system, then support the release and the iterations after it.',
  },
  {
    name: 'Ongoing partnership',
    for: 'Businesses with a live product that needs to keep improving.',
    text: 'Maintenance, performance tuning, refactoring and new features on a steady cadence.',
  },
]

export default function AboutPage() {
  return (
    <>
      <WebPageJsonLd name={`${title} — Pirmada`} description={description} path="/about" />

      <section aria-labelledby="about-heading" className="container-x pt-32 md:pt-44">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="eyebrow flex items-center gap-3">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                About Pirmada
              </p>
            </Reveal>
            <TextReveal
              as="h1"
              id="about-heading"
              trigger="mount"
              delay={0.1}
              text="A design and development studio with a product team's standards."
              className="mt-8 max-w-[18ch] text-h1"
            />
          </div>
          <Reveal delay={0.4} className="flex flex-col justify-end lg:col-span-4">
            <p className="max-w-[40ch] text-body-lg text-fg-muted">
              We are based in the UAE and work with founders and established businesses worldwide. Strategy, design and
              engineering sit in one room, so what we promise in a proposal is what ships.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 md:mt-24 md:grid-cols-12 md:gap-6">
          <Reveal className="frame aspect-[16/10] md:col-span-8">
            <Image
              src={penta02}
              alt="Penta Real Estate section design with investment advantages laid out in a clean grid"
              fill
              priority
              sizes="(min-width: 1536px) 940px, (min-width: 768px) 62vw, 92vw"
              className="object-cover object-top"
            />
          </Reveal>
          <Reveal delay={0.1} className="frame aspect-[16/10] md:col-span-4 md:aspect-auto">
            <Image
              src={allert03}
              alt="ALLERT case studies page with numbered service list"
              fill
              sizes="(min-width: 1536px) 450px, (min-width: 768px) 30vw, 92vw"
              className="object-cover object-left-top"
            />
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="beliefs-title" className="container-x section-y">
        <SectionHeader id="beliefs-title" eyebrow="What we believe" title="Three convictions behind every project." />
        <ol className="mt-16 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:mt-24 lg:grid-cols-3">
          {beliefs.map((b, i) => (
            <Reveal as="li" key={b.title} delay={i * 0.08} className="flex flex-col gap-12 bg-ink p-7 md:p-9 lg:min-h-[24rem]">
              <span className="eyebrow">0{i + 1}</span>
              <div className="mt-auto">
                <h3 className="text-h3">{b.title}</h3>
                <p className="mt-4 text-body text-fg-muted">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <section aria-labelledby="engagements-title" className="border-t border-line bg-surface">
        <div className="container-x section-y">
          <SectionHeader id="engagements-title" eyebrow="Ways to work together" title="Three ways an engagement can run.">
            Most clients arrive with one of three situations. Each has a different rhythm, but all of them get the same
            team and the same standard.
          </SectionHeader>
          <div className="mt-16 md:mt-24">
            {engagements.map((e, i) => (
              <Reveal
                key={e.name}
                delay={i * 0.06}
                className="grid gap-4 border-t border-line py-8 last:border-b md:grid-cols-12 md:gap-8 md:py-10"
              >
                <span className="eyebrow md:col-span-1">0{i + 1}</span>
                <h3 className="text-h3 md:col-span-4">{e.name}</h3>
                <div className="md:col-span-7 md:pt-1">
                  <p className="text-body text-fg">{e.for}</p>
                  <p className="mt-2 text-body text-fg-muted">{e.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="capabilities-title" className="border-t border-line">
        <div className="container-x section-y">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow flex items-center gap-3">
                  <span className="inline-block h-px w-6 bg-line-strong" aria-hidden="true" />
                  Capabilities
                </p>
              </Reveal>
              <TextReveal as="h2" id="capabilities-title" text="What we take on." className="mt-6 text-h2" />
              <Reveal delay={0.1} className="mt-6 max-w-[40ch] text-body-lg text-fg-muted">
                From brand foundations to production code. The full breakdown, with deliverables for each, lives on the
                homepage.
              </Reveal>
              <Reveal delay={0.15} className="mt-8">
                <Link href="/#services" className="link-underline text-body">
                  Explore services
                </Link>
              </Reveal>
            </div>
            <ul className="lg:col-span-7" role="list">
              {services.map((s, i) => (
                <Reveal as="li" key={s.id} delay={i * 0.05} className="flex items-baseline gap-6 border-t border-line py-5 last:border-b">
                  <span className="eyebrow">0{i + 1}</span>
                  <span className="text-h4 text-fg">{s.title}</span>
                  <span className="ml-auto hidden text-small text-fg-dim sm:block">{s.short}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Clients />
    </>
  )
}
