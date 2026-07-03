import React, { useState, useEffect } from 'react';
import { X, Calendar as CalendarIcon, Clock, CheckCircle2, Sparkles, ShieldCheck, ArrowRight, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PE_SUBURBS } from '../data/peData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSuburb?: string;
  initialIndustry?: string;
  initialPlan?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialSuburb = 'Walmer',
  initialIndustry = 'Trades & Emergency Services',
  initialPlan
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Form States
  const [selectedDate, setSelectedDate] = useState<string>('Tomorrow');
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM');
  const [fullName, setFullName] = useState<string>('');
  const [businessName, setBusinessName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [suburb, setSuburb] = useState<string>(initialSuburb);
  const [industry, setIndustry] = useState<string>(initialIndustry);
  const [notes, setNotes] = useState<string>('');

  useEffect(() => {
    if (initialSuburb) setSuburb(initialSuburb);
    if (initialIndustry) setIndustry(initialIndustry);
  }, [initialSuburb, initialIndustry]);

  if (!isOpen) return null;

  const dates = [
    { label: 'Tomorrow', day: 'Wed, 22 Oct' },
    { label: 'Day After', day: 'Thu, 23 Oct' },
    { label: 'Friday', day: 'Fri, 24 Oct' },
    { label: 'Monday', day: 'Mon, 27 Oct' }
  ];

  const timeSlots = [
    '09:00 AM',
    '10:30 AM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM'
  ];

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      // Trigger Confetti & Submit
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
      
      const message = `*New Website Enquiry*\n\n*Name:* ${fullName}\n*Business:* ${businessName}\n*Phone:* ${phone}\n*Date & Time:* ${selectedDate} @ ${selectedTime}\n*Suburb:* ${suburb}\n*Industry:* ${industry}\n*Notes:* ${notes || 'None'}`;
      window.open(`https://wa.me/27823006996?text=${encodeURIComponent(message)}`, '_blank');
      
      setStep(3);
    }
  };

  const resetAndClose = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200 text-white">
      <div className="bg-zinc-950 border border-yellow-500/40 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-400/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-black border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-zinc-900 border border-yellow-500/30 text-yellow-400 text-[11px] font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3 h-3 text-yellow-400" /> Port Elizabeth Local Consultation
          </div>
          <h3 className="text-2xl font-extrabold text-white font-heading">
            {step === 3 ? '🎉 Appointment Confirmed!' : 'Book Free 15-Min Strategy Session'}
          </h3>
          <p className="text-xs text-zinc-400 mt-1">
            {step === 3
              ? 'Our Port Elizabeth team will call you at your requested time slot.'
              : 'Zero high-pressure sales. We review your local PE search potential and show you a custom web layout.'}
          </p>
        </div>

        {/* Step Indicator */}
        {step < 3 && (
          <div className="flex items-center justify-between mb-6 bg-black p-1 rounded-xl border border-zinc-800 text-xs font-bold">
            <div className={`flex-1 text-center py-2 rounded-lg transition-colors ${step === 1 ? 'bg-yellow-400 text-black font-extrabold' : 'text-zinc-400'}`}>
              1. Choose Date & Time
            </div>
            <div className={`flex-1 text-center py-2 rounded-lg transition-colors ${step === 2 ? 'bg-yellow-400 text-black font-extrabold' : 'text-zinc-400'}`}>
              2. Your Details
            </div>
          </div>
        )}

        {/* STEP 1: SELECT DATE & TIME */}
        {step === 1 && (
          <div className="space-y-5">
            {initialPlan && (
              <div className="bg-zinc-900 border border-yellow-400/40 p-3 rounded-xl text-xs text-zinc-300 flex items-center justify-between font-bold">
                <span>Selected Package: <strong className="text-white">{initialPlan}</strong></span>
                <span className="text-yellow-400 font-extrabold">Priority Slot</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-2 flex items-center gap-1">
                <CalendarIcon className="w-3.5 h-3.5 text-yellow-400" /> Select Date:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {dates.map((d) => (
                  <button
                    key={d.label}
                    type="button"
                    onClick={() => setSelectedDate(d.label)}
                    className={`p-3 rounded-xl text-left border text-xs transition-all cursor-pointer ${
                      selectedDate === d.label
                        ? 'bg-yellow-400 text-black border-yellow-400 font-extrabold shadow'
                        : 'bg-black border-zinc-800 text-zinc-300 hover:border-zinc-700'
                    }`}
                  >
                    <div className="font-extrabold">{d.label}</div>
                    <div className={`text-[10px] ${selectedDate === d.label ? 'text-zinc-800' : 'text-zinc-400'}`}>{d.day}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-2 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-yellow-400" /> Select Time Slot (SAST):
              </label>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSelectedTime(t)}
                    className={`py-2 px-2 rounded-xl text-center border text-xs transition-all cursor-pointer ${
                      selectedTime === t
                        ? 'bg-yellow-400 text-black border-yellow-400 font-black shadow'
                        : 'bg-black border-zinc-800 text-zinc-300 hover:border-zinc-700'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setStep(2)}
              className="w-full shimmer-btn text-black font-black text-sm py-4 rounded-xl shadow-xl flex items-center justify-center gap-2 cursor-pointer border border-yellow-300"
            >
              <span>Continue To Details</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>
          </div>
        )}

        {/* STEP 2: USER DETAILS FORM */}
        {step === 2 && (
          <form onSubmit={handleNextStep} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Johan van Zyl"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-yellow-400"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-1">
                Business Name or Trade *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Algoa Plumbing & Solar"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-yellow-400"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-1">
                Cell / WhatsApp Number (for reminder SMS) *
              </label>
              <input
                type="tel"
                required
                placeholder="082 123 4567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-yellow-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">
                  Port Elizabeth Suburb
                </label>
                <select
                  value={suburb}
                  onChange={(e) => setSuburb(e.target.value)}
                  className="w-full bg-black border border-zinc-700 rounded-xl px-3 py-2.5 text-xs text-white outline-none focus:border-yellow-400"
                >
                  {PE_SUBURBS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">
                  Industry
                </label>
                <input
                  type="text"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full bg-black border border-zinc-700 rounded-xl px-3 py-2.5 text-xs text-white outline-none focus:border-yellow-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-1">
                Anything specific you want to ask? (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Need WhatsApp quote button & Google Maps setup in Walmer"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-black border border-zinc-700 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-yellow-400"
              />
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/3 bg-black border border-zinc-700 text-zinc-300 font-bold text-xs py-3 rounded-xl hover:bg-zinc-900 transition-colors cursor-pointer"
              >
                Back
              </button>
              <button
                type="submit"
                className="w-2/3 shimmer-btn text-black font-black text-xs py-3 rounded-xl shadow-xl flex items-center justify-center gap-2 cursor-pointer border border-yellow-300"
              >
                <span>Confirm Strategy Booking</span>
                <CheckCircle2 className="w-4 h-4 text-black" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: CONFIRMATION STATE */}
        {step === 3 && (
          <div className="text-center space-y-6 py-4">
            <div className="w-16 h-16 rounded-full bg-yellow-400 text-black flex items-center justify-center mx-auto shadow-lg animate-bounce font-bold">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="bg-black p-4 rounded-2xl border border-zinc-800 text-left space-y-2 text-xs">
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-400">Date & Time:</span>
                <strong className="text-white">{selectedDate} @ {selectedTime}</strong>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-400">Business:</span>
                <strong className="text-yellow-400">{businessName || 'Your Business'}</strong>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-400">Location:</span>
                <strong className="text-white flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-yellow-400" /> {suburb}, Port Elizabeth
                </strong>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Confirmation Sent To:</span>
                <strong className="text-white">{phone || 'Cell'}</strong>
              </div>
            </div>

            <p className="text-xs text-zinc-300">
              Need immediate assistance or want to talk right now?
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/27823006996?text=${encodeURIComponent(`*New Website Enquiry*\n\n*Name:* ${fullName}\n*Business:* ${businessName}\n*Phone:* ${phone}\n*Date & Time:* ${selectedDate} @ ${selectedTime}\n*Suburb:* ${suburb}\n*Industry:* ${industry}\n*Notes:* ${notes || 'None'}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-black text-xs py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 shadow"
              >
                <span>Open WhatsApp Again</span>
              </a>
              <button
                onClick={resetAndClose}
                className="w-full bg-black border border-zinc-700 text-zinc-300 font-bold text-xs py-3.5 rounded-xl hover:bg-zinc-900 transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>

            <div className="text-[10px] text-zinc-400 flex items-center justify-center gap-1 font-medium">
              <ShieldCheck className="w-3 h-3 text-yellow-400" />
              <span>Allegro Digital • Summerstrand, Port Elizabeth</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
