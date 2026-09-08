'use client'

import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useId, useRef, useState } from 'react'

import Logo from '@/components/brand/Logo'
import { navLinks, site } from '@/content/site'

const EASE = [0.16, 1, 0.3, 1] as const

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  const path = href.split('#')[0]
  return path !== '/' && path !== '' && pathname.startsWith(path)
}

export default function Header() {
  const pathname = usePathname()
  const reduce = useReducedMotion()
  const menuId = useId()
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const lastY = useRef(0)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      setHidden(y > 160 && y > lastY.current && !open)
      lastY.current = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [open])

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    close()
  }, [pathname, close])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close()
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, close])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-fg focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>

      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        animate={{ y: hidden ? '-100%' : '0%' }}
        transition={{ duration: reduce ? 0 : 0.5, ease: EASE }}
      >
        <div
          className={`transition-colors duration-500 ${
            scrolled || open ? 'bg-ink/80 backdrop-blur-md border-b border-line' : 'border-b border-transparent'
          }`}
        >
          <nav aria-label="Primary" className="container-x flex h-16 items-center justify-between md:h-[76px]">
            <Link href="/" aria-label="Pirmada — home" className="relative z-[60] rounded-sm">
              <Logo />
            </Link>

            <ul className="hidden items-center gap-9 md:flex">
              {navLinks.map((item) => {
                const active = isActive(pathname, item.href)
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? 'page' : undefined}
                      className={`link-quiet relative py-2 text-[15px] ${active ? 'text-fg' : ''}`}
                    >
                      {item.label}
                      {active ? <span aria-hidden="true" className="absolute -bottom-0.5 left-0 h-px w-full bg-accent" /> : null}
                    </Link>
                  </li>
                )
              })}
            </ul>

            <div className="hidden md:block">
              {pathname === '/contact' ? (
                <a href={`mailto:${site.email}`} className="btn btn-secondary btn-sm">
                  {site.email}
                </a>
              ) : (
                <Link href="/contact" className="btn btn-primary btn-sm">
                  Start a project
                </Link>
              )}
            </div>

            <button
              ref={toggleRef}
              type="button"
              className="relative z-[60] -mr-2 flex h-11 w-11 items-center justify-center rounded-full text-fg md:hidden"
              aria-expanded={open}
              aria-controls={menuId}
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="relative block h-3 w-6">
                <span
                  className={`absolute left-0 top-0 block h-px w-full bg-current transition-transform duration-300 ${
                    open ? 'translate-y-[5.5px] rotate-45' : ''
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 block h-px w-full bg-current transition-transform duration-300 ${
                    open ? '-translate-y-[5.5px] -rotate-45' : ''
                  }`}
                />
              </span>
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={menuId}
            className="fixed inset-0 z-40 flex flex-col bg-ink pt-24 md:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            <div className="bg-grid-fine mask-fade-b pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
            <nav aria-label="Mobile" className="container-x relative flex flex-1 flex-col">
              <ul className="flex flex-col border-t border-line">
                {navLinks.map((item, i) => (
                  <motion.li
                    key={item.href}
                    className="border-b border-line"
                    initial={reduce ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: EASE, delay: 0.05 + i * 0.06 }}
                  >
                    <Link
                      href={item.href}
                      onClick={close}
                      className="flex items-baseline justify-between py-5 text-[2rem] font-medium tracking-tight text-fg"
                    >
                      <span>{item.label}</span>
                      <span className="eyebrow">0{i + 1}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="mt-auto flex flex-col gap-6 pb-10"
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link href="/contact" onClick={close} className="btn btn-primary btn-lg w-full">
                  Start a project
                </Link>
                <div className="flex flex-col gap-2 text-small text-fg-muted">
                  <a className="link-quiet" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                  <a className="link-quiet" href={site.phoneHref}>
                    {site.phone}
                  </a>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
