import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/app/lib/content";

export const metadata: Metadata = {
  title: "Seguranca e UGC | NUL",
  description: "Politica de seguranca, moderacao e conteudo gerado por usuarios no NUL."
};

export default function SafetyPage() {
  return (
    <section className="section-shell prose prose-invert max-w-4xl prose-headings:text-text prose-p:text-muted prose-li:text-muted">
      <h1>Seguranca e Conteudo Gerado por Usuarios (UGC)</h1>
      <p>
        Esta politica descreve como o NUL previne abuso, processa denuncias e protege a comunidade. Contato para
        denuncias e seguranca: <strong>{company.supportEmail}</strong>.
      </p>

      <h2>1. Conteudo proibido</h2>
      <ul>
        <li>Discurso de odio, assedio, ameacas ou intimidacao.</li>
        <li>Violencia extrema, incentivo a dano fisico ou atividades ilegais.</li>
        <li>Exploracao sexual, incluindo qualquer material envolvendo menores.</li>
        <li>Conteudo sexual explicito nao permitido pelas diretrizes da plataforma.</li>
        <li>Fraude, phishing, engenharia social ou violacao de propriedade intelectual.</li>
      </ul>

      <h2>2. Denuncia no app</h2>
      <p>
        Usuarios podem denunciar conteudos, contas e interacoes diretamente no aplicativo em opcoes de menu como
        "Denunciar" e "Bloquear". Tambem aceitamos denuncias por email em {company.supportEmail}, com links, prints
        ou IDs de projeto para analise.
      </p>

      <h2>3. Analise e resposta</h2>
      <p>
        Denuncias sao avaliadas com prioridade, combinando filtros automaticos e revisao humana quando necessario. O
        tempo de resposta pode variar por complexidade e volume, sem SLA rigido.
      </p>

      <h2>4. Bloqueio de usuarios e remocao</h2>
      <p>
        Podemos remover conteudo, limitar recursos, suspender ou encerrar contas que violem esta politica, os
        <Link href="/legal/terms"> Termos de Uso</Link> ou leis aplicaveis.
      </p>

      <h2>5. Filtragem tecnica</h2>
      <p>
        O NUL usa mecanismos de deteccao automatica para categorias de risco e aplica revisao manual em casos
        sensiveis. Melhoramos continuamente os modelos para reduzir falsos positivos e negativos.
      </p>

      <h2>6. Menores e classificacao etaria</h2>
      <p>
        O NUL nao e direcionado a criancas. Para creator content que possa exceder determinada faixa etaria, exigimos
        classificacao do conteudo pelo usuario no envio/publicacao e aplicamos restricoes de acesso conforme idade
        declarada ou verificada quando disponivel.
      </p>

      <h2>7. Contato de seguranca e formulario</h2>
      <p>
        Canal principal: {company.supportEmail}. Formulario de suporte pode ser solicitado pelo mesmo email para casos
        com anexos extensos.
      </p>
    </section>
  );
}
