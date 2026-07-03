import React from 'react';
import { PE_SUBURBS, PE_INDUSTRIES } from '../data/peData';
import { ShieldCheck, MapPin, Wrench, Building2, Scale, HeartPulse, Trophy, Users, Clock, Zap } from 'lucide-react';

interface SocialProofProps {
  onOpenBooking: () => void;
}

export const SocialProof: React.FC<SocialProofProps> = ({ onOpenBooking }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Wrench': return <Wrench className="w-5 h-5 text-yellow-400" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-yellow-400" />;
      case 'Scale': return <Scale className="w-5 h-5 text-yellow-400" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-yellow-400" />;
      default: return <Zap className="w-5 h-5 text-yellow-400" />;
    }
  };

  return (
    <section className="py-16 bg-black text-white relative overflow-hidden">
      
      {/* Top Ticker: Suburbs Marquee */}
      <div className="mb-14 overflow-hidden border-y border-zinc-800 bg-zinc-950 py-3">
        <div className="flex items-center gap-3 animate-marquee whitespace-nowrap">
          {PE_SUBURBS.concat(PE_SUBURBS).map((suburb, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black border border-zinc-800 text-xs font-semibold text-zinc-300"
            >
              <MapPin className="w-3.5 h-3.5 text-yellow-400" />
              <span>{suburb}, Port Elizabeth</span>
              <span className="text-yellow-400 font-mono text-[10px]">● Active</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Metric Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="glass-panel p-5 rounded-2xl text-center border border-zinc-800 hover:border-yellow-400 transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading gradient-text-accent">
              98.4%
            </div>
            <div className="text-xs text-zinc-400 font-medium mt-1">
              Google Maps Visibility Boost
            </div>
            <div className="text-[10px] text-yellow-400 mt-1 flex items-center justify-center gap-1 font-bold">
              <Trophy className="w-3 h-3" /> Top 3 Search Focus
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl text-center border border-zinc-800 hover:border-yellow-400 transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              3.4x
            </div>
            <div className="text-xs text-zinc-400 font-medium mt-1">
              Average Monthly Lead Volume
            </div>
            <div className="text-[10px] text-zinc-300 mt-1 flex items-center justify-center gap-1">
              <Users className="w-3 h-3 text-yellow-400" /> Calls & WhatsApp Enquiries
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl text-center border border-zinc-800 hover:border-yellow-400 transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold text-yellow-400 font-heading">
              7 Days
            </div>
            <div className="text-xs text-zinc-400 font-medium mt-1">
              Average Turnaround Time
            </div>
            <div className="text-[10px] text-zinc-300 mt-1 flex items-center justify-center gap-1">
              <Clock className="w-3 h-3 text-yellow-400" /> Design to Live Website
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl text-center border border-zinc-800 hover:border-yellow-400 transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              R4.2M+
            </div>
            <div className="text-xs text-zinc-400 font-medium mt-1">
              New Revenue Generated for PE Clients
            </div>
            <div className="text-[10px] text-yellow-400 mt-1 flex items-center justify-center gap-1 font-bold">
              <ShieldCheck className="w-3 h-3" /> Verified Local Results
            </div>
          </div>
        </div>

        {/* Local PE Sector Cards */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Specially Engineered For Port Elizabeth Small Businesses
          </h3>
          <p className="text-zinc-400 text-sm mt-2">
            Whether you run a plumbing service in Lorraine or a luxury guest house in Summerstrand, we build landing pages that make local customers stop browsing and start booking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PE_INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              className="glass-panel p-6 rounded-2xl border border-zinc-800 hover:border-yellow-400/60 transition-all hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-black border border-zinc-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(ind.iconName)}
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider">{ind.suburb}</span>
                  <span className="text-[10px] bg-zinc-900 text-zinc-300 px-2 py-0.5 rounded border border-zinc-800">
                    ~{ind.monthlySearchesPE} searches/mo
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {ind.name}
                </h4>

                <p className="text-xs text-zinc-300 mb-4 line-clamp-2">
                  {ind.headline}
                </p>

                <div className="space-y-1.5 mb-4 border-t border-zinc-800 pt-3">
                  {ind.features.map((feat, i) => (
                    <div key={i} className="text-[11px] text-zinc-300 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full bg-zinc-900 hover:bg-yellow-400 text-zinc-200 hover:text-black font-extrabold text-xs py-2.5 rounded-xl border border-zinc-700 hover:border-yellow-400 transition-colors cursor-pointer text-center"
              >
                Get Website For {ind.name}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
