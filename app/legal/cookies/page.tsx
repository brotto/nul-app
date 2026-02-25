import type { Metadata } from "next";
import Link from "next/link";
import { company, legalEffectiveDate } from "@/app/lib/content";

export const metadata: Metadata = {
  title: "Cookie Policy | NUL",
  description: "Cookie Policy for NUL — types of cookies, consent management, and third-party cookies."
};

const sectionClass = "mt-8 space-y-3";
const textClass = "text-sm text-muted leading-7";

export default function CookiesPage() {
  return (
    <section className="section-shell max-w-4xl">
      <h1 className="text-4xl font-semibold">Cookie Policy</h1>
      <p className="mt-4 text-sm text-muted">Last updated: {legalEffectiveDate}</p>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">1. What Are Cookies</h2>
        <p className={textClass}>
          Cookies are small files stored on your device that help with website functionality, usage analytics, and experience personalization.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">2. Cookie Categories</h2>
        <p className={textClass}><strong>Essential:</strong> Required for basic site functionality and security.</p>
        <p className={textClass}><strong>Analytics:</strong> Measure site performance and usage to improve our product.</p>
        <p className={textClass}><strong>Marketing:</strong> Support promotional communications and campaign measurement.</p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">3. Consent</h2>
        <p className={textClass}>
          Non-essential cookies require your consent. Essential cookies may be used based on legitimate interest or technical necessity for service operation. You can manage your cookie preferences using the banner that appears on your first visit.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">4. Managing Your Preferences</h2>
        <p className={textClass}>
          You can accept, reject, or manage non-essential cookie categories via the cookie banner (&quot;Manage&quot; button). To reset your preferences, clear your browser cookies and reload the page.
        </p>
        <p className={textClass}>
          See also our <Link href="/legal/privacy" className="text-gold underline underline-offset-4">Privacy Policy</Link>.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">5. Third-Party Cookies</h2>
        <p className={textClass}>
          We may use third-party analytics, payment, and infrastructure providers. The specific providers may change as our technology evolves and will be reflected on this page when relevant.
        </p>
      </div>
    </section>
  );
}
