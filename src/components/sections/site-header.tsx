'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation, site } from '@/lib/site';
import { BrandLogo } from '@/components/ui/brand-logo';
import { Container } from '@/components/ui/container';

function isActive(pathname: string, href: string) {
  if (href === '/') {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const currentPath = pathname ?? '/';

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--background-frost)] backdrop-blur-xl">
      <Container className="items-center gap-y-4 py-4">
        <div className="col-span-3 md:col-span-2 lg:col-span-3">
          <Link href="/" className="block w-fit" aria-label={site.name}>
            <BrandLogo priority />
          </Link>
        </div>

        <div className="col-span-3 flex justify-end md:col-span-4 lg:col-span-3 lg:order-3">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--foreground)] transition-colors hover:border-[var(--line-strong)] hover:bg-[var(--surface-hover)]"
          >
            {site.hero.projectTitle}
          </Link>
        </div>

        <nav
          className="col-span-12 order-3 flex flex-wrap items-center gap-2 rounded-[1.25rem] border border-[var(--line)] bg-[var(--surface)] p-2 md:order-2 md:col-span-12 lg:col-span-6 lg:justify-center"
          aria-label="Primary"
        >
          {navigation.map((item) => {
            const active = isActive(currentPath, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm transition-colors ${
                  active
                    ? 'bg-[var(--accent-wash)] text-[var(--foreground)]'
                    : 'text-[var(--muted)] hover:text-[var(--foreground)]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}
