/**
 * @file Global site header and primary navigation for the platform, with colorful
 * gradient pills per menu item to distinguish the navigation from page content.
 */

import { Link, useLocation } from 'react-router'
import type { ReactNode } from 'react'

/**
 * Navigation link configuration item with gradient styling.
 */
interface NavItem {
  /** Display label in the navigation bar. */
  label: string
  /** Target route path. */
  to: string
  /** Tailwind gradient color classes (without bg-gradient-to-* prefix). */
  gradient: string
}

/**
 * Styled navigation link that highlights when active and shows a unique gradient ring.
 */
function NavLinkItem({ to, label, gradient }: NavItem) {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <Link
      to={to}
      className={[
        'group inline-flex rounded-full p-[1px] text-xs md:text-sm font-medium transition-all duration-200',
        'bg-gradient-to-r',
        gradient,
        isActive
          ? 'scale-[1.02] shadow-[0_0_20px_rgba(16,185,129,0.45)]'
          : 'opacity-80 hover:opacity-100 hover:scale-[1.01]'
      ].join(' ')}
    >
      <span
        className={[
          'inline-flex items-center rounded-full px-3 py-1.5',
          'transition-colors duration-150',
          isActive
            ? 'bg-slate-950/90 text-white'
            : 'bg-slate-900/85 text-slate-100 group-hover:bg-slate-950/95'
        ].join(' ')}
      >
        {label}
      </span>
    </Link>
  )
}

/**
 * Wrapper for navigation items, handling desktop layout.
 */
function NavLinks({ children }: { children: ReactNode }) {
  return <nav className="hidden items-center gap-2 md:flex">{children}</nav>
}

/**
 * Global header with logo, primary navigation, and key calls-to-action.
 * Uses a dark, high-contrast background to visually separate navigation
 * from the rest of the page, plus colorful gradients on each nav item.
 */
export function SiteHeader() {
  const navItems: NavItem[] = [
    {
      label: 'Home',
      to: '/',
      gradient: 'from-emerald-400 via-emerald-500 to-teal-400'
    },
    {
      label: 'Creators',
      to: '/creators',
      gradient: 'from-sky-400 via-sky-500 to-indigo-400'
    },
    {
      label: 'Affiliate Onboarding',
      to: '/affiliate-onboarding',
      gradient: 'from-fuchsia-400 via-pink-500 to-rose-400'
    },
    {
      label: 'Blog & Resources',
      to: '/blog',
      gradient: 'from-amber-400 via-orange-500 to-rose-400'
    },
    {
      label: 'Contact',
      to: '/contact',
      gradient: 'from-cyan-400 via-teal-400 to-emerald-400'
    }
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-400 to-sky-500 shadow-lg">
            <span className="text-sm font-extrabold tracking-tight text-slate-950">
              EA
            </span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight text-slate-50">
              Etsy Affiliate Hub
            </span>
            <span className="text-[11px] text-slate-400">
              Top creator discovery & vetting
            </span>
          </div>
        </Link>

        <NavLinks>
          {navItems.map((item) => (
            <NavLinkItem key={item.to} {...item} />
          ))}
        </NavLinks>

        <div className="flex items-center gap-2">
          <Link
            to="/creators"
            className="hidden rounded-full border border-emerald-300/70 bg-slate-900/60 px-3 py-1.5 text-[11px] font-semibold text-emerald-100 shadow-sm transition-colors hover:bg-slate-900/90 md:inline-flex"
          >
            Browse creators
          </Link>
          <Link
            to="/affiliate-onboarding"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 px-3.5 py-1.5 text-[11px] font-semibold text-slate-950 shadow-md transition-transform hover:scale-[1.02]"
          >
            Join as affiliate
          </Link>
        </div>
      </div>
    </header>
  )
}
