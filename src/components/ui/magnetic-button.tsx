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
    'magnetic-link group inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm tracking-[-0.02em] transition-colors';
  const styles =
    variant === 'primary'
      ? 'border-[#2E5BFF] bg-[#2E5BFF] text-[#F5F5F7] hover:bg-[#1f47d9] hover:border-[#1f47d9]'
      : 'border-white/10 bg-white/[0.03] text-[#F5F5F7] hover:border-white/20 hover:bg-white/[0.06]';

  return (
    <Link href={href} className={`${base} ${styles}`}>
      <span>{children}</span>
      <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}
