import { createFileRoute } from "@tanstack/react-router";
import DROrchestration from "@/pages/solutions/DROrchestration";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/solutions/disaster-recovery-orchestration")({
  component: DROrchestration,
  head: () =>
    seo({
      title: "Disaster Recovery Automation & Runbooks",
      description: "Automate DR validation, failover, and orchestration using TDS TransitionManager. Certified partner in UAE & KSA delivering zero-downtime recovery and dependency-aware automation.",
      keywords: "TDS TransitionManager MENA, disaster recovery orchestration UAE, automated DR Saudi Arabia, business continuity Qatar, failover testing Kuwait, DR runbooks Bahrain, recovery automation Gulf, BC/DR orchestration Middle East",
      canonical: "https://s2mgt.com/solutions/disaster-recovery-orchestration",
      author: "S2 Management Solutions",
    }),
});
