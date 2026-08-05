import React from 'react';
import { Hero } from '../components/Hero';
import { RevenueCalculator } from '../components/RevenueCalculator';
import { SocialProof } from '../components/SocialProof';
import { ProcessEngine } from '../components/ProcessEngine';
import { ComparisonTable } from '../components/ComparisonTable';
import { Pricing } from '../components/Pricing';
import { Faq } from '../components/Faq';
import { ContactSection } from '../components/ContactSection';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { ProductShowcase } from '../components/ProductShowcase';
import { PricingPlan } from '../data/peData';

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
        <SocialProof onOpenBooking={onOpenBooking} />
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
