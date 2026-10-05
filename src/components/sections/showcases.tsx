import { Section, SectionHeading } from "@/components/shared/section";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { ShowcasePreview } from "@/components/visuals/showcase-preview";
import { showcases } from "@/content/home";

export function Showcases() {
  return (
    <Section id="realizacje" labelledBy="realizacje-title">
      <SectionHeading
        id="realizacje-title"
        eyebrow="Przykładowe koncepty"
        title="Co możemy stworzyć dla Twojej firmy?"
        description="Poniżej przykładowe koncepty rozwiązań, które projektujemy i budujemy. To ilustracje możliwości — nie realizacje dla konkretnych klientów."
      />

      <Stagger as="ul" className="mt-14 grid gap-4 md:grid-cols-3">
        {showcases.map((showcase) => (
          <StaggerItem as="li" key={showcase.title}>
            <article className="group card-surface flex h-full flex-col rounded-2xl p-3 transition-all duration-500 hover:-translate-y-1 hover:border-white/15">
              <ShowcasePreview variant={showcase.variant} />
              <div className="flex flex-1 flex-col p-4 pt-5">
                <p className="font-mono text-[11px] tracking-widest text-brand-soft uppercase">
                  {showcase.kind === "concept" ? showcase.label : "Realizacja"}
                </p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">{showcase.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{showcase.description}</p>
                <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Główne elementy">
                  {showcase.tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-muted-foreground">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
