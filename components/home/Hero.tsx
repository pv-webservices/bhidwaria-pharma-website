import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake, Pill, ShieldCheck, Sparkles, Users } from "lucide-react";
import { products } from "@/lib/products";

function Molecule({ className = "" }: { className?: string }) {
  const nodes = [
    [60, 20], [100, 43], [100, 89], [60, 112], [20, 89], [20, 43],
    [140, 20], [180, 43], [180, 89], [140, 112],
  ];
  const links = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [1, 6], [6, 7], [7, 8], [8, 9], [9, 2]];
  return (
    <svg viewBox="0 0 200 132" className={className} aria-hidden="true">
      {links.map(([a, b]) => (
        <line key={`${a}-${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="currentColor" strokeWidth="1.4" opacity=".5" />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 6 : 4.5} fill="currentColor" opacity={i % 2 ? 0.55 : 0.9} />
      ))}
    </svg>
  );
}

const highlights = [
  { label: "Quality Focused", icon: ShieldCheck },
  { label: "Patient-Centric Approach", icon: Users },
  { label: "Committed to a Healthier Tomorrow", icon: HeartHandshake },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-hero-glow">
      <div className="absolute inset-0 -z-10 pattern-grid opacity-50" />
      {/* Image: right side on desktop, top on mobile */}
      <div className="relative h-[300px] sm:h-[380px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[60%]">
        <Image
          src="/images/site/hero-scientist.webp"
          alt="Bhidwaria pharmaceutical scientist examining samples under a microscope"
          fill
          priority
          sizes="(min-width:1024px) 60vw, 100vw"
          className="object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f3f9fd] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#f3f9fd] lg:via-[#f3f9fd]/40 lg:to-transparent" />
        <Molecule className="absolute left-[8%] top-10 hidden w-44 animate-float-slow text-brand-sky/60 lg:block" />
        <div className="absolute bottom-10 right-6 hidden animate-float rounded-2xl border border-white/60 bg-white/85 px-5 py-4 shadow-lift backdrop-blur-md lg:block xl:right-12">
          <div className="text-[10px] font-extrabold uppercase tracking-[.18em] text-brand-blue">Science</div>
          <div className="mt-1 max-w-[160px] font-display text-sm font-bold leading-5 text-brand-navy">For a healthier tomorrow</div>
          <div className="mt-2.5 h-1 w-10 rounded-full bg-gradient-to-r from-brand-green to-brand-sky" />
        </div>
        <div className="absolute right-[38%] top-16 hidden animate-float-slow items-center gap-3 rounded-2xl border border-white/60 bg-white/85 px-4 py-3 shadow-lift backdrop-blur-md xl:flex">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-green to-emerald-600 text-white"><Pill size={18} /></span>
          <span>
            <span className="block font-display text-lg font-extrabold leading-5 text-brand-navy">{products.length} Brands</span>
            <span className="block text-[11px] font-semibold text-slate-500">Tablets, Capsules & Oral Solutions</span>
          </span>
        </div>
      </div>

      <div className="container-shell relative -mt-16 pb-16 lg:mt-0 lg:flex lg:min-h-[640px] lg:items-center lg:py-20">
        <div className="max-w-[600px]">
          <div className="eyebrow">Better Health. Brighter Tomorrow</div>
          <h1 className="font-display text-[40px] font-extrabold leading-[1.05] tracking-[-.04em] text-brand-navy sm:text-6xl lg:text-[64px]">
            Advancing Healthcare.
            <span className="mt-1 block text-gradient">Building Trusted Partnerships.</span>
          </h1>
          <p className="lead mt-6 max-w-xl">
            At Bhidwaria Pharmaceuticals, we are committed to improving lives through high-quality, affordable and innovative pharmaceutical solutions — together for a healthier tomorrow.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/products" className="btn btn-primary">Explore Products <ArrowRight size={16} /></Link>
            <Link href="/business-opportunity" className="btn btn-outline">Partner With Us <Sparkles size={15} /></Link>
          </div>
          <div className="mt-9 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
            {highlights.map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3 rounded-2xl border border-white bg-white/75 p-3 text-xs font-bold leading-4 text-brand-ink shadow-card backdrop-blur">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-pale text-brand-green"><Icon size={18} /></span>
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
