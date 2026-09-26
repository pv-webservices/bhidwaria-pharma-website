import { LegalPage } from "@/components/LegalPage";
import { company } from "@/lib/site";

export const metadata = { title: "Terms & Conditions" };

export default function Terms() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="September 2026"
      sections={[
        { heading: "Use of this website", text: `This website is operated by ${company.name}. By using it, you agree to these terms. The content is provided for general information about our company and products.` },
        { heading: "Medical information disclaimer", text: "Product information on this website is intended for healthcare professionals and trade partners. It is not a substitute for professional medical advice. Prescription medicines must be used only under the supervision of a registered medical practitioner." },
        { heading: "Product information", text: "We make every effort to keep product details accurate. Compositions, pack sizes and availability may change; please confirm current details with our team before placing orders." },
        { heading: "Business terms", text: "Any franchise, distribution or supply arrangement is subject to a separate written agreement. Nothing on this website constitutes a binding offer." },
        { heading: "Intellectual property", text: "Brand names, logos, product artwork and content on this website are the property of Bhidwaria Pharmaceuticals Private Limited and may not be used without written permission." },
        { heading: "Governing law", text: "These terms are governed by the laws of India, and disputes are subject to the jurisdiction of the courts at Meerut, Uttar Pradesh." },
      ]}
    />
  );
}
