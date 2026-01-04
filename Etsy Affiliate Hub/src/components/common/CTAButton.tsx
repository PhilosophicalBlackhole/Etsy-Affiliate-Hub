
/**
 * @file Shared call-to-action button component with consistent styling.
 */

import type { ButtonHTMLAttributes, ReactNode } from 'react'

/**
 * Props for the CTAButton component.
 */
export interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Label or child content of the button. */
  children: ReactNode
  /** Whether to render a secondary-styled button. */
  variant?: 'primary' | 'secondary' | 'ghost'
}

/**
 * Reusable call-to-action button with primary and secondary variants.
 */
export function CTAButton({ children, variant = 'primary', className = '', ...rest }: CTAButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-60'

  const variants: Record<NonNullable<CTAButtonProps['variant']>, string> = {
    primary: 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm',
    secondary: 'bg-slate-900 text-white hover:bg-slate-800 shadow-sm',
    ghost:
      'border border-slate-200 bg-white text-slate-800 hover:bg-slate-100'
  }

  return (
    <button type="button" className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  )
}
