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
          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(46,91,255,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,92,0,0.12),transparent_28%),rgba(255,255,255,0.03)] p-6 md:p-8 lg:grid-cols-12 lg:items-end">
            <div className="space-y-4 lg:col-span-7">
              <p className="eyebrow">{home.cta.eyebrow}</p>
              <h2 className="display-lg max-w-[10ch] text-[#F5F5F7]">
                {home.cta.title}
              </h2>
              <p className="body-lg max-w-2xl">
                {home.cta.body}
              </p>
              <p className="body-sm max-w-xl text-[#B8B8BC]">
                {site.contactMicrocopy}
              </p>
            </div>

            <div className="space-y-6 lg:col-span-5">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {contactHighlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.25rem] border border-white/10 bg-black/20 p-4"
                  >
                    <p className="eyebrow">{item.label}</p>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="mt-3 block text-sm text-[#F5F5F7] transition-colors hover:text-[#2E5BFF]"
                      >
                        {item.value}
                      </Link>
                    ) : (
                      <p className="mt-3 text-sm text-[#F5F5F7]">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href={home.cta.buttonHref}
                  className="inline-flex items-center gap-2 rounded-full border border-[#FF5C00] bg-[#FF5C00] px-5 py-3 text-sm text-[#0A0A0A] transition-colors hover:border-[#ff7a2f] hover:bg-[#ff7a2f]"
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
