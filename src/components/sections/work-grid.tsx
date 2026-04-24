import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';
import { PosterFrame } from '@/components/sections/poster-frame';
import { home, work } from '@/lib/site';

export function WorkGrid() {
  return (
    <section className="section-space border-b border-[var(--line)]">
      <Container>
        <div className="col-span-12 mb-10 flex flex-col gap-4 lg:col-span-5">
          <Reveal>
            <p className="eyebrow">{home.featuredWork.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-lg max-w-[12ch]">{home.featuredWork.title}</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="body-lg max-w-2xl">{home.featuredWork.intro}</p>
          </Reveal>
        </div>
        <div className="col-span-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3 lg:gap-6">
          {work.map((item, index) => (
            <Reveal
              key={item.slug}
              delay={0.06 * index}
              className="h-full"
            >
              <article className="group relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface)]">
                <PosterFrame
                  image={item.posterImage}
                  alt={`${item.title} production still`}
                  eyebrow={item.posterEyebrow}
                  title={item.posterTitle}
                  tagline={item.posterTagline}
                  previewVideo={item.previewVideo}
                />
                <div className="flex flex-1 flex-col justify-between gap-6 p-5 md:p-6">
                  <div className="space-y-3">
                    <p className="eyebrow">{item.category}</p>
                    <h3 className="text-[1.35rem] font-medium tracking-[-0.04em] text-[var(--foreground)]">{item.title}</h3>
                    <p className="body-sm max-w-xl">{item.summary}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={item.href}
                      className="button-primary ui-copy inline-flex items-center gap-2 border transition-colors"
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noreferrer' : undefined}
                    >
                      <span>{item.linkLabel}</span>
                      <ArrowUpRight size={16} />
                    </Link>
                    {item.secondaryHref ? (
                      <Link
                        href={item.secondaryHref}
                        className="button-secondary ui-copy inline-flex items-center gap-2 rounded-full px-4 py-2 transition-colors"
                        target={item.secondaryExternal ? '_blank' : undefined}
                        rel={item.secondaryExternal ? 'noreferrer' : undefined}
                      >
                        <span>{item.secondaryLabel}</span>
                        <ArrowUpRight size={16} className="text-[var(--action)]" />
                      </Link>
                    ) : null}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
