import React from 'react';
import { Rocket, MapPin, Phone, MessageSquare, Heart, ShieldCheck } from 'lucide-react';
import { PE_SUBURBS } from '../data/peData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zinc-800 text-zinc-400 text-xs py-16 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl group-hover:scale-105 transition-transform overflow-hidden flex items-center justify-center bg-white/5">
                <img src="/logo.png" alt="Allegro Digital Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white font-heading tracking-tight">
                  ALLEGRO<span className="text-yellow-400">DIGITAL</span>
                </span>
                <p className="text-[10px] text-zinc-400 font-medium">
                  Websites & Google SEO for Port Elizabeth
                </p>
              </div>
            </a>

            <p className="text-zinc-400 leading-relaxed text-xs">
              Allegro Digital is Gqeberha's premier web design and local SEO agency specializing in small businesses without websites. We build fast, high-converting digital engines that turn local searches into booked phone calls and sales.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="tel:0415810920"
                className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 px-3 py-2 rounded-lg flex items-center gap-1.5 font-bold text-xs hover:border-yellow-400 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-yellow-400" /> 041 581 0920
              </a>
              <a
                href="https://wa.me/27821234567"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 hover:bg-yellow-300 text-black px-3 py-2 rounded-lg flex items-center gap-1.5 font-black text-xs transition-all shadow"
              >
                <MessageSquare className="w-3.5 h-3.5 text-black" /> WhatsApp Us
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider font-heading">
              Growth Links
            </h4>
            <ul className="space-y-2">
              <li><a href="#calculator" className="hover:text-yellow-400 transition-colors">PE Revenue Calculator</a></li>
              <li><a href="#why-us" className="hover:text-yellow-400 transition-colors">3-Step Growth Engine</a></li>
              <li><a href="#demos" className="hover:text-yellow-400 transition-colors">Live Industry Demos</a></li>
              <li><a href="#testimonials" className="hover:text-yellow-400 transition-colors">Client Case Studies</a></li>
              <li><a href="#pricing" className="hover:text-yellow-400 transition-colors">Fixed SA Pricing</a></li>
              <li><a href="#faq" className="hover:text-yellow-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Col 3: Local Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider font-heading">
              Services Offered
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li>• Port Elizabeth Custom Web Design</li>
              <li>• Google Maps & Business Profile Setup</li>
              <li>• Mobile 1-Tap Tap-To-Call Integration</li>
              <li>• Automated WhatsApp Chat Leads</li>
              <li>• Local Search Engine Optimization (SEO)</li>
              <li>• High Speed SA Cloud Web Hosting</li>
            </ul>
          </div>

          {/* Col 4: Suburbs Covered (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider font-heading flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-yellow-400" /> Port Elizabeth Suburbs
            </h4>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {PE_SUBURBS.map((suburb) => (
                <span key={suburb} className="bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-300 px-2 py-1 rounded">
                  {suburb}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Local SA SEO Tag Cloud */}
        <div className="pt-8 border-t border-zinc-900 text-[11px] text-zinc-400 flex flex-wrap gap-x-4 gap-y-1.5 justify-center text-center">
          <span>Web Design Port Elizabeth</span>
          <span>•</span>
          <span>Google SEO Gqeberha</span>
          <span>•</span>
          <span>Plumber Website Design Walmer</span>
          <span>•</span>
          <span>Guest House Web Design Summerstrand</span>
          <span>•</span>
          <span>Attorney SEO Newton Park</span>
          <span>•</span>
          <span>Local Lead Generation Eastern Cape</span>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Allegro Digital (Pty) Ltd. Made with</span>
            <Heart className="w-3 h-3 text-yellow-400 fill-yellow-400 inline" />
            <span>in Baakens Valley, Port Elizabeth.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-yellow-400 font-bold">
              <ShieldCheck className="w-3.5 h-3.5" /> POPIA Compliant & Secure
            </span>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
