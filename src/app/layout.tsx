import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Brich Digital — Crafting Ideas into Digital Reality",
  description:
    "Brich Digital is an independent technology studio that builds and manages digital products, SaaS platforms, AI tools, web applications, and interactive experiences.",
  keywords: [
    "Brich Digital",
    "SaaS",
    "AI tools",
    "web development",
    "indie games",
    "digital products",
  ],
  authors: [{ name: "Brich Digital" }],
  openGraph: {
    title: "Brich Digital — Crafting Ideas into Digital Reality",
    description:
      "An independent technology studio building digital products, SaaS platforms, AI tools, and interactive experiences.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-800">
        {children}
      </body>
    </html>
  );
}
