"use client";

import { useEffect } from "react";

type Consent = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
};

const CONSENT_KEY = "nul_cookie_consent";

function readConsent(): Consent | null {
  const raw = localStorage.getItem(CONSENT_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as Consent;
  } catch {
    return null;
  }
}

export function ConsentScriptLoader() {
  useEffect(() => {
    const loadByConsent = () => {
      const consent = readConsent();
      if (!consent) return;

      if (consent.analytics && !document.querySelector("script[data-nul-analytics='true']")) {
        const script = document.createElement("script");
        script.dataset.nulAnalytics = "true";
        script.async = true;
        script.text = "window.nulAnalyticsEnabled = true;";
        document.body.appendChild(script);
      }

      if (consent.marketing && !document.querySelector("script[data-nul-marketing='true']")) {
        const script = document.createElement("script");
        script.dataset.nulMarketing = "true";
        script.async = true;
        script.text = "window.nulMarketingEnabled = true;";
        document.body.appendChild(script);
      }
    };

    loadByConsent();
    window.addEventListener("nul-consent-updated", loadByConsent);

    return () => {
      window.removeEventListener("nul-consent-updated", loadByConsent);
    };
  }, []);

  return null;
}
