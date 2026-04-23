import type { Metadata } from 'next';
import { projects } from '@/lib/site';
import { FinalCta } from '@/components/sections/final-cta';
import { PageHero } from '@/components/sections/page-hero';
import { ProjectCard } from '@/components/sections/project-card';
import { SectionIntro } from '@/components/sections/section-intro';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Case studies from Bonus Creative.'
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="How the work is shaped, not just how it looks."
        copy="Each case study shows the client need, the creative approach, the production logic, and the practical result."
      />

      <section className="section-space border-b border-white/10">
        <Container>
          <div className="col-span-12 mb-10 lg:col-span-5">
            <SectionIntro
              eyebrow="Selected projects"
              title="A cleaner look at the thinking behind the films."
            />
          </div>

          <div className="col-span-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={0.05 * index}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
