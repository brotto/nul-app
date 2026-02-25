import type { Metadata } from "next";
import Link from "next/link";
import { appConfig } from "@/app/lib/content";

export const metadata: Metadata = {
  title: "Status | NUL",
  description: "NUL operational status."
};

export default function StatusPage() {
  return (
    <section className="section-shell">
      <h1 className="text-4xl font-semibold">Status</h1>
      <p className="mt-3 text-sm text-muted">Operational status page for App Store and support reference.</p>

      <article className="mt-8 rounded-2xl border border-gold/20 bg-surface p-6">
        <p className="text-lg">All core systems: operational.</p>
        <p className="mt-3 text-sm text-muted">Automated status updates will be integrated as monitoring evolves.</p>
        {appConfig.statusUrl ? (
          <Link href={appConfig.statusUrl} target="_blank" rel="noreferrer" className="mt-4 inline-block text-gold underline underline-offset-4">
            View external status
          </Link>
        ) : null}
      </article>
    </section>
  );
}
