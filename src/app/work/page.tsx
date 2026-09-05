import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { WorkShowcase } from '@/views/WorkShowcase';

const SITE = 'https://www.allegrodigital.co.za';
const OG_IMAGE = `${SITE}/images/og-allegro-default.jpg`;

export const metadata: Metadata = {
  title: 'Our Work: Websites We\'ve Built | Allegro Digital',
  description: 'See real websites built by Allegro Digital for South African businesses — salons, electricians, kitchens, safety training, property and more. Every site live, mobile-friendly and built to convert.',
  alternates: {
    canonical: `${SITE}/work`,
  },
  openGraph: {
    type: 'website',
    siteName: 'Allegro Digital',
    title: 'Our Work: Websites We\'ve Built | Allegro Digital',
    description: 'See real websites built by Allegro Digital for South African businesses. Every site live, mobile-friendly and built to convert.',
    url: `${SITE}/work`,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Allegro Digital — Our Work',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Work: Websites We\'ve Built | Allegro Digital',
    description: 'See real websites built by Allegro Digital for South African businesses.',
    images: [OG_IMAGE],
  },
};

export default function WorkPage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-zinc-400">Loading our work...</div>}>
      <WorkShowcase />
    </Suspense>
  );
}
