import React, { useState, useEffect } from 'react';
import { Rocket, Phone, Calendar, Menu, X, CheckCircle, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Calculator', href: '#calculator' },
    { name: 'Why Allegro', href: '#why-us' },
    { name: 'Live Demos', href: '#demos' },
    { name: 'PE Stories', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-zinc-800 shadow-2xl py-3' : 'bg-black/60 backdrop-blur-md py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl group-hover:scale-105 transition-transform overflow-hidden flex items-center justify-center bg-white/5">
              <img src="/logo.png" alt="Allegro Digital Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-white font-heading">
                  ALLEGRO<span className="text-yellow-400">DIGITAL</span>
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 bg-yellow-400/10 text-yellow-300 text-[10px] font-bold px-2 py-0.5 rounded-md border border-yellow-400/20">
                  <MapPin className="w-2.5 h-2.5 text-yellow-400" /> PE / Gqeberha
                </span>
              </div>
              <p className="text-[10px] text-zinc-400 font-medium tracking-wide">
                Websites & Local Leads Agency
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-zinc-300 hover:text-yellow-400 transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:0415810920"
              className="flex items-center gap-2 px-3 py-2 text-zinc-300 hover:text-yellow-400 transition-colors text-xs font-semibold rounded-lg hover:bg-zinc-900 border border-transparent hover:border-zinc-800"
            >
              <Phone className="w-4 h-4 text-yellow-400 animate-bounce" />
              <div className="text-left">
                <span className="block text-[10px] text-zinc-400 leading-tight">Call PE Team</span>
                <span className="text-xs font-extrabold text-white">041 581 0920</span>
              </div>
            </a>

            <button
              onClick={onOpenBooking}
              className="shimmer-btn px-5 py-2.5 rounded-xl text-black font-extrabold text-xs shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer border border-yellow-300"
            >
              <Calendar className="w-4 h-4 text-black" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 text-zinc-300 hover:text-white rounded-lg bg-zinc-900 border border-zinc-800"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-yellow-400" /> : <Menu className="w-6 h-6 text-yellow-400" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-2xl border-b border-zinc-800 px-4 py-6 shadow-2xl animate-in fade-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 pb-2 border-b border-zinc-800 text-xs text-zinc-400">
              <CheckCircle className="w-4 h-4 text-yellow-400" />
              <span>Gqeberha Local Office: Summerstrand</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-zinc-200 hover:text-yellow-400 transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-zinc-800 flex flex-col gap-3">
              <a
                href="tel:0415810920"
                className="flex items-center justify-center gap-2 py-3 bg-zinc-900 border border-zinc-700 rounded-xl font-bold text-sm text-yellow-400"
              >
                <Phone className="w-4 h-4" /> Call PE Office: 041 581 0920
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full shimmer-btn text-black py-3 rounded-xl font-extrabold text-sm shadow-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" /> Book Free Strategy Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
