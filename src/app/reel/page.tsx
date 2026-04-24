import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { site } from '@/lib/site';
import { Container } from '@/components/ui/container';

export const metadata: Metadata = {
  title: site.reel.title,
  description: `Bo Wright ${site.reel.title} for Bonus Creative.`
};

export default function ReelPage() {
  return (
    <section className="min-h-screen bg-[var(--background)] py-10 md:py-16">
      <Container>
        <div className="col-span-12 flex flex-col gap-5 lg:col-span-10 lg:col-start-2">
          <p className="eyebrow">{site.reel.title}</p>
          <h1 className="display-lg max-w-[12ch]">{site.reel.heading}</h1>
          <p className="body-lg max-w-3xl">{site.reel.description}</p>
          <div className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] shadow-[0_20px_100px_rgba(0,0,0,0.45)]">
            <video
              className="aspect-[16/9] w-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster={site.hero.reelPoster}
            >
              <source src={site.hero.reelVideo} type="video/mp4" />
            </video>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/contact"
              className="button-primary ui-copy inline-flex items-center gap-2 border transition-colors"
            >
              <span>Start a Project</span>
              <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/work"
              className="button-secondary ui-copy inline-flex items-center gap-2 rounded-full px-5 py-3 transition-colors"
            >
              <span>View Work</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
