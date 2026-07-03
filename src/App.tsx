import { useState } from 'react';
import { NotificationBar } from './components/NotificationBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RevenueCalculator } from './components/RevenueCalculator';
import { SocialProof } from './components/SocialProof';
import { ProcessEngine } from './components/ProcessEngine';
import { ProductShowcase } from './components/ProductShowcase';
import { ComparisonTable } from './components/ComparisonTable';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Faq } from './components/Faq';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { LeadMagnetPopup } from './components/LeadMagnetPopup';
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
      <RevenueCalculator
        onOpenBookingWithDetails={handleOpenBookingWithDetails}
      />

      {/* Social Proof, PE Suburbs Marquee, Stats & Sector Cards */}
      <SocialProof onOpenBooking={handleOpenBooking} />

      {/* The 3-Step Allegro Growth Framework */}
      <ProcessEngine onOpenBooking={handleOpenBooking} />

      {/* Interactive Live Web Preview Sandbox & Before/After Comparison */}
      <ProductShowcase onOpenBooking={handleOpenBooking} />

      {/* Allegro Digital vs Traditional PE Agencies */}
      <ComparisonTable onOpenBooking={handleOpenBooking} />

      {/* Local PE Client Success Stories & Review Metric Cards */}
      <Testimonials onOpenBooking={handleOpenBooking} />

      {/* Transparent Fixed SA Rand Pricing (Once-off vs Monthly Toggle) */}
      <Pricing onSelectPlan={handleSelectPlan} />

      {/* Frequently Asked Questions */}
      <Faq />

      {/* Direct Contact & Quick Consultation Request Form */}
      <ContactSection onOpenBooking={handleOpenBooking} />

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

    </div>
  );
}

export default App;
