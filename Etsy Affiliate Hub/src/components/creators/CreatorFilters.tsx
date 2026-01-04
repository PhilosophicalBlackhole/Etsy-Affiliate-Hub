
/**
 * @file Search and filter controls used on the Creator Discovery page.
 */

import type { ChangeEvent } from 'react'

/**
 * Sort options available on the discovery page.
 */
export type SortOption = 'sales' | 'rating' | 'recent'

/**
 * Controlled filter state shape for the creators list.
 */
export interface CreatorFilterState {
  /** Free-text search across shop name, description, and tags. */
  search: string
  /** Selected primary category, or "All". */
  category: string
  /** Minimum rating threshold. */
  minRating: number
  /** Vetting status filter, or "All". */
  vetting: 'All' | 'Verified' | 'Pending review' | 'Watchlist'
  /** Sort behavior. */
  sortBy: SortOption
}

/**
 * Props for the CreatorFilters component.
 */
interface CreatorFiltersProps {
  /** Current filter state. */
  filters: CreatorFilterState
  /** Available categories derived from the creator dataset. */
  categories: string[]
  /** Callback for updating filter state. */
  onChange: (next: CreatorFilterState) => void
}

/**
 * UI for searching, filtering, and sorting Etsy creators.
 */
export function CreatorFilters({ filters, categories, onChange }: CreatorFiltersProps) {
  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target
    onChange({ ...filters, [name]: name === 'minRating' ? Number(value) : value })
  }

  return (
    <div className="mb-6 grid gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-12 md:items-end md:p-5">
      <div className="md:col-span-4">
        <label className="text-xs font-medium text-slate-700" htmlFor="search">
          Search creators
        </label>
        <input
          id="search"
          name="search"
          value={filters.search}
          onChange={handleInputChange}
          placeholder="Search by shop name, niche, or tag"
          className="mt-1.5 w-full rounded-full border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
        />
      </div>

      <div className="md:col-span-3">
        <label className="text-xs font-medium text-slate-700" htmlFor="category">
          Category
        </label>
        <select
          id="category"
          name="category"
          value={filters.category}
          onChange={handleInputChange}
          className="mt-1.5 w-full rounded-full border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
        >
          <option value="All">All categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="md:col-span-2">
        <label className="text-xs font-medium text-slate-700" htmlFor="minRating">
          Min. rating
        </label>
        <select
          id="minRating"
          name="minRating"
          value={filters.minRating}
          onChange={handleInputChange}
          className="mt-1.5 w-full rounded-full border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
        >
          <option value={0}>Any</option>
          <option value={4}>4.0+</option>
          <option value={4.5}>4.5+</option>
          <option value={4.8}>4.8+</option>
        </select>
      </div>

      <div className="md:col-span-3">
        <label className="text-xs font-medium text-slate-700" htmlFor="vetting">
          Vetting status
        </label>
        <select
          id="vetting"
          name="vetting"
          value={filters.vetting}
          onChange={handleInputChange}
          className="mt-1.5 w-full rounded-full border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
        >
          <option value="All">All</option>
          <option value="Verified">Verified only</option>
          <option value="Pending review">Pending review</option>
          <option value="Watchlist">Watchlist</option>
        </select>
      </div>

      <div className="md:col-span-3">
        <label className="text-xs font-medium text-slate-700" htmlFor="sortBy">
          Sort by
        </label>
        <select
          id="sortBy"
          name="sortBy"
          value={filters.sortBy}
          onChange={handleInputChange}
          className="mt-1.5 w-full rounded-full border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
        >
          <option value="sales">Total sales (high to low)</option>
          <option value="rating">Rating (high to low)</option>
          <option value="recent">Recently vetted</option>
        </select>
      </div>
    </div>
  )
}
