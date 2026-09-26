import { LegalPage } from "@/components/LegalPage";
import { company } from "@/lib/site";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="September 2026"
      sections={[
        { heading: "Information we collect", text: "When you submit an enquiry, we collect the details you provide — such as your name, mobile number, email address, city and message — solely to respond to your request." },
        { heading: "How we use your information", text: "Your information is used to answer product, business and career enquiries and to share information you have requested. We do not sell or rent your personal data to third parties." },
        { heading: "Data security", text: "We take reasonable technical and organisational measures to protect the information you share with us against unauthorised access, loss or misuse." },
        { heading: "Cookies", text: "This website may use essential cookies required for it to function correctly. We do not use cookies to track you across other websites." },
        { heading: "Your choices", text: `You may request access to, correction of, or deletion of your personal information at any time by writing to ${company.email}.` },
        { heading: "Contact", text: `${company.name}, ${company.address}. Phone: ${company.phones.map((p) => p.display).join(", ")}.` },
      ]}
    />
  );
}
