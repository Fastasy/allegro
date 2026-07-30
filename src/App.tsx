import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

import { Home } from './pages/Home';
import { ArticlesList } from './pages/ArticlesList';
import { ArticleView } from './pages/ArticleView';
import { BrandStudio } from './pages/BrandStudio';

import { SplashSection } from './components/SplashSection';
import { NotificationBar } from './components/NotificationBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { CustomCursor } from './components/CustomCursor';
import { AnimatedBackground } from './components/AnimatedBackground';
import { PricingPlan } from './data/peData';

export function App() {
  const location = useLocation();
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

  return (
    <div className="min-h-screen text-zinc-100 font-sans selection:bg-yellow-400 selection:text-black relative">
      <AnimatedBackground />
      {location.pathname === '/' && <SplashSection />}
      <NotificationBar onOpenBooking={handleOpenBooking} />
      <Navbar onOpenBooking={handleOpenBooking} />

      <Routes>
        <Route 
          path="/" 
          element={
            <Home 
              onOpenBooking={handleOpenBooking}
              onOpenBookingWithDetails={handleOpenBookingWithDetails}
              onSelectPlan={handleSelectPlan}
            />
          } 
        />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:slug" element={<ArticleView onOpenBooking={handleOpenBooking} />} />
        <Route path="/brand-studio" element={<BrandStudio />} />
      </Routes>

      <Footer />
      
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialSuburb={bookingSuburb}
        initialIndustry={bookingIndustry}
        initialPlan={bookingPlan}
      />
      <CustomCursor />
      <Analytics />
    </div>
  );
}

export default App;
