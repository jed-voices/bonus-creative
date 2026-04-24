import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';

interface MagneticButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'ghost';
}

export function MagneticButton({ href, children, variant = 'primary' }: MagneticButtonProps) {
  const base =
    'magnetic-link ui-copy group inline-flex items-center gap-2 border transition-colors';
  const styles =
    variant === 'primary'
      ? 'button-primary'
      : 'button-secondary rounded-full px-5 py-3';

  return (
    <Link href={href} className={`${base} ${styles}`}>
      <span>{children}</span>
      <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}
