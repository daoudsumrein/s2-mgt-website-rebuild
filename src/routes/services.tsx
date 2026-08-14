import { createFileRoute } from "@tanstack/react-router";
import Services from "@/pages/Services";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () =>
    seo({
      title: "IT Consultancy & Professional Services - UAE, KSA & MENA",
      description: "Consultancy-led IT services in MENA: strategy, solutions architecture, DR planning, migration, SLAs & modernization. Vendor-neutral, enterprise-focused delivery.",
      keywords: "IT Consultancy Services MENA,Disaster Recovery Planning KSA,IT Migration & Modernization Solutions,Business Continuity & SLA Management MENA,IT Solutions Architecture UAE",
      canonical: "https://s2mgt.com/services",
    }),
});
