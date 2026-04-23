import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';
import { site } from '@/lib/site';

export function ContactSection() {
  return (
    <section className="section-space">
      <Container>
        <div className="col-span-12 grid gap-8 border-b border-white/10 pb-12 lg:grid-cols-12 lg:pb-16">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="eyebrow">Contact</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-xl max-w-[10ch] text-[#F5F5F7]">Let&apos;s talk.</h2>
            </Reveal>
          </div>
          <div className="space-y-8 lg:col-span-4 lg:pt-4">
            <Reveal delay={0.08}>
              <form className="space-y-4 rounded-[1.75rem] border border-white/10 bg-white/[0.02] p-6 md:p-7">
                <div className="grid gap-2">
                  <label htmlFor="name" className="eyebrow">Name</label>
                  <input id="name" name="name" type="text" className="min-h-12 border-b border-white/10 bg-transparent px-0 py-3 text-[#F5F5F7] outline-none placeholder:text-[#86868B]" placeholder="Your name" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="eyebrow">Email</label>
                  <input id="email" name="email" type="email" className="min-h-12 border-b border-white/10 bg-transparent px-0 py-3 text-[#F5F5F7] outline-none placeholder:text-[#86868B]" placeholder="you@example.com" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="project" className="eyebrow">Project</label>
                  <textarea id="project" name="project" rows={4} className="border-b border-white/10 bg-transparent px-0 py-3 text-[#F5F5F7] outline-none placeholder:text-[#86868B]" placeholder="Tell me what you are building, launching, or trying to communicate." />
                </div>
                <button type="submit" className="inline-flex items-center gap-2 rounded-full border border-[#FF5C00] bg-[#FF5C00] px-5 py-3 text-sm text-[#0A0A0A] transition-colors hover:bg-[#ff7a2f] hover:border-[#ff7a2f]">
                  <span>Start a conversation</span>
                  <ArrowUpRight size={16} />
                </button>
              </form>
            </Reveal>
          </div>
        </div>
        <div className="col-span-12 grid gap-6 pt-8 lg:grid-cols-12 lg:items-end lg:pt-10">
          <Reveal className="lg:col-span-4">
            <div className="space-y-2">
              <p className="text-sm font-medium tracking-[-0.03em] text-[#F5F5F7]">{site.name}</p>
              <p className="body-sm">{site.location}</p>
            </div>
          </Reveal>
          <Reveal delay={0.03} className="lg:col-span-4">
            <div className="space-y-2">
              <Link href={`mailto:${site.email}`} className="text-sm text-[#F5F5F7] transition-colors hover:text-[#2E5BFF]">
                {site.email}
              </Link>
              <p className="body-sm">{site.phone}</p>
            </div>
          </Reveal>
          <Reveal delay={0.06} className="lg:col-span-4 lg:text-right">
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link href={site.instagram} className="text-sm text-[#86868B] transition-colors hover:text-[#F5F5F7]" target="_blank" rel="noreferrer">
                Instagram
              </Link>
              <Link href={site.youtube} className="text-sm text-[#86868B] transition-colors hover:text-[#F5F5F7]" target="_blank" rel="noreferrer">
                YouTube
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
