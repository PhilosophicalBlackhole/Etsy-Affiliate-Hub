/**
 * @file Privacy Policy page describing data practices for the Etsy Affiliate Hub platform.
 */

import { Section } from '../components/common/Section'
import { PageHeader } from '../components/common/PageHeader'

/**
 * Static Privacy Policy content tailored to the affiliate discovery platform.
 */
export default function PrivacyPolicyPage() {
  return (
    <Section variant="subtle">
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description={
          <>
            This Privacy Policy explains how this independent Etsy creator discovery platform
            (the &quot;Service&quot;) collects, uses, and protects information when you browse
            the site, submit forms, or otherwise interact with us. The Service is operated
            in partnership with the parent organization, Career Corps Counseling
            (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
          </>
        }
      />

      <div className="space-y-6 text-sm text-slate-700">
        <section className="space-y-2">
          <h2 className="text-base font-semibold text-slate-900">1. Information we collect</h2>
          <p>
            We designed the Service so that you can browse most content without creating
            an account. However, we may collect the following categories of information
            when you choose to interact with us:
          </p>
          <ul className="ml-5 list-disc space-y-1">
            <li>
              <span className="font-semibold">Contact information:</span> When you submit
              onboarding, affiliate, or contact forms, we collect the details you provide,
              such as your name, brand name, email address, role, and any free-text
              descriptions of your audience or campaign ideas.
            </li>
            <li>
              <span className="font-semibold">Usage information:</span> We may collect
              anonymized or aggregated technical data about how you use the Service, such
              as pages viewed, approximate location based on IP address, and device or
              browser type. This helps us understand which creators and resources are most
              useful.
            </li>
            <li>
              <span className="font-semibold">Affiliate interaction data:</span> When you
              click outbound affiliate or Etsy shop links, we may append tracking
              parameters (such as UTM tags) to help measure performance in aggregate. Any
              purchases are completed on external platforms (such as Etsy or third-party
              affiliate networks) under their own privacy policies.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-slate-900">
            2. How we use your information
          </h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul className="ml-5 list-disc space-y-1">
            <li>To respond to your inquiries and support requests.</li>
            <li>
              To review affiliate onboarding submissions and determine which Etsy creators
              or categories may be a good fit for you.
            </li>
            <li>
              To share relevant information with participating Etsy creators when you
              explicitly request an affiliate or brand collaboration introduction.
            </li>
            <li>
              To analyze how the Service is used so we can improve content, search,
              filters, and creator discovery features.
            </li>
            <li>
              To maintain the security and reliability of the Service and comply with
              applicable legal obligations.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-slate-900">
            3. Legal bases for processing (where applicable)
          </h2>
          <p>
            Where data protection laws apply (for example, within the European Economic
            Area or the United Kingdom), we rely on the following legal bases:
          </p>
          <ul className="ml-5 list-disc space-y-1">
            <li>
              <span className="font-semibold">Legitimate interests:</span> To provide and
              improve the Service, maintain security, and understand how our platform is
              used by affiliates and creators.
            </li>
            <li>
              <span className="font-semibold">Consent:</span> For certain optional
              communications or when you explicitly ask us to make an introduction or share
              your details with a creator.
            </li>
            <li>
              <span className="font-semibold">Legal obligations:</span> To comply with any
              applicable laws, regulations, or lawful requests from authorities.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-slate-900">
            4. How we share information
          </h2>
          <p>
            We do not sell your personal information. We may share limited information in
            the following situations:
          </p>
          <ul className="ml-5 list-disc space-y-1">
            <li>
              <span className="font-semibold">With participating Etsy creators:</span> If
              you submit an affiliate application or onboarding profile that references a
              specific creator, we may share relevant details (such as your name, brand,
              and audience summary) so they can evaluate a potential collaboration.
            </li>
            <li>
              <span className="font-semibold">With service providers:</span> We may use
              third-party tools for hosting, analytics, or email communication. These
              providers only receive the information needed to perform their services on
              our behalf and are expected to protect it appropriately.
            </li>
            <li>
              <span className="font-semibold">For legal reasons:</span> We may disclose
              information if we believe it is reasonably necessary to comply with a law,
              regulation, legal process, or governmental request, or to protect the rights,
              property, or safety of our users and partners.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-slate-900">5. Cookies and tracking</h2>
          <p>
            The Service may use cookies or similar technologies to maintain session
            preferences and understand aggregate usage patterns. Additionally, outbound
            affiliate and Etsy links may include tracking parameters that allow affiliate
            networks to attribute clicks and qualifying purchases. These third-party
            tracking tools operate under their own policies, and you should review the
            privacy and cookie notices of those services for more information.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-slate-900">
            6. Data retention and security
          </h2>
          <p>
            We keep form submissions and related communication records for as long as
            reasonably necessary to operate the Service, evaluate affiliate relationships,
            and meet our legal obligations. We use reasonable technical and organizational
            safeguards to protect information, but no online service can guarantee absolute
            security.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-slate-900">
            7. Your rights and choices
          </h2>
          <p>
            Depending on your location, you may have rights such as accessing, correcting,
            or requesting deletion of certain personal information we hold about you. You
            may also have the right to object to or restrict certain processing.
          </p>
          <p>
            To exercise these rights or request more information, contact us at{' '}
            <a
              href="mailto:operations@careercorpscounseling.com"
              className="font-medium text-emerald-700 hover:underline"
            >
              operations@careercorpscounseling.com
            </a>
            . We may need to verify your identity before fulfilling certain requests.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-slate-900">
            8. International transfers
          </h2>
          <p>
            The Service may be accessed from many countries, and information you provide
            may be processed in jurisdictions that have different data protection laws than
            your own. Where required, we take steps to ensure that such transfers comply
            with applicable legal requirements.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-slate-900">
            9. Third-party websites and Etsy
          </h2>
          <p>
            The Service links to external websites, including Etsy and affiliate network
            dashboards. We are not responsible for the content, security, or privacy
            practices of those third-party services. Your use of Etsy and any affiliate
            platforms is governed by their own terms and policies.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-slate-900">
            10. Updates to this Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes to the
            Service or legal requirements. When we do, we will adjust the &quot;Last
            updated&quot; date at the bottom of this page. We encourage you to review this
            page periodically.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-slate-900">11. Contact us</h2>
          <p>
            If you have questions about this Privacy Policy or our data practices, you can
            contact the parent organization, Career Corps Counseling, at:
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