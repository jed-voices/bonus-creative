import { Plus } from 'lucide-react';
import { faq as defaultFaq } from '@/lib/site';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';
import { SectionIntro } from '@/components/sections/section-intro';

interface FaqItem {
  q: string;
  a: string;
}

interface FaqSectionProps {
  eyebrow?: string;
  title?: string;
  copy?: string;
  items?: readonly FaqItem[];
}

export function FaqSection({
  eyebrow = 'FAQ',
  title = 'Straight answers for teams who want the process to stay clear.',
  copy = 'Most projects get better when expectations are simple on the front end.',
  items = defaultFaq
}: FaqSectionProps) {
  return (
    <section className="section-space border-b border-white/10">
      <Container>
        <div className="col-span-12 lg:col-span-4">
          <SectionIntro eyebrow={eyebrow} title={title} copy={copy} />
        </div>

        <div className="col-span-12 grid gap-4 lg:col-span-8">
          {items.map((item, index) => (
            <Reveal key={item.q} delay={0.04 * index}>
              <details className="group rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-5 md:p-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-lg font-medium tracking-[-0.03em] text-[#F5F5F7]">
                  <span>{item.q}</span>
                  <Plus className="mt-1 h-5 w-5 shrink-0 text-[#2E5BFF] transition group-open:rotate-45" />
                </summary>
                <p className="body-sm mt-4 max-w-3xl">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
