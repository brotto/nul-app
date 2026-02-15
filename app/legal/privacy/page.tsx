import type { Metadata } from "next";
import { company, legalEffectiveDate } from "@/app/lib/content";

export const metadata: Metadata = {
  title: "Politica de Privacidade | NUL",
  description: "Politica de Privacidade do NUL em conformidade com a LGPD."
};

const sectionClass = "mt-8 space-y-3";
const textClass = "text-sm text-muted leading-7";

export default function PrivacyPage() {
  return (
    <section className="section-shell max-w-4xl">
      <h1 className="text-4xl font-semibold">Politica de Privacidade</h1>
      <p className="mt-4 text-sm text-muted">Ultima atualizacao: {legalEffectiveDate}</p>
      <p className="mt-2 text-sm text-muted">Controlador de dados (LGPD): {company.name}</p>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">1. Contato do controlador e privacidade</h2>
        <p className={textClass}>
          Publico geral, suporte e privacidade: {company.supportEmail}. DPO/encarregado: contato inicial pelo mesmo
          canal, com encaminhamento interno conforme natureza da solicitacao.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">2. Dados que coletamos</h2>
        <p className={textClass}>
          Podemos coletar dados de cadastro, uso da conta, conteudos enviados para geracao, logs tecnicos,
          diagnosticos, informacoes de dispositivo e dados de cobranca quando houver assinatura.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">3. Finalidades e bases legais (LGPD)</h2>
        <p className={textClass}>
          Tratamos dados para executar contrato (prestacao do servico), atender interesses legitimos (seguranca,
          prevencao a fraude e melhoria de produto) e com consentimento quando exigido, especialmente para cookies nao
          essenciais e comunicacoes de marketing.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">4. Compartilhamento de dados</h2>
        <p className={textClass}>
          Compartilhamos com provedores de infraestrutura, analytics, suporte, processamento de pagamentos e parceiros
          tecnicos estritamente necessarios para operar o NUL, sob obrigacoes contratuais de confidencialidade e
          seguranca.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">5. Transferencia internacional</h2>
        <p className={textClass}>
          Alguns fornecedores podem processar dados fora do Brasil. Nesses casos, adotamos medidas de protecao e bases
          legais adequadas para transferencia internacional.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">6. Retencao e exclusao</h2>
        <p className={textClass}>
          Mantemos dados pelo periodo necessario para cumprir finalidades, obrigacoes legais e exercicio regular de
          direitos. Mediante solicitacao valida, podemos excluir ou anonimizar dados quando aplicavel.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">7. Direitos do titular (LGPD)</h2>
        <p className={textClass}>
          Voce pode solicitar confirmacao de tratamento, acesso, correcao, portabilidade, anonimização, bloqueio,
          eliminacao, informacoes sobre compartilhamento e revogacao de consentimento. Para exercer direitos, contate {company.supportEmail}.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">8. Seguranca da informacao</h2>
        <p className={textClass}>
          Adotamos medidas tecnicas e organizacionais para reduzir riscos de acesso nao autorizado, perda, alteracao e
          divulgacao indevida de dados.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">9. Criancas e adolescentes</h2>
        <p className={textClass}>
          O servico nao e direcionado a criancas. Quando houver conteudo sensivel, aplicamos mecanismos de restricao por
          idade declarada ou verificada, conforme disponibilidade tecnica.
        </p>
      </div>

      <div className={sectionClass}>
        <h2 className="text-2xl font-semibold">10. Atualizacoes desta politica</h2>
        <p className={textClass}>
          Podemos atualizar esta politica para refletir mudancas legais, tecnicas ou operacionais. A versao vigente
          estara sempre nesta pagina com data de atualizacao.
        </p>
      </div>
    </section>
  );
}
