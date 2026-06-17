import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";

import { site } from "@/data/site";
import { asset } from "@/lib/asset";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { JsonLd } from "@/components/seo/json-ld";

import "./globals.css";

/** Police de labeur — lisibilité des paragraphes. */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/** Police display condensée — titres, esprit sport de combat. */
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — JJB & Grappling à Anglet`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Jiu-Jitsu Brésilien",
    "JJB",
    "Grappling",
    "Anglet",
    "Pays Basque",
    "Côte Basque",
    "self-défense féminine",
    "arts martiaux enfants",
    "No-Gi",
    "Icon Jiu-Jitsu",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} — JJB & Grappling à Anglet`,
    description: site.description,
    images: [
      {
        url: "/images/logo.png",
        width: 1380,
        height: 360,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${site.name} — JJB & Grappling à Anglet`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  // Favicon : public/images/logo-mark.png — remplaçable sans toucher au code.
  // asset() ajoute le basePath en export statique (non appliqué auto aux icônes).
  icons: {
    icon: [{ url: asset("/images/logo-mark.png"), sizes: "512x512", type: "image/png" }],
    apple: asset("/images/logo-mark.png"),
  },
};

export const viewport: Viewport = {
  themeColor: "#faf9f7",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${oswald.variable} antialiased`}>
      <body className="flex min-h-svh flex-col">
        <a
          href="#contenu"
          className="sr-only z-100 rounded-md bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Aller au contenu
        </a>
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <JsonLd />
      </body>
    </html>
  );
}
