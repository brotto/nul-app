"use client";

import { useState } from "react";
import { faqItems } from "@/app/lib/content";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqItems.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="rounded-xl border border-gold/25 bg-surface">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
              aria-expanded={isOpen}
              aria-controls={`faq-${index}`}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="text-sm font-medium text-text">{item.question}</span>
              <span className="text-gold">{isOpen ? "-" : "+"}</span>
            </button>
            {isOpen ? (
              <p id={`faq-${index}`} className="border-t border-gold/20 px-4 py-4 text-sm text-muted">
                {item.answer}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
