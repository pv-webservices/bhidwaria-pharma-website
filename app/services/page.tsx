import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Megaphone,
  PackageCheck,
  ShieldCheck,
  Store,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { FRANCHISE_PATH } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Services — PCD Franchise, Distribution & Marketing Support",
  description:
    "Explore Bhidwaria Pharmaceuticals services: monopoly PCD pharma franchise, distribution and stockist partnerships, marketing support, quality-assured product supply and timely logistics from Meerut, Uttar Pradesh.",
};

type Service = { icon: LucideIcon; title: string; text: string; href: string; cta: string };

const services: Service[] = [
  { icon: ShieldCheck, title: "Monopoly PCD Pharma Franchise", text: "Exclusive rights to market our branded range in your district or state, with full partner support.", href: FRANCHISE_PATH, cta: "Explore Franchise" },
  { icon: Store, title: "Distribution & Stockist Partnerships", text: "Supply partnerships for distributors, super-stockists and wholesalers who serve chemists and hospitals.", href: "#distribution", cta: "Learn More" },
  { icon: Megaphone, title: "Marketing & Promotional Support", text: "Product literature and promotional inputs that help your team introduce our brands to doctors.", href: "#marketing-support", cta: "Learn More" },
  { icon: PackageCheck, title: "Quality-Assured Product Supply", text: "IP-standard tablets, capsules and oral solutions sourced from licensed, quality-audited manufacturers.", href: "/about#quality-assurance", cta: "Our Quality Promise" },
  { icon: Truck, title: "Timely Dispatch & Logistics", text: "Planned inventory, careful packing and prompt dispatch from Meerut so your shelves stay stocked.", href: "#distribution", cta: "Learn More" },
  { icon: ClipboardList, title: "Onboarding & Documentation", text: "Clear guidance on licences, GST and paperwork so you can start trading without delays.", href: `${FRANCHISE_PATH}#enquiry`, cta: "Get Started" },
];

const distributionPoints = [
  "Planned stock availability across our full range",
  "Prompt order confirmation on call, WhatsApp or email",
  "Secure packing with batch and expiry details on every invoice",
  "Transparent trade terms with no hidden charges",
];

const marketingPoints = [
  "Product literature with composition, indications and dosage",
  "Brand information for doctors, chemists and field teams",
  "Guidance on the right product mix for your territory",
  "A reachable team for product and scientific queries",
];

function DetailSection({
  id,
  eyebrow,
  title,
  text,
  points,
  image,
  alt,
  flip = false,
  tone,
}: {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  points: string[];
  image: string;
  alt: string;
  flip?: boolean;
  tone: string;
}) {
  return (
    <section id={id} className={`section-pad ${tone}`}>
      <div className="container-shell grid items-center gap-12 lg:grid-cols-2">
        <Reveal className={flip ? "lg:order-2" : ""}>
          <div className="group relative h-[380px] overflow-hidden rounded-[28px] shadow-lift">
            <Image src={image} alt={alt} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <SectionHeading eyebrow={eyebrow} title={title} description={text} />
          <ul className="mt-6 grid gap-3">
            {points.map((x) => (
              <li key={x} className="flex items-start gap-2.5 text-[15px] font-semibold text-slate-700"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-green" />{x}</li>
            ))}
          </ul>
          <Link href="/contact#enquiry" className="btn btn-primary mt-8">Talk to Our Team <ArrowRight size={16} /></Link>
        </Reveal>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={<>Services Built Around <span className="text-lime-300">Our Partners&apos; Growth</span></>}
        description="From monopoly PCD franchise opportunities to distribution, marketing support and dependable supply — everything you need to build a successful pharma business with Bhidwaria Pharmaceuticals."
        image="/images/site/logistics.webp"
        crumbs={[{ label: "Services" }]}
      >
        <Link href={FRANCHISE_PATH} className="btn btn-green">Monopoly Franchise <ArrowRight size={16} /></Link>
        <Link href="/contact#enquiry" className="btn btn-ghost-light">Enquire Now</Link>
      </PageHero>

      <section className="section-pad bg-white">
        <div className="container-shell">
          <SectionHeading eyebrow="What we offer" title="One Partner, Complete Support" description="Whether you are starting out or expanding an established distribution business, our services are designed to make growth simple." center />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, text, href, cta }, i) => (
              <Reveal className="h-full" key={title} delay={(i % 3) * 80}>
                <Link href={href} className={`card card-hover group flex h-full flex-col p-7 ${i === 0 ? "ring-2 ring-brand-green/40" : ""}`}>
                  {i === 0 && <span className="mb-4 self-start rounded-full bg-brand-green px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">Most Popular</span>}
                  <span className="card-icon grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-green text-white shadow-glow"><Icon size={23} /></span>
                  <h2 className="mt-5 font-display text-lg font-bold text-brand-navy">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                  <span className="link-arrow mt-auto pt-5">{cta} <ArrowRight size={14} /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured: monopoly franchise */}
      <section className="relative isolate overflow-hidden bg-[#062f55]">
        <Image src="/images/hero/hero-franchise.webp" alt="" fill sizes="100vw" className="-z-20 object-cover object-right" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#041f3a] via-[#062f55]/90 to-transparent" />
        <div className="container-shell py-16 md:py-20">
          <Reveal className="max-w-xl">
            <div className="eyebrow !text-lime-300">Franchise / Business</div>
            <h2 className="font-display text-3xl font-extrabold tracking-[-.03em] text-white md:text-[42px] md:leading-[1.1]">Monopoly PCD Pharma Franchise Opportunity</h2>
            <p className="mt-4 text-[15px] leading-7 text-white/75">Get exclusive marketing rights for your territory, a fast-moving portfolio and a partner that picks up the phone. Territories across Uttar Pradesh and India are open now.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={`${FRANCHISE_PATH}#enquiry`} className="btn btn-green">Apply Now <ArrowRight size={16} /></Link>
              <Link href={FRANCHISE_PATH} className="btn btn-ghost-light">See Franchise Details</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <DetailSection
        id="distribution"
        eyebrow="Distribution & stockist"
        title="Reliable Supply for Your Region"
        text="We work with distributors, super-stockists and wholesalers who keep chemists and hospitals supplied. Our focus is simple: the right products, in stock, delivered on time."
        points={distributionPoints}
        image="/images/site/logistics.webp"
        alt="Pharmaceutical distribution truck on a highway"
        tone="bg-white"
      />
      <DetailSection
        id="marketing-support"
        eyebrow="Marketing support"
        title="Promotional Support That Opens Doors"
        text="A great product still needs a great introduction. We equip our partners with accurate product information and promotional inputs so every doctor visit counts."
        points={marketingPoints}
        image="/images/site/research-team.webp"
        alt="Bhidwaria team preparing product information for partners"
        flip
        tone="bg-brand-mist/60"
      />

      <CTA />
    </>
  );
}
