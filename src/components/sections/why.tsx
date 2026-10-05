import { Section, SectionHeading } from "@/components/shared/section";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { benefits } from "@/content/home";
import { cn } from "@/lib/utils";

export function Why() {
  return (
    <Section id="o-nas" labelledBy="o-nas-title">
      <SectionHeading
        id="o-nas-title"
        eyebrow="Dlaczego NEXITO"
        title="Technologia bez zbędnego komplikowania."
        description="Jesteśmy zespołem, który łączy inżynierię oprogramowania z rozumieniem biznesu. Budujemy rozwiązania, które mają sens — dziś i za kilka lat."
      />

      <Stagger className="mt-14 grid gap-4 md:grid-cols-6">
        {benefits.map(({ icon: Icon, title, description }, index) => (
          <StaggerItem
            key={title}
            className={cn(
              "group card-surface relative overflow-hidden rounded-2xl p-7 sm:p-8",
              index < 2 ? "md:col-span-3" : "md:col-span-2",
            )}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
            <Icon className="size-6 text-brand-soft" aria-hidden="true" />
            <h3 className={cn("mt-8 font-semibold tracking-tight text-foreground", index < 2 ? "text-2xl" : "text-xl")}>
              {title}
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">{description}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
