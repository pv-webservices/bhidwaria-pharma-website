"use client";
import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { products } from "@/lib/products";
import { whatsappLink } from "@/lib/site";

export const ENQUIRY_TYPES = ["Product Enquiry", "PCD Franchise / Distribution", "Business Partnership", "Career Enquiry", "General Enquiry"] as const;

type Status = "idle" | "loading" | "success" | "error";

export function EnquiryForm({
  defaultType = "General Enquiry",
  defaultProduct = "",
  title = "Send Us an Enquiry",
  subtitle = "Fill in the form and our team will get back to you shortly.",
  compact = false,
}: {
  defaultType?: (typeof ENQUIRY_TYPES)[number];
  defaultProduct?: string;
  title?: string;
  subtitle?: string;
  compact?: boolean;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");
    setError("");
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as { message?: string };
      if (!res.ok) throw new Error(data.message || "Unable to submit. Please try again.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to submit. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card grid place-items-center gap-4 p-10 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-brand-pale text-brand-green"><CheckCircle2 size={34} /></span>
        <h3 className="font-display text-2xl font-extrabold text-brand-navy">Thank you!</h3>
        <p className="max-w-sm text-sm leading-6 text-slate-600">Your enquiry has been received. Our team will contact you shortly. For a faster response, you can also reach us on WhatsApp.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-green btn-sm">Chat on WhatsApp</a>
          <button onClick={() => setStatus("idle")} className="btn btn-outline btn-sm">Send another</button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className={`card grid gap-4 ${compact ? "p-5" : "p-6 md:p-8"}`}>
      <div>
        <h3 className="font-display text-xl font-extrabold text-brand-navy md:text-2xl">{title}</h3>
        <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
      </div>
      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <label className="grid gap-1.5 text-[13px] font-semibold text-brand-ink">Full Name *
          <input required name="name" minLength={2} maxLength={80} autoComplete="name" className="input" placeholder="Your name" />
        </label>
        <label className="grid gap-1.5 text-[13px] font-semibold text-brand-ink">Mobile Number *
          <input required name="phone" type="tel" inputMode="tel" pattern="[+0-9 ()-]{10,16}" title="Enter a valid 10-digit mobile number" autoComplete="tel" className="input" placeholder="+91 98XXX XXXXX" />
        </label>
      </div>
      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <label className="grid gap-1.5 text-[13px] font-semibold text-brand-ink">Email Address
          <input type="email" name="email" maxLength={120} autoComplete="email" className="input" placeholder="name@company.com" />
        </label>
        <label className="grid gap-1.5 text-[13px] font-semibold text-brand-ink">City / State *
          <input required name="city" maxLength={80} className="input" placeholder="e.g. Meerut, Uttar Pradesh" />
        </label>
      </div>
      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <label className="grid gap-1.5 text-[13px] font-semibold text-brand-ink">Enquiry Type
          <select name="type" defaultValue={defaultType} className="input">
            {ENQUIRY_TYPES.map((t) => <option key={t}>{t}</option>)}
          </select>
        </label>
        <label className="grid gap-1.5 text-[13px] font-semibold text-brand-ink">Product of Interest
          <select name="product" defaultValue={defaultProduct} className="input">
            <option value="">All products / Not sure</option>
            {products.map((p) => <option key={p.slug} value={p.brand}>{p.brand}</option>)}
          </select>
        </label>
      </div>
      <label className="grid gap-1.5 text-[13px] font-semibold text-brand-ink">Message *
        <textarea required name="message" rows={compact ? 3 : 4} minLength={5} maxLength={1500} className="input resize-none" placeholder="Tell us about your requirement..." />
      </label>
      {status === "error" && <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">{error}</p>}
      <button disabled={status === "loading"} className="btn btn-primary w-full sm:w-auto sm:justify-self-start">
        {status === "loading" ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : <>Submit Enquiry <Send size={15} /></>}
      </button>
      <p className="text-[11px] leading-5 text-slate-400">Your details are kept confidential and used only to respond to your enquiry.</p>
    </form>
  );
}
