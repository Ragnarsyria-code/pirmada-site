'use client'

import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'
import { useRef } from 'react'

import scicastCover from '@/assets/work/scicast-cover.jpg'
import syncCover from '@/assets/work/sync-cover.jpg'
import TextReveal from '@/components/motion/TextReveal'
import { ButtonLink } from '@/components/ui/Button'

const EASE = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yBack = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60])
  const yFront = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -140])

  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: EASE, delay },
  })

  return (
    <section ref={ref} aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="bg-grid-fine mask-fade-b pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-accent/[0.07] blur-[120px]"
      />

      <div className="container-x relative pt-32 md:pt-44">
        <motion.p className="eyebrow flex items-center gap-3" {...fade(0.05)}>
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
          Design &amp; development studio
        </motion.p>

        <TextReveal
          as="h1"
          trigger="mount"
          delay={0.15}
          text="Digital products designed and engineered to move businesses forward."
          className="mt-8 max-w-[26ch] text-display"
        />

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-8 md:mt-14">
          <div className="lg:col-span-7">
            <motion.p className="max-w-[46ch] text-body-lg text-fg-muted" {...fade(0.6)}>
              Pirmada is a design and development studio. We partner with founders and established teams to design,
              build and launch websites, apps and brands that hold up to scrutiny.
            </motion.p>

            <motion.div className="mt-8 flex flex-wrap items-center gap-4" {...fade(0.75)}>
              <ButtonLink href="/contact" variant="accent" size="lg" arrow>
                Start a project
              </ButtonLink>
              <ButtonLink href="/work" variant="secondary" size="lg">
                See selected work
              </ButtonLink>
            </motion.div>
          </div>

          <motion.dl
            className="grid grid-cols-2 gap-x-6 gap-y-8 self-end text-small sm:grid-cols-4 lg:col-span-5 lg:grid-cols-2"
            {...fade(0.9)}
          >
            {[
              ['Disciplines', 'Web · Apps · UI/UX · Brand'],
              ['Clients', 'Startups to established brands'],
              ['Based in', 'UAE · Working worldwide'],
              ['Contact', 'official@pirmada.com'],
            ].map(([k, v]) => (
              <div key={k} className="border-t border-line pt-4">
                <dt className="eyebrow mb-2">{k}</dt>
                <dd className="text-fg">{v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Work stage */}
        <div className="relative mt-14 h-[64vw] max-h-[640px] min-h-[240px] md:mt-24 md:h-[52vw]">
          <motion.div
            className="frame absolute left-0 top-0 w-[88%] md:w-[70%]"
            style={{ y: yBack }}
            initial={reduce ? false : { opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.5 }}
          >
            <Image
              src={scicastCover}
              alt="SciCast article platform shown on a tablet"
              priority
              sizes="(min-width: 1536px) 1075px, (min-width: 768px) 70vw, 88vw"
              className="aspect-[16/10] h-auto w-full object-cover"
            />
          </motion.div>

          <motion.div
            className="frame absolute bottom-0 right-0 w-[54%] shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)] md:w-[38%]"
            style={{ y: yFront }}
            initial={reduce ? false : { opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.75 }}
          >
            <Image
              src={syncCover}
              alt="SYNC social app screens"
              priority
              sizes="(min-width: 1536px) 584px, (min-width: 768px) 38vw, 54vw"
              className="aspect-[4/3] h-auto w-full object-cover"
            />
          </motion.div>

          <motion.p
            className="eyebrow absolute bottom-2 left-0 hidden items-center gap-3 md:flex"
            {...fade(1.1)}
            aria-hidden="true"
          >
            <span className="inline-block h-px w-10 bg-line-strong" />
            Selected work · SciCast, SYNC
          </motion.p>
        </div>
      </div>
    </section>
  )
}
