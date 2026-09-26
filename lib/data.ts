import {
  Activity,
  Baby,
  BadgeCheck,
  Bone,
  ClipboardCheck,
  FileText,
  Flower2,
  Handshake,
  HeartPulse,
  Leaf,
  LineChart,
  MessagesSquare,
  PackageCheck,
  PhoneCall,
  Scale,
  ShieldCheck,
  ShieldPlus,
  Truck,
  Wind,
  type LucideIcon,
} from "lucide-react";

export type Segment = {
  id: string;
  title: string;
  icon: LucideIcon;
  tone: string;
  description: string;
  division?: string;
};

export const therapySegments: Segment[] = [
  { id: "anti-infective", title: "Anti-Infective", icon: ShieldPlus, tone: "bg-emerald-50 text-emerald-600", division: "anti-infectives", description: "Cephalosporin and penicillin–clavulanate antibiotics for respiratory, urinary, ENT, skin and dental infections." },
  { id: "gastrointestinal", title: "Gastrointestinal", icon: Activity, tone: "bg-rose-50 text-rose-500", division: "gastro-care", description: "PPI + prokinetic capsules and anti-emetic therapy for acidity, GERD, dyspepsia, nausea and vomiting." },
  { id: "pain-management", title: "Pain Management", icon: Bone, tone: "bg-sky-50 text-sky-600", division: "pain-management", description: "Triple-action analgesic and anti-inflammatory relief for musculoskeletal, dental and arthritic pain." },
  { id: "anti-emetic", title: "Anti-Emetic", icon: Flower2, tone: "bg-fuchsia-50 text-fuchsia-600", division: "anti-emetics", description: "Mouth-dissolving ondansetron that works in seconds without water for fast nausea relief." },
  { id: "cardio-diabetic", title: "Cardio-Diabetic", icon: HeartPulse, tone: "bg-red-50 text-red-500", description: "Planned expansion into chronic cardiovascular and metabolic therapy to support long-term care." },
  { id: "respiratory", title: "Respiratory", icon: Wind, tone: "bg-blue-50 text-blue-500", description: "Upcoming range for cough, cold, allergy and respiratory tract care." },
  { id: "paediatric", title: "Paediatric", icon: Baby, tone: "bg-amber-50 text-amber-600", description: "Age-appropriate formulations for children, planned as part of the next portfolio phase." },
  { id: "nutraceuticals", title: "Nutraceuticals", icon: Leaf, tone: "bg-lime-50 text-lime-600", division: "nutraceuticals", description: "Ready-to-drink Vitamin D3 60,000 IU nano shots for bone, muscle and immune health, with more wellness products in the pipeline." },
];

export const partnerBenefits: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "Quality-Driven Portfolio", text: "IP-standard formulations sourced from quality-audited manufacturing partners.", icon: ShieldCheck },
  { title: "Dependable Supply Chain", text: "Planned inventory and timely dispatch so your shelves never run dry.", icon: Truck },
  { title: "Responsive Support", text: "A dedicated team that answers calls, WhatsApp and emails promptly.", icon: MessagesSquare },
  { title: "Market-Focused Products", text: "High-demand molecules in fast-moving therapy segments.", icon: LineChart },
  { title: "Ethical Business Approach", text: "Transparent pricing, clear terms and honest communication.", icon: Scale },
  { title: "Long-Term Partnerships", text: "We grow with our distributors — relationships over transactions.", icon: Handshake },
];

export const processSteps: { n: string; title: string; text: string; icon: LucideIcon }[] = [
  { n: "01", title: "Connect", text: "Call, WhatsApp or send an enquiry to our team", icon: PhoneCall },
  { n: "02", title: "Discuss Requirements", text: "Share your territory and business needs", icon: MessagesSquare },
  { n: "03", title: "Product Selection", text: "Choose the right mix from our portfolio", icon: PackageCheck },
  { n: "04", title: "Documentation", text: "Complete licence and onboarding formalities", icon: FileText },
  { n: "05", title: "Supply & Support", text: "Timely delivery and ongoing marketing support", icon: Truck },
];

export const qualityPoints = [
  "Formulations manufactured to Indian Pharmacopoeia (IP) standards",
  "Responsible sourcing of APIs and raw materials",
  "Batch-to-batch consistency with full traceability",
  "Robust documentation, storage and dispatch practices",
];

export const promises: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "Genuine, Quality Medicines", text: "Every batch is sourced from licensed manufacturers and checked before dispatch.", icon: BadgeCheck },
  { title: "Transparent Commitments", text: "Clear pricing, clear timelines and no hidden terms — every time.", icon: ClipboardCheck },
  { title: "Support You Can Reach", text: "Real people on the phone and WhatsApp, six days a week.", icon: PhoneCall },
];

