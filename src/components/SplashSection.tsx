import React from 'react';
import { ChevronDown } from 'lucide-react';

export const SplashSection: React.FC = () => {
  return (
    <section className="relative h-screen bg-black flex flex-col items-center justify-center overflow-hidden border-b border-zinc-900">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="w-40 h-40 rounded-3xl overflow-hidden flex items-center justify-center bg-white/5 border border-white/10 shadow-2xl glow-yellow animate-float">
          <img src="/logo.png" alt="Allegro Digital Logo" className="w-full h-full object-contain" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-heading">
          ALLEGRO<span className="text-yellow-400">DIGITAL</span>
        </h1>
        <p className="text-zinc-400 text-lg sm:text-xl font-medium tracking-wide mt-2">
          Don't just be online, <span className="text-yellow-400 font-bold italic">Bee</span> seen.
        </p>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Scroll Down</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
};
