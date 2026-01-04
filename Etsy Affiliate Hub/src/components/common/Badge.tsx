
/**
 * @file Simple badge/pill component for statuses and tags.
 */

import type { ReactNode } from 'react'

/**
 * Props for the Badge component.
 */
interface BadgeProps {
  /** Badge contents. */
  children: ReactNode
  /** Visual style for the badge. */
  variant?: 'default' | 'success' | 'warning'
}

/**
 * Pill-style badge used for vetting statuses, tags, and highlights.
 */
export function Badge({ children, variant = 'default' }: BadgeProps) {
  const variants: Record<NonNullable<BadgeProps['variant']>, string> = {
    default: 'bg-slate-100 text-slate-700',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-100',
    warning: 'bg-amber-50 text-amber-800 border border-amber-100'
  }

  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium ${variants[variant]}`}>
      {children}
    </span>
  )
}
