import { Clapperboard, Film, Layers3, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';
import { home, services } from '@/lib/site';

const icons = [Clapperboard, Film, Layers3, Sparkles] as const;

export function ServicesSection() {
  return (
    <section className="section-space border-b border-[var(--line)]">
      <Container>
        <div className="col-span-12 mb-10 flex flex-col gap-4 lg:col-span-5">
          <Reveal>
            <p className="eyebrow">{home.servicesPreview.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-lg max-w-[11ch]">{home.servicesPreview.title}</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="body-lg max-w-2xl">{home.servicesPreview.body}</p>
          </Reveal>
        </div>
        <div className="col-span-12 grid gap-4 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal key={service.title} delay={0.06 * index}>
                <div className="flex h-full flex-col gap-10 rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-quiet)] p-6 md:p-8">
                  <div className="flex items-center justify-between gap-3">
                    <p className="eyebrow">0{index + 1}</p>
                    <Icon className="h-5 w-5 text-[var(--accent)]" strokeWidth={1.75} />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-[1.5rem] font-medium tracking-[-0.04em] text-[var(--foreground)]">{service.title}</h3>
                    <p className="body-sm max-w-[42ch]">{service.summary}</p>
                    <p className="body-sm max-w-[42ch] text-[var(--foreground-soft)]">{service.body}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={0.16} className="col-span-12 pt-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
          >
            <span>See the full service list</span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
