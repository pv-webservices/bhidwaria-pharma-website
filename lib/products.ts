export type DivisionKind = "dosage" | "therapy";

export type Division = {
  slug: string;
  title: string;
  kind: DivisionKind;
  short: string;
  description: string;
  image: string;
  accent: string;
};

export type Product = {
  slug: string;
  brand: string;
  dosageForm: "Tablets" | "Capsules" | "Oral Solution";
  /** Unit the strength list refers to, e.g. "tablet" or "5 ml bottle". */
  unit: string;
  composition: string;
  strength: string[];
  packSize: string;
  therapy: string;
  drugClass: string;
  divisions: string[];
  image: string;
  summary: string;
  overview: string;
  indications: string[];
  mechanism: string;
  dosage: string;
  benefits: string[];
  precautions: string[];
  sideEffects: string[];
  storage: string;
  standard: string;
};

export const divisions: Division[] = [
  {
    slug: "tablets",
    title: "Tablets",
    kind: "dosage",
    short: "Film-coated and orally disintegrating tablets",
    description:
      "Precisely dosed solid oral formulations across pain management, anti-infective and anti-emetic therapy, supplied in convenient 10 x 10 strip packs.",
    image: "/images/site/cat-tablets.webp",
    accent: "from-sky-500 to-brand-blue",
  },
  {
    slug: "capsules",
    title: "Capsules",
    kind: "dosage",
    short: "Enteric-coated & sustained-release capsules",
    description:
      "Dual-release capsule technology combining enteric-coated proton pump inhibitors with sustained-release prokinetics for all-day gastric comfort.",
    image: "/images/site/cat-capsules.webp",
    accent: "from-emerald-500 to-brand-green",
  },
  {
    slug: "oral-solutions",
    title: "Oral Solutions",
    kind: "dosage",
    short: "Ready-to-drink, flavoured nano shots",
    description:
      "Pre-measured, ready-to-drink oral solutions in single-dose bottles — pleasant-tasting, sugar-free and easy to take for patients of all ages.",
    image: "/images/products/bhidcal-d3.webp",
    accent: "from-pink-500 to-rose-500",
  },
  {
    slug: "anti-infectives",
    title: "Anti-Infectives",
    kind: "therapy",
    short: "Broad-spectrum antibiotic therapy",
    description:
      "Trusted cephalosporin and penicillin–beta-lactamase inhibitor formulations for respiratory, urinary, ENT, skin and soft-tissue infections.",
    image: "/images/site/cat-anti-infective.webp",
    accent: "from-cyan-500 to-sky-600",
  },
  {
    slug: "gastro-care",
    title: "Gastro Care",
    kind: "therapy",
    short: "Acid, reflux & motility management",
    description:
      "PPI + prokinetic combinations and anti-emetic therapy designed to manage acidity, GERD, dyspepsia, nausea and vomiting effectively.",
    image: "/images/site/cat-gastro.webp",
    accent: "from-teal-500 to-emerald-500",
  },
  {
    slug: "pain-management",
    title: "Pain Management",
    kind: "therapy",
    short: "Analgesic & anti-inflammatory relief",
    description:
      "Triple-action analgesic, anti-inflammatory and anti-oedema formulation for musculoskeletal, dental, post-operative and arthritic pain.",
    image: "/images/site/cat-pain.webp",
    accent: "from-orange-500 to-amber-500",
  },
  {
    slug: "anti-emetics",
    title: "Anti-Emetics",
    kind: "therapy",
    short: "Fast relief from nausea & vomiting",
    description:
      "Mouth-dissolving 5-HT3 antagonist therapy that works without water — ideal for patients who find swallowing difficult during nausea.",
    image: "/images/site/cat-antiemetic.webp",
    accent: "from-fuchsia-500 to-purple-600",
  },
  {
    slug: "nutraceuticals",
    title: "Vitamins & Nutrition",
    kind: "therapy",
    short: "Vitamin D3 & nutritional support",
    description:
      "High-strength vitamin supplementation to correct deficiency and support bone, muscle and immune health, in convenient ready-to-drink formats.",
    image: "/images/products/bhidcal-d3.webp",
    accent: "from-amber-400 to-lime-500",
  },
];

