import React, { useState } from 'react';
import { Zap, ArrowRight, HelpCircle, Layout, Server, Target, CheckCircle2, Megaphone, PenTool, Plus } from 'lucide-react';
import { PricingPlan } from '../data/peData';
import posthog from 'posthog-js';

interface PricingProps {
  onSelectPlan: (plan: PricingPlan, billingCycle: 'onceOff' | 'monthly') => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [socialTier, setSocialTier] = useState<'standard' | 'growth'>('standard');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const toggleAddon = (addonId: string) => {
    const isSelected = selectedAddons.includes(addonId);
    posthog.capture('pricing_addon_toggled', {
      addon_id: addonId,
      selected: !isSelected,
    });
    setSelectedAddons(isSelected ? selectedAddons.filter(id => id !== addonId) : [...selectedAddons, addonId]);
  };

  const handleSelect = (name: string, cycle: 'onceOff' | 'monthly') => {
    onSelectPlan(
      { id: 'custom', name, tagline: '', onceOffPrice: 0, monthlyPrice: 0, features: [], ctaText: '', guarantee: '' },
      cycle
    );
  };

  const handleContinueWithAddons = () => {
    const addonsText = selectedAddons.map(id => {
      if (id === 'seo') return 'Active SEO';
      if (id === 'social') return `${socialTier === 'standard' ? 'Standard' : 'Growth'} Social Media`;
      if (id === 'logo') return 'Logo Design';
      return '';
    }).filter(Boolean).join(', ');
    
    handleSelect(`Base Service + ${addonsText}`, 'monthly');
  };

