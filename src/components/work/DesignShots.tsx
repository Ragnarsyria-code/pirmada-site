import Image from 'next/image'

import Reveal from '@/components/motion/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { designShots } from '@/content/projects'

const layout = [
  'md:col-span-7 aspect-[16/10]',
  'md:col-span-5 aspect-[4/5] md:aspect-auto',
  'md:col-span-4 aspect-[4/3]',
  'md:col-span-4 aspect-[4/3]',
  'md:col-span-4 aspect-[4/3]',
  'md:col-span-12 aspect-[21/9]',
]

export default function DesignShots() {
  return (
    <section aria-labelledby="shots-title" className="border-t border-line">
      <div className="container-x section-y">
        <SectionHeader id="shots-title" eyebrow="Interface design" title="Interfaces designed for brands, courses and studios.">
          A selection of UI/UX work: landing pages, product surfaces and brand-led interfaces designed for clients and
          partners across creative and education sectors.
        </SectionHeader>

        <ul className="mt-16 grid gap-4 md:mt-24 md:grid-cols-12 md:gap-6" role="list">
          {designShots.map((s, i) => (
            <Reveal as="li" key={`${s.title}-${i}`} delay={(i % 3) * 0.08} className={`frame group ${layout[i]}`}>
              <Image
                src={s.src}
                alt={s.alt}
                fill
                sizes={i === 5 ? '(min-width: 1536px) 1408px, 92vw' : i < 2 ? '(min-width: 1024px) 50vw, 92vw' : '(min-width: 768px) 33vw, 92vw'}
                className="object-cover object-top transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-gradient-to-t from-ink/80 to-transparent p-4 md:p-5">
                <span className="text-small font-medium text-fg">{s.title}</span>
                <span className="eyebrow text-fg-muted">{s.discipline}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
