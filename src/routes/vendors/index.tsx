import { createFileRoute } from "@tanstack/react-router";
import Vendors from "@/pages/Vendors";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/vendors/")({
  component: Vendors,
  head: () =>
    seo({
      title: "Technology Vendors & Partners | S2 Management Solutions",
      description: "Explore S2's strategic technology partnerships with OpenText, TDS, AppCURE, NAKIVO, and Arrosoft. Expert solutions for data protection and cybersecurity.",
      keywords: "S2 vendors, OpenText partner, TDS distributor, AppCURE reseller, NAKIVO solutions, Arrosoft backup, technology partners MENA",
      canonical: "https://s2mgt.com/vendors",
    }),
});
