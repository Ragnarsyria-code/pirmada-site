'use client'

import { motion, useReducedMotion } from 'motion/react'
import type { ElementType } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const

type TextRevealProps = {
  text: string
  as?: ElementType
  className?: string
  id?: string
  delay?: number
  stagger?: number
  /** Animate when scrolled into view (default) or immediately on mount. */
  trigger?: 'view' | 'mount'
}

/**
 * Word-by-word masked reveal. Each word slides up from behind a clip so the
 * headline reads as a single composed motion rather than a fade.
 */
export default function TextReveal({
  text,
  as: Tag = 'p',
  className,
  id,
  delay = 0,
  stagger = 0.045,
  trigger = 'view',
}: TextRevealProps) {
  const reduce = useReducedMotion()
  const words = text.split(' ')

  if (reduce) {
    return (
      <Tag id={id} className={className}>
        {text}
      </Tag>
    )
  }

  const animate = trigger === 'mount' ? { animate: 'show' as const } : { whileInView: 'show' as const }

  return (
    <Tag id={id} className={className} aria-label={text}>
      <motion.span
        aria-hidden="true"
        initial="hidden"
        {...animate}
        viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        transition={{ staggerChildren: stagger, delayChildren: delay }}
        className="inline"
      >
        {words.map((word, i) => (
          <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.22em] -mb-[0.22em] pt-[0.06em] -mt-[0.06em] align-bottom">
            <motion.span
              className="inline-block will-change-transform"
              variants={{
                hidden: { y: '110%' },
                show: { y: 0, transition: { duration: 0.9, ease: EASE } },
              }}
            >
              {word}
            </motion.span>
            {i < words.length - 1 ? '\u00A0' : null}
          </span>
        ))}
      </motion.span>
    </Tag>
  )
}
