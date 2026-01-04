
/**
 * @file Simple FAQ accordion component used on the Contact &amp; Support page.
 */

import { useState } from 'react'
import type { FaqItem } from '../../data/faqs'

/**
 * Props for the FAQAccordion component.
 */
interface FAQAccordionProps {
  /** FAQ entries to render. */
  items: FaqItem[]
}

/**
 * Accessible FAQ accordion where only one item is expanded at a time.
 */
export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null)

  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {items.map((item) => {
        const isOpen = openId === item.id
        return (
          <div key={item.id}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-slate-800 hover:bg-slate-50 md:px-5 md:py-4"
            >
              <span>{item.question}</span>
              <span
                aria-hidden="true"
                className="ml-3 inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 text-[11px] text-slate-600"
              >
                {isOpen ? '−' : '+'}
              </span>
            </button>
            {isOpen && (
              <div className="px-4 pb-4 text-sm text-slate-600 md:px-5">
                {item.answer}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
