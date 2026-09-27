import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Calendar, CheckCircle2, Clock, RefreshCw } from "lucide-react";
import { Breadcrumbs } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { articles, getArticle } from "@/lib/articles";
import { company, FRANCHISE_PATH } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  return a
    ? {
        title: a.title,
        description: a.excerpt,
        keywords: a.keywords,
        alternates: { canonical: `/blog/${a.slug}` },
        openGraph: { type: "article", title: a.title, description: a.excerpt, images: [a.image] },
      }
    : {};
}

export default async function BlogDetail({ params }: Props) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const related = [...articles.filter((x) => x.slug !== slug && x.category === a.category), ...articles.filter((x) => x.category !== a.category)].slice(0, 2);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: a.title,
    description: a.excerpt,
    image: a.image,
    datePublished: new Date(a.date).toISOString(),
    dateModified: new Date(a.updated ?? a.date).toISOString(),
    keywords: a.keywords.join(", "),
    author: { "@type": "Organization", name: company.name },
    publisher: { "@type": "Organization", name: company.name, logo: { "@type": "ImageObject", url: "/images/bhidwaria-logo.webp" } },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article>
        <header className="relative overflow-hidden bg-hero-glow pb-10 pt-10 md:pt-14">
          <div className="absolute inset-0 pattern-grid opacity-40" />
          <div className="container-shell relative max-w-4xl">
            <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: a.category }]} />
            <div className="mt-6 text-[11px] font-extrabold uppercase tracking-[.16em] text-brand-green">{a.category}</div>
            <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-[-.03em] text-brand-navy md:text-5xl">{a.title}</h1>
            <p className="lead mt-5">{a.excerpt}</p>
            <div className="mt-5 flex gap-5 text-xs font-semibold text-slate-500">
              <span className="inline-flex items-center gap-1.5"><Calendar size={13} /> {a.date}</span>
              <span className="inline-flex items-center gap-1.5"><Clock size={13} /> {a.readTime}</span>
              {a.updated && <span className="inline-flex items-center gap-1.5"><RefreshCw size={13} /> Updated {a.updated}</span>}
            </div>
          </div>
        </header>
        <div className="container-shell max-w-5xl">
          <div className="relative -mt-2 aspect-[16/8] overflow-hidden rounded-[28px] shadow-lift">
            <Image src={a.image} alt={a.title} fill priority sizes="(min-width:1024px) 1000px, 100vw" className="object-cover" />
          </div>
          <div className="mx-auto max-w-3xl py-12 text-[17px] leading-8 text-slate-700">
            {a.body.map((b, i) => (
              <div key={i}>
                {b.heading && <h2 className="mt-10 font-display text-2xl font-bold text-brand-navy">{b.heading}</h2>}
                {b.text && <p className={b.heading ? "mt-3" : i ? "mt-6" : ""}>{b.text}</p>}
                {b.list && (
                  <ul className="mt-4 grid gap-2.5">
                    {b.list.map((item) => (
                      <li key={item} className="flex items-start gap-3"><CheckCircle2 size={20} className="mt-1.5 shrink-0 text-brand-green" />{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <aside className="mt-12 rounded-3xl bg-navy-gradient p-7 text-white md:p-9">
              <div className="eyebrow !text-lime-300">Monopoly PCD pharma franchise</div>
              <p className="font-display text-2xl font-extrabold leading-tight">Looking for exclusive franchise rights in your territory?</p>
              <p className="mt-3 text-[15px] leading-7 text-white/75">Partner with Bhidwaria Pharmaceuticals for a focused range of high-demand brands, transparent terms and dependable supply.</p>
              <Link href={FRANCHISE_PATH} className="btn btn-green mt-6">Explore the Opportunity <ArrowRight size={16} /></Link>
            </aside>
            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-8">
              <Link href="/blog" className="btn btn-outline btn-sm"><ArrowLeft size={14} /> All Articles</Link>
              <Link href="/contact#enquiry" className="btn btn-primary btn-sm">Talk to Our Team <ArrowRight size={14} /></Link>
            </div>
          </div>
        </div>
      </article>

      <section className="section-pad bg-brand-mist/60">
        <div className="container-shell">
          <h2 className="h2">Related Articles</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {related.map((x) => (
              <Link key={x.slug} href={`/blog/${x.slug}`} className="card card-hover group flex overflow-hidden">
                <div className="relative w-36 shrink-0 overflow-hidden sm:w-48">
                  <Image src={x.image} alt={x.title} fill sizes="200px" className="card-img object-cover" />
                </div>
                <div className="p-5">
                  <div className="text-[10px] font-extrabold uppercase tracking-[.14em] text-brand-green">{x.category}</div>
                  <h3 className="mt-2 font-display font-bold leading-6 text-brand-navy">{x.title}</h3>
                  <span className="link-arrow mt-3">Read More <ArrowRight size={13} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
