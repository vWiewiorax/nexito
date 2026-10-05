"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { CtaLink } from "@/components/shared/cta-link";
import { Logo } from "@/components/shared/logo";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { contactHref, mainNav } from "@/content/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full border-b border-border bg-background transition-shadow duration-300",
        scrolled && "shadow-[0_10px_30px_-15px_oklch(0.2_0.03_268/0.25)]",
      )}
    >
      <nav aria-label="Główna nawigacja" className="flex h-[72px] w-full items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <Logo />

        <ul className="hidden items-center gap-1 md:flex">
          {mainNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <CtaLink href={contactHref} className="h-10 px-4 text-[13px] sm:px-5 sm:text-sm">
            Porozmawiajmy
          </CtaLink>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="Otwórz menu"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring md:hidden"
            >
              <Menu className="size-5" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full max-w-none border-border bg-background p-0 data-[side=right]:w-full data-[side=right]:sm:max-w-sm"
            >
              <div className="flex h-[72px] items-center border-b border-border px-5">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <SheetDescription className="sr-only">Nawigacja po stronie NEXITO</SheetDescription>
                <Logo />
              </div>
              <ul className="flex flex-col px-3 pt-2">
                {mainNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-xl px-3 py-4 font-heading text-2xl font-bold tracking-tight text-foreground transition-colors outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-auto p-5">
                <CtaLink href={contactHref} size="lg" className="w-full" onClick={() => setOpen(false)}>
                  Porozmawiajmy
                </CtaLink>
                <p className="mt-4 text-center text-xs text-muted-foreground">Odpowiadamy na wiadomości możliwie szybko.</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
