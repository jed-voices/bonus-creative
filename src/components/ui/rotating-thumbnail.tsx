'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface RotatingThumbnailProps {
  images: readonly string[];
  alt: string;
  className?: string;
  sizes: string;
  intervalMs?: number;
  staggerMs?: number;
}

export function RotatingThumbnail({
  images,
  alt,
  className = 'object-cover',
  sizes,
  intervalMs = 8500,
  staggerMs = 0
}: RotatingThumbnailProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length <= 1) {
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (prefersReducedMotion.matches) {
      return;
    }

    let interval: number | undefined;
    const timeout = window.setTimeout(() => {
      setActive((current) => (current + 1) % images.length);
      interval = window.setInterval(() => {
        setActive((current) => (current + 1) % images.length);
      }, intervalMs);
    }, staggerMs);

    return () => {
      window.clearTimeout(timeout);
      if (interval) {
        window.clearInterval(interval);
      }
    };
  }, [images.length, intervalMs, staggerMs]);

  return images.map((image, index) => (
    <Image
      key={image}
      src={image}
      alt={index === active ? alt : ''}
      fill
      aria-hidden={index === active ? undefined : true}
      className={`${className} transition-[opacity,transform] duration-1000 ${
        index === active ? 'opacity-100' : 'opacity-0'
      }`}
      sizes={sizes}
    />
  ));
}
