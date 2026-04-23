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

      <section className="section-space border-b border-white/10">
        <Container>
          <div className="col-span-12 grid gap-6 lg:col-span-5">
            <Reveal>
              <div className="flex min-h-[320px] flex-col justify-between rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-6 md:p-8">
                <div className="space-y-3">
                  <p className="eyebrow">{about.notesTitle}</p>
                  <div className="text-[2rem] font-medium tracking-[-0.06em] text-[#F5F5F7] md:text-[3rem]">
                    BW
                  </div>
                  <div>
                    <p className="text-lg font-medium tracking-[-0.03em] text-[#F5F5F7]">
                      {site.founder.name}
                    </p>
                    <p className="body-sm">{site.founder.title}</p>
                  </div>
                </div>

                <div className="space-y-3 border-t border-white/10 pt-5">
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
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.02] p-6 md:p-8">
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
