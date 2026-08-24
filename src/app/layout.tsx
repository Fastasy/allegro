import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google';
import '../index.css';
import { Providers } from './providers';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const SITE = 'https://www.allegrodigital.co.za';
const OG_IMAGE = `${SITE}/images/og-allegro-default.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: 'Web Design Port Elizabeth | Affordable Website Design | Allegro Digital',
  description: 'Get a high-converting, professional website in Port Elizabeth for just R1,499 upfront and R800/mo. Fast turnaround, mobile-optimized, and local SEO ready.',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Allegro Digital',
    title: 'Web Design Port Elizabeth | Affordable Website Design | Allegro Digital',
    description: 'Get a high-converting, professional website in Port Elizabeth for just R1,499 upfront and R800/mo. Fast turnaround, mobile-optimized, and local SEO ready.',
    url: SITE,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Allegro Digital — Web Design Port Elizabeth',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Port Elizabeth | Affordable Website Design | Allegro Digital',
    description: 'Get a high-converting, professional website in Port Elizabeth for just R1,499 upfront and R800/mo. Fast turnaround, mobile-optimized, and local SEO ready.',
    images: [OG_IMAGE],
  },
  verification: {
    other: {
      'msvalidate.01': '4993F85F53B352A0A919F8D83AFCED4D',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-ZA" className={`${plusJakartaSans.variable} ${outfit.variable}`}>
      <head>
        <meta name="msvalidate.01" content="4993F85F53B352A0A919F8D83AFCED4D" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebSite',
                  '@id': `${SITE}/#website`,
                  'name': 'Allegro Digital',
                  'url': SITE,
                  'description': 'Web design and local SEO agency in Port Elizabeth (Gqeberha), South Africa. High-converting websites for SA small businesses from R1,499 once-off, plus hosting, care and SEO.',
                  'inLanguage': 'en-ZA',
                  'publisher': {
                    '@id': `${SITE}/#organization`,
                  },
                },
                {
                  '@type': ['LocalBusiness', 'ProfessionalService'],
                  '@id': `${SITE}/#organization`,
                  'name': 'Allegro Digital',
                  'url': SITE,
                  'logo': `${SITE}/logo.png`,
                  'image': `${SITE}/images/og-allegro-default.jpg`,
                  'description': 'Leading web design and local SEO agency in Port Elizabeth (Gqeberha), building high-converting websites for South African small businesses with transparent pricing.',
                  'telephone': '+27823006996',
                  'email': 'info@allegrodigital.co.za',
                  'priceRange': 'R1499 - R16900',
                  'address': {
                    '@type': 'PostalAddress',
                    'addressLocality': 'Port Elizabeth',
                    'addressRegion': 'Eastern Cape',
                    'addressCountry': 'ZA',
                  },
                  'geo': {
                    '@type': 'GeoCoordinates',
                    'latitude': -33.9608,
                    'longitude': 25.6022,
                  },
                  'areaServed': [
                    {
                      '@type': 'City',
                      'name': 'Port Elizabeth',
                    },
                    {
                      '@type': 'City',
                      'name': 'Gqeberha',
                    },
                    {
                      '@type': 'AdministrativeArea',
                      'name': 'Eastern Cape',
                    },
                    {
                      '@type': 'Country',
                      'name': 'South Africa',
                    },
                  ],
                  'knowsAbout': [
                    'Web Design Port Elizabeth',
                    'Local SEO Gqeberha',
                    'Google Business Profile Optimization',
                    'South Africa Small Business Web Design',
                    'WhatsApp Conversion Optimization',
                    'POPIA Compliant Lead Engine Websites',
                  ],
                  'openingHoursSpecification': [
                    {
                      '@type': 'OpeningHoursSpecification',
                      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                      'opens': '08:00',
                      'closes': '17:00',
                    },
                  ],
                  'sameAs': ['https://www.facebook.com/allegrodigital'],
                  'makesOffer': [
                    {
                      '@type': 'Offer',
                      'name': 'Focused one-page website build',
                      'description': 'Once-off design and build of a single-page business website.',
                      'priceCurrency': 'ZAR',
                      'price': '1499',
                      'url': `${SITE}/#pricing`,
                    },
                    {
                      '@type': 'Offer',
                      'name': 'Monthly hosting, care and support',
                      'description': 'Hosting, backups, security updates, content updates and support.',
                      'priceCurrency': 'ZAR',
                      'price': '800',
                      'priceSpecification': {
                        '@type': 'UnitPriceSpecification',
                        'price': '800',
                        'priceCurrency': 'ZAR',
                        'billingDuration': 'P1M',
                      },
                      'url': `${SITE}/#pricing`,
                    },
                    {
                      '@type': 'Offer',
                      'name': 'SEO add-on',
                      'description': 'Monthly local SEO: profile optimisation, review systems, citation fixes and one ranking content piece per month.',
                      'priceCurrency': 'ZAR',
                      'price': '1999',
                      'priceSpecification': {
                        '@type': 'UnitPriceSpecification',
                        'price': '1999',
                        'priceCurrency': 'ZAR',
                        'billingDuration': 'P1M',
                      },
                      'url': `${SITE}/#pricing`,
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
