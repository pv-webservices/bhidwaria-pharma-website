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

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Therapeutic Segments", href: "/therapeutic-segments" },
  { label: "Quality", href: "/quality" },
  { label: "Franchise / Business", href: "/business-opportunity" },
  { label: "Contact", href: "/contact" },
] as const;
