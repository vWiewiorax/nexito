import { Section, SectionHeading } from "@/components/shared/section";
import { ProcessTimeline } from "@/components/sections/process-timeline";

export function Process() {
  return (
    <Section id="proces" labelledBy="proces-title">
      <SectionHeading
        id="proces-title"
        eyebrow="Jak działamy"
        title="Od pomysłu do działającego rozwiązania."
        description="Prosty, przejrzysty proces. Na każdym etapie wiesz, co powstaje i dlaczego."
      />

      <ProcessTimeline />
    </Section>
  );
}
