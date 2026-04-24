import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFoundPage } from '@/lib/site';
import { PageHero } from '@/components/sections/page-hero';
import { Container } from '@/components/ui/container';

export const metadata: Metadata = {
  title: 'Page not found'
};

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="Not found"
        title={notFoundPage.title}
        copy={notFoundPage.copy}
      />

      <section className="section-space">
        <Container>
          <div className="col-span-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-5 py-3 text-sm text-[var(--foreground)] transition-colors hover:border-[var(--line-strong)] hover:bg-[var(--surface-hover)]"
            >
              <ArrowLeft size={16} />
              <span>Back to home</span>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
