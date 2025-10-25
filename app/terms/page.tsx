"use client";

import Link from "next/link";
import Image from "next/image";

export default function TermsPage() {
  const content: any = {
    de: {
      title: "Allgemeine Geschäftsbedingungen",
      text: `Willkommen bei der Hundezonen App. Diese Allgemeinen Geschäftsbedingungen (AGB) regeln die Nutzung unserer Anwendung.

**1. Akzeptanz der Bedingungen**
Durch den Zugriff auf diese App stimmst du diesen Bedingungen in vollem Umfang zu. Wenn du mit einem Teil dieser Bedingungen nicht einverstanden bist, darfst du die App nicht nutzen.

**2. Geistiges Eigentum**
Alle Inhalte dieser App, einschließlich Texte, Grafiken, Logos, Symbole, Bilder und Software, sind Eigentum von Hundezonen oder dessen Lizenzgebern und durch internationale Urheberrechtsgesetze geschützt.

**3. Verantwortlichkeiten des Nutzers**
Du verpflichtest dich, diese App ausschließlich für legale Zwecke zu verwenden. Eine unbefugte Nutzung, Modifikation oder Verbreitung jeglicher Teile der App ist strengstens untersagt.

**4. Haftungsausschluss**
Diese App wird "wie besehen" bereitgestellt, ohne ausdrückliche oder stillschweigende Garantien. Wir übernehmen keine Garantie für die Genauigkeit, Zuverlässigkeit oder Verfügbarkeit der App.

**5. Haftungsbeschränkung**
Unter keinen Umständen haftet Hundezonen für indirekte, zufällige, spezielle oder Folgeschäden, die aus der Nutzung oder der Unmöglichkeit der Nutzung der App entstehen.

**6. Anwendbares Recht**
Diese Bedingungen unterliegen dem Recht der Schweiz. Alle Streitigkeiten, die sich aus diesen Bedingungen ergeben, werden ausschließlich vor den Gerichten der Schweiz verhandelt.

**7. Änderungen der Bedingungen**
Wir behalten uns das Recht vor, diese Bedingungen jederzeit ohne Vorankündigung zu ändern. Die fortgesetzte Nutzung der App stellt die Akzeptanz der geänderten Bedingungen dar.

**8. Zukünftige Änderungen**
Bitte beachten Sie: Derzeit ist diese App komplett kostenlos; in Zukunft könnten wir jedoch Abonnementmodelle oder Werbung einführen.

Durch die Nutzung dieser App erkennen Sie an, dass Sie diese Allgemeinen Geschäftsbedingungen gelesen, verstanden und akzeptiert haben.`,
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
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                </svg>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold text-center text-primary mb-8">
              {t.title}
            </h1>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                {t.text}
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
