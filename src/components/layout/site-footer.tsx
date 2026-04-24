import Link from 'next/link';
import { cleanPhone, navigation, site } from '@/lib/site';
import { BrandLogo } from '@/components/ui/brand-logo';
import { Container } from '@/components/ui/container';
import { SocialLinks } from '@/components/ui/social-links';

export function SiteFooter() {
  const footerNavigation = navigation.filter((item) => item.href !== '/');

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--panel)]">
      <Container className="gap-y-10 py-12 md:py-16">
        <div className="col-span-12 flex flex-col gap-4 lg:col-span-5">
          <Link href="/" className="w-fit" aria-label={site.name}>
            <BrandLogo className="h-[48px] w-auto md:h-[56px]" />
          </Link>
          <p className="body-sm max-w-xl">
            {site.footerLine}
          </p>
        </div>

        <div className="col-span-6 flex flex-col gap-3 lg:col-span-3">
          <p className="eyebrow">Navigate</p>
          {footerNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="ui-copy text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="col-span-6 flex flex-col gap-3 lg:col-span-4 lg:items-end">
          <p className="eyebrow">Contact</p>
          <a
            href={`mailto:${site.email}`}
            className="ui-copy text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
          >
            {site.email}
          </a>
          <a
            href={`tel:${cleanPhone}`}
            className="ui-copy text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
          >
            {site.phone}
          </a>
          <SocialLinks className="lg:justify-end" />
        </div>

        <div className="col-span-12 flex flex-col gap-3 border-t border-[var(--line)] pt-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <p className="eyebrow">Updates</p>
            <p className="body-sm max-w-md">
              {site.newsletterLine}
            </p>
          </div>
          <p className="body-sm">
            {site.coverage}
          </p>
        </div>
      </Container>
    </footer>
  );
}
