/**
 * @file Affiliate onboarding page with step-by-step guidance and an application form.
 */

import { useState } from 'react'
import { Section } from '../components/common/Section'
import { PageHeader } from '../components/common/PageHeader'

/**
 * Form state for global affiliate onboarding.
 */
interface OnboardingFormState {
  /** Name or brand. */
  name: string
  /** Contact email address. */
  email: string
  /** Primary promotion channel. */
  primaryChannel: string
  /** Monthly reach or impression estimate. */
  monthlyReach: string
  /** Preferred niches to promote. */
  niches: string
}

/**
 * Response shape returned by the Google Apps Script onboarding endpoint.
 */
interface OnboardingResponse {
  /** Whether the submission was recorded successfully. */
  ok: boolean
  /** Optional human-readable success or error message. */
  message?: string
  /** Optional error description when ok is false. */
  error?: string
  /** Optional ISO timestamp of when the submission was recorded. */
  submittedAt?: string
}

/**
 * Endpoint URL for logging onboarding submissions to Google Sheets.
 * This should match the deployed Apps Script Web App "exec" URL.
 */
const ONBOARDING_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbw37YPofCR7fjJMfyOk4XscBLHkaTIOEQf4h4nwN5THlmL-Ey9qckF9ouyIPwiox5Nk/exec'

/**
 * Step description for the onboarding checklist.
 */
interface OnboardingStep {
  /** Title of the onboarding step. */
  title: string
  /** Supporting body copy. */
  body: string
}

/**
 * Step-by-step affiliate onboarding content and application form.
 * Submits affiliate profile details to a Google Sheets-backed endpoint via Google Apps Script.
 */
