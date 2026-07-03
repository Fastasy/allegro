export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  suburb: string;
  rating: number;
  quote: string;
  beforeLeads: string;
  afterLeads: string;
  image: string;
  badge: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  onceOffPrice: number;
  monthlyPrice: number;
  popular?: boolean;
  features: string[];
  ctaText: string;
  guarantee: string;
}

export interface IndustryDemo {
  id: string;
  name: string;
  iconName: string;
  headline: string;
  sampleBusiness: string;
  suburb: string;
  heroImg: string;
  primaryService: string;
  avgLeadValue: number;
  monthlySearchesPE: number;
  features: string[];
}

export const PE_SUBURBS = [
  'Walmer',
  'Summerstrand',
  'Newton Park',
  'Lorraine',
  'Fairview',
  'Greenacres',
  'Mill Park',
  'Baakens Valley',
  'Bluewater Bay',
  'Kariega (Uitenhage)',
  'Despatch',
  'Mount Pleasant',
  'Schoenmakerskop',
  'Lovemore Heights'
];

export const PE_INDUSTRIES: IndustryDemo[] = [
  {
    id: 'trades',
    name: 'Trades & Contractors',
    iconName: 'Wrench',
    headline: 'Emergency Plumbing & Electrical Services in PE',
    sampleBusiness: 'Algoa Bay Emergency Plumbers',
    suburb: 'Walmer & Lorraine',
    heroImg: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    primaryService: 'Geyser Repair & Drain Unblocking',
    avgLeadValue: 1850,
    monthlySearchesPE: 2400,
    features: ['1-Tap Emergency WhatsApp Button', 'Instant Quote Calculator', 'Google Maps Top 3 Ranker']
  },
  {
    id: 'hospitality',
    name: 'B&Bs & Guest Houses',
    iconName: 'Building2',
    headline: 'Luxury Oceanfront B&B in Summerstrand',
    sampleBusiness: 'Algoa Breeze Boutique Guest House',
    suburb: 'Summerstrand, Port Elizabeth',
    heroImg: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    primaryService: 'Direct Room Booking & Coastal Stays',
    avgLeadValue: 3200,
    monthlySearchesPE: 4100,
    features: ['Zero Commission Direct Booking', 'Google Hotel Search Sync', 'Virtual Room Gallery']
  },
  {
    id: 'legal',
    name: 'Legal & Professional',
    iconName: 'Scale',
    headline: 'Trusted Conveyancers & Attorneys in Newton Park',
    sampleBusiness: 'Cape Coast Legal Partners',
    suburb: 'Newton Park, Port Elizabeth',
    heroImg: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    primaryService: 'Property Law & Estate Planning',
    avgLeadValue: 8500,
    monthlySearchesPE: 1800,
    features: ['Confidential Consultation Scheduler', 'Google Reviews Showcase', 'Case Evaluation Form']
  },
  {
    id: 'health',
    name: 'Medical & Beauty',
    iconName: 'HeartPulse',
    headline: 'Modern Family Dental & Aesthetics Clinic',
    sampleBusiness: 'Bay Dental Care Studio',
    suburb: 'Mill Park & Greenacres',
    heroImg: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    primaryService: 'Dental Implants & Cosmetic Care',
    avgLeadValue: 4200,
    monthlySearchesPE: 3200,
    features: ['24/7 Patient Booking Widget', 'Before & After Gallery', 'Medical Aid Info Portal']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Johan van der Merwe',
    role: 'Owner & Head Electrician',
    company: 'Algoa Power & Electrical',
    suburb: 'Walmer, PE',
    rating: 5,
    quote: 'Before Allegro Digital, we relied 100% on word-of-mouth. Within 12 days of launching our new site and Google Maps setup, phone calls went from 3 a week to over 22 qualified calls every week. They literally transformed my business.',
    beforeLeads: '3 leads/week',
    afterLeads: '22 leads/week',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=250&q=80',
    badge: '⚡ +630% Revenue Growth'
  },
  {
    id: '2',
    name: 'Nompumelelo Dlamini',
    role: 'Managing Director',
    company: 'Ocean Breeze Luxury Suites',
    suburb: 'Summerstrand, PE',
    rating: 5,
    quote: 'Booking.com was taking 18% commission on every guest! Allegro built us a stunning direct-booking website with Google local SEO. Now over 60% of our bookings come directly through our own site commission-free.',
    beforeLeads: 'R15k Direct/mo',
    afterLeads: 'R82k Direct/mo',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80',
    badge: '🏨 Saved R18,000/mo Fees'
  },
  {
    id: '3',
    name: 'David Robertson',
    role: 'Senior Attorney',
    company: 'Robertson & Associates Legal',
    suburb: 'Newton Park, PE',
    rating: 5,
    quote: 'We had an old website from 2012 that didn’t work on smartphones. Allegro Digital launched our sleek new site in 6 days and got us to #1 on Google for "conveyancers Port Elizabeth". The quality of new legal enquiries has been phenomenal.',
    beforeLeads: '1 enquiry/mo',
    afterLeads: '14 enquiries/mo',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=250&q=80',
    badge: '🏆 #1 Google Search Rank'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Local Starter',
    tagline: 'Ideal for local sole traders and trades wanting immediate Google presence.',
    onceOffPrice: 4950,
    monthlyPrice: 850,
    features: [
      'Custom 3-Page Modern Mobile Website',
      'Google Business Profile Setup & Optimization',
      '1-Tap Direct WhatsApp & Call Buttons',
      'Lightning Fast SA Cloud Hosting Included',
      'Google Maps Local Setup (PE Radius)',
      'SSL Certificate & Professional Domain',
      '7-Day Delivery Turnaround'
    ],
    ctaText: 'Get Starter Package',
    guarantee: '100% Mobile Optimized Guarantee'
  },
  {
    id: 'growth',
    name: 'PE Growth Dominator',
    tagline: 'Our most popular setup for businesses ready to dominate local PE search.',
    onceOffPrice: 8950,
    monthlyPrice: 1450,
    popular: true,
    features: [
      'Everything in Starter +',
      'Up to 7 High-Converting Custom Pages',
      'Top 3 Google Maps Ranking Strategy',
      'Interactive Online Booking & Calendar Widget',
      'Instant Lead Alerts via WhatsApp & Email',
      'Localized PE SEO Keyword Targeting (Walmer, Newton Park, etc.)',
      'Google Reviews Generator Integration',
      '30-Day Managed Lead Growth Guarantee'
    ],
    ctaText: 'Claim Growth Package',
    guarantee: '10 Local Leads Guaranteed in 30 Days'
  },
  {
    id: 'market-leader',
    name: 'Market Leader Pro',
    tagline: 'For aggressive PE brands looking to dominate the Eastern Cape market.',
    onceOffPrice: 14950,
    monthlyPrice: 2450,
    features: [
      'Everything in Growth Dominator +',
      'Unlimited Pages & Custom Web Portal',
      'Multi-Suburb Local SEO (PE, Kariega, Despatch)',
      'Automated WhatsApp Chatbot & Lead Qualifier',
      'Google Ads Campaign Setup & Management',
      'Monthly Lead Analytics & Strategy Meetings',
      'Priority 24/7 VIP Local PE Support'
    ],
    ctaText: 'Get Market Leader',
    guarantee: 'Dedicated Local Growth Manager'
  }
];

