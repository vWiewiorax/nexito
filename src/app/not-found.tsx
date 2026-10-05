import { Container } from "@/components/shared/section";
import { CtaLink } from "@/components/shared/cta-link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center pt-32 pb-24">
      <Container className="flex flex-col items-center text-center">
        <p className="font-mono text-sm tracking-widest text-brand-soft">404</p>
        <h1 className="text-gradient mt-4 text-4xl font-extrabold tracking-[-0.035em] sm:text-5xl">Nie znaleziono strony.</h1>
        <p className="mt-4 max-w-md text-muted-foreground">Strona, której szukasz, nie istnieje lub została przeniesiona.</p>
        <CtaLink href="/" className="mt-8">
          Wróć na stronę główną
        </CtaLink>
      </Container>
    </section>
  );
}
