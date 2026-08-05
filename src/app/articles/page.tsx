import React from 'react';
import { Metadata } from 'next';
import { ArticlesList } from '@/views/ArticlesList';

export const metadata: Metadata = {
  title: 'Blog & Insights | Allegro Digital PE',
  description: 'Read the latest insights on local SEO, web design, and digital marketing for businesses in Port Elizabeth and the Eastern Cape.',
};

export default function ArticlesPage() {
  return <ArticlesList />;
}
