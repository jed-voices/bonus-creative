import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';
import { cleanPhone, home, site } from '@/lib/site';

const contactHighlights = [
  {
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`
  },
  {
    label: 'Phone',
    value: site.phone,
    href: `tel:${cleanPhone}`
  },
  {
    label: 'Coverage',
    value: site.coverage,
    href: ''
  }
] as const;

export function ContactSection() {
  return (
    <section className="section-space">
      <Container>
        <Reveal className="col-span-12">
          <div className="grid gap-8 rounded-[2rem] border border-[var(--line)] bg-[radial-gradient(circle_at_top_left,rgba(26,34,48,0.92),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(127,178,255,0.12),transparent_30%),var(--color-bg-secondary)] p-6 md:p-8 lg:grid-cols-12 lg:items-end">
            <div className="space-y-4 lg:col-span-7">
              <p className="eyebrow">{home.cta.eyebrow}</p>
              <h2 className="display-lg max-w-[10ch] text-[var(--foreground)]">
                {home.cta.title}
              </h2>
              <p className="body-lg max-w-2xl">
                {home.cta.body}
              </p>
              <p className="body-sm max-w-xl text-[var(--foreground-soft)]">
                {site.contactMicrocopy}
              </p>
            </div>

            <div className="space-y-6 lg:col-span-5">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {contactHighlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.25rem] border border-[var(--line)] bg-[var(--panel)] p-4"
                  >
                    <p className="eyebrow">{item.label}</p>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="ui-copy mt-3 block text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
                      >
                        {item.value}
                      </Link>
                    ) : (
                      <p className="ui-copy mt-3 text-[var(--foreground)]">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href={home.cta.buttonHref}
                  className="button-primary ui-copy inline-flex items-center gap-2 border transition-colors"
                >
                  <span>{home.cta.buttonLabel}</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>

              <p className="body-sm max-w-md">
                {home.cta.footer}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
