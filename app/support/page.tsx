import type { Metadata } from "next";
import { company } from "@/app/lib/content";

export const metadata: Metadata = {
  title: "Support | NUL",
  description: "Contact support, privacy inquiries, and safety reports for NUL."
};

export default function SupportPage() {
  return (
    <section className="section-shell">
      <h1 className="text-4xl font-semibold">Support</h1>
      <p className="mt-3 text-sm text-muted">Contact us for support, privacy, UGC, and safety inquiries.</p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl border border-gold/20 bg-surface p-6">
          <h2 className="text-xl font-semibold">Email Support</h2>
          <p className="mt-2 text-sm text-muted">General support, reports, and data subject requests.</p>
          <a href={`mailto:${company.supportEmail}`} className="mt-4 inline-block text-gold underline underline-offset-4">{company.supportEmail}</a>
        </article>

        <article className="rounded-2xl border border-gold/20 bg-surface p-6">
          <h2 className="text-xl font-semibold">Telegram</h2>
          <p className="mt-2 text-sm text-muted">Quick support and direct chat with our dev team.</p>
          <a href={company.telegramUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-gold underline underline-offset-4">{company.telegramHandle}</a>
        </article>

        <article id="waitlist" className="rounded-2xl border border-gold/20 bg-surface p-6">
          <h2 className="text-xl font-semibold">Join the Waitlist</h2>
          <p className="mt-2 text-sm text-muted">Not on iOS? Enter your email to get notified when we launch on other platforms.</p>
          <form className="mt-4 space-y-3" action="#" method="post">
            <label className="block">
              <span className="mb-1 block text-xs text-muted">Email</span>
              <input type="email" required placeholder="you@example.com" className="w-full rounded-lg border border-gold/35 bg-bg px-3 py-2 text-sm text-text outline-none ring-gold focus:ring-2" />
            </label>
            <button type="submit" className="rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-black">Join waitlist</button>
          </form>
        </article>
      </div>
    </section>
  );
}
