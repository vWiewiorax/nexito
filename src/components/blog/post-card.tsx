import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

import type { BlogPostMeta } from "@/lib/blog";

export function PostCard({ post, headingLevel = "h3" }: { post: BlogPostMeta; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <article className="card-surface group relative flex h-full flex-col rounded-2xl p-7 transition-shadow hover:shadow-lg">
      <p className="text-xs font-bold tracking-[0.14em] text-brand-soft uppercase">{post.category}</p>
      <Heading className="mt-3 text-lg leading-snug font-bold tracking-tight text-balance text-foreground">
        <Link
          href={`/blog/${post.slug}`}
          className="rounded-sm outline-none after:absolute after:inset-0 after:rounded-2xl focus-visible:ring-2 focus-visible:ring-ring"
        >
          {post.title}
        </Link>
      </Heading>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{post.description}</p>
      <div className="mt-auto flex items-center justify-between gap-4 pt-6 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <Clock className="size-3.5" aria-hidden="true" />
          {post.readingMinutes} min czytania
        </span>
        <ArrowRight className="size-4 text-brand transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </div>
    </article>
  );
}
