import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { PortfolioSlider } from '../components/PortfolioSlider';

export const Portfolio: React.FC = () => {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#242427_1px,transparent_1px),linear-gradient(to_bottom,#242427_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="relative z-10">
        {/* Page Header */}
        <div className="mx-auto max-w-3xl px-4 pt-16 pb-4 text-center sm:px-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-yellow-500/30 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Live Client Work
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-heading">
            Our <span className="text-yellow-400">Portfolio</span>
          </h1>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base">
            Real websites, built for real South African businesses. Drag through
            the sites below — every one is live and working right now.
          </p>
        </div>

        <PortfolioSlider />

        {/* Bottom CTA */}
        <div className="mx-auto max-w-2xl px-4 pb-20 text-center sm:px-6">
          <div className="rounded-3xl border border-yellow-400/25 bg-gradient-to-b from-white/[0.04] to-transparent p-8 sm:p-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
              Your business could be next.
            </h2>
            <p className="mt-3 text-zinc-400 text-sm sm:text-base">
              We build high-converting websites for local businesses from
              R1,499 once-off + R800/mo. No bloated agency fees.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/27823006996?text=Hi%20Allegro%20Digital%2C%20I%27d%20like%20a%20quote%20for%20my%20business%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-btn w-full sm:w-auto px-8 py-4 rounded-xl font-black text-base flex items-center justify-center gap-2"
              >
                Get a Quote on WhatsApp
              </a>
              <Link
                href="/"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-zinc-100 transition flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
