import type { Showcase } from "@/content/home";

function SaasPreview() {
  return (
    <div className="flex h-full flex-col gap-2 p-4">
      <div className="flex gap-2">
        {["Starter", "Pro", "Business"].map((plan, index) => (
          <div
            key={plan}
            className={
              index === 1
                ? "flex-1 rounded-lg border border-brand/40 bg-brand/10 p-2"
                : "flex-1 rounded-lg border border-white/[0.06] bg-white/[0.02] p-2"
            }
          >
            <p className="text-[9px] text-muted-foreground">{plan}</p>
            <div className="mt-2 h-1.5 w-8 rounded-full bg-white/20" />
            <div className="mt-1.5 h-1 w-10 rounded-full bg-white/10" />
          </div>
        ))}
      </div>
      <div className="flex flex-1 items-end gap-1 rounded-lg border border-white/[0.06] bg-white/[0.02] p-2">
        {[30, 45, 40, 60, 55, 75, 70, 90, 85, 100].map((height, index) => (
          <span key={index} className="flex-1 rounded-sm bg-gradient-to-t from-brand/20 to-brand-soft/70" style={{ height: `${height}%` }} />
        ))}
      </div>
    </div>
  );
}

function SystemPreview() {
  return (
    <div className="grid h-full grid-cols-3 gap-2 p-4">
      {["Nowe", "W toku", "Gotowe"].map((column, columnIndex) => (
        <div key={column} className="flex flex-col gap-1.5 rounded-lg border border-white/[0.06] bg-white/[0.02] p-2">
          <p className="text-[9px] text-muted-foreground">{column}</p>
          {Array.from({ length: 3 - columnIndex + 1 }).map((_, index) => (
            <div key={index} className="rounded-md border border-white/[0.06] bg-white/[0.04] p-1.5">
              <div className="h-1 w-3/4 rounded-full bg-white/20" />
              <div className="mt-1 h-1 w-1/2 rounded-full bg-white/10" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function WebsitePreview() {
  return (
    <div className="flex h-full flex-col gap-2 p-4">
      <div className="flex items-center justify-between">
        <div className="h-1.5 w-8 rounded-full bg-white/30" />
        <div className="flex gap-1.5">
          {[0, 1, 2].map((index) => (
            <div key={index} className="h-1 w-5 rounded-full bg-white/10" />
          ))}
        </div>
      </div>
      <div className="mt-2 flex flex-col items-center gap-1.5">
        <div className="h-2.5 w-3/5 rounded-full bg-white/30" />
        <div className="h-2.5 w-2/5 rounded-full bg-gradient-to-r from-brand-soft/70 to-brand/50" />
        <div className="mt-1 h-1 w-1/2 rounded-full bg-white/10" />
        <div className="mt-2 h-4 w-16 rounded-full bg-brand/60" />
      </div>
      <div className="mt-auto grid grid-cols-3 gap-1.5">
        {[0, 1, 2].map((index) => (
          <div key={index} className="h-8 rounded-md border border-white/[0.06] bg-white/[0.03]" />
        ))}
      </div>
    </div>
  );
}

const previews = {
  saas: SaasPreview,
  system: SystemPreview,
  website: WebsitePreview,
} satisfies Record<Showcase["variant"], () => React.JSX.Element>;

export function ShowcasePreview({ variant }: { variant: Showcase["variant"] }) {
  const Preview = previews[variant];
  return (
    <div aria-hidden="true" className="relative h-40 overflow-hidden rounded-xl border border-white/[0.06] bg-[oklch(0.15_0.007_270)]">
      <div className="bg-grid absolute inset-0 opacity-40" />
      <div className="relative h-full">
        <Preview />
      </div>
    </div>
  );
}
