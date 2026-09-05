import React from 'react';
import { ArrowUpRight, ExternalLink, Globe, Sparkles, MousePointerClick } from 'lucide-react';

const WA_QUOTE =
  'https://wa.me/27823006996?text=' +
  encodeURIComponent("Hi Allegro Digital, I'd like a website like the ones in your portfolio.");

interface WorkItem {
  slug: string;
  name: string;
  tagline: string;
  niche: string;
  url: string;
}

const ITEMS: WorkItem[] = [
  { slug: 'kannjane', name: 'Kannjane Consultants', tagline: 'Custom kitchens & fine carpentry — Komani (Queenstown)', niche: 'Carpentry & kitchens', url: 'https://www.kannjaneconsultants.co.za' },
  { slug: 'dorasamy-s-hair-studio', name: "Dorasamy's Hair Studio", tagline: 'Hair studio & salon — Gqeberha (PE)', niche: 'Beauty & salon', url: 'https://dorasamy-s-hair-studio.vercel.app' },
  { slug: 'vault-electronix', name: 'Vault Electronix', tagline: 'Electrical, solar & security — Eastern Cape', niche: 'Electrical & solar', url: 'https://vaultelectronics.vercel.app' },
  { slug: 'electronetix', name: 'Electronetix', tagline: 'Energy solutions, solar & generators', niche: 'Electrical & solar', url: 'https://electronetix.vercel.app' },
  { slug: 'reh-training', name: 'REH Safety Training', tagline: 'Accredited health & safety training — Gqeberha', niche: 'Training & compliance', url: 'https://reh-training.vercel.app' },
  { slug: 'flexy-de-barber', name: 'Flexy De Barber', tagline: 'Barbershop with online booking — Gqeberha Central', niche: 'Grooming', url: 'https://flexy-de-barber.vercel.app' },
  { slug: 'helpmyfinances', name: 'HelpMyFinances', tagline: 'Financial calculators & tools for South Africans', niche: 'Fintech tools', url: 'https://www.helpmyfinances.co.za' },
  { slug: 'dr-dion-pretorius', name: 'Dr Dion Pretorius', tagline: 'GP practice — patient-first care & online booking', niche: 'Healthcare', url: 'https://dr-dion-pretorius.vercel.app' },
  { slug: 'the-jackal-group', name: 'The Jackal Group', tagline: 'Property management — your property, protected', niche: 'Property', url: 'https://the-jackal-group.vercel.app' },
  { slug: 'phila-electrical', name: 'Phila Electrical', tagline: 'Electrical services — East London', niche: 'Electrical', url: 'https://phila-electrical.vercel.app' },
];

const STATS = [
  { value: '10+', label: 'live sites shipped' },
  { value: 'R1,499', label: 'starting setup' },
  { value: 'R800/mo', label: 'hosting & care' },
];

