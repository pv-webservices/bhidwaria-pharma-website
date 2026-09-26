import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { therapySegments } from "@/lib/data";
import { getDivision, productsInDivision } from "@/lib/products";

export const metadata = {
  title: "Therapeutic Segments",
  description: "Bhidwaria Pharmaceuticals' therapeutic focus: anti-infective, gastrointestinal, pain management, anti-emetic and nutraceuticals, with upcoming segments.",
};

export default function TherapyPage() {
  const active = therapySegments.filter((s) => s.division);
  const upcoming = therapySegments.filter((s) => !s.division);
  return (
    <>
      <PageHero
        eyebrow="Therapeutic focus"
        title={<>Focused on Better Health <span className="text-lime-300">Across Key Therapies</span></>}
        description="Our portfolio is organised around therapy areas where dependable medicines matter most. Explore each segment and the products that serve it."
        image="/images/site/cat-gastro.webp"
        crumbs={[{ label: "Therapeutic Segments" }]}
      />

      <section className="section-pad bg-white">
        <div className="container-shell">
          <SectionHeading eyebrow="Available now" title="Our Active Therapy Segments" />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {active.map(({ id, title, icon: Icon, tone, description, division }, i) => {
              const d = getDivision(division!);
              const items = productsInDivision(division!);
              return (
                <Reveal className="h-full" key={id} delay={(i % 2) * 100}>
                  <div id={id} className="card card-hover group grid h-full scroll-mt-32 overflow-hidden sm:grid-cols-[.9fr_1.1fr]">
                    <div className="relative min-h-[200px] overflow-hidden">
                      {d && <Image src={d.image} alt={title} fill sizes="(min-width:1024px) 22vw, 100vw" className="card-img object-cover" />}
                    </div>
                    <div className="flex flex-col p-6">
                      <span className={`card-icon grid h-12 w-12 place-items-center rounded-2xl ${tone}`}><Icon size={22} /></span>
                      <h2 className="mt-4 font-display text-xl font-bold text-brand-navy">{title}</h2>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {items.map((p) => (
                          <Link key={p.slug} href={`/products/${p.slug}`} className="rounded-full bg-brand-mist px-3 py-1 text-xs font-bold text-brand-blue transition hover:bg-brand-blue hover:text-white">{p.brand}</Link>
                        ))}
                      </div>
                      <Link href={`/products/division/${division}`} className="link-arrow mt-auto pt-5">View {title} Range <ArrowRight size={14} /></Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="pipeline" className="section-pad scroll-mt-28 bg-brand-mist/60">
        <div className="container-shell">
          <SectionHeading eyebrow="Coming soon" title="Expanding Our Portfolio" description="We are actively working to extend our range into these segments. Partners interested in these therapies are welcome to register their interest." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.map(({ id, title, icon: Icon, tone, description }, i) => (
              <Reveal className="h-full" key={id} delay={i * 80}>
                <div id={id} className="card card-hover flex h-full scroll-mt-32 flex-col p-6">
                  <div className="flex items-center justify-between">
                    <span className={`card-icon grid h-12 w-12 place-items-center rounded-2xl ${tone}`}><Icon size={22} /></span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-amber-600"><Clock size={11} /> Upcoming</span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-brand-navy">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                  <Link href="/contact#enquiry" className="link-arrow mt-auto pt-5">Register Interest <ArrowRight size={14} /></Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
