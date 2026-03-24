import type { Metadata } from "next";
import { Cormorant_Garamond, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "O'Malleys Lawyers | Christchurch Family Law Specialists",
  description: "Specialist family law advice, relationship property, and conveyancing in Christchurch. Over 20 years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-NZ"
      className={`${cormorant.variable} ${nunitoSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-warm-white text-charcoal selection:bg-teal-brand/20">
        <Navbar />
        {children}
        <Footer />
        <MobileCTA />
        <SchemaMarkup />
      </body>
    </html>
  );
}
