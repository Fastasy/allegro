import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { articles } from '@/data/articlesData';
import { ArticleViewWrapper } from './ArticleViewWrapper';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) {
    return {
      title: 'Article Not Found | Allegro Digital PE',
    };
  }

  const url = `https://www.allegrodigital.co.za/articles/${slug}`;
  const title = article.metaTitle || `${article.title} | Allegro Digital`;

  return {
    title,
    description: article.metaDescription,
    keywords: article.tags,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: article.metaDescription,
      url,
      siteName: 'Allegro Digital',
      type: 'article',
      publishedTime: article.date,
      authors: [article.author || 'Allegro Digital Team'],
      images: article.imageUrl ? [{ url: article.imageUrl }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: article.metaDescription,
      images: article.imageUrl ? [article.imageUrl] : [],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) {
    notFound();
  }

  const articleUrl = `https://www.allegrodigital.co.za/articles/${slug}`;

  // JSON-LD for BlogPosting / Article
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': articleUrl,
    'headline': article.title,
    'description': article.metaDescription,
    'url': articleUrl,
    'inLanguage': 'en-ZA',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    'datePublished': article.date,
    'dateModified': article.date,
    'keywords': article.tags ? article.tags.join(', ') : undefined,
    'articleSection': article.category || undefined,
    'author': {
      '@type': 'Organization',
      '@id': 'https://www.allegrodigital.co.za/#organization',
      'name': article.author || 'Allegro Digital Team',
      'url': 'https://www.allegrodigital.co.za',
    },
    'publisher': {
      '@type': 'Organization',
      '@id': 'https://www.allegrodigital.co.za/#organization',
      'name': 'Allegro Digital',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.allegrodigital.co.za/logo.png',
      },
    },
    'image': article.imageUrl ? `https://www.allegrodigital.co.za${article.imageUrl}` : undefined,
  };

  // JSON-LD for BreadcrumbList
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://www.allegrodigital.co.za',
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Articles',
        'item': 'https://www.allegrodigital.co.za/articles',
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': article.title,
        'item': articleUrl,
      },
    ],
  };

  // JSON-LD for FAQPage if FAQs exist
  const faqSchema = article.faqs && article.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': article.faqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer,
      },
    })),
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <ArticleViewWrapper slug={slug} />
    </>
  );
}
