import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Package } from "lucide-react";
import type { Division, Product } from "@/lib/products";

export function ProductCard({ product, index }: { product: Product; index?: number }) {
  return (
    <Link href={`/products/${product.slug}`} className="card card-hover group flex h-full flex-col overflow-hidden">
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-brand-mist p-4">
        {typeof index === "number" && (
          <span className="absolute left-3 top-3 z-10 grid h-7 w-7 place-items-center rounded-full bg-brand-navy text-[11px] font-extrabold text-white shadow">
            {index + 1}
          </span>
        )}
        <span className="absolute right-3 top-3 z-10 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-brand-blue shadow-sm">
          {product.dosageForm}
        </span>
        <div className="relative aspect-[16/10] rounded-xl bg-white shadow-sm">
          <Image src={product.image} alt={`${product.brand} — ${product.composition}`} fill sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 90vw" className="pack-img object-contain p-3" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="text-[10px] font-extrabold uppercase tracking-[.16em] text-brand-green">{product.therapy}</div>
        <h3 className="mt-1.5 font-display text-lg font-extrabold text-brand-navy">{product.brand}</h3>
        <dl className="mt-3 grid gap-2.5 text-[13px]">
          <div>
            <dt className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Composition</dt>
            <dd className="mt-0.5 line-clamp-3 min-h-[3.75rem] font-medium leading-5 text-slate-700">{product.composition}</dd>
          </div>
          <div className="flex items-center gap-1.5 text-slate-600">
            <Package size={14} className="text-brand-blue" />
            <dt className="sr-only">Pack size</dt>
            <dd className="font-semibold">{product.packSize}</dd>
          </div>
        </dl>
        <span className="link-arrow mt-auto pt-5">View Product <ArrowRight size={14} /></span>
      </div>
    </Link>
  );
}

export function DivisionCard({ division, count, showKind = false }: { division: Division; count: number; showKind?: boolean }) {
  return (
    <Link href={`/products/division/${division.slug}`} className="card card-hover group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src={division.image} alt={division.title} fill sizes="(min-width:1280px) 16vw, (min-width:640px) 45vw, 90vw" className="card-img object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
        <span className={`absolute bottom-3 left-3 rounded-full bg-gradient-to-r ${division.accent} px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow`}>
          {count} {count === 1 ? "Product" : "Products"}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        {showKind && (
          <div className="mb-1 text-[10px] font-extrabold uppercase tracking-[.14em] text-brand-blue">
            {division.kind === "dosage" ? "Dosage form" : "Therapeutic area"}
          </div>
        )}
        <h3 className="min-h-[2.75rem] font-display text-[15px] font-extrabold leading-[1.35] text-brand-navy sm:min-h-0 xl:min-h-[2.75rem]">{division.title}</h3>
        <p className="mt-1.5 line-clamp-3 min-h-[3.75rem] text-xs leading-5 text-slate-500 sm:min-h-[2.5rem] xl:min-h-[3.75rem]">{division.short}</p>
        <span className="link-arrow mt-auto pt-4">View Range <ArrowRight size={13} /></span>
      </div>
    </Link>
  );
}
