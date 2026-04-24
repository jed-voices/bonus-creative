import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import {
  home,
  portfolioCategories,
  portfolioExamples,
  portfolioHighlights,
  portfolioPage,
  seo
} from '@/lib/site';
import { FinalCta } from '@/components/sections/final-cta';
import { PageHero } from '@/components/sections/page-hero';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';
import { RotatingThumbnail } from '@/components/ui/rotating-thumbnail';

export const metadata: Metadata = {
  title: seo.portfolioTitle,
  description: seo.portfolioDescription
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow={portfolioPage.eyebrow}
        title={portfolioPage.title}
        copy={portfolioPage.copy}
      />

      <section className="section-space border-b border-[var(--line)]">
        <Container>
          <Reveal className="col-span-12 mb-10 lg:col-span-8">
            <p className="body-lg max-w-3xl">{portfolioPage.intro}</p>
          </Reveal>

          <div className="col-span-12 grid gap-5 lg:grid-cols-3">
            {portfolioHighlights.map((item, index) => {
              const external = item.href.startsWith('http');

              return (
                <Reveal key={item.slug} delay={0.05 * index}>
                  <article
                    id={item.slug}
                    className="group scroll-mt-32 flex h-full min-h-[420px] flex-col overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-[radial-gradient(circle_at_top_left,rgba(42,63,95,0.42),transparent_38%),var(--surface)]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--line)] bg-[var(--color-bg-primary)]">
                      <RotatingThumbnail
                        images={item.images}
                        alt={item.imageAlt}
                        className="object-cover saturate-[0.88] group-hover:scale-[1.03]"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        staggerMs={index * 1100}
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,15,20,0.04),rgba(11,15,20,0.64))]" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between gap-8 p-6">
                      <div className="space-y-4">
                        <p className="eyebrow">{item.eyebrow}</p>
                        <h2 className="text-[clamp(1.6rem,3vw,2.25rem)] font-semibold uppercase leading-[0.98] tracking-[-0.035em] text-[var(--foreground)]">
                          {item.title}
                        </h2>
                        <p className="body-sm">{item.body}</p>
                      </div>
                      <Link
                        href={item.href}
                        target={external ? '_blank' : undefined}
                        rel={external ? 'noreferrer' : undefined}
                        className="button-secondary ui-copy inline-flex w-fit items-center gap-2 rounded-full px-5 py-3 transition-colors"
                      >
                        <span>{item.label}</span>
                        <ArrowUpRight size={16} className="text-[var(--action)]" />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section-space border-b border-[var(--line)]">
        <Container>
          <div className="col-span-12 mb-10 lg:col-span-6">
            <Reveal>
              <p className="eyebrow">Examples</p>
            </Reveal>
            <Reveal delay={0.04}>
              <h2 className="display-lg mt-4 max-w-[13ch]">
                Specific ways the work shows up.
              </h2>
            </Reveal>
          </div>

          <div className="col-span-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {portfolioExamples.map((item, index) => (
              <Reveal key={item.slug} delay={0.035 * index}>
                <article className="group flex h-full min-h-[360px] flex-col overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[linear-gradient(145deg,rgba(26,34,48,0.72),rgba(18,24,33,0.46)),var(--surface-quiet)]">
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--line)] bg-[var(--color-bg-primary)]">
                    <RotatingThumbnail
                      images={item.images}
                      alt={item.imageAlt}
                      className="object-cover saturate-[0.86] group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      staggerMs={(index + 3) * 800}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,15,20,0.06),rgba(11,15,20,0.58))]" />
                  </div>
                  <div className="flex flex-1 flex-col gap-5 p-5">
                    <p className="eyebrow">{item.eyebrow}</p>
                    <div className="space-y-3">
                      <h3 className="text-[1.35rem] font-semibold uppercase leading-[1] tracking-[-0.03em] text-[var(--foreground)]">
                        {item.title}
                      </h3>
                      <p className="body-sm">{item.body}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space border-b border-[var(--line)]">
        <Container>
          <div className="col-span-12 mb-10 lg:col-span-6">
            <Reveal>
              <p className="eyebrow">Portfolio range</p>
            </Reveal>
            <Reveal delay={0.04}>
              <h2 className="display-lg mt-4 max-w-[13ch]">
                Everything Bonus Creative is built to make.
              </h2>
            </Reveal>
          </div>

          <div className="col-span-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {portfolioCategories.map((item, index) => (
              <Reveal key={item.slug} delay={0.035 * index}>
                <article
                  id={item.slug}
                  className="scroll-mt-32 flex h-full flex-col gap-5 rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-quiet)] p-5"
                >
                  <div className="space-y-3">
                    <p className="eyebrow">{item.eyebrow}</p>
                    <h3 className="text-[1.45rem] font-semibold uppercase leading-[1] tracking-[-0.03em] text-[var(--foreground)]">
                      {item.title}
                    </h3>
                    <p className="body-sm">{item.body}</p>
                  </div>

                  <div className="mt-auto space-y-2 border-t border-[var(--line)] pt-4">
                    {item.details.map((detail) => (
                      <p key={detail} className="body-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FinalCta
        title={portfolioPage.ctaTitle}
        body={home.cta.body}
        secondaryLabel="Watch the Reel"
        secondaryHref="/reel"
      />
    </>
  );
}
