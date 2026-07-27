import React from 'react';
import { Zap, Sparkles, ArrowRight, HelpCircle, Layout, Server, Target, CheckCircle2 } from 'lucide-react';
import { PricingPlan } from '../data/peData';

interface PricingProps {
  onSelectPlan: (plan: PricingPlan, billingCycle: 'onceOff' | 'monthly') => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  // We use this helper to pass a dummy plan to the modal so the user's selection text appears correctly
  const handleSelect = (name: string, cycle: 'onceOff' | 'monthly') => {
    onSelectPlan(
      { id: 'custom', name, tagline: '', onceOffPrice: 0, monthlyPrice: 0, features: [], ctaText: '', guarantee: '' },
      cycle
    );
  };

  return (
    <section id="pricing" className="py-20 text-white relative overflow-hidden border-t border-zinc-800">
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-yellow-500/30 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-yellow-400" /> Transparent PE Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Allegro Digital: <span className="text-yellow-400">Your Online Launchpad</span>
          </h2>
          <p className="mt-4 text-zinc-300 text-base sm:text-lg">
            Get online fast with our simple, modular pricing tailored for Port Elizabeth businesses.
          </p>
        </div>

        {/* Core Package Container */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading inline-block">
              The Foundation (Required)
            </h3>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mt-2 rounded-full opacity-50" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
            
            {/* Design & Dev */}
            <div className="glass-panel border border-zinc-800 hover:border-yellow-400/50 rounded-3xl p-8 transition-all flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-bl-full pointer-events-none" />
              
              <div>
                <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-6">
                  <Layout className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 font-heading">
                  1. Professional Single-Page Website Design & Development
                </h3>
                
                <div className="mb-6 pb-6 border-b border-zinc-800">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-bold text-zinc-400">R</span>
                    <span className="text-5xl font-black text-white font-heading tracking-tight">1,499</span>
                  </div>
                  <p className="text-[11px] text-yellow-400 font-bold mt-1 uppercase tracking-wider">Upfront Investment (Once-Off)</p>
                </div>

                <div className="space-y-5 text-sm">
                  <div>
                    <strong className="text-white block mb-1 text-xs uppercase tracking-wide">What You Get:</strong>
                    <p className="text-zinc-300 leading-relaxed">A stunning, high-converting, single-page website tailored to your brand. Built with cutting-edge technology for speed and performance. Perfect for establishing a powerful online presence quickly.</p>
                  </div>
                  <div>
                    <strong className="text-yellow-400 block mb-1 text-xs uppercase tracking-wide">Your Advantage:</strong>
                    <p className="text-zinc-300 leading-relaxed">Get online fast and affordably. We handle the technical heavy lifting so you can focus on your business.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hosting */}
            <div className="glass-panel border border-zinc-800 hover:border-yellow-400/50 rounded-3xl p-8 transition-all flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-bl-full pointer-events-none" />
              
              <div>
                <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-6">
                  <Server className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 font-heading">
                  2. Mandatory Website Hosting & Maintenance
                </h3>
                
                <div className="mb-6 pb-6 border-b border-zinc-800">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-bold text-zinc-400">R</span>
                    <span className="text-5xl font-black text-white font-heading tracking-tight">800</span>
                    <span className="text-sm font-bold text-zinc-400">/mo</span>
                  </div>
                  <p className="text-[11px] text-yellow-400 font-bold mt-1 uppercase tracking-wider">Monthly Fee</p>
                </div>

                <div className="space-y-5 text-sm">
                  <div>
                    <strong className="text-white block mb-1 text-xs uppercase tracking-wide">What You Get:</strong>
                    <p className="text-zinc-300 leading-relaxed">Guaranteed uptime, secure hosting, SSL certificate, regular backups, essential updates, and proactive security monitoring. Your website stays online, safe, and functional—no tech headaches for you.</p>
                  </div>
                  <div>
                    <strong className="text-yellow-400 block mb-1 text-xs uppercase tracking-wide">Your Advantage:</strong>
                    <p className="text-zinc-300 leading-relaxed">Peace of mind with reliable, managed hosting, ensuring your site is always available to your customers.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-8 flex justify-center">
             <button
                onClick={() => handleSelect('Foundation Package (Design + Hosting)', 'onceOff')}
                className="shimmer-btn text-black font-black text-sm px-10 py-4 rounded-xl shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer border border-yellow-300"
              >
                <span>Get Started With The Foundation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
          </div>
        </div>

        {/* Optional SEO Power-Up */}
        <div className="max-w-4xl mx-auto mt-6">
          <div className="bg-zinc-950 border-2 border-yellow-400 glow-yellow rounded-3xl p-8 sm:p-10 relative shadow-2xl">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black font-black text-xs px-5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 uppercase tracking-wider whitespace-nowrap z-10">
              <Sparkles className="w-3.5 h-3.5 text-black" /> Optional Power-Up
            </div>

            <div className="flex flex-col md:flex-row gap-10 items-start mt-4">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0 text-black shadow-lg">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                    3. Dominate Google with Active SEO
                  </h3>
                </div>
                
                <div className="space-y-5 text-sm mb-6">
                  <div>
                    <strong className="text-white block mb-1 text-xs uppercase tracking-wide">What You Get:</strong>
                    <p className="text-zinc-300 leading-relaxed">Aggressive keyword targeting, on-page optimization, Google Business Profile (GBP) management, content strategy guidance, and monthly performance reports. We work to push your business higher in Google searches, driving more qualified leads directly to you.</p>
                  </div>
                  <div>
                    <strong className="text-yellow-400 block mb-1 text-xs uppercase tracking-wide">Your Advantage:</strong>
                    <p className="text-zinc-300 leading-relaxed">Outrank competitors, attract more local customers, and accelerate your business growth with a sustained SEO strategy.</p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-72 flex-shrink-0 bg-black/50 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-center">
                <div className="mb-6 text-center">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-sm font-bold text-zinc-400">R</span>
                    <span className="text-5xl font-black text-white font-heading tracking-tight">1,999</span>
                  </div>
                  <div className="text-sm font-bold text-zinc-400 mt-1">/ month</div>
                  <p className="text-[10px] text-yellow-400 font-bold mt-3 uppercase tracking-wider">(In addition to hosting)</p>
                </div>
                
                <button
                  onClick={() => handleSelect('Foundation + Active SEO Power-Up', 'monthly')}
                  className="w-full bg-zinc-900 hover:bg-yellow-400 hover:text-black text-white border border-zinc-700 hover:border-yellow-400 font-black text-sm py-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Include SEO Power-Up</span>
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Needs Callout */}
        <div className="mt-16 text-center text-xs text-zinc-400 flex items-center justify-center gap-2">
          <HelpCircle className="w-4 h-4 text-yellow-400" />
          <span>Need a larger custom multi-location web portal for Eastern Cape? <a href="tel:0823006996" className="text-yellow-400 font-extrabold underline">Call 082 300 6996</a></span>
        </div>

      </div>
    </section>
  );
};
