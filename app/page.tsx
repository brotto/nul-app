import Link from "next/link";
import { AppMockup } from "@/app/components/AppMockup";
import { AppStoreBadge } from "@/app/components/AppStoreBadge";
import { FaqAccordion } from "@/app/components/FaqAccordion";
import { YouTubeEmbed } from "@/app/components/YouTubeEmbed";
import {
  appConfig,
  faqItems,
  features,
  howItWorks,
  integrations,
  pricingComparison,
  pricingPlans,
  safetyHighlights,
  socialProof
} from "@/app/lib/content";

export default function HomePage() {
  return (
    <>
      <section id="produto" className="section-shell pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-gold/30 bg-surface px-3 py-1 text-xs text-gold">
              Estudio multimodal por IA
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">Do nada, tudo.</h1>
            <p className="mt-5 max-w-xl text-lg text-muted">
              Crie videos, imagens, audios e transcricoes com IA em um unico estudio.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <AppStoreBadge />
              <Link
                href="#demo"
                className="rounded-xl border border-gold/40 px-5 py-3 text-sm font-semibold text-text transition hover:border-gold"
              >
                Ver demo
              </Link>
              <Link
                href="/support#waitlist"
                className="rounded-xl border border-gold/40 px-5 py-3 text-sm font-semibold text-text transition hover:border-gold"
              >
                Entrar na lista
              </Link>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {socialProof.map((item) => (
                <div key={item} className="rounded-xl border border-gold/20 bg-surface p-3 text-sm text-muted">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <AppMockup />
        </div>
      </section>

      <section id="como-funciona" className="section-shell">
        <h2 className="text-3xl font-semibold">Como funciona</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {howItWorks.map((step, index) => (
            <article key={step.title} className="rounded-2xl border border-gold/25 bg-surface p-5">
              <p className="text-xs text-gold">Passo {index + 1}</p>
              <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm text-muted">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="recursos" className="section-shell">
        <h2 className="text-3xl font-semibold">Recursos</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-2xl border border-gold/20 bg-surface p-5 transition hover:shadow-glow">
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-gold/20 bg-surface p-6">
            <h2 className="text-2xl font-semibold">Qualidade & segurança</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {safetyHighlights.map((item) => (
                <li key={item} className="rounded-lg border border-gold/20 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/safety" className="mt-4 inline-block text-sm text-gold underline underline-offset-4">
              Ver politica de seguranca e UGC
            </Link>
          </article>
          <article className="rounded-2xl border border-gold/20 bg-surface p-6">
            <h2 className="text-2xl font-semibold">Integracoes</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {integrations.map((item) => (
                <li key={item} className="rounded-lg border border-gold/20 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section id="demo" className="section-shell">
        <h2 className="text-3xl font-semibold">Veja o NUL em acao</h2>
        <p className="mt-2 text-sm text-muted">Demo em video com fluxo de criacao multimodal.</p>
        <div className="mt-6">
          <YouTubeEmbed />
        </div>
      </section>

      <section id="pricing" className="section-shell">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold">Pricing</h2>
            <p className="mt-2 text-sm text-muted">Planos para experimentar, criar e escalar.</p>
          </div>
          <Link href="/pricing" className="text-sm text-gold underline underline-offset-4">
            Ver detalhes
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article key={plan.name} className="rounded-2xl border border-gold/20 bg-surface p-5">
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted">{plan.subtitle}</p>
              <p className="mt-4 text-2xl font-semibold text-gold">{plan.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {plan.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-gold/20">
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
      </section>

      <section id="faq" className="section-shell pb-20">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-3xl font-semibold">FAQ</h2>
          <Link href="/faq" className="text-sm text-gold underline underline-offset-4">
            Ver todas
          </Link>
        </div>
        <FaqAccordion />
        <p className="mt-6 text-sm text-muted">
          {faqItems.length} perguntas principais para comecar com seguranca.
        </p>
      </section>

      <section className="section-shell pt-0">
        <div className="rounded-2xl border border-gold/30 bg-surface p-6 md:flex md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Pronto para criar com o NUL?</h2>
            <p className="mt-2 text-sm text-muted">No iOS, baixe agora. Em outras plataformas, entre na lista.</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-3 md:mt-0">
            <AppStoreBadge />
            <Link href="/support#waitlist" className="rounded-xl border border-gold/40 px-5 py-3 text-sm font-semibold text-text">
              Join waitlist
            </Link>
          </div>
        </div>
        <p className="mt-4 text-xs text-muted">Status: {appConfig.statusUrl || "pagina estatica local"}</p>
      </section>
    </>
  );
}
