import { createFileRoute } from "@tanstack/react-router";
import ServerMigrationOrchestration from "@/pages/solutions/ServerMigrationOrchestration";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/solutions/server-migration-orchestration")({
  component: ServerMigrationOrchestration,
  head: () =>
    seo({
      title: "TDS TransitionManager Migration Orchestration | MENA",
      description: "S2 Management delivers TDS TransitionManager in MENA, enabling automated migration orchestration with runbooks, dependency mapping & workflow automation",
      keywords: "TDS TransitionManager MENA, migration orchestration UAE, automated server migration Saudi Arabia, migration workflow Qatar, workload transition Kuwait, dependency mapping Bahrain, migration automation Gulf, BC/DR orchestration Middle East, server migration MENA, infrastructure migration UAE, orchestrated cutover Saudi Arabia, cloud migration Qatar, migration runbooks Kuwait, data center transition Bahrain, enterprise migration automation Gulf",
      canonical: "https://s2mgt.com/solutions/server-migration-orchestration",
    }),
});
