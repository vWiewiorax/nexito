import { Container } from "@/components/shared/section";

type LegalSection = { title: string; content: string[] };

export function LegalPage({ title, intro, sections }: { title: string; intro: string; sections: LegalSection[] }) {
  return (
    <section aria-labelledby="legal-title" className="pt-32 pb-24 sm:pt-40">
      <Container className="max-w-3xl">
        <h1 id="legal-title" className="text-gradient text-4xl font-extrabold tracking-[-0.035em] sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">{intro}</p>
        <div className="mt-14 flex flex-col gap-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">{section.title}</h2>
              {section.content.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
