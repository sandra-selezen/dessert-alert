import type { Metadata } from "next";
import { Figtree, Fredoka } from "next/font/google";

import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
});

export const metadata: Metadata = {
  title: "Fofood",
  description: "Super Delicious Food Special for You",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} ${fredoka.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
