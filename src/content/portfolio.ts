export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  url: string;
  domain: string;
  image: string;
  description: string;
  highlights: string[];
  tags: string[];
};

export const portfolio: PortfolioProject[] = [
  {
    slug: "tsdruk",
    title: "TSdruk",
    category: "Strona usługowa",
    url: "https://www.tsdruk.pl",
    domain: "tsdruk.pl",
    image: "/portfolio/tsdruk.png",
    description:
      "Strona serwisu drukarek: przejrzysta oferta, cennik i formularz zgłoszenia usterki, który prowadzi klienta prosto do kontaktu.",
    highlights: [
      "Formularz zgłoszenia usterki z możliwością dodania zdjęć",
      "Podstrony serwisu, cennik, galeria i opinie",
      "SEO lokalne i dane strukturalne dla Google",
    ],
    tags: ["Next.js", "SEO lokalne", "Formularz", "Vercel"],
  },
  {
    slug: "workshopjs",
    title: "Workshop JS",
    category: "Strona usługowa",
    url: "https://www.workshopjs.pl",
    domain: "workshopjs.pl",
    image: "/portfolio/workshopjs.png",
    description:
      "Strona niezależnego serwisu BMW w Łańcucie: usługi warsztatu, zdjęcia z ostatnich zleceń, opinie i szybki kontakt z mechanikiem.",
    highlights: [
      "Galeria ostatnich zleceń ze zdjęciami z warsztatu",
      "Formularz umówienia wizyty i przycisk szybkiego połączenia",
      "SEO lokalne pod serwis BMW w Łańcucie",
    ],
    tags: ["Next.js", "SEO lokalne", "Formularz", "Galeria"],
  },
  {
    slug: "relapy",
    title: "Relapy",
    category: "Strona sprzedażowa",
    url: "https://www.relapy.pl",
    domain: "relapy.pl",
    image: "/portfolio/relapy.png",
    description:
      "Strona sprzedażowa e-booka o relacjach: prezentacja treści, opinie czytelników, sekcja z ceną i prowadzenie prosto do zakupu.",
    highlights: [
      "Landing sprzedażowy z podglądem spisu treści e-booka",
      "Sekcja oferty z ceną i przyciskiem zakupu",
      "Blog oraz regulamin, polityka prywatności i cookies",
    ],
    tags: ["Landing page", "Sprzedaż", "Blog"],
  },
];
