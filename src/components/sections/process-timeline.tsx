"use client";

import { motion, type Variants } from "framer-motion";

import { processSteps } from "@/content/home";

const ease = [0.21, 0.47, 0.32, 0.98] as const;
const stepGap = 0.45;
const lineDuration = stepGap * (processSteps.length - 1) + 0.4;

const lineVariants: Variants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { duration: lineDuration, ease: "linear", delay: 0.2 } },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease, delay: 0.2 + index * stepGap },
  }),
};

const dotVariants: Variants = {
  hidden: { scale: 0 },
  visible: (index: number) => ({
    scale: 1,
    transition: { type: "spring", stiffness: 420, damping: 18, delay: 0.2 + index * stepGap },
  }),
};

const pulseVariants: Variants = {
  hidden: { scale: 1, opacity: 0 },
  visible: (index: number) => ({
    scale: [1, 1, 2.6],
    opacity: [0, 0.5, 0],
    transition: { duration: 1.1, times: [0, 0.05, 1], ease: "easeOut", delay: 0.3 + index * stepGap },
  }),
};

export function ProcessTimeline() {
  return (
    <motion.ol
      className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
    >
      <span aria-hidden="true" className="absolute top-[11px] left-[11px] h-[calc(100%-22px)] w-px bg-border md:left-0 md:h-px md:w-full" />
      <motion.span
        aria-hidden="true"
        variants={lineVariants}
        className="absolute top-[11px] left-[11px] h-[calc(100%-22px)] w-[2px] -translate-x-[0.5px] origin-top bg-brand md:hidden"
      />
      <motion.span
        aria-hidden="true"
        variants={lineVariants}
        className="absolute top-[11px] left-0 hidden h-[2px] w-full -translate-y-[0.5px] origin-left bg-gradient-to-r from-brand via-brand to-brand/20 md:block"
      />

      {processSteps.map((step, index) => (
        <li key={step.number} className="relative pl-12 md:pt-12 md:pl-0">
          <span aria-hidden="true" className="absolute top-0 left-0 flex size-[23px] items-center justify-center">
            <motion.span
              custom={index}
              variants={pulseVariants}
              className="absolute inset-0 rounded-full bg-brand"
            />
            <motion.span
              custom={index}
              variants={dotVariants}
              className="relative flex size-[23px] items-center justify-center rounded-full border-2 border-brand bg-background"
            >
              <span className="size-[7px] rounded-full bg-brand" />
            </motion.span>
          </span>
          <motion.div custom={index} variants={stepVariants}>
            <p className="font-mono text-xs font-semibold tracking-widest text-brand-soft">{step.number}</p>
            <h3 className="mt-3 text-lg font-bold tracking-tight text-foreground">{step.title}</h3>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">{step.description}</p>
          </motion.div>
        </li>
      ))}
    </motion.ol>
  );
}
