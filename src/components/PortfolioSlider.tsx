'use client';

import Image from 'next/image';
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
} from 'react';
import { Zap } from 'lucide-react';

const ITEMS = [
  {
    image: '/portfolio/kannjane.jpg',
    name: 'Kannjane Consultants',
    tagline: 'Custom kitchens & carpentry, Komani',
    url: 'https://kanjanne.vercel.app',
  },
  {
    image: '/portfolio/dorasamy.jpg',
    name: "Dorasamy's Hair Studio",
    tagline: 'Hair salon in Gqeberha',
    url: 'https://dorasamy-s-hair-studio.vercel.app',
  },
  {
    image: '/portfolio/vault.jpg',
    name: 'Vault Electronix & Electricals',
    tagline: 'Electrical, solar & security, Eastern Cape',
    url: 'https://vaultelectronics.vercel.app',
  },
  {
    image: '/portfolio/electronetix.jpg',
    name: 'Electronetix',
    tagline: 'Solar, generators & electrical',
    url: 'https://electronetix.vercel.app',
  },
  {
    image: '/portfolio/helpmyfinances.jpg',
    name: 'HelpMyFinances',
    tagline: 'Budgeting & tax tools for South Africans',
    url: 'https://www.helpmyfinances.co.za',
  },
];

const GAP = 20;

const WA_QUOTE = 'https://wa.me/27823006996?text=' + encodeURIComponent("Hi Allegro Digital, I'd like a quote for my business website.");

export function PortfolioSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, startX: 0, startScroll: 0, moved: 0 });
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);
  const [active, setActive] = useState(0);

  const updateControls = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 8);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
    const card = el.querySelector<HTMLElement>('[data-slide]');
    if (card) {
      const step = card.offsetWidth + GAP;
      setActive(Math.min(ITEMS.length, Math.max(0, Math.round(el.scrollLeft / step))));
    }
  }, []);

  useEffect(() => {
    updateControls();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateControls, { passive: true });
    window.addEventListener('resize', updateControls);
    return () => {
      el.removeEventListener('scroll', updateControls);
      window.removeEventListener('resize', updateControls);
    };
  }, [updateControls]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    const card = el?.querySelector<HTMLElement>('[data-slide]');
    if (!el || !card) return;
    el.scrollBy({ left: dir * (card.offsetWidth + GAP), behavior: 'smooth' });
  };

  const scrollToIndex = (i: number) => {
    const el = trackRef.current;
    const card = el?.querySelector<HTMLElement>('[data-slide]');
    if (!el || !card) return;
    el.scrollTo({ left: i * (card.offsetWidth + GAP), behavior: 'smooth' });
  };

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;
    drag.current = { down: true, startX: e.clientX, startScroll: el.scrollLeft, moved: 0 };
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el || !drag.current.down) return;
    const dx = e.clientX - drag.current.startX;
    el.scrollLeft = drag.current.startScroll - dx;
    drag.current.moved = Math.max(drag.current.moved, Math.abs(dx));
  };

  const endDrag = () => {
    drag.current.down = false;
  };

  const onClickCapture = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (drag.current.moved > 6) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = 0;
    }
  };

  return (
    <section id="work" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-400">
            Recent work
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Real sites. Real businesses.
          </h2>
          <p className="mt-3 text-zinc-400">
            A few of the sites we&rsquo;ve designed and built for local
            businesses. Drag or tap through — every one is live.
          </p>
        </div>

        <div
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onPointerCancel={endDrag}
          onClickCapture={onClickCapture}
          className="mt-12 flex snap-x snap-mandatory cursor-grab select-none gap-5 overflow-x-auto pb-2 active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {ITEMS.map((item) => (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              data-slide
              className="group relative w-[82vw] max-w-[360px] shrink-0 snap-start overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 transition hover:border-white/20"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.name} website`}
                  fill
                  sizes="(max-width: 640px) 82vw, 360px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/55 to-transparent p-5 pt-16">
                  <p className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-yellow-400 backdrop-blur-sm">
                    Live
                  </p>
                  <h3 className="font-heading text-lg font-bold text-white">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-400">{item.tagline}</p>
                  <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-yellow-400 opacity-0 transition group-hover:opacity-100">
                    Visit site
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      className="h-3 w-3"
                      aria-hidden="true"
                    >
                      <path
                        d="M3.5 12.5l9-9M5 3.5h7.5V11"
                        stroke="currentColor"
                        strokeWidth={1.6}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </p>
                </div>
              </div>
            </a>
          ))}

          <a
            href={WA_QUOTE}
            target="_blank"
            rel="noopener noreferrer"
            data-slide
            className="flex w-[82vw] max-w-[360px] shrink-0 snap-start flex-col items-center justify-center gap-4 rounded-2xl border border-yellow-400/25 bg-gradient-to-b from-white/[0.04] to-transparent p-8 text-center transition hover:border-yellow-400/50"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black">
              <Zap className="h-6 w-6" fill="currentColor" />
            </span>
            <p className="font-heading text-xl font-bold text-white">
              Your business here
            </p>
            <p className="text-sm text-zinc-400">
              See what we can build for you.
            </p>
            <span className="shimmer-btn mt-2 inline-block rounded-xl px-6 py-3 text-sm font-black">
              Get a quote
            </span>
          </a>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {ITEMS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === active ? 'w-7 bg-yellow-400' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous work"
              disabled={!canLeft}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-yellow-400/60 hover:text-yellow-400 disabled:pointer-events-none disabled:opacity-30"
            >
              <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
                <path
                  d="M12.5 4.5L7 10l5.5 5.5"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next work"
              disabled={!canRight}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-yellow-400/60 hover:text-yellow-400 disabled:pointer-events-none disabled:opacity-30"
            >
              <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
                <path
                  d="M7.5 4.5L13 10l-5.5 5.5"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
