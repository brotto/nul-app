import type { Metadata } from "next";
import Link from "next/link";
import { company, legalEffectiveDate } from "@/app/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy | NUL",
  description: "Privacy Policy for NUL — data collection, usage, third-party sharing, and your rights."
};

const sectionClass = "mt-8 space-y-3";
const textClass = "text-sm text-muted leading-7";

export default function PrivacyPage() {
  return (
    <section className="section-shell max-w-4xl">
      <h1 className="text-4xl font-semibold">Privacy Policy</h1>
      <p className="mt-4 text-sm text-muted">Last updated: {legalEffectiveDate}</p>
      <p className="mt-2 text-sm text-muted">Data controller: {company.name}</p>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">1. Contact</h2>
        <p className={textClass}>
          For privacy inquiries, support, and data subject requests: {company.supportEmail}.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">2. Data We Collect</h2>
        <p className={textClass}>
          We collect minimal personal data required to operate the service:
        </p>
        <ul className="list-disc pl-6 text-sm text-muted leading-7 space-y-1">
          <li>Apple ID identifier (for authentication);</li>
          <li>Optional name and email (if provided via Sign in with Apple);</li>
          <li>Prompts and content metadata submitted for AI generation;</li>
          <li>Device information and technical logs for diagnostics;</li>
          <li>Billing information processed by Apple for In-App Purchases.</li>
        </ul>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">3. How We Use Your Data</h2>
        <p className={textClass}>
          We process data to provide the service (content generation, account management), ensure security and prevent abuse, improve our product, and comply with legal obligations. For non-essential cookies and marketing communications, we rely on your consent.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">4. Data Sharing</h2>
        <p className={textClass}>
          We share data with infrastructure providers, AI service providers (for content generation), analytics tools, and payment processors — strictly as necessary to operate NUL, under contractual confidentiality and security obligations.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">5. International Transfers</h2>
        <p className={textClass}>
          Some of our service providers may process data outside of Brazil. In such cases, we adopt appropriate safeguards and legal bases for international data transfers.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">6. Data Retention and Deletion</h2>
        <p className={textClass}>
          We retain data for as long as necessary to fulfill the purposes described above, comply with legal obligations, and exercise our legal rights. Upon valid request, we may delete or anonymize your data where applicable.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">7. Your Rights</h2>
        <p className={textClass}>
          Depending on your jurisdiction, you may have rights including: access to your data, correction, deletion, portability, restriction of processing, and withdrawal of consent. To exercise these rights, contact {company.supportEmail}.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">8. Information Security</h2>
        <p className={textClass}>
          We employ technical and organizational measures to protect against unauthorized access, loss, alteration, and improper disclosure of personal data.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">9. Children</h2>
        <p className={textClass}>
          The App is not directed at children under 17. We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, please contact {company.supportEmail}.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">10. Cookies</h2>
        <p className={textClass}>
          Our website uses cookies. For details on what cookies we use and how to manage your preferences, see our <Link href="/legal/cookies" className="text-gold underline underline-offset-4">Cookie Policy</Link>.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">11. Changes to This Policy</h2>
        <p className={textClass}>
          We may update this policy to reflect legal, technical, or operational changes. The current version will always be available on this page with the last updated date.
        </p>
      </div>
    </section>
  );
}
