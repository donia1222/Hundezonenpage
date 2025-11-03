import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
export const metadata: Metadata = {
  title: "Hundezonen - Die App für dich und deinen Hund",
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
        <Analytics />
    </html>
  );
}
