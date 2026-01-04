
/**
 * @file Shared page header component with title and description.
 */

import type { ReactNode } from 'react'

/**
 * Props for the PageHeader component.
 */
interface PageHeaderProps {
  /** Main page title. */
  title: string
  /** Optional short description or subtitle. */
  description?: ReactNode
  /** Optional eyebrow label above the title. */
  eyebrow?: string
}

/**
 * Generic page header that keeps titles consistent across routes.
 */
export function PageHeader({ title, description, eyebrow }: PageHeaderProps) {
  return (
    <header className="mb-6 space-y-3 md:mb-8">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-emerald-600">
          {eyebrow}
        </p>
      )}
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
        {title}
      </h1>
      {description && (
        <div className="max-w-2xl text-sm text-slate-600 md:text-base">
          {description}
        </div>
      )}
    </header>
  )
}
