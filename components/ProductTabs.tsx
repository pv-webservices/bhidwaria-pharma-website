"use client";
import { useState, type ReactNode } from "react";
import { AlertTriangle, CheckCircle2, FlaskConical, Info, Pill, Thermometer } from "lucide-react";
import type { Product } from "@/lib/products";

const TABS = [
  { id: "overview", label: "Description", icon: Info },
  { id: "specs", label: "Specifications", icon: FlaskConical },
  { id: "usage", label: "Uses & Dosage", icon: Pill },
  { id: "safety", label: "Safety", icon: AlertTriangle },
] as const;

type TabId = (typeof TABS)[number]["id"];

function Bullets({ items, tone = "green" }: { items: string[]; tone?: "green" | "amber" }) {
  return (
    <ul className="grid gap-2.5">
      {items.map((x) => (
        <li key={x} className="flex gap-3 text-[15px] leading-6 text-slate-700">
          {tone === "green" ? (
            <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-green" />
          ) : (
            <AlertTriangle size={17} className="mt-0.5 shrink-0 text-amber-500" />
          )}
          {x}
        </li>
      ))}
    </ul>
  );
}

function Heading({ children }: { children: ReactNode }) {
  return <h3 className="mb-3 font-display text-lg font-extrabold text-brand-navy">{children}</h3>;
}

export function ProductTabs({ product }: { product: Product }) {
  const [tab, setTab] = useState<TabId>("overview");
  const specs: [string, string][] = [
    ["Brand Name", product.brand],
    ["Generic Name", product.composition],
    ["Dosage Form", product.dosageForm],
    ["Pack Size", product.packSize],
    ["Therapeutic Segment", product.therapy],
    ["Drug Class", product.drugClass],
    ["Schedule", product.standard],
    ["Marketed By", "Bhidwaria Pharmaceuticals Pvt. Ltd."],
  ];

  return (
    <div className="card overflow-hidden">
      <div role="tablist" aria-label="Product information" className="no-scrollbar flex overflow-x-auto border-b border-slate-100 bg-brand-mist/60 p-2">
        {TABS.map(({ id, label, icon: Icon }) => {
          const on = tab === id;
          return (
            <button
              key={id}
              role="tab"
              aria-selected={on}
              aria-controls={`panel-${id}`}
              id={`tab-${id}`}
              onClick={() => setTab(id)}
              className={`inline-flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition duration-300 ${
                on ? "bg-white text-brand-blue shadow-card" : "text-slate-500 hover:text-brand-navy"
              }`}
            >
              <Icon size={15} /> {label}
            </button>
          );
        })}
      </div>
      <div role="tabpanel" id={`panel-${tab}`} aria-labelledby={`tab-${tab}`} className="p-6 md:p-8">
        {tab === "overview" && (
          <div className="grid gap-8">
            <div>
              <Heading>{`About ${product.brand}`}</Heading>
              <p className="text-[15px] leading-7 text-slate-700">{product.overview}</p>
            </div>
            <div>
              <Heading>How It Works</Heading>
              <p className="text-[15px] leading-7 text-slate-700">{product.mechanism}</p>
            </div>
            <div>
              <Heading>Key Benefits</Heading>
              <Bullets items={product.benefits} />
            </div>
          </div>
        )}
        {tab === "specs" && (
          <div className="grid gap-8">
            <div>
              <Heading>Composition (each {product.unit} contains)</Heading>
              <ul className="grid gap-2">
                {product.strength.map((s) => (
                  <li key={s} className="rounded-xl border border-slate-100 bg-brand-mist/50 px-4 py-3 text-[15px] font-semibold text-brand-navy">{s}</li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-100">
              <table className="w-full text-left text-sm">
                <tbody>
                  {specs.map(([k, v], i) => (
                    <tr key={k} className={i % 2 ? "bg-white" : "bg-slate-50/70"}>
                      <th scope="row" className="w-2/5 px-4 py-3 font-bold text-slate-500">{k}</th>
                      <td className="px-4 py-3 font-semibold text-brand-navy">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {tab === "usage" && (
          <div className="grid gap-8">
            <div>
              <Heading>Indications</Heading>
              <Bullets items={product.indications} />
            </div>
            <div>
              <Heading>Dosage & Administration</Heading>
              <p className="rounded-2xl bg-brand-pale p-5 text-[15px] leading-7 text-slate-700">{product.dosage}</p>
            </div>
          </div>
        )}
        {tab === "safety" && (
          <div className="grid gap-8">
            <div>
              <Heading>Precautions & Contraindications</Heading>
              <Bullets items={product.precautions} tone="amber" />
            </div>
            <div>
              <Heading>Possible Side Effects</Heading>
              <div className="flex flex-wrap gap-2">
                {product.sideEffects.map((s) => (
                  <span key={s} className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-medium text-slate-600">{s}</span>
                ))}
              </div>
            </div>
            <div className="flex gap-3 rounded-2xl border border-sky-100 bg-sky-50 p-5 text-sm leading-6 text-slate-700">
              <Thermometer size={20} className="mt-0.5 shrink-0 text-brand-blue" />
              <div><strong className="text-brand-navy">Storage: </strong>{product.storage}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
