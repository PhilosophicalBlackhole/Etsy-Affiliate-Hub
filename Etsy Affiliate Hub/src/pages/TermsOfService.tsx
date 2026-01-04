/**
 * @file Terms of Service page outlining the conditions of use for the Etsy Affiliate Hub platform.
 */

import { Section } from '../components/common/Section'
import { PageHeader } from '../components/common/PageHeader'

/**
 * Static Terms of Service content for users of the affiliate discovery platform.
 */
export default function TermsOfServicePage() {
  return (
    <Section variant="subtle">
      <PageHeader
        eyebrow="Legal"
        title="Terms of Service"
        description={
          <>
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of
            this independent Etsy creator discovery platform (the &quot;Service&quot;).
            By using the Service, you agree to be bound by these Terms.
          </>
        }
      />

      <div className="space-y-6 text-sm text-slate-700">
        <section className="space-y-2">
          <h2 className="text-base font-semibold text-slate-900">1. Who we are</h2>
          <p>
            The Service is a curated directory and educational resource for affiliates,
            creators, and brands interested in promoting Etsy shops. It is operated in
            partnership with the parent organization, Career Corps Counseling
            (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). We are independent from
            Etsy and not formally endorsed by Etsy, Inc.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-slate-900">
            2. Description of the Service
          </h2>
          <p>
            The Service provides curated information about selected Etsy creators,
            including summary statistics, example products, affiliate program details, and
            links to external platforms such as Etsy and third-party affiliate networks.
            We also offer educational content, onboarding forms, and contact tools to help
            affiliates and creators discover potential partnerships.
          </p>
          <p>
            We do not process payments for Etsy orders, and we do not control the
            availability, pricing, or fulfillment of any products shown. All purchases are
            completed on external platforms under their own terms and policies.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-slate-900">3. Eligibility</h2>
          <p>
            You may use the Service only if you are at least the age of majority in your
            jurisdiction and have the legal capacity to enter into these Terms. By using
            the Service on behalf of a company or organization, you represent that you are
            authorized to bind that entity to these Terms.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-slate-900">4. Acceptable use</h2>
          <p>
            You agree to use the Service only for lawful purposes and in accordance with
            these Terms. You will not:
          </p>
          <ul className="ml-5 list-disc space-y-1">
            <li>
              Attempt to interfere with or compromise the security or availability of the
              Service.
            </li>
            <li>
              Scrape or systematically harvest creator data, except as permitted by
              applicable law and these Terms.
            </li>
            <li>
              Misrepresent your relationship with us, Etsy, or any featured creator.
            </li>
            <li>
              Use the Service to send unsolicited or misleading communications.
            </li>
            <li>
              Violate any applicable advertising, disclosure, or affiliate marketing laws
              and guidelines (including platform-specific rules and the FTC&apos;s
              endorsement guidelines where applicable).
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-slate-900">
            5. Affiliate relationships and disclosures
          </h2>
          <p>
            The Service highlights potential affiliate opportunities and may provide
            affiliate-tagged outbound links. However:
          </p>
          <ul className="ml-5 list-disc space-y-1">
            <li>
              Any affiliate relationship between you and an Etsy creator (or network) is a
              direct relationship between you and that third party. We are not a party to
              your separate agreements with affiliate networks or creators.
            </li>
            <li>
              You are solely responsible for complying with all disclosure requirements,
              including clearly and conspicuously disclosing affiliate relationships in
              your content and on your own channels.
            </li>
            <li>
              We do not guarantee acceptance into any affiliate program or the performance
              of any specific creator, product, or link.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-slate-900">
            6. Intellectual property
          </h2>
          <p>
            All non-Etsy content on the Service—such as layout, copywriting, and platform
            UX—is owned or licensed by us and is protected by applicable intellectual
            property laws. You may not reproduce, modify, or distribute substantial
            portions of the Service without our prior written consent, except as permitted
            by applicable law.
          </p>
          <p>
            Trademarks, logos, product photos, and other assets related to Etsy or
            individual creators remain the property of their respective owners and are used
            here for descriptive and informational purposes only.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-slate-900">
            7. No guarantees or professional advice
          </h2>
          <p>
            The Service is provided for informational and educational purposes only. While
            we aim to highlight reliable, vetted creators, metrics such as sales volume,
            ratings, and &quot;Verified&quot; status are not guarantees of future results.
          </p>
          <p>
            Nothing on the Service constitutes financial, legal, or business advice. You
            are responsible for your own due diligence and for any decisions you make about
            promoting specific creators or products.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-slate-900">
            8. Disclaimers and limitation of liability
          </h2>
          <p>
            The Service is provided on an &quot;as is&quot; and &quot;as available&quot;
            basis, without warranties of any kind, whether express or implied. To the
            maximum extent permitted by law, we disclaim all warranties, including implied
            warranties of merchantability, fitness for a particular purpose, and
            non-infringement.
          </p>
          <p>
            To the fullest extent permitted by law, we will not be liable for any indirect,
            incidental, special, consequential, or punitive damages, or for any loss of
            profits or revenues, whether incurred directly or indirectly, arising from your
            use of or inability to use the Service. Our total liability for any claim
            relating to the Service will be limited to the greater of (a) any amount you
            paid us for access to the Service in the three months preceding the claim (if
            any), or (b) one hundred (100) US dollars.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-slate-900">9. Third-party services</h2>
          <p>
            The Service links to third-party websites and services, including Etsy and
            affiliate networks. We do not control or endorse these third parties and are
            not responsible for their content, policies, or practices. Your use of
            third-party services is at your own risk and is governed by their separate
            terms and conditions.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-slate-900">
            10. Modifications to the Service
          </h2>
          <p>
            We may update, suspend, or discontinue all or part of the Service at any time,
            with or without notice, so long as such changes are reasonable in light of the
            nature of the platform and our users&apos; expectations. We will not be liable
            to you or any third party for any modification, suspension, or discontinuation
            of the Service.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-slate-900">
            11. Changes to these Terms
          </h2>
          <p>
            We may revise these Terms from time to time. When we do, we will update the
            &quot;Last updated&quot; date at the bottom of this page. Your continued use of
            the Service after the updated Terms become effective constitutes your
            acceptance of the changes. If you do not agree to the revised Terms, you must
            stop using the Service.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-slate-900">
            12. Governing law and dispute resolution
          </h2>
          <p>
            These Terms will be governed by and construed in accordance with the laws of
            the jurisdiction in which the parent organization, Career Corps Counseling, is
            established, without regard to its conflict of law provisions. Any disputes
            arising from or relating to the Service or these Terms will be resolved in the
            courts of that jurisdiction, unless otherwise required by applicable law.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-slate-900">13. Contact information</h2>
          <p>
            If you have questions about these Terms or the Service, you can contact the
            parent organization, Career Corps Counseling, at:
          </p>
          <p className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-800">
            Email:{' '}
            <a
              href="mailto:operations@careercorpscounseling.com"
              className="font-medium text-emerald-700 hover:underline"
            >
              operations@careercorpscounseling.com
            </a>
          </p>
          <p className="text-xs text-slate-500">
            Last updated: {new Date().getFullYear()}.
          </p>
        </section>
      </div>
    </Section>
  )
}