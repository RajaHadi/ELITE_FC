import type { Metadata } from "next";
import { Staatliches, Teko } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const staatliches = Staatliches({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

const teko = Teko({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ELITE INTELLIGENCE FC — Official Team Showcase",
  description:
    "Official football team showcase for ELITE INTELLIGENCE FC — players, matches, and statistics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${staatliches.variable} ${teko.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
