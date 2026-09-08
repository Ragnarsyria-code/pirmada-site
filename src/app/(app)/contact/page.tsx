import type { Metadata } from 'next'

import ContactForm from '@/components/contact/ContactForm'
import Reveal from '@/components/motion/Reveal'
import TextReveal from '@/components/motion/TextReveal'
import WebPageJsonLd from '@/components/seo/WebPageJsonLd'
import { site } from '@/content/site'

const title = 'Contact'
const description =
  'Tell Pirmada about your project. Share what you are building and we will come back with a clear point of view on scope, approach and next steps.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/contact' },
  openGraph: { url: '/contact', title: `${title} — Pirmada`, description },
  twitter: { title: `${title} — Pirmada`, description },
}

const expectations = [
  { step: 'Reply', text: 'A personal reply, not an autoresponder.' },
  { step: 'Call', text: 'A short conversation about goals, timeline and budget.' },
  { step: 'Proposal', text: 'A written scope with approach, deliverables and price.' },
]

export default function ContactPage() {
  return (
    <>
      <WebPageJsonLd name={`${title} — Pirmada`} description={description} path="/contact" />

      <section aria-labelledby="contact-heading" className="container-x pt-32 pb-24 md:pt-44 md:pb-40">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow flex items-center gap-3">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                Start a project
              </p>
            </Reveal>
            <TextReveal
              as="h1"
              id="contact-heading"
              trigger="mount"
              delay={0.1}
              text="Tell us what you are building."
              className="mt-8 max-w-[12ch] text-h1"
            />
            <Reveal delay={0.4} className="mt-8 max-w-[40ch] text-body-lg text-fg-muted">
              A few lines is enough to start. We will come back with questions, a point of view and a clear next step.
            </Reveal>

            <Reveal delay={0.5} className="mt-12">
              <p className="eyebrow mb-5">What happens next</p>
              <ol className="flex flex-col">
                {expectations.map((e, i) => (
                  <li key={e.step} className="grid grid-cols-[2rem_6rem_1fr] items-baseline gap-4 border-t border-line py-4 text-small last:border-b">
                    <span className="eyebrow">0{i + 1}</span>
                    <span className="text-fg">{e.step}</span>
                    <span className="text-fg-muted">{e.text}</span>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={0.6} className="mt-12">
              <p className="eyebrow mb-5">Prefer to talk directly</p>
              <ul className="flex flex-col gap-3 text-body">
                <li>
                  <a href={`mailto:${site.email}`} className="link-underline">
                    {site.email}
                  </a>
                </li>
                <li>
                  <a href={site.phoneHref} className="link-underline">
                    {site.phone}
                  </a>
                </li>
                <li>
                  <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="link-underline">
                    WhatsApp
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.3} className="lg:col-span-7 lg:pl-8">
            <div className="rounded-xl border border-line bg-surface/60 p-6 md:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
