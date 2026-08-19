import React from 'react';
import { Metadata } from 'next';
import { ArticlesList } from '@/views/ArticlesList';
import { articles } from '@/data/articlesData';

const SITE = 'https://www.allegrodigital.co.za';
const OG_IMAGE = `${SITE}/images/og-allegro-default.jpg`;

export const metadata: Metadata = {
  title: 'Blog & Insights | Allegro Digital PE',
  description: 'Read the latest insights on local SEO, web design, and digital marketing for businesses in Port Elizabeth and the Eastern Cape.',
  alternates: {
    canonical: `${SITE}/articles`,
  },
  openGraph: {
    type: 'website',
    siteName: 'Allegro Digital',
    title: 'Blog & Insights | Allegro Digital PE',
    description: 'Read the latest insights on local SEO, web design, and digital marketing for businesses in Port Elizabeth and the Eastern Cape.',
    url: `${SITE}/articles`,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Allegro Digital — Blog & Insights',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog & Insights | Allegro Digital PE',
    description: 'Read the latest insights on local SEO, web design, and digital marketing for businesses in Port Elizabeth and the Eastern Cape.',
    images: [OG_IMAGE],
  },
};

export default function ArticlesPage() {
  // ItemList JSON-LD makes the full article cluster machine-readable for AI engines
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Allegro Digital — Articles & Insights',
    'description': 'Local SEO, web design and digital marketing guides for South African businesses.',
    'itemListElement': articles.map((article, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'url': `https://www.allegrodigital.co.za/articles/${article.slug}`,
      'name': article.title,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <ArticlesList />
    </>
  );
}
