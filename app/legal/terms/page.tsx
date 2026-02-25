import type { Metadata } from "next";
import Link from "next/link";
import { company, legalEffectiveDate } from "@/app/lib/content";

export const metadata: Metadata = {
  title: "Terms of Service | NUL",
  description: "Terms of Service for NUL, including credits, subscriptions, acceptable use, and liability."
};

const sectionClass = "mt-8 space-y-3";
const textClass = "text-sm text-muted leading-7";

export default function TermsPage() {
  return (
    <section className="section-shell max-w-4xl">
      <h1 className="text-4xl font-semibold">Terms of Service</h1>
      <p className="mt-4 text-sm text-muted">Effective date: {legalEffectiveDate}</p>
      <p className="mt-2 text-sm text-muted">Version history: initial version published on {legalEffectiveDate}.</p>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
        <p className={textClass}>
          By creating an account and using NUL (&quot;the App&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree, do not use the App.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">2. Description of Service</h2>
        <p className={textClass}>
          NUL is a premium AI-powered creative platform that enables users to generate videos, images, music, and audio using state-of-the-art artificial intelligence models. Content is generated on-demand using a credit-based system.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">3. Account and Authentication</h2>
        <p className={textClass}>
          You must sign in with your Apple ID to use the App. You are responsible for all activity under your account. You must be at least 17 years old to use this App.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">4. Credits and Payments</h2>
        <p className={textClass}>
          Credits are purchased through Apple In-App Purchases and are subject to Apple&apos;s payment terms. Credits are non-refundable once used for content generation. Subscription plans provide monthly credit allowances and bonus multipliers as described at the time of purchase. Unused subscription credits do not roll over to the next billing period. All prices are in USD and may vary by region per Apple&apos;s pricing tiers.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">5. Acceptable Use</h2>
        <p className={textClass}>You agree NOT to use the App to generate content that:</p>
        <ul className="list-disc pl-6 text-sm text-muted leading-7 space-y-1">
          <li>Contains nudity, pornography, or sexually explicit material;</li>
          <li>Promotes violence, terrorism, or self-harm;</li>
          <li>Contains hate speech, discrimination, or harassment;</li>
          <li>Infringes on third-party intellectual property or copyrights;</li>
          <li>Depicts real individuals without their consent;</li>
          <li>Violates any applicable law or regulation;</li>
          <li>Attempts to bypass content safety filters.</li>
        </ul>
        <p className={textClass}>
          The App employs automated content filtering. Violations may result in content rejection, account suspension, or permanent termination without refund.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">6. User Content and Intellectual Property</h2>
        <p className={textClass}>
          Content generated through the App is licensed to you for personal and commercial use, subject to these Terms. You acknowledge that AI-generated content may have limitations and should not be represented as human-created work without disclosure. NUL and its branding, logos, and interface design are the intellectual property of the developer.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">7. Content Moderation (UGC)</h2>
        <p className={textClass}>
          We may analyze, restrict, remove content and block accounts to protect users and enforce our policies. Reports can be submitted through the App or via {company.supportEmail}. See our <Link href="/safety" className="text-gold underline underline-offset-4">Safety & UGC Policy</Link>.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">8. Third-Party Services</h2>
        <p className={textClass}>
          The App utilizes third-party AI service providers for content generation. These providers have their own terms and content policies that apply in addition to these Terms. Generated content URLs are temporary and expire approximately 14 days after creation.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">9. Privacy</h2>
        <p className={textClass}>
          Your use of the App is also governed by our <Link href="/legal/privacy" className="text-gold underline underline-offset-4">Privacy Policy</Link>. We collect minimal personal data (Apple ID identifier, optional name and email). Prompts and generated content metadata may be processed by our AI service providers.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">10. Disclaimer of Warranties</h2>
        <p className={textClass}>
          The App is provided &quot;as is&quot; without warranties of any kind. We do not guarantee that generated content will meet your expectations, be error-free, or be available without interruption.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">11. Limitation of Liability</h2>
        <p className={textClass}>
          To the maximum extent permitted by law, {company.name} shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the App, including but not limited to loss of data, revenue, or profits.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">12. Account Termination</h2>
        <p className={textClass}>
          We reserve the right to suspend or terminate your account at any time for violation of these Terms, without prior notice and without refund of unused credits.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">13. Changes to Terms</h2>
        <p className={textClass}>
          We may update these Terms from time to time. Continued use of the App after changes constitutes acceptance of the updated Terms. Material changes will require re-acceptance within the App.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">14. Governing Law</h2>
        <p className={textClass}>
          These Terms are governed by the laws of the Federative Republic of Brazil. Any disputes shall be resolved in the courts of the State of Parana, Brazil.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">15. Contact</h2>
        <p className={textClass}>
          For questions about these Terms, contact us at {company.supportEmail}.
        </p>
      </div>
    </section>
  );
}
