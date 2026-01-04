
/**
 * @file Simple carousel component highlighting top creators on the home page.
 */

import { useEffect, useState } from 'react'
import type { Creator } from '../../data/creators'
import { Badge } from '../common/Badge'
import { CTAButton } from '../common/CTAButton'
import { Link } from 'react-router'

/**
 * Props for the CreatorHighlightCarousel component.
 */
interface CreatorHighlightCarouselProps {
  /** Creators to be showcased in the carousel. */
  creators: Creator[]
}

/**
 * Home page carousel that rotates through high-performing creators and provides
 * quick-entry CTAs for affiliate marketers.
 */
export function CreatorHighlightCarousel({
  creators
}: CreatorHighlightCarouselProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!creators.length) return
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % creators.length)
    }, 6500)
    return () => window.clearInterval(id)
  }, [creators])

  if (!creators.length) return null

  const active = creators[index]

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="grid gap-0 md:grid-cols-2">
        <div className="relative order-2 h-56 overflow-hidden md:order-1 md:h-full">
          <img
            src={active.headerImageUrl}
            alt={`${active.shopName} products`}
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        </div>
        <div className="order-1 flex flex-col justify-between gap-4 p-5 md:order-2 md:p-7">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-600">
              Featured Etsy creator
            </p>
            <div className="flex items-center gap-3">
              <img
                src={active.avatarUrl}
                alt={active.shopName}
                className="h-10 w-10 rounded-full border border-slate-200 object-cover"
              />
              <div className="leading-tight">
                <p className="text-sm font-semibold text-slate-900">
                  {active.shopName}
                </p>
                <p className="text-xs text-slate-500">
                  {active.primaryCategory} · {active.location}
                </p>
              </div>
              <Badge variant="success">Verified</Badge>
            </div>
            <p className="mt-3 text-sm text-slate-700">{active.shortDescription}</p>
            <p className="text-xs text-slate-500">
              {active.rating.toFixed(1)}★ rating ·{' '}
              {active.reviewCount.toLocaleString()} reviews ·{' '}
              {active.sales.toLocaleString()} sales
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <Link
              to={`/creators/${active.id}`}
              className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-800 transition-colors hover:bg-slate-100"
            >
              View creator profile
            </Link>
            <CTAButton
              variant="primary"
              className="flex-1 text-xs"
              onClick={() => {
                window.open(
                  `${active.shopUrl}?utm_source=affiliate_hub&amp;utm_medium=featured_carousel`,
                  '_blank',
                  'noopener,noreferrer'
                )
              }}
            >
              Promote this creator
            </CTAButton>
          </div>
          <div className="flex items-center justify-between pt-2 text-[11px] text-slate-500">
            <p>
              Affiliate program:{' '}
              <span className="font-medium text-slate-700">
                {active.affiliate.programType}
              </span>{' '}
              · Base commission{' '}
              <span className="font-semibold">
                {active.affiliate.baseCommissionRate}%
              </span>
              {active.affiliate.boostedCommissionRate
                ? ` (up to ${active.affiliate.boostedCommissionRate}% with campaigns)`
                : null}
            </p>
            <p>
              {index + 1} / {creators.length}
            </p>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-slate-900/5 to-transparent md:hidden" />
    </div>
  )
}
