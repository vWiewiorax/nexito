import { Check } from "lucide-react";

import { Container } from "@/components/shared/section";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { trustPoints } from "@/content/home";

export function Trust() {
  return (
    <section aria-labelledby="trust-title" className="relative border-y border-white/[0.06] bg-white/[0.015]">
      <Container className="flex flex-col items-center gap-8 py-14 text-center">
        <h2 id="trust-title" className="text-lg font-medium tracking-tight text-foreground sm:text-xl">
          Technologia, która pracuje na Twój biznes.
        </h2>
        <Stagger as="ul" className="grid grid-cols-1 gap-x-10 gap-y-4 text-left sm:grid-cols-2 lg:flex lg:gap-12">
          {trustPoints.map((point) => (
            <StaggerItem as="li" key={point} className="flex items-center gap-3 text-sm whitespace-nowrap text-muted-foreground">
              <span className="flex size-5 items-center justify-center rounded-full border border-brand/40 bg-brand/10 text-brand-soft">
                <Check className="size-3" aria-hidden="true" />
              </span>
              {point}
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
