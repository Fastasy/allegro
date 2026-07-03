import React from 'react';
import { Layout, Search, Zap, PhoneCall, CheckCircle, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

interface ProcessEngineProps {
  onOpenBooking: () => void;
}

export const ProcessEngine: React.FC<ProcessEngineProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      step: '01',
      title: 'High-Converting SA Mobile Website',
      subtitle: 'Built for 1-Second Load Times on Vodacom & MTN 4G/5G',
      icon: <Layout className="w-6 h-6 text-yellow-400" />,
      description: 'We craft a stunning, custom web experience tailored specifically to your Port Elizabeth audience. Designed with tap-to-call buttons, one-click WhatsApp chats, and local trust badges.',
      bullets: [
        'Custom SA design (no generic ugly templates)',
        '1-Tap Direct Call & WhatsApp Integration',
        '100% Mobile Optimized & Blazing Fast'
      ]
    },
    {
      step: '02',
      title: 'Google Maps & Local PE SEO Ranking',
      subtitle: 'Dominate Top 3 Local Search Results in Walmer, Newton Park & PE',
      icon: <Search className="w-6 h-6 text-yellow-400" />,
      description: 'When Gqeberha locals search for your services on Google, you will show up right at the top with glowing reviews, your address, phone number, and a direct link to your site.',
      bullets: [
        'Google Business Profile Setup & Verification',
        'Localized Keyword SEO (Walmer, Summerstrand, Lorraine)',
        'Automated Review Generator for Google Stars'
      ]
    },
    {
      step: '03',
      title: 'Automated Lead & Booking Engine',
      subtitle: 'Turn Visitors into Paying Customers On Autopilot',
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      description: 'No more missed phone calls or lost enquiries. When a client submits a form or requests a consultation, you get an instant alert on your phone with full client details.',
      bullets: [
        'Online Calendar Booking Widget included',
        'Instant WhatsApp & Email Lead Notifications',
        'Turnkey setup - 100% managed by Allegro'
      ]
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-black text-white relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-yellow-400/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-yellow-500/30 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5 text-yellow-400" /> The Allegro Growth Framework
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How We Turn Port Elizabeth Website Views Into <span className="text-yellow-400">Booked Appointments</span>
          </h2>
          <p className="mt-3 text-zinc-300 text-base sm:text-lg">
            A website without SEO gets zero traffic. SEO without a converting design gets zero calls. We combine both into a seamless local growth system.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((item, index) => (
            <div
              key={index}
              className="glass-panel p-8 rounded-2xl border border-zinc-800 hover:border-yellow-400/60 transition-all hover:-translate-y-2 relative flex flex-col justify-between group"
            >
              <div className="absolute top-6 right-6 font-mono text-4xl font-black text-zinc-800 group-hover:text-yellow-400/30 transition-colors">
                {item.step}
              </div>

              <div>
                <div className="w-14 h-14 rounded-2xl bg-black border border-zinc-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-xs font-semibold text-yellow-400 mb-4">
                  {item.subtitle}
                </p>

                <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-zinc-800 mb-6">
                  {item.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <span className="text-[11px] text-zinc-400 flex items-center gap-1 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-yellow-400" /> Execution in 7 Days
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mid-page Lead Capture Callout Box */}
        <div className="bg-gradient-to-r from-zinc-900 via-black to-zinc-900 p-8 sm:p-10 rounded-3xl border border-yellow-500/40 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl font-extrabold text-white">
              Ready to see what your new website could look like?
            </h3>
            <p className="text-sm text-zinc-300 max-w-xl">
              We will create a free custom homepage mockup for your Port Elizabeth business before you commit a single Rand.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0 w-full sm:w-auto">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto shimmer-btn text-black font-black text-sm px-6 py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer border border-yellow-300"
            >
              <span>Get Free Custom Mockup</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>
            
            <a
              href="tel:0415810920"
              className="w-full sm:w-auto bg-black border border-zinc-700 text-zinc-200 hover:text-white font-bold text-sm px-5 py-3.5 rounded-xl flex items-center justify-center gap-2 hover:border-yellow-400 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-yellow-400" />
              <span>041 581 0920</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
