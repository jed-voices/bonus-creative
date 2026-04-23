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
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-[#F5F5F7] transition-colors hover:border-white/20 hover:bg-white/[0.06]"
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
