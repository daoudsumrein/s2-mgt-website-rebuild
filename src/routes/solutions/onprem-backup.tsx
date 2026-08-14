import { createFileRoute } from "@tanstack/react-router";
import OnPremBackup from "@/pages/solutions/OnPremBackup";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/solutions/onprem-backup")({
  component: OnPremBackup,
  head: () =>
    seo({
      title: "On-Premises Backup Solutions MENA - Local Data Protection | S2 Solutions",
      description: "Enterprise on-premises backup solutions for MENA region. Local data protection with high-performance platforms offering fast recovery, deduplication, and secure storage. Serving UAE, Saudi Arabia, and Middle East.",
      keywords: "on-premises backup MENA, local backup UAE, enterprise backup Middle East, data protection Saudi Arabia, backup appliance, deduplication, fast recovery",
      canonical: "https://s2mgt.com/solutions/onprem-backup",
    }),
});
