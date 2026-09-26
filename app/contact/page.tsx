import Link from "next/link";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { EnquiryForm } from "@/components/EnquiryForm";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/FloatingContact";
import { company, whatsappLink } from "@/lib/site";

export const metadata = {
  title: "Contact Us",
  description: `Contact ${company.name}, ${company.address}. Call ${company.phones.map((p) => p.display).join(" / ")}.`,
};

export default function ContactPage() {
  const cards = [
    { icon: Phone, title: "Call Us", lines: company.phones.map((p) => ({ text: p.display, href: `tel:${p.tel}` })) },
    { icon: Mail, title: "Email Us", lines: [{ text: company.email, href: `mailto:${company.email}` }] },
    { icon: MapPin, title: "Visit Us", lines: [{ text: company.address, href: company.mapLink }] },
    { icon: Clock, title: "Business Hours", lines: [{ text: company.hours }] },
  ];
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title={<>Let’s Talk <span className="text-lime-300">Healthcare</span></>}
        description="Reach our team for product information, franchise and distribution enquiries, or any general business support."
        image="/images/site/research-team.webp"
        crumbs={[{ label: "Contact" }]}
      />

      <section className="relative z-10 -mt-4 bg-white pb-4">
        <div className="container-shell grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, lines }, i) => (
            <Reveal className="h-full" key={title} delay={i * 80}>
              <div className="card card-hover h-full p-6">
                <span className="card-icon grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-green text-white shadow-glow"><Icon size={21} /></span>
                <h2 className="mt-4 font-display text-base font-bold text-brand-navy">{title}</h2>
                <div className="mt-2 grid gap-1 text-sm leading-6 text-slate-600">
                  {lines.map((l) =>
                    "href" in l && l.href ? (
                      <a key={l.text} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="break-words font-semibold transition hover:text-brand-blue">{l.text}</a>
                    ) : (
                      <span key={l.text}>{l.text}</span>
                    ),
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="enquiry" className="section-pad scroll-mt-28 bg-white">
        <div className="container-shell grid items-start gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Reach us" title="We’d Love to Hear From You" description="Fill in the form and our team will respond promptly. For urgent queries, call or WhatsApp us directly." />
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-green"><WhatsAppIcon size={17} /> Chat on WhatsApp</a>
              <a href={`tel:${company.phones[0].tel}`} className="btn btn-outline"><Phone size={16} /> Call Now</a>
            </div>
            <div className="mt-8 overflow-hidden rounded-[24px] border border-slate-100 shadow-card">
              <iframe
                title={`${company.name} location map`}
                src={company.mapEmbed}
                className="h-80 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <EnquiryForm />
        </div>
      </section>

      <section className="bg-brand-mist/70 py-14">
        <div className="container-shell grid gap-5 md:grid-cols-3">
          {[
            { title: "Product Enquiries", text: "Request our product list, composition details, availability and literature.", href: "/products" , cta: "Browse Products" },
            { title: "Business Opportunities", text: "Discuss PCD franchise, distribution or stockist partnerships for your region.", href: "/business-opportunity", cta: "Partner With Us" },
            { title: "Careers", text: "Interested in joining our growing team? Send us your profile.", href: "/careers", cta: "View Careers" },
          ].map((c, i) => (
            <Reveal className="h-full" key={c.title} delay={i * 80}>
              <Link href={c.href} className="card card-hover flex h-full flex-col p-6">
                <MessageCircle size={22} className="card-icon text-brand-green" />
                <h3 className="mt-3 font-display text-lg font-bold text-brand-navy">{c.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{c.text}</p>
                <span className="link-arrow mt-auto pt-4">{c.cta} →</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
