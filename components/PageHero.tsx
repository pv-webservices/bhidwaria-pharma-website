import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import type { ReactNode } from "react";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items, light = false }: { items: Crumb[]; light?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className={`flex flex-wrap items-center gap-1.5 text-xs font-semibold ${light ? "text-white/70" : "text-slate-500"}`}>
      <Link href="/" className={`inline-flex items-center gap-1 transition ${light ? "hover:text-white" : "hover:text-brand-blue"}`}>
        <Home size={13} /> Home
      </Link>
      {items.map((c) => (
        <span key={c.label} className="inline-flex items-center gap-1.5">
          <ChevronRight size={13} className="opacity-60" />
          {c.href ? (
            <Link href={c.href} className={`transition ${light ? "hover:text-white" : "hover:text-brand-blue"}`}>{c.label}</Link>
          ) : (
            <span className={light ? "text-lime-300" : "text-brand-green"} aria-current="page">{c.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  image: string;
  crumbs: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy">
      <Image src={image} alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#041f3a]/95 via-[#062f55]/85 to-[#0b5f97]/40" />
      <div className="absolute inset-0 -z-10 pattern-dots opacity-40" />
      <div className="absolute -bottom-24 -left-24 -z-10 h-72 w-72 rounded-full bg-brand-green/30 blur-3xl" />
      <div className="container-shell py-16 md:py-24">
        <Breadcrumbs items={crumbs} light />
        <div className="mt-6 max-w-3xl">
          <div className="eyebrow !text-lime-300">{eyebrow}</div>
          <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-[-.035em] text-white sm:text-5xl md:text-[56px]">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 md:text-lg">{description}</p>
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
      <svg className="absolute bottom-0 left-0 w-full text-white" viewBox="0 0 1440 48" preserveAspectRatio="none" aria-hidden="true">
        <path fill="currentColor" d="M0 48h1440V20c-240 22-480 28-720 14S240 6 0 20z" />
      </svg>
    </section>
  );
}
