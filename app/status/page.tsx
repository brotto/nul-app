import type { Metadata } from "next";
import Link from "next/link";
import { appConfig } from "@/app/lib/content";

export const metadata: Metadata = {
  title: "Status | NUL",
  description: "Status operacional do NUL."
};

export default function StatusPage() {
  return (
    <section className="section-shell">
      <h1 className="text-4xl font-semibold">Status</h1>
      <p className="mt-3 text-sm text-muted">Pagina estatica de status para App Store e suporte.</p>

      <article className="mt-8 rounded-2xl border border-gold/20 bg-surface p-6">
        <p className="text-lg">Todos os sistemas principais: operacional.</p>
        <p className="mt-3 text-sm text-muted">Atualizacao automatica sera integrada conforme monitoramento evoluir.</p>
        {appConfig.statusUrl ? (
          <Link
            href={appConfig.statusUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-gold underline underline-offset-4"
          >
            Abrir status externo
          </Link>
        ) : null}
      </article>
    </section>
  );
}
