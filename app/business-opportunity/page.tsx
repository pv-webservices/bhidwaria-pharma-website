import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { EnquiryForm } from "@/components/EnquiryForm";
import { WhatsAppIcon } from "@/components/FloatingContact";
import { partnerBenefits, processSteps } from "@/lib/data";
import { products } from "@/lib/products";
import { company, whatsappLink } from "@/lib/site";

export const metadata = {
  title: "PCD Franchise & Business Opportunity",
  description: "Partner with Bhidwaria Pharmaceuticals for PCD pharma franchise and distribution opportunities in Uttar Pradesh and across India.",
};

const faqs = [
  { q: "Do you offer PCD pharma franchise opportunities?", a: "Yes. We welcome PCD franchise partners, distributors and stockists. Availability depends on territory and portfolio fit — contact us to discuss your region." },
  { q: "What documents are required to become a partner?", a: "Typically a valid Drug Licence (wholesale), GST registration and basic business details. Our team will share the complete checklist during onboarding." },
  { q: "Which products are available for franchise?", a: `Our current range includes ${products.map((p) => p.brand).join(", ")} across anti-infective, gastro care, pain management and anti-emetic therapy.` },
  { q: "Do you provide promotional support?", a: "Yes. Partners receive product literature and marketing support to help promote the range effectively in their territory." },
  { q: "How can I get the product list and pricing?", a: "Submit the enquiry form, call us or message us on WhatsApp — our team will share the latest product list and pricing." },
];

export default function BusinessPage() {
  return (
    <>
      <PageHero
        eyebrow="Franchise & distribution"
        title={<>Grow Your Business With a <span className="text-lime-300">Trusted Pharma Partner</span></>}
        description="For distributors, PCD franchise partners, stockists and healthcare entrepreneurs looking for a quality-focused, in-demand pharmaceutical portfolio."
        image="/images/site/partnership.webp"
        crumbs={[{ label: "Franchise / Business" }]}
      >
        <a href="#enquiry" className="btn btn-green">Apply for Partnership <ArrowRight size={16} /></a>
        <a href={whatsappLink("Hello, I am interested in a PCD franchise / distribution partnership with Bhidwaria Pharmaceuticals.")} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light"><WhatsAppIcon size={17} /> WhatsApp Us</a>
      </PageHero>

      <section className="section-pad bg-white">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="group relative h-[400px] overflow-hidden rounded-[28px] shadow-lift">
              <Image src="/images/site/blog-pharmacy.webp" alt="Pharmacist serving a customer" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading eyebrow="Why partner with us" title="A Partnership Built for Long-Term Growth" description="We believe in growing together. Our partners get a focused portfolio of high-demand molecules, dependable supply and a team that is always reachable." />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["High-demand, fast-moving molecules", "Transparent pricing & terms", "Timely dispatch & supply", "Product literature support", "Dedicated partner support", "Ethical, long-term approach"].map((x) => (
                <div key={x} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700"><CheckCircle2 size={18} className="shrink-0 text-brand-green" />{x}</div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#enquiry" className="btn btn-primary">Enquire Now <ArrowRight size={16} /></a>
              <a href={`tel:${company.phones[0].tel}`} className="btn btn-outline"><Phone size={16} /> {company.phones[0].display}</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-brand-mist/60">
        <div className="container-shell">
          <SectionHeading eyebrow="Partner benefits" title="Support Across the Relationship" center />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {partnerBenefits.map(({ icon: Icon, title, text }, i) => (
              <Reveal className="h-full" key={title} delay={(i % 3) * 80}>
                <div className="card card-hover h-full p-7">
                  <span className="card-icon grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-green text-white shadow-glow"><Icon size={23} /></span>
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
          <SectionHeading eyebrow="How it works" title="From First Call to Ongoing Support" />
          <div className="relative mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            <div className="absolute left-[10%] right-[10%] top-9 hidden h-0.5 bg-gradient-to-r from-brand-green via-brand-sky to-brand-blue opacity-30 lg:block" />
            {processSteps.map(({ n, title, text, icon: Icon }, i) => (
              <Reveal className="h-full" key={n} delay={i * 90}>
                <div className="card card-hover relative h-full p-5 text-center">
                  <span className="card-icon relative mx-auto grid h-[72px] w-[72px] place-items-center rounded-full border-4 border-white bg-gradient-to-br from-brand-pale to-brand-mist text-brand-green shadow-card">
                    <Icon size={26} />
                    <span className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full bg-brand-navy text-[10px] font-extrabold text-white">{n}</span>
                  </span>
                  <h3 className="mt-4 font-display text-[15px] font-bold text-brand-navy">{title}</h3>
                  <p className="mt-1.5 text-xs leading-5 text-slate-500">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="enquiry" className="section-pad scroll-mt-28 bg-brand-mist/70">
        <div className="container-shell grid items-start gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <SectionHeading eyebrow="Frequently asked questions" title="Business Enquiry FAQ" />
            <div className="mt-7 grid gap-3">
              {faqs.map(({ q, a }, i) => (
                <details key={q} open={i === 0} className="card group p-5 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-[15px] font-bold text-brand-navy">
                    {q}
                    <ChevronDown size={18} className="shrink-0 text-brand-green transition group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{a}</p>
                </details>
              ))}
            </div>
            <Link href="/products" className="btn btn-outline mt-7">View Product Range <ArrowRight size={16} /></Link>
          </div>
          <EnquiryForm title="Apply for Franchise / Distribution" subtitle="Tell us about your business and territory." defaultType="PCD Franchise / Distribution" />
        </div>
      </section>
    </>
  );
}
