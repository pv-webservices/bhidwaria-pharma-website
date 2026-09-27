import Link from "next/link";
import { ArrowRight, BadgeCheck, Boxes, FileCheck2, Truck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { DivisionCard } from "@/components/ProductCard";
import { ProductCatalog } from "@/components/ProductCatalog";
import { divisionCount, divisions } from "@/lib/products";

export const metadata = {
  title: "Products",
  description: "Explore Bhidwaria Pharmaceuticals' range of tablets, capsules and oral solutions across anti-infective, gastro care, pain management, anti-emetic and vitamin & nutrition divisions.",
};

const assurances = [
  { icon: BadgeCheck, title: "IP-Standard Formulations", text: "Compositions aligned with Indian Pharmacopoeia" },
  { icon: Boxes, title: "Standard 10 x 10 Packs", text: "Retail-friendly strip packaging" },
  { icon: FileCheck2, title: "Complete Product Literature", text: "Composition, dosage & safety details" },
  { icon: Truck, title: "Reliable Dispatch", text: "Planned stock for partners" },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product portfolio"
        title={<>Quality Formulations for <span className="text-lime-300">Everyday Healthcare</span></>}
        description="A focused range of trusted tablets, capsules and oral solutions across anti-infective, gastro care, pain management, anti-emetic and nutritional therapy — manufactured to quality standards and supplied in convenient packs."
        image="/images/site/cat-capsules.webp"
        crumbs={[{ label: "Products" }]}
      >
        <a href="#catalog" className="btn btn-green">Browse All Products <ArrowRight size={16} /></a>
        <Link href="/contact#enquiry" className="btn btn-ghost-light">Request Product List</Link>
      </PageHero>

      <section className="border-b border-slate-100 bg-white">
        <div className="container-shell grid grid-cols-2 gap-4 py-6 lg:grid-cols-4">
          {assurances.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-pale text-brand-green"><Icon size={20} /></span>
              <span>
                <span className="block text-[13px] font-bold text-brand-navy">{title}</span>
                <span className="block text-[11.5px] text-slate-500">{text}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-shell">
          <SectionHeading eyebrow="Product divisions" title="Browse by Division" description="Explore our portfolio by dosage form or by therapeutic area. Every division page lists composition, pack size and full product details." />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {divisions.map((d, i) => (
              <Reveal className="h-full" key={d.slug} delay={i * 70}>
                <DivisionCard division={d} count={divisionCount(d.slug)} showKind />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="section-pad bg-brand-mist/60">
        <div className="container-shell">
          <SectionHeading eyebrow="Complete range" title="All Products" description="Filter by division or search by brand name or molecule to find the right product." />
          <div className="mt-8">
            <ProductCatalog />
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
