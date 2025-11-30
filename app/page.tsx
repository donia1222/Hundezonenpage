"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import CookieBanner from "./components/CookieBanner";
import { useCountryDetection } from "./hooks/useCountryDetection";

export default function Home() {
  const [lang, setLang] = useState<"de" | "es" | "en" | "fr" | "it">("de");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [mouseStart, setMouseStart] = useState(0);
  const [mouseEnd, setMouseEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const { country, isLoading } = useCountryDetection();

  // Detect browser language on mount
  useEffect(() => {
    const detectBrowserLanguage = () => {
      const browserLang = navigator.language || navigator.languages?.[0];
      const langCode = browserLang.split('-')[0].toLowerCase();

      // Map browser language to supported languages
      const supportedLangs: ("de" | "es" | "en" | "fr" | "it")[] = ["de", "es", "en", "fr", "it"];

      if (supportedLangs.includes(langCode as any)) {
        setLang(langCode as "de" | "es" | "en" | "fr" | "it");
      }
      // Otherwise keep default "de"
    };

    detectBrowserLanguage();
  }, []);

  // Update HTML lang attribute when language changes
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Screenshots array
  const screenshots = [
    "/pantallas/IMG_5488.PNG",
    "/pantallas/IMG_5489.PNG",
    "/pantallas/IMG_5490.PNG",
    "/pantallas/IMG_5492.PNG",
    "/pantallas/IMG_5493.PNG",
    "/pantallas/IMG_5494.PNG",
    "/pantallas/IMG_5498.PNG"
  ];

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [screenshots.length]);

  // Handle swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swiped left - next image
      setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
    }
    if (touchStart - touchEnd < -75) {
      // Swiped right - previous image
      setCurrentScreenshot((prev) => (prev - 1 + screenshots.length) % screenshots.length);
    }
  };

  // Handle mouse drag gestures
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setMouseStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setMouseEnd(e.clientX);
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      if (mouseStart - mouseEnd > 75) {
        // Dragged left - next image
        setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
      }
      if (mouseStart - mouseEnd < -75) {
        // Dragged right - previous image
        setCurrentScreenshot((prev) => (prev - 1 + screenshots.length) % screenshots.length);
      }
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  const t: any = {
    de: {
      hero: {
        title: "Die App für dich und deinen Hund 🐾",
        subtitle: "Entdecke und teile Hunderoutenenrouten in der Schweiz, Deutschland und Österreich",
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
      videoSection: {
        title: "Exklusive Routenvideos",
        description: "Als Abonnent erhältst du Zugang zu exklusiven Videos, in denen wir dir die besten Routen zeigen. Wir erklären dir, was du dort findest, wo du parken kannst und geben dir Tipps für den perfekten Spaziergang mit deinem Hund.",
        cta: "Jetzt abonnieren"
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
            "Giftköder-Warnungen",
            "Hunde-Services finden",
            "Ohne Werbung"
          ],
          cta: "Jetzt starten"
        },
        premium: {
          title: "Unterstützer",
          price: "5 CHF",
          period: "alle 2 Monate",
          priceMonth: "≈ 2.50 CHF/Monat",
          features: [
            "Zugang zu Routenvideos",
            "Unbegrenzte Routen erstellen",
            "Kontinuierliche Updates",
            "Zugang zum KI-Chatbot"
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
        },
        youtube: "Abonniere unseren YouTube-Kanal!",
        tiktok: "Folge uns auf TikTok!"
      },
      downloadModal: {
        title: "Jetzt verfügbar!",
        message: "Hundezonen ist jetzt verfügbar. Lade die App herunter:",
        ios: "Für iOS-Nutzer",
        android: "Für Android-Nutzer",
        close: "Schließen",
        iosLink: "https://apps.apple.com/us/app/hundezonen/id6745336299",
        androidLink: "https://play.google.com/store/apps/details?id=com.lwebch.HundezonenSchweiz&pli=1"
      }
    },
    es: {
      hero: {
        title: "La App para ti y tu perro 🐾",
        subtitle: "Descubre y comparte rutas caninas en Suiza, Alemania y Austria",
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
      videoSection: {
        title: "Videos exclusivos de rutas",
        description: "Como suscriptor tendrás acceso a videos exclusivos donde te mostramos las mejores rutas. Te explicamos qué puedes encontrar, dónde aparcar y te damos consejos para el paseo perfecto con tu perro.",
        cta: "Suscribirse ahora"
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
            "Alertas de veneno",
            "Encontrar servicios caninos",
            "Sin publicidad"
          ],
          cta: "Empezar ahora"
        },
        premium: {
          title: "Suscriptor",
          price: "5 CHF",
          period: "cada 2 meses",
          priceMonth: "≈ 2.50 CHF/mes",
          features: [
            "Acceso a videos de rutas",
            "Rutas ilimitadas",
            "Actualizaciones continuas",
            "Acceso al chatbot IA"
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
        },
        youtube: "¡Suscríbete a nuestro canal de YouTube!",
        tiktok: "¡Síguenos en TikTok!"
      },
      downloadModal: {
        title: "¡Disponible ahora!",
        message: "Hundezonen ya está disponible. Descarga la app:",
        ios: "Para usuarios de iOS",
        android: "Para usuarios de Android",
        close: "Cerrar",
        iosLink: "https://apps.apple.com/us/app/hundezonen/id6745336299",
        androidLink: "https://play.google.com/store/apps/details?id=com.lwebch.HundezonenSchweiz&pli=1"
      }
    },
    en: {
      hero: {
        title: "The App for you and your dog 🐾",
        subtitle: "Discover and share dog routes in Switzerland, Germany and Austria",
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
      videoSection: {
        title: "Exclusive route videos",
        description: "As a subscriber you get access to exclusive videos where we show you the best routes. We explain what you can find, where to park and give you tips for the perfect walk with your dog.",
        cta: "Subscribe now"
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
            "Poison alerts",
            "Find dog services",
            "No ads"
          ],
          cta: "Start now"
        },
        premium: {
          title: "Supporter",
          price: "5 CHF",
          period: "every 2 months",
          priceMonth: "≈ 2.50 CHF/month",
          features: [
            "Access to route videos",
            "Unlimited routes",
            "Continuous updates",
            "AI Chatbot access"
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
        },
        youtube: "Subscribe to our YouTube channel!",
        tiktok: "Follow us on TikTok!"
      },
      downloadModal: {
        title: "Available Now!",
        message: "Hundezonen is now available. Download the app:",
        ios: "For iOS users",
        android: "For Android users",
        close: "Close",
        iosLink: "https://apps.apple.com/us/app/hundezonen/id6745336299",
        androidLink: "https://play.google.com/store/apps/details?id=com.lwebch.HundezonenSchweiz&pli=1"
      }
    },
    fr: {
      hero: {
        title: "L'App pour toi et ton chien 🐾",
        subtitle: "Découvre et partage des itinéraires canins en Suisse, Allemagne et Autriche",
        description: "Hundezonen t'aide à trouver les meilleures promenades pour ton chien. Avec alertes de poison, services et chatbot IA.",
        cta: "Télécharger gratuitement",
        availableOn: "Disponible pour",
      },
      features: {
        title: "Tout ce dont tu as besoin",
        subtitle: "Une plateforme complète pour propriétaires de chiens",
        items: [
          {
            image: "/featuresimagenes/rutas.png",
            title: "Découvre des itinéraires",
            description: "Trouve les meilleures promenades près de toi avec tous les détails: eau, ombre, parking et plus."
          },
          {
            image: "/featuresimagenes/guaradrrutas.png",
            title: "Sauvegarde tes itinéraires",
            description: "Crée et sauvegarde tes itinéraires préférés avec photos et descriptions à partager."
          },
          {
            image: "/featuresimagenes/radar.png",
            title: "Radar d'alertes",
            description: "Reçois des alertes de zones dangereuses et poison pour chiens en temps réel."
          },
          {
            image: "/featuresimagenes/servicios.png",
            title: "Services canins",
            description: "Trouve des vétérinaires, magasins, dresseurs, pensions et plus près de toi."
          },
          {
            image: "/featuresimagenes/bot.png",
            title: "Chatbot IA",
            description: "Pose toutes tes questions sur ton chien: reconnaître la race, trouver un dresseur, conseils santé."
          },
          {
            image: "/featuresimagenes/privado.png",
            title: "Confidentialité",
            description: "Choisis entre mode privé et public pour tes itinéraires."
          }
        ]
      },
      videoSection: {
        title: "Vidéos exclusives de parcours",
        description: "En tant qu'abonné, tu as accès à des vidéos exclusives où nous te montrons les meilleurs parcours. Nous t'expliquons ce que tu peux trouver, où te garer et te donnons des conseils pour la promenade parfaite avec ton chien.",
        cta: "S'abonner maintenant"
      },
      services: {
        title: "Services canins près de toi",
        subtitle: "Tout ce dont ton chien a besoin, en un coup d'œil",
        items: [
          { title: "Vétérinaires", color: "#FF6B6B", icon: "veterinary" },
          { title: "Magasins", color: "#4ECDC4", icon: "store" },
          { title: "Dresseurs", color: "#F39C12", icon: "trainer" },
          { title: "Pensions", color: "#9B59B6", icon: "home" },
          { title: "WC Chiens", color: "#95A5A6", icon: "toilet" },
          { title: "Adoption", color: "#E74C3C", icon: "heart" }
        ]
      },
      pricing: {
        title: "Transparent et équitable",
        subtitle: "Gratuit avec support optionnel",
        free: {
          title: "Gratuit",
          price: "0 CHF",
          features: [
            "Découvrir tous les itinéraires",
            "Alertes de poison",
            "Trouver des services canins",
            "Sans publicité"
          ],
          cta: "Commencer maintenant"
        },
        premium: {
          title: "Supporter",
          price: "5 CHF",
          period: "tous les 2 mois",
          priceMonth: "≈ 2.50 CHF/mois",
          features: [
            "Accès aux vidéos de parcours",
            "Routes illimitées",
            "Mises à jour continues",
            "Accès au chatbot IA"
          ],
          cta: "Soutenir"
        }
      },
      faq: {
        title: "Questions Fréquentes",
        items: [
          {
            q: "Qu'est-ce que Hundezonen?",
            a: "Hundezonen est une application où tu peux sauvegarder tes itinéraires préférés pour promener ton chien. Tu peux aussi découvrir des itinéraires créés par d'autres utilisateurs près de ton emplacement, avec toutes les informations nécessaires avant de sortir te promener."
          },
          {
            q: "Comment ça fonctionne?",
            a: "Quand tu ouvres l'app, elle détecte automatiquement ton emplacement et te montre les itinéraires les plus proches, créés par d'autres utilisateurs. Tu peux voir si l'itinéraire a de l'eau, de l'ombre, un parking, des restaurants ou d'autres services utiles."
          },
          {
            q: "Dans quels pays est-elle disponible?",
            a: "Hundezonen sera initialement disponible en Suisse, Allemagne et Autriche. Plus tard, elle s'étendra à d'autres pays, selon la réponse du public."
          },
          {
            q: "Que fait le chatbot avec intelligence artificielle?",
            a: "Le chatbot t'aide avec tout ce qui concerne ton chien. Tu peux lui demander des choses comme: 'Trouve-moi un dresseur de chiens près de moi' ou 'Analyse cette photo et dis-moi de quelle race est mon chien'."
          },
          {
            q: "Est-ce que Hundezonen est gratuit?",
            a: "Oui, l'utilisation de base est complètement gratuite. Il y a un abonnement optionnel de 5 francs tous les deux mois (≈2 francs par mois) pour soutenir le développement."
          }
        ]
      },
      footer: {
        tagline: "La communauté pour propriétaires de chiens",
        rights: "Tous droits réservés",
        links: {
          privacy: "Confidentialité",
          terms: "Conditions",
          contact: "Contact"
        },
        youtube: "Abonne-toi à notre chaîne YouTube !",
        tiktok: "Suis-nous sur TikTok !"
      },
      downloadModal: {
        title: "Disponible maintenant!",
        message: "Hundezonen est maintenant disponible. Téléchargez l'app:",
        ios: "Pour les utilisateurs iOS",
        android: "Pour les utilisateurs Android",
        close: "Fermer",
        iosLink: "https://apps.apple.com/us/app/hundezonen/id6745336299",
        androidLink: "https://play.google.com/store/apps/details?id=com.lwebch.HundezonenSchweiz&pli=1"
      }
    },
    it: {
      hero: {
        title: "L'App per te e il tuo cane 🐾",
        subtitle: "Scopri e condividi percorsi canini in Svizzera, Germania e Austria",
        description: "Hundezonen ti aiuta a trovare le migliori passeggiate per il tuo cane. Con allerte di veleno, servizi e chatbot IA.",
        cta: "Scarica gratis ora",
        availableOn: "Disponibile per",
      },
      features: {
        title: "Tutto ciò di cui hai bisogno",
        subtitle: "Una piattaforma completa per proprietari di cani",
        items: [
          {
            image: "/featuresimagenes/rutas.png",
            title: "Scopri percorsi",
            description: "Trova le migliori passeggiate vicino a te con tutti i dettagli: acqua, ombra, parcheggio e altro."
          },
          {
            image: "/featuresimagenes/guaradrrutas.png",
            title: "Salva i tuoi percorsi",
            description: "Crea e salva i tuoi percorsi preferiti con foto e descrizioni da condividere."
          },
          {
            image: "/featuresimagenes/radar.png",
            title: "Radar di allerte",
            description: "Ricevi allerte di zone pericolose e veleno per cani in tempo reale."
          },
          {
            image: "/featuresimagenes/servicios.png",
            title: "Servizi canini",
            description: "Trova veterinari, negozi, addestratori, pensioni e altro vicino a te."
          },
          {
            image: "/featuresimagenes/bot.png",
            title: "Chatbot IA",
            description: "Chiedi tutto sul tuo cane: riconoscere la razza, trovare addestratori, consigli sulla salute."
          },
          {
            image: "/featuresimagenes/privado.png",
            title: "Privacy",
            description: "Scegli tra modalità privata e pubblica per i tuoi percorsi."
          }
        ]
      },
      videoSection: {
        title: "Video esclusivi dei percorsi",
        description: "Come abbonato avrai accesso a video esclusivi dove ti mostriamo i migliori percorsi. Ti spieghiamo cosa puoi trovare, dove parcheggiare e ti diamo consigli per la passeggiata perfetta con il tuo cane.",
        cta: "Abbonati ora"
      },
      services: {
        title: "Servizi canini vicino a te",
        subtitle: "Tutto ciò di cui il tuo cane ha bisogno, a colpo d'occhio",
        items: [
          { title: "Veterinari", color: "#FF6B6B", icon: "veterinary" },
          { title: "Negozi", color: "#4ECDC4", icon: "store" },
          { title: "Addestratori", color: "#F39C12", icon: "trainer" },
          { title: "Pensioni", color: "#9B59B6", icon: "home" },
          { title: "WC Cani", color: "#95A5A6", icon: "toilet" },
          { title: "Adozione", color: "#E74C3C", icon: "heart" }
        ]
      },
      pricing: {
        title: "Trasparente ed equo",
        subtitle: "Gratuito con supporto opzionale",
        free: {
          title: "Gratuito",
          price: "0 CHF",
          features: [
            "Scoprire tutti i percorsi",
            "Allerte di veleno",
            "Trovare servizi canini",
            "Senza pubblicità"
          ],
          cta: "Inizia ora"
        },
        premium: {
          title: "Sostenitore",
          price: "5 CHF",
          period: "ogni 2 mesi",
          priceMonth: "≈ 2.50 CHF/mese",
          features: [
            "Accesso ai video dei percorsi",
            "Percorsi illimitati",
            "Aggiornamenti continui",
            "Accesso al chatbot IA"
          ],
          cta: "Sostenere"
        }
      },
      faq: {
        title: "Domande Frequenti",
        items: [
          {
            q: "Cos'è Hundezonen?",
            a: "Hundezonen è un'applicazione dove puoi salvare i tuoi percorsi preferiti per passeggiare con il tuo cane. Puoi anche scoprire percorsi creati da altri utenti vicino alla tua posizione, con tutte le informazioni necessarie prima di uscire a passeggiare."
          },
          {
            q: "Come funziona?",
            a: "Quando apri l'app, rileva automaticamente la tua posizione e ti mostra i percorsi più vicini, creati da altri utenti. Puoi vedere se il percorso ha acqua, ombra, parcheggio, ristoranti o altri servizi utili."
          },
          {
            q: "In quali paesi è disponibile?",
            a: "Hundezonen sarà inizialmente disponibile in Svizzera, Germania e Austria. Successivamente si espanderà ad altri paesi, a seconda della risposta del pubblico."
          },
          {
            q: "Cosa fa il chatbot con intelligenza artificiale?",
            a: "Il chatbot ti aiuta con tutto ciò che riguarda il tuo cane. Puoi chiedergli cose come: 'Trovami un addestratore di cani vicino a me' o 'Analizza questa foto e dimmi di che razza è il mio cane'."
          },
          {
            q: "Hundezonen è gratuito?",
            a: "Sì, l'uso di base è completamente gratuito. C'è un abbonamento opzionale di 5 franchi ogni due mesi (≈2 franchi al mese) per sostenere lo sviluppo."
          }
        ]
      },
      footer: {
        tagline: "La comunità per proprietari di cani",
        rights: "Tutti i diritti riservati",
        links: {
          privacy: "Privacy",
          terms: "Termini",
          contact: "Contatto"
        },
        youtube: "Iscriviti al nostro canale YouTube!",
        tiktok: "Seguici su TikTok!"
      },
      downloadModal: {
        title: "Disponibile ora!",
        message: "Hundezonen è ora disponibile. Scarica l'app:",
        ios: "Per utenti iOS",
        android: "Per utenti Android",
        close: "Chiudi",
        iosLink: "https://apps.apple.com/us/app/hundezonen/id6745336299",
        androidLink: "https://play.google.com/store/apps/details?id=com.lwebch.HundezonenSchweiz&pli=1"
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
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-primary">Hundezonen</span>
                {!isLoading && (
                  <span className="text-2xl" title={country.name}>
                    {country.flag}
                  </span>
                )}
              </div>
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

              <p className="text-lg text-gray-500 mb-8">
                {content.hero.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex gap-4">
                  <a
                    href="https://apps.apple.com/us/app/hundezonen/id6745336299"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-105"
                  >
                    <Image
                      src="/apple.png"
                      alt="Download on App Store"
                      width={200}
                      height={70}
                      className="h-16 w-auto"
                    />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.lwebch.HundezonenSchweiz&pli=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-105"
                  >
                    <Image
                      src="/google.png"
                      alt="Get it on Google Play"
                      width={200}
                      height={70}
                      className="h-16 w-auto"
                    />
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-100 rounded-2xl p-4 sm:p-5">
                <p className="text-sm text-gray-600 text-center leading-relaxed">
                  {lang === "es" && "Una herramienta hecha con amor ❤️ para ti y tu perro por un freelance amante de los perros."}
                  {lang === "en" && "A tool made with love ❤️ for you and your dog by a dog-loving freelancer."}
                  {lang === "de" && "Ein Tool mit Liebe ❤️ gemacht für Dich und Deinen Hund von einem hundeliebenden Freelancer."}
                  {lang === "it" && "Uno strumento fatto con amore ❤️ per te e il tuo cane da un freelancer amante dei cani."}
                  {lang === "fr" && "Un outil fait avec amour ❤️ pour toi et ton chien par un freelance amoureux des chiens."}
                </p>
              </div>
            </div>

            {/* Phone Mockup with Real Screenshots */}
            <div className="relative">
              <div className="relative z-10 mx-auto max-w-[280px] sm:max-w-sm">
                {/* Phone Frame */}
                <div className="relative bg-gray-900 rounded-[2rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 sm:w-40 h-5 sm:h-7 bg-gray-900 rounded-b-2xl sm:rounded-b-3xl z-20"></div>

                  {/* Screen */}
                  <div className="relative bg-white rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
                    {/* Screenshot Carousel */}
                    <div
                      className="relative w-full h-full overflow-hidden cursor-grab active:cursor-grabbing"
                      onTouchStart={handleTouchStart}
                      onTouchMove={handleTouchMove}
                      onTouchEnd={handleTouchEnd}
                      onMouseDown={handleMouseDown}
                      onMouseMove={handleMouseMove}
                      onMouseUp={handleMouseUp}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div
                        className="flex h-full transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentScreenshot * 100}%)` }}
                      >
                        {screenshots.map((screenshot, index) => (
                          <div key={index} className="relative min-w-full h-full">
                            <Image
                              src={screenshot}
                              alt={`Hundezonen App Screenshot ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Carousel Indicators */}
                    <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 flex justify-center gap-1.5 sm:gap-2 z-10">
                      {screenshots.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentScreenshot(index)}
                          className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${
                            currentScreenshot === index
                              ? "bg-primary w-4 sm:w-6"
                              : "bg-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Screenshots */}
              <div className="absolute -left-8 top-20 w-20 h-44 md:w-24 md:h-52 opacity-20 md:opacity-30 rotate-12 hidden md:block">
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/pantallas/IMG_5489.PNG"
                    alt="Screenshot"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute -right-8 top-40 w-20 h-44 md:w-24 md:h-52 opacity-20 md:opacity-30 -rotate-12 hidden md:block">
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/pantallas/IMG_5490.PNG"
                    alt="Screenshot"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="absolute top-10 -right-10 w-24 h-24 md:w-32 md:h-32 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 md:w-40 md:h-40 bg-blue-300/20 rounded-full blur-3xl"></div>
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

      {/* Video Section */}
      <section className="py-12 px-4 bg-white border-t border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-teal-50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group relative overflow-hidden">
            {/* Paw icon */}
            <div className="absolute top-3 right-3 text-3xl opacity-30 animate-bounce">
              🐾
            </div>
            <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 relative transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/imagnvideo.png"
                alt="Videos de rutas"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full">
                  Premium
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  {content.videoSection.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base">
                {content.videoSection.description}
              </p>
            </div>
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

          {/* Don Memorial Banner */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-4 sm:p-6 mt-8">
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-amber-300 flex-shrink-0">
                <Image
                  src="/don.png"
                  alt="Don"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {lang === "es" && "En memoria de mi perro Don, mi fiel compañero que inspiró esta aplicación."}
                {lang === "en" && "In memory of my dog Don, my faithful companion who inspired this application."}
                {lang === "de" && "Im Gedenken an meinen Hund Don, meinen treuen Begleiter, der diese App inspirierte."}
                {lang === "it" && "In memoria del mio cane Don, il mio fedele compagno che ha ispirato questa applicazione."}
                {lang === "fr" && "À la mémoire de mon chien Don, mon fidèle compagnon qui a inspiré cette application."}
              </p>
            </div>
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
            {lang === "fr" && "Prêt à découvrir les meilleurs itinéraires?"}
            {lang === "it" && "Pronto a scoprire i migliori percorsi?"}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {lang === "de" && "Lade Hundezonen jetzt kostenlos herunter und werde Teil der Community."}
            {lang === "es" && "Descarga Hundezonen gratis ahora y únete a la comunidad."}
            {lang === "en" && "Download Hundezonen for free now and join the community."}
            {lang === "fr" && "Télécharge Hundezonen gratuitement maintenant et rejoins la communauté."}
            {lang === "it" && "Scarica Hundezonen gratis ora e unisciti alla comunità."}
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://apps.apple.com/us/app/hundezonen/id6745336299"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <Image
                src="/apple.png"
                alt="Download on App Store"
                width={200}
                height={70}
                className="h-16 w-auto"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.lwebch.HundezonenSchweiz&pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <Image
                src="/google.png"
                alt="Get it on Google Play"
                width={200}
                height={70}
                className="h-16 w-auto"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Social Block */}
          <div className="mb-16">
            <div className="text-center mb-4">
              <p className="text-gray-400 text-sm">
                {lang === "de" && "Manchmal laden wir Videos von Routen auf unsere Kanäle hoch. Abonniere, um sie zu sehen!"}
                {lang === "es" && "A veces subimos videos de rutas a nuestros canales. ¡Suscríbete para verlos!"}
                {lang === "en" && "Sometimes we upload route videos to our channels. Subscribe to watch them!"}
                {lang === "fr" && "Parfois on met des vidéos de parcours sur nos chaînes. Abonne-toi pour les voir !"}
                {lang === "it" && "A volte carichiamo video di percorsi sui nostri canali. Iscriviti per vederli!"}
                {" "}😉
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@hundezonenschweiz8758/shorts"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full px-5 py-3 hover:from-gray-700 hover:to-gray-600 transition-all duration-300 cursor-pointer"
              >
                <div className="w-10 h-10 flex-shrink-0 relative">
                  <Image
                    src="/yotube.png"
                    alt="YouTube"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-300 text-sm">
                  {content.footer.youtube}
                </p>
                <span className="bg-red-600 text-white rounded-full px-3 py-1 font-medium text-xs">
                  {lang === "de" && "Abonnieren"}
                  {lang === "es" && "Suscribirse"}
                  {lang === "en" && "Subscribe"}
                  {lang === "fr" && "S'abonner"}
                  {lang === "it" && "Iscriviti"}
                </span>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@hundezonenschweiz.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full px-5 py-3 hover:from-gray-700 hover:to-gray-600 transition-all duration-300 cursor-pointer"
              >
                <div className="w-8 h-8 flex-shrink-0 relative">
                  <Image
                    src="/tiktok.png"
                    alt="TikTok"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-300 text-sm">
                  {content.footer.tiktok}
                </p>
                <span className="bg-black text-white rounded-full px-3 py-1 font-medium text-xs border border-gray-600">
                  {lang === "de" && "Folgen"}
                  {lang === "es" && "Seguir"}
                  {lang === "en" && "Follow"}
                  {lang === "fr" && "Suivre"}
                  {lang === "it" && "Segui"}
                </span>
              </a>
            </div>
          </div>

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
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold">Hundezonen</span>
                  {!isLoading && (
                    <span className="text-2xl" title={country.name}>
                      {country.flag}
                    </span>
                  )}
                </div>
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
                {lang === "fr" && "Disponible en"}
                {lang === "it" && "Disponibile in"}
              </h3>
              <p className="text-gray-400">🇨🇭 Schweiz</p>
              <p className="text-gray-400">🇩🇪 Deutschland</p>
              <p className="text-gray-400">🇦🇹 Österreich</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            {/* Language Selector */}
            <div className="flex justify-center space-x-2 mb-4">
              {["de", "fr", "it", "en", "es"].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l as any)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                    lang === l
                      ? "bg-primary text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <p>© 2025 Hundezonen. {content.footer.rights}</p>
          </div>
        </div>
      </footer>

      {/* Cookie Banner */}
      <CookieBanner />
    </main>
  );
}
