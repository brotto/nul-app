import Link from "next/link";
import dynamic from "next/dynamic";
import { AppMockup } from "@/app/components/AppMockup";
import { AppStoreBadges } from "@/app/components/AppStoreBadge";
import { FaqAccordion } from "@/app/components/FaqAccordion";
import { YouTubeEmbed } from "@/app/components/YouTubeEmbed";

const FluidBackground = dynamic(() => import("@/app/components/FluidCanvas"), {
  ssr: false,
});
import {
  appConfig,
  faqItems,
  features,
  howItWorks,
  integrations,
  modelCatalog,
  pricingComparison,
  pricingPlans,
  safetyHighlights,
  socialProof
} from "@/app/lib/content";

export default function HomePage() {
  return (
    <>
      <section id="product" className="relative isolate min-h-[90vh] overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
          <FluidBackground />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0B0B0E] to-transparent" />
        </div>
        <div className="section-shell relative z-10 pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-gold/30 bg-surface/80 backdrop-blur-sm px-3 py-1 text-xs text-gold">
                AI-powered multimodal studio
              </p>
              <h1 className="text-4xl font-semibold leading-tight md:text-6xl">From nothing, everything.</h1>
              <p className="mt-5 max-w-xl text-lg text-muted">
                Generate videos, images, audio, and transcriptions with AI in one studio.
              </p>
              <AppStoreBadges className="mt-8" />
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="#demo" className="rounded-xl border border-gold/40 bg-black/40 backdrop-blur-sm px-5 py-3 text-sm font-semibold text-text transition hover:border-gold">
                  Watch demo
                </Link>
                <Link href="/support#waitlist" className="rounded-xl border border-gold/40 bg-black/40 backdrop-blur-sm px-5 py-3 text-sm font-semibold text-text transition hover:border-gold">
                  Join waitlist
                </Link>
              </div>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {socialProof.map((item) => (
                  <div key={item} className="rounded-xl border border-gold/20 bg-surface/80 backdrop-blur-sm p-3 text-sm text-muted">{item}</div>
                ))}
              </div>
            </div>
            <AppMockup />
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section-shell">
        <h2 className="text-3xl font-semibold">How It Works</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {howItWorks.map((step, index) => (
            <article key={step.title} className="rounded-2xl border border-gold/25 bg-surface p-5">
              <p className="text-xs text-gold">Step {index + 1}</p>
              <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm text-muted">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="features" className="section-shell">
        <div className="text-center">
          <p className="mb-3 inline-flex rounded-full border border-gold/30 bg-surface px-3 py-1 text-xs text-gold">
            50+ AI models from 13 providers
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">All the best AI models,<br className="hidden sm:block" /> one studio.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            From Google Veo and OpenAI Sora to Midjourney and ElevenLabs — access every frontier model without switching apps.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {modelCatalog.map((section) => (
            <div key={section.category}>
              <div className="mb-5 flex items-center gap-3">
                <span className="text-2xl">{section.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold">{section.label}</h3>
                  <p className="text-sm text-muted">{section.description}</p>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {section.models.map((model) => (
                  <article
                    key={model.name}
                    className="group relative rounded-xl border border-gold/15 bg-surface p-4 transition hover:border-gold/40 hover:shadow-glow"
                  >
                    {model.badge && (
                      <span className="absolute right-3 top-3 rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold">
                        {model.badge}
                      </span>
                    )}
                    <p className="text-xs font-medium uppercase tracking-wider text-gold/70">{model.provider}</p>
                    <h4 className="mt-1 text-[15px] font-semibold leading-snug">{model.name}</h4>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {model.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className="rounded-md bg-gold/8 px-2 py-0.5 text-[11px] text-muted"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-muted">
            New models are added regularly. <span className="text-gold">More coming soon.</span>
          </p>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-gold/20 bg-surface p-6">
            <h2 className="text-2xl font-semibold">Quality & Safety</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {safetyHighlights.map((item) => (
                <li key={item} className="rounded-lg border border-gold/20 px-3 py-2">{item}</li>
              ))}
            </ul>
            <Link href="/safety" className="mt-4 inline-block text-sm text-gold underline underline-offset-4">View Safety & UGC Policy</Link>
          </article>
          <article className="rounded-2xl border border-gold/20 bg-surface p-6">
            <h2 className="text-2xl font-semibold">Integrations</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {integrations.map((item) => (
                <li key={item} className="rounded-lg border border-gold/20 px-3 py-2">{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section id="demo" className="section-shell">
        <h2 className="text-3xl font-semibold">See NUL in Action</h2>
        <p className="mt-2 text-sm text-muted">Demo video showcasing the multimodal creation workflow.</p>
        <div className="mt-6"><YouTubeEmbed /></div>
      </section>

      <section id="pricing" className="section-shell">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold">Pricing</h2>
            <p className="mt-2 text-sm text-muted">All purchases are made within the app via the App Store. Pro plans support Family Sharing.</p>
          </div>
          <Link href="/pricing" className="text-sm text-gold underline underline-offset-4">View details</Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-2xl border bg-surface p-5 ${
                plan.highlight ? "border-gold/50 shadow-glow" : "border-gold/20"
              }`}
            >
              {plan.highlight && (
                <span className="mb-2 inline-block rounded-full bg-gold/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold">
                  Most popular
                </span>
              )}
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted">{plan.subtitle}</p>
              <p className="mt-4 text-2xl font-semibold text-gold">{plan.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
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
        <p className="mt-4 text-center text-xs text-muted">
          Credit packs also available: 100 credits ($4.99) · 400 ($14.99) · 1,000 ($29.99) · 3,000 ($74.99)
        </p>
      </section>

      <section id="faq" className="section-shell pb-20">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-3xl font-semibold">FAQ</h2>
          <Link href="/faq" className="text-sm text-gold underline underline-offset-4">View all</Link>
        </div>
        <FaqAccordion />
        <p className="mt-6 text-sm text-muted">{faqItems.length} common questions to get you started.</p>
      </section>

      <section className="section-shell pt-0">
        <div className="rounded-2xl border border-gold/30 bg-surface p-6">
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Ready to create with NUL?</h2>
              <p className="mt-2 text-sm text-muted">Available on iPhone, iPad, and Mac.</p>
            </div>
            <Link href="/support#waitlist" className="mt-4 inline-block rounded-xl border border-gold/40 px-5 py-3 text-sm font-semibold text-text md:mt-0">Join waitlist</Link>
          </div>
          <AppStoreBadges className="mt-5" />
        </div>
      </section>
    </>
  );
}
