"use client";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type CSSProperties, type KeyboardEvent, type PointerEvent } from "react";
import { ArrowRight, BadgeCheck, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { FRANCHISE_PATH } from "@/lib/site";
import welcomeImg from "../../public/images/hero/hero-welcome.webp";
import qualityImg from "../../public/images/hero/hero-quality.webp";
import franchiseImg from "../../public/images/hero/hero-franchise.webp";
import careImg from "../../public/images/hero/hero-care.webp";

/** Seconds each slide stays on screen before auto-advancing. */
const SLIDE_SECONDS = 7;
/** Minimum horizontal drag (px) that counts as a swipe. */
const SWIPE_PX = 50;

type Cta = { label: string; href: string };
type Slide = {
  id: string;
  image: StaticImageData;
  alt: string;
  eyebrow: string;
  title: string;
  highlight: string;
  text: string;
  primary: Cta;
  secondary: Cta;
};

const slides: Slide[] = [
  {
    id: "welcome",
    image: welcomeImg,
    alt: "Smiling Bhidwaria pharmaceutical scientist in a modern research laboratory",
    eyebrow: "Namaste & Welcome",
    title: "Welcome to",
    highlight: "Bhidwaria Pharmaceuticals",
    text: "Quality medicines from Meerut, Uttar Pradesh — made for doctors to prescribe with confidence, for chemists to stock with pride and for every family that deserves better health.",
    primary: { label: "Explore Products", href: "/products" },
    secondary: { label: "Discover Our Story", href: "/about" },
  },
  {
    id: "quality",
    image: qualityImg,
    alt: "Quality inspection of a tablet blister pack on a pharmaceutical packing line",
    eyebrow: "Quality in Every Strip",
    title: "Precision-Made Medicines",
    highlight: "You Can Trust",
    text: "IP-standard formulations from licensed, quality-audited manufacturing partners — checked, documented and traceable from raw material to final dispatch.",
    primary: { label: "Our Quality Promise", href: "/about#quality-assurance" },
    secondary: { label: "View Product Gallery", href: "/gallery" },
  },
  {
    id: "franchise",
    image: franchiseImg,
    alt: "Pharma company representative shaking hands with a distribution partner in a medicine warehouse",
    eyebrow: "Monopoly PCD Pharma Franchise",
    title: "Own Your Territory.",
    highlight: "Grow With Exclusive Rights.",
    text: "Partner with Bhidwaria on a monopoly basis — a focused, high-demand portfolio, transparent pricing, promotional support and dependable supply for your district.",
    primary: { label: "Apply for Franchise", href: `${FRANCHISE_PATH}#enquiry` },
    secondary: { label: "Explore Services", href: "/services" },
  },
  {
    id: "care",
    image: careImg,
    alt: "Pharmacist handing medicine to a smiling elderly couple at a pharmacy counter",
    eyebrow: "Better Health. Brighter Tomorrow.",
    title: "Caring for Families",
    highlight: "Across India",
    text: "From anti-infectives and gastro care to pain relief and Vitamin D3 — dependable therapies that reach the pharmacy counter when patients need them most.",
    primary: { label: "Therapeutic Segments", href: "/therapeutic-segments" },
    secondary: { label: "Contact Us", href: "/contact" },
  },
];

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

const pad = (n: number) => String(n).padStart(2, "0");
const stagger = (i: number): CSSProperties => ({ "--i": i }) as CSSProperties;

function SlideCopy({ slide, isFirst }: { slide: Slide; isFirst: boolean }) {
  // Exactly one <h1> on the page: the welcome slide carries it, the rest are <h2>.
  const Heading = isFirst ? "h1" : "h2";
  return (
    <div className="hero-copy max-w-[660px]">
      <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 py-1.5 pl-1.5 pr-4 backdrop-blur-md" style={stagger(0)}>
        <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-brand-lime to-brand-sky text-white"><Sparkles size={12} /></span>
        <span className="text-[11px] font-extrabold uppercase tracking-[.18em] text-white">{slide.eyebrow}</span>
      </div>
      <Heading
        className="mt-5 font-display text-[36px] font-extrabold leading-[1.06] tracking-[-.035em] text-white sm:text-[50px] lg:text-[56px] xl:text-[64px] 2xl:text-[72px]"
        style={stagger(1)}
      >
        {slide.title}{" "}
        <span className="block bg-gradient-to-r from-lime-300 via-emerald-300 to-sky-300 bg-clip-text text-transparent">{slide.highlight}</span>
      </Heading>
      <p className="mt-5 max-w-[560px] text-[15px] leading-7 text-white/80 md:text-lg md:leading-8" style={stagger(2)}>{slide.text}</p>
      <div className="mt-8 flex flex-wrap gap-3" style={stagger(3)}>
        <Link href={slide.primary.href} className="btn btn-green !px-7 !py-3.5">{slide.primary.label} <ArrowRight size={16} /></Link>
        <Link href={slide.secondary.href} className="btn btn-ghost-light !px-7 !py-3.5">{slide.secondary.label}</Link>
      </div>
      <div className="mt-7 hidden flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] font-semibold text-white/75 sm:flex" style={stagger(4)}>
        {["Quality Focused", "Patient-Centric Approach", "Ethical Partnerships"].map((t) => (
          <span key={t} className="inline-flex items-center gap-1.5"><BadgeCheck size={16} className="text-lime-300" /> {t}</span>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const dragStart = useRef<number | null>(null);
  const count = slides.length;

  const go = useCallback((i: number) => setIndex((i + count) % count), [count]);
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

  useEffect(() => {
    // Respect reduced motion: no auto-advance, manual controls only.
    const media = window.matchMedia(REDUCED_MOTION);
    const sync = () => setAutoplay(!media.matches);
    sync();
    media.addEventListener("change", sync);
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      media.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  // Checked live: the global reduced-motion rule can end the bar's animation before the effect above runs.
  function onProgressEnd() {
    if (!window.matchMedia(REDUCED_MOTION).matches) next();
  }

  function onKeyDown(e: KeyboardEvent) {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  }

  function onPointerUp(e: PointerEvent) {
    if (dragStart.current === null) return;
    const dx = e.clientX - dragStart.current;
    dragStart.current = null;
    if (Math.abs(dx) >= SWIPE_PX) (dx < 0 ? next : prev)();
  }

  return (
    <section
      className="relative isolate overflow-hidden bg-[#041f3a] text-white"
      aria-roledescription="carousel"
      aria-label="Welcome to Bhidwaria Pharmaceuticals"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onKeyDown={onKeyDown}
      onPointerDown={(e) => (dragStart.current = e.clientX)}
      onPointerUp={onPointerUp}
    >
      <div className="relative h-[660px] sm:h-[640px] lg:h-[min(calc(100svh-116px),760px)] lg:min-h-[600px]">
        {slides.map((slide, i) => {
          const active = i === index;
          return (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}: ${slide.eyebrow}`}
              inert={!active}
              className={`absolute inset-0 transition-opacity duration-1000 ease-out ${active ? "is-active z-10 opacity-100" : "z-0 opacity-0"}`}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={i === 0}
                placeholder="blur"
                draggable={false}
                sizes="100vw"
                className="hero-kenburns object-cover object-[72%_center] lg:object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041f3a] via-[#041f3a]/75 to-[#041f3a]/25 lg:bg-gradient-to-r lg:from-[#041f3a]/95 lg:via-[#062f55]/65 lg:to-transparent" />
              <div className="absolute inset-0 pattern-dots opacity-30 [mask-image:linear-gradient(90deg,black,transparent_60%)]" />
              <div className="container-wide relative flex h-full items-end pb-28 lg:items-center lg:pb-12">
                <SlideCopy slide={slide} isFirst={i === 0} />
              </div>
            </div>
          );
        })}

        {/* Controls */}
        <div className="absolute inset-x-0 bottom-0 z-20">
          <div className="container-wide flex items-center justify-between gap-4 pb-7 lg:pb-9">
            <div className="flex items-center gap-2">
              {slides.map((slide, i) => {
                const active = i === index;
                return (
                  <button
                    key={slide.id}
                    onClick={() => go(i)}
                    aria-label={`Go to slide ${i + 1}: ${slide.eyebrow}`}
                    aria-current={active ? "true" : undefined}
                    className={`relative h-1.5 overflow-hidden rounded-full bg-white/25 transition-all duration-500 hover:bg-white/45 ${active ? "w-14 sm:w-20" : "w-6 sm:w-8"}`}
                  >
                    {active && (
                      <span
                        key={index}
                        className={`hero-progress absolute inset-0 rounded-full bg-gradient-to-r from-lime-300 to-sky-300 ${autoplay ? "is-running" : "is-static"}`}
                        style={{ animationDuration: `${SLIDE_SECONDS}s`, animationPlayState: paused ? "paused" : "running" }}
                        onAnimationEnd={onProgressEnd}
                      />
                    )}
                  </button>
                );
              })}
            </div>
            {/* Right margin keeps the arrows clear of the fixed WhatsApp / call buttons. */}
            <div className="mr-16 flex items-center gap-3 sm:mr-[4.5rem]">
              <span className="hidden whitespace-nowrap font-display text-sm font-bold tabular-nums text-white/80 sm:inline" aria-live="polite">
                <span className="text-white">{pad(index + 1)}</span> / {pad(count)}
              </span>
              <button onClick={prev} aria-label="Previous slide" className="grid h-10 w-10 place-items-center rounded-full border border-white/25 sm:h-11 sm:w-11 bg-white/5 backdrop-blur transition hover:border-lime-300 hover:bg-lime-300 hover:text-brand-navy">
                <ChevronLeft size={19} />
              </button>
              <button onClick={next} aria-label="Next slide" className="grid h-10 w-10 place-items-center rounded-full border border-white/25 sm:h-11 sm:w-11 bg-white/5 backdrop-blur transition hover:border-lime-300 hover:bg-lime-300 hover:text-brand-navy">
                <ChevronRight size={19} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
