import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, BadgeCheck, Pill, ShieldCheck, Sparkles } from "lucide-react";
import { divisions, products } from "@/lib/products";

/** Seconds each product stays on screen in the hero showcase. */
const SLIDE_SECONDS = 3;

const pad = (n: number) => String(n).padStart(2, "0");

const stats = [
  { value: pad(products.length), label: "Branded Formulations" },
  { value: pad(divisions.filter((d) => d.kind === "therapy").length), label: "Therapy Areas" },
  { value: pad(divisions.filter((d) => d.kind === "dosage").length), label: "Dosage Forms" },
];

const rise = (delay: number): CSSProperties => ({ animationDelay: `${delay}ms` });

/** Crossfade keyframes sized to the number of products, so each slide gets an equal share of the loop. */
function slideKeyframes(count: number) {
  const share = 100 / count;
  const fade = Math.min(2.5, share / 4);
  const f = (n: number) => `${n.toFixed(2)}%`;
  return `@keyframes hero-slide{0%{opacity:0;visibility:visible;transform:translateY(12px)}${f(fade)}{opacity:1;transform:none}${f(share)}{opacity:1;transform:none}${f(share + fade)}{opacity:0;visibility:hidden;transform:translateY(-12px)}100%{opacity:0;visibility:hidden}}`;
}

