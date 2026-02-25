import Link from "next/link";
import { navLinks } from "@/app/lib/content";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-gold/20 bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="inline-flex items-center gap-2 text-text">
          <span className="text-xl font-semibold text-gold">∅</span>
          <span className="text-sm font-semibold tracking-[0.2em]">NUL</span>
        </Link>
        <nav aria-label="Main" className="hidden gap-5 md:flex">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm text-muted transition hover:text-text">{link.label}</Link>
          ))}
        </nav>
        <Link href="/support" className="rounded-lg border border-gold/40 px-3 py-2 text-xs font-medium text-text transition hover:border-gold">Contact</Link>
      </div>
    </header>
  );
}
