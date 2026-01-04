
/**
 * @file Grid layout for rendering multiple CreatorCard components.
 */

import type { Creator } from '../../data/creators'
import { CreatorCard } from './CreatorCard'

/**
 * Props for the CreatorGrid component.
 */
interface CreatorGridProps {
  /** List of creators to render. */
  creators: Creator[]
}

/**
 * Responsive grid for displaying creator cards.
 */
export function CreatorGrid({ creators }: CreatorGridProps) {
  if (!creators.length) {
    return (
      <p className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-6 text-center text-sm text-slate-600">
        No creators match your filters yet. Try broadening your search keywords or selecting
        additional categories.
      </p>
    )
  }

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {creators.map((creator) => (
        <CreatorCard key={creator.id} creator={creator} />
      ))}
    </div>
  )
}
