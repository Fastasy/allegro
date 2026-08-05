import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { BrandStudio } from '@/views/BrandStudio';

export const metadata: Metadata = {
  title: 'Brand Color Studio | Allegro Digital',
  description: 'Design your custom brand color palette in real-time and preview how your high-converting website will look instantly.',
};

export default function BrandStudioPage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-zinc-400">Loading Brand Studio...</div>}>
      <BrandStudio />
    </Suspense>
  );
}
