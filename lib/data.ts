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
