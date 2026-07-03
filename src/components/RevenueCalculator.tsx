import React, { useState } from 'react';
import { PE_SUBURBS } from '../data/peData';
import { Calculator, TrendingUp, ArrowRight, MapPin, Sparkles, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface RevenueCalculatorProps {
  onOpenBookingWithDetails: (suburb: string, industry: string, estimatedLoss: number) => void;
}

export const RevenueCalculator: React.FC<RevenueCalculatorProps> = ({ onOpenBookingWithDetails }) => {
  const [selectedSuburb, setSelectedSuburb] = useState<string>('Walmer');
  const [industry, setIndustry] = useState<string>('Trades (Plumbing / Electrical / Solar)');
  const [avgCustomerValue, setAvgCustomerValue] = useState<number>(2500);
  const [estimatedMissedCalls, setEstimatedMissedCalls] = useState<number>(5);

  // Dynamic calculations
  const monthlyMissedCustomers = estimatedMissedCalls * 4;
  const monthlyLostRevenue = monthlyMissedCustomers * avgCustomerValue;
  const estimatedAnnualLoss = monthlyLostRevenue * 12;
  const projectedNewLeads = Math.round(monthlyMissedCustomers * 1.8);
  const projectedNewRevenue = projectedNewLeads * avgCustomerValue;

  const handleClaimArea = () => {
    onOpenBookingWithDetails(selectedSuburb, industry, monthlyLostRevenue);
  };

  return (
    <section id="calculator" className="py-20 relative overflow-hidden bg-black border-y border-zinc-800 text-white">
      {/* Background Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-yellow-500/30 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-yellow-400" /> Interactive Port Elizabeth Revenue Loss Tool
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How Much Revenue Is Your Business Missing In <span className="text-yellow-400">{selectedSuburb}</span>?
          </h2>
          <p className="mt-3 text-zinc-300 text-base sm:text-lg">
            Every day in Port Elizabeth, hundreds of residents search Google Maps for local services. If you don't have a high-converting website, that business automatically goes to your closest competitors.
          </p>
        </div>

        {/* Interactive Calculator Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Form (Left 7 cols) */}
          <div className="lg:col-span-7 bg-zinc-950 p-6 sm:p-8 rounded-2xl border border-zinc-800 space-y-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-400" /> Select Your Business Parameters
              </h3>

              <div className="space-y-5">
                
                {/* Suburb Selector */}
                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-yellow-400" /> Select Your Port Elizabeth Suburb:
                  </label>
                  <select
                    value={selectedSuburb}
                    onChange={(e) => setSelectedSuburb(e.target.value)}
                    className="w-full bg-black border border-zinc-700 focus:border-yellow-400 text-white rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-yellow-400/30 outline-none transition-all cursor-pointer"
                  >
                    {PE_SUBURBS.map((sub) => (
                      <option key={sub} value={sub} className="bg-black text-white">
                        {sub} (Port Elizabeth / Gqeberha)
                      </option>
                    ))}
                  </select>
                </div>

                {/* Industry Selector */}
                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                    Industry / Business Type:
                  </label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full bg-black border border-zinc-700 focus:border-yellow-400 text-white rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-yellow-400/30 outline-none transition-all cursor-pointer"
                  >
                    <option value="Trades (Plumbing / Electrical / Solar)">Trades (Plumbing / Electrical / Solar)</option>
                    <option value="B&B / Accommodation / Hospitality">B&B / Accommodation / Guest House</option>
                    <option value="Legal & Conveyancing / Financial">Legal & Conveyancing / Financial</option>
                    <option value="Medical / Dental / Beauty Practice">Medical / Dental / Beauty Practice</option>
                    <option value="Auto Repair & Performance">Auto Repair & Performance</option>
                    <option value="Construction & Renovations">Construction & Renovations</option>
                    <option value="Other Local PE Service">Other Local PE Service</option>
                  </select>
                </div>

                {/* Average Customer Value Slider */}
                <div>
                  <div className="flex justify-between text-xs font-bold text-zinc-300 mb-2">
                    <span>Average Value Per Customer / Job:</span>
                    <span className="text-yellow-400 text-base font-extrabold">R{avgCustomerValue.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="15000"
                    step="250"
                    value={avgCustomerValue}
                    onChange={(e) => setAvgCustomerValue(Number(e.target.value))}
                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-yellow-400"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-400 mt-1">
                    <span>R500 (Small Repair)</span>
                    <span>R7,500 (Mid Service)</span>
                    <span>R15,000+ (High Value)</span>
                  </div>
                </div>

                {/* Estimated Missed Enquiries Slider */}
                <div>
                  <div className="flex justify-between text-xs font-bold text-zinc-300 mb-2">
                    <span>Estimated Missed Google Calls / Enquiries Per Week:</span>
                    <span className="text-white text-base font-extrabold">{estimatedMissedCalls} calls / week</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="20"
                    step="1"
                    value={estimatedMissedCalls}
                    onChange={(e) => setEstimatedMissedCalls(Number(e.target.value))}
                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-400 mt-1">
                    <span>2 calls/wk</span>
                    <span>10 calls/wk</span>
                    <span>20+ calls/wk</span>
                  </div>
                </div>

              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800 flex items-center gap-2 text-xs text-zinc-400">
              <CheckCircle2 className="w-4 h-4 text-yellow-400 flex-shrink-0" />
              <span>Based on real Google search volume metrics across Gqeberha / Eastern Cape</span>
            </div>
          </div>

          {/* Output Results Card (Right 5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-zinc-900 to-black p-6 sm:p-8 rounded-2xl border border-yellow-500/40 flex flex-col justify-between relative shadow-2xl overflow-hidden">
            
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-yellow-400/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1">
                  <AlertTriangle className="w-4 h-4 text-yellow-400" /> Estimated Revenue Leak
                </span>
                <span className="text-[10px] bg-zinc-800 text-yellow-400 font-bold px-2 py-0.5 rounded border border-yellow-400/30">
                  Competitors Capturing This
                </span>
              </div>

              {/* Monthly Loss Display */}
              <div className="my-6 text-center">
                <span className="text-xs text-zinc-400 uppercase tracking-wider block mb-1">
                  Estimated Lost Revenue in {selectedSuburb}
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold text-white font-heading">
                  R{monthlyLostRevenue.toLocaleString()}
                  <span className="text-xs font-medium text-zinc-400"> / month</span>
                </div>
                <div className="text-xs text-zinc-400 mt-1">
                  That's <strong className="text-yellow-400">R{estimatedAnnualLoss.toLocaleString()}</strong> every year going straight to competitor accounts!
                </div>
              </div>

              {/* Potential with Allegro Digital */}
              <div className="bg-black border border-yellow-400/40 rounded-xl p-4 space-y-3 mb-6">
                <div className="flex items-center justify-between text-xs font-bold text-yellow-400">
                  <span className="flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4" /> With Allegro Digital Engine:
                  </span>
                  <span className="bg-yellow-400 text-black font-extrabold px-2 py-0.5 rounded text-[10px]">
                    Projected Gain
                  </span>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-zinc-300">Projected Monthly Leads:</span>
                  <strong className="text-white font-bold text-base">{projectedNewLeads} Local Leads</strong>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-zinc-300">Estimated Monthly Revenue:</span>
                  <strong className="text-yellow-400 font-extrabold text-lg">R{projectedNewRevenue.toLocaleString()}</strong>
                </div>
              </div>
            </div>

            {/* Claim Action Button */}
            <div className="space-y-3">
              <button
                onClick={handleClaimArea}
                className="w-full shimmer-btn text-black font-black text-base py-4 px-6 rounded-xl shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer border border-yellow-300"
              >
                <span>Claim Web Dominance in {selectedSuburb}</span>
                <ArrowRight className="w-5 h-5 text-black" />
              </button>
              <p className="text-[11px] text-zinc-400 text-center">
                🔒 We limit onboarding to only 2 competitors per suburb to ensure top rankings.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
