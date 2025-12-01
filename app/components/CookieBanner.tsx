"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl border-2 border-primary p-6 md:p-8 relative">
          {/* Close Button */}
          <button
            onClick={acceptCookies}
            className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all"
            aria-label="Schließen"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            {/* Cookie Icon */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-4xl">🍪</span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Cookie-Einstellungen
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern.
                Durch die Nutzung dieser Website stimmen Sie der Verwendung von Cookies zu.
                Weitere Informationen finden Sie in unserer{" "}
                <Link href="/privacy" className="text-primary hover:underline font-semibold">
                  Datenschutzerklärung
                </Link>.
              </p>
            </div>

            {/* Accept Button */}
            <div className="flex-shrink-0 w-full md:w-auto">
              <button
                onClick={acceptCookies}
                className="w-full md:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Akzeptieren
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
