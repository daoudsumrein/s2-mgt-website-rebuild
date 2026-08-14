import { createFileRoute } from "@tanstack/react-router";
import Contact from "@/pages/Contact";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () =>
    seo({
      title: "Contact S2 Management Solutions - Expert IT Consultation MENA",
      description: "Get in touch with S2's expert team for IT transformation, data protection, and cybersecurity solutions. 24-hour response time. MENA region coverage.",
      keywords: "contact S2 Management, IT consultation MENA, data protection expert contact, disaster recovery consultation, UAE IT support",
      canonical: "https://s2mgt.com/contact",
    }),
});
