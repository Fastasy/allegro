import React from 'react';
import { Metadata } from 'next';
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
  return {
    title: article.metaTitle || `${article.title} | Allegro Digital`,
    description: article.metaDescription,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <ArticleViewWrapper slug={slug} />;
}
