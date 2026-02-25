import type { Metadata } from "next";
import "./globals.css";
import { CookieBanner } from "@/app/components/CookieBanner";
import { Footer } from "@/app/components/Footer";
import { Navbar } from "@/app/components/Navbar";
import { ConsentScriptLoader } from "@/app/components/ConsentScriptLoader";

export const metadata: Metadata = {
  metadataBase: new URL("https://nul-app.app"),
  title: "NUL (∅) | AI-Powered Multimodal Creative Studio",
  description:
    "From nothing, everything. Generate videos, images, audio, and transcriptions with AI in one studio.",
  openGraph: {
    title: "NUL (∅)",
    description:
      "Generate videos, images, audio, and transcriptions with AI in one studio.",
    type: "website",
    url: "https://nul-app.app",
    siteName: "NUL",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "NUL" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "NUL (∅)",
    description:
      "Generate videos, images, audio, and transcriptions with AI in one studio.",
    images: ["/logo.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
