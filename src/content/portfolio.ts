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
];
