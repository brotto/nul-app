import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/app/lib/content";

export const metadata: Metadata = {
  title: "Safety & UGC | NUL",
  description: "Safety policy, content moderation, and user-generated content guidelines for NUL."
};

export default function SafetyPage() {
  return (
    <section className="section-shell prose prose-invert max-w-4xl prose-headings:text-text prose-p:text-muted prose-li:text-muted">
      <h1>Safety & User-Generated Content (UGC)</h1>
      <p>
        This policy describes how NUL prevents abuse, processes reports, and protects our community. Contact for reports and safety: <strong>{company.supportEmail}</strong>.
      </p>

      <h2>1. Prohibited Content</h2>
      <ul>
        <li>Hate speech, harassment, threats, or intimidation.</li>
        <li>Extreme violence, incitement to physical harm, or illegal activities.</li>
        <li>Sexual exploitation, including any material involving minors.</li>
        <li>Sexually explicit content not permitted by platform guidelines.</li>
        <li>Fraud, phishing, social engineering, or intellectual property violations.</li>
      </ul>

      <h2>2. Reporting</h2>
      <p>
        Users can report content, accounts, and interactions directly within the App. We also accept reports via email at {company.supportEmail}, including links, screenshots, or project IDs for review.
      </p>

      <h2>3. Review and Response</h2>
      <p>
        Reports are reviewed with priority, combining automated filters and human review when necessary. Response time may vary by complexity and volume.
      </p>

      <h2>4. Account Actions</h2>
      <p>
        We may remove content, restrict features, suspend, or terminate accounts that violate this policy, our <Link href="/legal/terms">Terms of Service</Link>, or applicable laws.
      </p>

      <h2>5. Automated Filtering</h2>
      <p>
        NUL uses automated detection mechanisms for risk categories and applies manual review in sensitive cases. We continuously improve our models to reduce false positives and negatives.
      </p>

      <h2>6. Minors and Age Ratings</h2>
      <p>
        NUL is not directed at children. The App requires users to be at least 17 years old. Content that may exceed certain age thresholds may be subject to additional restrictions.
      </p>

      <h2>7. Safety Contact</h2>
      <p>
        Primary channel: {company.supportEmail}. For reports requiring attachments, contact us via email and we will provide a secure submission method.
      </p>
    </section>
  );
}
