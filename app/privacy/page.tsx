"use client";

import Link from "next/link";
import Image from "next/image";

export default function PrivacyPage() {
  const content: any = {
    de: {
      title: "Datenschutzerklärung",
      noDataSaleTitle: "IHRE PRIVATSPHÄRE IST UNSERE PRIORITÄT",
      noDataSale: "HundeZonen verkauft NICHT, vermietet NICHT und gibt Ihre persönlichen Daten NICHT zu Werbe- oder kommerziellen Zwecken an Dritte weiter. Ihre Daten dienen ausschließlich der App-Funktionalität und NIEMALS zum Nutzen Dritter.",
      privacyModesTitle: "2 Datenschutzmodi",
      publicModeTitle: "Öffentlicher Modus",
      publicModeDesc: "Andere Benutzer können Sie finden, Ihr Profil und Ihre veröffentlichten Routen sehen. Sie können mit der Community interagieren.",
      privateModeTitle: "Privater Modus",
      privateModeDesc: "Sie sind 100% INKOGNITO. Niemand kann Sie sehen, weder Ihr Profil noch Ihre Routen. Es ist, als ob Sie in der App nicht existieren würden. Nur Sie sehen Ihre gespeicherten/favorisierten Routen. Idealer Modus, um die App zu nutzen, ohne für andere sichtbar zu sein.",
      modeChoice: "Sie wählen, wie Sie die App nutzen: sichtbar oder völlig unsichtbar. Ihre Privatsphäre, Ihre Wahl.",
      startChatTitle: "Start-Chat",
      startChatDesc: "Wenn Sie einen Start-Chat auswählen, wird das Benachrichtigungs-Badge '1' entfernt und es werden KEINE persönlichen Daten von Ihnen zu diesem Zweck gespeichert. Der Benutzer kann diese Karte jederzeit von seinem Profil löschen.",
      section1Title: "Informationen, die wir sammeln",
      section1: "a) Kontoinformationen: Daten wie Ihr Name, E-Mail und Kontaktdaten beim Erstellen eines Kontos.\nb) Standort: Um nahegelegene Routen anzuzeigen. Sie können diese Berechtigung jederzeit in den Geräteeinstellungen widerrufen.\nc) Inhalte, die Sie teilen: Fotos, Bewertungen oder Kommentare zu Routen (nur im öffentlichen Modus).",
      section2Title: "Nutzung der Daten",
      section2: "Ihre Daten werden AUSSCHLIESSLICH für die App-Funktionalität verwendet: Anzeige nahegelegener Routen, Interaktionen mit anderen Benutzern (im öffentlichen Modus) und Verbesserung der Benutzererfahrung.",
      section3Title: "Sicherheit",
      section3: "Wir implementieren Sicherheitsmaßnahmen zum Schutz Ihrer Informationen vor unbefugtem Zugriff.",
      section4Title: "Ihre Rechte",
      section4: "Sie können jederzeit auf Ihre persönlichen Daten zugreifen, diese berichtigen oder löschen. Kontaktieren Sie uns, um diese Rechte auszuüben.",
      section5Title: "Kontakt",
      section5: "E-Mail: info@hundezonen.ch\nTelefon: +41 81 750 19 11",
    }
  };

  const t = content.de;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logoapp.png"
                alt="Hundezonen Logo"
                width={45}
                height={45}
                className="rounded-xl"
              />
              <span className="text-2xl font-bold text-primary">Hundezonen</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
            {/* Title */}
            <h1 className="text-2xl font-bold text-center text-primary mb-8">
              {t.title}
            </h1>

            {/* Highlighted Box - NO VENDEMOS DATOS */}
            <div className="bg-yellow-50 border-l-8 border-black rounded-xl p-6 mb-8 text-center">
              <svg className="w-16 h-16 mx-auto mb-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
              </svg>
              <h2 className="text-xl font-bold text-black mb-3 tracking-wide">
                {t.noDataSaleTitle}
              </h2>
              <p className="text-black font-semibold leading-relaxed">
                {t.noDataSale}
              </p>
            </div>

            {/* Privacy Modes */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6">
              <div className="flex items-center space-x-3 mb-6">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/>
                </svg>
                <h2 className="text-2xl font-bold text-primary">
                  {t.privacyModesTitle}
                </h2>
              </div>

              {/* Public Mode */}
              <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-5 mb-4">
                <div className="flex items-center space-x-3 mb-3">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                  </svg>
                  <h3 className="text-lg font-bold text-gray-900">{t.publicModeTitle}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{t.publicModeDesc}</p>
              </div>

              {/* Private Mode */}
              <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-5 mb-4">
                <div className="flex items-center space-x-3 mb-3">
                  <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>
                  </svg>
                  <h3 className="text-lg font-bold text-gray-900">{t.privateModeTitle}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{t.privateModeDesc}</p>
              </div>

              <p className="text-primary font-semibold text-center italic mt-4">
                {t.modeChoice}
              </p>
            </div>

            {/* Other Sections */}
            <div className="space-y-6">
              {/* Start Chat */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <svg className="w-7 h-7 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
                  </svg>
                  <h2 className="text-xl font-bold text-primary">{t.startChatTitle}</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">{t.startChatDesc}</p>
              </div>

              {/* Information We Collect */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <svg className="w-7 h-7 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                  </svg>
                  <h2 className="text-xl font-bold text-primary">{t.section1Title}</h2>
                </div>
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{t.section1}</p>
              </div>

              {/* Use of Data */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <svg className="w-7 h-7 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94L14.4 2.81c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
                  </svg>
                  <h2 className="text-xl font-bold text-primary">{t.section2Title}</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">{t.section2}</p>
              </div>

              {/* Security */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <svg className="w-7 h-7 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                  </svg>
                  <h2 className="text-xl font-bold text-primary">{t.section3Title}</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">{t.section3}</p>
              </div>

              {/* Your Rights */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <svg className="w-7 h-7 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/>
                  </svg>
                  <h2 className="text-xl font-bold text-primary">{t.section4Title}</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">{t.section4}</p>
              </div>

              {/* Contact */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <svg className="w-7 h-7 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <h2 className="text-xl font-bold text-primary">{t.section5Title}</h2>
                </div>
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{t.section5}</p>
              </div>
            </div>

            {/* Back Button */}
            <div className="mt-12 text-center">
              <Link
                href="/"
                className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-semibold transition-all"
              >
                Zurück zur Startseite
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
