import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';
import { work } from '@/lib/site';

export function WorkGrid() {
  return (
    <section className="section-space border-b border-white/10">
      <Container>
        <div className="col-span-12 mb-10 flex flex-col gap-4 lg:col-span-5">
          <Reveal>
            <p className="eyebrow">Selected work</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-lg max-w-[12ch]">A portfolio grid built to feel quiet, sharp, and cinematic.</h2>
          </Reveal>
        </div>
        <div className="col-span-12 grid gap-5 lg:grid-cols-12 lg:gap-6">
          {work.map((item, index) => (
            <Reveal
              key={item.slug}
              delay={0.06 * index}
              className={index === 0 ? 'lg:col-span-7' : index === 1 ? 'lg:col-span-5' : 'lg:col-span-6'}
            >
              <Link
                href="/reel"
                className="group relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.poster}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <video
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:opacity-100"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                  >
                    <source src={item.previewVideo} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/70" />
                </div>
                <div className="flex flex-1 flex-col justify-between gap-6 p-5 md:p-6">
                  <div className="space-y-3">
                    <p className="eyebrow">{item.category}</p>
                    <h3 className="text-[1.35rem] font-medium tracking-[-0.04em] text-[#F5F5F7]">{item.title}</h3>
                    <p className="body-sm max-w-xl">{item.summary}</p>
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm text-[#F5F5F7]">
                    <span>View motion</span>
                    <ArrowUpRight size={16} className="text-[#2E5BFF]" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
