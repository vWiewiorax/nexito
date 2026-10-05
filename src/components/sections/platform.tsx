import { Check, Minus } from "lucide-react";

import { Section, SectionHeading } from "@/components/shared/section";
import { Reveal } from "@/components/motion/reveal";
import { DashboardVisual } from "@/components/visuals/dashboard-visual";
import { comparison } from "@/content/home";

export function Platform() {
  return (
    <Section id="rozwiazania" labelledBy="rozwiazania-title" className="overflow-hidden">
      <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            id="rozwiazania-title"
            eyebrow="Rozwiązania"
            title="Nie tworzymy tylko stron. Tworzymy narzędzia dla biznesu."
            description="Strona to dopiero początek. Łączymy ją z systemami, które obsługują klientów, zamówienia i procesy. Automatycznie."
          />

          <Reveal delay={0.1} className="mt-10 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/[0.06] p-5">
              <h3 className="text-sm font-medium text-muted-foreground">Zwykła strona WWW</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {comparison.basic.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Minus className="mt-0.5 size-4 shrink-0 text-white/55" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl border border-brand/30 bg-brand/[0.06] p-5 shadow-[0_0_40px_-12px_var(--brand)]">
              <h3 className="text-sm font-medium text-foreground">Rozwiązanie NEXITO</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {comparison.nexito.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-foreground/90">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand-soft" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="pb-6 sm:px-6 lg:px-0">
          <DashboardVisual />
        </Reveal>
      </div>
    </Section>
  );
}
