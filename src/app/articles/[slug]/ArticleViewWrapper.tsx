'use client';

import React from 'react';
import { useBooking } from '@/context/BookingContext';
import { ArticleView } from '@/views/ArticleView';

export function ArticleViewWrapper({ slug }: { slug: string }) {
  const { handleOpenBooking } = useBooking();
  return <ArticleView onOpenBooking={handleOpenBooking} slug={slug} />;
}
