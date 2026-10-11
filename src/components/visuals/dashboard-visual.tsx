"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bell, ChartLine, Package, Plug, Users, Workflow, ArrowRight, CheckCircle2 } from "lucide-react";

const modules = [
  { icon: Users, label: "Klienci", meta: "248" },
  { icon: Package, label: "Zamówienia", meta: "36" },
  { icon: Workflow, label: "Automatyzacje", meta: "12" },
  { icon: ChartLine, label: "Analityka", meta: "" },
  { icon: Plug, label: "Integracje", meta: "8" },
  { icon: Bell, label: "Powiadomienia", meta: "3" },
];

const orders = [
  { id: "#1048", client: "Klient A", status: "Opłacone", amount: "1 240 zł" },
  { id: "#1047", client: "Klient B", status: "W realizacji", amount: "860 zł" },
  { id: "#1046", client: "Klient C", status: "Wysłane", amount: "2 115 zł" },
];

const notifications = [
  "Nowe zamówienie #1049",
  "Faktura wysłana automatycznie",
  "Nowy klient w CRM",
  "Raport tygodniowy gotowy",
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } } };
const item = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const } },
};
const row = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const } },
};

export function DashboardVisual() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % notifications.length), 3200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div aria-hidden="true" className="relative select-none">
      <div className="absolute -inset-8 -z-10 rounded-full bg-brand/15 blur-[80px]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[oklch(0.16_0.008_258/0.9)] shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)]"
      >
        <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-white/15" />
            <span className="size-2.5 rounded-full bg-white/15" />
            <span className="size-2.5 rounded-full bg-white/15" />
          </div>
          <span className="font-mono text-[11px] text-muted-foreground">Panel administracyjny</span>
        </div>

        <div className="grid grid-cols-[minmax(0,150px)_1fr] sm:grid-cols-[180px_1fr]">
          <motion.ul variants={container} className="flex flex-col gap-1 border-r border-white/[0.06] p-2.5 sm:p-3">
            {modules.map(({ icon: Icon, label, meta }, i) => (
              <motion.li
                key={label}
                variants={item}
                className={
                  i === 1
                    ? "flex items-center gap-2 rounded-lg bg-white/[0.06] px-2 py-2 text-xs text-foreground"
                    : "flex items-center gap-2 rounded-lg px-2 py-2 text-xs text-muted-foreground"
                }
              >
                <Icon className={i === 1 ? "size-3.5 shrink-0 text-brand-soft" : "size-3.5 shrink-0"} />
                <span className="truncate">{label}</span>
                {meta && <span className="ml-auto font-mono text-[11px] text-white/60">{meta}</span>}
              </motion.li>
            ))}
          </motion.ul>

          <div className="min-w-0 p-3 sm:p-4">
            <motion.div variants={container} className="grid grid-cols-2 gap-2">
              {[
                { label: "Przychód / mies.", value: "48,2 tys." },
                { label: "Nowi klienci", value: "+24" },
              ].map((stat) => (
                <motion.div key={stat.label} variants={row} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-2.5">
                  <p className="truncate text-[11px] text-muted-foreground">{stat.label}</p>
                  <p className="mt-1 text-sm font-semibold tracking-tight text-foreground">{stat.value}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={container} className="mt-3 rounded-xl border border-white/[0.06] bg-white/[0.02]">
              <div className="flex items-center justify-between border-b border-white/[0.06] px-3 py-2">
                <p className="text-[11px] font-medium text-foreground">Ostatnie zamówienia</p>
                <p className="font-mono text-[11px] text-muted-foreground">dziś</p>
              </div>
              {orders.map((order) => (
                <motion.div
                  key={order.id}
                  variants={row}
                  className="flex items-center gap-2 border-b border-white/[0.04] px-3 py-2 text-[11px] last:border-0"
                >
                  <span className="font-mono text-white/60">{order.id}</span>
                  <span className="truncate text-foreground/90">{order.client}</span>
                  <span className="ml-auto hidden rounded-full bg-brand/10 px-2 py-0.5 text-[11px] text-brand-soft sm:inline">
                    {order.status}
                  </span>
                  <span className="shrink-0 font-mono text-foreground/90">{order.amount}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={row}
              className="mt-3 flex flex-wrap items-center gap-1.5 rounded-xl border border-white/[0.06] bg-white/[0.02] p-2.5 text-[11px] text-muted-foreground"
            >
              <Workflow className="size-3.5 text-brand-soft" />
              <span className="rounded-md bg-white/[0.05] px-1.5 py-0.5">Zamówienie</span>
              <ArrowRight className="size-3" />
              <span className="rounded-md bg-white/[0.05] px-1.5 py-0.5">Faktura</span>
              <ArrowRight className="size-3" />
              <span className="rounded-md bg-white/[0.05] px-1.5 py-0.5">E-mail</span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="absolute -right-2 -bottom-6 w-[230px] sm:-right-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-[oklch(0.2_0.01_258/0.92)] backdrop-blur-xl px-3.5 py-2.5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]"
          >
            <CheckCircle2 className="size-4 shrink-0 text-success" />
            <p className="truncate text-xs text-foreground">{notifications[index]}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
