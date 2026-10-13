
import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter, Plus_Jakarta_Sans } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { MotionProvider } from "@/components/motion/motion-provider";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

const keywords = [
  "NEXIWEB",
  "tworzenie stron internetowych",
  "projektowanie stron internetowych",
  "strony internetowe dla firm",
  "tworzenie sklepów internetowych",
  "sklepy internetowe",
  "aplikacje SaaS",
  "tworzenie aplikacji SaaS",
  "dedykowane systemy dla firm",
  "oprogramowanie dla firm",
  "automatyzacja procesów biznesowych",
  "automatyzacja pracy",
  "integracje API",
  "sztuczna inteligencja w biznesie",
  "AI dla firm",
  "optymalizacja SEO",
  "SEO lokalne",
  "wizytówka Google",
  "Google Business Profile",
  "optymalizacja stron internetowych",
  "projektowanie UX/UI",
  "systemy CRM",
  "digitalizacja biznesu",
    "agencja interaktywna",
    "software house Polska",
    "tworzenie oprogramowania na zamówienie",
    "dedykowane aplikacje internetowe",
    "aplikacje webowe dla firm",
    "projektowanie aplikacji webowych",
    "programowanie aplikacji internetowych",
    "wdrożenia IT dla firm",
    "rozwiązania IT dla biznesu",
    "nowoczesne strony WWW",
    "profesjonalne strony firmowe",
    "strona internetowa dla przedsiębiorcy",
    "strona internetowa dla małej firmy",
    "strona internetowa dla startupu",
    "strona internetowa dla usług",
    "responsywne strony internetowe",
    "projektowanie UX",
    "projektowanie UI",
    "audyt UX strony internetowej",
    "modernizacja strony internetowej",
    "przebudowa strony internetowej",
    "optymalizacja szybkości strony",
    "Core Web Vitals",
    "techniczne SEO",
    "pozycjonowanie stron internetowych",
    "optymalizacja konwersji",
    "zwiększanie konwersji strony",
    "landing page dla firm",
    "projektowanie landing page",
    "strony sprzedażowe",
    "strony internetowe B2B",
    "strony internetowe B2C",
    "projektowanie e-commerce",
    "wdrożenie sklepu internetowego",
    "rozwój sklepu internetowego",
    "optymalizacja sklepu internetowego",
    "integracje sklepów internetowych",
    "integracje płatności online",
    "integracje systemów sprzedażowych",
    "automatyzacja sprzedaży",
    "automatyzacja obsługi klienta",
    "automatyzacja marketingu",
    "automatyzacja fakturowania",
    "automatyzacja procesów biznesowych",
    "automatyzacja zadań w firmie",
    "integracja systemów IT",
    "integracje API dla firm",
    "tworzenie API",
    "projektowanie baz danych",
    "rozwój oprogramowania",
    "utrzymanie aplikacji internetowych",
    "administracja systemami internetowymi",
    "cyfryzacja przedsiębiorstwa",
    "transformacja cyfrowa firm",
    "innowacje technologiczne dla firm",
    "wdrożenie sztucznej inteligencji",
    "AI w przedsiębiorstwie",
    "automatyzacja z wykorzystaniem AI",
    "chatboty dla firm",
    "inteligentna obsługa klienta",
    "integracja AI z aplikacją",
    "aplikacje oparte na sztucznej inteligencji",
    "tworzenie MVP",
    "budowa startupów technologicznych",
    "rozwój produktów cyfrowych",
    "platformy internetowe",
    "systemy zarządzania firmą",
    "dedykowane systemy CRM",
    "integracja CRM",
    "systemy rezerwacji online",
    "systemy do zarządzania zamówieniami",
    "portale internetowe",
    "panele administracyjne",
    "dashboardy biznesowe",
    "aplikacje abonamentowe",
    "model biznesowy SaaS",
    "rozwój platform SaaS",
    "wdrożenie SaaS",
    "skalowalne aplikacje internetowe",
    "bezpieczeństwo aplikacji internetowych",
    "optymalizacja wydajności aplikacji",
    "utrzymanie stron internetowych",
    "opieka techniczna nad stroną",
    "wsparcie techniczne IT",
    "konsulting technologiczny",
    "doradztwo IT dla firm",
    "strategia cyfrowa firmy",
    "analiza potrzeb biznesowych",
    "projektowanie procesów biznesowych",
    "optymalizacja procesów w firmie",
    "integracja narzędzi biznesowych",
    "marketing internetowy dla firm",
    "widoczność firmy w Google",
    "optymalizacja profilu Google",
    "lokalne SEO dla przedsiębiorstw",
    "budowanie obecności w internecie",
    "rozwój biznesu online",
    "rozwiązania cyfrowe dla przedsiębiorstw"
];

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords,

  authors: [
    {
      name: "NEXIWEB",
      url: siteConfig.url,
    },
  ],

  creator: "NEXIWEB",
  publisher: "NEXIWEB",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-icon.png",
  },

  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NEXIWEB — rozwiązania cyfrowe dla firm",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/og-image.jpg"],
  },

  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  slogan: siteConfig.tagline,
  logo: new URL("/icon.png", siteConfig.url).toString(),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${inter.variable} ${jakarta.variable} ${geistMono.variable}`}
    >
      <head>
        <meta
          name="msvalidate.01"
          content="B997D72EDCAB2A971EEA94B058717A44"
        />
        <meta
          name="google-site-verification"
          content="W2qK9CC4QQGZk-qcqxb6WwgGLntZMyDrN6JeBTdbHIY"
        />
      </head>

      <body>
        <a
          href="#main"
          className="sr-only z-[60] rounded-full bg-brand px-4 py-2 text-sm text-brand-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Przejdź do treści
        </a>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />

        <MotionProvider>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}