export const FAQS = [
  {
    question: "Why does my Port Elizabeth business need a website if I already have a Facebook page?",
    answer: "When locals in Port Elizabeth need an urgent electrician, attorney, plumber, or dentist, 87% search on Google—not Facebook. A Facebook page doesn't show up at the top of Google Maps, can't handle structured appointment bookings, and lacks professional credibility. Having a modern website linked with Google SEO ensures you capture motivated buyers at the exact moment they are looking to pay."
  },
  {
    question: "I don't have text, pictures, or logo ready. Can you still build it?",
    answer: "Yes, 100%! We handle everything end-to-end. Our team writes persuasive, localized SA copywriting for your business and provides premium high-resolution imagery tailored to Port Elizabeth. You just answer a 10-minute questionnaire on WhatsApp or phone, and we do the rest."
  },
  {
    question: "How fast will my website be live?",
    answer: "Our standard turnaround time is just 7 business days from kickoff to live. We build fast, responsive websites optimized for local South African mobile networks (Vodacom, MTN, Telkom) so your site loads under 1 second."
  },
  {
    question: "How do leads get to me when someone visits the website?",
    answer: "Every website we build is designed for maximum conversion. Visitors can click a single button on their smartphone to call you instantly, message you on WhatsApp with pre-filled enquiry text, or schedule an appointment directly into your calendar. You receive instant SMS & email notifications as soon as a lead comes in."
  },

  {
    question: "Are there any hidden monthly fees or long-term lock-in contracts?",
    answer: "No hidden costs ever! You can choose between a simple once-off design fee or a low monthly package that includes hosting, domain maintenance, and continuous security updates. You retain 100% ownership of your domain and brand assets."
  }
];
