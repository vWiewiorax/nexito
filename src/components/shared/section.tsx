import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>{children}</div>;
}

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  labelledBy?: string;
};

export function Section({ id, className, children, labelledBy }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn("relative py-24 sm:py-32", className)}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 font-mono text-[11px] font-medium tracking-[0.2em] text-brand-soft uppercase",
        className,
      )}
    >
      <span aria-hidden="true" className="h-px w-5 bg-brand-soft/60" />
      {children}
    </p>
  );
}

type SectionHeadingProps = {
  id: string;
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ id, eyebrow, title, description, align = "left", className }: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex max-w-2xl flex-col gap-5",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        id={id}
        className="text-gradient text-3xl font-semibold tracking-[-0.03em] text-balance sm:text-4xl md:text-[2.75rem] md:leading-[1.08]"
      >
        {title}
      </h2>
      {description && (
        <p className="max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">{description}</p>
      )}
    </Reveal>
  );
}
