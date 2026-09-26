"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown } from "lucide-react";
import { mainNav } from "@/lib/site";
import { divisions, products } from "@/lib/products";

export function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

function ProductsMenu({ active }: { active: boolean }) {
  return (
    <div className="group relative py-7">
      <Link
        href="/products"
        aria-current={active ? "page" : undefined}
        className="nav-link inline-flex items-center gap-1 transition hover:text-brand-blue aria-[current=page]:text-brand-blue"
      >
        Products <ChevronDown size={14} className="transition duration-300 group-hover:rotate-180" />
      </Link>
      <div className="invisible absolute left-1/2 top-[74px] w-[720px] -translate-x-1/2 translate-y-3 rounded-3xl border border-slate-100 bg-white p-5 opacity-0 shadow-lift transition duration-300 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <div className="grid grid-cols-[1fr_1.15fr] gap-5">
          <div>
            <div className="px-2 text-[10px] font-extrabold uppercase tracking-[.18em] text-brand-green">Product Divisions</div>
            <div className="mt-2 grid gap-0.5">
              {divisions.map((d) => (
                <Link key={d.slug} href={`/products/division/${d.slug}`} className="group/item flex items-center gap-3 rounded-xl px-2 py-2 transition hover:bg-brand-mist">
                  <Image src={d.image} alt="" width={40} height={30} className="h-8 w-10 rounded-lg object-cover" />
                  <span className="flex-1">
                    <span className="block text-[13px] font-bold text-brand-navy">{d.title}</span>
                    <span className="block text-[11px] font-medium text-slate-500">{d.short}</span>
                  </span>
                  <ArrowRight size={14} className="text-slate-300 transition group-hover/item:translate-x-1 group-hover/item:text-brand-green" />
                </Link>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-brand-mist p-4">
            <div className="text-[10px] font-extrabold uppercase tracking-[.18em] text-brand-blue">Our Brands</div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {products.map((p) => (
                <Link key={p.slug} href={`/products/${p.slug}`} className="rounded-xl bg-white px-3 py-2.5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-card">
                  <span className="block text-[13px] font-extrabold text-brand-navy">{p.brand}</span>
                  <span className="block text-[10.5px] font-medium text-slate-500">{p.therapy}</span>
                </Link>
              ))}
            </div>
            <Link href="/products" className="btn btn-primary btn-sm mt-4 w-full">
              View All Products <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function NavLinks() {
  const pathname = usePathname();
  return (
    <nav className="hidden items-center gap-5 text-[13.5px] font-semibold text-brand-ink lg:flex xl:gap-7" aria-label="Main">
      {mainNav.map((item) =>
        item.href === "/products" ? (
          <ProductsMenu key={item.href} active={isActive(pathname, item.href)} />
        ) : (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive(pathname, item.href) ? "page" : undefined}
            className="nav-link transition hover:text-brand-blue aria-[current=page]:text-brand-blue"
          >
            {item.label}
          </Link>
        ),
      )}
    </nav>
  );
}