const commonStorage =
  "Store in a cool, dry place below 30°C. Protect from light and moisture. Keep all medicines out of the reach of children.";

export const products: Product[] = [
  {
    slug: "bhidol-sp",
    brand: "Bhidol-SP",
    dosageForm: "Tablets",
    unit: "tablet",
    composition: "Aceclofenac, Paracetamol & Serratiopeptidase Tablets",
    strength: ["Aceclofenac IP 100 mg", "Paracetamol IP 325 mg", "Serratiopeptidase IP 15 mg (as enteric-coated granules)"],
    packSize: "10 x 10 Tablets",
    therapy: "Pain Management",
    drugClass: "NSAID + Analgesic-Antipyretic + Proteolytic Enzyme",
    divisions: ["tablets", "pain-management"],
    image: "/images/products/bhidol-sp.webp",
    summary: "Triple-action relief from pain, inflammation and swelling.",
    overview:
      "Bhidol-SP is a triple-action fixed-dose combination that brings together a potent NSAID, a proven analgesic-antipyretic and an anti-inflammatory proteolytic enzyme. It is prescribed for rapid relief of moderate to severe pain accompanied by inflammation and swelling — from arthritis and musculoskeletal injuries to dental and post-operative pain.",
    indications: [
      "Osteoarthritis, rheumatoid arthritis and ankylosing spondylitis",
      "Musculoskeletal pain, sprains, strains and sports injuries",
      "Post-operative and post-traumatic pain with swelling (oedema)",
      "Dental pain and post-extraction inflammation",
      "Low back pain, cervical spondylosis and soft-tissue inflammation",
    ],
    mechanism:
      "Aceclofenac preferentially inhibits the COX-2 enzyme, reducing prostaglandin synthesis responsible for pain and inflammation. Paracetamol acts centrally to raise the pain threshold and reduce fever. Serratiopeptidase, a proteolytic enzyme, breaks down inflammatory proteins and fibrin, thinning fluid build-up and accelerating the resolution of swelling.",
    dosage:
      "One tablet twice daily after meals, or as directed by the registered medical practitioner. Swallow whole with water; do not crush or chew.",
    benefits: [
      "Three complementary mechanisms in a single tablet",
      "Faster reduction of pain, stiffness and swelling",
      "Enteric-coated enzyme for better stability and absorption",
      "Twice-daily dosing supports patient compliance",
    ],
    precautions: [
      "Always take after food to minimise gastric discomfort",
      "Avoid in active peptic ulcer, GI bleeding or known NSAID hypersensitivity",
      "Use with caution in hepatic, renal or cardiovascular impairment",
      "Avoid alcohol; do not combine with other paracetamol-containing products",
      "Not recommended during pregnancy or lactation unless advised by a physician",
    ],
    sideEffects: ["Nausea, dyspepsia or abdominal pain", "Dizziness or headache", "Skin rash (rare)", "Elevated liver enzymes (rare)"],
    storage: commonStorage,
    standard: "Rx — Prescription only",
  },
  {
    slug: "bhidcef-200",
    brand: "Bhidcef-200",
    dosageForm: "Tablets",
    unit: "tablet",
    composition: "Cefixime Tablets IP",
    strength: ["Cefixime IP (as trihydrate) equivalent to anhydrous Cefixime 200 mg"],
    packSize: "10 x 10 Tablets",
    therapy: "Anti-Infectives",
    drugClass: "Third-generation oral Cephalosporin",
    divisions: ["tablets", "anti-infectives"],
    image: "/images/products/bhidcef-200.webp",
    summary: "Broad-spectrum third-generation cephalosporin antibiotic.",
    overview:
      "Bhidcef-200 contains Cefixime, a third-generation oral cephalosporin with excellent activity against a wide range of Gram-negative and Gram-positive bacteria. Its stability against many beta-lactamase enzymes and convenient dosing make it a preferred choice for community-acquired respiratory, urinary and enteric infections.",
    indications: [
      "Uncomplicated urinary tract infections (UTI)",
      "Pharyngitis, tonsillitis and acute otitis media",
      "Acute bronchitis and acute exacerbations of chronic bronchitis",
      "Typhoid (enteric) fever",
      "Uncomplicated gonorrhoea",
    ],
    mechanism:
      "Cefixime binds to penicillin-binding proteins (PBPs) in the bacterial cell wall, inhibiting the final step of peptidoglycan synthesis. This weakens the cell wall and causes bacterial cell lysis, producing a bactericidal effect.",
    dosage:
      "Adults and children above 12 years: one tablet (200 mg) twice daily, or 400 mg once daily, for 7–14 days depending on the infection — or as directed by the physician. Complete the full course even if symptoms improve.",
    benefits: [
      "Broad coverage of common community pathogens",
      "Stable against many beta-lactamase enzymes",
      "Flexible once- or twice-daily dosing",
      "Can be taken with or without food",
    ],
    precautions: [
      "Contraindicated in patients allergic to cephalosporins; use caution in penicillin allergy",
      "Dose adjustment is required in severe renal impairment",
      "Report persistent or severe diarrhoea to the doctor",
      "Use only for bacterial infections as prescribed — misuse promotes resistance",
    ],
    sideEffects: ["Loose stools or diarrhoea", "Nausea and abdominal discomfort", "Headache", "Skin rash or itching (rare)"],
    storage: commonStorage,
    standard: "Rx — Prescription only · IP",
  },
  {
    slug: "bhidoclav-cv-625",
    brand: "Bhidoclav-CV 625",
    dosageForm: "Tablets",
    unit: "tablet",
    composition: "Amoxycillin & Potassium Clavulanate Tablets IP",
    strength: [
      "Amoxycillin IP (as trihydrate) equivalent to Amoxycillin 500 mg",
      "Potassium Clavulanate diluted IP equivalent to Clavulanic Acid 125 mg",
    ],
    packSize: "10 x 10 Tablets",
    therapy: "Anti-Infectives",
    drugClass: "Penicillin + Beta-lactamase Inhibitor",
    divisions: ["tablets", "anti-infectives"],
    image: "/images/products/bhidoclav-cv-625.webp",
    summary: "Beta-lactamase-protected amoxycillin for resistant infections.",
    overview:
      "Bhidoclav-CV 625 combines amoxycillin, a broad-spectrum penicillin, with clavulanic acid, a beta-lactamase inhibitor. The clavulanate protects amoxycillin from destruction by resistant bacteria, extending its spectrum to beta-lactamase-producing strains commonly seen in respiratory, ENT, urinary, skin and dental infections.",
    indications: [
      "Sinusitis, tonsillitis and acute otitis media",
      "Community-acquired pneumonia and bronchitis",
      "Urinary tract infections",
      "Skin and soft-tissue infections, cellulitis and animal bites",
      "Dental infections and dento-alveolar abscess",
    ],
    mechanism:
      "Amoxycillin inhibits bacterial cell-wall synthesis by binding to penicillin-binding proteins. Clavulanic acid irreversibly binds and inactivates beta-lactamase enzymes produced by resistant bacteria, preventing them from breaking down amoxycillin and restoring its bactericidal action.",
    dosage:
      "Adults: one tablet every 12 hours, taken at the start of a meal, usually for 5–14 days — or as directed by the physician. Swallow whole; complete the full course.",
    benefits: [
      "Effective against beta-lactamase-producing bacteria",
      "Wide spectrum across multiple infection sites",
      "Well-established safety profile",
      "Convenient twice-daily regimen",
    ],
    precautions: [
      "Contraindicated in penicillin or beta-lactam hypersensitivity",
      "Avoid in patients with prior amoxycillin-clavulanate associated jaundice or hepatic dysfunction",
      "Use caution in hepatic and renal impairment",
      "Avoid in suspected infectious mononucleosis (risk of rash)",
    ],
    sideEffects: ["Diarrhoea, nausea or vomiting", "Oral or vaginal candidiasis", "Skin rash", "Abdominal discomfort"],
    storage:
      "Store below 25°C in a dry place, in the original pack to protect from moisture. Keep all medicines out of the reach of children.",
    standard: "Rx — Prescription only · IP",
  },
  {
    slug: "bhidpan-dsr",
    brand: "Bhidpan-DSR",
    dosageForm: "Capsules",
    unit: "capsule",
    composition: "Pantoprazole (Enteric Coated) & Domperidone (Sustained-Release) Capsules IP",
    strength: [
      "Pantoprazole Sodium IP equivalent to Pantoprazole 40 mg (as enteric-coated pellets)",
      "Domperidone IP 30 mg (as sustained-release pellets)",
    ],
    packSize: "10 x 10 Capsules",
    therapy: "Gastro Care",
    drugClass: "Proton Pump Inhibitor + Prokinetic",
    divisions: ["capsules", "gastro-care"],
    image: "/images/products/bhidpan-dsr.webp",
    summary: "Dual-release PPI + prokinetic for acidity and reflux.",
    overview:
      "Bhidpan-DSR is a dual-release capsule combining enteric-coated Pantoprazole with sustained-release Domperidone. It suppresses gastric acid production while improving gastric emptying — offering comprehensive, all-day relief from acidity, heartburn, bloating and reflux-associated nausea with a single daily dose.",
    indications: [
      "Gastro-oesophageal reflux disease (GERD) and reflux oesophagitis",
      "Acidity and heartburn not controlled by PPI alone",
      "Functional dyspepsia with bloating and early satiety",
      "Peptic ulcer disease with associated nausea or vomiting",
      "Drug-induced gastritis (e.g. NSAID-associated)",
    ],
    mechanism:
      "Pantoprazole irreversibly blocks the H⁺/K⁺-ATPase (proton pump) in gastric parietal cells, powerfully reducing acid secretion. Domperidone is a peripheral dopamine D2-receptor antagonist that increases oesophageal and gastric motility, speeds gastric emptying and relieves nausea. Sustained-release pellets maintain prokinetic action through the day.",
    dosage:
      "One capsule once daily on an empty stomach, 30–60 minutes before breakfast — or as directed by the physician. Swallow whole; do not open, crush or chew.",
    benefits: [
      "Controls acid and motility in one capsule",
      "Enteric coating protects Pantoprazole from stomach acid",
      "Sustained-release Domperidone for 24-hour coverage",
      "Once-daily dosing for better adherence",
    ],
    precautions: [
      "Use caution in hepatic impairment",
      "Avoid in patients with cardiac conduction disorders or QT prolongation",
      "Avoid concomitant use of strong CYP3A4 inhibitors (e.g. ketoconazole)",
      "Long-term PPI use may reduce vitamin B12 and magnesium levels",
      "Consult a physician before use in pregnancy or lactation",
    ],
    sideEffects: ["Headache or dizziness", "Dry mouth", "Diarrhoea or constipation", "Abdominal pain or flatulence"],
    storage: commonStorage,
    standard: "Rx — Prescription only · IP",
  },
  {
    slug: "rebhi-dsr",
    brand: "Rebhi-DSR",
    dosageForm: "Capsules",
    unit: "capsule",
    composition: "Rabeprazole Sodium (EC) & Domperidone (SR) Capsules",
    strength: ["Rabeprazole Sodium IP 20 mg (as enteric-coated pellets)", "Domperidone IP 30 mg (as sustained-release pellets)"],
    packSize: "10 x 10 Capsules",
    therapy: "Gastro Care",
    drugClass: "Proton Pump Inhibitor + Prokinetic",
    divisions: ["capsules", "gastro-care"],
    image: "/images/products/rebhi-dsr.webp",
    summary: "Fast-acting Rabeprazole with sustained-release Domperidone.",
    overview:
      "Rebhi-DSR pairs Rabeprazole — a proton pump inhibitor known for its rapid onset of acid suppression — with sustained-release Domperidone. The combination delivers quick relief from heartburn and acid regurgitation while restoring normal gastric motility for lasting comfort.",
    indications: [
      "Gastro-oesophageal reflux disease (GERD)",
      "Heartburn and acid regurgitation",
      "Dyspepsia with nausea, bloating and fullness",
      "Duodenal and gastric ulcers with motility symptoms",
      "Gastritis and hyperacidity",
    ],
    mechanism:
      "Rabeprazole inhibits the gastric H⁺/K⁺-ATPase enzyme, rapidly suppressing both basal and stimulated acid secretion. Domperidone blocks peripheral dopamine D2 receptors, enhancing upper gastrointestinal motility and exerting an anti-emetic effect. Sustained-release pellets provide consistent prokinetic support throughout the day.",
    dosage:
      "One capsule once daily before breakfast on an empty stomach, or as directed by the physician. Swallow whole with water.",
    benefits: [
      "Rapid onset of acid suppression",
      "Relieves reflux, bloating and nausea together",
      "Dual-pellet technology for controlled release",
      "Once-daily convenience",
    ],
    precautions: [
      "Use caution in hepatic impairment",
      "Avoid in patients with known QT prolongation or significant cardiac disease",
      "Avoid with strong CYP3A4 inhibitors",
      "Not recommended in pregnancy and lactation unless clearly needed",
    ],
    sideEffects: ["Headache", "Dry mouth", "Diarrhoea or nausea", "Abdominal pain"],
    storage: commonStorage,
    standard: "Rx — Prescription only",
  },
  {
    slug: "vomiblock-md",
    brand: "Vomiblock-MD",
    dosageForm: "Tablets",
    unit: "tablet",
    composition: "Ondansetron Orally Disintegrating Tablets IP 4 mg",
    strength: ["Ondansetron Hydrochloride IP equivalent to Ondansetron 4 mg"],
    packSize: "10 x 10 Tablets",
    therapy: "Anti-Emetics",
    drugClass: "5-HT3 Receptor Antagonist",
    divisions: ["tablets", "anti-emetics", "gastro-care"],
    image: "/images/products/vomiblock-md.webp",
    summary: "Mouth-dissolving relief from nausea and vomiting — no water needed.",
    overview:
      "Vomiblock-MD is a mouth-dissolving (orally disintegrating) tablet of Ondansetron, a selective 5-HT3 receptor antagonist. It disperses on the tongue within seconds without water, making it ideal for patients experiencing active nausea or those who have difficulty swallowing conventional tablets.",
    indications: [
      "Prevention of chemotherapy-induced nausea and vomiting",
      "Prevention of radiotherapy-induced nausea and vomiting",
      "Prevention and treatment of post-operative nausea and vomiting",
      "Nausea and vomiting associated with acute gastroenteritis (as prescribed)",
    ],
    mechanism:
      "Ondansetron selectively blocks serotonin 5-HT3 receptors both peripherally on vagal nerve terminals in the gut and centrally in the chemoreceptor trigger zone of the brain, interrupting the vomiting reflex triggered by serotonin release.",
    dosage:
      "Place the tablet on the tongue; it disperses within seconds and can be swallowed with saliva — no water required. Dose and frequency as directed by the physician.",
    benefits: [
      "Disintegrates in seconds on the tongue",
      "No water needed — easy when nauseous",
      "Highly selective anti-emetic action",
      "Suitable for patients with swallowing difficulty",
    ],
    precautions: [
      "Use caution in patients with QT prolongation or electrolyte imbalance",
      "Dose should not exceed 8 mg/day in moderate to severe hepatic impairment",
      "Risk of serotonin syndrome with other serotonergic drugs",
      "May contain aspartame — caution in phenylketonuria",
    ],
    sideEffects: ["Headache", "Constipation", "Sensation of warmth or flushing", "Fatigue or dizziness"],
    storage: commonStorage,
    standard: "Rx — Prescription only · IP",
  },
  {
    slug: "bhidcal-d3-nano-shots",
    brand: "Bhidcal-D3 Nano Shots",
    dosageForm: "Oral Solution",
    unit: "5 ml bottle",
    composition: "Cholecalciferol (Vitamin D3) Oral Solution 60,000 IU",
    strength: ["Cholecalciferol IP (Vitamin D3) 60,000 IU", "In a strawberry-flavoured, sugar-free nano-emulsion base"],
    packSize: "4 x 5 ml Bottles",
    therapy: "Vitamins & Nutrition",
    drugClass: "Vitamin D Supplement (Fat-soluble Vitamin)",
    divisions: ["oral-solutions", "nutraceuticals"],
    image: "/images/products/bhidcal-d3.webp",
    summary: "Ready-to-drink, sugar-free Vitamin D3 60,000 IU nano shots.",
    overview:
      "Bhidcal-D3 Nano Shots deliver a high-strength 60,000 IU dose of Cholecalciferol (Vitamin D3) in a ready-to-drink, strawberry-flavoured oral solution. The nano-sized droplets are designed for better dispersion and absorption of this fat-soluble vitamin, while the sugar-free, pre-measured 5 ml bottle makes weekly or monthly supplementation simple — with no tablets to swallow.",
    indications: [
      "Treatment and prevention of Vitamin D deficiency and insufficiency",
      "Osteoporosis and osteopenia, as an adjunct to calcium therapy",
      "Rickets and osteomalacia",
      "Muscle weakness, bone pain and fatigue associated with low Vitamin D",
      "Supplementation in people with limited sun exposure, the elderly and those with malabsorption",
    ],
    mechanism:
      "Cholecalciferol is converted in the liver to 25-hydroxyvitamin D and then in the kidneys to its active form, calcitriol. Calcitriol increases intestinal absorption of calcium and phosphate, regulates bone mineralisation and remodelling, and supports normal muscle and immune function. The nano-emulsion base helps disperse the fat-soluble vitamin for efficient absorption.",
    dosage:
      "Drink the contents of one bottle (60,000 IU) once a week or once a month, or as directed by the registered medical practitioner. Shake well before use; can be taken directly from the bottle, preferably after a meal.",
    benefits: [
      "High-strength 60,000 IU dose in a single shot",
      "Nano-emulsion technology for better absorption",
      "Ready to drink — no water, no tablets to swallow",
      "Pleasant strawberry flavour and sugar-free, suitable for diabetics",
    ],
    precautions: [
      "Do not exceed the prescribed dose — excess Vitamin D may cause hypercalcaemia",
      "Avoid in hypercalcaemia, hypervitaminosis D or known hypersensitivity",
      "Use with caution in kidney stones, renal impairment or sarcoidosis",
      "Monitor serum calcium during long-term or high-dose therapy",
      "Use in pregnancy and lactation only on medical advice",
    ],
    sideEffects: ["Nausea or loss of appetite (rare)", "Constipation", "Headache", "Signs of high calcium with overdose — thirst, frequent urination, weakness"],
    storage:
      "Store in a cool, dry place below 25°C. Protect from direct sunlight. Do not freeze. Keep all medicines out of the reach of children.",
    standard: "Rx — Prescription only · IP",
  },
];

export function getDivision(slug: string) {
  return divisions.find((d) => d.slug === slug);
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function productsInDivision(slug: string) {
  return products.filter((p) => p.divisions.includes(slug));
}

export function divisionCount(slug: string) {
  return productsInDivision(slug).length;
}