  return (
    <section id="pricing" className="pt-20 pb-36 text-white relative overflow-hidden">
      
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
            Every client starts with our base service. It establishes your online presence and secures your ongoing hosting and maintenance.
          </p>
        </div>

        {/* The Base Service */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading inline-block">
              The Base Service: The Digital Foundation
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
                  1. Website Setup & Launch
                </h3>
                
                <div className="mb-6 pb-6 border-b border-zinc-800">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-bold text-zinc-400">R</span>
                    <span className="text-5xl font-black text-white font-heading tracking-tight">1,499</span>
                  </div>
                  <p className="text-[11px] text-yellow-400 font-bold mt-1 uppercase tracking-wider">Upfront (Once-Off)</p>
                </div>

                <div className="space-y-4 text-sm">
                  <p className="text-zinc-300 leading-relaxed flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                    Design, development, and launch of a high-converting, single-page website.
                  </p>
                  <p className="text-zinc-300 leading-relaxed flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span>
                      Fully optimized for mobile, fast loading speeds, and clear conversion paths (<a href="/articles/whatsapp-website-integration-south-africa" className="text-yellow-400 underline hover:text-yellow-300 whitespace-nowrap">WhatsApp button</a> and contact form).
                    </span>
                  </p>
                  <p className="text-zinc-300 leading-relaxed flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span>
                      <a href="/articles/how-to-get-your-sa-business-on-google-maps" className="text-yellow-400 underline hover:text-yellow-300 whitespace-nowrap">Google Maps integration</a> and local directory submission.
                    </span>
                  </p>
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
                  2. Website Hosting & Maintenance
                </h3>
                
                <div className="mb-6 pb-6 border-b border-zinc-800">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-bold text-zinc-400">R</span>
                    <span className="text-5xl font-black text-white font-heading tracking-tight">800</span>
                    <span className="text-sm font-bold text-zinc-400">/mo</span>
                  </div>
                  <p className="text-[11px] text-yellow-400 font-bold mt-1 uppercase tracking-wider">Mandatory Monthly Fee</p>
                </div>

                <div className="space-y-4 text-sm">
                  <p className="text-zinc-300 leading-relaxed flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                    Secure, high-speed cloud hosting.
                  </p>
                  <p className="text-zinc-300 leading-relaxed flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                    SSL certificate installation and management.
                  </p>
                  <p className="text-zinc-300 leading-relaxed flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                    Daily/weekly website backups and uptime monitoring.
                  </p>
                  <p className="text-zinc-300 leading-relaxed flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                    Minor technical troubleshooting and standard support.
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-8 flex justify-center">
             <button
                onClick={() => handleSelect('Base Service (Design + Hosting)', 'onceOff')}
                className="shimmer-btn text-black font-black text-sm px-10 py-4 rounded-xl shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer border border-yellow-300"
              >
                <span>Get Started With The Base Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>
          </div>
        </div>

        {/* High-Margin Modular Add-ons */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading inline-block">
              High-Margin Modular Add-ons
            </h3>
            <p className="text-zinc-400 mt-2 text-sm max-w-2xl mx-auto">
              Select one or multiple add-ons below to stack onto your base service and accelerate your growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto relative pb-24 lg:pb-0">
            
            {/* Add-on A */}
            <div 
              className={`bg-zinc-950 border-2 rounded-3xl p-6 transition-all flex flex-col justify-between shadow-xl cursor-pointer ${
                selectedAddons.includes('seo') ? 'border-yellow-400 glow-yellow' : 'border-zinc-800 hover:border-yellow-400/50'
              }`}
              onClick={() => toggleAddon('seo')}
            >
              <div>
                <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0 text-black shadow-lg mb-4">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white font-heading mb-2">
                  Active SEO & Google Profile
                </h4>
                <div className="mb-4 pb-4 border-b border-zinc-800">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-bold text-zinc-400">R</span>
                    <span className="text-3xl font-black text-white font-heading tracking-tight">1,999</span>
                    <span className="text-sm font-bold text-zinc-400">/mo</span>
                  </div>
                </div>
                <ul className="space-y-3 text-xs text-zinc-300 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span>Active Google Business Profile (GBP) management and weekly local post/update publishing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span>Targeted keyword research and optimization to rank in the local Google "3-Pack".</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span>On-page SEO adjustments, sitemap submission, and search ranking tracking.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span>Review-generation system setup to systematically collect Google reviews.</span>
                  </li>
                </ul>
              </div>
              <button
                className={`w-full font-bold text-xs py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg border ${
                  selectedAddons.includes('seo') 
                    ? 'bg-yellow-400 text-black border-yellow-400' 
                    : 'bg-zinc-900 text-white border-zinc-700 hover:border-yellow-400/50'
                }`}
              >
                {selectedAddons.includes('seo') ? (
                  <><span>Selected</span><CheckCircle2 className="w-4 h-4" /></>
                ) : (
                  <><span>Select Add-on</span><Plus className="w-4 h-4" /></>
                )}
              </button>
            </div>

            {/* Add-on B */}
            <div 
              className={`bg-zinc-950 border-2 rounded-3xl p-6 transition-all flex flex-col justify-between shadow-xl cursor-pointer relative ${
                selectedAddons.includes('social') ? 'border-yellow-400 glow-yellow' : 'border-zinc-800 hover:border-yellow-400/50'
              }`}
              onClick={(e) => {
                // Prevent toggle if they click the tier buttons
                if ((e.target as HTMLElement).closest('.tier-toggle')) return;
                toggleAddon('social');
              }}
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black font-black text-[10px] px-3 py-1 rounded-full shadow-lg uppercase tracking-wider whitespace-nowrap">
                Scalable Growth
              </div>
              <div>
                <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0 text-black shadow-lg mb-4">
                  <Megaphone className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white font-heading mb-2">
                  Social Media Management
                </h4>
                
                {/* Toggle */}
                <div className="flex items-center gap-1 bg-black p-1 rounded-lg border border-zinc-800 mb-4 tier-toggle">
                  <button 
                    onClick={(e) => { e.stopPropagation(); setSocialTier('standard'); }}
                    className={`flex-1 text-[10px] font-bold py-1.5 rounded-md transition-colors ${socialTier === 'standard' ? 'bg-yellow-400 text-black' : 'text-zinc-400 hover:text-white'}`}
                  >
                    Standard
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); setSocialTier('growth'); }}
                    className={`flex-1 text-[10px] font-bold py-1.5 rounded-md transition-colors ${socialTier === 'growth' ? 'bg-yellow-400 text-black' : 'text-zinc-400 hover:text-white'}`}
                  >
                    Growth
                  </button>
                </div>