export type Article = {
  slug: string;
  title: string;
  category: "Quality" | "Healthcare Access" | "Business";
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  body: { heading?: string; text: string }[];
};

export const articles: Article[] = [
  {
    slug: "quality-in-pharmaceuticals",
    title: "The Growing Role of Quality in Pharmaceuticals",
    category: "Quality",
    excerpt: "Why disciplined quality systems, documentation and responsible sourcing sit at the heart of every dependable medicine.",
    image: "/images/site/blog-inspection.webp",
    date: "September 12, 2026",
    readTime: "4 min read",
    body: [
      { text: "A medicine is only as reliable as the processes behind it. Patients and doctors rarely see the checks that happen before a strip of tablets reaches a pharmacy shelf — yet those checks decide whether each dose delivers exactly what the label promises." },
      { heading: "Quality starts with the raw material", text: "Active pharmaceutical ingredients (APIs) and excipients must meet pharmacopoeial specifications for identity, purity and potency. Working only with licensed, audited suppliers and verifying certificates of analysis for every lot protects the entire chain that follows." },
      { heading: "Consistency is a promise to the patient", text: "Batch-to-batch consistency means a patient receives the same therapeutic effect from the first strip to the hundredth. Validated manufacturing processes, in-process controls and finished-product testing make that consistency measurable rather than assumed." },
      { heading: "Documentation makes quality traceable", text: "Batch records, storage logs and dispatch documentation allow any product to be traced back to its source. If a question ever arises, traceability enables a fast, precise response — which is why good documentation is not paperwork but patient safety." },
      { text: "At Bhidwaria Pharmaceuticals, quality is the foundation of every product we place in the market. It is how we earn the trust of doctors, chemists and distribution partners across the regions we serve." },
    ],
  },
  {
    slug: "access-to-affordable-healthcare",
    title: "Expanding Access to Affordable Healthcare",
    category: "Healthcare Access",
    excerpt: "How reliable distribution partnerships help quality medicines reach pharmacies in towns and cities alike.",
    image: "/images/site/blog-pharmacy.webp",
    date: "September 5, 2026",
    readTime: "3 min read",
    body: [
      { text: "India's healthcare needs are vast and diverse. A well-formulated medicine creates value only when it is available at the pharmacy counter at the moment a patient needs it — at a price they can afford." },
      { heading: "The last mile matters", text: "Stock-outs at the retail level often have little to do with manufacturing and everything to do with distribution. Planned inventory, responsive re-ordering and dependable logistics keep essential therapies such as antibiotics and gastro-care medicines consistently available." },
      { heading: "Partners who know their markets", text: "Local distributors and stockists understand prescribing patterns, seasonal demand and the needs of their chemists better than anyone. Empowering them with a focused portfolio and reliable supply is the most effective way to widen access." },
      { heading: "Affordability without compromise", text: "Affordable does not have to mean ordinary. By keeping portfolios focused on high-need molecules and operations lean, pharmaceutical companies can offer fair pricing without cutting corners on quality." },
      { text: "Bhidwaria Pharmaceuticals is building exactly this kind of network — starting from Meerut, Uttar Pradesh — so that quality medicines reach more people, more reliably." },
    ],
  },
  {
    slug: "building-stronger-healthcare-partnerships",
    title: "Building Stronger Healthcare Partnerships",
    category: "Business",
    excerpt: "What makes a pharma franchise or distribution partnership last — and how to choose the right company to grow with.",
    image: "/images/site/partnership.webp",
    date: "August 28, 2026",
    readTime: "4 min read",
    body: [
      { text: "The PCD pharma franchise and distribution model has helped thousands of entrepreneurs build successful healthcare businesses. But the difference between a partnership that thrives and one that stalls usually comes down to the company behind it." },
      { heading: "Look for a focused, in-demand portfolio", text: "A smaller range of high-demand molecules in fast-moving segments — anti-infectives, gastro care and pain management — often performs better than a sprawling catalogue that is hard to promote." },
      { heading: "Insist on consistent supply", text: "Nothing damages a partner's reputation faster than products that go out of stock. Ask about inventory planning, dispatch timelines and how orders are communicated." },
      { heading: "Value transparent communication", text: "Clear pricing, honest timelines and a team that picks up the phone build the trust that long-term partnerships need. Ethical business practices protect everyone — the partner, the doctor and ultimately the patient." },
      { text: "If you are looking to start or expand a pharmaceutical distribution business, we would be glad to talk. Reach our team through the enquiry form, phone or WhatsApp." },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
