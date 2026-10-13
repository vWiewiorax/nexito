import Link from "next/link";

import { Container } from "@/components/shared/section";
import { Logo } from "@/components/shared/logo";
import { services } from "@/content/services";
import { siteConfig } from "@/lib/site";

const columns = [
  {
    title: "Usługi",
    links: services.map((service) => ({ label: service.shortTitle, href: `/uslugi/${service.slug}` })),
  },
  {
    title: "Firma",
    links: [
      { label: "O nas", href: "/#o-nas" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Blog", href: "/blog" },
      { label: "Kontakt", href: "/#kontakt" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Prawne",
    links: [
      { label: "Polityka prywatności", href: "/polityka-prywatnosci" },
      { label: "Regulamin", href: "/regulamin" },
      { label: "Cookies", href: "/cookies" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-white text-foreground">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-xs text-sm text-muted-foreground">{siteConfig.tagline}</p>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm font-bold text-foreground">{column.title}</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="rounded-sm text-sm text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 NEXIWEB. Wszystkie prawa zastrzeżone.</p>
          <p className="font-mono tracking-wide">Technologia dla Twojego biznesu.</p>
        </div>
      </Container>
    </footer>
  );
}
