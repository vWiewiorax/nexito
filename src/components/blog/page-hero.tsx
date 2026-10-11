import { Container } from "@/components/shared/section";

export function PageHero({ labelledBy, children }: { labelledBy: string; children: React.ReactNode }) {
  return (
    <section
      aria-labelledby={labelledBy}
      className="dark relative isolate overflow-hidden bg-background pt-32 pb-16 text-foreground sm:pt-40 sm:pb-20"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(160deg,oklch(0.26_0.08_258)_0%,oklch(0.18_0.04_258)_55%,oklch(0.15_0.03_258)_100%)]" />
        <div className="bg-grid mask-radial absolute inset-0 opacity-60" />
        <div className="absolute -top-40 left-1/2 h-[420px] w-[800px] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]" />
      </div>
      <Container>{children}</Container>
    </section>
  );
}