export function WorkShowcase() {
  return (
    <div className="pt-36 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ============ FORMATTED HEADER ============ */}
        <div className="relative overflow-hidden rounded-3xl border border-zinc-800/70 bg-gradient-to-b from-zinc-900/60 to-black/40 px-6 py-12 sm:px-10 sm:py-16 mb-16">
          {/* ambient glow */}
          <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-yellow-500/5 blur-3xl" />

          <div className="relative">
            {/* eyebrow badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-yellow-400">
              <Sparkles className="h-3.5 w-3.5" />
              Our Work
            </div>

            {/* headline */}
            <h1 className="mt-5 max-w-3xl font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Real websites, built for{' '}
              <span className="text-yellow-400">real South African businesses</span>
            </h1>

            {/* subcopy */}
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              Every site below is <span className="font-semibold text-white">live in production right now</span> — not
              mockups. Designed, built and shipped by Allegro Digital for local businesses across the Eastern Cape and
              beyond. Click any site to explore it yourself.
            </p>

            {/* stat strip */}
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              {STATS.map((s) => (
                <div key={s.label} className="flex items-baseline gap-2.5">
                  <span className="font-heading text-2xl font-extrabold text-yellow-400 sm:text-3xl">
                    {s.value}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-wider text-zinc-400 sm:text-sm">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={WA_QUOTE}
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-btn inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-black"
              >
                Start your project
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="/#pricing"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-6 py-3.5 text-sm font-semibold text-zinc-200 transition hover:border-yellow-400/60 hover:text-yellow-400"
              >
                See pricing
              </a>
            </div>
          </div>
        </div>

        {/* ============ WORK GRID ============ */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-8">
          {ITEMS.map((item, idx) => {
            const host = item.url.replace(/^https?:\/\//, '');
            return (
              <article
                key={item.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/30 transition hover:border-yellow-500/40 hover:shadow-[0_0_40px_rgba(250,204,21,0.06)]"
              >
                {/* card label row */}
                <div className="flex items-start justify-between gap-4 px-5 pt-5 sm:px-6">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-heading text-xs font-extrabold text-zinc-500">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h2 className="truncate font-heading text-lg font-bold text-white sm:text-xl">
                        {item.name}
                      </h2>
                    </div>
                    <p className="mt-0.5 truncate text-sm text-zinc-400">{item.tagline}</p>
                  </div>
                  <span className="mt-0.5 shrink-0 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-emerald-400">
                    Live
                  </span>
                </div>

                {/* browser frame screenshot */}
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-5 mt-4 flex flex-1 flex-col overflow-hidden rounded-xl border border-zinc-800 bg-black transition group-hover:border-zinc-700 sm:mx-6"
                  aria-label={`Open ${item.name} live site`}
                >
                  {/* browser chrome */}
                  <div className="flex items-center gap-3 border-b border-zinc-800/80 bg-zinc-950 px-4 py-2.5">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                    </div>
                    <div className="flex min-w-0 flex-1 items-center gap-1.5 rounded-md bg-zinc-900 px-3 py-1 text-[11px] text-zinc-400">
                      <Globe className="h-3 w-3 shrink-0 text-yellow-500/80" />
                      <span className="truncate">{host}</span>
                    </div>
                    <ExternalLink className="h-3.5 w-3.5 shrink-0 text-zinc-500 transition group-hover:text-yellow-400" />
                  </div>
                  {/* scrollable screenshot viewport */}
                  <div className="relative max-h-[520px] overflow-y-auto overscroll-contain">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/portfolio/full-${item.slug}.jpg`}
                      alt={`${item.name} website — full page`}
                      loading="lazy"
                      className="block h-auto w-full"
                    />
                    {/* bottom fade hint to scroll / open */}
                    <div className="pointer-events-none sticky bottom-0 flex justify-center bg-gradient-to-t from-black/80 via-black/30 to-transparent px-4 pb-3 pt-10">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-yellow-500/30 bg-black/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-yellow-400 backdrop-blur">
                        <MousePointerClick className="h-3 w-3" />
                        Open live site
                      </span>
                    </div>
                  </div>
                </a>

                {/* footer meta */}
                <div className="flex items-center justify-between px-5 pb-5 pt-4 sm:px-6">
                  <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-[11px] font-semibold text-zinc-400">
                    {item.niche}
                  </span>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-yellow-400 transition hover:text-yellow-300"
                  >
                    Visit {host.replace('www.', '')}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* ============ BOTTOM CTA ============ */}
        <div className="mt-20 overflow-hidden rounded-3xl border border-yellow-500/25 bg-gradient-to-br from-zinc-900 to-black px-6 py-12 text-center sm:px-10">
          <h2 className="mx-auto max-w-2xl font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Want a website that looks this good and <span className="text-yellow-400">actually brings in work?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            Flat setup from R1,499 and hosting &amp; care from R800/month. WhatsApp us — we reply fast.
          </p>
          <a
            href={WA_QUOTE}
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-btn mt-8 inline-flex items-center gap-2 rounded-xl px-8 py-4 text-sm font-black"
          >
            Get a quote on WhatsApp
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
