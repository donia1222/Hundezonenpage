"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);

  const content: any = {
    de: {
      title: "Kontaktieren Sie uns",
      selectType: "Typ auswählen",
      nameLabel: "Name (optional)",
      namePlaceholder: "Ihr Name",
      emailLabel: "E-Mail (optional)",
      emailPlaceholder: "ihre@email.com",
      subjectLabel: "Betreff",
      subjectPlaceholder: "Kurzer Betreff...",
      messageLabel: "Nachricht",
      messagePlaceholder: "Erzählen Sie uns mehr...",
      sendButton: "Nachricht senden",
      sending: "Wird gesendet...",
      fillFields: "Bitte füllen Sie alle erforderlichen Felder aus",
    }
  };

  const t = content.de;

  const contactTypes = [
    {
      id: 'bug',
      label: 'Fehler',
      desc: 'Problem melden',
      icon: '🐛',
      color: 'bg-purple-500',
      hoverColor: 'hover:bg-purple-600'
    },
    {
      id: 'idea',
      label: 'Idee',
      desc: 'Funktion vorschlagen',
      icon: '💡',
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600'
    },
    {
      id: 'comment',
      label: 'Kommentar',
      desc: 'Gedanken teilen',
      icon: '💬',
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600'
    }
  ];

  const handleSend = () => {
    if (!selectedType || !subject || !message) {
      alert(t.fillFields);
      return;
    }

    setSending(true);

    const typeLabel = contactTypes.find(ct => ct.id === selectedType)?.label || selectedType;
    const emailSubject = `[Hundezonen - ${typeLabel}] ${subject}`;
    const emailBody = `
Tipo: ${typeLabel}
Nombre: ${name || 'No proporcionado'}
Email: ${email || 'No proporcionado'}

Mensaje:
${message}

---
Enviado desde Hundezonen Landing
    `;

    const mailtoUrl = `mailto:info@lweb.ch?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoUrl;

    setTimeout(() => {
      setSending(false);
      setSelectedType(null);
      setSubject('');
      setMessage('');
      setName('');
      setEmail('');
    }, 1000);
  };

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
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
            {/* Title */}
            <h1 className="text-4xl font-bold text-center text-primary mb-8">
              {t.title}
            </h1>

            {/* Type Selection */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">{t.selectType}</h2>
              <div className="grid grid-cols-3 gap-4">
                {contactTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`
                      aspect-square rounded-2xl border-2 p-4 flex flex-col items-center justify-center gap-2 transition-all
                      ${selectedType === type.id
                        ? `${type.color} border-transparent text-white shadow-lg`
                        : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'}
                    `}
                  >
                    <span className="text-4xl">{type.icon}</span>
                    <span className="font-semibold text-sm">{type.label}</span>
                    <span className={`text-xs ${selectedType === type.id ? 'text-white/80' : 'text-gray-500'}`}>
                      {type.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="space-y-6">
              {/* Name (Optional) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.nameLabel}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.namePlaceholder}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Email (Optional) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.emailLabel}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailPlaceholder}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.subjectLabel} *
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder={t.subjectPlaceholder}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.messageLabel} *
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.messagePlaceholder}
                  rows={6}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                />
              </div>
            </div>

            {/* Send Button */}
            <div className="mt-8 space-y-4">
              <button
                onClick={handleSend}
                disabled={sending || !selectedType || !subject || !message}
                className={`
                  w-full py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-3 transition-all
                  ${sending || !selectedType || !subject || !message
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl'}
                `}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
                {sending ? t.sending : t.sendButton}
              </button>

              <Link
                href="/"
                className="block text-center text-gray-600 hover:text-primary transition-colors"
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
