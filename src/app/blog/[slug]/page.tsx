import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";

import { Container, Section } from "@/components/shared/section";
import { CtaLink } from "@/components/shared/cta-link";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/blog/page-hero";
import { PostCard } from "@/components/blog/post-card";
import { Cta } from "@/components/sections/cta";
import { getService } from "@/content/services";
import { formatDate, getAllPosts, getPost, getRelatedPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `/blog/${post.slug}`;
  return {
    title: { absolute: `${post.title} - ${siteConfig.name}` },
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.date,
      section: post.category,
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const service = getService(post.service)!;
  const related = getRelatedPosts(post);
  const url = `${siteConfig.url}/blog/${post.slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.date,
      inLanguage: "pl-PL",
      keywords: post.tags.join(", "),
      articleSection: post.category,
      mainEntityOfPage: url,
      url,
      image: `${siteConfig.url}/opengraph-image`,
      author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
      publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Strona główna", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero labelledBy="post-title">
        <div className="max-w-3xl">
          <Reveal>
            <nav aria-label="Ścieżka nawigacji">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/" className="rounded-sm outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring">
                    Strona główna
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/blog" className="rounded-sm outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring">
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-foreground">{post.category}</li>
              </ol>
            </nav>
          </Reveal>
          <Reveal delay={0.05}>
            <h1
              id="post-title"
              className="text-gradient mt-6 text-3xl leading-[1.1] font-extrabold tracking-[-0.03em] text-balance sm:text-5xl"
            >
              {post.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">{post.description}</p>
          </Reveal>
          <Reveal delay={0.15} className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <span>NEXIWEB</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-4" aria-hidden="true" />
              {post.readingMinutes} min czytania
            </span>
          </Reveal>
        </div>
      </PageHero>

      <article aria-labelledby="post-title" className="py-14 sm:py-20">
        <Container className="max-w-3xl">
          <div
            className="prose max-w-none sm:prose-lg prose-slate prose-headings:font-extrabold prose-headings:tracking-tight prose-headings:text-foreground prose-h2:mt-12 prose-h2:text-2xl prose-h3:text-xl prose-p:text-foreground/85 prose-a:text-brand prose-strong:text-foreground prose-code:rounded prose-code:bg-surface prose-code:px-1.5 prose-code:py-0.5 prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-li:text-foreground/85 prose-li:marker:text-brand"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <aside
            aria-label="Powiązana usługa"
            className="card-surface mt-14 flex flex-col gap-5 rounded-2xl p-7 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand text-brand-foreground">
                <service.icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-bold text-foreground">{service.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{service.description}</p>
              </div>
            </div>
            <CtaLink href={`/uslugi/${service.slug}`} variant="secondary" arrow className="shrink-0">
              Zobacz usługę
            </CtaLink>
          </aside>

          <ul className="mt-8 flex flex-wrap gap-1.5" aria-label="Tagi">
            {post.tags.map((tag) => (
              <li key={tag} className="rounded-full border border-border bg-surface px-2.5 py-1 text-xs font-medium text-muted-foreground">
                {tag}
              </li>
            ))}
          </ul>

          <Link
            href="/blog"
            className="mt-10 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-brand outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Wszystkie artykuły
          </Link>
        </Container>
      </article>

      {related.length > 0 && (
        <Section tone="muted" labelledBy="related-title" className="py-16 sm:py-20">
          <div className="flex items-end justify-between gap-4">
            <h2 id="related-title" className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Przeczytaj także
            </h2>
            <Link
              href="/blog"
              className="hidden items-center gap-1.5 rounded-sm text-sm font-semibold text-brand outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring sm:inline-flex"
            >
              Wszystkie artykuły
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug}>
                <PostCard post={item} />
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Cta />
    </>
  );
}
