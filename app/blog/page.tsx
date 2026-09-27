import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Blog — PCD Pharma Franchise Guides & Healthcare Insights",
  description:
    "Read the Bhidwaria Pharmaceuticals blog: monopoly PCD pharma franchise guides, profit margin calculation, choosing the right pharma company, quality in medicines and healthcare access.",
};

export default function BlogPage() {
  const [featured, ...rest] = articles;
  return (
    <>
      <PageHero
        eyebrow="Our blog"
        title={<>Guides, Insights & <span className="text-lime-300">Updates</span></>}
        description="Practical guides for pharma franchise partners and perspectives on quality, healthcare access and building strong distribution partnerships."
        image="/images/site/blog-pharmacy.webp"
        crumbs={[{ label: "Blog" }]}
      />

      <section className="section-pad bg-white">
        <div className="container-shell">
          <Reveal>
            <Link href={`/blog/${featured.slug}`} className="card card-hover group grid overflow-hidden lg:grid-cols-2">
              <div className="relative min-h-[280px] overflow-hidden">
                <Image src={featured.image} alt={featured.title} fill priority sizes="(min-width:1024px) 50vw, 100vw" className="card-img object-cover" />
                <span className="absolute left-4 top-4 rounded-full bg-brand-green px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">Latest</span>
              </div>
              <div className="flex flex-col justify-center p-7 md:p-10">
                <div className="text-[11px] font-extrabold uppercase tracking-[.16em] text-brand-green">{featured.category}</div>
                <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight text-brand-navy md:text-3xl">{featured.title}</h2>
                <p className="mt-4 text-[15px] leading-7 text-slate-600">{featured.excerpt}</p>
                <div className="mt-5 flex gap-5 text-xs font-semibold text-slate-400">
                  <span className="inline-flex items-center gap-1.5"><Calendar size={13} /> {featured.date}</span>
                  <span className="inline-flex items-center gap-1.5"><Clock size={13} /> {featured.readTime}</span>
                </div>
                <span className="link-arrow mt-6">Read Article <ArrowRight size={14} /></span>
              </div>
            </Link>
          </Reveal>

          <div className="mt-14">
            <SectionHeading eyebrow="More articles" title="Explore Our Blog" />
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((a, i) => (
                <Reveal className="h-full" key={a.slug} delay={(i % 3) * 90}>
                  <Link href={`/blog/${a.slug}`} className="card card-hover group flex h-full flex-col overflow-hidden">
                    <div className="relative h-52 overflow-hidden">
                      <Image src={a.image} alt={a.title} fill sizes="(min-width:1024px) 30vw, (min-width:768px) 45vw, 100vw" className="card-img object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="text-[10px] font-extrabold uppercase tracking-[.15em] text-brand-green">{a.category} · {a.date}</div>
                      <h3 className="mt-2 font-display text-lg font-bold leading-7 text-brand-navy">{a.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{a.excerpt}</p>
                      <span className="link-arrow mt-auto pt-5">Read Article <ArrowRight size={14} /></span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