function ProductShowcase() {
  const total = products.length * SLIDE_SECONDS;
  return (
    <div className="relative h-[92px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-white to-brand-mist">
      <style>{slideKeyframes(products.length)}</style>
      {products.map((p, i) => (
        <Link
          key={p.slug}
          href={`/products/${p.slug}`}
          className="hero-slide absolute inset-0 flex items-center gap-3 p-2.5"
          style={{ animationDuration: `${total}s`, animationDelay: `${i * SLIDE_SECONDS}s` }}
          tabIndex={-1}
        >
          <span className="relative h-full w-[92px] shrink-0 overflow-hidden rounded-xl bg-white shadow-sm">
            <Image src={p.image} alt="" fill sizes="92px" className="object-contain p-1.5" />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-[15px] font-extrabold leading-5 text-brand-navy">{p.brand}</span>
            <span className="mt-0.5 block truncate text-[11px] font-semibold text-slate-500">{p.therapy}</span>
            <span className="mt-1.5 inline-flex rounded-full bg-brand-pale px-2 py-0.5 text-[9.5px] font-extrabold uppercase tracking-wider text-brand-green">{p.dosageForm}</span>
          </span>
        </Link>
      ))}
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[640px] px-3 pb-10 pt-6 sm:px-8 lg:max-w-none lg:px-0 lg:pb-12 lg:pl-6">
      {/* Decorative rings & glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 aspect-square w-[118%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-brand-sky/25 animate-spin-slow" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 aspect-square w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-brand-lime/25 via-brand-sky/20 to-brand-blue/25 blur-3xl" />

      {/* Main image */}
      <div className="hero-rise group relative aspect-[5/4] overflow-hidden rounded-[32px] border-[6px] border-white bg-white shadow-lift sm:rounded-[40px] lg:aspect-[16/13.5]" style={rise(250)}>
        <Image
          src="/images/site/hero-scientist.webp"
          alt="Bhidwaria pharmaceutical scientist examining samples under a microscope"
          fill
          priority
          sizes="(min-width:1024px) 48vw, 100vw"
          className="object-cover object-[74%_center] transition duration-[1.4s] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/75 via-brand-navy/10 to-transparent" />
        <div className="absolute bottom-5 right-5 max-w-[48%] text-right sm:bottom-7 sm:right-7">
          <div className="text-[10px] font-extrabold uppercase tracking-[.2em] text-lime-300">Science that cares</div>
          <div className="mt-1 font-display text-base font-bold leading-6 text-white sm:text-xl">Quality medicines for a healthier tomorrow</div>
        </div>
      </div>

      {/* Floating: brand count */}
      <div className="hero-rise absolute left-0 top-0 sm:left-2 lg:-left-2 lg:top-8" style={rise(550)}>
        <div className="flex animate-float items-center gap-3 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-lift backdrop-blur-md">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-green to-emerald-600 text-white shadow-glow"><Pill size={19} /></span>
          <span>
            <span className="block font-display text-xl font-extrabold leading-6 text-brand-navy">{products.length} Brands</span>
            <span className="block text-[11px] font-semibold text-slate-500">Tablets · Capsules · Oral Solutions</span>
          </span>
        </div>
      </div>

      {/* Floating: quality badge */}
      <div className="hero-rise absolute right-0 top-[38%] hidden sm:block lg:-right-4" style={rise(700)}>
        <div className="flex animate-float-slow items-center gap-2.5 rounded-full border border-white/70 bg-white/90 py-2 pl-2 pr-4 shadow-lift backdrop-blur-md">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-blue text-white"><ShieldCheck size={17} /></span>
          <span className="text-[12px] font-extrabold leading-4 text-brand-navy">IP Standard<span className="block font-semibold text-slate-500">Quality Assured</span></span>
        </div>
      </div>

      {/* Floating: product showcase */}
      <div className="hero-rise absolute -bottom-2 right-3 w-[min(310px,82%)] sm:right-8 lg:-bottom-1 lg:right-auto lg:left-0 xl:-left-10" style={rise(850)}>
        <div className="rounded-3xl border border-white/70 bg-white/95 p-2.5 shadow-lift backdrop-blur-md">
          <div className="flex items-center justify-between px-1.5 pb-2 pt-0.5">
            <span className="text-[10px] font-extrabold uppercase tracking-[.18em] text-brand-blue">Our Portfolio</span>
            <span className="flex items-center gap-1.5 text-[10px] font-bold text-brand-green">
              <span className="relative flex h-2 w-2"><span className="absolute inset-0 animate-ping rounded-full bg-brand-green/60" /><span className="relative h-2 w-2 rounded-full bg-brand-green" /></span>
              Available now
            </span>
          </div>
          <ProductShowcase />
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-hero-glow">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 pattern-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute -left-40 -top-40 -z-10 h-[520px] w-[520px] rounded-full bg-brand-lime/20 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute -right-32 top-1/3 -z-10 h-[560px] w-[560px] rounded-full bg-brand-sky/20 blur-3xl animate-blob [animation-delay:-7s]" />

      <div className="container-wide grid items-center gap-12 pb-16 pt-10 sm:pt-14 lg:min-h-[680px] lg:grid-cols-[1.02fr_1fr] lg:gap-10 lg:py-16 xl:gap-20 2xl:min-h-[760px]">
        {/* Copy */}
        <div className="max-w-[680px]">
          <div className="hero-rise inline-flex items-center gap-2.5 rounded-full border border-brand-green/20 bg-white/80 py-1.5 pl-1.5 pr-4 shadow-card backdrop-blur" style={rise(0)}>
            <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-brand-green to-brand-sky text-white"><Sparkles size={12} /></span>
            <span className="text-[11px] font-extrabold uppercase tracking-[.18em] text-brand-navy">Better Health. Brighter Tomorrow</span>
          </div>

          <h1 className="mt-6 font-display text-[40px] font-extrabold leading-[1.04] tracking-[-.04em] text-brand-navy sm:text-[58px] lg:text-[60px] xl:text-[70px] 2xl:text-[78px]">
            <span className="hero-rise block" style={rise(100)}>Advancing Healthcare.</span>
            <span className="hero-rise mt-1 block" style={rise(200)}>
              <span className="text-gradient-animated">Building Trusted</span>{" "}
              <span className="relative inline-block text-gradient-animated">
                Partnerships.
                <svg className="hero-underline absolute -bottom-2 left-0 h-3 w-full text-brand-lime" viewBox="0 0 300 12" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M2 9 C 80 2, 200 2, 298 7" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </span>
          </h1>

          <p className="hero-rise lead mt-7 max-w-[560px] md:text-lg md:leading-8" style={rise(320)}>
            At Bhidwaria Pharmaceuticals, we are committed to improving lives through high-quality, affordable and innovative pharmaceutical solutions — together for a healthier tomorrow.
          </p>

          <div className="hero-rise mt-9 flex flex-wrap gap-3" style={rise(420)}>
            <Link href="/products" className="btn btn-primary !px-7 !py-3.5">Explore Products <ArrowRight size={16} /></Link>
            <Link href="/business-opportunity" className="btn btn-outline !px-7 !py-3.5">Partner With Us <Sparkles size={15} /></Link>
          </div>

          <dl className="hero-rise mt-10 grid max-w-[560px] grid-cols-3 divide-x divide-brand-navy/10 rounded-3xl border border-white bg-white/70 py-4 shadow-card backdrop-blur" style={rise(520)}>
            {stats.map(({ value, label }) => (
              <div key={label} className="flex flex-col-reverse px-3 text-center sm:px-5">
                <dt className="mt-1.5 text-[10.5px] font-bold uppercase leading-4 tracking-wider text-slate-500 sm:text-[11px]">{label}</dt>
                <dd className="font-display text-2xl font-extrabold leading-none text-brand-navy sm:text-[32px]">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="hero-rise mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] font-semibold text-slate-600" style={rise(600)}>
            {["Quality Focused", "Patient-Centric Approach", "Ethical Partnerships"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5"><BadgeCheck size={16} className="text-brand-green" /> {t}</span>
            ))}
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
