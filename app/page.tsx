import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Check,
  Headphones,
  Lightbulb,
  MapPin,
  PackageCheck,
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CTA } from "@/components/CTA";
import { DivisionCard, ProductCard } from "@/components/ProductCard";
import { articles, partnerBenefits, processSteps, promises, qualityPoints, therapySegments } from "@/lib/data";
import { divisionCount, divisions, products } from "@/lib/products";
import { company } from "@/lib/site";

const features = [
  { icon: ShieldCheck, title: "Quality Focused", text: "Consistent and reliable products" },
  { icon: PackageCheck, title: "Diverse Portfolio", text: "Key therapeutic solutions" },
  { icon: Truck, title: "Reliable Supply", text: "Timely and efficient distribution" },
  { icon: Headphones, title: "Partner Support", text: "Growing together for better healthcare" },
];

const values = [
  { icon: Award, title: "Quality Medicines", text: "for better lives" },
  { icon: ShieldCheck, title: "Strong Ethical", text: "values" },
  { icon: Lightbulb, title: "Focus on", text: "innovation" },
  { icon: Users, title: "Committed", text: "team" },
];

function SectionLink({ href, children }: { href: string; children: string }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-2 self-start rounded-full border border-brand-navy/10 bg-white px-4 py-2 text-sm font-bold text-brand-navy shadow-sm transition hover:border-brand-green/40 hover:text-brand-green md:self-end">
      {children} <ArrowRight size={15} className="transition group-hover:translate-x-1" />
    </Link>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Feature strip */}
      <section className="relative z-10 -mt-2 border-y border-slate-100 bg-white">
        <div className="container-shell grid grid-cols-2 gap-y-2 py-5 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }, i) => (
            <Reveal className="h-full" key={title} delay={i * 80}>
              <div className="group flex items-center gap-3 px-2 py-3 sm:gap-4 lg:border-r lg:border-slate-100 lg:px-5 lg:last:border-0">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-pale text-brand-green transition duration-500 group-hover:rotate-[-8deg] group-hover:bg-brand-green group-hover:text-white">
                  <Icon size={22} />
                </span>
                <div>
                  <div className="font-display text-sm font-bold text-brand-navy">{title}</div>
                  <div className="mt-0.5 text-xs text-slate-500">{text}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="section-pad bg-white">
        <div className="container-shell grid items-center gap-10 lg:grid-cols-[1.05fr_1fr_.62fr] lg:gap-8">
          <Reveal>
            <div className="grid gap-4">
              <div className="group relative h-60 overflow-hidden rounded-[26px] shadow-soft sm:h-72">
                <Image src="/images/site/facility.webp" alt="Bhidwaria Pharmaceuticals corporate facility" fill sizes="(min-width:1024px) 38vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="group relative h-44 overflow-hidden rounded-[26px] shadow-soft">
                <Image src="/images/site/quality-lab.webp" alt="Quality control scientist at work" fill sizes="(min-width:1024px) 38vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-navy/80" />
                <div className="absolute bottom-5 right-6 text-right font-display text-sm font-bold uppercase leading-6 tracking-[.12em] text-white">
                  Quality<br />People<br />Progress
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              eyebrow="About us"
              title={<>Committed to <span className="text-gradient">A Healthier Tomorrow</span></>}
              description="Bhidwaria Pharmaceuticals Private Limited is a growing pharmaceutical company based in Meerut, Uttar Pradesh, dedicated to delivering high-quality, affordable and reliable medicines. We focus on building long-term partnerships through trust, innovation and a deep commitment to patient well-being."
            />
            <div className="mt-6 flex items-start gap-3 rounded-2xl bg-brand-mist p-4 text-sm text-slate-600">
              <MapPin size={18} className="mt-0.5 shrink-0 text-brand-green" />
              <span>{company.address}</span>
            </div>
            <Link href="/about" className="btn btn-primary mt-7">Learn More <ArrowRight size={16} /></Link>
          </Reveal>
          <Reveal delay={200}>
            <div className="grid grid-cols-2 gap-3 rounded-[26px] bg-gradient-to-b from-brand-mist to-white p-4 lg:grid-cols-1">
              {values.map(({ icon: Icon, title, text }) => (
                <div key={title} className="card card-hover flex items-center gap-3 p-3.5">
                  <span className="card-icon grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-pale text-brand-green"><Icon size={19} /></span>
                  <span className="text-[13px] font-bold leading-4 text-brand-navy">{title}<span className="block font-medium text-slate-500">{text}</span></span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Product divisions */}
      <section className="section-pad bg-brand-mist/70">
        <div className="container-shell">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Our products" title="A Complete Range for Diverse Healthcare Needs" />
            <SectionLink href="/products">View All Products</SectionLink>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {divisions.map((d, i) => (
              <Reveal className="h-full" key={d.slug} delay={i * 70}>
                <DivisionCard division={d} count={divisionCount(d.slug)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Therapeutic segments */}
      <section className="section-pad bg-white">
        <div className="container-shell">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Therapeutic segments" title="Focused on Better Health Across Key Therapies" />
            <SectionLink href="/therapeutic-segments">Explore All Segments</SectionLink>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 xl:grid-cols-8">
            {therapySegments.map(({ id, title, icon: Icon, tone, division }, i) => (
              <Reveal className="h-full" key={id} delay={i * 50}>
                <Link
                  href={division ? `/products/division/${division}` : `/therapeutic-segments#${id}`}
                  className="card card-hover flex h-full min-h-[150px] flex-col items-center justify-center p-5 text-center"
                >
                  <span className={`card-icon grid h-14 w-14 place-items-center rounded-2xl ${tone}`}><Icon size={26} /></span>
                  <span className="mt-4 text-[13px] font-bold text-brand-navy">{title}</span>
                  <span className={`mt-1.5 text-[10px] font-extrabold uppercase tracking-wider ${division ? "text-brand-green" : "text-slate-400"}`}>
                    {division ? "Available" : "Coming Soon"}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="overflow-hidden bg-brand-mist">
        <div className="grid lg:grid-cols-2">
          <div className="group relative min-h-[360px] overflow-hidden lg:min-h-[520px]">
            <Image src="/images/site/quality-lab.webp" alt="Scientist performing quality testing with a pipette" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover transition duration-[1.2s] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/10 to-brand-navy/60" />
            <div className="absolute right-6 top-8 max-w-[210px] text-right font-display text-lg font-bold uppercase leading-7 tracking-[.08em] text-white md:right-10 md:top-12">
              Quality in every step for a healthier tomorrow
            </div>
          </div>
          <div className="flex items-center px-5 py-16 sm:px-10 lg:px-14 xl:px-20">
            <Reveal>
              <SectionHeading
                eyebrow="Our commitment"
                title="Quality & Compliance"
                description="We follow stringent quality processes across our operations to ensure safe, effective and reliable products for a healthier world."
              />
              <div className="mt-7 grid gap-3.5">
                {qualityPoints.map((x) => (
                  <div key={x} className="flex items-center gap-3 text-[15px] font-semibold text-slate-700">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-green to-emerald-600 text-white"><Check size={14} strokeWidth={3} /></span>
                    {x}
                  </div>
                ))}
              </div>
              <Link href="/quality" className="btn btn-primary mt-8">Learn More <ArrowRight size={16} /></Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why partner */}
      <section className="section-pad bg-white">
        <div className="container-shell">
          <SectionHeading eyebrow="Why partner with us" title="Building Stronger Partnerships" />
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-6">
            {partnerBenefits.map(({ title, text, icon: Icon }, i) => (
              <Reveal className="h-full" key={title} delay={i * 60}>
                <Link href="/business-opportunity" className="card card-hover flex h-full flex-col items-center px-4 py-7 text-center">
                  <span className="card-icon grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-brand-pale to-brand-mist text-brand-green ring-4 ring-white"><Icon size={23} /></span>
                  <div className="mt-4 text-[13px] font-bold leading-5 text-brand-navy">{title}</div>
                  <p className="mt-2 text-[11.5px] leading-5 text-slate-500">{text}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Business banner */}
      <section className="relative isolate overflow-hidden bg-[#062f55]">
        <Image src="/images/site/partnership.webp" alt="Business partners shaking hands" fill sizes="100vw" className="-z-20 object-cover object-right" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#041f3a] via-[#062f55]/90 to-transparent" />
        <div className="container-shell flex flex-col gap-8 py-16 md:py-20 lg:flex-row lg:items-center lg:justify-between">
          <Reveal className="max-w-xl">
            <div className="eyebrow !text-lime-300">Business opportunity</div>
            <h2 className="font-display text-3xl font-extrabold tracking-[-.03em] text-white md:text-[42px] md:leading-[1.1]">Business & Distribution Opportunities</h2>
            <p className="mt-4 text-[15px] leading-7 text-white/75">Connect with our team to discuss PCD franchise and distribution availability in your region and explore partnership opportunities.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/business-opportunity#enquiry" className="btn btn-green">Enquire Now <ArrowRight size={16} /></Link>
              <Link href="/business-opportunity" className="btn btn-ghost-light">How It Works</Link>
            </div>
          </Reveal>
          <div className="hidden text-right font-display text-lg font-bold uppercase leading-7 tracking-[.1em] text-white/90 lg:block">
            Together<br />for a healthier<br />tomorrow
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="section-pad bg-brand-mist/60">
        <div className="container-shell">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Featured products" title="Our Popular Products" />
            <SectionLink href="/products">Explore All Products</SectionLink>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal className="h-full" key={p.slug} delay={(i % 3) * 90}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-white">
        <div className="container-shell">
          <SectionHeading eyebrow="Our process" title="From Partnership to Progress" />
          <div className="relative mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            <div className="absolute left-[10%] right-[10%] top-9 hidden h-0.5 bg-gradient-to-r from-brand-green via-brand-sky to-brand-blue opacity-30 lg:block" />
            {processSteps.map(({ n, title, text, icon: Icon }, i) => (
              <Reveal className="h-full" key={n} delay={i * 90}>
                <div className="card card-hover relative h-full p-5 text-center">
                  <span className="card-icon relative mx-auto grid h-[72px] w-[72px] place-items-center rounded-full border-4 border-white bg-gradient-to-br from-brand-pale to-brand-mist text-brand-green shadow-card">
                    <Icon size={26} />
                    <span className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full bg-brand-navy text-[10px] font-extrabold text-white">{n}</span>
                  </span>
                  <h3 className="mt-4 font-display text-[15px] font-bold text-brand-navy">{title}</h3>
                  <p className="mt-1.5 text-xs leading-5 text-slate-500">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Presence */}
      <section className="overflow-hidden bg-brand-mist/70">
        <div className="grid lg:grid-cols-[1fr_1fr]">
          <div className="flex items-center px-5 py-16 sm:px-10 lg:py-20 lg:pl-[max(2rem,calc((100vw-1240px)/2+2rem))] lg:pr-14">
            <Reveal>
              <SectionHeading
                eyebrow="Our presence"
                title="Serving Healthcare Across India"
                description="Headquartered in Meerut, Uttar Pradesh, we are committed to ensuring wider access to quality healthcare through a growing distribution network of trusted partners."
              />
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {["Wide Distribution Network", "Timely Supply", "Growing Partnerships"].map((x) => (
                  <div key={x} className="flex items-center gap-2 rounded-xl bg-white px-3 py-3 text-[13px] font-bold text-brand-navy shadow-sm">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-green text-white"><Check size={12} strokeWidth={3} /></span>{x}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-primary">Get in Touch <ArrowRight size={16} /></Link>
                <a href={company.mapLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline"><MapPin size={16} /> View on Map</a>
              </div>
            </Reveal>
          </div>
          <div className="group relative min-h-[340px] overflow-hidden">
            <Image src="/images/site/logistics.webp" alt="Pharmaceutical distribution truck on a highway" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover transition duration-[1.2s] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 to-transparent" />
            <div className="absolute left-6 top-6 rounded-2xl bg-white/90 px-4 py-3 font-display text-xs font-bold uppercase leading-5 tracking-[.14em] text-brand-navy shadow-lift backdrop-blur">
              Health<br />without boundaries
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="section-pad bg-white">
        <div className="container-shell">
          <SectionHeading eyebrow="Our promise" title="What Our Partners Can Count On" center />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {promises.map(({ title, text, icon: Icon }, i) => (
              <Reveal className="h-full" key={title} delay={i * 100}>
                <div className="card card-hover relative h-full overflow-hidden p-7">
                  <div className="absolute -right-6 -top-6 font-display text-[110px] font-extrabold leading-none text-brand-mist">0{i + 1}</div>
                  <span className="card-icon relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-green text-white shadow-glow"><Icon size={24} /></span>
                  <h3 className="relative mt-5 font-display text-lg font-bold text-brand-navy">{title}</h3>
                  <p className="relative mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="section-pad bg-brand-mist/60">
        <div className="container-shell">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Insights" title="Latest Articles & Updates" />
            <SectionLink href="/blog">View All Articles</SectionLink>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {articles.map((a, i) => (
              <Reveal className="h-full" key={a.slug} delay={i * 90}>
                <Link href={`/blog/${a.slug}`} className="card card-hover group flex h-full flex-col overflow-hidden sm:flex-row lg:flex-col">
                  <div className="relative h-52 overflow-hidden sm:h-auto sm:w-2/5 lg:h-52 lg:w-full">
                    <Image src={a.image} alt={a.title} fill sizes="(min-width:1024px) 30vw, 100vw" className="card-img object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="text-[10px] font-extrabold uppercase tracking-[.15em] text-brand-green">{a.category} · {a.readTime}</div>
                    <h3 className="mt-2 font-display text-lg font-bold leading-6 text-brand-navy">{a.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{a.excerpt}</p>
                    <span className="link-arrow mt-auto pt-4">Read More <ArrowRight size={14} /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
