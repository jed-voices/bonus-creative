import { Clapperboard, Film, Layers3, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';
import { services } from '@/lib/site';

const icons = [Clapperboard, Film, Layers3, Sparkles] as const;

export function ServicesSection() {
  return (
    <section className="section-space border-b border-white/10">
      <Container>
        <div className="col-span-12 mb-10 flex flex-col gap-4 lg:col-span-5">
          <Reveal>
            <p className="eyebrow">Services</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-lg max-w-[11ch]">Minimal language. High standards. A tighter production system.</h2>
          </Reveal>
        </div>
        <div className="col-span-12 grid gap-4 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal key={service.title} delay={0.06 * index}>
                <div className="flex h-full flex-col gap-10 rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-6 md:p-8">
                  <div className="flex items-center justify-between gap-3">
                    <p className="eyebrow">0{index + 1}</p>
                    <Icon className="h-5 w-5 text-[#2E5BFF]" strokeWidth={1.75} />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-[1.5rem] font-medium tracking-[-0.04em] text-[#F5F5F7]">{service.title}</h3>
                    <p className="body-sm max-w-[42ch]">{service.copy}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
