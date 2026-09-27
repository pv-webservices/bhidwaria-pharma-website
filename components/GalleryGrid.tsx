"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/products";

const ALL = "All";

export function GalleryGrid({ products }: { products: Product[] }) {
  const forms = [ALL, ...Array.from(new Set(products.map((p) => p.dosageForm)))];
  const [filter, setFilter] = useState(ALL);
  const shown = filter === ALL ? products : products.filter((p) => p.dosageForm === filter);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Filter by dosage form">
        {forms.map((f) => {
          const count = f === ALL ? products.length : products.filter((p) => p.dosageForm === f).length;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[13px] font-bold text-brand-navy transition hover:border-brand-green aria-pressed:border-transparent aria-pressed:bg-brand-navy aria-pressed:text-white"
            >
              {f} <span className="ml-1 opacity-60">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <Link key={p.slug} href={`/products/${p.slug}`} className="card card-hover group relative flex flex-col overflow-hidden" aria-label={`${p.brand} — view product details`}>
            <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-slate-50 to-brand-mist">
              <Image
                src={p.image}
                alt={`${p.brand} — ${p.composition}`}
                fill
                sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 92vw"
                className="card-img object-contain p-5"
              />
              <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-brand-navy/85 via-brand-navy/10 to-transparent p-4 opacity-0 transition duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                <span className="text-sm font-bold text-white">View product details</span>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-lime-300 text-brand-navy"><ArrowUpRight size={18} /></span>
              </div>
              <span className="absolute right-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-brand-blue shadow-sm">{p.dosageForm}</span>
            </div>
            <div className="flex items-center justify-between gap-3 p-5">
              <div className="min-w-0">
                <h2 className="font-display text-lg font-extrabold text-brand-navy">{p.brand}</h2>
                <p className="mt-0.5 truncate text-[12.5px] font-medium text-slate-500">{p.composition}</p>
              </div>
              <span className="shrink-0 rounded-full bg-brand-pale px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-brand-green">{p.therapy}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
