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
      ? 'border-[var(--accent)] bg-[var(--accent)] text-[var(--foreground)] hover:bg-[var(--accent-strong)] hover:border-[var(--accent-strong)]'
      : 'border-[var(--line)] bg-[var(--surface)] text-[var(--foreground)] hover:border-[var(--line-strong)] hover:bg-[var(--surface-hover)]';

  return (
    <Link href={href} className={`${base} ${styles}`}>
      <span>{children}</span>
      <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}
