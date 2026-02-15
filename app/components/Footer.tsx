import Link from "next/link";
import { appConfig, company } from "@/app/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-black/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <p className="text-sm text-text">NUL é um produto da {company.name}.</p>
          <p className="mt-2 text-sm text-muted">
            <a className="underline underline-offset-4" href={company.site} target="_blank" rel="noreferrer">
              {company.site}
            </a>
          </p>
          <p className="mt-2 text-sm text-muted">Contato: {company.supportEmail}</p>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <Link href="/legal/terms" className="text-muted hover:text-text">Terms</Link>
          <Link href="/legal/privacy" className="text-muted hover:text-text">Privacy</Link>
          <Link href="/legal/cookies" className="text-muted hover:text-text">Cookies</Link>
          <Link href="/safety" className="text-muted hover:text-text">Safety/UGC</Link>
          <Link href="/support" className="text-muted hover:text-text">Support</Link>
          <Link href="/status" className="text-muted hover:text-text">Status</Link>
        </div>
        <div className="text-sm text-muted">
          <p>Publisher: {company.name}</p>
          <p>Endereco comercial: [placeholder]</p>
          <p>Email publico: {company.supportEmail}</p>
          <p className="mt-2">App Store: {appConfig.appStoreUrl}</p>
        </div>
      </div>
    </footer>
  );
}
