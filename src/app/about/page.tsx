import type { Metadata } from 'next';
import Image from 'next/image';
import { about, seo, site } from '@/lib/site';
import { FinalCta } from '@/components/sections/final-cta';
import { PageHero } from '@/components/sections/page-hero';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';

export const metadata: Metadata = {
  title: seo.aboutTitle,
  description: seo.aboutDescription
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={about.heading}
        copy={about.heroCopy}
      />

      <section className="section-space border-b border-[var(--line)]">
        <Container>
          <div className="col-span-12 grid gap-6 lg:col-span-5">
            <Reveal>
              <div className="flex min-h-[320px] flex-col gap-5 rounded-[1.75rem] border border-[var(--line)] bg-[linear-gradient(135deg,rgba(26,34,48,0.9),rgba(18,24,33,0.68)_52%,rgba(127,178,255,0.1))] p-4 md:p-5">
                <div className="space-y-4">
                  <p className="eyebrow">{about.notesTitle}</p>

                  <div className="relative overflow-hidden rounded-[1.35rem] border border-[var(--line)] bg-[var(--background)]">
                    <Image
                      src="/images/bo-headshot.webp"
                      alt="Bo Wright, founder of Bonus Creative"
                      width={1706}
                      height={1705}
                      className="aspect-[4/5] w-full object-cover object-[56%_44%] saturate-[0.92]"
                      sizes="(min-width: 1024px) 38vw, calc(100vw - 2rem)"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,15,20,0)_42%,rgba(11,15,20,0.86))]" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p className="text-lg font-medium tracking-[-0.03em] text-[var(--foreground)]">
                        {site.founder.name}
                      </p>
                      <p className="body-sm">{site.founder.title}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 border-t border-[var(--line)] pt-5">
                  {about.notes.map((note) => (
                    <p key={note} className="body-sm">
                      {note}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <Reveal>
              <div className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface-quiet)] p-6 md:p-8">
                <p className="eyebrow">About</p>
                <div className="mt-4 space-y-5">
                  {about.body.map((paragraph) => (
                    <p key={paragraph} className="body-lg max-w-3xl">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
