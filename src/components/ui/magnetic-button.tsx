'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { MouseEvent, ReactNode } from 'react';

interface MagneticButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'ghost';
}

export function MagneticButton({ href, children, variant = 'primary' }: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 180, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 180, damping: 18, mass: 0.4 });

  function handleMove(event: MouseEvent<HTMLAnchorElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const base = 'inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm tracking-[-0.02em] transition-colors';
  const styles =
    variant === 'primary'
      ? 'border-[#2E5BFF] bg-[#2E5BFF] text-[#F5F5F7] hover:bg-[#1f47d9] hover:border-[#1f47d9]'
      : 'border-white/10 bg-white/[0.03] text-[#F5F5F7] hover:border-white/20 hover:bg-white/[0.06]';

  return (
    <motion.div style={{ x: springX, y: springY }}>
      <Link href={href} onMouseMove={handleMove} onMouseLeave={handleLeave} className={`${base} ${styles}`}>
        <span>{children}</span>
        <ArrowUpRight size={16} />
      </Link>
    </motion.div>
  );
}
