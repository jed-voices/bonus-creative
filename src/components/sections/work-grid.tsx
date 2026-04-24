import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';
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
        <div className="col-span-12 grid gap-5 lg:grid-cols-12 lg:gap-6">
          {work.map((item, index) => (
            <Reveal
              key={item.slug}
              delay={0.06 * index}
              className={index === 0 ? 'lg:col-span-7' : index === 1 ? 'lg:col-span-5' : 'lg:col-span-6'}
            >
              <article className="group relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface)]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.poster}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <video
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:opacity-100"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                  >
                    <source src={item.previewVideo} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,17,22,0.08),rgba(12,17,22,0.22),rgba(12,17,22,0.74))]" />
                </div>
                <div className="flex flex-1 flex-col justify-between gap-6 p-5 md:p-6">
                  <div className="space-y-3">
                    <p className="eyebrow">{item.category}</p>
                    <h3 className="text-[1.35rem] font-medium tracking-[-0.04em] text-[var(--foreground)]">{item.title}</h3>
                    <p className="body-sm max-w-xl">{item.summary}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)] bg-[var(--accent)] px-4 py-2 text-sm text-[var(--foreground)] transition-colors hover:border-[var(--accent-strong)] hover:bg-[var(--accent-strong)]"
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noreferrer' : undefined}
                    >
                      <span>{item.linkLabel}</span>
                      <ArrowUpRight size={16} />
                    </Link>
                    {item.secondaryHref ? (
                      <Link
                        href={item.secondaryHref}
                        className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--foreground)] transition-colors hover:border-[var(--line-strong)] hover:bg-[var(--surface-hover)]"
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
