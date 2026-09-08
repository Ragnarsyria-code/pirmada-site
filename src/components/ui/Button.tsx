import { Link } from 'next-view-transitions'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'accent' | 'secondary'
type Size = 'sm' | 'md' | 'lg'

const sizeClass: Record<Size, string> = { sm: 'btn-sm', md: '', lg: 'btn-lg' }

function classes(variant: Variant, size: Size, className?: string) {
  return ['btn', `btn-${variant}`, sizeClass[size], className].filter(Boolean).join(' ')
}

export function ArrowIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path d="M3 8h9.5M8.5 3.5 13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

type ButtonLinkProps = {
  href: string
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
  arrow?: boolean
  external?: boolean
}

export function ButtonLink({ href, children, variant = 'primary', size = 'md', className, arrow, external }: ButtonLinkProps) {
  const cls = classes(variant, size, className)
  const inner = (
    <>
      <span>{children}</span>
      {arrow ? (
        <span className="btn-icon">
          <ArrowIcon />
        </span>
      ) : null}
    </>
  )
  if (external || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return (
      <a href={href} className={cls} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
        {inner}
      </a>
    )
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  )
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  size?: Size
  arrow?: boolean
}

export function Button({ children, variant = 'primary', size = 'md', className, arrow, ...rest }: ButtonProps) {
  return (
    <button className={classes(variant, size, className)} {...rest}>
      <span>{children}</span>
      {arrow ? (
        <span className="btn-icon">
          <ArrowIcon />
        </span>
      ) : null}
    </button>
  )
}
