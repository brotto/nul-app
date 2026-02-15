import type { Metadata } from "next";
import Link from "next/link";
import { company, legalEffectiveDate } from "@/app/lib/content";

export const metadata: Metadata = {
  title: "Politica de Cookies | NUL",
  description: "Politica de Cookies do NUL e gestao de consentimento conforme LGPD."
};

const sectionClass = "mt-8 space-y-3";
const textClass = "text-sm text-muted leading-7";

export default function CookiesPage() {
  return (
    <section className="section-shell max-w-4xl">
      <h1 className="text-4xl font-semibold">Politica de Cookies</h1>
      <p className="mt-4 text-sm text-muted">Ultima atualizacao: {legalEffectiveDate}</p>
      <p className="mt-2 text-sm text-muted">Controlador (LGPD): {company.name}</p>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">1. O que sao cookies</h2>
        <p className={textClass}>
          Cookies sao pequenos arquivos que ajudam no funcionamento do site, analise de uso e personalizacao de
          experiencia.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">2. Categorias de cookies</h2>
        <p className={textClass}>Essenciais: necessarios para funcionalidades basicas e seguranca.</p>
        <p className={textClass}>Analiticos: medem desempenho e uso para melhoria do produto.</p>
        <p className={textClass}>Marketing: apoiam comunicacao promocional e medicao de campanhas.</p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">3. Base legal (LGPD)</h2>
        <p className={textClass}>
          Cookies nao essenciais dependem de consentimento. Cookies essenciais podem ser usados com base em interesse
          legitimo/necessidade tecnica para operacao do servico.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">4. Como gerenciar preferencias</h2>
        <p className={textClass}>
          Voce pode aceitar, rejeitar ou gerenciar categorias nao essenciais no banner de cookies (botao "Gerenciar"). Para revisar
          preferencias, limpe os cookies locais do navegador e recarregue a pagina.
        </p>
        <p className={textClass}>
          Consulte tambem nossa <Link href="/legal/privacy" className="text-gold underline underline-offset-4">Politica de Privacidade</Link>.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">5. Cookies de terceiros</h2>
        <p className={textClass}>
          Podemos usar provedores terceirizados de analytics, pagamentos e infraestrutura. A lista pode variar conforme
          evolucao tecnica e sera refletida nesta pagina quando relevante.
        </p>
      </div>
    </section>
  );
}
