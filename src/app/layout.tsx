/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { SiteFooter } from '@/components/layout/site-footer';
import { SiteHeader } from '@/components/sections/site-header';
import { sameAs, seo, site } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: seo.homeTitle,
    template: '%s | Bonus Creative'
  },
  description: seo.homeDescription,
  openGraph: {
    title: seo.homeTitle,
    description: seo.homeDescription,
    url: site.domain,
    siteName: 'Bonus Creative',
    images: ['/posters/reel-landscape.svg'],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.homeTitle,
    description: seo.homeDescription,
    images: ['/posters/reel-landscape.svg']
  },
  icons: {
    icon: '/favicon.svg'
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: site.name,
    url: site.domain,
    areaServed: ['Oklahoma', 'Oklahoma City'],
    email: site.email,
    telephone: site.phone,
    description: site.description,
    sameAs,
    serviceType: [
      'Oklahoma video producer',
      'Oklahoma City video production',
      'Branded films',
      'Documentary filmmaking',
      'Nonprofit video production',
      'Church media production',
      'Event video production'
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Inter+Tight:wght@600;700;800;900&family=Manrope:wght@400;500;600;700&family=Sora:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[var(--background)] text-[var(--foreground)] antialiased">
        <a
          href="#main-content"
          className="absolute left-4 top-4 z-[100] -translate-y-16 rounded-full bg-[var(--foreground)] px-4 py-2 text-sm text-[var(--background)] transition focus:translate-y-0"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
