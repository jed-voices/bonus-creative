import type { Metadata } from 'next';
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
              <div className="flex min-h-[320px] flex-col justify-between rounded-[1.75rem] border border-[var(--line)] bg-[linear-gradient(135deg,rgba(107,183,166,0.14),rgba(243,239,231,0.03)_52%,rgba(217,138,82,0.08))] p-6 md:p-8">
                <div className="space-y-3">
                  <p className="eyebrow">{about.notesTitle}</p>
                  <div className="text-[2rem] font-medium tracking-[-0.06em] text-[var(--foreground)] md:text-[3rem]">
                    BW
                  </div>
                  <div>
                    <p className="text-lg font-medium tracking-[-0.03em] text-[var(--foreground)]">
                      {site.founder.name}
                    </p>
                    <p className="body-sm">{site.founder.title}</p>
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
