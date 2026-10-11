import Link from "next/link";

import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={cn("size-7", className)}>
      <defs>
        <linearGradient id="nexito-mark" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="oklch(0.74 0.16 256)" />
          <stop offset="1" stopColor="oklch(0.55 0.23 240)" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill="url(#nexito-mark)" />
      <path
        d="M10 22V10l12 12V10"
        fill="none"
        stroke="white"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="NEXITO - strona główna"
      className={cn(
        "inline-flex items-center gap-2.5 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
    >
      <LogoMark />
      <span className="font-heading text-base font-extrabold tracking-[0.14em] text-foreground">NEXITO</span>
    </Link>
  );
}
