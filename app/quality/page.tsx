import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ClipboardCheck, FileSearch, Microscope, PackageCheck, ShieldCheck, Thermometer, Truck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { qualityPoints } from "@/lib/data";

export const metadata = {
  title: "Quality & Compliance",
  description: "How Bhidwaria Pharmaceuticals ensures consistent, safe and reliable medicines — from API sourcing to dispatch.",
};

const pillars = [
  { icon: ShieldCheck, title: "Quality Assurance", text: "Defined responsibilities and documented checks across sourcing, storage and dispatch." },
  { icon: PackageCheck, title: "Responsible Sourcing", text: "APIs and finished goods sourced only from licensed, quality-audited manufacturers." },
  { icon: ClipboardCheck, title: "Documentation", text: "Batch records and certificates of analysis maintained for full traceability." },
  { icon: Microscope, title: "Pharmacopoeial Standards", text: "Formulations aligned with Indian Pharmacopoeia (IP) specifications." },
];

const steps = [
  { icon: FileSearch, title: "Supplier Qualification", text: "Licensed manufacturers are evaluated before partnership." },
  { icon: Microscope, title: "Batch Testing", text: "Each batch is released with a certificate of analysis." },
  { icon: ClipboardCheck, title: "Documentation Review", text: "Batch numbers, expiry and records are verified." },
  { icon: Thermometer, title: "Controlled Storage", text: "Products stored in cool, dry, protected conditions." },
  { icon: Truck, title: "Safe Dispatch", text: "Careful packing and timely delivery to partners." },
];

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality & compliance"
        title={<>Quality in Every Step, <span className="text-lime-300">Trust in Every Dose</span></>}
        description="We follow stringent quality processes across our operations to ensure safe, effective and reliable products for a healthier world."
        image="/images/site/quality-lab.webp"
        crumbs={[{ label: "Quality" }]}
      />

      <section className="section-pad bg-white">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="group relative h-[400px] overflow-hidden rounded-[28px] shadow-lift">
              <Image src="/images/site/blog-inspection.webp" alt="Quality inspector examining tablets" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute bottom-5 left-5 rounded-2xl bg-white/90 px-5 py-4 shadow-lift backdrop-blur">
                <div className="font-display text-2xl font-extrabold text-brand-navy">IP</div>
                <div className="text-xs font-semibold text-slate-500">Standard formulations</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading eyebrow="Our quality promise" title="A Disciplined Approach to Pharmaceutical Quality" description="Quality is not a department at Bhidwaria — it is how we work. Our approach combines responsible sourcing, careful documentation and controlled handling so that every product reaches patients exactly as intended." />
            <div className="mt-7 grid gap-3.5">
              {qualityPoints.map((x) => (
                <div key={x} className="flex items-center gap-3 text-[15px] font-semibold text-slate-700">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-green to-emerald-600 text-white"><Check size={14} strokeWidth={3} /></span>
                  {x}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-brand-mist/60">
        <div className="container-shell">
          <SectionHeading eyebrow="Quality pillars" title="Built for Consistency and Accountability" center />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ icon: Icon, title, text }, i) => (
              <Reveal className="h-full" key={title} delay={i * 80}>
                <div className="card card-hover h-full p-7">
                  <span className="card-icon grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-green text-white shadow-glow"><Icon size={24} /></span>
                  <h3 className="mt-5 font-display text-lg font-bold text-brand-navy">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-shell">
          <SectionHeading eyebrow="Process" title="Our Quality Process Framework" />
          <div className="relative mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            <div className="absolute left-[10%] right-[10%] top-9 hidden h-0.5 bg-gradient-to-r from-brand-green via-brand-sky to-brand-blue opacity-30 lg:block" />
            {steps.map(({ icon: Icon, title, text }, i) => (
              <Reveal className="h-full" key={title} delay={i * 90}>
                <div className="card card-hover relative h-full p-5 text-center">
                  <span className="card-icon relative mx-auto grid h-[72px] w-[72px] place-items-center rounded-full border-4 border-white bg-gradient-to-br from-brand-pale to-brand-mist text-brand-green shadow-card">
                    <Icon size={26} />
                    <span className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full bg-brand-navy text-[10px] font-extrabold text-white">0{i + 1}</span>
                  </span>
                  <h3 className="mt-4 font-display text-[15px] font-bold text-brand-navy">{title}</h3>
                  <p className="mt-1.5 text-xs leading-5 text-slate-500">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-start gap-4 rounded-[26px] bg-navy-gradient p-8 text-white md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="font-display text-xl font-bold">Need product documentation?</h3>
              <p className="mt-1 text-sm text-white/75">Request composition details, certificates of analysis or product literature from our team.</p>
            </div>
            <Link href="/contact#enquiry" className="btn btn-green">Request Documents <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
