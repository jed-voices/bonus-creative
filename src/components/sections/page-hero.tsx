import type { ReactNode } from 'react';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  copy: string;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, copy, children }: PageHeroProps) {
  return (
    <section className="section-space border-b border-white/10">
      <Container>
        <div className="col-span-12 flex flex-col gap-4 lg:col-span-8">
          <Reveal eager>
            <p className="eyebrow">{eyebrow}</p>
          </Reveal>
          <Reveal eager delay={0.05}>
            <h1 className="display-xl max-w-[10ch] text-[#F5F5F7]">{title}</h1>
          </Reveal>
          <Reveal eager delay={0.1}>
            <p className="body-lg max-w-3xl">{copy}</p>
          </Reveal>
          {children ? <Reveal eager delay={0.14}>{children}</Reveal> : null}
        </div>
      </Container>
    </section>
  );
}
