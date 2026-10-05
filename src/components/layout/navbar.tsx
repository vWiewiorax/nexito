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
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-white/[0.07] bg-background/70 backdrop-blur-xl backdrop-saturate-150"
          : "border-transparent bg-transparent",
      )}
    >
      <nav aria-label="Główna nawigacja" className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <ul className="hidden items-center gap-1 md:flex">
          {mainNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <CtaLink href={contactHref} className="h-9 px-4 text-[13px] sm:text-sm">
            Porozmawiajmy
          </CtaLink>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="Otwórz menu"
              className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-foreground transition-colors outline-none hover:bg-white/[0.08] focus-visible:ring-2 focus-visible:ring-ring md:hidden"
            >
              <Menu className="size-5" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full max-w-none border-white/10 bg-background/95 p-0 backdrop-blur-xl data-[side=right]:w-full data-[side=right]:sm:max-w-sm"
            >
              <div className="flex h-16 items-center px-5">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <SheetDescription className="sr-only">Nawigacja po stronie NEXITO</SheetDescription>
                <Logo />
              </div>
              <ul className="flex flex-col px-3 pt-4">
                {mainNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-xl px-3 py-4 text-2xl font-medium tracking-tight text-foreground/90 transition-colors outline-none hover:bg-white/[0.04] focus-visible:ring-2 focus-visible:ring-ring"
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
