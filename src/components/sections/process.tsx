import { Section, SectionHeading } from "@/components/shared/section";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { processSteps } from "@/content/home";

export function Process() {
  return (
    <Section id="proces" labelledBy="proces-title">
      <SectionHeading
        id="proces-title"
        eyebrow="Jak działamy"
        title="Od pomysłu do działającego rozwiązania."
        description="Prosty, przejrzysty proces. Na każdym etapie wiesz, co powstaje i dlaczego."
      />

      <Stagger as="ol" stagger={0.12} className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
        <span
          aria-hidden="true"
          className="absolute top-[7px] left-[7px] h-[calc(100%-14px)] w-px bg-gradient-to-b from-brand/60 via-border to-transparent md:top-[7px] md:left-0 md:h-px md:w-full md:bg-gradient-to-r"
        />
        {processSteps.map((step) => (
          <StaggerItem as="li" key={step.number} className="relative pl-10 md:pt-10 md:pl-0">
            <span
              aria-hidden="true"
              className="absolute top-0 left-0 flex size-[15px] items-center justify-center rounded-full border border-brand/50 bg-background"
            >
              <span className="size-[5px] rounded-full bg-brand-soft shadow-[0_0_10px_var(--brand)]" />
            </span>
            <p className="font-mono text-xs tracking-widest text-brand-soft">{step.number}</p>
            <h3 className="mt-3 text-lg font-bold tracking-tight text-foreground">{step.title}</h3>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">{step.description}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
