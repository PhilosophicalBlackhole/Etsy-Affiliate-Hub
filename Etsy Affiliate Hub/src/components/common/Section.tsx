
/**
 * @file Layout helper components for consistent page sections.
 */

import type { ReactNode } from 'react'

/**
 * Properties for the Section wrapper component.
 */
interface SectionProps {
  /** Optional section id for anchor links. */
  id?: string
  /** Child nodes to render in the section. */
  children: ReactNode
  /** Background style modifier. */
  variant?: 'default' | 'subtle' | 'emphasis'
  /** Optional additional class names. */
  className?: string
}

/**
 * Page section wrapper that enforces padding and max-width constraints.
 */
export function Section({
  id,
  children,
  variant = 'default',
  className = ''
}: SectionProps) {
  const backgrounds: Record<NonNullable<SectionProps['variant']>, string> = {
    default: 'bg-slate-50',
    subtle: 'bg-white',
    emphasis: 'bg-slate-900 text-slate-50'
  }

  return (
    <section id={id} className={`${backgrounds[variant]} ${className}`}>
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14 md:px-6">
        {children}
      </div>
    </section>
  )
}
