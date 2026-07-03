import React, { useState } from 'react';
import { PRICING_PLANS, PricingPlan } from '../data/peData';
import { Check, Zap, Sparkles, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

interface PricingProps {
  onSelectPlan: (plan: PricingPlan, billingCycle: 'onceOff' | 'monthly') => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'onceOff' | 'monthly'>('onceOff');

  return (
    <section id="pricing" className="py-20 bg-black text-white relative overflow-hidden border-t border-zinc-800">
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-yellow-500/30 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-yellow-400" /> Transparent Port Elizabeth Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Fixed Pricing. Zero Surprises. <span className="text-yellow-400">Proven Results.</span>
          </h2>
          <p className="mt-3 text-zinc-300 text-base sm:text-lg">
            Choose a simple once-off design fee or a low turnkey monthly subscription. All packages include domain, cloud hosting, and Google Maps setup.
          </p>
        </div>

        {/* Billing Cycle Toggle */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <span className={`text-xs sm:text-sm font-bold transition-colors ${billingCycle === 'onceOff' ? 'text-white' : 'text-zinc-400'}`}>
            Once-off Payment
          </span>
          <button
            onClick={() => setBillingCycle(billingCycle === 'onceOff' ? 'monthly' : 'onceOff')}
            aria-label="Toggle Billing Cycle"
            className="w-16 h-8 bg-zinc-900 border border-zinc-700 rounded-full p-1 relative transition-colors cursor-pointer"
          >
            <div
              className={`w-6 h-6 rounded-full bg-yellow-400 transition-transform ${
                billingCycle === 'monthly' ? 'translate-x-8' : 'translate-x-0'
              }`}
            />
          </button>
          <span className={`text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-colors ${billingCycle === 'monthly' ? 'text-white' : 'text-zinc-400'}`}>
            Monthly Package
            <span className="bg-yellow-400 text-black text-[10px] font-black px-2 py-0.5 rounded shadow">
              Low Initial Outlay
            </span>
          </span>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-8 transition-all flex flex-col justify-between relative shadow-2xl ${
                plan.popular
                  ? 'bg-zinc-950 border-2 border-yellow-400 glow-yellow scale-105 z-10'
                  : 'glass-panel border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black font-black text-xs px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-black" /> Most Popular in PE
                </div>
              )}

              <div>
                {/* Plan Name & Tagline */}
                <h3 className="text-2xl font-extrabold text-white mb-2 font-heading">
                  {plan.name}
                </h3>
                <p className="text-xs text-zinc-300 mb-6 leading-relaxed">
                  {plan.tagline}
                </p>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-zinc-800">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-bold text-zinc-400">R</span>
                    <span className="text-4xl sm:text-5xl font-black text-white font-heading tracking-tight">
                      {billingCycle === 'onceOff'
                        ? plan.onceOffPrice.toLocaleString()
                        : plan.monthlyPrice.toLocaleString()}
                    </span>
                    <span className="text-xs text-zinc-400 font-medium">
                      {billingCycle === 'onceOff' ? ' once-off' : ' / month'}
                    </span>
                  </div>
                  <p className="text-[11px] text-yellow-400 font-bold mt-1">
                    {billingCycle === 'onceOff'
                      ? `Optional R250/mo hosting & domain after month 1`
                      : `Includes hosting, SSL & continuous updates`}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider block">
                    What's Included:
                  </span>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-200">
                      <div className="w-4 h-4 rounded-full bg-yellow-400/20 text-yellow-400 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Button & Guarantee */}
              <div className="space-y-3 pt-4 border-t border-zinc-800">
                <button
                  onClick={() => onSelectPlan(plan, billingCycle)}
                  className={`w-full py-4 rounded-xl font-black text-sm shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    plan.popular
                      ? 'shimmer-btn text-black hover:scale-[1.02] border border-yellow-300'
                      : 'bg-zinc-900 hover:bg-yellow-400 text-white hover:text-black border border-zinc-700'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Needs Callout */}
        <div className="mt-14 text-center text-xs text-zinc-400 flex items-center justify-center gap-2">
          <HelpCircle className="w-4 h-4 text-yellow-400" />
          <span>Need a larger custom multi-location web portal for Eastern Cape? <a href="tel:0415810920" className="text-yellow-400 font-extrabold underline">Call 041 581 0920 for custom scope</a></span>
        </div>

      </div>
    </section>
  );
};
