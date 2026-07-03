import React, { useState } from 'react';
import { 
  ArrowRight, Calendar, Phone, ShieldCheck, Star, 
  MapPin, Check, Smartphone, Monitor, MessageSquare, Flame, TrendingUp
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onScrollToCalc: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onScrollToCalc }) => {
  const [activeDevice, setActiveDevice] = useState<'mobile' | 'desktop'>('mobile');

  return (
    <section className="relative pt-6 pb-20 md:pt-12 md:pb-28 overflow-hidden bg-black text-white">
      {/* Background Radial Glow Effects */}
      <div className="hero-glow bg-yellow-400/15 top-10 left-1/2 -translate-x-1/2" />
      <div className="hero-glow bg-yellow-500/10 top-1/3 -right-20" />

      {/* Grid Pattern Background Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-6">
            
            {/* Local PE Urgency Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-yellow-500/30 shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-yellow-400 animate-ping" />
              <MapPin className="w-3.5 h-3.5 text-yellow-400" />
              <span className="text-xs font-bold text-zinc-200">
                Port Elizabeth & Gqeberha Small Business Growth Engine
              </span>
            </div>

            {/* Core Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              <span className="inline-block animate-fade-scale" style={{ animationDelay: '100ms' }}>Stop Losing&nbsp;</span>
              <span className="inline-block animate-fade-scale gradient-text-accent" style={{ animationDelay: '300ms' }}>Port Elizabeth&nbsp;</span>
              <br className="hidden lg:block" />
              <span className="inline-block animate-fade-scale" style={{ animationDelay: '500ms' }}>Customers To Competitors On Google.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We build ultra-fast, high-converting websites for PE businesses without one. We optimize your Google Business Profile & deliver local phone calls and website enquiries straight to your smartphone with a <strong className="text-yellow-400 underline decoration-yellow-400 decoration-2">fast turnaround time</strong>.
            </p>

            {/* Key Value Pillars Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-300 pt-1 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <div className="w-5 h-5 rounded-full bg-yellow-400/20 text-yellow-400 flex items-center justify-center flex-shrink-0 font-bold">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Top 3 Google Maps local ranking</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <div className="w-5 h-5 rounded-full bg-yellow-400/20 text-yellow-400 flex items-center justify-center flex-shrink-0 font-bold">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Instant Lead & Call routing</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <div className="w-5 h-5 rounded-full bg-yellow-400/20 text-yellow-400 flex items-center justify-center flex-shrink-0 font-bold">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Zero technical hassle for you</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <div className="w-5 h-5 rounded-full bg-yellow-400/20 text-yellow-400 flex items-center justify-center flex-shrink-0 font-bold">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>30-Day Leads Strategy</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto shimmer-btn text-black font-black text-base px-8 py-4 rounded-xl shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group border border-yellow-300"
              >
                <Calendar className="w-5 h-5 text-black group-hover:rotate-12 transition-transform" />
                <span>Book Free 15-Min Strategy Session</span>
                <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onScrollToCalc}
                className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 text-zinc-100 px-6 py-4 rounded-xl font-bold text-base border border-zinc-700 transition-all flex items-center justify-center gap-2 hover:border-yellow-400 cursor-pointer"
              >
                <TrendingUp className="w-5 h-5 text-yellow-400" />
                <span>Calculate Lost PE Revenue</span>
              </button>
            </div>

            {/* Social Proof Bar under CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-xs text-zinc-400 border-t border-zinc-800">
              <span className="text-zinc-300">
                Locally Based in <strong className="text-white">Port Elizabeth</strong> • Dedicated to Small Business Growth
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Live Preview Mockup Card */}
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="relative">
              
              {/* Device Toggle Controls Header */}
              <div className="flex items-center justify-between mb-3 px-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-600 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white inline-block" />
                  <span className="text-xs text-zinc-400 font-mono ml-2">Live PE Website Engine</span>
                </div>
                <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-lg p-0.5 text-xs font-medium">
                  <button
                    onClick={() => setActiveDevice('mobile')}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all cursor-pointer ${activeDevice === 'mobile' ? 'bg-yellow-400 text-black font-extrabold' : 'text-zinc-400 hover:text-white'}`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Mobile View</span>
                  </button>
                  <button
                    onClick={() => setActiveDevice('desktop')}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all cursor-pointer ${activeDevice === 'desktop' ? 'bg-yellow-400 text-black font-extrabold' : 'text-zinc-400 hover:text-white'}`}
                  >
                    <Monitor className="w-3.5 h-3.5" />
                    <span>Desktop</span>
                  </button>
                </div>
              </div>

              {/* Main Preview Screen Frame */}
              <div className={`mx-auto transition-all duration-300 rounded-2xl glass-panel p-3 border border-zinc-800 shadow-2xl relative overflow-hidden ${activeDevice === 'mobile' ? 'max-w-sm' : 'w-full'}`}>
                

                {/* Inner Scrolling Wrapper */}
                <div className="animate-auto-scroll">
                  {/* Simulated Webpage Header */}
                  <div className="bg-zinc-900 rounded-xl p-3 border border-zinc-800 mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-yellow-400 text-black font-black flex items-center justify-center text-xs">
                        AP
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white leading-tight">Algoa Bay Emergency Plumbers</h4>
                        <p className="text-[10px] text-zinc-400 flex items-center gap-1">
                          <MapPin className="w-2.5 h-2.5 text-yellow-400" /> Walmer, PE • Open 24/7
                        </p>
                      </div>
                    </div>
                    <div className="bg-yellow-400/10 text-yellow-400 text-[10px] font-bold px-2 py-0.5 rounded border border-yellow-400/30">
                      Verified PE Business
                    </div>
                  </div>

                  {/* Simulated Webpage Hero Image & Banner */}
                  <div className="relative rounded-xl overflow-hidden mb-3 group">
                    <img
                      src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=80"
                      alt="Port Elizabeth Emergency Plumbing Demo"
                      className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-3">
                      <span className="bg-yellow-400 text-black text-[10px] font-black px-2 py-0.5 rounded w-max mb-1">
                        #1 Ranked in Port Elizabeth
                      </span>
                      <h5 className="text-sm font-bold text-white leading-snug">
                        Fast 30-Minute Geyser & Pipe Repair Across PE
                      </h5>
                      <p className="text-[11px] text-zinc-300 line-clamp-1">
                        Serving Walmer, Summerstrand, Lorraine, Newton Park & Fairview.
                      </p>
                    </div>
                  </div>

                  {/* Direct Action Call Buttons Mockup */}
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <a
                      href="tel:0415810920"
                      onClick={(e) => { e.preventDefault(); onOpenBooking(); }}
                      className="bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold text-xs py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 shadow transition-transform active:scale-95 cursor-pointer"
                    >
                      <Phone className="w-3.5 h-3.5 fill-black" />
                      <span>Call Now (Instant)</span>
                    </a>
                    <button
                      onClick={onOpenBooking}
                      className="bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs py-2.5 px-3 rounded-lg border border-zinc-700 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-yellow-400" />
                      <span>Website Quote</span>
                    </button>
                  </div>

                  {/* Interactive Simulated Lead Form */}
                  <div className="bg-zinc-900 rounded-xl p-3 border border-zinc-800 text-left">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold text-zinc-200">Request Instant Callback in PE</span>
                      <span className="text-[10px] text-yellow-400 font-mono">⚡ 3 Min Response</span>
                    </div>
                    <div className="space-y-1.5">
                      <input
                        type="text"
                        readOnly
                        value="Your Name (e.g. Sarah in Lorraine)"
                        className="w-full bg-black text-zinc-400 text-[11px] px-2.5 py-1.5 rounded border border-zinc-800 pointer-events-none"
                      />
                      <button
                        onClick={onOpenBooking}
                        className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-black text-xs py-2 rounded shadow transition-colors cursor-pointer"
                      >
                        Book Free Consultation Slot
                      </button>
                    </div>
                  </div>

                  {/* Floating Social Proof Badge inside Mockup */}
                  <div className="mt-2 text-center text-[10px] text-zinc-400 flex items-center justify-center gap-2">
                    <ShieldCheck className="w-3 h-3 text-yellow-400" />
                    <span>Powered by Allegro Digital Conversion Engine</span>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Floating Card */}
              <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-zinc-900/95 border border-yellow-500/30 p-3 rounded-xl shadow-2xl items-center gap-3 backdrop-blur-xl animate-float-slow">
                <div className="w-10 h-10 rounded-lg bg-yellow-400 text-black flex items-center justify-center font-black text-lg">
                  ⚡
                </div>
                <div>
                  <h6 className="text-xs font-bold text-white">Fast Setup To Live</h6>
                  <p className="text-[10px] text-zinc-400">Zero tech stress for your business</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
