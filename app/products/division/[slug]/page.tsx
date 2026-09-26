import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, Grid2x2, LayoutList, Mail, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { EnquiryForm } from "@/components/EnquiryForm";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { divisionCount, divisions, getDivision, productsInDivision } from "@/lib/products";
import { company } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return divisions.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const d = getDivision(slug);
  return d ? { title: `${d.title} Range`, description: d.description } : {};
}

export default async function DivisionPage({ params }: Props) {
  const { slug } = await params;
  const division = getDivision(slug);
  if (!division) notFound();
  const items = productsInDivision(slug);

  return (
    <>
      <PageHero
        eyebrow={division.kind === "dosage" ? "Dosage form division" : "Therapeutic division"}
        title={<>{division.title} <span className="text-lime-300">Range</span></>}
        description={division.description}
        image={division.image}
        crumbs={[{ label: "Products", href: "/products" }, { label: division.title }]}
      />

      <section className="section-pad bg-white !pt-10">
        <div className="container-shell">
          {/* Division filter bar */}
          <div className="card p-4 md:p-5">
            <div className="text-[11px] font-extrabold uppercase tracking-[.16em] text-brand-navy">Filter Products — <span className="text-brand-green">Bhidwaria Pharmaceuticals</span></div>
            <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto pb-1 md:flex-wrap md:pb-0">
              <Link href="/products#catalog" className="shrink-0 rounded-full bg-brand-mist px-4 py-2 text-xs font-bold text-brand-navy transition hover:-translate-y-0.5 hover:shadow-card">All Products</Link>
              {divisions.map((d) => (
                <Link
                  key={d.slug}
                  href={`/products/division/${d.slug}`}
                  aria-current={d.slug === slug ? "page" : undefined}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold transition duration-300 ${
                    d.slug === slug ? "bg-gradient-to-r from-brand-blue to-brand-green text-white shadow-glow" : "bg-brand-mist text-brand-navy hover:-translate-y-0.5 hover:shadow-card"
                  }`}
                >
                  {d.title} <span className="opacity-70">({divisionCount(d.slug)})</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
            <div>
              <div className="flex flex-col gap-3 rounded-2xl bg-navy-gradient px-5 py-4 text-white sm:flex-row sm:items-center sm:justify-between">
                <h2 className="flex items-center gap-2 font-display text-base font-bold md:text-lg">
                  <Grid2x2 size={18} className="text-lime-300" /> ({division.title}) Product Range — Bhidwaria Pharmaceuticals
                </h2>
                <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-white/15 px-3 py-1 text-xs font-bold sm:self-auto">
                  <LayoutList size={13} /> {items.length} {items.length === 1 ? "product" : "products"}
                </span>
              </div>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {items.map((p, i) => (
                  <Reveal className="h-full" key={p.slug} delay={(i % 3) * 80}>
                    <ProductCard product={p} index={i} />
                  </Reveal>
                ))}
              </div>
              <p className="mt-6 text-sm text-slate-500">Showing 1 to {items.length} of {items.length} products</p>
            </div>

            <aside className="grid content-start gap-6">
              <div className="card overflow-hidden">
                <div className="bg-navy-gradient px-5 py-4 font-display text-sm font-bold text-white">Product Divisions</div>
                <ul className="p-2">
                  {divisions.map((d) => (
                    <li key={d.slug}>
                      <Link
                        href={`/products/division/${d.slug}`}
                        className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${d.slug === slug ? "bg-brand-pale text-brand-green" : "text-brand-navy hover:bg-brand-mist"}`}
                      >
                        <Image src={d.image} alt="" width={36} height={28} className="h-7 w-9 rounded-md object-cover" />
                        <span className="flex-1">{d.title}</span>
                        <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-extrabold text-slate-500 shadow-sm">{divisionCount(d.slug)}</span>
                        <ArrowRight size={14} className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-brand-green" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card grid gap-3 bg-gradient-to-br from-brand-pale to-brand-mist p-5">
                <div className="font-display text-sm font-bold text-brand-navy">Talk to our team</div>
                {company.phones.map((p) => (
                  <a key={p.tel} href={`tel:${p.tel}`} className="flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-green"><Phone size={15} className="text-brand-green" /> {p.display}</a>
                ))}
                <a href={`mailto:${company.email}`} className="flex items-center gap-2 break-all text-sm font-semibold text-brand-navy hover:text-brand-green"><Mail size={15} className="text-brand-green" /> {company.email}</a>
              </div>
              <EnquiryForm compact title="Quick Enquiry" subtitle={`Interested in our ${division.title} range?`} defaultType="Product Enquiry" />
            </aside>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
