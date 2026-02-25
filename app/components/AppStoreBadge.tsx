import Link from "next/link";
import { appConfig } from "@/app/lib/content";

/* ── Apple logo SVG (shared) ─────────────────────────────────── */
function AppleLogo({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C3.79 16.17 4.36 9.02 8.73 8.76c1.26.07 2.13.72 2.91.77.98-.2 1.92-.78 2.97-.7 1.26.1 2.21.6 2.82 1.5-2.59 1.55-1.97 4.96.37 5.92-.46 1.2-1.06 2.39-1.75 3.03zM12.03 8.7c-.13-2.29 1.74-4.22 3.97-4.42.33 2.64-2.39 4.61-3.97 4.42z"/>
    </svg>
  );
}

/* ── Badge styles ─────────────────────────────────────────────── */
const badgeBase =
  "inline-flex items-center gap-2.5 rounded-[10px] border border-white/20 bg-black px-4 py-2.5 transition hover:border-white/40 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold";

/* ── "Download on the App Store" (iPhone & iPad) ──────────────── */
export function AppStoreBadge({ className = "" }: { className?: string }) {
  return (
    <Link
      href={appConfig.appStoreUrl}
      target="_blank"
      rel="noreferrer"
      className={`${badgeBase} ${className}`}
      aria-label="Download on the App Store"
    >
      <AppleLogo className="h-6 w-6 text-white" />
      <span className="flex flex-col leading-none">
        <span className="text-[9px] font-medium uppercase tracking-wide text-white/80">Download on the</span>
        <span className="mt-0.5 text-[17px] font-semibold leading-none text-white">App Store</span>
      </span>
    </Link>
  );
}

/* ── "Download on the Mac App Store" ──────────────────────────── */
export function MacAppStoreBadge({ className = "" }: { className?: string }) {
  return (
    <Link
      href={appConfig.macAppStoreUrl}
      target="_blank"
      rel="noreferrer"
      className={`${badgeBase} ${className}`}
      aria-label="Download on the Mac App Store"
    >
      <AppleLogo className="h-6 w-6 text-white" />
      <span className="flex flex-col leading-none">
        <span className="text-[9px] font-medium uppercase tracking-wide text-white/80">Download on the</span>
        <span className="mt-0.5 text-[17px] font-semibold leading-none text-white">Mac App Store</span>
      </span>
    </Link>
  );
}

/* ── Grouped badges row ──────────────────────────────────────── */
export function AppStoreBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <AppStoreBadge />
      <MacAppStoreBadge />
    </div>
  );
}
