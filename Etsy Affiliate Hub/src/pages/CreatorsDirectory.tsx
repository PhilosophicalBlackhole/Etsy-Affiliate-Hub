
/**
 * @file Creator discovery page with search, filters, and sort tools.
 */

import { useMemo, useState } from 'react'
import { Section } from '../components/common/Section'
import { PageHeader } from '../components/common/PageHeader'
import { CreatorGrid } from '../components/creators/CreatorGrid'
import { CreatorFilters, type CreatorFilterState } from '../components/creators/CreatorFilters'
import { creators } from '../data/creators'

/**
 * Page allowing users to search, filter, and sort featured Etsy creators.
 */
export default function CreatorsDirectoryPage() {
  const [filters, setFilters] = useState<CreatorFilterState>({
    search: '',
    category: 'All',
    minRating: 0,
    vetting: 'All',
    sortBy: 'sales'
  })

  const categories = useMemo(
    () =>
      Array.from(
        new Set(creators.map((creator) => creator.primaryCategory))
      ).sort(),
    []
  )

  const filteredCreators = useMemo(() => {
    const query = filters.search.trim().toLowerCase()

    let result = creators.filter((creator) => {
      if (filters.category !== 'All' && creator.primaryCategory !== filters.category) {
        return false
      }

      if (creator.rating < filters.minRating) {
        return false
      }

      if (filters.vetting !== 'All' && creator.vettingStatus !== filters.vetting) {
        return false
      }

      if (query) {
        const haystack = [
          creator.shopName,
          creator.ownerName,
          creator.shortDescription,
          creator.bio,
          creator.tags.join(' ')
        ]
          .join(' ')
          .toLowerCase()

        if (!haystack.includes(query)) {
          return false
        }
      }

      return true
    })

    if (filters.sortBy === 'sales') {
      result = [...result].sort((a, b) => b.sales - a.sales)
    } else if (filters.sortBy === 'rating') {
      result = [...result].sort((a, b) => b.rating - a.rating)
    } else if (filters.sortBy === 'recent') {
      // With static data, "recent" falls back to sales as a reasonable proxy.
      result = [...result].sort((a, b) => b.sales - a.sales)
    }

    return result
  }, [filters])

  return (
    <Section variant="default">
      <PageHeader
        eyebrow="Creator discovery"
        title="Search and filter the top Etsy creators for your next campaign."
        description={
          <>
            Use the filters below to narrow down creators by niche, rating, and vetting
            status. Every profile includes best-selling products, affiliate program
            details, and purchase-ready links so you can move from research to revenue
            quickly.
          </>
        }
      />

      <CreatorFilters
        filters={filters}
        categories={categories}
        onChange={setFilters}
      />

      <CreatorGrid creators={filteredCreators} />
    </Section>
  )
}
