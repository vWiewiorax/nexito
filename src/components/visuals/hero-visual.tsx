"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Activity, BarChart3, Bot, LayoutDashboard, Server, Settings, TrendingUp, Users } from "lucide-react";

const linePath =
  "M0 92 C 30 88, 45 70, 70 72 S 110 84, 135 64 S 175 40, 200 46 S 240 58, 265 34 S 300 18, 320 12";

const bars = [38, 54, 46, 68, 58, 80, 72, 92];

function FloatingCard({
  children,
  className,
  delay,
  y,
}: {
  children: React.ReactNode;
  className: string;
  delay: number;
  y: ReturnType<typeof useTransform<number, number>>;
}) {
  return (
    <motion.div style={{ y }} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: delay * 2 }}
          className="rounded-2xl border border-white/10 bg-[oklch(0.2_0.01_272/0.92)] px-4 py-3 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl"
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const ySlow = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const yFast = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const yMid = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <div ref={ref} aria-hidden="true" className="relative mx-auto w-full max-w-[560px] select-none">
      <div className="absolute -inset-10 -z-10 rounded-full bg-brand/25 blur-[90px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
        style={{ y: ySlow }}
        className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[oklch(0.16_0.008_270/0.85)] shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl"
      >
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="ml-3 rounded-md bg-white/[0.05] px-2.5 py-1 font-mono text-[10px] text-muted-foreground">
            app.twojafirma.pl/panel
          </span>
        </div>

        <div className="flex">
          <div className="hidden flex-col gap-1.5 border-r border-white/[0.06] p-3 sm:flex">
            {[LayoutDashboard, Users, BarChart3, Bot, Settings].map((Icon, index) => (
              <span
                key={index}
                className={
                  index === 0
                    ? "flex size-8 items-center justify-center rounded-lg bg-brand/20 text-brand-soft"
                    : "flex size-8 items-center justify-center rounded-lg text-white/35"
                }
              >
                <Icon className="size-4" />
              </span>
            ))}
          </div>

          <div className="flex-1 p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] text-muted-foreground">Przegląd</p>
                <p className="text-sm font-medium text-foreground">Wyniki firmy</p>
              </div>
              <span className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] text-muted-foreground">
                30 dni
              </span>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2.5">
              {[
                { label: "Zapytania", value: "1 284" },
                { label: "Konwersja", value: "4,8%" },
                { label: "Zadania auto", value: "312" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-2.5">
                  <p className="text-[10px] text-muted-foreground">{stat.label}</p>
                  <p className="mt-1 text-sm font-semibold tracking-tight text-foreground sm:text-base">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
              <svg viewBox="0 0 320 100" className="h-28 w-full sm:h-32" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="hero-line-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="var(--brand)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[25, 50, 75].map((y) => (
                  <line key={y} x1="0" x2="320" y1={y} y2={y} stroke="white" strokeOpacity="0.05" />
                ))}
                <motion.path
                  d={`${linePath} L320 100 L0 100 Z`}
                  fill="url(#hero-line-fill)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2, delay: 1 }}
                />
                <motion.path
                  d={linePath}
                  fill="none"
                  stroke="var(--brand-soft)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.8, delay: 0.5, ease: "easeInOut" }}
                />
              </svg>
            </div>

            <div className="mt-3 grid grid-cols-[1fr_auto] gap-2.5">
              <div className="flex h-20 items-end gap-1.5 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                {bars.map((height, index) => (
                  <motion.span
                    key={index}
                    className="flex-1 rounded-sm bg-gradient-to-t from-brand/30 to-brand-soft/80"
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 0.8, delay: 0.8 + index * 0.06, ease: "easeOut" }}
                  />
                ))}
              </div>
              <div className="flex w-28 flex-col justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 sm:w-32">
                <Server className="size-4 text-brand-soft" />
                <div>
                  <p className="text-[10px] text-muted-foreground">Infrastruktura</p>
                  <p className="text-xs font-medium text-foreground">Stabilna</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <FloatingCard y={yFast} delay={0.7} className="absolute -top-5 -left-2 sm:-left-10">
        <div className="flex items-center gap-3">
          <span className="flex size-8 items-center justify-center rounded-lg bg-success/15 text-success">
            <TrendingUp className="size-4" />
          </span>
          <div>
            <p className="text-sm font-semibold text-foreground">+32%</p>
            <p className="text-[11px] text-muted-foreground">więcej zapytań</p>
          </div>
        </div>
      </FloatingCard>

      <FloatingCard y={yMid} delay={0.9} className="absolute top-1/3 -right-2 sm:-right-8">
        <div className="flex items-center gap-2.5">
          <Activity className="size-4 text-brand-soft" />
          <p className="font-mono text-xs text-foreground">99.9% uptime</p>
        </div>
      </FloatingCard>

      <FloatingCard y={yFast} delay={1.1} className="absolute -bottom-6 left-6 sm:left-10">
        <div className="flex items-center gap-2.5">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex size-2.5 rounded-full bg-success" />
          </span>
          <p className="text-xs font-medium text-foreground">Automatyzacja aktywna</p>
        </div>
      </FloatingCard>
    </div>
  );
}
