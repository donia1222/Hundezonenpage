import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hundezonen - Die beste App für Hundebesitzer",
  description: "Entdecke und teile die besten Hunderoutenenrouten in der Schweiz, Deutschland und Österreich. Mit Warnungen, Services und KI-Chatbot.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
