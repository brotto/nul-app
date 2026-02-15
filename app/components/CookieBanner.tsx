"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type ConsentState = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
};

const CONSENT_KEY = "nul_cookie_consent";

const defaultConsent: ConsentState = {
  essential: true,
  analytics: false,
  marketing: false,
  updatedAt: ""
};

function parseConsent(raw: string | null): ConsentState | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as ConsentState;
    return {
      essential: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
      updatedAt: parsed.updatedAt || ""
    };
  } catch {
    return null;
  }
}

function saveConsent(next: Omit<ConsentState, "updatedAt">) {
  const payload: ConsentState = {
    ...next,
    essential: true,
    updatedAt: new Date().toISOString()
  };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(payload));
  window.dispatchEvent(new Event("nul-consent-updated"));
}

export function CookieBanner() {
  const [loaded, setLoaded] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const existing = parseConsent(localStorage.getItem(CONSENT_KEY));
    if (!existing) {
      setShowBanner(true);
    } else {
      setAnalytics(existing.analytics);
      setMarketing(existing.marketing);
    }
    setLoaded(true);
  }, []);

  const canSave = useMemo(() => loaded, [loaded]);

  if (!loaded) return null;

  const acceptAll = () => {
    saveConsent({ essential: true, analytics: true, marketing: true });
    setAnalytics(true);
    setMarketing(true);
    setShowBanner(false);
    setShowModal(false);
  };

  const rejectAll = () => {
    saveConsent({ essential: true, analytics: false, marketing: false });
    setAnalytics(false);
    setMarketing(false);
    setShowBanner(false);
    setShowModal(false);
  };

  const savePreferences = () => {
    if (!canSave) return;
    saveConsent({ essential: true, analytics, marketing });
    setShowBanner(false);
    setShowModal(false);
  };

  return (
    <>
      {showBanner ? (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gold/25 bg-surface/95 px-4 py-4 backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-muted">
              Usamos cookies essenciais e opcionais para melhorar sua experiencia. Veja nossa {" "}
              <Link href="/legal/cookies" className="text-gold underline underline-offset-4">
                Politica de Cookies
              </Link>
              .
            </p>
            <div className="flex flex-wrap gap-2">
              <button onClick={acceptAll} className="rounded-lg bg-gold px-3 py-2 text-sm font-semibold text-black">
                Aceitar
              </button>
              <button onClick={rejectAll} className="rounded-lg border border-gold/40 px-3 py-2 text-sm text-text">
                Rejeitar
              </button>
              <button onClick={() => setShowModal(true)} className="rounded-lg border border-gold/40 px-3 py-2 text-sm text-text">
                Gerenciar
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {showModal ? (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-black/75 p-4">
          <div className="w-full max-w-md rounded-2xl border border-gold/30 bg-surface p-5">
            <h2 className="text-lg font-semibold text-text">Preferencias de Cookies</h2>
            <p className="mt-2 text-sm text-muted">Essenciais sempre ativos. Gerencie os opcionais:</p>
            <div className="mt-4 space-y-3">
              <label className="flex items-center justify-between rounded-lg border border-gold/20 p-3">
                <span className="text-sm text-text">Essenciais</span>
                <span className="text-xs text-muted">Sempre ativo</span>
              </label>
              <label className="flex items-center justify-between rounded-lg border border-gold/20 p-3">
                <span className="text-sm text-text">Analiticos</span>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(event) => setAnalytics(event.target.checked)}
                  className="h-4 w-4 accent-gold"
                />
              </label>
              <label className="flex items-center justify-between rounded-lg border border-gold/20 p-3">
                <span className="text-sm text-text">Marketing</span>
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(event) => setMarketing(event.target.checked)}
                  className="h-4 w-4 accent-gold"
                />
              </label>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <button onClick={savePreferences} className="rounded-lg bg-gold px-3 py-2 text-sm font-semibold text-black">
                Salvar preferencias
              </button>
              <button onClick={() => setShowModal(false)} className="rounded-lg border border-gold/40 px-3 py-2 text-sm text-text">
                Fechar
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
