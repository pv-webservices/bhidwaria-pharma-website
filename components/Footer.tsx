import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { company, FRANCHISE_PATH, mainNav, whatsappLink } from "@/lib/site";
import { divisions } from "@/lib/products";
import { WhatsAppIcon } from "./FloatingContact";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#041f3a] text-white/70">
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand-sky/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-brand-green/15 blur-3xl" />
      <div className="container-shell relative grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_.8fr_.9fr_1.2fr]">
        <div>
          <Link href="/" className="inline-block" aria-label="Bhidwaria Pharmaceuticals home">
            <Image src="/images/bhidwaria-logo.webp" alt={company.name} width={160} height={123} className="h-20 w-auto object-contain drop-shadow-[0_4px_18px_rgba(255,255,255,.12)]" />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-6">
            Committed to improving lives through high-quality, affordable and innovative pharmaceutical solutions — together for a healthier tomorrow.
          </p>
          <div className="mt-6 flex gap-2.5">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:-translate-y-1 hover:bg-[#25D366] hover:text-white">
              <WhatsAppIcon size={18} />
            </a>
            <a href={`mailto:${company.email}`} aria-label="Email" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:-translate-y-1 hover:bg-brand-sky hover:text-white">
              <Mail size={17} />
            </a>
            <a href={`tel:${company.phones[0].tel}`} aria-label="Call" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:-translate-y-1 hover:bg-brand-green hover:text-white">
              <Phone size={17} />
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[.14em] text-white">Quick Links</h3>
          <div className="mt-5 grid gap-2.5 text-sm">
            {[
              ...mainNav,
              { label: "Monopoly PCD Franchise", href: FRANCHISE_PATH },
              { label: "Therapeutic Segments", href: "/therapeutic-segments" },
              { label: "Quality", href: "/quality" },
              { label: "Careers", href: "/careers" },
            ].map((x) => (
              <Link key={x.href} href={x.href} className="group inline-flex items-center gap-1.5 transition hover:text-lime-300">
                <ArrowRight size={12} className="-ml-4 opacity-0 transition-all group-hover:ml-0 group-hover:opacity-100" />
                {x.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[.14em] text-white">Product Divisions</h3>
          <div className="mt-5 grid gap-2.5 text-sm">
            {divisions.map((d) => (
              <Link key={d.slug} href={`/products/division/${d.slug}`} className="group inline-flex items-center gap-1.5 transition hover:text-lime-300">
                <ArrowRight size={12} className="-ml-4 opacity-0 transition-all group-hover:ml-0 group-hover:opacity-100" />
                {d.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[.14em] text-white">Contact Us</h3>
          <div className="mt-5 grid gap-4 text-sm leading-6">
            <a href={company.mapLink} target="_blank" rel="noopener noreferrer" className="flex gap-3 transition hover:text-white">
              <MapPin size={18} className="mt-0.5 shrink-0 text-lime-300" />
              <span>
                <span className="block font-semibold text-white">{company.name}</span>
                {company.address}
              </span>
            </a>
            <div className="flex gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-lime-300" />
              <span className="grid">
                {company.phones.map((p) => (
                  <a key={p.tel} href={`tel:${p.tel}`} className="transition hover:text-white">{p.display}</a>
                ))}
              </span>
            </div>
            <a href={`mailto:${company.email}`} className="flex gap-3 break-all transition hover:text-white">
              <Mail size={18} className="mt-0.5 shrink-0 text-lime-300" /> {company.email}
            </a>
            <span className="flex gap-3">
              <Clock size={18} className="mt-0.5 shrink-0 text-lime-300" /> {company.hours}
            </span>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="container-shell flex flex-col gap-3 py-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <span className="flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/privacy-policy" className="transition hover:text-lime-300">Privacy Policy</Link>
            <Link href="/terms" className="transition hover:text-lime-300">Terms & Conditions</Link>
            <Link href="/sitemap.xml" className="transition hover:text-lime-300">Sitemap</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
