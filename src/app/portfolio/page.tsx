import React from 'react';
import { Metadata } from 'next';
import { Portfolio } from '@/views/Portfolio';

export const metadata: Metadata = {
  title: 'Portfolio & Live Web Showcases | Allegro Digital Gqeberha',
  description: 'Explore the premium high-converting websites and live embedded previews built by Allegro Digital for South African business owners.',
};

export default function PortfolioPage() {
  return <Portfolio />;
}
