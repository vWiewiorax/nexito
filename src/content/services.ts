import {
  Bot,
  Building2,
  Cloud,
  MapPin,
  MonitorSmartphone,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortTitle: string;
  description: string;
  headline: string;
  intro: string;
  features: { title: string; description: string }[];
  forWhom: string[];
};

export const services: Service[] = [
  {
    slug: "aplikacje-saas",
    icon: Cloud,
    title: "Aplikacje SaaS",
    shortTitle: "SaaS",
    description: "Tworzymy skalowalne aplikacje dostępne z dowolnego miejsca.",
    headline: "Aplikacje SaaS gotowe na wzrost.",
    intro:
      "Projektujemy i budujemy produkty SaaS od pierwszego prototypu po stabilną platformę z kontami użytkowników, subskrypcjami i panelem administracyjnym.",
    features: [
      { title: "Architektura multi-tenant", description: "Wiele firm i użytkowników w jednym, bezpiecznym systemie." },
      { title: "Płatności i subskrypcje", description: "Plany, okresy próbne i rozliczenia zintegrowane z produktem." },
      { title: "Panel administracyjny", description: "Pełna kontrola nad użytkownikami, danymi i konfiguracją." },
      { title: "Skalowalna infrastruktura", description: "Chmura dobrana do ruchu dziś i za kilka lat." },
    ],
    forWhom: ["Startupy budujące własny produkt", "Firmy, które chcą sprzedawać swoje know-how jako usługę", "Zespoły z działającym MVP do przepisania"],
  },
  {
    slug: "systemy-dla-firm",
    icon: Building2,
    title: "Systemy dla firm",
    shortTitle: "Systemy dla firm",
    description: "Dedykowane rozwiązania dopasowane do procesów Twojej firmy.",
    headline: "System, który pasuje do Twojej firmy.",
    intro:
      "Zamiast dopasowywać firmę do gotowego programu, budujemy narzędzie wokół Twoich procesów: CRM, zlecenia, magazyn, rezerwacje czy obieg dokumentów.",
    features: [
      { title: "Analiza procesów", description: "Zaczynamy od zrozumienia, jak naprawdę pracuje Twój zespół." },
      { title: "Role i uprawnienia", description: "Każdy widzi dokładnie to, czego potrzebuje do pracy." },
      { title: "Raporty i analityka", description: "Kluczowe liczby w jednym miejscu, bez ręcznych zestawień." },
      { title: "Integracje", description: "Połączenie z księgowością, e-mailem, kalendarzem i innymi narzędziami." },
    ],
    forWhom: ["Firmy pracujące na arkuszach i e-mailach", "Zespoły, którym gotowe systemy nie wystarczają", "Organizacje z nietypowymi procesami"],
  },
  {
    slug: "strony-internetowe",
    icon: MonitorSmartphone,
    title: "Strony internetowe",
    shortTitle: "Strony internetowe",
    description: "Szybkie, nowoczesne i nastawione na konwersję strony WWW.",
    headline: "Strona, która pracuje na wyniki.",
    intro:
      "Tworzymy szybkie, dopracowane strony, które jasno komunikują ofertę i prowadzą odwiedzających do kontaktu lub zakupu.",
    features: [
      { title: "Projekt UX/UI", description: "Struktura i design oparte na celu biznesowym strony." },
      { title: "Wydajność", description: "Nowoczesny stack i optymalizacja pod Core Web Vitals." },
      { title: "SEO od podstaw", description: "Poprawna struktura, metadane i szybkie ładowanie." },
      { title: "Łatwa edycja", description: "Możliwość samodzielnej zmiany treści, gdy jest potrzebna." },
    ],
    forWhom: ["Firmy usługowe i B2B", "Marki, które przerosły obecną stronę", "Nowe projekty potrzebujące mocnego startu"],
  },
  {
    slug: "sklepy-internetowe",
    icon: ShoppingBag,
    title: "Sklepy internetowe",
    shortTitle: "Sklepy",
    description: "Nowoczesne sklepy stworzone z myślą o sprzedaży i rozwoju.",
    headline: "E-commerce zaprojektowany pod sprzedaż.",
    intro:
      "Budujemy sklepy, które są szybkie, wygodne na telefonie i łatwe w obsłudze dla Twojego zespołu — z płatnościami, dostawami i integracjami.",
    features: [
      { title: "Ścieżka zakupowa", description: "Prosty, szybki checkout ograniczający porzucone koszyki." },
      { title: "Płatności i dostawy", description: "Popularne bramki płatności i przewoźnicy w jednym miejscu." },
      { title: "Integracje", description: "Magazyn, ERP, marketplace'y i systemy księgowe." },
      { title: "Analityka sprzedaży", description: "Dane, które pomagają podejmować decyzje." },
    ],
    forWhom: ["Marki startujące ze sprzedażą online", "Sklepy, które potrzebują lepszej wydajności", "Firmy B2B z zamówieniami online"],
  },
  {
    slug: "automatyzacje",
    icon: Bot,
    title: "Automatyzacje",
    shortTitle: "Automatyzacje",
    description: "Łączymy narzędzia i automatyzujemy powtarzalne procesy.",
    headline: "Mniej ręcznej pracy. Więcej czasu na biznes.",
    intro:
      "Łączymy narzędzia, z których już korzystasz, i automatyzujemy powtarzalne zadania — także z wykorzystaniem AI tam, gdzie realnie pomaga.",
    features: [
      { title: "Integracje API", description: "Wymiana danych między systemami bez kopiowania." },
      { title: "Przepływy pracy", description: "Automatyczne powiadomienia, zadania i dokumenty." },
      { title: "Rozwiązania AI", description: "Asystenci, klasyfikacja zapytań i przetwarzanie dokumentów." },
      { title: "Monitoring", description: "Wiesz, co działa, a co wymaga uwagi." },
    ],
    forWhom: ["Zespoły tracące czas na powtarzalne zadania", "Firmy korzystające z wielu niepołączonych narzędzi", "Organizacje, które chcą wdrożyć AI z głową"],
  },
  {
    slug: "google-local",
    icon: MapPin,
    title: "Google / Local",
    shortTitle: "Google / Local",
    description: "Pomagamy firmom zwiększyć widoczność w Google i pozyskiwać lokalnych klientów.",
    headline: "Bądź widoczny tam, gdzie szukają Cię klienci.",
    intro:
      "Tworzymy i optymalizujemy wizytówki Google oraz dbamy o lokalne SEO, aby Twoja firma pojawiała się wyżej w mapach i wynikach wyszukiwania.",
    features: [
      { title: "Wizytówka Google", description: "Założenie, weryfikacja i pełna optymalizacja profilu firmy." },
      { title: "Lokalne SEO", description: "Strona i treści dopasowane do lokalnych wyszukiwań." },
      { title: "Opinie", description: "Proces pozyskiwania opinii i odpowiadania na nie." },
      { title: "Spójność danych", description: "Te same dane firmy w kluczowych katalogach." },
    ],
    forWhom: ["Firmy usługowe działające lokalnie", "Gabinety, salony i warsztaty", "Firmy z kilkoma lokalizacjami"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
