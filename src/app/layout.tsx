import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { site } from '@/lib/site';

const geist = Geist({
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: 'Bonus Creative',
    template: '%s | Bonus Creative'
  },
  description:
    'Swiss-modern video production website for Bonus Creative, led by Bo Wright.',
  openGraph: {
    title: 'Bonus Creative',
    description:
      'Swiss-modern video production website for Bonus Creative, led by Bo Wright.',
    url: site.domain,
    siteName: 'Bonus Creative',
    images: ['/posters/reel-landscape.svg'],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bonus Creative',
    description:
      'Swiss-modern video production website for Bonus Creative, led by Bo Wright.',
    images: ['/posters/reel-landscape.svg']
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.className} bg-[#0A0A0A] text-[#F5F5F7] antialiased`}>{children}</body>
    </html>
  );
}
