import Link from "next/link";
import { company } from "@/app/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-black/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <p className="text-sm text-text">NUL is a product by {company.name}™</p>
          <p className="mt-2 text-sm text-muted">Contact: {company.supportEmail}</p>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <Link href="/legal/terms" className="text-muted hover:text-text">Terms of Service</Link>
          <Link href="/legal/privacy" className="text-muted hover:text-text">Privacy Policy</Link>
          <Link href="/legal/cookies" className="text-muted hover:text-text">Cookie Policy</Link>
          <Link href="/safety" className="text-muted hover:text-text">Safety & UGC</Link>
          <Link href="/support" className="text-muted hover:text-text">Support</Link>
          <Link href="/status" className="text-muted hover:text-text">Status</Link>
        </div>
        <div className="text-sm text-muted">
          <p>Publisher: {company.publisher}</p>
          <p>Email: {company.supportEmail}</p>
          <p>Telegram: <a href={company.telegramUrl} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">{company.telegramHandle}</a></p>
        </div>
      </div>
    </footer>
  );
}
