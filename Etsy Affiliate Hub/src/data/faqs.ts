
/**
 * @file Frequently-asked questions content used on the Contact &amp; Support page.
 */

/**
 * Represents a single FAQ entry.
 */
export interface FaqItem {
  /** Unique identifier for UI toggling. */
  id: string
  /** Question title shown in the accordion. */
  question: string
  /** Detailed answer text. */
  answer: string
}

/**
 * FAQs for both affiliates and Etsy creators.
 */
export const faqItems: FaqItem[] = [
  {
    id: 'who-is-this-for',
    question: 'Who is this platform designed for?',
    answer:
      'This platform is built for performance-focused affiliate marketers and creator managers who want a vetted shortlist of high-performing Etsy shops. It is also useful for Etsy sellers who want to understand how affiliates evaluate partners.'
  },
  {
    id: 'how-do-i-earn',
    question: 'How do I earn commissions promoting these Etsy creators?',
    answer:
      'You earn commissions through approved affiliate links. For most shops, this runs through the Etsy affiliate program. Some creators also offer direct or hybrid programs with higher rates — these will be clearly labeled on each profile.'
  },
  {
    id: 'what-does-verified-mean',
    question: 'What does the “Verified” badge mean for a creator?',
    answer:
      '“Verified” creators have passed our manual vetting checklist, which includes sustained positive reviews, reliable fulfillment, clear product positioning, and a catalog that supports long-term content partnerships.'
  },
  {
    id: 'can-i-request-a-creator',
    question: 'Can I request that a specific Etsy creator be added?',
    answer:
      'Yes. Use the contact form on this page and include a link to the Etsy shop, plus any context about your audience and content format. We prioritize shops that already show strong product–market fit and reliable operations.'
  },
  {
    id: 'do-you-handle-payouts',
    question: 'Do you handle affiliate payouts directly?',
    answer:
      'No. All payouts are handled either by the Etsy affiliate network or by the individual creators via their own affiliate platforms. We centralize discovery, vetting, and recommendations so you can choose partners with confidence.'
  }
]
