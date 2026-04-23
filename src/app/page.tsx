import { AboutSection } from '@/components/sections/about-section';
import { ContactSection } from '@/components/sections/contact-section';
import { HeroSection } from '@/components/sections/hero-section';
import { ServicesSection } from '@/components/sections/services-section';
import { WorkGrid } from '@/components/sections/work-grid';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WorkGrid />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
