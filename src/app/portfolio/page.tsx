import React from 'react';
import { Metadata } from 'next';
import { Portfolio } from '@/views/Portfolio';

const SITE = 'https://www.allegrodigital.co.za';
const OG_IMAGE = `${SITE}/images/og-allegro-default.jpg`;

export const metadata: Metadata = {
  title: 'Portfolio & Live Web Showcases | Allegro Digital',
  description: 'Explore the premium high-converting websites and live embedded previews built by Allegro Digital for South African business owners.',
  alternates: {
    canonical: `${SITE}/portfolio`,
  },
  openGraph: {
    type: 'website',
    siteName: 'Allegro Digital',
    title: 'Portfolio & Live Web Showcases | Allegro Digital',
    description: 'Explore the premium high-converting websites and live embedded previews built by Allegro Digital for South African business owners.',
    url: `${SITE}/portfolio`,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Allegro Digital — Portfolio & Live Web Showcases',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio & Live Web Showcases | Allegro Digital',
    description: 'Explore the premium high-converting websites and live embedded previews built by Allegro Digital for South African business owners.',
    images: [OG_IMAGE],
  },
};

export default function PortfolioPage() {
  return <Portfolio />;
}
