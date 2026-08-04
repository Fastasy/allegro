import React from 'react';
import { Helmet } from 'react-helmet-async';
import InfiniteMenu, { InfiniteMenuItem } from '../components/InfiniteMenu';
import { Sparkles, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PORTFOLIO_ITEMS: InfiniteMenuItem[] = [
  {
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&h=600&fit=crop&sat=-100&auto=format',
    link: 'https://www.helpmyfinances.co.za',
    title: 'Help My Finances',
    description: 'A comprehensive South African personal finance portal and digital loan matching engine.'
  },
  {
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&h=600&fit=crop&sat=-100&auto=format',
    link: 'https://google.com/',
    title: 'Algoa Plumbers',
    description: 'High-converting emergency plumbing lead engine optimized for Gqeberha suburbs.'
  },
  {
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&h=600&fit=crop&sat=-100&auto=format',
    link: 'https://google.com/',
    title: 'Algoa Breeze B&B',
    description: 'Boutique guest house oceanfront direct booking engine in Summerstrand.'
  },
  {
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=600&h=600&fit=crop&sat=-100&auto=format',
    title: 'Cape Coast Legal',
    link: 'https://google.com/',
    description: 'Professional conveyancing and legal services site featuring online consultation booking.'
  },
  {
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600&h=600&fit=crop&sat=-100&auto=format',
    title: 'Bay Dental Care',
    link: 'https://google.com/',
    description: 'Patient booking platform and before-after aesthetics showcase for clinical care.'
  }
];

export const Portfolio: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio & Live Web Showcases | Allegro Digital Gqeberha</title>
        <meta 
          name="description" 
          content="Explore the premium high-converting websites and lead generation engines built by Allegro Digital for South African business owners." 
        />
      </Helmet>

      <main className="min-h-[calc(100vh-80px)] bg-black text-white relative flex flex-col justify-between overflow-hidden">
        
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#242427_1px,transparent_1px),linear-gradient(to_bottom,#242427_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

        {/* Header Header */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-10 pb-4 w-full text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-yellow-500/30 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-4 animate-pulse">
            <Sparkles className="w-3.5 h-3.5" /> Interactive Showcase
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-3">
            Our <span className="text-yellow-400">Launch Portfolio</span>
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
            Click and drag the sphere to rotate through our active client sites and Gqeberha lead engines. Click the arrow button to launch the live site.
          </p>
        </div>

        {/* Interactive Menu Canvas Container */}
        <div className="relative flex-grow min-h-[500px] md:min-h-[600px] w-full flex items-center justify-center">
          <div className="absolute inset-0 w-full h-full">
            <InfiniteMenu items={PORTFOLIO_ITEMS} scale={1.1} />
          </div>
        </div>

        {/* Footer/Navigation Info */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-900 bg-black/50 backdrop-blur-sm">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-xs font-bold text-zinc-400 hover:text-yellow-400 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <p className="text-[10px] text-zinc-500 font-medium">
            Drag to rotate • Pinch to zoom • Click arrow to visit website
          </p>
        </div>

      </main>
    </>
  );
};
