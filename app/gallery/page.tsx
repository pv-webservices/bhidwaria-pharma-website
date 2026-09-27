import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { GalleryGrid } from "@/components/GalleryGrid";
import { CTA } from "@/components/CTA";
import { products } from "@/lib/products";
import { FRANCHISE_PATH } from "@/lib/site";

export const metadata: Metadata = {
  title: "Product Gallery",
  description:
    "Browse the Bhidwaria Pharmaceuticals product gallery — Bhidol-SP, Bhidcef-200, Bhidoclav-CV 625, Bhidpan-DSR, Rebhi-DSR, Vomiblock-MD and Bhidcal-D3 Nano Shots. Tap any pack to view full product details.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Product gallery"
        title={<>Our Brands, <span className="text-lime-300">Up Close</span></>}
        description="Explore the packs behind our portfolio. Select any product to see its composition, indications, dosage and pack details."
        image="/images/hero/hero-quality.webp"
        crumbs={[{ label: "Gallery" }]}
      />
      <section className="section-pad bg-brand-mist/60">
        <div className="container-shell">
          <SectionHeading eyebrow={`${products.length} branded formulations`} title="Product Gallery" center />
          <div className="mt-8">
            <GalleryGrid products={products} />
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Link href="/products" className="btn btn-primary">Browse Full Catalogue <ArrowRight size={16} /></Link>
            <Link href={FRANCHISE_PATH} className="btn btn-outline">Get Franchise for These Brands</Link>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
