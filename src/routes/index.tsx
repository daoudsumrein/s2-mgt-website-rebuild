import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  component: Index,
  head: () =>
    seo({
      title: "Solutions Distributor | Backup, DR, Cybersecurity & Orchestrator",
      description: "S2 Management delivers Disaster Recovery & Backup, Data protection, DR orchestration, Application Modernization, business continuity & resilience.",
      keywords: "Disaster recovery solutions UAE, KSA, MENA, OpenText distributor Middle East, Enterprise data protection KSA, application modernization MENA, Carbonite solutions, IT orchestration, data protection MENA, Migration Orchestration Dubai & KSA, DR Orchestration Dubai & Riyadh",
      canonical: "https://s2mgt.com/",
      author: "S2 Management Solutions",
    }),
});
