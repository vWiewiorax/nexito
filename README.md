# NEXIWEB — strona firmowa

Next.js 15 (App Router) · TypeScript · Tailwind CSS 4 · shadcn/ui (Base UI) · Lucide · Framer Motion.

## Uruchomienie

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint && npm run typecheck && npm run build
```

## Konfiguracja (`.env.local`, patrz `.env.example`)

- `NEXT_PUBLIC_SITE_URL` — publiczny adres strony (canonical, Open Graph, sitemap). Na Vercelu domyślnie użyty zostanie `VERCEL_PROJECT_PRODUCTION_URL`.
- `CONTACT_WEBHOOK_URL` — opcjonalny webhook (Make, Zapier, n8n, Slack…), na który `POST /api/contact` przekazuje zgłoszenia jako JSON. Bez niego zgłoszenia są tylko logowane po stronie serwera.
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` i `TURNSTILE_SECRET_KEY` - klucze Cloudflare Turnstile (captcha w formularzu kontaktowym). `POST /api/contact` odrzuca zgłoszenia bez poprawnej captchy. W trybie deweloperskim, bez kluczy, używane są klucze testowe Cloudflare; w produkcji bez kluczy formularz nie wyśle wiadomości.

## Struktura

- `src/app` — strony (`/`, `/uslugi/[slug]`, `/polityka-prywatnosci`, `/cookies`), API formularza, OG image, robots, sitemap.
- `src/components/sections` — sekcje strony głównej (Hero, Usługi, Rozwiązania, Proces, Dlaczego NEXIWEB, Koncepty, CTA, FAQ, Kontakt).
- `src/components/visuals` — abstrakcyjne wizualizacje dashboardów (dane poglądowe).
- `src/components/layout` — Navbar i Footer; `src/components/shared` — wspólne elementy (Section, CtaLink, Logo).
- `src/content` — wszystkie treści (usługi, FAQ, proces, benefity, koncepty). Prawdziwe realizacje dodaj w `showcases` w `src/content/home.ts` z `kind: "case-study"`.
