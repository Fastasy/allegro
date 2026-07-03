import React, { useState } from 'react';
import { PE_INDUSTRIES, IndustryDemo } from '../data/peData';
import { 
  Check, Phone, MessageSquare, Calendar, MapPin, 
  ExternalLink, Sparkles, AlertTriangle, CheckCircle2, ChevronRight
} from 'lucide-react';

interface ProductShowcaseProps {
  onOpenBooking: () => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onOpenBooking }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryDemo>(PE_INDUSTRIES[0]);
  const [activeTab, setActiveTab] = useState<'after' | 'before'>('after');

  return (
    <section id="demos" className="py-20 bg-black text-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-yellow-500/30 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" /> Live Industry Showcases
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            See How Your Business Will Stand Out In <span className="text-yellow-400">Port Elizabeth</span>
          </h2>
          <p className="mt-3 text-zinc-300 text-base">
            Select your industry below to explore a live interactive demo of the high-converting web engine we build for Gqeberha small businesses.
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {PE_INDUSTRIES.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setSelectedIndustry(ind)}
              className={`px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
                selectedIndustry.id === ind.id
                  ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/20 scale-105 font-black'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              <span>{ind.name}</span>
            </button>
          ))}
        </div>

        {/* Before vs After Mode Switcher */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="text-xs font-bold text-zinc-400">View Comparison:</span>
          <div className="bg-zinc-900 p-1 rounded-xl border border-zinc-800 flex items-center text-xs font-bold">
            <button
              onClick={() => setActiveTab('after')}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                activeTab === 'after'
                  ? 'bg-yellow-400 text-black font-extrabold shadow'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              ✨ Allegro Digital Engine (Lead Machine)
            </button>
            <button
              onClick={() => setActiveTab('before')}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                activeTab === 'before'
                  ? 'bg-zinc-800 text-white font-extrabold border border-zinc-700'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              ❌ No Website / Outdated Site
            </button>
          </div>
        </div>

        {/* Interactive Showcase Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-panel p-6 sm:p-10 rounded-3xl border border-zinc-800 shadow-2xl">
          
          {/* Left Side: Details & Metrics (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {activeTab === 'after' ? (
              <>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-yellow-500/30 text-yellow-400 text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400" /> Optimized for {selectedIndustry.suburb}
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 font-heading">
                    {selectedIndustry.sampleBusiness}
                  </h3>
                  <p className="text-sm text-yellow-400 font-semibold flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-yellow-400" /> Primary Service: {selectedIndustry.primaryService}
                  </p>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  Tailored specifically for local PE buyers. Includes 1-click phone calls, instant WhatsApp pre-filled enquiries, and embedded Google Maps reviews.
                </p>

                {/* Key Features List */}
                <div className="space-y-3 bg-black p-4 rounded-xl border border-zinc-800">
                  <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider block mb-2">
                    Included Growth Drivers:
                  </span>
                  {selectedIndustry.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-zinc-200">
                      <div className="w-4 h-4 rounded-full bg-yellow-400/20 text-yellow-400 flex items-center justify-center flex-shrink-0 font-bold">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="font-medium">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Local Search Volume & Revenue Potential */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-black p-3 rounded-xl border border-zinc-800 text-center">
                    <span className="text-[10px] text-zinc-400 uppercase font-bold block">Monthly Searches PE</span>
                    <span className="text-lg font-extrabold text-white font-heading">
                      {selectedIndustry.monthlySearchesPE.toLocaleString()}
                    </span>
                  </div>

                  <div className="bg-black p-3 rounded-xl border border-zinc-800 text-center">
                    <span className="text-[10px] text-zinc-400 uppercase font-bold block">Avg Lead Value</span>
                    <span className="text-lg font-extrabold text-yellow-400 font-heading">
                      R{selectedIndustry.avgLeadValue.toLocaleString()}
                    </span>
                  </div>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="w-full shimmer-btn text-black font-black text-sm py-4 rounded-xl shadow-xl flex items-center justify-center gap-2 cursor-pointer border border-yellow-300"
                >
                  <span>Build This Engine For My PE Business</span>
                  <ChevronRight className="w-4 h-4 text-black" />
                </button>
              </>
            ) : (
              /* BEFORE STATE */
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 text-xs font-bold">
                  <AlertTriangle className="w-4 h-4 text-yellow-400" /> Typical Port Elizabeth Small Business Setup
                </div>

                <h3 className="text-2xl font-bold text-white">
                  Why 72% of PE Small Businesses Lose Customers Every Single Day
                </h3>

                <div className="space-y-4 text-sm text-zinc-300">
                  <div className="flex items-start gap-3 bg-zinc-900/80 p-3.5 rounded-xl border border-zinc-800">
                    <span className="text-white font-bold text-lg">❌</span>
                    <div>
                      <strong className="text-white block">No Google Maps Rank:</strong>
                      <p className="text-xs text-zinc-400">When someone in Walmer or Summerstrand searches for your service, you don't exist in the top 10.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-zinc-900/80 p-3.5 rounded-xl border border-zinc-800">
                    <span className="text-white font-bold text-lg">❌</span>
                    <div>
                      <strong className="text-white block">Slow, Non-Responsive Website:</strong>
                      <p className="text-xs text-zinc-400">If you do have an old site, it takes 8+ seconds to load on Vodacom 4G, and text is tiny on mobile screens.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-zinc-900/80 p-3.5 rounded-xl border border-zinc-800">
                    <span className="text-white font-bold text-lg">❌</span>
                    <div>
                      <strong className="text-white block">No Call or WhatsApp Action:</strong>
                      <p className="text-xs text-zinc-400">Visitors have to copy-paste phone numbers or fill out dead email contact forms that nobody checks.</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setActiveTab('after')}
                  className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-black text-sm py-3.5 rounded-xl transition-colors cursor-pointer shadow"
                >
                  Switch to Allegro Digital High-Converting Engine
                </button>
              </div>
            )}

          </div>

          {/* Right Side: Simulated Smartphone Mockup (6 Cols) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-sm bg-black border-4 border-zinc-800 rounded-[36px] p-3 shadow-2xl relative overflow-hidden">
              
              {/* Phone Speaker Notch */}
              <div className="w-28 h-4 bg-zinc-900 rounded-full mx-auto mb-3 border border-zinc-800" />

              {/* Screen Content */}
              {activeTab === 'after' ? (
                <div className="space-y-3">
                  {/* Web Banner */}
                  <div className="relative h-44 rounded-2xl overflow-hidden">
                    <img
                      src={selectedIndustry.heroImg}
                      alt={selectedIndustry.sampleBusiness}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-3 flex flex-col justify-end">
                      <span className="bg-yellow-400 text-black text-[10px] font-black px-2 py-0.5 rounded w-max mb-1 uppercase">
                        ★ Verified Google Top Rank
                      </span>
                      <h4 className="text-sm font-bold text-white leading-tight">
                        {selectedIndustry.headline}
                      </h4>
                      <p className="text-[10px] text-zinc-300 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-2.5 h-2.5 text-yellow-400" /> {selectedIndustry.suburb}
                      </p>
                    </div>
                  </div>

                  {/* Rating Badge */}
                  <div className="bg-zinc-900 p-2.5 rounded-xl border border-zinc-800 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400 font-bold">★★★★★</span>
                      <span className="text-white font-bold text-[11px]">4.9 (92 Reviews)</span>
                    </div>
                    <span className="text-yellow-400 text-[10px] font-mono font-bold">● Instant Booking</span>
                  </div>

                  {/* 1-Tap CTAs */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={onOpenBooking}
                      className="bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold text-xs py-2.5 rounded-lg flex items-center justify-center gap-1 shadow cursor-pointer"
                    >
                      <Phone className="w-3.5 h-3.5 fill-black" /> Call Now
                    </button>
                    <button
                      onClick={onOpenBooking}
                      className="bg-zinc-900 text-white font-bold text-xs py-2.5 rounded-lg border border-zinc-700 flex items-center justify-center gap-1 cursor-pointer hover:border-yellow-400"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-yellow-400" /> WhatsApp
                    </button>
                  </div>

                  {/* Appointment Scheduler Trigger */}
                  <button
                    onClick={onOpenBooking}
                    className="w-full bg-zinc-900 hover:bg-zinc-800 border border-yellow-500/40 text-yellow-400 font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 text-yellow-400" /> Schedule Strategy Call
                  </button>

                  <div className="text-[10px] text-zinc-400 text-center flex items-center justify-center gap-1 pt-1">
                    <ExternalLink className="w-3 h-3 text-yellow-400" />
                    <span>Allegro Digital Local Conversion Engine</span>
                  </div>
                </div>
              ) : (
                /* BEFORE SIMULATION */
                <div className="h-80 flex flex-col items-center justify-center text-center p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
                  <div className="w-12 h-12 rounded-full bg-black text-yellow-400 flex items-center justify-center mb-3 border border-zinc-700">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <h5 className="text-sm font-bold text-white mb-1">Error: 404 Website Not Found</h5>
                  <p className="text-xs text-zinc-400 mb-4">
                    Or old non-responsive site with broken layouts and no phone buttons.
                  </p>
                  <span className="text-[10px] text-zinc-300 bg-black border border-zinc-700 px-3 py-1 rounded-full">
                    Customer clicks Back to find a competitor
                  </span>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
