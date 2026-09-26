import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { company } from "@/lib/site";
import { NavLinks } from "./NavLinks";
import { MobileNav } from "./MobileNav";
import { HeaderShell } from "./HeaderShell";

export function Header() {
  return (
    <HeaderShell>
      <div className="bg-navy-gradient text-white">
        <div className="container-wide flex min-h-9 flex-col items-center justify-center gap-y-1 py-1.5 text-[11px] font-medium sm:text-[11.5px] md:flex-row md:justify-between md:gap-4">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-white/85 md:justify-start md:gap-x-5">
            {company.phones.map((p) => (
              <a key={p.tel} href={`tel:${p.tel}`} className="inline-flex items-center gap-1.5 whitespace-nowrap transition hover:text-lime-300">
                <Phone size={12} /> {p.display}
              </a>
            ))}
            <a href={`mailto:${company.email}`} className="inline-flex items-center gap-1.5 whitespace-nowrap transition hover:text-lime-300">
              <Mail size={12} /> {company.email}
            </a>
          </div>
          <div className="hidden items-center gap-4 md:flex">
            <Link href="/business-opportunity#enquiry" className="transition hover:text-lime-300">Business Enquiry</Link>
            <span className="h-3 w-px bg-white/30" />
            <Link href="/business-opportunity" className="transition hover:text-lime-300">Partner With Us</Link>
            <span className="h-3 w-px bg-white/30" />
            <Link href="/careers" className="transition hover:text-lime-300">Careers</Link>
          </div>
        </div>
      </div>
      <div className="relative border-b border-slate-100/80 bg-white/90 backdrop-blur-xl">
        <div className="container-wide flex h-[72px] items-center justify-between gap-5 lg:h-[80px]">
          <Link href="/" className="shrink-0" aria-label="Bhidwaria Pharmaceuticals home">
            <Image src="/images/bhidwaria-logo.webp" alt={company.name} width={160} height={123} className="h-[54px] w-auto object-contain lg:h-[64px]" priority />
          </Link>
          <NavLinks />
          <div className="flex items-center gap-3">
            <Link href="/contact#enquiry" className="btn btn-primary btn-sm hidden sm:inline-flex">Enquire Now</Link>
            <MobileNav />
          </div>
        </div>
      </div>
    </HeaderShell>
  );
}
