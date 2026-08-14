import { createFileRoute } from "@tanstack/react-router";
import CloudMigration from "@/pages/solutions/CloudMigration";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/solutions/cloud-migration")({
  component: CloudMigration,
  head: () =>
    seo({
      title: "Cloud Migration & Modernization - Agentless Multi-Cloud Platform",
      description: "Enterprise cloud migration platform with zero agents. Migrate physical, virtual, or cloud workloads to AWS, Azure, VMware, Google Cloud with OS modernization.",
      keywords: "cloud migration, agentless migration, OS modernization, multi-cloud migration, AWS migration, Azure migration",
      canonical: "https://s2mgt.com/solutions/cloud-migration",
    }),
});
