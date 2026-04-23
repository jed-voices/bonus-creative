'use client';

import { motion, type Transition } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  eager?: boolean;
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  eager = false
}: RevealProps) {
  const transition: Transition = {
    duration: eager ? 0.42 : 0.7,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    delay
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: eager ? 18 : 28 }}
      animate={eager ? { opacity: 1, y: 0 } : undefined}
      whileInView={eager ? undefined : { opacity: 1, y: 0 }}
      viewport={eager ? undefined : { once: true, amount: 0.22 }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
