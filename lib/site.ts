export const company = {
  name: "Bhidwaria Pharmaceuticals Private Limited",
  shortName: "Bhidwaria Pharmaceuticals",
  tagline: "Better Health. Brighter Tomorrow.",
  address: "A-185, Ganga Nagar, Mawana Road, Meerut, Uttar Pradesh - 250001",
  addressLines: ["A-185, Ganga Nagar, Mawana Road", "Meerut, Uttar Pradesh - 250001"],
  email: "vnbhidwaria2026@gmail.com",
  phones: [
    { display: "+91 79836 79452", tel: "+917983679452" },
    { display: "+91 85338 57949", tel: "+918533857949" },
  ],
  whatsapp: "917983679452",
  hours: "Monday – Saturday, 9:30 AM – 6:30 PM",
  mapEmbed:
    "https://www.google.com/maps?q=A-185%20Ganga%20Nagar%20Mawana%20Road%20Meerut%20Uttar%20Pradesh%20250001&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=A-185%20Ganga%20Nagar%20Mawana%20Road%20Meerut%20Uttar%20Pradesh%20250001",
} as const;

export function whatsappLink(message = "Hello Bhidwaria Pharmaceuticals, I would like to know more about your products.") {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const FRANCHISE_PATH = "/services/monopoly-pcd-pharma-franchise";

export type NavChild = { label: string; href: string; description: string };
export type NavItem = { label: string; href: string; children?: readonly NavChild[] };

export const aboutNav: readonly NavChild[] = [
  { label: "Company Overview", href: "/about#company-overview", description: "Who we are and what we do" },
  { label: "Director's Message", href: "/about#directors-message", description: "A word from our leadership" },
  { label: "Vision, Mission & Values", href: "/about#vision-mission-values", description: "The principles that guide us" },
  { label: "Why Choose Us", href: "/about#why-choose-us", description: "What sets Bhidwaria apart" },
  { label: "Quality Assurance", href: "/about#quality-assurance", description: "Our commitment to every batch" },
];

export const servicesNav: readonly NavChild[] = [
  { label: "Franchise / Business", href: FRANCHISE_PATH, description: "Monopoly PCD Pharma Franchise Opportunity" },
  { label: "Distribution & Stockist", href: "/services#distribution", description: "Supply partnerships for your region" },
  { label: "Marketing Support", href: "/services#marketing-support", description: "Visual aids, literature & promotion" },
];

/** Products uses its own mega menu; items with `children` render as dropdowns. */
export const mainNav: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about", children: aboutNav },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services", children: servicesNav },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
