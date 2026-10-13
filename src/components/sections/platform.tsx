import { Check, Minus } from "lucide-react";

import { Section, SectionHeading } from "@/components/shared/section";
import { Reveal } from "@/components/motion/reveal";
import { DashboardVisual } from "@/components/visuals/dashboard-visual";
import { comparison } from "@/content/home";

export function Platform() {
  return (
    <Section id="rozwiazania" tone="muted" labelledBy="rozwiazania-title" className="overflow-hidden">
      <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            id="rozwiazania-title"
            eyebrow="Rozwiązania"
            title="Nie tworzymy tylko stron. Tworzymy narzędzia dla biznesu."
            description="Strona to dopiero początek. Łączymy ją z systemami, które obsługują klientów, zamówienia i procesy. Automatycznie."
          />

          <Reveal delay={0.1} className="mt-10 grid gap-3 sm:grid-cols-2">
            <div className="card-surface rounded-2xl p-5">
              <h3 className="text-sm font-bold text-muted-foreground">Zwykła strona WWW</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {comparison.basic.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Minus className="mt-0.5 size-4 shrink-0 text-muted-foreground/70" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl border border-brand/30 bg-card p-5 shadow-[0_20px_40px_-20px_oklch(0.4_0.15_256/0.4)]">
              <h3 className="text-sm font-bold text-brand-soft">Rozwiązanie NEXIWEB</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {comparison.nexiweb.map((point) => (
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
          <div className="dark">
            <DashboardVisual />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
