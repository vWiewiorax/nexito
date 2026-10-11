import { Container } from "@/components/shared/section";
import { CtaLink } from "@/components/shared/cta-link";
import { Reveal } from "@/components/motion/reveal";
import { contactHref } from "@/content/navigation";

export function Cta() {
  return (
    <section aria-labelledby="cta-title" className="relative py-16 sm:py-24">
      <Container>
        <Reveal className="dark relative isolate overflow-hidden rounded-[28px] border border-white/10 text-foreground px-6 py-20 text-center sm:px-16 sm:py-28">
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(160deg,oklch(0.26_0.08_258)_0%,oklch(0.17_0.04_258)_100%)]" />
          <div aria-hidden="true" className="bg-grid mask-radial absolute inset-0 -z-10 opacity-60" />
          <div
            aria-hidden="true"
            className="absolute -bottom-40 left-1/2 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-brand/35 blur-[110px]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-soft/60 to-transparent"
          />
          <h2
            id="cta-title"
            className="text-gradient mx-auto max-w-3xl text-4xl font-extrabold tracking-[-0.035em] text-balance sm:text-5xl md:text-6xl"
          >
            Masz pomysł? Zbudujmy go razem.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            Opowiedz nam o swoim biznesie, problemie lub pomyśle. Znajdziemy technologię, która pomoże Ci zrobić kolejny
            krok.
          </p>
          <div className="mt-10 flex justify-center">
            <CtaLink href={contactHref} size="lg">
              Porozmawiajmy
            </CtaLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
