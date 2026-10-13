import Link from "next/link";

import { cn } from "@/lib/utils";

const nodes = [
  [9.5, 22.5],
  [9.5, 9.5],
  [22.5, 22.5],
  [22.5, 9.5],
] as const;

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={cn("size-8", className)}>
      <defs>
        <linearGradient id="nexiweb-mark" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="oklch(0.74 0.16 256)" />
          <stop offset="1" stopColor="oklch(0.55 0.23 240)" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill="url(#nexiweb-mark)" />
      <path
        d="M9.5 22.5V9.5l13 13V9.5"
        fill="none"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {nodes.map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.6" fill="white" />
      ))}
      <circle cx="22.5" cy="9.5" r="1.1" fill="url(#nexiweb-mark)" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="NEXIWEB - strona główna"
      className={cn(
        "inline-flex items-center gap-2.5 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
    >
      <LogoMark />
      <span className="font-heading text-[1.05rem] font-extrabold tracking-[0.08em] text-foreground">
        NEXI<span className="text-brand-soft">WEB</span>
      </span>
    </Link>
  );
}
