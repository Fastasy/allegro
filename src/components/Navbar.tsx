'use client';

import React, { useState, useEffect } from 'react';
import { Rocket, Phone, Calendar, Menu, X, CheckCircle, MapPin, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Responsive desktop navigation links (essential items)
  const navLinks = [
    { name: 'Our Work', href: '/work', isRoute: true },
    { name: 'Demos', href: '/#demos', isRoute: false },
    { name: 'Calculator', href: '/#calculator', isRoute: false },
    { name: 'Pricing', href: '/#pricing', isRoute: false },
    { name: 'Articles', href: '/articles', isRoute: true }
  ];

  // Full links for mobile dropdown menu
  const mobileNavLinks = [
    { name: 'Calculator', href: '/#calculator', isRoute: false },
    { name: 'Why Allegro', href: '/#why-us', isRoute: false },
    { name: 'Our Work', href: '/work', isRoute: true },
    { name: 'Live Demos', href: '/#demos', isRoute: false },
    { name: 'Pricing', href: '/#pricing', isRoute: false },
    { name: 'FAQ', href: '/#faq', isRoute: false },
    { name: 'Articles', href: '/articles', isRoute: true }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isRoute: boolean) => {
    if (!isRoute && pathname !== '/') {
      // If we are on a subpage and click a hash link, let the browser handle it
      return;
    }
    
    if (!isRoute && href.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    }
  };

  // Apply top offset below yellow announcement banner when scrolled to the top
  const isAtTopWithBanner = !scrolled;

  return (
    <header className="relative z-40 w-[95%] max-w-7xl mx-auto pt-4 pb-2">
      <div className={`mx-auto rounded-2xl sm:rounded-3xl border transition-all duration-300 px-4 sm:px-6 lg:px-8 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] ${
        scrolled 
          ? 'py-2 bg-black/85 border-zinc-800/80' 
          : 'py-3.5 bg-black/60 border-zinc-900/40'
      }`}>
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo Container */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl group-hover:scale-105 group-hover:rotate-3 transition-all duration-300 overflow-hidden flex items-center justify-center bg-white/5 border border-zinc-800/80 shadow-lg">
              <img src="/logo.png" alt="Allegro Digital Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-black text-base sm:text-lg tracking-tight text-white font-heading">
                  ALLEGRO<span className="text-yellow-400">DIGITAL</span>
                </span>
                <span className="hidden xl:inline-flex items-center gap-1 bg-yellow-400/10 text-yellow-300 text-[9px] font-bold px-1.5 py-0.5 rounded border border-yellow-400/20">
                  <MapPin className="w-2 h-2 text-yellow-400" /> PE
                </span>
              </div>
              <p className="text-[9px] text-zinc-400 font-medium tracking-wide">
                Websites & Local Leads
              </p>
            </div>
          </Link>

          {/* Creative Desktop Dock Menu */}
          <nav className="hidden lg:flex items-center bg-zinc-900/40 border border-zinc-800/50 rounded-full px-5 py-1.5 shadow-inner">
            <div className="flex items-center gap-1 sm:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return link.isRoute ? (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                      isActive 
                        ? 'bg-yellow-400 text-black font-extrabold shadow' 
                        : 'text-zinc-300 hover:text-yellow-400 hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href, link.isRoute)}
                    className="px-3 py-1.5 rounded-full text-xs font-bold text-zinc-300 hover:text-yellow-400 hover:bg-white/5 transition-all"
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* Phone Button */}
            <a
              href="tel:0823006996"
              className="hidden sm:flex items-center gap-2.5 bg-zinc-900/60 border border-zinc-800 px-3.5 py-1.5 rounded-xl hover:border-yellow-400/30 hover:bg-zinc-900 transition-all duration-300 group"
            >
              <div className="w-7 h-7 rounded-lg bg-black border border-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Phone className="w-3 h-3 text-yellow-400" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[8px] text-zinc-500 font-bold uppercase tracking-widest leading-none mb-0.5">Call Office</span>
                <span className="text-[11px] font-extrabold text-white leading-none">082 300 6996</span>
              </div>
            </a>

            {/* Glowing Calendar Button */}
            <button
              onClick={onOpenBooking}
              className="shimmer-btn px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-black font-black text-xs shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer border border-yellow-300"
            >
              <Calendar className="w-3.5 h-3.5 text-black" />
              <span className="hidden xs:inline">Book Demo</span>
              <span className="xs:hidden">Book</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="lg:hidden p-2 text-zinc-300 hover:text-white rounded-xl bg-zinc-900 border border-zinc-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-yellow-400" /> : <Menu className="w-5 h-5 text-yellow-400" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Glassmorphic Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 bg-black/95 backdrop-blur-2xl border border-zinc-800/80 rounded-2xl px-5 py-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 pb-1 text-xs text-zinc-400">
              <CheckCircle className="w-4 h-4 text-yellow-400" />
              <span>PE Local Lead Engines • Summerstrand</span>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              {mobileNavLinks.map((link) => {
                const isActive = pathname === link.href;
                return link.isRoute ? (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-bold text-center border ${
                      isActive 
                        ? 'bg-yellow-400 text-black border-yellow-400' 
                        : 'bg-zinc-900/60 text-zinc-200 border-zinc-800/80 hover:text-yellow-400'
                    }`}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      handleLinkClick(e, link.href, link.isRoute);
                      setMobileMenuOpen(false);
                    }}
                    className="px-4 py-2.5 rounded-xl text-sm font-bold text-center bg-zinc-900/60 text-zinc-200 border border-zinc-800/80 hover:text-yellow-400"
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <a
                href="tel:0823006996"
                className="w-full bg-zinc-900 border border-zinc-850 text-white font-bold text-xs py-3.5 rounded-xl hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-yellow-400" /> Call Office: 082 300 6996
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full shimmer-btn text-black py-3 rounded-xl font-extrabold text-sm shadow-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" /> Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