export default function AffiliateOnboardingPage() {
  const [form, setForm] = useState<OnboardingFormState>({
    name: '',
    email: '',
    primaryChannel: '',
    monthlyReach: '',
    niches: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const steps: OnboardingStep[] = [
    {
      title: 'Define your core niche and audience outcome',
      body: 'Start with the type of transformation you help your audience achieve: a calmer home, a better-organized workspace, a more aesthetic wedding, or a more productive day. This will guide which Etsy creators are genuinely aligned with your brand.'
    },
    {
      title: 'Pick 3–5 flagship creators from the directory',
      body: 'Use our Creator Discovery page to shortlist a small group of Verified shops whose products you can confidently recommend over and over, across multiple content formats.'
    },
    {
      title: 'Align content pillars with product stacks',
      body: 'Turn individual products into repeatable “stacks” — e.g., a full bridesmaid proposal kit, a complete digital planning workflow, or a full desk setup. These are easier to promote and remember than one-off links.'
    },
    {
      title: 'Implement clean tracking and disclosure',
      body: 'Use consistent UTM parameters and declare affiliate relationships clearly in your content, description boxes, and on-site disclosures to stay compliant and build audience trust.'
    }
  ]

  /**
   * Handles submit events for the onboarding form.
   * Sends data to the Google Apps Script endpoint and manages loading / error / success UI state.
   */
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setError(null)
    setSubmitted(false)
    setIsSubmitting(true)

    try {
      const response = await fetch(ONBOARDING_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })

      // Attempt to parse the JSON payload returned by the script.
      let data: OnboardingResponse | null = null
      try {
        data = (await response.json()) as OnboardingResponse
      } catch {
        data = null
      }

      const okFromBody = data?.ok ?? false

      if (!response.ok || !okFromBody) {
        const message =
          data?.error ||
          data?.message ||
          'There was a problem recording your submission. Please try again.'
        setError(message)
        return
      }

      // Success: clear form and show confirmation message.
      setSubmitted(true)
      setForm({
        name: '',
        email: '',
        primaryChannel: '',
        monthlyReach: '',
        niches: ''
      })
    } catch (err) {
      // Network or unexpected error.
      setError(
        'Network error while submitting. Please check your connection and try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Section variant="default">
      <PageHeader
        eyebrow="Affiliate onboarding"
        title="Join the top Etsy creator affiliate hub."
        description={
          <>
            This platform is designed for serious performance marketers and creators who
            want to build durable partnerships with Etsy shops. Follow the framework
            below, then share your details so we can prioritize the most relevant creator
            introductions for you.
          </>
        }
      />

      <div className="grid gap-8 md:grid-cols-[minmax(0,2.1fr)_minmax(0,1.6fr)]">
        <div className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
            How it works
          </h2>
          <ol className="space-y-3 text-sm text-slate-700">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="flex gap-3 rounded-2xl bg-white p-4 shadow-sm"
              >
                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-xs font-semibold text-white">
                  {index + 1}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{step.title}</p>
                  <p className="mt-1 text-xs text-slate-600">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="rounded-2xl border border-dashed border-emerald-300 bg-emerald-50 p-4 text-xs text-emerald-900">
            <p className="font-semibold">Pro tip for launch campaigns</p>
            <p className="mt-1">
              Choose one creator as your &ldquo;hero partner&rdquo; for the first 30 days.
              Build a small content series exclusively around their products, then layer
              in additional creators once you have a baseline for clicks and conversions.
            </p>
          </div>
        </div>

        <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-5">
          <h2 className="text-sm font-semibold text-slate-900">
            Share your affiliate profile
          </h2>
          <p className="text-xs text-slate-600">
            This form helps us understand whether you&apos;re a better fit for
            high-AOV, evergreen creators or fast-moving, trend-driven shops. It does not
            replace any network-level application requirements.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3 pt-1">
            <div>
              <label
                htmlFor="onboard-name"
                className="text-xs font-medium text-slate-700"
              >
                Name / brand
              </label>
              <input
                id="onboard-name"
                value={form.name}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, name: event.target.value }))
                }
                required
                className="mt-1.5 w-full rounded-full border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                placeholder="e.g. The Minimalist Studio"
              />
            </div>
            <div>
              <label
                htmlFor="onboard-email"
                className="text-xs font-medium text-slate-700"
              >
                Contact email
              </label>
              <input
                id="onboard-email"
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
            <div>
              <label
                htmlFor="onboard-channel"
                className="text-xs font-medium text-slate-700"
              >
                Primary promotion channel
              </label>
              <input
                id="onboard-channel"
                value={form.primaryChannel}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, primaryChannel: event.target.value }))
                }
                required
                className="mt-1.5 w-full rounded-full border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                placeholder="e.g. TikTok, YouTube, blog, email list"
              />
            </div>
            <div>
              <label
                htmlFor="onboard-reach"
                className="text-xs font-medium text-slate-700"
              >
                Monthly reach (rough estimate)
              </label>
              <input
                id="onboard-reach"
                value={form.monthlyReach}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, monthlyReach: event.target.value }))
                }
                required
                className="mt-1.5 w-full rounded-full border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                placeholder="e.g. 250k monthly views across all channels"
              />
            </div>
            <div>
              <label
                htmlFor="onboard-niches"
                className="text-xs font-medium text-slate-700"
              >
                Preferred niches &amp; creators you&apos;re interested in
              </label>
              <textarea
                id="onboard-niches"
                value={form.niches}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, niches: event.target.value }))
                }
                required
                rows={3}
                className="mt-1.5 w-full rounded-2xl border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                placeholder="List 2–4 niches you care about (e.g. minimalist jewelry, digital planning, craft supplies) and any specific creators from our directory."
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                {isSubmitting ? 'Submitting…' : 'Submit onboarding profile'}
              </button>
              <p className="text-xs text-slate-500">
                You&apos;ll receive a confirmation by email along with next steps and
                recommended creators.
              </p>
            </div>

            {/* Status messages */}
            <div className="space-y-2 pt-1" aria-live="polite">
              {error && (
                <p className="rounded-xl bg-red-50 px-3 py-2 text-xs text-red-800" role="alert">
                  {error}
                </p>
              )}
              {submitted && !error && (
                <p className="rounded-xl bg-emerald-50 px-3 py-2 text-xs text-emerald-800">
                  Thanks — your onboarding details have been recorded. You can start
                  browsing creators immediately while we review your profile.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </Section>
  )
}
