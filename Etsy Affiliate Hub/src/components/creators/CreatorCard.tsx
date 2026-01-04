
/**
 * @file CreatorCard component used in creator discovery lists and carousels.
 */

import { Link } from 'react-router'
import type { Creator } from '../../data/creators'
import { Badge } from '../common/Badge'
import { CTAButton } from '../common/CTAButton'

/**
 * Props for the CreatorCard component.
 */
interface CreatorCardProps {
  /** Creator record to display. */
  creator: Creator
}

/**
 * Card view of a creator with key performance and affiliate highlights.
 */
export function CreatorCard({ creator }: CreatorCardProps) {
  const primaryProduct = creator.topProducts[0]

  const vettingVariant =
    creator.vettingStatus === 'Verified'
      ? 'success'
      : creator.vettingStatus === 'Watchlist'
      ? 'warning'
      : 'default'

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative h-36 w-full overflow-hidden">
        <img
          src={creator.headerImageUrl}
          alt={`${creator.shopName} hero`}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-x-4 bottom-3 flex items-center justify-between">
          <div className="flex items-center gap-2 rounded-full bg-white/85 px-2 py-1 shadow-sm backdrop-blur">
            <img
              src={creator.avatarUrl}
              alt={creator.shopName}
              className="h-7 w-7 rounded-full border border-white object-cover"
            />
            <div className="leading-tight">
              <p className="text-xs font-semibold text-slate-900">
                {creator.shopName}
              </p>
              <p className="text-[11px] text-slate-500">
                {creator.primaryCategory} · {creator.location}
              </p>
            </div>
          </div>
          <Badge variant={vettingVariant}>
            {creator.vettingStatus === 'Verified'
              ? 'Verified partner'
              : creator.vettingStatus}
          </Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4 md:p-5">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
          {creator.primaryCategory}
        </p>
        <p className="text-sm font-semibold text-slate-900">
          {creator.shortDescription}
        </p>
        <p className="line-clamp-2 text-xs text-slate-600">{creator.bio}</p>

        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600">
          <span>
            <span className="font-semibold text-slate-900">
              {creator.rating.toFixed(1)}★
            </span>{' '}
            ({creator.reviewCount.toLocaleString()} reviews)
          </span>
          <span className="h-3 w-px bg-slate-200" aria-hidden="true" />
          <span>{creator.sales.toLocaleString()} sales</span>
        </div>

        <div className="flex flex-wrap gap-2 text-[11px] text-slate-500">
          {creator.badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full bg-slate-50 px-2 py-0.5"
            >
              {badge}
            </span>
          ))}
        </div>

        {primaryProduct && (
          <div className="mt-1 rounded-xl bg-slate-50 p-2.5 text-xs text-slate-700">
            <p className="flex items-center justify-between gap-2">
              <span className="font-semibold">Featured product</span>
              <span className="font-medium text-slate-900">
                {primaryProduct.currency} {primaryProduct.price.toFixed(2)}
              </span>
            </p>
            <p className="mt-0.5 line-clamp-2 text-[11px] text-slate-600">
              {primaryProduct.name}
            </p>
          </div>
        )}

        <div className="mt-2 flex flex-wrap items-center gap-2">
          <Link
            to={`/creators/${creator.id}`}
            className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 transition-colors hover:bg-slate-100"
          >
            View profile
          </Link>
          {primaryProduct && (
            <CTAButton
              variant="primary"
              className="flex-1 text-xs"
              onClick={() => {
                window.open(primaryProduct.affiliateUrl, '_blank', 'noopener,noreferrer')
              }}
            >
              Promote &amp; purchase
            </CTAButton>
          )}
        </div>
      </div>
    </article>
  )
}
