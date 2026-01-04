
/**
 * @file Contact and support page with contact form and FAQ section.
 */

import { useState } from 'react'
import { Section } from '../components/common/Section'
import { PageHeader } from '../components/common/PageHeader'
import { FAQAccordion } from '../components/common/FAQAccordion'
import { faqItems } from '../data/faqs'

/**
 * Contact form state.
 */
interface ContactFormState {
  /** Full name or organization. */
  name: string
  /** Contact email. */
  email: string
  /** User type (affiliate, creator, brand, other). */
  role: string
  /** Topic or reason for contacting support. */
  topic: string
  /** Message body. */
  message: string
}

/**
 * Contact and support page where users can reach the team and browse FAQs.
 */
export default function ContactSupportPage() {
  const [form, setForm] = useState<ContactFormState>({
    name: '',
    email: '',
    role: 'Affiliate',
    topic: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
    setForm({
      name: '',
      email: '',
      role: 'Affiliate',
      topic: '',
      message: ''
    })
  }

  return (
    <Section variant="default">
      <PageHeader
        eyebrow="Contact & support"
        title="We support both affiliates and Etsy creators."
        description={
          <>
            Have a creator you want us to vet, a technical question about the platform, or
            feedback on the directory? Use the form below and we'll get back to you
            within 2–3 business days.
          </>
        }
      />

      <div className="grid gap-8 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.7fr)]">
        <form
          onSubmit={handleSubmit}
          className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-5"
        >
          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <label
                htmlFor="contact-name"
                className="text-xs font-medium text-slate-700"
              >
                Name / organization
              </label>
              <input
                id="contact-name"
                value={form.name}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, name: event.target.value }))
                }
                required
                className="mt-1.5 w-full rounded-full border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                placeholder="e.g. North Star Media"
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="text-xs font-medium text-slate-700"
              >
                Email
              </label>
              <input
                id="contact-email"
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

          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <label
                htmlFor="contact-role"
                className="text-xs font-medium text-slate-700"
              >
                I'm primarily a…
              </label>
              <select
                id="contact-role"
                value={form.role}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, role: event.target.value }))
                }
                className="mt-1.5 w-full rounded-full border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
              >
                <option value="Affiliate">Affiliate / creator</option>
                <option value="Brand">Brand / agency</option>
                <option value="Etsy Creator">Etsy creator</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="contact-topic"
                className="text-xs font-medium text-slate-700"
              >
                Topic
              </label>
              <input
                id="contact-topic"
                value={form.topic}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, topic: event.target.value }))
                }
                required
                className="mt-1.5 w-full rounded-full border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                placeholder="e.g. Request a new creator, technical issue, general feedback"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="text-xs font-medium text-slate-700"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              value={form.message}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, message: event.target.value }))
              }
              required
              rows={4}
              className="mt-1.5 w-full rounded-2xl border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
              placeholder="Share enough context so we can route your request to the right person."
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <button
              type="submit"
              className="inline-flex items-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Send message
            </button>
            <p className="text-xs text-slate-500">
              Or email the parent organization directly at{' '}
              <a
                href="mailto:operations@careercorpscounseling.com"
                className="font-medium text-emerald-700 hover:underline"
              >
                operations@careercorpscounseling.com
              </a>
              .
            </p>
          </div>

          {submitted && (
            <p className="rounded-xl bg-emerald-50 px-3 py-2 text-xs text-emerald-800">
              Thanks for reaching out — your message has been received and queued for
              review. We'll get back to you within 2–3 business days.
            </p>
          )}
        </form>

        <div className="space-y-4">
          <h2 className="text-sm font-semibold text-slate-900">
            Frequently asked questions
          </h2>
          <FAQAccordion items={faqItems} />
        </div>
      </div>
    </Section>
  )
}
