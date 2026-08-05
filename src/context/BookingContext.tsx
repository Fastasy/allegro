'use client';

import React, { createContext, useContext, useState } from 'react';
import { PricingPlan } from '@/data/peData';
import posthog from 'posthog-js';

interface BookingContextType {
  bookingOpen: boolean;
  setBookingOpen: (open: boolean) => void;
  bookingSuburb: string;
  setBookingSuburb: (suburb: string) => void;
  bookingIndustry: string;
  setBookingIndustry: (industry: string) => void;
  bookingPlan: string | undefined;
  setBookingPlan: (plan: string | undefined) => void;
  handleOpenBooking: () => void;
  handleOpenBookingWithDetails: (suburb: string, industry: string) => void;
  handleSelectPlan: (plan: PricingPlan, cycle: 'onceOff' | 'monthly') => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingSuburb, setBookingSuburb] = useState<string>('Walmer');
  const [bookingIndustry, setBookingIndustry] = useState<string>('Trades & Emergency Services');
  const [bookingPlan, setBookingPlan] = useState<string | undefined>(undefined);

  const handleOpenBooking = () => {
    posthog.capture('strategy_booking_started');
    setBookingPlan(undefined);
    setBookingOpen(true);
  };

  const handleOpenBookingWithDetails = (suburb: string, industry: string) => {
    posthog.capture('strategy_booking_started', {
      entry_point: 'revenue_calculator',
      suburb,
      industry,
    });
    setBookingSuburb(suburb);
    setBookingIndustry(industry);
    setBookingPlan(undefined);
    setBookingOpen(true);
  };

  const handleSelectPlan = (plan: PricingPlan, cycle: 'onceOff' | 'monthly') => {
    const billingCycle = cycle === 'onceOff' ? 'once_off' : 'monthly';
    posthog.capture('pricing_plan_selected', {
      plan_name: plan.name,
      billing_cycle: billingCycle,
    });
    setBookingPlan(`${plan.name} (${cycle === 'onceOff' ? 'Once-Off' : 'Monthly'})`);
    setBookingOpen(true);
  };

  return (
    <BookingContext.Provider
      value={{
        bookingOpen,
        setBookingOpen,
        bookingSuburb,
        setBookingSuburb,
        bookingIndustry,
        setBookingIndustry,
        bookingPlan,
        setBookingPlan,
        handleOpenBooking,
        handleOpenBookingWithDetails,
        handleSelectPlan,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
