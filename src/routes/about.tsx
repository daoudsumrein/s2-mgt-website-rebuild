import { createFileRoute } from "@tanstack/react-router";
import About from "@/pages/About";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  component: About,
  head: () =>
    seo({
      title: "Data Protection & DR Specialists in UAE, KSA & MENA",
      description: "Leading MENA IT consultancy since 2013, specializing in data protection, disaster recovery, backup, and business continuity for government & enterprise clients.",
      keywords: "OpenText Data Protection Distributor MENA,Business Continuity & Resilience KSA,Disaster Recovery Services UAE,DR Orchestration & Automation MENA, Cybersecurity & Endpoint Protection UAE, High Availability Solutions KSA",
      canonical: "https://s2mgt.com/about",
    }),
});
