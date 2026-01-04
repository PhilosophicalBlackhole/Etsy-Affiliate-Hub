
/**
 * @file Detailed creator profile page with bio, products, stats, and affiliate CTAs.
 */

import { useRef, useState } from 'react'
import { Link, useParams } from 'react-router'
import { Section } from '../components/common/Section'
import { Badge } from '../components/common/Badge'
import { CTAButton } from '../components/common/CTAButton'
import { ProductCard } from '../components/creators/ProductCard'
import { creators } from '../data/creators'

/**
 * Simple in-page affiliate application form state.
 */
interface CreatorApplicationFormState {
  /** Brand, agency, or creator name. */
  name: string
  /** Email used for follow-up and approvals. */
  email: string
  /** Primary promotion channel description. */
  primaryChannel: string
  /** Short description of audience and content. */
  audienceSummary: string
}

/**
 * Creator profile detail page showing full information for a single Etsy creator.
 */
export default function CreatorProfilePage() {
  const { id } = useParams()
  const creator = creators.find((item) => item.id === id)

  const applicationSectionRef = useRef<HTMLDivElement | null>(null)
  const [form, setForm] = useState<CreatorApplicationFormState>({
    name: '',
    email: '',
    primaryChannel: '',
    audienceSummary: ''
  })
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null)

  if (!creator) {
    return (
      <Section variant="subtle">
        <div className="space-y-3 text-sm text-slate-700">
          <p className="text-base font-semibold text-slate-900">
            Creator not found
          </p>
          <p>
            We could not find this creator in the current curated list. They may have been
            removed or not yet vetted for affiliate promotion.
          </p>
          <Link
            to="/creators"
            className="inline-flex items-center rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 hover:bg-slate-100"
          >
            Back to creator discovery
          </Link>
        </div>
      </Section>
    )
  }

  const vettingVariant =
    creator.vettingStatus === 'Verified'
      ? 'success'
      : creator.vettingStatus === 'Watchlist'
      ? 'warning'
      : 'default'

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const timestamp = new Date()
    const idFragment = `${timestamp.getFullYear()}${String(
      timestamp.getMonth() + 1
    ).padStart(2, '0')}${String(timestamp.getDate()).padStart(2, '0')}`
    const shortId = `AFF-${creator.id.toUpperCase()}-${idFragment}`

    setSubmittedMessage(
      `Thanks, ${form.name || 'affiliate'} — your application for ${creator.shopName} has been recorded with reference ${shortId}. Expect a response within 2–3 business days.`
    )

    setForm({
      name: '',
      email: '',
      primaryChannel: '',
      audienceSummary: ''
    })
  }

  return (
    <div className="bg-slate-50">
      <Section variant="subtle" className="pb-4 pt-8 md:pt-10">
        <div className="grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <img
                src={creator.avatarUrl}
                alt={creator.shopName}
                className="h-14 w-14 rounded-full border border-slate-200 object-cover"
              />
              <div className="leading-tight">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
                  Etsy creator profile
                </p>
                <h1 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                  {creator.shopName}
                </h1>
                <p className="text-xs text-slate-500">
                  {creator.primaryCategory} · {creator.location}
                </p>
              </div>
              <Badge variant={vettingVariant}>{creator.vettingStatus}</Badge>
            </div>
            <p className="max-w-2xl text-sm text-slate-700">{creator.bio}</p>

            <div className="mt-2 grid max-w-xl grid-cols-3 gap-4 text-xs text-slate-600">
              <div>
                <p className="font-semibold text-slate-900">
                  {creator.rating.toFixed(1)}★
                </p>
                <p>{creator.reviewCount.toLocaleString()} reviews</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">
                  {creator.sales.toLocaleString()}
                </p>
                <p>Total sales (approx.)</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">
                  {creator.affiliate.baseCommissionRate}%+
                </p>
                <p>Base affiliate commission</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <CTAButton
                variant="primary"
                onClick={() => {
                  window.open(
                    `${creator.shopUrl}?utm_source=affiliate_hub&amp;utm_medium=profile_cta`,
                    '_blank',
                    'noopener,noreferrer'
                  )
                }}
              >
                Visit Etsy shop (affiliate)
              </CTAButton>
              <CTAButton
                variant="ghost"
                onClick={() => {
                  applicationSectionRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  })
                }}
              >
                Apply for affiliate partnership
              </CTAButton>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-900">
            <img
              src={creator.headerImageUrl}
              alt={`${creator.shopName} hero`}
              className="h-40 w-full object-cover md:h-44"
            />
            <div className="space-y-3 px-4 pb-4 pt-3 text-xs text-slate-200 md:px-5 md:pb-5">
              <p className="font-semibold text-slate-50">
                Affiliate program details
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-[11px] text-slate-400">Program type</p>
                  <p className="font-medium">
                    {creator.affiliate.programType}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-slate-400">Cookie window</p>
                  <p className="font-medium">
                    {creator.affiliate.cookieWindowDays}-day
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-slate-400">Commission range</p>
                  <p className="font-medium">
                    {creator.affiliate.baseCommissionRate}%{' '}
                    {creator.affiliate.boostedCommissionRate
                      ? `– ${creator.affiliate.boostedCommissionRate}%`
                      : ''}
                  </p>
                </div>
                {creator.affiliate.minMonthlyClicks && (
                  <div>
                    <p className="text-[11px] text-slate-400">Recommended volume</p>
                    <p className="font-medium">
                      {creator.affiliate.minMonthlyClicks.toLocaleString()}+ clicks /
                      month
                    </p>
                  </div>
                )}
              </div>
              <p className="text-[11px] text-slate-300">
                {creator.affiliate.notes}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {creator.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-800 px-2 py-0.5 text-[11px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="default" className="pt-4">
        <div className="space-y-4">
          <header className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Top-selling products with affiliate-ready links
              </h2>
              <p className="text-sm text-slate-600">
                Every product below includes a purchase link instrumented for affiliate
                tracking. Use these in your content, link-in-bio, or resource hubs.
              </p>
            </div>
          </header>

          <div className="grid gap-5 md:grid-cols-3">
            {creator.topProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </Section>

      <Section variant="subtle" className="pt-2" id="affiliate-application">
        <div ref={applicationSectionRef}>
          <div className="mb-5 space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">
              Apply to partner with {creator.shopName}
            </h2>
            <p className="text-sm text-slate-600">
              Share a concise snapshot of your audience, channels, and how you plan to
              feature this creator. This information is used to streamline approvals and
              suggest the right products for your content format.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-5"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="affiliate-name"
                  className="text-xs font-medium text-slate-700"
                >
                  Your name / brand
                </label>
                <input
                  id="affiliate-name"
                  value={form.name}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, name: event.target.value }))
                  }
                  required
                  className="mt-1.5 w-full rounded-full border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  placeholder="e.g. Studio Aurora Media"
                />
              </div>
              <div>
                <label
                  htmlFor="affiliate-email"
                  className="text-xs font-medium text-slate-700"
                >
                  Contact email
                </label>
                <input
                  id="affiliate-email"
                  type="email"
                  value={form.email}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, email: event.target.value }))
                  }
                  required
                  className="mt-1.5 w-full rounded-full border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="affiliate-channel"
                className="text-xs font-medium text-slate-700"
              >
                Primary promotion channel
              </label>
              <input
                id="affiliate-channel"
                value={form.primaryChannel}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, primaryChannel: event.target.value }))
                }
                required
                className="mt-1.5 w-full rounded-full border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                placeholder="e.g. TikTok (120k followers), YouTube (18k subscribers), or blog"
              />
            </div>

            <div>
              <label
                htmlFor="affiliate-audience"
                className="text-xs font-medium text-slate-700"
              >
                Audience &amp; campaign idea
              </label>
              <textarea
                id="affiliate-audience"
                value={form.audienceSummary}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, audienceSummary: event.target.value }))
                }
                required
                rows={4}
                className="mt-1.5 w-full rounded-2xl border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                placeholder="Briefly describe your audience, typical content formats, and how you plan to feature this creator’s products."
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <button
                type="submit"
                className="inline-flex items-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Submit application
              </button>
              <p className="text-xs text-slate-500">
                Submissions are forwarded to the creator or their team. You&apos;ll be
                contacted directly if there is a fit.
              </p>
            </div>

            {submittedMessage && (
              <p className="rounded-xl bg-emerald-50 px-3 py-2 text-xs text-emerald-800">
                {submittedMessage}
              </p>
            )}
          </form>
        </div>
      </Section>
    </div>
  )
}
