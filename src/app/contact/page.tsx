import type { Metadata } from 'next';
import Link from 'next/link';
import { cleanPhone, contactPage, seo, site } from '@/lib/site';
import { ContactForm } from '@/components/sections/contact-form';
import { FaqSection } from '@/components/sections/faq-section';
import { PageHero } from '@/components/sections/page-hero';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';
import { SocialLinks } from '@/components/ui/social-links';

export const metadata: Metadata = {
  title: {
    absolute: seo.contactTitle
  },
  description: seo.contactDescription
};

const contactCards = [
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
    label: 'Social',
    value: 'Follow Bonus Creative',
    href: '',
    social: true
  },
  {
    label: 'Coverage area',
    value: site.coverage,
    href: ''
  }
] as const;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={contactPage.title}
        copy={contactPage.copy}
      />

      <section className="section-space border-b border-[var(--line)]">
        <Container>
          <div className="col-span-12 lg:col-span-7">
            <Reveal>
              <ContactForm />
            </Reveal>
          </div>

          <div className="col-span-12 grid gap-4 lg:col-span-5">
            {contactCards.map((card, index) => (
              <Reveal key={card.label} delay={0.04 * index}>
                <div className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-quiet)] p-5 md:p-6">
                  <p className="eyebrow">{card.label}</p>
                  {'social' in card ? (
                    <div className="mt-4">
                      <p className="sr-only">{card.value}</p>
                      <SocialLinks />
                    </div>
                  ) : card.href ? (
                    <Link
                      href={card.href}
                      className="mt-3 block text-lg font-medium tracking-[-0.03em] text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
                      target={card.href.startsWith('http') ? '_blank' : undefined}
                      rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
                    >
                      {card.value}
                    </Link>
                  ) : (
                    <p className="mt-3 text-lg font-medium tracking-[-0.03em] text-[var(--foreground)]">
                      {card.value}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="col-span-12 pt-8">
            <p className="body-sm max-w-2xl">{contactPage.footerLine}</p>
          </Reveal>
        </Container>
      </section>

      <FaqSection
        eyebrow="Before we talk"
        title="A few practical questions usually answer themselves pretty quickly."
        copy="If the project is a fit, the next step is usually a short call and a clearer scope."
      />
    </>
  );
}
