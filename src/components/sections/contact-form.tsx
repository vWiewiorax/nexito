"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ctaStyles } from "@/components/shared/cta-link";
import { contactLimits, needOptions } from "@/content/contact";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "h-11 rounded-xl border-white/10 bg-white/[0.03] px-3.5 text-[15px] placeholder:text-white/30 focus-visible:border-brand/60 focus-visible:ring-brand/25 md:text-sm";

export function ContactForm() {
  const [needs, setNeeds] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    const preselected = new URLSearchParams(window.location.search).get("usluga");
    if (preselected && needOptions.some((option) => option.value === preselected)) {
      setNeeds([preselected]);
    }
  }, []);

  function toggleNeed(value: string) {
    setNeeds((current) => (current.includes(value) ? current.filter((need) => need !== value) : [...current, value]));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...Object.fromEntries(data.entries()), needs }),
      });
      const result = (await response.json().catch(() => ({}))) as { error?: string };
      if (!response.ok) throw new Error(result.error ?? "Nie udało się wysłać wiadomości.");
      form.reset();
      setNeeds([]);
      setStatus("success");
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Nie udało się wysłać wiadomości.");
      setStatus("error");
    }
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            role="status"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex min-h-[420px] flex-col items-center justify-center gap-4 text-center"
          >
            <span className="flex size-14 items-center justify-center rounded-full border border-success/30 bg-success/10 text-success">
              <CheckCircle2 className="size-7" aria-hidden="true" />
            </span>
            <h3 className="text-xl font-semibold tracking-tight text-foreground">Dziękujemy za wiadomość!</h3>
            <p className="max-w-sm text-sm text-muted-foreground">
              Zapoznamy się z Twoim zapytaniem i odezwiemy się możliwie szybko.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-2 rounded-sm text-sm text-brand-soft underline-offset-4 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring"
            >
              Wyślij kolejną wiadomość
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
            noValidate={false}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Imię</Label>
                <Input id="name" name="name" required autoComplete="given-name" maxLength={contactLimits.name} placeholder="Jan" className={fieldClass} />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="company">Firma</Label>
                <Input id="company" name="company" autoComplete="organization" maxLength={contactLimits.company} placeholder="Nazwa firmy" className={fieldClass} />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" name="email" type="email" required autoComplete="email" maxLength={contactLimits.email} placeholder="jan@firma.pl" className={fieldClass} />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="phone">
                  Telefon <span className="font-normal text-muted-foreground">— opcjonalnie</span>
                </Label>
                <Input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={contactLimits.phone} placeholder="+48" className={fieldClass} />
              </div>
            </div>

            <fieldset className="flex flex-col gap-3">
              <legend className="mb-3 text-sm font-medium">Czego potrzebujesz?</legend>
              <div className="flex flex-wrap gap-2">
                {needOptions.map((option) => {
                  const checked = needs.includes(option.value);
                  return (
                    <label
                      key={option.value}
                      className={cn(
                        "cursor-pointer rounded-full border px-3.5 py-2 text-[13px] transition-all duration-200 select-none has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring",
                        checked
                          ? "border-brand/60 bg-brand/15 text-foreground"
                          : "border-white/10 bg-white/[0.02] text-muted-foreground hover:border-white/20 hover:text-foreground",
                      )}
                    >
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={checked}
                        onChange={() => toggleNeed(option.value)}
                      />
                      {option.label}
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <div className="flex flex-col gap-2">
              <Label htmlFor="message">Wiadomość</Label>
              <Textarea
                id="message"
                name="message"
                required
                minLength={10}
                maxLength={contactLimits.message}
                rows={5}
                placeholder="Opisz krótko swój projekt, problem lub pomysł…"
                className={cn(fieldClass, "h-auto min-h-32 py-3")}
              />
            </div>

            <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
              <label htmlFor="website">Strona WWW</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            {status === "error" && (
              <p role="alert" className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                {error}
              </p>
            )}

            <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-relaxed text-muted-foreground">
                Wysyłając formularz, akceptujesz{" "}
                <a href="/polityka-prywatnosci" className="underline underline-offset-4 hover:text-foreground">
                  politykę prywatności
                </a>
                .
              </p>
              <button
                type="submit"
                disabled={status === "submitting"}
                className={cn(ctaStyles.base, ctaStyles.primary, ctaStyles.lg, "shrink-0")}
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                    Wysyłanie…
                  </>
                ) : (
                  <>Wyślij zapytanie →</>
                )}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
