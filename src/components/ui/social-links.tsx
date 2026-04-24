import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';

const socialLinks = [
  {
    href: site.instagram,
    label: 'Instagram',
    icon: '/icons/instagram-icon.png',
    width: 181,
    height: 181,
    className: 'h-[17px] w-[17px]'
  },
  {
    href: site.youtube,
    label: 'YouTube',
    icon: '/icons/youtube-icon.png',
    width: 685,
    height: 478,
    className: 'h-[16px] w-[23px]'
  }
] as const;

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className = '' }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`.trim()}>
      {socialLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] opacity-75 transition hover:border-[var(--line-strong)] hover:bg-[var(--surface-hover)] hover:opacity-100"
          target="_blank"
          rel="noreferrer"
          aria-label={link.label}
        >
          <Image
            src={link.icon}
            alt=""
            width={link.width}
            height={link.height}
            className={link.className}
            unoptimized
          />
        </Link>
      ))}
    </div>
  );
}
