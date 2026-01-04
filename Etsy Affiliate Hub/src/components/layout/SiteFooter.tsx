/**
 * @file Global site footer with secondary navigation and legal links.
 */

import { Link } from 'react-router'

/**
 * Global footer providing secondary navigation, legal links, and contact details.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="space-y-1">
          <p className="font-medium text-slate-700">
            Etsy Affiliate Hub (Independent Discovery Platform)
          </p>
          <p className="max-w-xl text-xs">
            This site curates public Etsy shops and is not endorsed by or affiliated with Etsy,
            Inc. All trademarks are property of their respective owners. Always comply with the
            terms of the Etsy affiliate program, relevant advertising laws, and the policies of
            any affiliate networks you use.
          </p>
          <p className="max-w-xl text-xs text-slate-500">
            Operated in partnership with Career Corps Counseling. General inquiries:{' '}
            <a
              href="mailto:operations@careercorpscounseling.com"
              className="font-medium text-emerald-700 hover:underline"
            >
              operations@careercorpscounseling.com
            </a>
            .
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <Link
            to="/blog"
            className="text-slate-600 transition-colors hover:text-slate-900"
          >
            Resources
          </Link>
          <Link
            to="/contact"
            className="text-slate-600 transition-colors hover:text-slate-900"
          >
            Contact &amp; Support
          </Link>
          <Link
            to="/privacy-policy"
            className="text-slate-600 transition-colors hover:text-slate-900"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-of-service"
            className="text-slate-600 transition-colors hover:text-slate-900"
          >
            Terms of Service
          </Link>
          <span className="h-3 w-px bg-slate-300" aria-hidden="true" />
          <span>&copy; {new Date().getFullYear()} Etsy Affiliate Hub</span>
        </div>
      </div>
    </footer>
  )
}