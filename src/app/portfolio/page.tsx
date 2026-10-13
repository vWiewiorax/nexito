import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";

import { Container, Eyebrow, Section, SectionHeading } from "@/components/shared/section";
import { CtaLink } from "@/components/shared/cta-link";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Cta } from "@/components/sections/cta";
import { portfolio } from "@/content/portfolio";
import { contactHref } from "@/content/navigation";

const description = "Wybrane strony i projekty zrealizowane przez NEXIWEB.";

export const metadata: Metadata = {
  title: "Portfolio",
  description,
  alternates: { canonical: "/portfolio" },
  openGraph: { title: "Portfolio - NEXIWEB", description, url: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <section
        aria-labelledby="portfolio-title"
        className="dark relative isolate overflow-hidden bg-background pt-32 pb-20 text-foreground sm:pt-40"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(160deg,oklch(0.26_0.08_258)_0%,oklch(0.18_0.04_258)_55%,oklch(0.15_0.03_258)_100%)]" />
          <div className="bg-grid mask-radial absolute inset-0 opacity-60" />
          <div className="absolute -top-40 left-1/2 h-[420px] w-[800px] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]" />
        </div>
        <Container>
          <Reveal>
            <Eyebrow>Portfolio</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1
              id="portfolio-title"
              className="text-gradient mt-6 max-w-3xl text-4xl leading-[1.05] font-extrabold tracking-[-0.035em] text-balance sm:text-6xl"
            >
              Strony, które już działają.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
              Wybrane projekty, które zaprojektowaliśmy i wdrożyliśmy. Każdy możesz otworzyć i sprawdzić na żywo.
            </p>
          </Reveal>
        </Container>
      </section>

      <Section labelledBy="projekty-title">
        <SectionHeading id="projekty-title" eyebrow="Realizacje" title="Wybrane projekty" />
        <Stagger as="ul" className="mt-14 grid gap-8">
          {portfolio.map((project) => (
            <StaggerItem as="li" key={project.slug}>
              <article className="card-surface grid overflow-hidden rounded-3xl lg:grid-cols-[1.35fr_1fr]">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Otwórz stronę ${project.title}`}
                  className="group relative block overflow-hidden border-b border-border bg-surface outline-none focus-visible:ring-2 focus-visible:ring-ring lg:border-r lg:border-b-0"
                >
                  <div className="flex h-9 items-center gap-1.5 border-b border-border bg-background px-4">
                    <span className="size-2.5 rounded-full bg-border" />
                    <span className="size-2.5 rounded-full bg-border" />
                    <span className="size-2.5 rounded-full bg-border" />
                    <span className="ml-3 truncate text-xs text-muted-foreground">{project.domain}</span>
                  </div>
                  <Image
                    src={project.image}
                    alt={`Strona główna ${project.title}`}
                    width={1600}
                    height={1000}
                    sizes="(min-width: 1024px) 640px, 100vw"
                    className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </a>
                <div className="flex flex-col p-7 sm:p-9">
                  <p className="text-xs font-bold tracking-[0.14em] text-brand-soft uppercase">{project.category}</p>
                  <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-foreground">{project.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{project.description}</p>
                  <ul className="mt-6 space-y-3">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-foreground">
                        <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Technologie i zakres">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-border bg-surface px-2.5 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-1.5 self-start rounded-sm text-sm font-semibold text-brand outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Zobacz stronę {project.domain}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-12 flex flex-col items-start gap-4 rounded-2xl border border-dashed border-border p-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-muted-foreground">Chcesz zobaczyć, co możemy zbudować dla Twojej firmy?</p>
          <CtaLink href={contactHref}>Porozmawiajmy</CtaLink>
        </Reveal>
      </Section>

      <Cta />
    </>
  );
}
