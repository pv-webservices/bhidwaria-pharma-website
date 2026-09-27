import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Eye,
  FlaskConical,
  Gem,
  HeartHandshake,
  Headphones,
  IndianRupee,
  MapPin,
  PackageCheck,
  Quote,
  ShieldCheck,
  Target,
  Truck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { qualityPoints } from "@/lib/data";
import { divisions, products } from "@/lib/products";
import { aboutNav, company } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us — Company Overview, Vision, Mission & Quality",
  description:
    "Bhidwaria Pharmaceuticals Private Limited, Meerut — company overview, director's message, vision, mission and values, why partners choose us and our quality assurance commitment.",
};

const pad = (n: number) => String(n).padStart(2, "0");

const journey = [
  { n: "01", title: "Foundation", text: "Bhidwaria Pharmaceuticals Private Limited is established in Meerut, Uttar Pradesh with a vision of accessible, quality healthcare." },
  { n: "02", title: "Portfolio Launch", text: "Branded formulations launched across anti-infective, gastro care, pain management, anti-emetic and Vitamin D3 therapy." },
  { n: "03", title: "Partner Network", text: "A growing network of monopoly PCD franchise partners, distributors and stockists across the region." },
  { n: "04", title: "Next Phase", text: "Expanding into cardio-diabetic, respiratory, paediatric and nutraceutical segments." },
];

const values: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: ShieldCheck, title: "Quality First", text: "Every product we market meets defined quality standards — no shortcuts, ever." },
  { icon: Gem, title: "Integrity", text: "Honest communication, transparent pricing and commitments we keep." },
  { icon: FlaskConical, title: "Scientific Approach", text: "Portfolio decisions guided by evidence, clinical need and compliance." },
  { icon: Users, title: "Patient-Centric", text: "Every strip we supply reaches a patient who trusts it — we never forget that." },
  { icon: HeartHandshake, title: "Partnership", text: "We grow with our partners — relationships over transactions." },
];

const reasons: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: ShieldCheck, title: "IP-Standard Quality", text: "Formulations from licensed, quality-audited manufacturers with batch-wise documentation." },
  { icon: PackageCheck, title: "Focused, In-Demand Range", text: "High-prescription molecules across antibiotics, gastro care, pain relief, anti-emetics and Vitamin D3." },
  { icon: IndianRupee, title: "Affordable & Transparent", text: "Fair pricing and clear terms that work for doctors, chemists, partners and patients alike." },
  { icon: Truck, title: "Dependable Supply", text: "Planned inventory and timely dispatch from Meerut so stock is there when it is needed." },
  { icon: Target, title: "Monopoly Franchise Rights", text: "Exclusive territory rights that let our partners build their business with confidence." },
  { icon: Headphones, title: "Reachable Support", text: "Real people on call, WhatsApp and email — six days a week." },
];

