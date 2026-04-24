import type { CSSProperties, ReactNode } from 'react';

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
  const style = {
    '--reveal-delay': `${delay}s`,
    '--reveal-duration': `${eager ? 0.42 : 0.7}s`,
    '--reveal-offset': `${eager ? 18 : 28}px`
  } as CSSProperties;

  return (
    <div className={['reveal', eager ? 'reveal-eager' : '', className].filter(Boolean).join(' ')} style={style}>
      {children}
    </div>
  );
}
