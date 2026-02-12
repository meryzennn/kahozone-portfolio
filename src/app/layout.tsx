import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { siteConfig } from "@/lib/site";
import { Inter, Cormorant_Garamond } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

// Defines global site metadata for SEO and site icons/manifest.
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,

  // This matches: <link rel="manifest" href="/site.webmanifest">
  manifest: "/site.webmanifest",

  // This matches your favicon + apple touch icon tags
  icons: {
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
};

// Renders the root layout with raw white theme and route transitions.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={[
          inter.variable,
          display.variable,
          "min-h-screen bg-white text-zinc-950 antialiased",
        ].join(" ")}
      >
        <Header />
        <PageTransition className="mx-auto min-h-[calc(100vh-3.5rem)] max-w-6xl px-6 pt-10">
          {children}
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
