import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { TouchHover } from "@/components/TouchHover";
import { company } from "@/lib/site";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Poppins({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bhidwariapharma.com"),
  title: { default: `${company.name} | Quality Pharmaceutical Company in Meerut`, template: `%s | ${company.shortName}` },
  description:
    "Bhidwaria Pharmaceuticals Private Limited, Meerut — quality tablets and capsules across anti-infective, gastro care, pain management and anti-emetic therapy. PCD franchise and distribution enquiries welcome.",
  keywords: ["Bhidwaria Pharmaceuticals", "pharma company Meerut", "PCD pharma franchise Uttar Pradesh", "Bhidol-SP", "Bhidcef-200", "Bhidoclav-CV 625", "Bhidpan-DSR", "Rebhi-DSR", "Vomiblock-MD", "Bhidcal-D3 Nano Shots"],
  icons: { icon: "/images/bhidwaria-logo.webp" },
  openGraph: { type: "website", siteName: company.name, images: ["/images/site/hero-scientist.webp"] },
};

export const viewport: Viewport = { themeColor: "#062f55" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
        <TouchHover />
      </body>
    </html>
  );
}
