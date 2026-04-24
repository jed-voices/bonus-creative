import { Reveal } from '@/components/ui/reveal';

interface SectionIntroProps {
  eyebrow?: string;
  title: string;
  copy?: string;
  className?: string;
}

export function SectionIntro({
  eyebrow,
  title,
  copy,
  className = ''
}: SectionIntroProps) {
  return (
    <div className={`flex flex-col gap-4 ${className}`.trim()}>
      {eyebrow ? (
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <h2 className="display-lg max-w-[12ch]">{title}</h2>
      </Reveal>
      {copy ? (
        <Reveal delay={0.1}>
          <p className="body-lg max-w-3xl">{copy}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
