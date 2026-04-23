import { AboutSection } from '@/components/sections/about-section';
import { ContactSection } from '@/components/sections/contact-section';
import { HeroSection } from '@/components/sections/hero-section';
import { ServicesSection } from '@/components/sections/services-section';
import { SiteHeader } from '@/components/sections/site-header';
import { WorkGrid } from '@/components/sections/work-grid';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <SiteHeader />
      <HeroSection />
      <WorkGrid />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
