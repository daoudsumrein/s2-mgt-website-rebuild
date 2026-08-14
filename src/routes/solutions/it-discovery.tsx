import { createFileRoute } from "@tanstack/react-router";
import ITDiscovery from "@/pages/solutions/ITDiscovery";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/solutions/it-discovery")({
  component: ITDiscovery,
  head: () =>
    seo({
      title: "IT Discovery & Infrastructure Mapping MENA - IT Orchestration | S2 Solutions",
      description: "Comprehensive IT discovery and infrastructure mapping services for MENA enterprises. Expert IT orchestration, dependency mapping, and infrastructure analysis across UAE, Saudi Arabia, and Middle East.",
      keywords: "IT discovery MENA, infrastructure mapping UAE, IT orchestration Middle East, dependency mapping Saudi Arabia, IT assessment, infrastructure analysis, IT transformation planning",
      canonical: "https://s2mgt.com/solutions/it-discovery",
    }),
});
