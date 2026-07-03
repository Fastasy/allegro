import React from 'react';
import { Sparkles, ArrowRight, PhoneCall } from 'lucide-react';

interface NotificationBarProps {
  onOpenBooking: () => void;
}

export const NotificationBar: React.FC<NotificationBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="bg-gradient-to-r from-zinc-950 via-yellow-500 to-yellow-400 text-black text-xs sm:text-sm py-2 px-4 relative z-50 font-semibold shadow-md border-b border-yellow-500/30">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2 font-bold text-black">
          <span className="bg-black text-yellow-400 font-extrabold px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wide flex items-center gap-1 shadow">
            <Sparkles className="w-3 h-3 text-yellow-400" /> Port Elizabeth Exclusive
          </span>
          <span className="hidden sm:inline text-black">
            Get a high-converting website & top Google Maps rank in <strong className="underline decoration-black decoration-2">7 Days</strong>.
          </span>
          <span className="sm:hidden text-black">7-Day Local PE Web & Google SEO Turnaround</span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="tel:0415810920"
            className="hidden md:flex items-center gap-1 text-black font-extrabold hover:underline text-xs"
          >
            <PhoneCall className="w-3.5 h-3.5 text-black" />
            <span>041 581 0920</span>
          </a>
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-1 bg-black text-yellow-400 px-3 py-1 rounded-full text-xs font-extrabold transition-all hover:scale-105 cursor-pointer shadow-md"
          >
            <span>Claim Free Strategy Call</span>
            <ArrowRight className="w-3.5 h-3.5 text-yellow-400" />
          </button>
        </div>
      </div>
    </div>
  );
};
