'use client'

import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import Image from 'next/image'
import { useId, useState } from 'react'

import Reveal from '@/components/motion/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { services } from '@/content/services'

const EASE = [0.16, 1, 0.3, 1] as const

export default function ServicesList() {
  const reduce = useReducedMotion()
  const baseId = useId()
  const [active, setActive] = useState(0)
  const [expanded, setExpanded] = useState<number | null>(0)

  return (
    <section id="services" aria-labelledby="services-title" className="border-t border-line">
      <div className="container-x section-y">
        <SectionHeader id="services-title" eyebrow="What we do" title="Five disciplines. One team from first sketch to shipped product.">
          We take on the whole problem, from positioning and interface to the code that ships. Fewer hand-offs, fewer
          compromises, and a result that feels like it was made by one hand.
        </SectionHeader>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-8 md:mt-24">
          <ul className="lg:col-span-7" role="list">
            {services.map((s, i) => {
              const isOpen = expanded === i
              const panelId = `${baseId}-panel-${i}`
              return (
                <Reveal as="li" key={s.id} delay={i * 0.05} className="border-t border-line last:border-b">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => {
                        setExpanded(isOpen ? null : i)
                        setActive(i)
                      }}
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      className="group flex w-full items-start gap-5 py-6 text-left md:gap-8 md:py-7"
                    >
                      <span className="eyebrow pt-2 transition-colors group-hover:text-accent">0{i + 1}</span>
                      <span className="flex-1">
                        <span
                          className={`block text-h3 transition-colors duration-300 ${
                            active === i ? 'text-fg' : 'text-fg-muted group-hover:text-fg'
                          }`}
                        >
                          {s.title}
                        </span>
                        <span className="mt-2 block text-small text-fg-dim">{s.short}</span>
                      </span>
                      <span
                        aria-hidden="true"
                        className={`mt-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-fg transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isOpen ? 'rotate-45 border-fg' : ''
                        }`}
                      >
                        <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none">
                          <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
                        </svg>
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        id={panelId}
                        key="panel"
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <div className="grid gap-6 pb-8 pl-10 md:grid-cols-2 md:pl-14">
                          <p className="text-body text-fg-muted">{s.description}</p>
                          <ul className="flex flex-col gap-2 text-small text-fg-muted">
                            {s.deliverables.map((d) => (
                              <li key={d} className="flex items-center gap-3">
                                <span className="h-px w-3 bg-accent" aria-hidden="true" />
                                {d}
                              </li>
                            ))}
                          </ul>
                          <div className="frame aspect-[16/10] lg:hidden">
                            <Image src={s.image} alt={s.imageAlt} fill sizes="92vw" className="object-cover" />
                          </div>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </Reveal>
              )
            })}
          </ul>

          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28">
              <div className="frame aspect-[4/5]">
                {services.map((s, i) => {
                  const isCurrent = i === active
                  return (
                    <motion.div
                      key={s.id}
                      className="absolute inset-0"
                      aria-hidden={!isCurrent}
                      initial={false}
                      animate={reduce ? { opacity: isCurrent ? 1 : 0 } : { opacity: isCurrent ? 1 : 0, scale: isCurrent ? 1 : 1.04 }}
                      transition={{ duration: 0.7, ease: EASE }}
                      style={{ zIndex: isCurrent ? 1 : 0 }}
                    >
                      <Image
                        src={s.image}
                        alt={isCurrent ? s.imageAlt : ''}
                        fill
                        sizes="(min-width: 1536px) 570px, 40vw"
                        className="object-cover"
                      />
                    </motion.div>
                  )
                })}
                <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between p-5">
                  <span className="eyebrow rounded-full border border-line bg-ink/60 px-3 py-2 text-fg backdrop-blur-md">
                    0{active + 1} / 0{services.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
