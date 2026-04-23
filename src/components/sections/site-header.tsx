import Link from 'next/link';
import { Container } from '@/components/ui/container';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0A0A]/80 backdrop-blur-xl">
      <Container className="items-center py-4">
        <div className="col-span-6 lg:col-span-4">
          <Link href="/" className="text-sm font-medium tracking-[-0.03em] text-[#F5F5F7]">
            Bonus Creative
          </Link>
        </div>
        <nav className="col-span-6 flex items-center justify-end gap-5 lg:col-span-8">
          <Link href="/reel" className="text-sm text-[#86868B] transition-colors hover:text-[#F5F5F7]">Reel</Link>
          <Link href="https://instagram.com/bonus_creative" className="text-sm text-[#86868B] transition-colors hover:text-[#F5F5F7]" target="_blank" rel="noreferrer">Instagram</Link>
          <Link href="https://www.youtube.com/channel/UC5OfYdrlVLZHthIdXeUUeYw/videos" className="text-sm text-[#86868B] transition-colors hover:text-[#F5F5F7]" target="_blank" rel="noreferrer">YouTube</Link>
        </nav>
      </Container>
    </header>
  );
}
