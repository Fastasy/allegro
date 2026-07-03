import { useState } from 'react';
import { SplashSection } from './components/SplashSection';
import { NotificationBar } from './components/NotificationBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RevenueCalculator } from './components/RevenueCalculator';
import { SocialProof } from './components/SocialProof';
import { ProcessEngine } from './components/ProcessEngine';
import { ProductShowcase } from './components/ProductShowcase';
import { ComparisonTable } from './components/ComparisonTable';
import { Pricing } from './components/Pricing';
import { Faq } from './components/Faq';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { LeadMagnetPopup } from './components/LeadMagnetPopup';
import { CustomCursor } from './components/CustomCursor';
import { RevealOnScroll } from './components/RevealOnScroll';
import { PricingPlan } from './data/peData';

export function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingSuburb, setBookingSuburb] = useState<string>('Walmer');
  const [bookingIndustry, setBookingIndustry] = useState<string>('Trades & Emergency Services');
  const [bookingPlan, setBookingPlan] = useState<string | undefined>(undefined);

  const handleOpenBooking = () => {
    setBookingPlan(undefined);
    setBookingOpen(true);
  };

  const handleOpenBookingWithDetails = (suburb: string, industry: string) => {
    setBookingSuburb(suburb);
    setBookingIndustry(industry);
    setBookingPlan(undefined);
    setBookingOpen(true);
  };

  const handleSelectPlan = (plan: PricingPlan, cycle: 'onceOff' | 'monthly') => {
    setBookingPlan(`${plan.name} (${cycle === 'onceOff' ? 'Once-Off' : 'Monthly'})`);
    setBookingOpen(true);
  };

  const handleScrollToCalc = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-yellow-400 selection:text-black font-sans">
      
      {/* Splash Intro Section */}
      <SplashSection />

      {/* Top Urgent Notification Banner */}
      <NotificationBar onOpenBooking={handleOpenBooking} />

      {/* Glass Sticky Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Hero Section */}
      <Hero
        onOpenBooking={handleOpenBooking}
        onScrollToCalc={handleScrollToCalc}
      />

      {/* Interactive PE Revenue Loss & Lead Calculator Micro-App */}
      <RevealOnScroll>
        <RevenueCalculator
          onOpenBookingWithDetails={handleOpenBookingWithDetails}
        />
      </RevealOnScroll>

      {/* Social Proof, PE Suburbs Marquee, Stats & Sector Cards */}
      <RevealOnScroll>
        <SocialProof onOpenBooking={handleOpenBooking} />
      </RevealOnScroll>

      {/* The 3-Step Allegro Growth Framework */}
      <RevealOnScroll>
        <ProcessEngine onOpenBooking={handleOpenBooking} />
      </RevealOnScroll>

      {/* Interactive Live Web Preview Sandbox & Before/After Comparison */}
      <RevealOnScroll>
        <ProductShowcase onOpenBooking={handleOpenBooking} />
      </RevealOnScroll>

      {/* Allegro Digital vs Traditional PE Agencies */}
      <RevealOnScroll>
        <ComparisonTable onOpenBooking={handleOpenBooking} />
      </RevealOnScroll>

      {/* Transparent Fixed SA Rand Pricing (Once-off vs Monthly Toggle) */}
      <RevealOnScroll>
        <Pricing onSelectPlan={handleSelectPlan} />
      </RevealOnScroll>

      {/* Frequently Asked Questions */}
      <RevealOnScroll>
        <Faq />
      </RevealOnScroll>

      {/* Direct Contact & Quick Consultation Request Form */}
      <RevealOnScroll>
        <ContactSection onOpenBooking={handleOpenBooking} />
      </RevealOnScroll>

      {/* Localized Footer */}
      <Footer />

      {/* Interactive Appointment Scheduler & Confirmation Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialSuburb={bookingSuburb}
        initialIndustry={bookingIndustry}
        initialPlan={bookingPlan}
      />

      {/* Free Local SEO Playbook Popup */}
      <LeadMagnetPopup />

      {/* Custom Bee-Themed Cursor (Desktop Only) */}
      <CustomCursor />

    </div>
  );
}

export default App;
