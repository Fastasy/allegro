'use client';

import React, { useEffect } from 'react';
import { BookingProvider, useBooking } from '@/context/BookingContext';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { NotificationBar } from '@/components/NotificationBar';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BookingModal } from '@/components/BookingModal';
import { Analytics } from '@vercel/analytics/react';
import Lenis from 'lenis';
import '../../instrumentation-client';

function AppLayoutInner({ children }: { children: React.ReactNode }) {
  const {
    bookingOpen,
    setBookingOpen,
    bookingSuburb,
    bookingIndustry,
    bookingPlan,
    handleOpenBooking,
  } = useBooking();

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      touchMultiplier: 1.5,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen text-zinc-100 font-sans selection:bg-yellow-400 selection:text-black relative">
      <AnimatedBackground />
      <NotificationBar onOpenBooking={handleOpenBooking} />
      <Navbar onOpenBooking={handleOpenBooking} />

      {children}

      <Footer />

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialSuburb={bookingSuburb}
        initialIndustry={bookingIndustry}
        initialPlan={bookingPlan}
      />
      <Analytics />
    </div>
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <BookingProvider>
      <AppLayoutInner>{children}</AppLayoutInner>
    </BookingProvider>
  );
}
