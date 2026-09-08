import Reveal from '@/components/motion/Reveal'
import TextReveal from '@/components/motion/TextReveal'
import { ButtonLink } from '@/components/ui/Button'

const principles = [
  {
    title: 'Design and engineering in one room',
    text: 'The people who design the interface also ship it. Nothing gets lost in a hand-off, and the details that make software feel premium survive to launch.',
  },
  {
    title: 'Performance is part of the design',
    text: 'Fast load, stable layout, sharp imagery on every screen. We treat Core Web Vitals and accessibility as design constraints from day one.',
  },
  {
    title: 'Built for your team to run',
    text: 'Clear content models, editable CMS, documented systems. You should be able to publish, update and grow without calling us for every change.',
  },
  {
    title: 'Honest scope, no theatre',
    text: 'We say what a project will take, and we show work early. You see real screens on real content, not a deck of promises.',
  },
]

export default function Principles() {
  return (
    <section aria-labelledby="principles-title" className="relative overflow-hidden border-t border-line bg-surface">
      <div className="bg-grid-fine pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]" aria-hidden="true" />
      <div className="container-x section-y relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow flex items-center gap-3">
                <span className="inline-block h-px w-6 bg-line-strong" aria-hidden="true" />
                Why Pirmada
              </p>
            </Reveal>
            <TextReveal
              as="h2"
              id="principles-title"
              text="A studio that behaves like a product team."
              className="mt-6 max-w-[14ch] text-h2"
            />
            <Reveal delay={0.1} className="mt-6 max-w-[44ch] text-body-lg text-fg-muted">
              Agencies sell hours. We take responsibility for the outcome: a product that looks right, works everywhere and is
              ready for what comes after launch.
            </Reveal>
            <Reveal delay={0.15} className="mt-10">
              <ButtonLink href="/about" variant="secondary" arrow>
                About the studio
              </ButtonLink>
            </Reveal>
          </div>

          <dl className="lg:col-span-7 lg:pl-8">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06} className="grid gap-3 border-t border-line py-8 md:grid-cols-[3rem_1fr] md:gap-6 last:border-b">
                <dt className="contents">
                  <span className="eyebrow pt-1.5">0{i + 1}</span>
                  <span className="text-h4 text-fg">{p.title}</span>
                </dt>
                <dd className="text-body text-fg-muted md:col-start-2">{p.text}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
