import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/lib/site';
import { FinalCta } from '@/components/sections/final-cta';
import { PageHero } from '@/components/sections/page-hero';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: 'Case study not found'
    };
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} | Bonus Creative`,
      description: project.summary,
      images: [project.poster]
    }
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={project.category}
        title={project.title}
        copy={project.summary}
      >
        {project.externalUrl ? (
          <div className="flex flex-wrap gap-3">
            <Link
              href={project.externalUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)] bg-[var(--accent)] px-5 py-3 text-sm text-[var(--foreground)] transition-colors hover:border-[var(--accent-strong)] hover:bg-[var(--accent-strong)]"
            >
              <span>{project.externalLabel || 'View project'}</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        ) : null}
      </PageHero>

      <section className="section-space border-b border-[var(--line)]">
        <Container>
          <div className="col-span-12 grid gap-6">
            <Reveal>
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--surface)]">
                <Image
                  src={project.poster}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
            </Reveal>

            <div className="grid gap-4 md:grid-cols-2">
              <Reveal>
                <div className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-quiet)] p-6">
                  <p className="eyebrow">Client need</p>
                  <h2 className="mt-3 text-[1.5rem] font-medium tracking-[-0.04em] text-[var(--foreground)]">
                    {project.challenge}
                  </h2>
                  <p className="body-sm mt-3">
                    The project needed more than coverage. It needed a film
                    that could clarify value and hold attention.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.04}>
                <div className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-quiet)] p-6">
                  <p className="eyebrow">Creative approach</p>
                  <h2 className="mt-3 text-[1.5rem] font-medium tracking-[-0.04em] text-[var(--foreground)]">
                    {project.approach}
                  </h2>
                  <p className="body-sm mt-3">{project.role}</p>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-quiet)] p-6">
                  <p className="eyebrow">Execution</p>
                  <h2 className="mt-3 text-[1.5rem] font-medium tracking-[-0.04em] text-[var(--foreground)]">
                    Lean production with editorial discipline.
                  </h2>
                  <p className="body-sm mt-3">
                    The work is planned with the final edit in mind so the
                    footage is useful, not just impressive.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="rounded-[1.5rem] border border-[var(--line)] bg-[radial-gradient(circle_at_top_left,rgba(107,183,166,0.18),transparent_36%),rgba(243,239,231,0.03)] p-6">
                  <p className="eyebrow">Result</p>
                  <h2 className="mt-3 text-[1.5rem] font-medium tracking-[-0.04em] text-[var(--foreground)]">
                    {project.outcome}
                  </h2>
                  <p className="body-sm mt-3">{project.result}</p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <FinalCta secondaryLabel="View all case studies" secondaryHref="/case-studies" />
    </>
  );
}
