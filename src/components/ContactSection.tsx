import React, { useState } from 'react';
import { Phone, MapPin, MessageSquare, Clock, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { PE_SUBURBS } from '../data/peData';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    suburb: 'Walmer',
    industry: 'Plumbing / Electrical / Trades',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.7 }
    });
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-black text-white relative overflow-hidden border-t border-zinc-800">
      
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
              Skip the long agency wait. We can have your custom website built, hosted, and ranking on Google Maps within 7 business days.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-2">
              <div className="glass-panel p-4 rounded-2xl border border-zinc-800 flex items-center gap-4 hover:border-yellow-400/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-black border border-zinc-700 text-yellow-400 flex items-center justify-center flex-shrink-0 font-bold">
                  <Phone className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <span className="text-[10px] text-zinc-400 uppercase font-bold block">PE Office Landline</span>
                  <a href="tel:0415810920" className="text-lg font-extrabold text-white hover:text-yellow-400 transition-colors">
                    041 581 0920
                  </a>
                </div>
              </div>

              <div className="glass-panel p-4 rounded-2xl border border-zinc-800 flex items-center gap-4 hover:border-yellow-400/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-black border border-zinc-700 text-yellow-400 flex items-center justify-center flex-shrink-0 font-bold">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] text-zinc-400 uppercase font-bold block">Instant WhatsApp Enquiries</span>
                  <a href="https://wa.me/27821234567" target="_blank" rel="noopener noreferrer" className="text-lg font-extrabold text-yellow-400 hover:underline">
                    082 123 4567 (Tap to Chat)
                  </a>
                </div>
              </div>

              <div className="glass-panel p-4 rounded-2xl border border-zinc-800 flex items-center gap-4 hover:border-yellow-400/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-black border border-zinc-700 text-yellow-400 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] text-zinc-400 uppercase font-bold block">Physical Location</span>
                  <span className="text-xs font-bold text-zinc-200">
                    Baakens Valley Creative Hub, Lower Valley Rd, Port Elizabeth, 6001
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-zinc-400 font-medium">
              <Clock className="w-4 h-4 text-yellow-400" />
              <span>Office Hours: Mon–Fri 08:00 – 17:00 (Weekend Emergency Support for Clients)</span>
            </div>
          </div>

          {/* Right 6 Cols: Quick Quote Request Form */}
          <div className="lg:col-span-6 glass-panel p-8 rounded-3xl border border-zinc-800 shadow-2xl relative">
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                  <h3 className="text-xl font-extrabold text-white font-heading">
                    Request 7-Day Web Quote
                  </h3>
                  <span className="text-[10px] bg-yellow-400 text-black font-black px-2.5 py-1 rounded-full uppercase">
                    Free Consultation
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sipho Dlamini"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-yellow-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">Cell / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="082 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-yellow-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-zinc-300 mb-1">PE Suburb</label>
                    <select
                      value={formData.suburb}
                      onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                      className="w-full bg-black border border-zinc-700 rounded-xl px-3 py-3 text-xs text-white outline-none focus:border-yellow-400"
                    >
                      {PE_SUBURBS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-300 mb-1">Industry</label>
                    <input
                      type="text"
                      placeholder="e.g. Electrical / Legal"
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full bg-black border border-zinc-700 rounded-xl px-3 py-3 text-xs text-white outline-none focus:border-yellow-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">Brief Description of Your Business</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us what services you offer and if you have an existing domain..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-yellow-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full shimmer-btn text-black font-black text-sm py-4 rounded-xl shadow-xl flex items-center justify-center gap-2 cursor-pointer border border-yellow-300"
                >
                  <span>Submit For Free PE Web Analysis</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </button>

                <div className="text-[10px] text-zinc-400 text-center flex items-center justify-center gap-1 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-yellow-400" />
                  <span>We keep your information 100% confidential. No spam ever.</span>
                </div>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-yellow-400 text-black rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-extrabold text-white font-heading">
                  Request Received!
                </h4>
                <p className="text-sm text-zinc-300 max-w-sm mx-auto">
                  Thank you <strong>{formData.name}</strong>. A Port Elizabeth growth strategist will review your suburb market ({formData.suburb}) and contact you shortly.
                </p>
                <button
                  onClick={onOpenBooking}
                  className="shimmer-btn text-black font-black text-xs px-6 py-3 rounded-xl shadow cursor-pointer border border-yellow-300"
                >
                  Or Schedule 15-Min Strategy Session Now
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
