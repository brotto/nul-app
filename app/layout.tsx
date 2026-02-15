import type { Metadata } from "next";
import "./globals.css";
import { CookieBanner } from "@/app/components/CookieBanner";
import { Footer } from "@/app/components/Footer";
import { Navbar } from "@/app/components/Navbar";
import { ConsentScriptLoader } from "@/app/components/ConsentScriptLoader";

export const metadata: Metadata = {
  metadataBase: new URL("https://nul.brotto.io"),
  title: "NUL (∅) | Estudio de criacao multimodal por IA",
  description:
    "Do nada, tudo. Crie videos, imagens, audios e transcricoes com IA em um unico estudio.",
  openGraph: {
    title: "NUL (∅)",
    description:
      "Crie videos, imagens, audios e transcricoes com IA em um unico estudio.",
    type: "website",
    url: "https://nul.brotto.io",
    siteName: "NUL",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "NUL" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "NUL (∅)",
    description:
      "Crie videos, imagens, audios e transcricoes com IA em um unico estudio.",
    images: ["/logo.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-bg text-text antialiased">
        <ConsentScriptLoader />
        <div className="gold-gradient min-h-screen bg-gold-grid bg-[length:36px_36px]">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
        <CookieBanner />
      </body>
    </html>
  );
}
