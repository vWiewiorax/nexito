"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bell,
  Boxes,
  CalendarCheck,
  CalendarDays,
  ChartLine,
  CheckCircle2,
  ChevronsUpDown,
  ClipboardList,
  Contact,
  CreditCard,
  Handshake,
  ListTodo,
  Package,
  Search,
  Star,
  Target,
  UserCog,
  Users,
  Warehouse,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type Scenario = {
  tab: string;
  modules: { icon: LucideIcon; label: string; meta?: string }[];
  active: number;
  stats: { label: string; value: string }[];
  table: { title: string; meta: string; rows: { id: string; name: string; status: string; value: string }[] };
  flow: string[];
  notification: string;
};

const scenarios: Scenario[] = [
  {
    tab: "Sklep",
    modules: [
      { icon: Users, label: "Klienci", meta: "248" },
      { icon: Package, label: "Zamówienia", meta: "36" },
      { icon: Boxes, label: "Produkty", meta: "120" },
      { icon: Workflow, label: "Automatyzacje", meta: "12" },
      { icon: ChartLine, label: "Analityka" },
      { icon: Bell, label: "Powiadomienia", meta: "3" },
    ],
    active: 1,
    stats: [
      { label: "Przychód / mies.", value: "48,2 tys. zł" },
      { label: "Nowi klienci", value: "+24" },
    ],
    table: {
      title: "Ostatnie zamówienia",
      meta: "dziś",
      rows: [
        { id: "#1048", name: "Klient A", status: "Opłacone", value: "1 240 zł" },
        { id: "#1047", name: "Klient B", status: "W realizacji", value: "860 zł" },
        { id: "#1046", name: "Klient C", status: "Wysłane", value: "2 115 zł" },
      ],
    },
    flow: ["Zamówienie", "Faktura", "E-mail"],
    notification: "Nowe zamówienie #1049",
  },
  {
    tab: "CRM",
    modules: [
      { icon: Target, label: "Leady", meta: "64" },
      { icon: Contact, label: "Kontakty", meta: "512" },
      { icon: Handshake, label: "Szanse", meta: "18" },
      { icon: ListTodo, label: "Zadania", meta: "9" },
      { icon: CalendarDays, label: "Kalendarz" },
      { icon: BarChart3, label: "Raporty" },
    ],
    active: 0,
    stats: [
      { label: "Wartość lejka", value: "312 tys. zł" },
      { label: "Konwersja", value: "18%" },
    ],
    table: {
      title: "Nowe leady",
      meta: "7 dni",
      rows: [
        { id: "L-214", name: "Firma Alfa", status: "Nowy", value: "Formularz" },
        { id: "L-213", name: "Firma Beta", status: "Oferta", value: "Telefon" },
        { id: "L-212", name: "Firma Gamma", status: "Spotkanie", value: "Polecenie" },
      ],
    },
    flow: ["Formularz", "CRM", "Handlowiec"],
    notification: "Nowy lead z formularza",
  },
  {
    tab: "Serwis",
    modules: [
      { icon: ClipboardList, label: "Zgłoszenia", meta: "14" },
      { icon: Users, label: "Klienci", meta: "390" },
      { icon: UserCog, label: "Technicy", meta: "6" },
      { icon: CalendarDays, label: "Harmonogram" },
      { icon: Warehouse, label: "Magazyn części" },
      { icon: Wrench, label: "Naprawy", meta: "5" },
    ],
    active: 0,
    stats: [
      { label: "Otwarte zgłoszenia", value: "14" },
      { label: "Śr. czas naprawy", value: "2,4 dnia" },
    ],
    table: {
      title: "Zgłoszenia serwisowe",
      meta: "dziś",
      rows: [
        { id: "S-311", name: "Drukarka laserowa", status: "Diagnoza", value: "Technik 1" },
        { id: "S-310", name: "Kserokopiarka", status: "Naprawa", value: "Technik 2" },
        { id: "S-309", name: "Urządzenie wielofunkcyjne", status: "Gotowe", value: "Odbiór" },
      ],
    },
    flow: ["Zgłoszenie", "Technik", "SMS do klienta"],
    notification: "Zgłoszenie S-312 przypisane",
  },
  {
    tab: "Rezerwacje",
    modules: [
      { icon: CalendarCheck, label: "Rezerwacje", meta: "27" },
      { icon: CalendarDays, label: "Kalendarz" },
      { icon: Users, label: "Klienci", meta: "1 204" },
      { icon: CreditCard, label: "Płatności", meta: "4" },
      { icon: Star, label: "Opinie", meta: "2" },
      { icon: Bell, label: "Przypomnienia" },
    ],
    active: 0,
    stats: [
      { label: "Rezerwacje / tydz.", value: "86" },
      { label: "Obłożenie", value: "92%" },
    ],
    table: {
      title: "Dzisiejsze wizyty",
      meta: "dziś",
      rows: [
        { id: "09:00", name: "Klient A", status: "Potwierdzona", value: "60 min" },
        { id: "11:30", name: "Klient B", status: "Opłacona", value: "45 min" },
        { id: "14:30", name: "Klient C", status: "Nowa", value: "90 min" },
      ],
    },
    flow: ["Rezerwacja", "Przypomnienie SMS", "Opinia"],
    notification: "Nowa rezerwacja na 14:30",
  },
];

const interval = 5000;
const ease = [0.21, 0.47, 0.32, 0.98] as const;

const content = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};
const row = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
};
const side = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease } },
};

