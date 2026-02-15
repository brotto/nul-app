import Link from "next/link";
import { appConfig } from "@/app/lib/content";

type AppStoreBadgeProps = {
  className?: string;
};

export function AppStoreBadge({ className = "" }: AppStoreBadgeProps) {
  return (
    <Link
      href={appConfig.appStoreUrl}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center rounded-xl border border-gold/50 bg-black px-5 py-3 text-sm font-semibold text-text transition hover:border-gold hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${className}`}
      aria-label="Baixar na App Store"
    >
      Download on the App Store
    </Link>
  );
}