                <div className="mb-4 pb-4 border-b border-zinc-800">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-bold text-zinc-400">R</span>
                    <span className="text-3xl font-black text-white font-heading tracking-tight">{socialTier === 'standard' ? '1,500' : '3,000'}</span>
                    <span className="text-sm font-bold text-zinc-400">/mo</span>
                  </div>
                </div>
                <ul className="space-y-3 text-xs text-zinc-300 mb-6">
                  {socialTier === 'standard' ? (
                    <>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <span>1-2 professional posts per week across Facebook & Instagram.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <span>Includes custom visual graphic templates.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <span>Copywriting in an authentic local South African tone.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-500 italic">Note: Client provides raw photos/videos.</span>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <span>3-4 professional posts per week across Facebook & Instagram.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <span>1 high-engagement Reel/short-form video compilation per month from client-provided clips.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <span>Active comment monitoring and engagement.</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>
              <button
                className={`w-full font-bold text-xs py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg border ${
                  selectedAddons.includes('social') 
                    ? 'bg-yellow-400 text-black border-yellow-400' 
                    : 'bg-zinc-900 text-white border-zinc-700 hover:border-yellow-400/50'
                }`}
              >
                {selectedAddons.includes('social') ? (
                  <><span>Selected</span><CheckCircle2 className="w-4 h-4" /></>
                ) : (
                  <><span>Select Add-on</span><Plus className="w-4 h-4" /></>
                )}
              </button>
            </div>

            {/* Add-on C */}
            <div 
              className={`bg-zinc-950 border-2 rounded-3xl p-6 transition-all flex flex-col justify-between shadow-xl cursor-pointer ${
                selectedAddons.includes('logo') ? 'border-yellow-400 glow-yellow' : 'border-zinc-800 hover:border-yellow-400/50'
              }`}
              onClick={() => toggleAddon('logo')}
            >
              <div>
                <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0 text-black shadow-lg mb-4">
                  <PenTool className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white font-heading mb-2">
                  Logo & Brand Identity
                </h4>
                <div className="mb-4 pb-4 border-b border-zinc-800">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-bold text-zinc-400">R</span>
                    <span className="text-3xl font-black text-white font-heading tracking-tight">1,500</span>
                  </div>
                  <p className="text-[10px] text-zinc-400 font-bold mt-1 uppercase tracking-wider">Once-off</p>
                </div>
                <ul className="space-y-3 text-xs text-zinc-300 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span>2-3 unique custom vector logo concepts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span>2 rounds of refinements/revisions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span>Final logo package supplied in standard industry formats (high-res SVG, PNG, PDF).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span>Basic brand card showing color palette hex codes and primary typography.</span>
                  </li>
                </ul>
              </div>
              <button
                className={`w-full font-bold text-xs py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg border ${
                  selectedAddons.includes('logo') 
                    ? 'bg-yellow-400 text-black border-yellow-400' 
                    : 'bg-zinc-900 text-white border-zinc-700 hover:border-yellow-400/50'
                }`}
              >
                {selectedAddons.includes('logo') ? (
                  <><span>Selected</span><CheckCircle2 className="w-4 h-4" /></>
                ) : (
                  <><span>Select Add-on</span><Plus className="w-4 h-4" /></>
                )}
              </button>
            </div>

            {/* Floating Checkout Action Bar (Shows when at least 1 add-on is selected) */}
            {selectedAddons.length > 0 && (
              <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] sm:w-auto bg-zinc-900/95 backdrop-blur-xl border border-yellow-400/50 rounded-full p-2 pr-4 shadow-[0_0_40px_rgba(250,204,21,0.15)] flex items-center justify-between gap-4 z-50 animate-in slide-in-from-bottom-10 duration-300">
                <div className="flex items-center gap-2 pl-3">
                  <div className="w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center font-bold text-sm">
                    {selectedAddons.length}
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-white hidden sm:block">Add-ons Selected</span>
                </div>
                <button
                  onClick={handleContinueWithAddons}
                  className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-colors flex items-center gap-2 shadow-lg"
                >
                  Continue to Booking <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
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