export function DashboardVisual() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const scenario = scenarios[index];

  useEffect(() => {
    if (paused) return;
    const timer = window.setTimeout(() => setIndex((current) => (current + 1) % scenarios.length), interval);
    return () => window.clearTimeout(timer);
  }, [index, paused]);

  return (
    <div
      aria-hidden="true"
      className="relative select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute -inset-8 -z-10 rounded-full bg-brand/15 blur-[80px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease }}
        className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[oklch(0.16_0.008_258/0.9)] shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)]"
      >
        <div className="relative flex items-center gap-2 border-b border-white/[0.06] px-3 py-2.5 sm:gap-3 sm:px-4">
          <div className="flex shrink-0 items-center gap-2">
            <span className="flex size-6 items-center justify-center rounded-md bg-brand text-[10px] font-bold text-brand-foreground">
              TF
            </span>
            <span className="hidden text-xs font-semibold text-foreground sm:inline">Twoja Firma</span>
            <ChevronsUpDown className="hidden size-3 text-muted-foreground sm:block" />
          </div>

          <div className="mx-auto flex min-w-0 items-center gap-0.5 rounded-lg bg-white/[0.04] p-0.5">
            {scenarios.map((item, i) => (
              <button
                key={item.tab}
                type="button"
                tabIndex={-1}
                onClick={() => setIndex(i)}
                className={
                  "relative rounded-md px-2 py-1 text-[11px] font-medium transition-colors sm:px-2.5 " +
                  (i === index ? "text-foreground" : "text-muted-foreground hover:text-foreground")
                }
              >
                {i === index && (
                  <motion.span
                    layoutId="dashboard-tab"
                    className="absolute inset-0 rounded-md bg-white/[0.09] ring-1 ring-white/10"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{item.tab}</span>
              </button>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <span className="hidden items-center gap-1.5 rounded-md border border-white/[0.08] px-2 py-1 text-[11px] text-muted-foreground xl:flex">
              <Search className="size-3" />
              Szukaj
            </span>
            <span className="relative flex size-6 items-center justify-center rounded-full bg-white/10 text-[10px] font-semibold text-foreground">
              AK
              <span className="absolute -right-0.5 -bottom-0.5 size-2 rounded-full border border-[oklch(0.16_0.008_258)] bg-success" />
            </span>
          </div>

          <motion.span
            key={`progress-${index}-${paused}`}
            className="absolute bottom-0 left-0 h-px origin-left bg-brand/70"
            initial={{ width: "0%" }}
            animate={{ width: paused ? undefined : "100%" }}
            transition={{ duration: interval / 1000, ease: "linear" }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.ul
              key={`side-${index}`}
              variants={content}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="hidden flex-col gap-1 border-r border-white/[0.06] p-3 sm:flex"
            >
              {scenario.modules.map(({ icon: Icon, label, meta }, i) => (
                <motion.li
                  key={label}
                  variants={side}
                  className={
                    i === scenario.active
                      ? "flex items-center gap-2 rounded-lg bg-white/[0.06] px-2 py-2 text-xs text-foreground"
                      : "flex items-center gap-2 rounded-lg px-2 py-2 text-xs text-muted-foreground"
                  }
                >
                  <Icon className={i === scenario.active ? "size-3.5 shrink-0 text-brand-soft" : "size-3.5 shrink-0"} />
                  <span className="truncate">{label}</span>
                  {meta && <span className="ml-auto font-mono text-[11px] text-white/60">{meta}</span>}
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`main-${index}`}
              variants={content}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="min-w-0 p-3 sm:p-4"
            >
              <div className="grid grid-cols-2 gap-2">
                {scenario.stats.map((stat) => (
                  <motion.div key={stat.label} variants={row} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-2.5">
                    <p className="truncate text-[11px] text-muted-foreground">{stat.label}</p>
                    <p className="mt-1 truncate text-sm font-semibold tracking-tight text-foreground">{stat.value}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-3 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <motion.div variants={row} className="flex items-center justify-between border-b border-white/[0.06] px-3 py-2">
                  <p className="text-[11px] font-medium text-foreground">{scenario.table.title}</p>
                  <p className="font-mono text-[11px] text-muted-foreground">{scenario.table.meta}</p>
                </motion.div>
                {scenario.table.rows.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={row}
                    className="flex items-center gap-2 border-b border-white/[0.04] px-3 py-2 text-[11px] last:border-0"
                  >
                    <span className="shrink-0 font-mono text-white/60">{item.id}</span>
                    <span className="truncate text-foreground/90">{item.name}</span>
                    <span className="ml-auto shrink-0 rounded-full bg-brand/10 px-2 py-0.5 text-[11px] text-brand-soft">
                      {item.status}
                    </span>
                    <span className="shrink-0 font-mono text-foreground/90">{item.value}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={row}
                className="mt-3 flex flex-wrap items-center gap-1.5 rounded-xl border border-white/[0.06] bg-white/[0.02] p-2.5 text-[11px] text-muted-foreground"
              >
                <Workflow className="size-3.5 text-brand-soft" />
                {scenario.flow.map((step, i) => (
                  <span key={step} className="flex items-center gap-1.5">
                    {i > 0 && <ArrowRight className="size-3" />}
                    <span className="rounded-md bg-white/[0.05] px-1.5 py-0.5">{step}</span>
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      <div className="absolute -right-2 -bottom-6 w-[240px] sm:-right-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease, delay: 0.6 } }}
            exit={{ opacity: 0, y: -8, scale: 0.97, transition: { duration: 0.2 } }}
            className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-[oklch(0.2_0.01_258/0.92)] px-3.5 py-2.5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl"
          >
            <CheckCircle2 className="size-4 shrink-0 text-success" />
            <p className="truncate text-xs text-foreground">{scenario.notification}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
