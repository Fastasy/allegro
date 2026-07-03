import React, { useState } from 'react';
import { FAQS } from '../data/peData';
import { ChevronDown, HelpCircle, Phone, Sparkles } from 'lucide-react';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-black text-white relative overflow-hidden border-t border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-yellow-500/30 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-yellow-400" /> Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Got Questions About Web Design & Local SEO in <span className="text-yellow-400">Port Elizabeth</span>?
          </h2>
          <p className="mt-3 text-zinc-300 text-base">
            Everything you need to know about getting your business online and ranking #1 on Google.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-panel rounded-2xl border border-zinc-800 transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-white hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 bg-yellow-400 text-black border-yellow-400' : 'text-white'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm text-zinc-300 leading-relaxed border-t border-zinc-800 mt-2">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 text-center bg-zinc-900 p-6 rounded-2xl border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-400" /> Have a specific question about your PE business?
            </h4>
            <p className="text-xs text-zinc-400 mt-0.5">
              Speak directly with our local Port Elizabeth strategist on phone or WhatsApp.
            </p>
          </div>
          <a
            href="tel:0415810920"
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-black text-xs px-5 py-3 rounded-xl transition-colors flex items-center gap-2 flex-shrink-0 shadow"
          >
            <Phone className="w-4 h-4 fill-black" />
            <span>Call PE Strategist: 041 581 0920</span>
          </a>
        </div>

      </div>
    </section>
  );
};
