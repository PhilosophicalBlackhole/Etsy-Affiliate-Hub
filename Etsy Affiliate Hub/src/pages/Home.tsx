/**
 * @file Home page with platform overview, featured creators, and analytics snapshot.
 */

import { Link } from 'react-router'
import { Section } from '../components/common/Section'
import { CTAButton } from '../components/common/CTAButton'
import { CreatorHighlightCarousel } from '../components/creators/CreatorHighlightCarousel'
import { AnalyticsOverview } from '../components/common/AnalyticsOverview'
import { getTopCreators } from '../data/creators'

/**
 * Landing page introducing the platform and highlighting top Etsy creators.
 * Uses soft multi-color gradients and subtle glow accents for a more colorful,
 * inviting first impression.
 */
export default function HomePage() {
  const topCreators = getTopCreators(5)

  return (
    <div className="space-y-0">
      <Section
        variant="subtle"
        className="relative overflow-hidden pb-6 pt-10 md:pt-16"
      >
        {/* Background glow accents for extra color without hurting readability */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-sky-300/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-50 via-sky-50 to-rose-50 opacity-90"
        />

        <div className="relative flex flex-col gap-10 md:flex-row md:items-center">
          <div className="flex-1 space-y-5">
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-800 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Etsy creator affiliate platform
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl lg:text-[2.6rem]">
              Discover, vet, and promote the top Etsy creators in one place.
            </h1>
            <p className="max-w-xl text-sm text-slate-700 md:text-base">
              Etsy Affiliate Hub is a turnkey discovery platform for
              performance-focused marketers. Browse a curated list of verified,
              high-converting Etsy shops, see their bestsellers, and plug into
              affiliate-ready offers in minutes—not weeks.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link to="/creators">
                <CTAButton variant="primary" className="shadow-md shadow-emerald-300/60">
                  Browse verified creators
                </CTAButton>
              </Link>
              <Link to="/affiliate-onboarding">
                <CTAButton variant="secondary" className="bg-slate-950 hover:bg-slate-900">
                  Join as an affiliate
                </CTAButton>
              </Link>
              <p className="text-xs text-slate-600">
                100% free to browse · Optimized for Etsy affiliate and hybrid
                deals
              </p>
            </div>

            <div className="mt-4 space-y-3 rounded-2xl bg-white/80 p-4 shadow-sm backdrop-blur">
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-rose-400" />
              <dl className="grid max-w-lg grid-cols-3 gap-4 text-xs text-slate-600">
                <div>
                  <dt className="font-semibold text-slate-900">Creators</dt>
                  <dd>Top 10–20 handpicked, not thousands of noisy listings.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">Vetting signals</dt>
                  <dd>Sales, reviews, ratings, and trust indicators at a glance.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">Affiliate ready</dt>
                  <dd>Clear commission ranges, cookie windows, and CTAs.</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="flex-1">
            <CreatorHighlightCarousel creators={topCreators} />
          </div>
        </div>
      </Section>

      <Section variant="default" className="bg-slate-50/80 py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] md:items-start">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-900">
              Why focus on a curated top 10–20 Etsy creators?
            </h2>
            <p className="text-sm text-slate-700">
              High-earning affiliates rarely promote random shops. Instead, they
              develop deep, recurring content streams around a small set of
              proven partners. This platform does the heavy lifting by
              pre-filtering for conversion, reliability, and brand
              alignment—so you can spend your time creating, not hunting.
            </p>
            <ul className="mt-2 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
              <li className="rounded-2xl bg-white p-3 shadow-sm ring-1 ring-emerald-100">
                <span className="font-semibold text-slate-900">
                  Conversion-first vetting
                </span>
                <p className="mt-1 text-xs text-slate-600">
                  Each creator passes thresholds for sales, ratings, and review
                  volume and gets a clear status badge.
                </p>
              </li>
              <li className="rounded-2xl bg-white p-3 shadow-sm ring-1 ring-sky-100">
                <span className="font-semibold text-slate-900">
                  Category and tag system
                </span>
                <p className="mt-1 text-xs text-slate-600">
                  Filter by niche—jewelry, home decor, digital goods, supplies,
                  and more.
                </p>
              </li>
              <li className="rounded-2xl bg-white p-3 shadow-sm ring-1 ring-amber-100">
                <span className="font-semibold text-slate-900">
                  Affiliate-ready linking
                </span>
                <p className="mt-1 text-xs text-slate-600">
                  Every product card includes a one-click affiliate-ready
                  purchase link.
                </p>
              </li>
              <li className="rounded-2xl bg-white p-3 shadow-sm ring-1 ring-rose-100">
                <span className="font-semibold text-slate-900">
                  Scalable from day one
                </span>
                <p className="mt-1 text-xs text-slate-600">
                  The structure is API-ready so you can plug in live performance
                  data later.
                </p>
              </li>
            </ul>
          </div>
          <AnalyticsOverview />
        </div>
      </Section>
    </div>
  )
}
