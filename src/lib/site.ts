const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteConfig = {
  name: "NEXITO",
  tagline: "Technologia dla Twojego biznesu.",
  title: "NEXITO - Technologia dla Twojego biznesu",
  description:
    "NEXITO tworzy aplikacje SaaS, systemy dla firm, strony internetowe, sklepy i automatyzacje. Budujemy nowoczesne rozwiązania cyfrowe dla biznesu.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000"),
  locale: "pl_PL",
} as const;
