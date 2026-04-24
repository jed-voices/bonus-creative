import Image from 'next/image';

interface BrandLogoProps {
  className?: string;
  priority?: boolean;
}

export function BrandLogo({ className = '', priority = false }: BrandLogoProps) {
  return (
    <Image
      src="/brand/bonus-creative-logo.png"
      alt="Bonus Creative logo"
      width={733}
      height={1200}
      priority={priority}
      unoptimized
      sizes="96px"
      className={`object-contain ${className}`.trim()}
    />
  );
}
