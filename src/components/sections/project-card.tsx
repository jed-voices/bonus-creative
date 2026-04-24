import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/lib/site';
import { PosterFrame } from '@/components/sections/poster-frame';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className = '' }: ProjectCardProps) {
  const primaryHref = project.href;
  const primaryExternal = project.external;

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface)] ${className}`.trim()}
    >
      <PosterFrame
        image={project.posterImage}
        alt={`${project.title} production still`}
        eyebrow={project.posterEyebrow}
        title={project.posterTitle}
        tagline={project.posterTagline}
        sizes="(max-width: 1024px) 100vw, 33vw"
      />

      <div className="flex flex-1 flex-col justify-between gap-6 p-5 md:p-6">
        <div className="space-y-3">
          <p className="eyebrow">{project.category}</p>
          <h3 className="text-[1.45rem] font-medium tracking-[-0.04em] text-[var(--foreground)]">
            {project.title}
          </h3>
          <p className="body-sm">{project.summary}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href={primaryHref}
            target={primaryExternal ? '_blank' : undefined}
            rel={primaryExternal ? 'noreferrer' : undefined}
            className="button-primary ui-copy inline-flex items-center gap-2 border transition-colors"
          >
            <span>{project.linkLabel}</span>
            <ArrowUpRight size={16} />
          </Link>
          {project.externalUrl ? (
            <Link
              href={project.externalUrl}
              target="_blank"
              rel="noreferrer"
              className="button-secondary ui-copy inline-flex items-center gap-2 rounded-full px-4 py-2 transition-colors"
            >
              <span>{project.externalLabel || 'View project'}</span>
              <ArrowUpRight size={16} className="text-[var(--action)]" />
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
