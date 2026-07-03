import React from 'react';
import { Check, X, ShieldAlert, Sparkles, Trophy, ArrowRight } from 'lucide-react';

interface ComparisonTableProps {
  onOpenBooking: () => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ onOpenBooking }) => {
  const comparisonItems = [
    {
      feature: 'Delivery Speed',
      allegro: '🚀 7 Days Turnaround',
      traditional: '🐢 2 to 4 Months',
      allegroHighlight: true
    },
    {
      feature: 'Focus & Goal',
      allegro: '🎯 Phone Calls & Booked Appointments',
      traditional: '🎨 Pretty graphics with 0 lead strategy',
      allegroHighlight: true
    },
    {
      feature: 'Google SEO & Maps Optimization',
      allegro: '📍 Included (Walmer, Newton Park, PE Radius)',
      traditional: '❌ Extra R5,000/mo retainer charge',
      allegroHighlight: true
    },
    {
      feature: 'Instant WhatsApp & Call Action',
      allegro: '⚡ Pre-configured 1-Tap Mobile Routing',
      traditional: '❌ Basic slow email contact forms',
      allegroHighlight: true
    },
    {
      feature: 'Copywriting & Photos',
      allegro: '✍️ Done 100% For You (Local SA Copy)',
      traditional: '❌ "Provide us with all text & images"',
      allegroHighlight: true
    },
    {
      feature: 'Pricing & Transparency',
      allegro: '💎 Simple Fixed Package or Low Monthly',
      traditional: '💸 R30,000+ Upfront + Surprise Maintenance Fees',
      allegroHighlight: true
    },
    {
      feature: 'Local PE Support',
      allegro: '🇿🇦 100% Gqeberha / Port Elizabeth Based Team',
      traditional: '🌐 Offshored or distant call centers',
      allegroHighlight: true
    }
  ];

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-yellow-500/30 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5 text-yellow-400" /> The Allegro Difference
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why PE Businesses Choose <span className="text-yellow-400">Allegro Digital</span> Over Traditional Agencies
          </h2>
          <p className="mt-3 text-zinc-300 text-base sm:text-lg">
            Most local agencies charge tens of thousands for design and disappear. We build turnkey growth engines engineered to get you actual paying customers.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="glass-panel rounded-3xl border border-zinc-800 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-900">
                  <th className="py-5 px-6 text-sm font-extrabold text-zinc-300 w-1/3">
                    Feature / Growth Pillar
                  </th>
                  <th className="py-5 px-6 text-sm font-extrabold text-yellow-400 bg-black border-x border-yellow-500/30 w-1/3">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-yellow-400" />
                      <span>ALLEGRO DIGITAL</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 text-sm font-extrabold text-zinc-400 w-1/3">
                    <div className="flex items-center gap-1.5">
                      <ShieldAlert className="w-4 h-4 text-zinc-400" />
                      <span>Traditional Web Agencies</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800 text-xs sm:text-sm">
                {comparisonItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-zinc-900/50 transition-colors">
                    <td className="py-4 px-6 font-bold text-white">
                      {item.feature}
                    </td>
                    <td className="py-4 px-6 font-semibold text-yellow-300 bg-black/60 border-x border-yellow-500/20">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-yellow-400/20 text-yellow-400 flex items-center justify-center flex-shrink-0 font-bold">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-white font-bold">{item.allegro}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-zinc-400">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-zinc-800 text-zinc-300 flex items-center justify-center flex-shrink-0 font-bold">
                          <X className="w-3.5 h-3.5" />
                        </div>
                        <span>{item.traditional}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer Banner */}
          <div className="bg-zinc-900 p-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h4 className="text-sm sm:text-base font-bold text-white">
                Don't waste 3 months waiting for an agency that delivers zero leads.
              </h4>
              <p className="text-xs text-zinc-400">
                Get your Port Elizabeth business online and ranking on Google in 7 days.
              </p>
            </div>
            <button
              onClick={onOpenBooking}
              className="shimmer-btn text-black font-black text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg flex items-center gap-2 flex-shrink-0 cursor-pointer border border-yellow-300"
            >
              <span>Get Started In 7 Days</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
