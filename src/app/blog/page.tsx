import type { Metadata } from "next";

import { Eyebrow, Section } from "@/components/shared/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { PageHero } from "@/components/blog/page-hero";
import { PostCard } from "@/components/blog/post-card";
import { Cta } from "@/components/sections/cta";
import { getAllPosts } from "@/lib/blog";

const description =
  "Poradniki o stronach internetowych, sklepach, aplikacjach SaaS, automatyzacji, AI i widoczności w Google. Praktyczna wiedza dla firm.";

export const metadata: Metadata = {
  title: "Blog",
  description,
  alternates: { canonical: "/blog" },
  openGraph: { title: "Blog - NEXITO", description, url: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <>
      <PageHero labelledBy="blog-title">
        <Reveal>
          <Eyebrow>Blog</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h1
            id="blog-title"
            className="text-gradient mt-6 max-w-3xl text-4xl leading-[1.05] font-extrabold tracking-[-0.035em] text-balance sm:text-6xl"
          >
            Wiedza, która pomaga rozwijać firmę.
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            {description}
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <nav aria-label="Kategorie" className="mt-9">
            <ul className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <li key={category}>
                  <a
                    href={`#${categoryId(category)}`}
                    className="inline-flex rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-medium text-foreground transition-colors outline-none hover:border-white/30 hover:bg-white/[0.1] focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Reveal>
      </PageHero>

      {categories.map((category, index) => {
        const id = categoryId(category);
        return (
          <Section
            key={category}
            id={id}
            tone={index % 2 === 1 ? "muted" : "default"}
            labelledBy={`${id}-title`}
            className="scroll-mt-20 py-16 sm:py-20"
          >
            <h2 id={`${id}-title`} className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              {category}
            </h2>
            <Stagger as="ul" className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {posts
                .filter((post) => post.category === category)
                .map((post) => (
                  <StaggerItem as="li" key={post.slug}>
                    <PostCard post={post} />
                  </StaggerItem>
                ))}
            </Stagger>
          </Section>
        );
      })}

      <Cta />
    </>
  );
}

function categoryId(category: string) {
  return category
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ł/g, "l")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
