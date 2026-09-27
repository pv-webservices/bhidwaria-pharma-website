import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ChevronDown,
  FileCheck2,
  IndianRupee,
  MapPinned,
  Megaphone,
  PackageCheck,
  Phone,
  ShieldCheck,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { EnquiryForm } from "@/components/EnquiryForm";
import { WhatsAppIcon } from "@/components/FloatingContact";
import { processSteps } from "@/lib/data";
import { products } from "@/lib/products";
import { company, FRANCHISE_PATH, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Monopoly PCD Pharma Franchise Opportunity",
  description:
    "Get a monopoly PCD pharma franchise with Bhidwaria Pharmaceuticals, Meerut. Exclusive territory rights, high-demand antibiotic, gastro, pain and Vitamin D3 brands, promotional support and dependable supply across Uttar Pradesh and India.",
  keywords: [
    "monopoly PCD pharma franchise",
    "PCD pharma franchise in Uttar Pradesh",
    "pharma franchise company in Meerut",
    "monopoly basis pharma franchise",
    "PCD franchise for antibiotics and gastro range",
  ],
  alternates: { canonical: FRANCHISE_PATH },
};

const highlights: { icon: LucideIcon; value: string; label: string }[] = [
  { icon: MapPinned, value: "Exclusive", label: "Monopoly territory rights" },
  { icon: PackageCheck, value: `${products.length} Brands`, label: "Ready, high-demand range" },
  { icon: IndianRupee, value: "Low", label: "Investment to get started" },
  { icon: Megaphone, value: "Full", label: "Promotional support" },
];

const benefits: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: MapPinned, title: "Exclusive Territory Rights", text: "Your district or region is yours alone. No other Bhidwaria franchise partner is appointed there, so your promotion builds your business — not someone else's." },
  { icon: ShieldCheck, title: "Quality You Can Stand Behind", text: "IP-standard formulations from licensed, quality-audited manufacturers. Doctors keep prescribing brands that deliver consistent results." },
  { icon: PackageCheck, title: "Focused, Fast-Moving Portfolio", text: "Antibiotics, PPI + prokinetic capsules, pain relief, anti-emetics and Vitamin D3 — molecules prescribed every day in every clinic." },
  { icon: IndianRupee, title: "Healthy, Transparent Margins", text: "Clear price lists and fair terms with no hidden charges, so you can plan your stock and profits with confidence." },
  { icon: Megaphone, title: "Promotional Support", text: "Product literature and promotional inputs to help your team introduce the range to doctors and chemists in your territory." },
  { icon: Truck, title: "Dependable Dispatch", text: "Planned inventory and timely dispatch from Meerut so your stockists and chemists are never left waiting for supply." },
];

const eligibility = [
  "Pharma distributors, stockists and wholesalers",
  "Experienced medical representatives ready to start their own business",
  "Pharmacists and chemists looking to expand",
  "Healthcare entrepreneurs entering the pharma sector",
];

const documents = [
  "Valid wholesale Drug Licence (Form 20B / 21B)",
  "GST registration certificate",
  "PAN card and address proof of the firm",
  "Current bank account details of the firm",
];

