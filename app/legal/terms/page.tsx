import type { Metadata } from "next";
import Link from "next/link";
import { company, legalEffectiveDate } from "@/app/lib/content";

export const metadata: Metadata = {
  title: "Termos de Uso | NUL",
  description: "Termos de Uso do NUL, incluindo UGC, assinaturas e limites de responsabilidade."
};

const sectionClass = "mt-8 space-y-3";
const textClass = "text-sm text-muted leading-7";

export default function TermsPage() {
  return (
    <section className="section-shell max-w-4xl">
      <h1 className="text-4xl font-semibold">Termos de Servico (Terms of Service)</h1>
      <p className="mt-4 text-sm text-muted">Data de vigencia: {legalEffectiveDate}</p>
      <p className="mt-2 text-sm text-muted">Historico de alteracoes: versao inicial publicada em {legalEffectiveDate}.</p>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">1. Aceitacao e elegibilidade</h2>
        <p className={textClass}>
          Ao acessar ou usar o NUL, voce concorda com estes Termos. Voce declara ter capacidade legal para contratar e
          cumprir as leis aplicaveis. Se usar o app em nome de empresa, declara ter poderes para vincula-la.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">2. Conta e seguranca</h2>
        <p className={textClass}>
          Voce e responsavel por manter credenciais seguras, pela veracidade dos dados da conta e por todas as
          atividades realizadas no login. Notifique imediatamente qualquer uso nao autorizado pelo email {company.supportEmail}.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">3. Licenca de uso do app</h2>
        <p className={textClass}>
          Concedemos licenca limitada, pessoal, revogavel, nao exclusiva e intransferivel para uso do NUL conforme estes
          Termos e regras da App Store.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">4. Conteudo do usuario</h2>
        <p className={textClass}>
          Voce mantem os direitos sobre conteudos enviados e gerados, na extensao permitida por lei. Para operar o
          servico, voce concede ao NUL licenca mundial, nao exclusiva e limitada para hospedar, processar, reproduzir e
          exibir esse conteudo durante a prestacao do servico, suporte e seguranca.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">5. Condutas e conteudos proibidos</h2>
        <p className={textClass}>
          E proibido usar o NUL para praticas ilegais, fraude, violacao de propriedade intelectual, assedio, odio,
          violencia, exploracao sexual ou qualquer conteudo vedado por lei ou politicas da plataforma.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">6. UGC, moderacao, remocao e bloqueio</h2>
        <p className={textClass}>
          Podemos analisar, restringir, remover conteudo e bloquear contas para proteger usuarios e cumprir regras.
          Denuncias podem ser feitas no app ou via {company.supportEmail}. Consulte a pagina de <Link href="/safety" className="text-gold underline underline-offset-4">Seguranca e UGC</Link>.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">7. Propriedade intelectual do NUL</h2>
        <p className={textClass}>
          O app, marcas, design, codigo, interfaces e demais ativos do NUL sao protegidos por direitos de propriedade
          intelectual e pertencem a {company.name} ou licenciantes.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">8. Pagamentos, assinaturas e reembolsos</h2>
        <p className={textClass}>
          Planos pagos podem renovar automaticamente conforme ciclo contratado. Cancelamentos e reembolsos, quando
          aplicaveis, seguem as regras da App Store e provedores de pagamento. Valores e beneficios podem ser atualizados
          com aviso previo razoavel.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">9. Isencao de garantias</h2>
        <p className={textClass}>
          O NUL e fornecido &quot;como esta&quot; e &quot;conforme disponivel&quot;, sem garantias de disponibilidade ininterrupta, ausencia
          de erros ou adequacao a objetivos especificos.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">10. Limitacao de responsabilidade</h2>
        <p className={textClass}>
          Na maxima extensao permitida por lei, {company.name} nao responde por danos indiretos, lucros cessantes,
          perda de dados ou danos emergentes relacionados ao uso do NUL.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">11. Rescisao</h2>
        <p className={textClass}>
          Podemos suspender ou encerrar acesso em caso de violacao destes Termos, risco de seguranca ou exigencia legal.
          Voce pode interromper o uso a qualquer momento.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">12. Lei aplicavel e foro</h2>
        <p className={textClass}>
          Estes Termos sao regidos pela legislacao brasileira. Foro: <strong>comarca a definir</strong>, salvo competencia
          legal obrigatoria diversa.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">13. Contato e reclamacoes</h2>
        <p className={textClass}>
          Controlador (LGPD): {company.name}. Canal de contato, suporte e reclamacoes: {company.supportEmail}.
        </p>
      </div>
    </section>
  );
}
