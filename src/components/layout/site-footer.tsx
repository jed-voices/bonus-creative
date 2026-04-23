import Link from 'next/link';
import { cleanPhone, navigation, site } from '@/lib/site';
import { Container } from '@/components/ui/container';

export function SiteFooter() {
  const footerNavigation = navigation.filter((item) => item.href !== '/');

  return (
    <footer className="border-t border-white/10 bg-black/20">
      <Container className="gap-y-10 py-12 md:py-16">
        <div className="col-span-12 flex flex-col gap-4 lg:col-span-5">
          <Link href="/" className="w-fit text-sm font-medium uppercase tracking-[0.22em] text-[#F5F5F7]">
            Bonus Creative
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
              className="text-sm text-[#F5F5F7] transition-colors hover:text-[#2E5BFF]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="col-span-6 flex flex-col gap-3 lg:col-span-4 lg:items-end">
          <p className="eyebrow">Contact</p>
          <a
            href={`mailto:${site.email}`}
            className="text-sm text-[#F5F5F7] transition-colors hover:text-[#2E5BFF]"
          >
            {site.email}
          </a>
          <a
            href={`tel:${cleanPhone}`}
            className="text-sm text-[#F5F5F7] transition-colors hover:text-[#2E5BFF]"
          >
            {site.phone}
          </a>
          <Link
            href={site.instagram}
            className="text-sm text-[#86868B] transition-colors hover:text-[#F5F5F7]"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </Link>
          <Link
            href={site.youtube}
            className="text-sm text-[#86868B] transition-colors hover:text-[#F5F5F7]"
            target="_blank"
            rel="noreferrer"
          >
            YouTube
          </Link>
        </div>

        <div className="col-span-12 flex flex-col gap-3 border-t border-white/10 pt-6 md:flex-row md:items-end md:justify-between">
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
