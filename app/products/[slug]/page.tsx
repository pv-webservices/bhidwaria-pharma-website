import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  FlaskConical,
  Layers,
  Mail,
  MapPin,
  Phone,
  Pill,
  ShieldAlert,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { Breadcrumbs } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { EnquiryForm } from "@/components/EnquiryForm";
import { ProductCard } from "@/components/ProductCard";
import { ProductTabs } from "@/components/ProductTabs";
import { Reveal } from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/FloatingContact";
import { partnerBenefits } from "@/lib/data";
import { getDivision, getProduct, products } from "@/lib/products";
import { company, whatsappLink } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return {
    title: `${p.brand} — ${p.composition}`,
    description: `${p.brand} (${p.composition}), ${p.packSize}. ${p.summary} Marketed by ${company.name}.`,
    openGraph: { images: [p.image] },
  };
}

export default async function ProductDetail({ params }: Props) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const primaryDivision = getDivision(p.divisions[1] ?? p.divisions[0]);
  const related = products
    .filter((x) => x.slug !== p.slug)
    .sort((a, b) => Number(b.therapy === p.therapy) - Number(a.therapy === p.therapy))
    .slice(0, 3);
  const facts = [
    { icon: FlaskConical, label: "Composition", value: p.composition },
    { icon: Boxes, label: "Pack Size", value: p.packSize },
    { icon: Pill, label: "Dosage Form", value: p.dosageForm },
    { icon: Stethoscope, label: "Therapeutic Segment", value: p.therapy },
  ];
  const badges = [p.standard, "Quality Assured", p.drugClass];

  return (
    <>
      <section className="relative overflow-hidden bg-hero-glow">
        <div className="absolute inset-0 pattern-grid opacity-40" />
        <div className="container-shell relative py-10 md:py-14">
          <Breadcrumbs
            items={[
              { label: "Products", href: "/products" },
              ...(primaryDivision ? [{ label: primaryDivision.title, href: `/products/division/${primaryDivision.slug}` }] : []),
              { label: p.brand },
            ]}
          />
          <div className="mt-8 grid items-start gap-10 lg:grid-cols-[1.05fr_1fr]">
            <Reveal>
              <div className="card group relative overflow-hidden p-4 sm:p-6">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-green/10 blur-2xl" />
                <div className="relative aspect-[16/10] rounded-2xl bg-white">
                  <Image src={p.image} alt={`${p.brand} pack — ${p.composition}`} fill priority sizes="(min-width:1024px) 50vw, 100vw" className="pack-img object-contain p-3 sm:p-5" />
                </div>
                <div className="relative mt-4 flex flex-wrap gap-2">
                  {badges.map((b) => (
                    <span key={b} className="inline-flex items-center gap-1.5 rounded-full bg-brand-mist px-3 py-1.5 text-[11px] font-bold text-brand-navy">
                      <BadgeCheck size={13} className="text-brand-green" /> {b}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="text-[11px] font-extrabold uppercase tracking-[.18em] text-brand-green">Pharmaceutical Product · {p.therapy}</div>
              <h1 className="mt-2 font-display text-4xl font-extrabold tracking-[-.035em] text-brand-navy md:text-5xl">{p.brand}</h1>
              <p className="mt-2 text-sm font-semibold text-slate-500">
                Marketed by <span className="text-brand-blue">{company.name}</span>
              </p>
              <p className="lead mt-4">{p.summary}</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {facts.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="card card-hover flex gap-3 p-4">
                    <span className="card-icon grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-pale text-brand-green"><Icon size={18} /></span>
                    <span>
                      <span className="block text-[10px] font-extrabold uppercase tracking-wider text-slate-400">{label}</span>
                      <span className="mt-0.5 block text-[13px] font-bold leading-5 text-brand-navy">{value}</span>
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#enquiry" className="btn btn-primary">Send Enquiry <ArrowRight size={16} /></a>
                <a href={whatsappLink(`Hello, I am interested in ${p.brand} (${p.composition}). Please share details.`)} target="_blank" rel="noopener noreferrer" className="btn btn-green">
                  <WhatsAppIcon size={17} /> WhatsApp Now
                </a>
                <a href={`tel:${company.phones[0].tel}`} className="btn btn-outline"><Phone size={16} /> Call</a>
              </div>

              <div className="mt-6 grid gap-2 rounded-2xl border border-slate-100 bg-white/80 p-4 text-[13px] text-slate-600 sm:grid-cols-2">
                <a href={`tel:${company.phones[0].tel}`} className="flex items-center gap-2 font-semibold hover:text-brand-blue"><Phone size={14} className="text-brand-green" /> {company.phones.map((x) => x.display).join(" / ")}</a>
                <a href={`mailto:${company.email}`} className="flex items-center gap-2 break-all font-semibold hover:text-brand-blue"><Mail size={14} className="text-brand-green" /> {company.email}</a>
                <span className="flex items-center gap-2 sm:col-span-2"><MapPin size={14} className="shrink-0 text-brand-green" /> {company.address}</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white !pt-12">
        <div className="container-shell grid items-start gap-8 lg:grid-cols-[1fr_330px]">
          <ProductTabs product={p} />
          <aside className="grid gap-5 lg:sticky lg:top-32">
            <div className="card overflow-hidden">
              <div className="bg-navy-gradient px-5 py-4 font-display text-sm font-bold text-white">Quick Product Info</div>
              <dl className="divide-y divide-slate-100 text-sm">
                {[
                  ["Brand Name", p.brand],
                  ["Pack Size", p.packSize],
                  ["Dosage Form", p.dosageForm],
                  ["Division", p.divisions.map((d) => getDivision(d)?.title).filter(Boolean).join(", ")],
                  ["Location", "Meerut, Uttar Pradesh"],
                ].map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[110px_1fr] gap-2 px-5 py-3">
                    <dt className="font-semibold text-slate-400">{k}</dt>
                    <dd className="font-bold text-brand-navy">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="flex gap-3 rounded-2xl border border-amber-100 bg-amber-50 p-4 text-[12.5px] leading-5 text-amber-900">
              <ShieldAlert size={18} className="mt-0.5 shrink-0 text-amber-500" />
              <p>This is a prescription medicine. Information is intended for healthcare professionals and trade partners. Use only under the supervision of a registered medical practitioner.</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-pad bg-brand-mist/60">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow justify-center">Why choose Bhidwaria</div>
            <h2 className="h2">Why Partner with Us for {p.brand}?</h2>
            <p className="lead mt-4">A dependable product backed by quality sourcing, consistent supply and a team that supports your growth.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {partnerBenefits.map(({ title, text, icon: Icon }, i) => (
              <Reveal className="h-full" key={title} delay={(i % 3) * 80}>
                <div className="card card-hover flex h-full gap-4 p-6">
                  <span className="card-icon grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-green text-white"><Icon size={21} /></span>
                  <span>
                    <span className="block font-display text-[15px] font-bold text-brand-navy">{title}</span>
                    <span className="mt-1 block text-sm leading-6 text-slate-600">{text}</span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="enquiry" className="section-pad scroll-mt-28 bg-white">
        <div className="container-shell grid items-start gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <div className="eyebrow">Send your enquiry</div>
            <h2 className="h2">Get Details for {p.brand}</h2>
            <p className="lead mt-4">Share your requirement and our team will contact you with pricing, availability and franchise / distribution details.</p>
            <div className="mt-8 grid gap-4">
              {[
                { icon: Phone, label: "Call / WhatsApp", value: company.phones.map((x) => x.display).join("  |  "), href: `tel:${company.phones[0].tel}` },
                { icon: Mail, label: "Email Us", value: company.email, href: `mailto:${company.email}` },
                { icon: MapPin, label: "Office Address", value: company.address, href: company.mapLink },
                { icon: Layers, label: "Business Hours", value: company.hours },
              ].map(({ icon: Icon, label, value, href }) => {
                const inner = (
                  <>
                    <span className="card-icon grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-pale text-brand-green"><Icon size={19} /></span>
                    <span>
                      <span className="block text-[10px] font-extrabold uppercase tracking-wider text-brand-blue">{label}</span>
                      <span className="mt-0.5 block break-words text-sm font-bold text-brand-navy">{value}</span>
                    </span>
                  </>
                );
                return href ? (
                  <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="card card-hover flex gap-4 p-4">{inner}</a>
                ) : (
                  <div key={label} className="card flex gap-4 p-4">{inner}</div>
                );
              })}
            </div>
            <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-slate-500"><ShieldCheck size={15} className="text-brand-green" /> Your information is 100% secure & confidential.</div>
          </div>
          <EnquiryForm title={`Request Details for ${p.brand}`} subtitle="Our team will get back to you shortly." defaultType="Product Enquiry" defaultProduct={p.brand} />
        </div>
      </section>

      <section className="section-pad bg-brand-mist/60">
        <div className="container-shell">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="eyebrow">Related products</div>
              <h2 className="h2">You May Also Be Interested In</h2>
            </div>
            <Link href="/products" className="btn btn-outline btn-sm self-start md:self-end">View All Products <ArrowRight size={14} /></Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((x, i) => (
              <Reveal className="h-full" key={x.slug} delay={i * 80}><ProductCard product={x} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
