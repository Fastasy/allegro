import React from 'react';
import { Phone, MapPin, MessageSquare, Clock, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import posthog from 'posthog-js';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

const WA_QUOTE =
  'https://wa.me/27823006996?text=' +
  encodeURIComponent(
    "Hi Allegro Digital, I'd like a quote for my business website. I'm based in Port Elizabeth.",
  );

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="contact" className="py-20 text-white relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left 6 Cols: Local Office Contact Info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-yellow-500/30 text-yellow-400 text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-yellow-400" /> Gqeberha / Port Elizabeth Office
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight font-heading">
              Ready To Fill Your Schedule With Paying <span className="text-yellow-400">Port Elizabeth Customers</span>?
            </h2>

            <p className="text-zinc-300 text-base leading-relaxed">
              Skip the long agency wait. We can have your custom website built, hosted, and ranking on <a href="/articles/how-to-get-your-sa-business-on-google-maps" className="text-yellow-400 underline hover:text-yellow-300">Google Maps</a> within 7 business days.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-2">
              <div className="glass-panel p-4 rounded-2xl border border-zinc-800 flex items-center gap-4 hover:border-yellow-400/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-black border border-zinc-700 text-yellow-400 flex items-center justify-center flex-shrink-0 font-bold">
                  <Phone className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <span className="text-[10px] text-zinc-400 uppercase font-bold block">PE Office Direct</span>
                  <a href="tel:0823006996" className="text-lg font-extrabold text-white hover:text-yellow-400 transition-colors">
                    082 300 6996
                  </a>
                </div>
              </div>

              <div className="glass-panel p-4 rounded-2xl border border-zinc-800 flex items-center gap-4 hover:border-yellow-400/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-black border border-zinc-700 text-yellow-400 flex items-center justify-center flex-shrink-0 font-bold">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] text-zinc-400 uppercase font-bold block">Instant WhatsApp Enquiries</span>
                  <a href="https://wa.me/27823006996" target="_blank" rel="noopener noreferrer" className="text-lg font-extrabold text-yellow-400 hover:underline">
                    082 300 6996 (Tap to Chat)
                  </a>
                </div>
              </div>

              <div className="glass-panel p-4 rounded-2xl border border-zinc-800 flex items-center gap-4 hover:border-yellow-400/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-black border border-zinc-700 text-yellow-400 flex items-center justify-center flex-shrink-0 font-bold">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] text-zinc-400 uppercase font-bold block">Physical Location</span>
                  <span className="text-xs font-bold text-zinc-200">
                    Summerstrand, Port Elizabeth, 6001
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-zinc-400 font-medium">
              <Clock className="w-4 h-4 text-yellow-400" />
              <span>Office Hours: Mon–Fri 08:00 – 17:00 (Weekend Emergency Support for Clients)</span>
            </div>
          </div>

          {/* Right 6 Cols: WhatsApp Quote CTA (replaces dead form — leads go straight to WhatsApp) */}
          <div className="lg:col-span-6 glass-panel p-8 rounded-3xl border border-zinc-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-yellow-400 text-black text-[10px] font-black px-3 py-1 rounded-bl-2xl uppercase tracking-wider">
              Free Consultation
            </div>

            <div className="w-14 h-14 rounded-2xl bg-yellow-400 flex items-center justify-center text-black mb-5 shadow-lg">
              <MessageSquare className="w-7 h-7" fill="currentColor" />
            </div>

            <h3 className="text-2xl font-extrabold text-white font-heading">
              Request Your 7-Day Web Quote
            </h3>
            <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
              Skip the form — send us a WhatsApp message and get a direct reply
              from our Port Elizabeth team, usually within the hour.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href={WA_QUOTE}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => posthog.capture('whatsapp_quote_clicked')}
                className="w-full shimmer-btn text-black font-black text-sm py-4 rounded-xl shadow-xl flex items-center justify-center gap-2 cursor-pointer border border-yellow-300"
              >
                <MessageSquare className="w-4 h-4 text-black" />
                <span>Get My Quote on WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </a>

              <a
                href="tel:0823006996"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-yellow-400" />
                <span>Or Call: 082 300 6996</span>
              </a>
            </div>

            <div className="mt-5 flex items-center gap-2 text-[11px] text-zinc-400">
              <ShieldCheck className="w-3.5 h-3.5 text-yellow-400" />
              <span>We keep your information 100% confidential. No spam ever.</span>
            </div>

            <div className="mt-6 pt-5 border-t border-zinc-800 flex items-center gap-2 text-xs text-zinc-400">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
              <span>
                Prefer a scheduled call?{' '}
                <button
                  onClick={onOpenBooking}
                  className="text-yellow-400 font-bold underline hover:text-yellow-300 cursor-pointer"
                >
                  Book a free 15-min strategy session
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
