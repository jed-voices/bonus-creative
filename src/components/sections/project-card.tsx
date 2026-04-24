import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/lib/site';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className = '' }: ProjectCardProps) {
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface)] ${className}`.trim()}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.poster}
          alt={`${project.title} poster`}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,17,22,0.08),rgba(12,17,22,0.2),rgba(12,17,22,0.78))]" />
      </div>

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
            href={`/case-studies/${project.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)] bg-[var(--accent)] px-4 py-2 text-sm text-[var(--foreground)] transition-colors hover:border-[var(--accent-strong)] hover:bg-[var(--accent-strong)]"
          >
            <span>Read case study</span>
            <ArrowUpRight size={16} />
          </Link>
          {project.externalUrl ? (
            <Link
              href={project.externalUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--foreground)] transition-colors hover:border-[var(--line-strong)] hover:bg-[var(--surface-hover)]"
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
