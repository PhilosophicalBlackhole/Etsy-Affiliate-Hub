/**
 * @file Application entry routes and global layout wrapper for the Etsy affiliate discovery platform.
 */

import { HashRouter, Routes, Route } from 'react-router'
import HomePage from './pages/Home'
import CreatorsDirectoryPage from './pages/CreatorsDirectory'
import CreatorProfilePage from './pages/CreatorProfile'
import AffiliateOnboardingPage from './pages/AffiliateOnboarding'
import BlogPage from './pages/Blog'
import ContactSupportPage from './pages/ContactSupport'
import PrivacyPolicyPage from './pages/PrivacyPolicy'
import TermsOfServicePage from './pages/TermsOfService'
import { SiteHeader } from './components/layout/SiteHeader'
import { SiteFooter } from './components/layout/SiteFooter'

/**
 * Root application component defining main routes and shared layout.
 */
export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <SiteHeader />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/creators" element={<CreatorsDirectoryPage />} />
            <Route path="/creators/:id" element={<CreatorProfilePage />} />
            <Route path="/affiliate-onboarding" element={<AffiliateOnboardingPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactSupportPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          </Routes>
        </main>
        <SiteFooter />
      </div>
    </HashRouter>
  )
}