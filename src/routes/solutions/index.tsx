import { createFileRoute } from "@tanstack/react-router";
import Solutions from "@/pages/Solutions";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/solutions/")({
  component: Solutions,
  head: () =>
    seo({
      title: "Data Protection & Cybersecurity Solutions - UAE, KSA, MENA",
      description: "Comprehensive data protection & cybersecurity solutions in UAE, KSA & MENA. DR, backup, migration, endpoint security, email protection & ransomware defense.",
      keywords: "Data Protection Solutions MENA,Cybersecurity Solutions UAE,Disaster Recovery Planning KSA,Server Migration Services MENA,Cloud Backup & Replication UAE",
      canonical: "https://s2mgt.com/solutions",
    }),
});
