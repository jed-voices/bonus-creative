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
      <Container className="gap-y-3 py-4">
        <div className="col-span-12 flex justify-end">
          <Link
            href="/contact"
            className="ui-copy inline-flex items-center rounded-full border border-[rgba(127,178,255,0.3)] bg-[rgba(127,178,255,0.08)] px-4 py-2 text-[var(--accent-strong)] shadow-[0_0_28px_rgba(127,178,255,0.08)] transition-colors hover:border-[rgba(127,178,255,0.46)] hover:bg-[rgba(127,178,255,0.14)]"
          >
            {site.hero.projectTitle}
          </Link>
        </div>

        <div className="col-span-12 flex items-stretch gap-2">
          <Link
            href="/"
            className="flex min-h-[56px] w-[48px] shrink-0 items-center justify-center transition-opacity hover:opacity-80"
            aria-label={site.name}
          >
            <BrandLogo className="h-full max-h-[46px] w-auto" priority />
          </Link>

          <nav
            className="flex min-h-[56px] flex-1 flex-wrap items-center gap-1 rounded-[1.25rem] border border-[var(--line)] bg-[var(--surface)] p-2 sm:gap-2"
            aria-label="Primary"
          >
            {navigation.map((item) => {
              const active = isActive(currentPath, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`ui-copy rounded-full px-2 py-2 transition-colors sm:px-3 ${
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
        </div>
      </Container>
    </header>
  );
}
