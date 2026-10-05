import {
  Gauge,
  Infinity as InfinityIcon,
  Layers,
  Puzzle,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export const trustPoints = [
  "Nowoczesna technologia",
  "Indywidualne rozwiązania",
  "Skalowalne systemy",
  "Wsparcie na każdym etapie",
];

export const comparison = {
  basic: ["Wizytówka z ofertą", "Formularz trafia do skrzynki", "Ręczne przepisywanie danych", "Brak wglądu w wyniki"],
  nexito: ["Strona połączona z systemem", "Zapytania trafiają do CRM", "Automatyczne procesy i powiadomienia", "Analityka w czasie rzeczywistym"],
};

export const processSteps = [
  {
    number: "01",
    title: "Poznajemy potrzeby",
    description: "Rozmawiamy o Twoim biznesie, celach i problemach, które chcesz rozwiązać.",
  },
  {
    number: "02",
    title: "Projektujemy rozwiązanie",
    description: "Proponujemy zakres, architekturę i projekt interfejsu - zanim powstanie kod.",
  },
  {
    number: "03",
    title: "Tworzymy i wdrażamy",
    description: "Budujemy iteracyjnie, pokazujemy postępy i uruchamiamy gotowe rozwiązanie.",
  },
  {
    number: "04",
    title: "Rozwijamy razem z Tobą",
    description: "Utrzymujemy, mierzymy i rozbudowujemy system wraz z rozwojem firmy.",
  },
];

export type Benefit = { icon: LucideIcon; title: string; description: string };

export const benefits: Benefit[] = [
  {
    icon: Puzzle,
    title: "Dopasowanie",
    description: "Nie wciskamy gotowych rozwiązań tam, gdzie potrzebne jest coś więcej.",
  },
  {
    icon: Layers,
    title: "Skalowalność",
    description: "Tworzymy rozwiązania, które mogą rozwijać się razem z firmą.",
  },
  {
    icon: Sparkles,
    title: "Prostota",
    description: "Technologia ma ułatwiać pracę, a nie ją komplikować.",
  },
  {
    icon: Gauge,
    title: "Wydajność",
    description: "Dbamy o szybkość, bezpieczeństwo i jakość wykonania.",
  },
  {
    icon: InfinityIcon,
    title: "Długoterminowe podejście",
    description: "Nie znikamy po uruchomieniu projektu.",
  },
];

export type Showcase = {
  kind: "concept" | "case-study";
  variant: "saas" | "system" | "website";
  label: string;
  title: string;
  description: string;
  tags: string[];
};

export const showcases: Showcase[] = [
  {
    kind: "concept",
    variant: "saas",
    label: "Koncept 01",
    title: "Platforma SaaS",
    description: "Produkt z kontami użytkowników, subskrypcjami i panelem analitycznym - gotowy do sprzedaży jako usługa.",
    tags: ["Subskrypcje", "Multi-tenant", "Analityka"],
  },
  {
    kind: "concept",
    variant: "system",
    label: "Koncept 02",
    title: "System zarządzania firmą",
    description: "Jedno miejsce na klientów, zlecenia, zadania zespołu i raporty - zamiast arkuszy i e-maili.",
    tags: ["CRM", "Zlecenia", "Automatyzacje"],
  },
  {
    kind: "concept",
    variant: "website",
    label: "Koncept 03",
    title: "Nowoczesny serwis internetowy",
    description: "Szybka strona nastawiona na konwersję, połączona z formularzami, CRM i analityką.",
    tags: ["Konwersja", "SEO", "Integracje"],
  },
];

export const faqs = [
  {
    question: "Ile kosztuje stworzenie strony internetowej?",
    answer:
      "Koszt zależy od zakresu: liczby podstron, funkcji i integracji. Po krótkiej rozmowie przygotowujemy konkretną wycenę i zakres prac - bez ukrytych kosztów.",
  },
  {
    question: "Ile trwa stworzenie systemu?",
    answer:
      "Prostsze wdrożenia zajmują zwykle kilka tygodni, rozbudowane systemy - kilka miesięcy. Często startujemy od wersji podstawowej, aby szybciej dostarczyć wartość.",
  },
  {
    question: "Czy tworzycie aplikacje SaaS od zera?",
    answer:
      "Tak. Prowadzimy projekt od pomysłu i prototypu, przez architekturę i development, aż po wdrożenie i dalszy rozwój produktu.",
  },
  {
    question: "Czy możecie zintegrować system z innymi narzędziami?",
    answer:
      "Tak. Integrujemy rozwiązania z systemami księgowymi, CRM, płatnościami, e-mailem, kalendarzami i innymi narzędziami udostępniającymi API.",
  },
  {
    question: "Czy zajmujecie się późniejszym utrzymaniem?",
    answer:
      "Tak. Oferujemy utrzymanie, monitoring, aktualizacje i dalszy rozwój. Nie znikamy po uruchomieniu projektu.",
  },
  {
    question: "Czy pomagacie w Google i SEO lokalnym?",
    answer:
      "Tak. Tworzymy i optymalizujemy wizytówki Google oraz dbamy o lokalne SEO, aby klienci z Twojej okolicy łatwiej Cię znajdowali.",
  },
  {
    question: "Czy można zacząć od prostego rozwiązania i później je rozbudować?",
    answer:
      "Tak - to często najlepsza droga. Projektujemy rozwiązania tak, aby można je było bezpiecznie rozwijać wraz z firmą.",
  },
];
