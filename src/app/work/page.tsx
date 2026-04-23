import type { Metadata } from 'next';
import { home, projects, workPage } from '@/lib/site';
import { FinalCta } from '@/components/sections/final-cta';
import { PageHero } from '@/components/sections/page-hero';
import { ProjectCard } from '@/components/sections/project-card';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Selected work from Bonus Creative, including nonprofit films, branded films, and event storytelling.'
};

const processNotes = [
  {
    title: 'Sharp story architecture',
    copy:
      'Every project starts by clarifying what the film needs to do, not just what it needs to show.'
  },
  {
    title: 'Lean production',
    copy:
      'The process stays tight so momentum does not get buried under unnecessary layers and handoffs.'
  },
  {
    title: 'Clean edits',
    copy:
      'The footage is gathered with the final cut in mind, which makes the edit more focused and more useful.'
  }
] as const;

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title={workPage.title}
        copy={workPage.copy}
      />

      <section className="section-space border-b border-white/10">
        <Container>
          <Reveal className="col-span-12 mb-10 lg:col-span-8">
            <p className="body-lg max-w-3xl">{workPage.intro}</p>
          </Reveal>
          <div className="col-span-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={0.05 * index}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space border-b border-white/10">
        <Container>
          <div className="col-span-12 grid gap-4 md:grid-cols-3">
            {processNotes.map((item, index) => (
              <Reveal key={item.title} delay={0.04 * index}>
                <div className="h-full rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-6">
                  <p className="eyebrow">0{index + 1}</p>
                  <h2 className="mt-4 text-[1.5rem] font-medium tracking-[-0.04em] text-[#F5F5F7]">
                    {item.title}
                  </h2>
                  <p className="body-sm mt-3">{item.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FinalCta
        title={workPage.ctaTitle}
        body={home.cta.body}
        secondaryLabel="View case studies"
        secondaryHref="/case-studies"
      />
    </>
  );
}
