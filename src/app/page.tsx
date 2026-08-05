'use client';

import React from 'react';
import { useBooking } from '@/context/BookingContext';
import { Home } from '@/views/Home';

export default function HomePage() {
  const { handleOpenBooking, handleOpenBookingWithDetails, handleSelectPlan } = useBooking();

  return (
    <Home
      onOpenBooking={handleOpenBooking}
      onOpenBookingWithDetails={handleOpenBookingWithDetails}
      onSelectPlan={handleSelectPlan}
    />
  );
}
