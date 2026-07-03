import React, { useState, useEffect } from 'react';
import { Download, X, Check, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';

export const LeadMagnetPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    let triggered = false;

    const showPopup = () => {
      const hasSeen = sessionStorage.getItem('allegro_lead_magnet_seen_v2');
      if (!hasSeen && !triggered) {
        triggered = true;
        setIsOpen(true);
      }
    };

    // Show popup after 20 seconds
    const timer = setTimeout(() => {
      showPopup();
    }, 20000);

    // Or show popup on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Trigger when scrolled halfway down the page
      if (scrollPosition > (documentHeight - windowHeight) / 2) {
        showPopup();
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClose = () => {
    sessionStorage.setItem('allegro_lead_magnet_seen_v2', 'true');
    setIsOpen(false);
  };

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
    setDownloaded(true);
    setTimeout(() => {
      handleClose();
    }, 3500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200 text-white">
      <div className="bg-zinc-950 border border-yellow-400/40 rounded-3xl max-w-md w-full p-6 shadow-2xl relative overflow-hidden text-left">
        
        <button
          onClick={handleClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 rounded-full bg-black text-zinc-400 hover:text-white border border-zinc-800 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {!downloaded ? (
          <div>
            <div className="w-12 h-12 rounded-2xl bg-yellow-400 flex items-center justify-center text-black mb-4 shadow-lg font-bold">
              <FileText className="w-6 h-6 text-black" />
            </div>

            <span className="bg-zinc-900 text-yellow-400 text-[10px] font-black px-2.5 py-0.5 rounded border border-yellow-400/30 uppercase tracking-wider">
              Free Port Elizabeth Growth Guide
            </span>

            <h3 className="text-xl font-extrabold text-white mt-2 mb-2 font-heading">
              How Port Elizabeth Businesses Get 20+ New Local Leads Every Month
            </h3>

            <p className="text-xs text-zinc-300 mb-4 leading-relaxed">
              Download our 2026 Gqeberha SEO & Web Design playbook showing exact keywords and Google Maps strategies used by top PE plumbers, attorneys, and B&Bs.
            </p>

            <form onSubmit={handleDownload} className="space-y-3">
              <div>
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-yellow-400"
                />
              </div>

              <button
                type="submit"
                className="w-full shimmer-btn text-black font-black text-xs py-3.5 rounded-xl shadow-xl flex items-center justify-center gap-2 cursor-pointer border border-yellow-300"
              >
                <Download className="w-4 h-4 text-black" />
                <span>Instant Free PDF Download</span>
              </button>
            </form>

            <div className="mt-3 flex items-center justify-center gap-2 text-[10px] text-zinc-400 font-medium">
              <Check className="w-3 h-3 text-yellow-400" />
              <span>100% Free • No credit card required</span>
            </div>
          </div>
        ) : (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 bg-yellow-400 text-black rounded-full flex items-center justify-center mx-auto shadow font-bold">
              <Check className="w-6 h-6 text-black" />
            </div>
            <h4 className="text-lg font-bold text-white">Guide Sent To Your Email!</h4>
            <p className="text-xs text-zinc-300">
              Check your inbox ({email}) for your free copy of the PE Small Business Growth Playbook.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};
