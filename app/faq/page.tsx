import type { Metadata } from "next";
import { FaqAccordion } from "@/app/components/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ | NUL",
  description: "Perguntas frequentes sobre criacao, moderacao e privacidade no NUL."
};

export default function FaqPage() {
  return (
    <section className="section-shell">
      <h1 className="text-4xl font-semibold">FAQ</h1>
      <p className="mt-3 max-w-2xl text-sm text-muted">
        Respostas objetivas sobre produto, seguranca, privacidade e regras de uso.
      </p>
      <div className="mt-8">
        <FaqAccordion />
      </div>
    </section>
  );
}
