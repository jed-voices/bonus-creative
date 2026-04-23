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
    <section className="min-h-screen bg-[#0A0A0A] py-10 md:py-16">
      <Container>
        <div className="col-span-12 flex flex-col gap-5 lg:col-span-10 lg:col-start-2">
          <p className="eyebrow">{site.reel.title}</p>
          <h1 className="display-lg max-w-[12ch]">{site.reel.heading}</h1>
          <p className="body-lg max-w-3xl">{site.reel.description}</p>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_20px_100px_rgba(0,0,0,0.45)]">
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
              className="inline-flex items-center gap-2 rounded-full border border-[#2E5BFF] bg-[#2E5BFF] px-5 py-3 text-sm text-[#F5F5F7] transition-colors hover:border-[#1f47d9] hover:bg-[#1f47d9]"
            >
              <span>Start a Project</span>
              <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-[#F5F5F7] transition-colors hover:border-white/20 hover:bg-white/[0.06]"
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
