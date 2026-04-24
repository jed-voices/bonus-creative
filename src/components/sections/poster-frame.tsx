import Image from 'next/image';

interface PosterFrameProps {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  tagline: string;
  previewVideo?: string;
  priority?: boolean;
  sizes?: string;
}

export function PosterFrame({
  image,
  alt,
  eyebrow,
  title,
  tagline,
  previewVideo = '',
  priority = false,
  sizes = '(max-width: 1024px) 100vw, 50vw'
}: PosterFrameProps) {
  return (
    <div className="poster-frame relative aspect-[16/10] overflow-hidden bg-[var(--color-bg-primary)]">
      <Image
        src={image}
        alt={alt}
        fill
        priority={priority}
        className="object-cover saturate-[0.86] transition duration-700 group-hover:scale-[1.03]"
        sizes={sizes}
      />

      {previewVideo ? (
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-0 saturate-[0.86] transition duration-500 group-hover:opacity-100"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
        >
          <source src={previewVideo} type="video/mp4" />
        </video>
      ) : null}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(158,200,255,0.28),transparent_36%),linear-gradient(112deg,rgba(11,15,20,0.34),rgba(11,15,20,0.18)_34%,rgba(11,15,20,0.88)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[56%] bg-[linear-gradient(180deg,rgba(11,15,20,0),rgba(11,15,20,0.86))]" />

      <div className="poster-frame__border absolute rounded-[1.35rem] border border-white/15" />
      <div className="poster-frame__top-line absolute h-px bg-white/20" />
      <div className="poster-frame__bottom-line absolute h-px bg-[var(--accent)]/40" />

      <div className="poster-frame__content absolute grid gap-2">
        <div>
          <p className="poster-frame__eyebrow font-[var(--font-accent)] font-medium uppercase text-[var(--accent-strong)]">
            {eyebrow}
          </p>
          <p className="poster-frame__title mt-2 max-w-[13ch] font-[var(--font-display)] font-bold leading-[0.9] tracking-[-0.045em] text-[var(--foreground)]">
            {title}
          </p>
        </div>
        <p className="poster-frame__tagline max-w-xs font-medium leading-5 text-[var(--color-text-body)]">
          {tagline}
        </p>
      </div>
    </div>
  );
}
