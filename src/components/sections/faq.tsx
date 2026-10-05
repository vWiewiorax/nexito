import { Section, SectionHeading } from "@/components/shared/section";
import { Reveal } from "@/components/motion/reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/content/home";

export function Faq() {
  return (
    <Section id="faq" labelledBy="faq-title">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading
          id="faq-title"
          eyebrow="FAQ"
          title="Najczęstsze pytania."
          description="Nie znalazłeś odpowiedzi? Napisz do nas - chętnie porozmawiamy o szczegółach."
        />
        <Reveal delay={0.1}>
          <Accordion className="rounded-2xl border border-white/[0.07] bg-white/[0.015] px-5 sm:px-7">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question} className="border-white/[0.07]">
                <AccordionTrigger className="items-center gap-4 py-5 text-[15px] font-medium text-foreground hover:no-underline sm:text-base [&_[data-slot=accordion-trigger-icon]]:text-muted-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </Section>
  );
}
