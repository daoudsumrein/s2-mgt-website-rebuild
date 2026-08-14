import { createFileRoute } from "@tanstack/react-router";
import ServerMigration from "@/pages/solutions/ServerMigration";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/solutions/opentext-carbonite-migrate")({
  component: ServerMigration,
  head: () =>
    seo({
      title: "OpenText (Carbonite) Migrate Distributor MENA | UAE, KSA, Qatar",
      description: "S2 Management Official MENA distributor of OpenText Carbonite Migrate. Real-time replication, automated failover & 24/7 protection.",
      keywords: "Carbonite Migrate MENA, OpenText Migrate distributor, server migration UAE, zero downtime migration Saudi Arabia, data center migration Middle East, cloud migration Qatar, Carbonite partner Oman, Carbonite distributor Bahrain, OpenText Migrate Kuwait, infrastructure migration UAE, enterprise server migration, Carbonite Migrate solutions, OpenText partner MENA",
      canonical: "https://s2mgt.com/solutions/opentext-carbonite-migrate",
    }),
});
