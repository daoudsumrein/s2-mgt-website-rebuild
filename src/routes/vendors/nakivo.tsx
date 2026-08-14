import { createFileRoute } from "@tanstack/react-router";
import NakivoPage from "@/pages/vendors/Nakivo";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/vendors/nakivo")({
  component: NakivoPage,
  head: () =>
    seo({
      title: "NAKIVO Backup & Replication Solutions | S2 Management",
      description: "Comprehensive data protection with NAKIVO's enterprise backup and replication platform. Trusted by organizations with strict cybersecurity standards.",
      keywords: "NAKIVO partner, data protection, backup replication, enterprise backup, VM backup, cloud data protection",
      canonical: "https://s2mgt.com/vendors/nakivo",
    }),
});
