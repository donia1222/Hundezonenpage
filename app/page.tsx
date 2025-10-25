"use client";

import { useState } from "react";
import Image from "next/image";
import CookieBanner from "./components/CookieBanner";

export default function Home() {
  const [lang, setLang] = useState<"de" | "es" | "en">("de");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const t: any = {
    de: {
      hero: {
        title: "Die beste App für Hundebesitzer",
        subtitle: "Entdecke und teile Hunderoutenenrouten in der Schweiz",
        description: "Hundezonen hilft dir, die besten Spaziergänge für deinen Hund zu finden. Mit Warnungen vor Giftködern, Services und KI-Chatbot.",
        cta: "Jetzt kostenlos herunterladen",
        availableOn: "Verfügbar für",
      },
      features: {
        title: "Alles, was du brauchst",
        subtitle: "Eine komplette Plattform für Hundebesitzer",
        items: [
          {
            image: "/featuresimagenes/rutas.png",
            title: "Routen entdecken",
            description: "Finde die besten Spaziergänge in deiner Nähe mit allen Details: Wasser, Schatten, Parkplätze und mehr."
          },
          {
            image: "/featuresimagenes/guaradrrutas.png",
            title: "Eigene Routen speichern",
            description: "Erstelle und speichere deine Lieblingsrouten mit Fotos und Beschreibungen zum Teilen."
          },
          {
            image: "/featuresimagenes/radar.png",
            title: "Giftköder-Radar",
            description: "Erhalte Warnungen vor gefährlichen Bereichen und Giftködern in Echtzeit."
          },
          {
            image: "/featuresimagenes/servicios.png",
            title: "Hunde-Services",
            description: "Finde Tierärzte, Geschäfte, Trainer, Pensionen und mehr in deiner Umgebung."
          },
          {
            image: "/featuresimagenes/bot.png",
            title: "KI-Chatbot",
            description: "Frag alles über deinen Hund: Rasse erkennen, Trainer finden, Gesundheitstipps."
          },
          {
            image: "/featuresimagenes/privado.png",
            title: "Privatsphäre",
            description: "Wähle zwischen privatem und öffentlichem Modus für deine Routen."
          }
        ]
      },
      services: {
        title: "Hunde-Services in deiner Nähe",
        subtitle: "Alles, was dein Hund braucht, auf einen Blick",
        items: [
          { title: "Tierärzte", color: "#FF6B6B", icon: "veterinary" },
          { title: "Geschäfte", color: "#4ECDC4", icon: "store" },
          { title: "Trainer", color: "#F39C12", icon: "trainer" },
          { title: "Pensionen", color: "#9B59B6", icon: "home" },
          { title: "Hundetoilette", color: "#95A5A6", icon: "toilet" },
          { title: "Adoption", color: "#E74C3C", icon: "heart" }
        ]
      },
      pricing: {
        title: "Transparent und fair",
        subtitle: "Kostenlos mit optionalem Support",
        free: {
          title: "Kostenlos",
          price: "0 CHF",
          features: [
            "Alle Routen entdecken",
            "Eigene Routen speichern",
            "Giftköder-Warnungen",
            "Hunde-Services finden",
            "KI-Chatbot nutzen",
            "Unbegrenzt nutzbar"
          ],
          cta: "Jetzt starten"
        },
        premium: {
          title: "Unterstützer",
          price: "5 CHF",
          period: "alle 2 Monate",
          priceMonth: "≈ 2.50 CHF/Monat",
          features: [
            "Alle kostenlosen Features",
            "Server & Entwicklung unterstützen",
            "Kontinuierliche Updates",
            "Entwickelt von Freelancer",
            "Weniger als ein Kaffee",
            "Hundezonen weiter wachsen lassen"
          ],
          cta: "Unterstützen"
        }
      },
      faq: {
        title: "Häufig gestellte Fragen",
        items: [
          {
            q: "Was ist Hundezonen?",
            a: "Hundezonen ist eine Anwendung, in der Du Deine Lieblingsrouten zum Gassigehen mit Deinem Hund speichern kannst. Du kannst auch Routen entdecken, die von anderen Nutzern in Deiner Nähe erstellt wurden, mit allen Informationen, die Du vor einem Spaziergang benötigst."
          },
          {
            q: "Wie funktioniert es?",
            a: "Wenn Du die App öffnest, erkennt sie automatisch Deinen Standort und zeigt Dir die nächstgelegenen Routen, die von anderen Nutzern erstellt wurden. Du kannst sehen, ob es auf der Route Wasser, Schatten, Parkplätze, Restaurants oder andere Dienstleistungen gibt."
          },
          {
            q: "In welchen Ländern ist es verfügbar?",
            a: "Hundezonen wird zunächst in der Schweiz, Deutschland und Österreich verfügbar sein. Später wird es auf weitere Länder ausgeweitet, abhängig von der Resonanz des Publikums."
          },
          {
            q: "Was macht der KI-Chatbot?",
            a: "Der Chatbot hilft Dir bei allem, was mit Deinem Hund zu tun hat. Du kannst ihn um Dinge bitten wie: 'Finde einen Hundetrainer in meiner Nähe' oder 'Analysiere dieses Foto und sag mir, welcher Rasse mein Hund angehört'."
          },
          {
            q: "Ist Hundezonen kostenlos?",
            a: "Ja, die grundlegende Nutzung ist völlig kostenlos. Es gibt ein optionales Abonnement von 5 Franken alle zwei Monate (≈2 Franken pro Monat), um die Entwicklung zu unterstützen."
          }
        ]
      },
      footer: {
        tagline: "Die Community für Hundebesitzer",
        rights: "Alle Rechte vorbehalten",
        links: {
          privacy: "Datenschutz",
          terms: "AGB",
          contact: "Kontakt"
        }
      }
    },
    es: {
      hero: {
        title: "La mejor app para dueños de perros",
        subtitle: "Descubre y comparte rutas caninas en Suiza",
        description: "Hundezonen te ayuda a encontrar los mejores paseos para tu perro. Con alertas de veneno, servicios y chatbot IA.",
        cta: "Descargar gratis ahora",
        availableOn: "Disponible para",
      },
      features: {
        title: "Todo lo que necesitas",
        subtitle: "Una plataforma completa para dueños de perros",
        items: [
          {
            image: "/featuresimagenes/rutas.png",
            title: "Descubre rutas",
            description: "Encuentra los mejores paseos cerca de ti con todos los detalles: agua, sombra, parking y más."
          },
          {
            image: "/featuresimagenes/guaradrrutas.png",
            title: "Guarda tus rutas",
            description: "Crea y guarda tus rutas favoritas con fotos y descripciones para compartir."
          },
          {
            image: "/featuresimagenes/radar.png",
            title: "Radar de alertas",
            description: "Recibe alertas de zonas peligrosas y veneno para perros en tiempo real."
          },
          {
            image: "/featuresimagenes/servicios.png",
            title: "Servicios caninos",
            description: "Encuentra veterinarios, tiendas, entrenadores, pensiones y más cerca de ti."
          },
          {
            image: "/featuresimagenes/bot.png",
            title: "Chatbot IA",
            description: "Pregunta todo sobre tu perro: reconocer raza, encontrar trainer, consejos de salud."
          },
          {
            image: "/featuresimagenes/privado.png",
            title: "Privacidad",
            description: "Elige entre modo privado y público para tus rutas."
          }
        ]
      },
      services: {
        title: "Servicios caninos cerca de ti",
        subtitle: "Todo lo que tu perro necesita, en un vistazo",
        items: [
          { title: "Veterinarios", color: "#FF6B6B", icon: "veterinary" },
          { title: "Tiendas", color: "#4ECDC4", icon: "store" },
          { title: "Entrenadores", color: "#F39C12", icon: "trainer" },
          { title: "Pensiones", color: "#9B59B6", icon: "home" },
          { title: "WC Perros", color: "#95A5A6", icon: "toilet" },
          { title: "Adopción", color: "#E74C3C", icon: "heart" }
        ]
      },
      pricing: {
        title: "Transparente y justo",
        subtitle: "Gratis con soporte opcional",
        free: {
          title: "Gratis",
          price: "0 CHF",
          features: [
            "Descubrir todas las rutas",
            "Guardar tus propias rutas",
            "Alertas de veneno",
            "Encontrar servicios caninos",
            "Usar chatbot IA",
            "Uso ilimitado"
          ],
          cta: "Empezar ahora"
        },
        premium: {
          title: "Suscriptor",
          price: "5 CHF",
          period: "cada 2 meses",
          priceMonth: "≈ 2.50 CHF/mes",
          features: [
            "Todas las funciones gratis",
            "Apoyar servidor y desarrollo",
            "Actualizaciones continuas",
            "Desarrollado por freelancer",
            "Menos que un café",
            "Ayudar a crecer Hundezonen"
          ],
          cta: "Apoyar"
        }
      },
      faq: {
        title: "Preguntas Frecuentes",
        items: [
          {
            q: "¿Qué es Hundezonen?",
            a: "Hundezonen es una aplicación donde puedes guardar tus rutas favoritas para pasear con tu perro. También puedes descubrir rutas creadas por otros usuarios cerca de tu ubicación, con toda la información que necesitas antes de salir a caminar."
          },
          {
            q: "¿Cómo funciona?",
            a: "Cuando abres la app, esta detecta automáticamente tu ubicación y te muestra las rutas más cercanas, creadas por otros usuarios. Puedes ver si en la ruta hay agua, sombra, aparcamiento, restaurantes u otros servicios útiles."
          },
          {
            q: "¿En qué países está disponible?",
            a: "Hundezonen estará disponible inicialmente en Suiza, Alemania y Austria. Más adelante se expandirá a otros países, dependiendo de la respuesta del público."
          },
          {
            q: "¿Qué hace el chatbot con inteligencia artificial?",
            a: "El chatbot te ayuda en todo lo relacionado con tu perro. Puedes pedirle cosas como: 'Búscame un entrenador de perros cerca de mí' o 'Analiza esta foto y dime de qué raza es mi perro'."
          },
          {
            q: "¿Es gratis Hundezonen?",
            a: "Sí, el uso básico es completamente gratuito. Existe una suscripción opcional de 5 francos cada dos meses (≈2 francos al mes) para apoyar el desarrollo."
          }
        ]
      },
      footer: {
        tagline: "La comunidad para dueños de perros",
        rights: "Todos los derechos reservados",
        links: {
          privacy: "Privacidad",
          terms: "Términos",
          contact: "Contacto"
        }
      }
    },
    en: {
      hero: {
        title: "The best app for dog owners",
        subtitle: "Discover and share dog routes in Switzerland",
        description: "Hundezonen helps you find the best walks for your dog. With poison alerts, services and AI chatbot.",
        cta: "Download for free now",
        availableOn: "Available on",
      },
      features: {
        title: "Everything you need",
        subtitle: "A complete platform for dog owners",
        items: [
          {
            image: "/featuresimagenes/rutas.png",
            title: "Discover routes",
            description: "Find the best walks near you with all details: water, shade, parking and more."
          },
          {
            image: "/featuresimagenes/guaradrrutas.png",
            title: "Save your routes",
            description: "Create and save your favorite routes with photos and descriptions to share."
          },
          {
            image: "/featuresimagenes/radar.png",
            title: "Alert radar",
            description: "Receive alerts for dangerous areas and poison bait for dogs in real-time."
          },
          {
            image: "/featuresimagenes/servicios.png",
            title: "Dog services",
            description: "Find veterinarians, stores, trainers, kennels and more near you."
          },
          {
            image: "/featuresimagenes/bot.png",
            title: "AI Chatbot",
            description: "Ask anything about your dog: recognize breed, find trainers, health tips."
          },
          {
            image: "/featuresimagenes/privado.png",
            title: "Privacy",
            description: "Choose between private and public mode for your routes."
          }
        ]
      },
      services: {
        title: "Dog services near you",
        subtitle: "Everything your dog needs, at a glance",
        items: [
          { title: "Veterinarians", color: "#FF6B6B", icon: "veterinary" },
          { title: "Stores", color: "#4ECDC4", icon: "store" },
          { title: "Trainers", color: "#F39C12", icon: "trainer" },
          { title: "Kennels", color: "#9B59B6", icon: "home" },
          { title: "Dog Toilet", color: "#95A5A6", icon: "toilet" },
          { title: "Adoption", color: "#E74C3C", icon: "heart" }
        ]
      },
      pricing: {
        title: "Transparent and fair",
        subtitle: "Free with optional support",
        free: {
          title: "Free",
          price: "0 CHF",
          features: [
            "Discover all routes",
            "Save your own routes",
            "Poison alerts",
            "Find dog services",
            "Use AI chatbot",
            "Unlimited use"
          ],
          cta: "Start now"
        },
        premium: {
          title: "Supporter",
          price: "5 CHF",
          period: "every 2 months",
          priceMonth: "≈ 2.50 CHF/month",
          features: [
            "All free features",
            "Support server & development",
            "Continuous updates",
            "Developed by freelancer",
            "Less than a coffee",
            "Help Hundezonen grow"
          ],
          cta: "Support"
        }
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            q: "What is Hundezonen?",
            a: "Hundezonen is an application where you can save your favorite routes for walking with your dog. You can also discover routes created by other users near your location, with all the information you need before going out for a walk."
          },
          {
            q: "How does it work?",
            a: "When you open the app, it automatically detects your location and shows you the nearest routes, created by other users. You can see if the route has water, shade, parking, restaurants or other useful services."
          },
          {
            q: "In which countries is it available?",
            a: "Hundezonen will be initially available in Switzerland, Germany, and Austria. Later it will expand to other countries, depending on public response."
          },
          {
            q: "What does the AI chatbot do?",
            a: "The chatbot helps you with everything related to your dog. You can ask it for things like: 'Find me a dog trainer near me' or 'Analyze this photo and tell me what breed my dog is'."
          },
          {
            q: "Is Hundezonen free?",
            a: "Yes, basic use is completely free. There is an optional subscription of 5 francs every two months (≈2 francs per month) to support development."
          }
        ]
      },
      footer: {
        tagline: "The community for dog owners",
        rights: "All rights reserved",
        links: {
          privacy: "Privacy",
          terms: "Terms",
          contact: "Contact"
        }
      }
    }
  };

  const content = t[lang];

  // Service Icons SVG Component
  const ServiceIcon = ({ icon, color }: { icon: string; color: string }) => {
    const icons: any = {
      veterinary: (
        <svg className="w-12 h-12" fill={color} viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      store: (
        <svg className="w-12 h-12" fill={color} viewBox="0 0 24 24">
          <path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"/>
        </svg>
      ),
      trainer: (
        <svg className="w-12 h-12" fill={color} viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      ),
      home: (
        <svg className="w-12 h-12" fill={color} viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      ),
      toilet: (
        <svg className="w-12 h-12" fill={color} viewBox="0 0 24 24">
          <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
        </svg>
      ),
      heart: (
        <svg className="w-12 h-12" fill={color} viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      )
    };
    return icons[icon] || icons.heart;
  };

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Image
                src="/logoapp.png"
                alt="Hundezonen Logo"
                width={40}
                height={40}
                className="rounded-xl"
              />
              <span className="text-1xl font-bold text-primary">Hundezonen🇨🇭</span>
            </div>

            {/* Language Selector */}
            <div className="flex space-x-2">
              {["de", "es", "en"].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l as any)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                    lang === l
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {content.hero.title}
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                {content.hero.subtitle}
              </p>
              <p className="text-lg text-gray-500 mb-8">
                {content.hero.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl">
                  {content.hero.cta}
                </button>
              </div>

              <div className="flex items-center space-x-6">
           
              </div>
            </div>

            {/* Phone Mockup with Real Screenshots */}
            <div className="relative">
              <div className="relative z-10 mx-auto max-w-sm">
                {/* Phone Frame */}
                <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-20"></div>

                  {/* Screen */}
                  <div className="relative bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
                    {/* Screenshot Carousel */}
                    <div className="relative w-full h-full">
                      <Image
                        src="/pantallas/IMG_5488.PNG"
                        alt="Hundezonen App Screenshot"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Screenshots */}
              <div className="absolute -left-8 top-20 w-24 h-52 opacity-30 rotate-12 hidden lg:block">
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/pantallas/IMG_5489.PNG"
                    alt="Screenshot"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute -right-8 top-40 w-24 h-52 opacity-30 -rotate-12 hidden lg:block">
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/pantallas/IMG_5490.PNG"
                    alt="Screenshot"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="absolute top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-300/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {content.features.title}
            </h2>
            <p className="text-xl text-gray-600">
              {content.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.features.items.map((item: any, index: number) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="relative w-20 h-20 mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {content.services.title}
            </h2>
            <p className="text-xl text-gray-600">
              {content.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {content.services.items.map((item: any, index: number) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-center mx-auto mb-4">
                  <ServiceIcon icon={item.icon} color={item.color} />
                </div>
                <p className="font-semibold text-gray-900">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {content.pricing.title}
            </h2>
            <p className="text-xl text-gray-600">
              {content.pricing.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {content.pricing.free.title}
              </h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">
                  {content.pricing.free.price}
                </span>
              </div>
              <ul className="space-y-4 mb-8">
                {content.pricing.free.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-full font-semibold transition-all">
                {content.pricing.free.cta}
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-3xl p-8 relative overflow-hidden hover:shadow-2xl transition-all">
              <div className="absolute top-0 right-0 bg-white/10 w-32 h-32 rounded-full -mr-16 -mt-16"></div>
              <h3 className="text-2xl font-bold mb-2 relative z-10">
                {content.pricing.premium.title}
              </h3>
              <div className="mb-2 relative z-10">
                <span className="text-5xl font-bold">{content.pricing.premium.price}</span>
                <span className="text-lg ml-2 opacity-90">{content.pricing.premium.period}</span>
              </div>
              <p className="text-sm opacity-80 mb-6">{content.pricing.premium.priceMonth}</p>
              <ul className="space-y-4 mb-8 relative z-10">
                {content.pricing.premium.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span className="opacity-90">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-white text-primary hover:bg-gray-100 py-4 rounded-full font-semibold transition-all relative z-10">
                {content.pricing.premium.cta}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {content.faq.title}
            </h2>
          </div>

          <div className="space-y-4">
            {content.faq.items.map((item: any, index: number) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-all"
                >
                  <span className="font-semibold text-gray-900 text-lg pr-4">
                    {item.q}
                  </span>
                  <span className="text-2xl text-primary flex-shrink-0">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {lang === "de" && "Bereit, die besten Routen zu entdecken?"}
            {lang === "es" && "¿Listo para descubrir las mejores rutas?"}
            {lang === "en" && "Ready to discover the best routes?"}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {lang === "de" && "Lade Hundezonen jetzt kostenlos herunter und werde Teil der Community."}
            {lang === "es" && "Descarga Hundezonen gratis ahora y únete a la comunidad."}
            {lang === "en" && "Download Hundezonen for free now and join the community."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg">
              {content.hero.cta}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/logoapp.png"
                  alt="Hundezonen Logo"
                  width={40}
                  height={40}
                  className="rounded-xl"
                />
                <span className="text-2xl font-bold">Hundezonen</span>
              </div>
              <p className="text-gray-400">{content.footer.tagline}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/privacy" className="hover:text-white transition-colors">{content.footer.links.privacy}</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">{content.footer.links.terms}</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">{content.footer.links.contact}</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">
                {lang === "de" && "Verfügbar in"}
                {lang === "es" && "Disponible en"}
                {lang === "en" && "Available in"}
              </h3>
              <p className="text-gray-400">🇨🇭 Schweiz</p>
              <p className="text-gray-400">🇩🇪 Deutschland</p>
              <p className="text-gray-400">🇦🇹 Österreich</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 Hundezonen. {content.footer.rights}</p>
          </div>
        </div>
      </footer>

      {/* Cookie Banner */}
      <CookieBanner />
    </main>
  );
}
