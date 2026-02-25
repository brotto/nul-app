import type { Metadata } from "next";
import { AppStoreBadges } from "@/app/components/AppStoreBadge";
import { creditPacks, pricingComparison, pricingPlans } from "@/app/lib/content";

export const metadata: Metadata = {
  title: "Pricing | NUL",
  description: "Credit-based pricing for NUL — Pay As You Go, Pro Monthly, and Pro Annual plans. All purchases are in-app."
};

export default function PricingPage() {
  return (
    <section className="section-shell space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-semibold">Pricing</h1>
        <p className="mt-3 max-w-2xl text-muted">
          NUL is free to download. All credit packs and subscriptions are purchased directly
          within the app through the App Store.
        </p>
      </div>

      {/* ── Subscription Plans ─────────────────────────────────── */}
      <div>
        <h2 className="text-2xl font-semibold">Plans</h2>
        <p className="mt-1 text-sm text-muted">Subscriptions are eligible for Apple Family Sharing.</p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-2xl border bg-surface p-6 ${
                plan.highlight
                  ? "border-gold/50 shadow-glow"
                  : "border-gold/20"
              }`}
            >
              {plan.highlight && (
                <span className="mb-3 inline-block rounded-full bg-gold/15 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-gold">
                  Most popular
                </span>
              )}
              <h3 className="text-2xl font-semibold">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted">{plan.subtitle}</p>
              <p className="mt-4 text-3xl font-semibold text-gold">{plan.price}</p>
              <ul className="mt-5 space-y-2 text-sm text-muted">
                {plan.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-0.5 text-gold">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      {/* ── Credit Packs ──────────────────────────────────────── */}
      <div>
        <h2 className="text-2xl font-semibold">Credit Packs</h2>
        <p className="mt-1 text-sm text-muted">One-time purchases — buy only what you need. Pro subscribers get a bonus on every pack.</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {creditPacks.map((pack) => (
            <article key={pack.name} className="rounded-xl border border-gold/20 bg-surface p-5 text-center">
              <p className="text-xs font-medium uppercase tracking-wider text-gold/70">{pack.name}</p>
              <p className="mt-2 text-3xl font-semibold">{pack.credits.toLocaleString()}</p>
              <p className="text-xs text-muted">credits</p>
              <p className="mt-3 text-lg font-semibold text-gold">{pack.price}</p>
            </article>
          ))}
        </div>
      </div>

      {/* ── Comparison Table ──────────────────────────────────── */}
      <div>
        <h2 className="text-2xl font-semibold">Compare plans</h2>
        <div className="mt-5 overflow-x-auto rounded-2xl border border-gold/20">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-surface text-text">
              <tr>
                <th className="px-4 py-3">Feature</th>
                <th className="px-4 py-3">Pay As You Go</th>
                <th className="px-4 py-3">Pro Monthly</th>
                <th className="px-4 py-3">Pro Annual</th>
              </tr>
            </thead>
            <tbody>
              {pricingComparison.map((row) => (
                <tr key={row.feature} className="border-t border-gold/15 text-muted">
                  <td className="px-4 py-3">{row.feature}</td>
                  <td className="px-4 py-3">{row.free}</td>
                  <td className="px-4 py-3">{row.pro}</td>
                  <td className="px-4 py-3">{row.studio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── How to purchase ───────────────────────────────────── */}
      <div className="rounded-2xl border border-gold/20 bg-surface p-6">
        <h2 className="text-xl font-semibold">How to purchase</h2>
        <p className="mt-2 text-sm text-muted">
          Download NUL for free on your iPhone, iPad, or Mac. All credit packs and subscriptions are
          available as in-app purchases through the App Store. Billing and payment are managed
          entirely by Apple — secure, simple, and instant.
        </p>
        <p className="mt-3 text-sm text-muted">
          Pro subscriptions support <strong className="text-text">Apple Family Sharing</strong> — one subscription covers up to 6 family members.
          Credit packs are tied to your individual account.
        </p>
        <AppStoreBadges className="mt-5" />
      </div>
    </section>
  );
}
