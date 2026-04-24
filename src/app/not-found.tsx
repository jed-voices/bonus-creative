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
              className="button-secondary ui-copy inline-flex items-center gap-2 rounded-full px-5 py-3 transition-colors"
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
