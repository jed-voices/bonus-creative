import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';
import { about, home, site } from '@/lib/site';

export function AboutSection() {
  return (
    <section className="section-space border-b border-[var(--line)]">
      <Container>
        <div className="col-span-12 flex flex-col gap-6 lg:col-span-5">
          <Reveal>
            <p className="eyebrow">{home.intro.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-lg max-w-[11ch]">{home.intro.title}</h2>
          </Reveal>
        </div>
        <div className="col-span-12 grid gap-6 lg:col-span-7 lg:grid-cols-[1.1fr_.9fr]">
          <Reveal delay={0.08}>
            <p className="body-lg max-w-[56ch]">{home.intro.body}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="flex h-full min-h-[320px] flex-col justify-between rounded-[1.75rem] border border-[var(--line)] bg-[linear-gradient(135deg,rgba(26,34,48,0.9),rgba(18,24,33,0.68)_52%,rgba(127,178,255,0.1))] p-6 md:p-8">
              <div className="space-y-3">
                <p className="eyebrow">{about.notesTitle}</p>
                <div className="text-[2rem] font-medium tracking-[-0.06em] text-[var(--foreground)] md:text-[3rem]">BW</div>
                <div>
                  <p className="text-lg font-medium tracking-[-0.03em] text-[var(--foreground)]">{site.founder.name}</p>
                  <p className="body-sm">{site.founder.title}</p>
                </div>
              </div>
              <div className="space-y-3 border-t border-[var(--line)] pt-5">
                {about.notes.map((note) => (
                  <p key={note} className="body-sm">{note}</p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
