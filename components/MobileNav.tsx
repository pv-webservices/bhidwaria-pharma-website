"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { company, mainNav } from "@/lib/site";
import { divisions } from "@/lib/products";
import { isActive } from "./NavLinks";

const linkClass = (active: boolean) =>
  `rounded-xl px-4 py-3 text-[15px] font-semibold transition active:bg-brand-mist ${active ? "bg-brand-mist text-brand-blue" : "text-brand-ink"}`;

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 text-brand-navy transition active:scale-95"
      >
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>
      {open && (
        <div className="absolute left-0 top-full h-[calc(100dvh-100%)] w-full overflow-y-auto border-t border-slate-100 bg-white pb-10 shadow-soft">
          <nav className="container-shell flex flex-col gap-1 pt-4" aria-label="Mobile">
            {mainNav.map((item) =>
              item.href === "/products" ? (
                <div key={item.href}>
                  <div className="flex items-center">
                    <Link href="/products" className={`flex-1 ${linkClass(isActive(pathname, "/products"))}`}>Products</Link>
                    <button
                      onClick={() => setProductsOpen(!productsOpen)}
                      aria-label="Toggle product divisions"
                      aria-expanded={productsOpen}
                      className="grid h-11 w-11 place-items-center rounded-xl text-brand-navy"
                    >
                      <ChevronDown size={18} className={`transition ${productsOpen ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                  {productsOpen && (
                    <div className="ml-4 grid gap-0.5 border-l-2 border-brand-green/30 pl-3">
                      {divisions.map((d) => (
                        <Link key={d.slug} href={`/products/division/${d.slug}`} className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 active:bg-brand-mist">
                          {d.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.href} href={item.href} className={linkClass(isActive(pathname, item.href))}>
                  {item.label}
                </Link>
              ),
            )}
            <Link href="/blog" className={linkClass(isActive(pathname, "/blog"))}>Insights & Articles</Link>
            <Link href="/careers" className={linkClass(isActive(pathname, "/careers"))}>Careers</Link>
            <Link href="/contact#enquiry" className="btn btn-primary mt-4">Enquire Now</Link>
            <div className="mt-5 grid gap-2.5 rounded-2xl bg-brand-mist p-4 text-sm text-brand-navy">
              {company.phones.map((p) => (
                <a key={p.tel} href={`tel:${p.tel}`} className="flex items-center gap-2 font-semibold">
                  <Phone size={15} className="text-brand-green" /> {p.display}
                </a>
              ))}
              <a href={`mailto:${company.email}`} className="flex items-center gap-2 break-all font-semibold">
                <Mail size={15} className="text-brand-green" /> {company.email}
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