function SectionNav() {
  return (
    <nav aria-label="About sections" className="border-b border-slate-100 bg-white">
      <div className="container-shell no-scrollbar flex gap-2 overflow-x-auto py-4">
        {aboutNav.map((s) => (
          <a key={s.href} href={s.href.replace("/about", "")} className="shrink-0 rounded-full border border-slate-200 px-4 py-2 text-[13px] font-bold text-brand-navy transition hover:border-brand-green hover:bg-brand-pale hover:text-brand-green">
            {s.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default function AboutPage() {
  const stats = [
    { value: pad(products.length), label: "Branded Formulations" },
    { value: pad(divisions.filter((d) => d.kind === "therapy").length), label: "Therapy Divisions" },
    { value: pad(divisions.filter((d) => d.kind === "dosage").length), label: "Dosage Forms" },
    { value: "100%", label: "Commitment to Quality" },
  ];
  return (
    <>
      <PageHero
        eyebrow="About Bhidwaria"
        title={<>Committed to a <span className="text-lime-300">Healthier Tomorrow</span></>}
        description="A growing pharmaceutical company from Meerut, Uttar Pradesh — dedicated to delivering high-quality, affordable and reliable medicines through trusted partnerships."
        image="/images/hero/hero-welcome.webp"
        crumbs={[{ label: "About Us" }]}
      />
      <SectionNav />

      {/* Company overview */}
      <section id="company-overview" className="section-pad bg-white">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="relative h-[380px] overflow-hidden rounded-[28px] shadow-lift md:h-[460px]">
                <Image src="/images/site/research-team.webp" alt="Bhidwaria team reviewing product data" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-2 max-w-[240px] animate-float rounded-2xl bg-white p-5 shadow-lift md:-right-6">
                <MapPin size={20} className="text-brand-green" />
                <div className="mt-2 font-display text-sm font-bold text-brand-navy">Headquartered in Meerut</div>
                <div className="mt-1 text-xs leading-5 text-slate-500">{company.addressLines.join(", ")}</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              eyebrow="Company overview"
              title="Quality Medicines, Built on Trust"
              description={`${company.name} is a Meerut-based pharmaceutical marketing company bringing dependable, high-quality formulations to doctors, chemists and patients. Our portfolio covers the therapy areas where reliable medicines make an everyday difference — infections, acidity and reflux, pain and inflammation, nausea and Vitamin D deficiency.`}
            />
            <p className="mt-4 text-[15px] leading-7 text-slate-600">
              We work with licensed, quality-audited manufacturing partners and follow a disciplined approach to sourcing, documentation and distribution. Through our monopoly PCD franchise and distribution network, we are taking these medicines to more towns and cities across Uttar Pradesh and India.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["IP-standard formulations", "Focused, high-demand portfolio", "Monopoly franchise partnerships", "Ethical business practices"].map((x) => (
                <div key={x} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700"><CheckCircle2 size={18} className="text-brand-green" />{x}</div>
              ))}
            </div>
            <Link href="/products" className="btn btn-primary mt-8">Explore Our Products <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-gradient py-12 text-white">
        <div className="container-shell grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-4xl font-extrabold text-lime-300 md:text-5xl">{s.value}</div>
              <div className="mt-1 text-sm font-semibold text-white/75">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-brand-mist/60">
        <div className="container-shell">
          <SectionHeading eyebrow="Our journey" title="Growing Step by Step" />
          <div className="relative mt-12 grid gap-5 md:grid-cols-4">
            <div className="absolute left-0 right-0 top-6 hidden h-0.5 bg-gradient-to-r from-brand-green via-brand-sky to-brand-blue opacity-30 md:block" />
            {journey.map(({ n, title, text }, i) => (
              <Reveal className="h-full" key={n} delay={i * 100}>
                <div className="relative h-full">
                  <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-brand-blue to-brand-green font-display text-sm font-bold text-white shadow-glow">{n}</span>
                  <div className="card card-hover mt-5 p-6">
                    <h3 className="font-display text-lg font-bold text-brand-navy">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Director's message */}
      <section id="directors-message" className="section-pad bg-white">
        <div className="container-shell">
          <Reveal>
            <div className="relative overflow-hidden rounded-[32px] bg-navy-gradient p-8 text-white shadow-lift md:p-12 lg:p-16">
              <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-green/25 blur-3xl" />
              <Quote size={120} className="pointer-events-none absolute right-8 top-6 text-white/5" />
              <div className="relative grid items-center gap-10 lg:grid-cols-[260px_1fr]">
                <div className="flex flex-col items-center text-center">
                  <div className="grid h-44 w-44 place-items-center rounded-full bg-white p-5 shadow-lift ring-8 ring-white/10">
                    <Image src="/images/bhidwaria-logo.webp" alt={company.name} width={160} height={123} className="h-auto w-full object-contain" />
                  </div>
                  <div className="mt-5 font-display text-lg font-bold">Director</div>
                  <div className="text-sm text-white/65">{company.name}</div>
                </div>
                <div>
                  <div className="eyebrow !text-lime-300">Director&apos;s message</div>
                  <h2 className="font-display text-3xl font-extrabold leading-tight tracking-[-.03em] md:text-4xl">&ldquo;Every Medicine Carries a Promise&rdquo;</h2>
                  <div className="mt-6 grid gap-4 text-[15.5px] leading-8 text-white/80">
                    <p>When we founded Bhidwaria Pharmaceuticals in Meerut, we set out with one simple belief: a patient anywhere in India deserves the same quality of medicine as a patient in the biggest city. That belief guides every product we choose, every partner we work with and every batch we dispatch.</p>
                    <p>We have deliberately built a focused portfolio — medicines that doctors prescribe every day and that patients depend on. By keeping quality non-negotiable and our operations lean, we can offer fair prices without cutting corners.</p>
                    <p>Our partners are the heart of our growth. To every distributor, franchise partner, chemist and doctor who trusts the Bhidwaria name — thank you. We promise to keep earning that trust, one strip at a time.</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision, mission & values */}
      <section id="vision-mission-values" className="section-pad bg-brand-mist/70">
        <div className="container-shell">
          <SectionHeading eyebrow="Vision, mission & values" title="What Drives Us Forward" center />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {[
              { icon: Eye, title: "Our Vision", text: "To become a trusted name in Indian healthcare — recognised for consistent quality, a patient-first mindset and sustainable growth alongside our partners.", tone: "from-brand-sky to-brand-blue" },
              { icon: Target, title: "Our Mission", text: "To improve lives by making high-quality, affordable medicines accessible through responsive service, ethical practices and long-term partnerships with healthcare professionals and distributors.", tone: "from-brand-green to-emerald-600" },
            ].map(({ icon: Icon, title, text, tone }, i) => (
              <Reveal className="h-full" key={title} delay={i * 100}>
                <div className="card card-hover h-full p-8 md:p-10">
                  <span className={`card-icon grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${tone} text-white shadow-glow`}><Icon size={24} /></span>
                  <h3 className="mt-6 font-display text-2xl font-extrabold text-brand-navy">{title}</h3>
                  <p className="lead mt-3">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <h3 className="mt-14 text-center font-display text-xl font-extrabold text-brand-navy">Our Core Values</h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal className="h-full" key={title} delay={i * 70}>
                <div className="card card-hover h-full p-6">
                  <span className="card-icon grid h-12 w-12 place-items-center rounded-2xl bg-brand-pale text-brand-green"><Icon size={22} /></span>
                  <h4 className="mt-4 font-display text-base font-bold text-brand-navy">{title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section id="why-choose-us" className="section-pad bg-white">
        <div className="container-shell">
          <SectionHeading eyebrow="Why choose us" title="Why Doctors, Chemists & Partners Trust Bhidwaria" center />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map(({ icon: Icon, title, text }, i) => (
              <Reveal className="h-full" key={title} delay={(i % 3) * 80}>
                <div className="card card-hover relative h-full overflow-hidden p-7">
                  <div className="absolute -right-4 -top-6 font-display text-[90px] font-extrabold leading-none text-brand-mist">{pad(i + 1)}</div>
                  <span className="card-icon relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-green text-white shadow-glow"><Icon size={23} /></span>
                  <h3 className="relative mt-5 font-display text-lg font-bold text-brand-navy">{title}</h3>
                  <p className="relative mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quality assurance */}
      <section id="quality-assurance" className="overflow-hidden bg-brand-mist">
        <div className="grid lg:grid-cols-2">
          <div className="group relative min-h-[360px] overflow-hidden lg:min-h-[520px]">
            <Image src="/images/hero/hero-quality.webp" alt="Quality inspection of tablet blister packs" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover object-right transition duration-[1.2s] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/40 to-transparent" />
          </div>
          <div className="flex items-center px-5 py-16 sm:px-10 lg:px-14 xl:px-20">
            <Reveal>
              <SectionHeading
                eyebrow="Quality assurance"
                title="Quality Built Into Every Step"
                description="From API sourcing to final dispatch, our processes are designed to protect product integrity. We partner only with licensed manufacturing facilities and follow documented checks at every stage."
              />
              <div className="mt-7 grid gap-3.5">
                {qualityPoints.map((x) => (
                  <div key={x} className="flex items-center gap-3 text-[15px] font-semibold text-slate-700">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-green to-emerald-600 text-white"><Check size={14} strokeWidth={3} /></span>
                    {x}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/quality" className="btn btn-primary">Our Quality Approach <ArrowRight size={16} /></Link>
                <Link href="/careers" className="btn btn-outline">Join Our Team</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
