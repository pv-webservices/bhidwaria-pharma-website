import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { company } from "@/lib/site";

export function CTA() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-gradient py-16 text-white md:py-20">
      <Image src="/images/site/research-team.webp" alt="" fill sizes="100vw" className="-z-20 object-cover opacity-20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#041f3a] via-[#062f55]/95 to-[#0b5f97]/70" />
      <div className="absolute -right-20 -top-20 -z-10 h-80 w-80 rounded-full bg-brand-green/30 blur-3xl" />
      <div className="container-shell flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <div className="eyebrow !text-lime-300">Together for a healthier tomorrow</div>
          <h2 className="font-display text-3xl font-extrabold tracking-[-.03em] md:text-[42px] md:leading-[1.1]">Let’s Build Better Healthcare Partnerships</h2>
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-white/75">
            Connect with us today to explore our product range, franchise and distribution opportunities, or any other enquiry.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact#enquiry" className="btn btn-green">Enquire Now <ArrowRight size={16} /></Link>
          <a href={`tel:${company.phones[0].tel}`} className="btn btn-ghost-light"><Phone size={16} /> Call Us</a>
        </div>
      </div>
    </section>
  );
}
