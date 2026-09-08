'use client'

import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  /** Vertical travel distance in px. */
  y?: number
  once?: boolean
  as?: 'div' | 'section' | 'li' | 'span' | 'article' | 'header' | 'footer'
}

export default function Reveal({ children, className, delay = 0, y = 24, once = true, as = 'div' }: RevealProps) {
  const reduce = useReducedMotion()
  const Tag = motion[as]

  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </Tag>
  )
}
