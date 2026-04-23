import { site } from '@/lib/site';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';
import { MagneticButton } from '@/components/ui/magnetic-button';

export function HeroSection() {
  return (
    <section className="section-space relative overflow-hidden border-b border-white/10">
      <Container className="items-end">
        <div className="col-span-12 flex flex-col gap-6 lg:col-span-4 lg:pb-6">
          <Reveal eager>
            <p className="eyebrow">{site.hero.eyebrow}</p>
          </Reveal>
          <Reveal eager delay={0.05}>
            <h1 className="display-xl max-w-[8ch] text-[#F5F5F7]">{site.hero.title}</h1>
          </Reveal>
          <Reveal eager delay={0.1}>
            <p className="body-lg max-w-xl">{site.hero.description}</p>
          </Reveal>
          <Reveal eager delay={0.15}>
            <div className="flex flex-wrap items-center gap-3">
              <MagneticButton href={site.hero.reelHref}>{site.hero.reelTitle}</MagneticButton>
              <MagneticButton href={site.hero.projectHref} variant="ghost">
                {site.hero.projectTitle}
              </MagneticButton>
            </div>
          </Reveal>
          <Reveal eager delay={0.2}>
            <div className="grid gap-3 pt-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
              {site.proof.map((item) => (
                <div key={item} className="border-t border-white/10 pt-3 text-sm text-[#86868B]">
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="col-span-12 lg:col-span-8">
          <Reveal eager delay={0.08}>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_20px_100px_rgba(0,0,0,0.45)]">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.04),rgba(10,10,10,0.42))]" />
              <video
                className="aspect-[16/9] w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={site.hero.reelPoster}
              >
                <source src={site.hero.reelVideo} type="video/mp4" />
              </video>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-8">
                <div className="max-w-md">
                  <p className="eyebrow text-[#F5F5F7]">{site.reel.title}</p>
                  <p className="mt-3 text-sm leading-6 text-[#F5F5F7]/72">{site.hero.reelLabel}</p>
                </div>
                <div className="hidden rounded-full border border-white/15 bg-black/40 px-4 py-2 text-sm text-[#F5F5F7] md:inline-flex">
                  / selected work
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
