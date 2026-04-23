'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation, site } from '@/lib/site';
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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0A0A]/80 backdrop-blur-xl">
      <Container className="items-center gap-y-4 py-4">
        <div className="col-span-3 md:col-span-2 lg:col-span-3">
          <Link href="/" className="flex w-fit flex-col text-[#F5F5F7]">
            <span className="text-[0.7rem] uppercase tracking-[0.22em] text-[#86868B]">
              Bonus
            </span>
            <span className="text-sm font-medium tracking-[-0.03em]">
              Creative
            </span>
          </Link>
        </div>

        <div className="col-span-3 flex justify-end md:col-span-4 lg:col-span-3 lg:order-3">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-[#F5F5F7] transition-colors hover:border-white/20 hover:bg-white/[0.06]"
          >
            {site.hero.projectTitle}
          </Link>
        </div>

        <nav
          className="col-span-12 order-3 flex flex-wrap items-center gap-2 rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-2 md:order-2 md:col-span-12 lg:col-span-6 lg:justify-center"
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
                    ? 'bg-white/10 text-[#F5F5F7]'
                    : 'text-[#86868B] hover:text-[#F5F5F7]'
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
