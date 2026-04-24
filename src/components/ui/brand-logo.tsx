import Image from 'next/image';

interface BrandLogoProps {
  className?: string;
  priority?: boolean;
}

export function BrandLogo({ className = '', priority = false }: BrandLogoProps) {
  return (
    <Image
      src="/brand/bonus-creative-logo.webp"
      alt="Bonus Creative logo"
      width={321}
      height={180}
      priority={priority}
      unoptimized
      sizes="(max-width: 768px) 120px, 160px"
      className={`h-auto w-[120px] object-contain md:w-[144px] ${className}`.trim()}
    />
  );
}
