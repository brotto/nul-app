import type { Metadata } from "next";
import { company } from "@/app/lib/content";

export const metadata: Metadata = {
  title: "Suporte | NUL",
  description: "Contato de suporte, privacidade e seguranca do NUL."
};

export default function SupportPage() {
  return (
    <section className="section-shell">
      <h1 className="text-4xl font-semibold">Suporte</h1>
      <p className="mt-3 text-sm text-muted">
        Atendimento publico para suporte, privacidade, UGC e seguranca.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-gold/20 bg-surface p-6">
          <h2 className="text-xl font-semibold">Contato por email</h2>
          <p className="mt-2 text-sm text-muted">Suporte geral, denuncias e solicitacoes LGPD.</p>
          <a href={`mailto:${company.supportEmail}`} className="mt-4 inline-block text-gold underline underline-offset-4">
            {company.supportEmail}
          </a>
        </article>

        <article id="waitlist" className="rounded-2xl border border-gold/20 bg-surface p-6">
          <h2 className="text-xl font-semibold">Join waitlist</h2>
          <p className="mt-2 text-sm text-muted">
            Nao esta no iOS? Envie seu email para entrar na lista de acesso em novas plataformas.
          </p>
          <form className="mt-4 space-y-3" action="#" method="post">
            <label className="block">
              <span className="mb-1 block text-xs text-muted">Email</span>
              <input
                type="email"
                required
                placeholder="voce@exemplo.com"
                className="w-full rounded-lg border border-gold/35 bg-bg px-3 py-2 text-sm text-text outline-none ring-gold focus:ring-2"
              />
            </label>
            <button type="submit" className="rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-black">
              Entrar na lista
            </button>
          </form>
        </article>
      </div>
    </section>
  );
}
