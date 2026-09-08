import type { ReactNode } from 'react'

import Reveal from '@/components/motion/Reveal'
import TextReveal from '@/components/motion/TextReveal'

type Props = {
  eyebrow: string
  title: string
  children?: ReactNode
  /** Optional right-aligned action (e.g. a link). */
  action?: ReactNode
  id?: string
  titleClassName?: string
}

export default function SectionHeader({ eyebrow, title, children, action, id, titleClassName = 'text-h2' }: Props) {
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
      <Reveal className="lg:col-span-3">
        <p className="eyebrow flex items-center gap-3">
          <span className="inline-block h-px w-6 bg-line-strong" aria-hidden="true" />
          {eyebrow}
        </p>
      </Reveal>
      <div className="lg:col-span-9">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <TextReveal as="h2" id={id} text={title} className={`max-w-[22ch] ${titleClassName}`} />
          {action ? <Reveal className="shrink-0">{action}</Reveal> : null}
        </div>
        {children ? (
          <Reveal delay={0.1} className="mt-6 max-w-[58ch] text-body-lg text-fg-muted">
            {children}
          </Reveal>
        ) : null}
      </div>
    </div>
  )
}
