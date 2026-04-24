import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { home } from '@/lib/site';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';

interface FinalCtaProps {
  eyebrow?: string;
  title?: string;
  body?: string;
  buttonLabel?: string;
  buttonHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  footer?: string;
}

export function FinalCta({
  eyebrow = home.cta.eyebrow,
  title = home.cta.title,
  body = home.cta.body,
  buttonLabel = home.cta.buttonLabel,
  buttonHref = home.cta.buttonHref,
  secondaryLabel = 'View Work',
  secondaryHref = '/work',
  footer = home.cta.footer
}: FinalCtaProps) {
  const hasSecondaryAction = Boolean(secondaryLabel && secondaryHref);

  return (
    <section className="section-space">
      <Container>
        <Reveal className="col-span-12">
          <div className="grid gap-8 rounded-[2rem] border border-[var(--line)] bg-[radial-gradient(circle_at_top_left,rgba(107,183,166,0.2),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(217,138,82,0.14),transparent_32%),rgba(243,239,231,0.03)] p-6 md:p-8 lg:grid-cols-12 lg:items-end">
            <div className="space-y-4 lg:col-span-7">
              <p className="eyebrow">{eyebrow}</p>
              <h2 className="display-lg max-w-[11ch] text-[var(--foreground)]">
                {title}
              </h2>
              <p className="body-lg max-w-2xl">
                {body}
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:col-span-5 lg:items-start lg:justify-end">
              <div className="flex flex-wrap gap-3">
                <Link
                  href={buttonHref}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--action)] bg-[var(--action)] px-5 py-3 text-sm text-[var(--background)] transition-colors hover:border-[var(--action-strong)] hover:bg-[var(--action-strong)]"
                >
                  <span>{buttonLabel}</span>
                  <ArrowUpRight size={16} />
                </Link>
                {hasSecondaryAction ? (
                  <Link
                    href={secondaryHref}
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-5 py-3 text-sm text-[var(--foreground)] transition-colors hover:border-[var(--line-strong)] hover:bg-[var(--surface-hover)]"
                  >
                    <span>{secondaryLabel}</span>
                    <ArrowUpRight size={16} />
                  </Link>
                ) : null}
              </div>
              <p className="body-sm max-w-md">
                {footer}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
