import { Clock, MessageSquare, ShieldCheck } from "lucide-react";

import { Section, SectionHeading } from "@/components/shared/section";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/sections/contact-form";

const points = [
  { icon: Clock, text: "Odpowiadamy na wiadomości możliwie szybko." },
  { icon: MessageSquare, text: "Pierwsza rozmowa jest niezobowiązująca." },
  { icon: ShieldCheck, text: "Twoje dane służą wyłącznie do kontaktu." },
];

export function Contact() {
  return (
    <Section id="kontakt" tone="dark" labelledBy="kontakt-title">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <SectionHeading
            id="kontakt-title"
            eyebrow="Kontakt"
            title="Porozmawiajmy o Twoim projekcie."
            description="Opisz, czego potrzebujesz. Wrócimy z pytaniami, propozycją rozwiązania i kolejnymi krokami."
          />
          <Reveal delay={0.1}>
            <ul className="mt-10 flex flex-col gap-4">
              {points.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-brand-soft">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="glass relative rounded-3xl p-6 sm:p-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-brand-soft/50 to-transparent"
          />
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
