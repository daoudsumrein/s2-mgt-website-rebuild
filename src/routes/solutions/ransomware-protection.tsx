import { createFileRoute } from "@tanstack/react-router";
import RansomwareProtection from "@/pages/solutions/RansomwareProtection";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/solutions/ransomware-protection")({
  component: RansomwareProtection,
  head: () =>
    seo({
      title: "Ransomware Protection Solutions | S2 Management Solutions",
      description: "Advanced ransomware protection with isolated backup vaults, smart monitoring, and tamper-resistant storage. Your last line of defense against cyber threats.",
      keywords: "ransomware protection, backup security, cyber resilience, data vault, immutable backups, threat detection",
      canonical: "https://s2mgt.com/solutions/ransomware-protection",
    }),
});
