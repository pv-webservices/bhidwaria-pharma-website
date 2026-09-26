import Image from "next/image";
import { BriefcaseBusiness, GraduationCap, HeartHandshake, Mail, TrendingUp, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { EnquiryForm } from "@/components/EnquiryForm";
import { company } from "@/lib/site";

export const metadata = { title: "Careers", description: "Build your career with Bhidwaria Pharmaceuticals, Meerut." };

const perks = [
  { icon: Users, title: "Collaborative Team", text: "Work closely with people across sales, operations and quality." },
  { icon: TrendingUp, title: "Growth Opportunities", text: "Grow with a young, expanding pharmaceutical company." },
  { icon: GraduationCap, title: "Continuous Learning", text: "Product training and hands-on field experience." },
  { icon: HeartHandshake, title: "Ethical Culture", text: "Transparent communication and professional conduct." },
];

const roles = ["Medical Representative", "Area Sales Manager", "Business Development Executive", "Office & Accounts Executive"];

export default function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={<>Build Your Career <span className="text-lime-300">With Us</span></>}
        description="Join a growing pharmaceutical team where your work directly supports better healthcare."
        image="/images/site/research-team.webp"
        crumbs={[{ label: "Careers" }]}
      />

      <section className="section-pad bg-white">
        <div className="container-shell">
          <SectionHeading eyebrow="Why work with us" title="A Place to Learn, Contribute and Grow" center />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map(({ icon: Icon, title, text }, i) => (
              <Reveal className="h-full" key={title} delay={i * 80}>
                <div className="card card-hover h-full p-7">
                  <span className="card-icon grid h-12 w-12 place-items-center rounded-2xl bg-brand-pale text-brand-green"><Icon size={22} /></span>
                  <h3 className="mt-5 font-display text-lg font-bold text-brand-navy">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-mist/70">
        <div className="container-shell grid items-start gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Open applications" title="Roles We Hire For" description="We regularly look for motivated people in the following areas. Send us your profile and we will reach out when a suitable opening is available." />
            <div className="mt-7 grid gap-3">
              {roles.map((r) => (
                <div key={r} className="card card-hover flex items-center gap-3 p-4">
                  <span className="card-icon grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-green text-white"><BriefcaseBusiness size={18} /></span>
                  <span className="font-display text-[15px] font-bold text-brand-navy">{r}</span>
                  <span className="ml-auto rounded-full bg-brand-pale px-2.5 py-1 text-[10px] font-extrabold uppercase text-brand-green">Meerut / Field</span>
                </div>
              ))}
            </div>
            <a href={`mailto:${company.email}?subject=${encodeURIComponent("Career Application — Bhidwaria Pharmaceuticals")}`} className="btn btn-primary mt-7">
              <Mail size={16} /> Email Your CV
            </a>
            <div className="relative mt-8 hidden h-56 overflow-hidden rounded-[24px] lg:block">
              <Image src="/images/site/quality-lab.webp" alt="Team member at work in the lab" fill sizes="40vw" className="object-cover" />
            </div>
          </div>
          <EnquiryForm title="Career Enquiry" subtitle="Tell us about yourself and the role you are interested in." defaultType="Career Enquiry" />
        </div>
      </section>
    </>
  );
}
