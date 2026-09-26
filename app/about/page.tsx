import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Eye, FlaskConical, HeartHandshake, MapPin, ShieldCheck, Target, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { divisions, products } from "@/lib/products";
import { company } from "@/lib/site";

export const metadata = {
  title: "About Us",
  description: "Learn about Bhidwaria Pharmaceuticals Private Limited, Meerut — our mission, vision, values and commitment to quality healthcare.",
};

const values = [
  { icon: ShieldCheck, title: "Quality First", text: "Every product we market meets defined quality standards — no shortcuts, ever." },
  { icon: HeartHandshake, title: "Ethical Partnerships", text: "Transparent, responsible and mutually rewarding business relationships." },
  { icon: FlaskConical, title: "Scientific Approach", text: "Portfolio decisions guided by evidence, clinical need and compliance." },
  { icon: Users, title: "Patient-Centric", text: "We never forget that every strip we supply reaches a patient who trusts it." },
];

const journey = [
  { n: "01", title: "Foundation", text: "Bhidwaria Pharmaceuticals Private Limited is established in Meerut, Uttar Pradesh with a vision of accessible, quality healthcare." },
  { n: "02", title: "Portfolio Launch", text: "Launch of six branded formulations across anti-infective, gastro care, pain management and anti-emetic therapy." },
  { n: "03", title: "Partner Network", text: "Building a growing network of distributors, stockists and PCD franchise partners across the region." },
  { n: "04", title: "Next Phase", text: "Expanding into cardio-diabetic, respiratory, paediatric and nutraceutical segments." },
];

export default function AboutPage() {
  const stats = [
    { value: `0${products.length}`, label: "Branded Formulations" },
    { value: `0${divisions.filter((d) => d.kind === "therapy").length}`, label: "Therapy Divisions" },
    { value: "02", label: "Dosage Forms" },
    { value: "100%", label: "Commitment to Quality" },
  ];
  return (
    <>
      <PageHero
        eyebrow="About Bhidwaria"
        title={<>Committed to a <span className="text-lime-300">Healthier Tomorrow</span></>}
        description="A growing pharmaceutical company from Meerut, Uttar Pradesh — dedicated to delivering high-quality, affordable and reliable medicines through trusted partnerships."
        image="/images/site/facility.webp"
        crumbs={[{ label: "About Us" }]}
      />

      <section className="section-pad bg-white">
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
              eyebrow="Who we are"
              title="Quality Medicines, Built on Trust"
              description={`${company.name} is a pharmaceutical company focused on bringing dependable, high-quality formulations to doctors, chemists and patients. Our portfolio spans essential therapy areas where reliable medicines make an everyday difference — infections, acidity and reflux, pain and inflammation, and nausea.`}
            />
            <p className="mt-4 text-[15px] leading-7 text-slate-600">
              We work with licensed, quality-audited manufacturing partners and maintain a disciplined approach to sourcing, documentation and distribution — so every strip that carries the Bhidwaria name delivers what it promises.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["IP-standard formulations", "Focused, high-demand portfolio", "Reliable supply for partners", "Ethical business practices"].map((x) => (
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

      <section className="section-pad bg-brand-mist/70">
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          {[
            { icon: Target, title: "Our Mission", text: "To improve lives by making high-quality, affordable medicines accessible through responsive service, ethical practices and long-term partnerships with healthcare professionals and distributors.", tone: "from-brand-green to-emerald-600" },
            { icon: Eye, title: "Our Vision", text: "To become a trusted name in Indian healthcare — recognised for consistent quality, a patient-first mindset and sustainable growth alongside our partners.", tone: "from-brand-sky to-brand-blue" },
          ].map(({ icon: Icon, title, text, tone }, i) => (
            <Reveal className="h-full" key={title} delay={i * 100}>
              <div className="card card-hover h-full p-8 md:p-10">
                <span className={`card-icon grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${tone} text-white shadow-glow`}><Icon size={24} /></span>
                <h2 className="mt-6 font-display text-2xl font-extrabold text-brand-navy">{title}</h2>
                <p className="lead mt-3">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-shell">
          <SectionHeading eyebrow="Core values" title="Principles That Guide Us" center />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal className="h-full" key={title} delay={i * 80}>
                <div className="card card-hover h-full p-7">
                  <span className="card-icon grid h-12 w-12 place-items-center rounded-2xl bg-brand-pale text-brand-green"><Icon size={22} /></span>
                  <h3 className="mt-5 font-display text-lg font-bold text-brand-navy">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
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

      <section className="section-pad bg-white">
        <div className="container-shell grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="Quality & infrastructure" title="Built Around Disciplined Processes" description="From API sourcing to final dispatch, our processes are designed to protect product integrity. We partner with licensed manufacturing facilities and follow documented checks at every stage." />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/quality" className="btn btn-primary">Our Quality Approach <ArrowRight size={16} /></Link>
              <Link href="/careers" className="btn btn-outline">Join Our Team</Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="group relative h-80 overflow-hidden rounded-[28px] shadow-lift">
              <Image src="/images/site/blog-inspection.webp" alt="Quality inspection of tablet blister packs" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
