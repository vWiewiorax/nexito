import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type CtaLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  arrow?: boolean;
  className?: string;
  onClick?: () => void;
};

export const ctaStyles = {
  base: "group/cta relative inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60",
  primary:
    "bg-brand text-brand-foreground shadow-[inset_0_1px_0_oklch(1_0_0/0.25),0_8px_30px_-8px_var(--brand)] hover:shadow-[inset_0_1px_0_oklch(1_0_0/0.3),0_10px_40px_-6px_var(--brand)] hover:brightness-110",
  secondary:
    "border border-white/10 bg-white/[0.04] text-foreground backdrop-blur hover:border-white/20 hover:bg-white/[0.08]",
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-6 text-[15px]",
};

export function CtaLink({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = variant === "primary",
  className,
  onClick,
}: CtaLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(ctaStyles.base, ctaStyles[variant], ctaStyles[size], className)}
    >
      {children}
      {arrow && (
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-300 group-hover/cta:translate-x-0.5"
        />
      )}
    </Link>
  );
}
