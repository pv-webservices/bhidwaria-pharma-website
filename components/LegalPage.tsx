import { Breadcrumbs } from "./PageHero";

export type LegalSection = { heading: string; text: string };

export function LegalPage({ title, updated, sections }: { title: string; updated: string; sections: LegalSection[] }) {
  return (
    <section className="bg-hero-glow">
      <div className="container-shell max-w-4xl py-12 md:py-16">
        <Breadcrumbs items={[{ label: title }]} />
        <h1 className="mt-6 font-display text-4xl font-extrabold tracking-[-.03em] text-brand-navy md:text-5xl">{title}</h1>
        <p className="mt-3 text-sm font-semibold text-slate-500">Last updated: {updated}</p>
        <div className="card mt-8 grid gap-8 p-6 text-[15px] leading-7 text-slate-700 md:p-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-display text-lg font-bold text-brand-navy">{s.heading}</h2>
              <p className="mt-2">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
