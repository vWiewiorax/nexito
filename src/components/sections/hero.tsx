import { Container } from "@/components/shared/section";
import { CtaLink } from "@/components/shared/cta-link";
import { Reveal } from "@/components/motion/reveal";
import { HeroVisual } from "@/components/visuals/hero-visual";
import { contactHref } from "@/content/navigation";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="dark relative isolate overflow-hidden bg-background pt-32 pb-24 text-foreground sm:pt-40 lg:pb-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(160deg,oklch(0.26_0.08_258)_0%,oklch(0.18_0.04_258)_55%,oklch(0.15_0.03_258)_100%)]" />
        <div className="bg-grid mask-radial absolute inset-0 opacity-70" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]" />
      </div>

      <Container className="grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div className="flex flex-col items-start">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] py-1.5 pr-3.5 pl-2.5 text-xs font-semibold tracking-[0.12em] text-foreground/90 uppercase backdrop-blur">
              <span className="size-1.5 rounded-full bg-brand shadow-[0_0_12px_var(--brand)]" />
              Cyfrowe rozwiązania dla biznesu
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1
              id="hero-title"
              className="text-gradient mt-7 text-[2.6rem] leading-[1.05] font-extrabold tracking-[-0.035em] text-balance sm:text-6xl lg:text-[4.25rem]"
            >
              Tworzymy technologię, która <span className="text-gradient-brand">rozwija Twój biznes.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
              Projektujemy strony, aplikacje SaaS i systemy, które automatyzują pracę, zwiększają sprzedaż i pomagają
              firmom rosnąć.
            </p>
          </Reveal>

          <Reveal delay={0.24} className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <CtaLink href={contactHref} size="lg">
              Porozmawiajmy
            </CtaLink>
            <CtaLink href="/#rozwiazania" variant="secondary" size="lg">
              Zobacz, co tworzymy
            </CtaLink>
          </Reveal>
        </div>

        <div className="px-4 sm:px-8 lg:px-0">
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}
