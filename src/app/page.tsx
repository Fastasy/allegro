import React from 'react';
import { Metadata } from 'next';
import { HomeClient } from './HomeClient';
import { FAQS } from '@/data/peData';

const SITE = 'https://www.allegrodigital.co.za';
const OG_IMAGE = `${SITE}/images/og-allegro-default.jpg`;

export const metadata: Metadata = {
  title: 'Web Design Port Elizabeth (Gqeberha) | Allegro Digital',
  description: 'Get a high-converting, professional website in Port Elizabeth for just R1,499 upfront and R800/mo. Fast turnaround, mobile-optimized, and local SEO ready.',
  alternates: {
    canonical: `${SITE}/`,
  },
  openGraph: {
    type: 'website',
    siteName: 'Allegro Digital',
    title: 'Web Design Port Elizabeth (Gqeberha) | Allegro Digital',
    description: 'Get a high-converting, professional website in Port Elizabeth for just R1,499 upfront and R800/mo. Fast turnaround, mobile-optimized, and local SEO ready.',
    url: `${SITE}/`,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Allegro Digital — Web Design Port Elizabeth',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Port Elizabeth (Gqeberha) | Allegro Digital',
    description: 'Get a high-converting, professional website in Port Elizabeth for just R1,499 upfront and R800/mo. Fast turnaround, mobile-optimized, and local SEO ready.',
    images: [OG_IMAGE],
  },
};

export default function HomePage() {
  // FAQPage JSON-LD matches the VISIBLE FAQ section rendered by <Faq /> (src/data/peData.ts -> FAQS)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': FAQS.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeClient />
    </>
  );
}
