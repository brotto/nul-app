import type { Metadata } from "next";
import { AppStoreBadge } from "@/app/components/AppStoreBadge";
import { pricingComparison, pricingPlans } from "@/app/lib/content";

export const metadata: Metadata = {
  title: "Pricing | NUL",
  description: "Planos Free, Pro e Studio para criadores e equipes."
};

export default function PricingPage() {
  return (
    <section className="section-shell">
      <h1 className="text-4xl font-semibold">Pricing</h1>
      <p className="mt-3 max-w-2xl text-sm text-muted">
        Valores de referencia sujeitos a alteracao. Assinaturas e cobrancas seguem regras da App Store quando aplicavel.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {pricingPlans.map((plan) => (
          <article key={plan.name} className="rounded-2xl border border-gold/20 bg-surface p-6">
            <h2 className="text-2xl font-semibold">{plan.name}</h2>
            <p className="mt-1 text-sm text-muted">{plan.subtitle}</p>
            <p className="mt-4 text-3xl font-semibold text-gold">{plan.price}</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {plan.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-8 overflow-x-auto rounded-2xl border border-gold/20">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-surface text-text">
            <tr>
              <th className="px-4 py-3">Recurso</th>
              <th className="px-4 py-3">Free</th>
              <th className="px-4 py-3">Pro</th>
              <th className="px-4 py-3">Studio</th>
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

      <div className="mt-8">
        <AppStoreBadge />
      </div>
    </section>
  );
}
