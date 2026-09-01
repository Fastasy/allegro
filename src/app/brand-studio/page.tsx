import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { BrandStudio } from '@/views/BrandStudio';

const SITE = 'https://www.allegrodigital.co.za';
const OG_IMAGE = `${SITE}/images/og-allegro-default.jpg`;

export const metadata: Metadata = {
  title: 'Brand Color Studio: Preview Your Palette | Allegro Digital',
  description: 'Preview your custom brand color palette live and see how a high-converting South African business website looks in your colours. Free, instant, no signup.',
  alternates: {
    canonical: `${SITE}/brand-studio`,
  },
  openGraph: {
    type: 'website',
    siteName: 'Allegro Digital',
    title: 'Brand Color Studio: Preview Your Palette | Allegro Digital',
    description: 'Preview your custom brand color palette live and see how a high-converting South African business website looks in your colours. Free, instant, no signup.',
    url: `${SITE}/brand-studio`,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Allegro Digital — Brand Color Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand Color Studio: Preview Your Palette | Allegro Digital',
    description: 'Preview your custom brand color palette live and see how a high-converting South African business website looks in your colours. Free, instant, no signup.',
    images: [OG_IMAGE],
  },
};

export const dynamic = 'force-dynamic';

export default function BrandStudioPage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-zinc-400">Loading Brand Studio...</div>}>
      <BrandStudio />
    </Suspense>
  );
}
