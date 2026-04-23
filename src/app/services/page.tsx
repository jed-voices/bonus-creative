import type { Metadata } from 'next';
import { seo, services, servicesPage } from '@/lib/site';
import { FaqSection } from '@/components/sections/faq-section';
import { FinalCta } from '@/components/sections/final-cta';
import { PageHero } from '@/components/sections/page-hero';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';

export const metadata: Metadata = {
  title: seo.servicesTitle,
  description: seo.servicesDescription
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={servicesPage.title}
        copy={servicesPage.copy}
      />

      <section className="section-space border-b border-white/10">
        <Container>
          <div className="col-span-12 grid gap-4 md:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={0.04 * index}>
                <article className="flex h-full flex-col gap-6 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
                  <div className="space-y-3">
                    <p className="eyebrow">{service.title}</p>
                    <h2 className="text-[1.7rem] font-medium tracking-[-0.04em] text-[#F5F5F7]">
                      {service.summary}
                    </h2>
                    <p className="body-sm">{service.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16} className="col-span-12 pt-10">
            <p className="body-lg max-w-3xl">{servicesPage.closer}</p>
          </Reveal>
        </Container>
      </section>

      <FaqSection />

      <FinalCta />
    </>
  );
}
