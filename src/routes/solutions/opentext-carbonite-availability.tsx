import { createFileRoute } from "@tanstack/react-router";
import DisasterRecovery from "@/pages/solutions/DisasterRecovery";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/solutions/opentext-carbonite-availability")({
  component: DisasterRecovery,
  head: () =>
    seo({
      title: "OpenText (Carbonite) Distributor MENA | UAE, KSA, Qatar",
      description: "S2 Management Official MENA distributor of OpenText Carbonite Availability. Real-time replication, automated failover & 24/7 protection.",
      keywords: "Carbonite MENA, OpenText Availability, Carbonite distributor UAE, Carbonite distributor Saudi Arabia, Carbonite Qatar, Carbonite Oman, Carbonite Bahrain, Carbonite Kuwait, disaster recovery MENA, business continuity UAE, real-time replication, automated failover, enterprise data protection, RPO RTO solutions, OpenText partner Middle East",
      canonical: "https://s2mgt.com/solutions/opentext-carbonite-availability",
    }),
});