const faqs = [
  { q: "What is a monopoly PCD pharma franchise?", a: "PCD stands for Propaganda Cum Distribution. In a monopoly PCD franchise, the company grants one partner the exclusive right to market and distribute its brands in a defined territory — a district, a group of districts or a state. No other franchise partner of the same company is appointed in that area." },
  { q: "Which territories are available for a monopoly franchise?", a: "We are appointing monopoly partners in Uttar Pradesh and across India. Availability is on a first-come basis and depends on whether a territory is already allotted — share your city in the enquiry form and our team will confirm." },
  { q: "Which products are available under the franchise?", a: `The current range includes ${products.map((p) => p.brand).join(", ")} — covering anti-infectives, gastro care, pain management, anti-emetics and Vitamin D3 supplementation.` },
  { q: "What documents do I need to start?", a: "A valid wholesale Drug Licence and GST registration are mandatory, along with PAN, address proof and bank details of your firm. Our team shares the complete onboarding checklist once your territory is confirmed." },
  { q: "How much investment is required?", a: "A monopoly PCD franchise can be started with a modest opening order. The exact amount depends on the size of your territory and the product mix you choose — our team will suggest a practical starting plan during the discussion." },
  { q: "Do you provide promotional support?", a: "Yes. Partners receive product literature and promotional inputs to introduce the range to doctors and chemists, along with ongoing guidance from our team." },
  { q: "How do I get the product list and price list?", a: "Submit the enquiry form, call us or message us on WhatsApp — we will share the latest product list, price list and franchise terms." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export default function MonopolyFranchisePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageHero
        eyebrow="Monopoly PCD pharma franchise"
        title={<>Own Your Territory With a <span className="text-lime-300">Monopoly PCD Pharma Franchise</span></>}
        description="Partner with Bhidwaria Pharmaceuticals and get exclusive rights to market a focused, high-demand range of branded medicines in your district or state — backed by quality, transparent pricing and dependable supply."
        image="/images/hero/hero-franchise.webp"
        crumbs={[{ label: "Services", href: "/services" }, { label: "Monopoly PCD Pharma Franchise" }]}
      >
        <a href="#enquiry" className="btn btn-green">Apply for Franchise <ArrowRight size={16} /></a>
        <a href={whatsappLink("Hello, I am interested in a monopoly PCD pharma franchise with Bhidwaria Pharmaceuticals. Please share territory availability.")} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light"><WhatsAppIcon size={17} /> WhatsApp Us</a>
      </PageHero>

      {/* Highlights */}
      <section className="border-b border-slate-100 bg-white">
        <div className="container-shell grid grid-cols-2 gap-y-2 py-6 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3 px-2 py-2 lg:border-r lg:border-slate-100 lg:px-5 lg:last:border-0">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-pale text-brand-green"><Icon size={22} /></span>
              <span>
                <span className="block font-display text-lg font-extrabold leading-6 text-brand-navy">{value}</span>
                <span className="block text-xs font-medium text-slate-500">{label}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* What is it */}
      <section className="section-pad bg-white">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="group relative h-[400px] overflow-hidden rounded-[28px] shadow-lift">
              <Image src="/images/site/blog-pharmacy.webp" alt="Pharmacist stocking branded medicines supplied by a PCD franchise partner" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              eyebrow="The opportunity"
              title="What Is a Monopoly PCD Pharma Franchise?"
              description="PCD — Propaganda Cum Distribution — lets you market and distribute a pharma company's branded medicines under your own business. On a monopoly basis, you get exclusive rights for your territory, so every doctor you meet and every chemist you supply grows your business alone."
            />
            <p className="mt-4 text-[15px] leading-7 text-slate-600">
              Bhidwaria Pharmaceuticals, headquartered in Meerut, is appointing monopoly partners across Uttar Pradesh and India. We supply the quality products and support; you bring local market knowledge and relationships.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["No competition from our own partners", "Your brand-building stays with you", "Low-risk, low-investment start", "Scalable as your territory grows"].map((x) => (
                <div key={x} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700"><CheckCircle2 size={18} className="shrink-0 text-brand-green" />{x}</div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#enquiry" className="btn btn-primary">Check Territory Availability <ArrowRight size={16} /></a>
              <a href={`tel:${company.phones[0].tel}`} className="btn btn-outline"><Phone size={16} /> {company.phones[0].display}</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-pad bg-brand-mist/60">
        <div className="container-shell">
          <SectionHeading eyebrow="Partner benefits" title="Why Choose Bhidwaria for a Monopoly Franchise" center />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ icon: Icon, title, text }, i) => (
              <Reveal className="h-full" key={title} delay={(i % 3) * 80}>
                <div className="card card-hover h-full p-7">
                  <span className="card-icon grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-green text-white shadow-glow"><Icon size={23} /></span>
                  <h3 className="mt-5 font-display text-lg font-bold text-brand-navy">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-pad bg-white">
        <div className="container-shell">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Franchise portfolio" title="Brands Available for Your Territory" description="High-demand molecules prescribed daily across general practice, orthopaedics, ENT, gastroenterology and paediatrics." />
            <Link href="/gallery" className="btn btn-outline self-start md:self-end">View Product Gallery <ArrowRight size={16} /></Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
            {products.map((p, i) => (
              <Reveal className="h-full" key={p.slug} delay={i * 60}>
                <Link href={`/products/${p.slug}`} className="card card-hover group flex h-full flex-col overflow-hidden">
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-50 to-brand-mist">
                    <Image src={p.image} alt={`${p.brand} pack`} fill sizes="(min-width:1024px) 14vw, (min-width:768px) 24vw, 45vw" className="pack-img object-contain p-3" />
                  </div>
                  <div className="flex flex-1 flex-col p-3.5">
                    <span className="font-display text-[13.5px] font-extrabold leading-5 text-brand-navy">{p.brand}</span>
                    <span className="mt-0.5 text-[10.5px] font-semibold text-slate-500">{p.therapy}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & documents */}
      <section className="section-pad bg-brand-mist/60">
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          {[
            { icon: BadgeCheck, eyebrow: "Who can apply", title: "Ideal Franchise Partners", items: eligibility },
            { icon: FileCheck2, eyebrow: "Requirements", title: "Documents You Will Need", items: documents },
          ].map(({ icon: Icon, eyebrow, title, items }, i) => (
            <Reveal className="h-full" key={title} delay={i * 100}>
              <div className="card h-full p-7 md:p-9">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-pale text-brand-green"><Icon size={22} /></span>
                <div className="eyebrow mt-5">{eyebrow}</div>
                <h2 className="font-display text-2xl font-extrabold text-brand-navy">{title}</h2>
                <ul className="mt-5 grid gap-3">
                  {items.map((x) => (
                    <li key={x} className="flex items-start gap-2.5 text-[15px] font-medium text-slate-700"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-green" />{x}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-white">
        <div className="container-shell">
          <SectionHeading eyebrow="How it works" title="Start Your Franchise in Five Simple Steps" />
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

      {/* FAQ + enquiry */}
      <section id="enquiry" className="section-pad bg-brand-mist/70">
        <div className="container-shell grid items-start gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <SectionHeading eyebrow="Frequently asked questions" title="Monopoly Franchise FAQ" />
            <div className="mt-7 grid gap-3">
              {faqs.map(({ q, a }, i) => (
                <details key={q} open={i === 0} className="card group p-5 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-[15px] font-bold text-brand-navy">
                    {q}
                    <ChevronDown size={18} className="shrink-0 text-brand-green transition group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{a}</p>
                </details>
              ))}
            </div>
            <Link href="/blog/benefits-of-monopoly-pcd-pharma-franchise" className="btn btn-outline mt-7">Read: Benefits of a Monopoly Franchise <ArrowRight size={16} /></Link>
          </div>
          <EnquiryForm title="Apply for a Monopoly Franchise" subtitle="Share your territory and business details — we will confirm availability." defaultType="Monopoly PCD Franchise" />
        </div>
      </section>
    </>
  );
}
