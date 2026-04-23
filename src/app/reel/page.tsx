import { site } from '@/lib/site';
import { Container } from '@/components/ui/container';

export default function ReelPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] py-10 md:py-16">
      <Container>
        <div className="col-span-12 flex flex-col gap-5 lg:col-span-10 lg:col-start-2">
          <p className="eyebrow">Showreel</p>
          <h1 className="display-lg max-w-[12ch]">Bo Wright landscape highlight reel.</h1>
          <p className="body-lg max-w-3xl">
            A dedicated playback page built for clean presentation, fast loading, and a cinematic frame that keeps the work at the center.
          </p>
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
        </div>
      </Container>
    </main>
  );
}
