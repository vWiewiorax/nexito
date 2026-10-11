import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Section, SectionHeading } from "@/components/shared/section";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { services } from "@/content/services";

export function Services() {
  return (
    <Section id="uslugi" labelledBy="uslugi-title">
      <SectionHeading
        id="uslugi-title"
        eyebrow="Usługi"
        title="Jedna firma. Cały ekosystem cyfrowy."
        description="Od pierwszej strony internetowej po zaawansowany system zarządzający Twoim biznesem."
      />

      <Stagger as="ul" className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ slug, icon: Icon, title, description }) => (
          <StaggerItem as="li" key={slug}>
            <article className="group card-surface relative flex h-full flex-col overflow-hidden rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_20px_40px_-20px_oklch(0.4_0.15_256/0.35)]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 -right-24 size-56 rounded-full bg-brand/0 blur-3xl transition-colors duration-500 group-hover:bg-brand/10"
              />
              <span className="flex size-12 items-center justify-center rounded-xl bg-brand text-brand-foreground shadow-[0_8px_20px_-10px_var(--brand)]">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-lg font-bold tracking-tight text-foreground">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
              <Link
                href={`/uslugi/${slug}`}
                className="mt-6 inline-flex items-center gap-1.5 rounded-sm text-sm font-semibold text-brand-soft transition-colors outline-none after:absolute after:inset-0 hover:text-brand focus-visible:ring-2 focus-visible:ring-ring"
              >
                Dowiedz się więcej
                <span className="sr-only">: {title}</span>
                <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
