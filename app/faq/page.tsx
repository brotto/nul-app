import type { Metadata } from "next";
import { FaqAccordion } from "@/app/components/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ | NUL",
  description: "Frequently asked questions about creating, moderation, and privacy in NUL."
};

export default function FaqPage() {
  return (
    <section className="section-shell">
      <h1 className="text-4xl font-semibold">FAQ</h1>
      <p className="mt-3 max-w-2xl text-sm text-muted">
        Answers to common questions about the product, safety, privacy, and usage guidelines.
      </p>
      <div className="mt-8"><FaqAccordion /></div>
    </section>
  );
}
