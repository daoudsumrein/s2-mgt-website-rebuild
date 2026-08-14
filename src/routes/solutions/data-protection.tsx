import { createFileRoute } from "@tanstack/react-router";
import DataProtection from "@/pages/solutions/DataProtection";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/solutions/data-protection")({
  component: DataProtection,
  head: () =>
    seo({
      title: "Data Protection & Backup Solutions MENA - Enterprise Data Security | S2 Solutions",
      description: "Comprehensive data protection and backup solutions for MENA enterprises. Carbonite partner offering endpoint, server, cloud-to-cloud backup with advanced cybersecurity features across UAE and Middle East.",
      keywords: "data protection MENA, backup solutions UAE, Carbonite backup Middle East, endpoint backup Saudi Arabia, cloud backup solutions, data security MENA, enterprise backup, ransomware protection",
      canonical: "https://s2mgt.com/solutions/data-protection",
    }),
});
