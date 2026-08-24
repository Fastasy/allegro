import React from 'react';
import dynamic from 'next/dynamic';
import { Hero } from '../components/Hero';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { PricingPlan } from '../data/peData';

// Below-the-fold sections are code-split so they don't ship in the initial JS bundle.
// Hero stays eager — it's the LCP.
const RevenueCalculator = dynamic(() => import('../components/RevenueCalculator').then((m) => m.RevenueCalculator), { ssr: true });
const PortfolioSlider = dynamic(() => import('../components/PortfolioSlider').then((m) => m.PortfolioSlider), { ssr: true });
const ProcessEngine = dynamic(() => import('../components/ProcessEngine').then((m) => m.ProcessEngine), { ssr: true });
const ProductShowcase = dynamic(() => import('../components/ProductShowcase').then((m) => m.ProductShowcase), { ssr: true });
const ComparisonTable = dynamic(() => import('../components/ComparisonTable').then((m) => m.ComparisonTable), { ssr: true });
const Pricing = dynamic(() => import('../components/Pricing').then((m) => m.Pricing), { ssr: true });
const Faq = dynamic(() => import('../components/Faq').then((m) => m.Faq), { ssr: true });
const ContactSection = dynamic(() => import('../components/ContactSection').then((m) => m.ContactSection), { ssr: true });

interface HomeProps {
  onOpenBooking: () => void;
  onOpenBookingWithDetails: (suburb: string, industry: string) => void;
  onSelectPlan: (plan: PricingPlan, cycle: 'onceOff' | 'monthly') => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenBooking, onOpenBookingWithDetails, onSelectPlan }) => {
  const handleScrollToCalc = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Hero
        onOpenBooking={onOpenBooking}
        onScrollToCalc={handleScrollToCalc}
      />

      <RevealOnScroll>
        <RevenueCalculator
          onOpenBookingWithDetails={onOpenBookingWithDetails}
        />
      </RevealOnScroll>

      <RevealOnScroll>
        <PortfolioSlider />
      </RevealOnScroll>

      <RevealOnScroll>
        <ProcessEngine onOpenBooking={onOpenBooking} />
      </RevealOnScroll>

      <RevealOnScroll>
        <ProductShowcase onOpenBooking={onOpenBooking} />
      </RevealOnScroll>

      <RevealOnScroll>
        <ComparisonTable onOpenBooking={onOpenBooking} />
      </RevealOnScroll>

      <RevealOnScroll>
        <Pricing onSelectPlan={onSelectPlan} />
      </RevealOnScroll>

      <RevealOnScroll>
        <Faq />
      </RevealOnScroll>

      <RevealOnScroll>
        <ContactSection onOpenBooking={onOpenBooking} />
      </RevealOnScroll>
    </>
  );
};
