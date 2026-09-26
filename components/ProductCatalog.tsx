"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Search, SearchX, SlidersHorizontal } from "lucide-react";
import { divisions, products } from "@/lib/products";
import { ProductCard } from "./ProductCard";

const ALL = "all";

export function ProductCatalog() {
  const [active, setActive] = useState<string>(ALL);
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const inDivision = active === ALL || p.divisions.includes(active);
      const matches = !q || [p.brand, p.composition, p.therapy, p.drugClass].some((v) => v.toLowerCase().includes(q));
      return inDivision && matches;
    });
  }, [active, query]);

  const chips = [{ slug: ALL, title: "All Products" }, ...divisions];

  return (
    <div>
      <div className="card flex flex-col gap-4 p-4 md:p-5 lg:flex-row lg:items-center">
        <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.14em] text-brand-navy">
          <SlidersHorizontal size={15} className="text-brand-green" /> Filter
        </div>
        <div className="no-scrollbar -mx-1 flex flex-1 gap-2 overflow-x-auto px-1 pb-1 lg:flex-wrap lg:pb-0">
          {chips.map((c) => {
            const on = active === c.slug;
            return (
              <button
                key={c.slug}
                onClick={() => setActive(c.slug)}
                aria-pressed={on}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold transition duration-300 ${
                  on
                    ? "bg-gradient-to-r from-brand-blue to-brand-green text-white shadow-glow"
                    : "bg-brand-mist text-brand-navy hover:-translate-y-0.5 hover:bg-white hover:shadow-card"
                }`}
              >
                {c.title}
              </button>
            );
          })}
        </div>
        <label className="relative block lg:w-64">
          <span className="sr-only">Search products</span>
          <Search size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search brand or molecule…" className="input !rounded-full !py-2.5 pl-10" />
        </label>
      </div>

      <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
        <span>
          Showing <strong className="text-brand-navy">{visible.length}</strong> of {products.length} products
        </span>
        {active !== ALL && (
          <Link href={`/products/division/${active}`} className="link-arrow">Open division page →</Link>
        )}
      </div>

      {visible.length ? (
        <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => <ProductCard key={p.slug} product={p} index={i} />)}
        </div>
      ) : (
        <div className="card mt-5 grid place-items-center gap-3 p-12 text-center">
          <SearchX size={36} className="text-slate-300" />
          <p className="font-semibold text-brand-navy">No products match your search.</p>
          <button onClick={() => { setQuery(""); setActive(ALL); }} className="btn btn-outline btn-sm">Reset filters</button>
        </div>
      )}
    </div>
  );
}
