// lib/utils.ts
import { clsx } from 'clsx'
import { cva, type VariantProps } from 'class-variance-authority'

export function cn(...inputs: (string | undefined)[]) {
  return clsx(inputs)
}

export const animatedLinkVariants = cva(
  'relative font-base text-lg inline-flex items-center justify-center overflow-hidden no-underline',
  {
    variants: {
      variant: {
        primary: 'text-black',
        secondary: 'text-white',
        ghost: 'text-white underline',
        link: 'text-blue-500 underline hover:text-blue-700',
        ripple: ' ', // <--- add ripple
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)

export const backgroundVariants = cva(
  'pointer-events-none z-[-1] absolute inset-0 transition-colors duration-200',
  {
    variants: {
      variant: {
        primary: 'bg-white rounded-sm',
        secondary: 'bg-black/40 backdrop-blur-sm rounded-sm',
        ghost: 'bg-transparent',
        link: 'bg-transparent',
        ripple: 'rounded-full',

      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)

export type AnimatedLinkVariantProps = VariantProps<typeof animatedLinkVariants>
