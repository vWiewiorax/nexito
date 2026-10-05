import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";

import { Container, Eyebrow, Section } from "@/components/shared/section";
import { CtaLink } from "@/components/shared/cta-link";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Cta } from "@/components/sections/cta";
import { getService, services } from "@/content/services";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.intro,
    alternates: { canonical: `/uslugi/${service.slug}` },
    openGraph: { title: `${service.title} — NEXITO`, description: service.description, url: `/uslugi/${service.slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const { icon: Icon } = service;
  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <section aria-labelledby="service-title" className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="bg-grid mask-radial absolute inset-0 opacity-60" />
          <div className="absolute -top-40 left-1/2 h-[420px] w-[800px] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]" />
        </div>
        <Container>
          <Reveal>
            <Link
              href="/#uslugi"
              className="inline-flex items-center gap-2 rounded-sm text-sm text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Wszystkie usługi
            </Link>
          </Reveal>
          <Reveal delay={0.05} className="mt-10 flex items-center gap-4">
            <span className="flex size-12 items-center justify-center rounded-2xl border border-brand/40 bg-brand/10 text-brand-soft">
              <Icon className="size-6" aria-hidden="true" />
            </span>
            <Eyebrow>{service.title}</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1
              id="service-title"
              className="text-gradient mt-6 max-w-3xl text-4xl leading-[1.05] font-semibold tracking-[-0.04em] text-balance sm:text-6xl"
            >
              {service.headline}
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
              {service.intro}
            </p>
          </Reveal>
          <Reveal delay={0.2} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <CtaLink href={`/?usluga=${service.slug}#kontakt`} size="lg">
              Porozmawiajmy
            </CtaLink>
            <CtaLink href="/#rozwiazania" variant="secondary" size="lg">
              Zobacz, co tworzymy
            </CtaLink>
          </Reveal>
        </Container>
      </section>

      <Section labelledBy="features-title" className="py-16 sm:py-20">
        <h2 id="features-title" className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Co obejmuje usługa
        </h2>
        <Stagger as="ul" className="mt-10 grid gap-4 sm:grid-cols-2">
          {service.features.map((feature) => (
            <StaggerItem as="li" key={feature.title} className="card-surface rounded-2xl p-7">
              <h3 className="text-lg font-semibold tracking-tight text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section labelledBy="for-whom-title" className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 id="for-whom-title" className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Dla kogo
            </h2>
            <ul className="mt-8 flex flex-col gap-4">
              {service.forWhom.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-brand/40 bg-brand/10 text-brand-soft">
                    <Check className="size-3" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Pozostałe usługi</h2>
            <ul className="mt-8 grid gap-2 sm:grid-cols-2">
              {others.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/uslugi/${item.slug}`}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.07] px-4 py-3 text-sm text-muted-foreground transition-colors outline-none hover:border-white/15 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <item.icon className="size-4 text-brand-soft" aria-hidden="true" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Cta />
    </>
  );
}
