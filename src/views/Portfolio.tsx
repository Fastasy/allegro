'use client';

import React, { useState, useEffect } from 'react';
import InfiniteMenu, { InfiniteMenuItem } from '../components/InfiniteMenu';
import { Sparkles, ArrowLeft, ExternalLink, Globe, ShieldCheck, Play } from 'lucide-react';
import Link from 'next/link';

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
  const [activeItem, setActiveItem] = useState<InfiniteMenuItem>(PORTFOLIO_ITEMS[0]);
  const [loadPreview, setLoadPreview] = useState(false);

  // Reset live preview load state whenever active item changes to keep it fast
  useEffect(() => {
    setLoadPreview(false);
  }, [activeItem]);

  const handleActiveItemChange = (item: InfiniteMenuItem) => {
    setActiveItem(item);
  };

  return (
    <>
      <main className="min-h-[calc(100vh-80px)] bg-black text-white relative flex flex-col justify-between overflow-hidden">
        
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#242427_1px,transparent_1px),linear-gradient(to_bottom,#242427_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

        {/* Layout Grid */}
        <div className="relative z-10 flex-grow grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full items-stretch">
          
          {/* Left Column: Menu Selector (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-zinc-950/80 border border-zinc-900 rounded-3xl p-6 relative overflow-hidden backdrop-blur-md">
            
            {/* Title / Description */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-yellow-500/30 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-4 animate-pulse">
                <Sparkles className="w-3.5 h-3.5" /> Interactive Showcase
              </div>
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-2">
                Our <span className="text-yellow-400">Portfolio</span>
              </h1>
              <p className="text-zinc-400 text-xs sm:text-sm">
                Drag the sphere to rotate through active client sites. Focused circles morph smoothly into squares. Previews load automatically on the right.
              </p>
            </div>

            {/* Menu container */}
            <div className="relative w-full h-[300px] sm:h-[340px] lg:h-[380px] my-2 flex items-center justify-center">
              <div className="absolute inset-0 w-full h-full">
                <InfiniteMenu 
                  items={PORTFOLIO_ITEMS} 
                  scale={0.9} 
                  onActiveItemChange={handleActiveItemChange}
                />
              </div>
            </div>

            {/* Active Item Details Card */}
            {activeItem && (
              <div className="bg-zinc-900 border border-zinc-800/80 rounded-2xl p-5 mb-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-extrabold text-white tracking-tight font-heading">{activeItem.title}</h2>
                  <a 
                    href={activeItem.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-yellow-400 hover:text-yellow-300 transition-colors"
                    title="Open Live Site"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {activeItem.description}
                </p>
              </div>
            )}

            {/* Navigation and tips */}
            <div className="flex justify-between items-center pt-4">
              <Link 
                href="/" 
                className="flex items-center gap-2 text-xs font-bold text-zinc-400 hover:text-yellow-400 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>
              <span className="text-[10px] text-zinc-500 font-medium">
                Pinch/Scroll to zoom • Drag to rotate
              </span>
            </div>

          </div>

          {/* Right Column: Embedded Preview (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col bg-zinc-950/80 border border-zinc-900 rounded-3xl overflow-hidden backdrop-blur-md">
            
            {/* Browser Header Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>

              {/* URL Address Bar */}
              <div className="flex items-center gap-2 bg-black px-4 py-1.5 rounded-lg border border-zinc-800 text-[11px] font-mono text-zinc-400 w-2/3 max-w-sm justify-center">
                <Globe className="w-3 h-3 text-zinc-500" />
                <span className="truncate">{activeItem.link.replace('https://', '')}</span>
                <ShieldCheck className="w-3 h-3 text-emerald-500" />
              </div>

              {/* External Visit Button */}
              <a 
                href={activeItem.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-bold text-yellow-400 hover:text-yellow-300 transition-colors"
                title="Open in new window"
              >
                <span className="hidden sm:inline">Visit Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Embedded Iframe Area */}
            <div className="flex-grow bg-zinc-900 relative min-h-[400px]">
              
              {loadPreview && activeItem.link && activeItem.link !== 'https://google.com/' ? (
                <iframe 
                  src={activeItem.link} 
                  title={activeItem.title}
                  className="w-full h-full border-none absolute inset-0 bg-white"
                  sandbox="allow-scripts allow-same-origin allow-forms"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-zinc-950">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4">
                    <Globe className="w-8 h-8 text-yellow-400 animate-pulse" />
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-2 font-heading">{activeItem.title}</h3>
                  <p className="text-zinc-400 text-xs sm:text-sm max-w-sm mb-8 leading-relaxed">
                    Click the button below to load the live website preview directly inside this window.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 items-center">
                    <button 
                      onClick={() => setLoadPreview(true)}
                      className="px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold text-xs rounded-xl flex items-center gap-2 transition-all hover:scale-105 cursor-pointer shadow-lg shadow-yellow-400/10"
                    >
                      <Play className="w-3.5 h-3.5 fill-black" />
                      <span>Load Interactive Preview</span>
                    </button>
                    
                    <a 
                      href={activeItem.link}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 font-extrabold text-xs rounded-xl flex items-center gap-2 transition-all hover:scale-105"
                    >
                      <span>Open Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

      </main>
    </>
  );
};
