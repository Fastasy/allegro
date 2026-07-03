import React from 'react';
import { TESTIMONIALS } from '../data/peData';
import { Star, MapPin, Quote, TrendingUp, CheckCircle } from 'lucide-react';

interface TestimonialsProps {
  onOpenBooking: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onOpenBooking }) => {
  return (
    <section id="testimonials" className="py-20 bg-black text-white relative overflow-hidden border-t border-zinc-800">
      
      {/* Background radial highlight */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-yellow-500/30 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-3">
            <CheckCircle className="w-3.5 h-3.5 text-yellow-400" /> Verified Local Port Elizabeth Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Real Port Elizabeth Business Owners. <span className="text-yellow-400">Real Lead Growth.</span>
          </h2>
          <p className="mt-3 text-zinc-300 text-base sm:text-lg">
            See how Gqeberha electricians, guest houses, and law firms transformed their revenue with our web design and Google SEO framework.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-zinc-800 hover:border-yellow-400/60 transition-all hover:-translate-y-2 flex flex-col justify-between relative shadow-xl group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-zinc-800 group-hover:text-yellow-400/20 transition-colors pointer-events-none" />

              <div>
                {/* Result Badge */}
                <div className="inline-block bg-yellow-400/15 border border-yellow-400/30 text-yellow-400 text-xs font-black px-3 py-1 rounded-full mb-4">
                  {t.badge}
                </div>

                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                  <span className="text-xs text-zinc-400 font-bold ml-1">5.0 Verified Review</span>
                </div>

                {/* Quote Text */}
                <p className="text-sm text-zinc-200 leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>

                {/* Before vs After Lead Metric Chip */}
                <div className="bg-black rounded-2xl p-3 border border-zinc-800 mb-6 flex items-center justify-around text-center">
                  <div>
                    <span className="text-[10px] text-zinc-400 uppercase font-bold block">Before</span>
                    <span className="text-xs font-bold text-zinc-400">{t.beforeLeads}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-yellow-400 text-black flex items-center justify-center font-bold">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-yellow-400 uppercase font-bold block">After Allegro</span>
                    <span className="text-sm font-extrabold text-white">{t.afterLeads}</span>
                  </div>
                </div>
              </div>

              {/* Author Bio */}
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400"
                />
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">{t.name}</h4>
                  <p className="text-xs text-zinc-400">{t.role} • {t.company}</p>
                  <span className="text-[10px] text-yellow-400 flex items-center gap-1 mt-0.5 font-semibold">
                    <MapPin className="w-2.5 h-2.5 text-yellow-400" /> {t.suburb}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>



      </div>
    </section>
  );
};
