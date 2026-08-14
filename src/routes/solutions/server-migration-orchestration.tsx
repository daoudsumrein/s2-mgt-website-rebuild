import { createFileRoute } from "@tanstack/react-router";
import ServerMigrationOrchestration from "@/pages/solutions/ServerMigrationOrchestration";

export const Route = createFileRoute("/solutions/server-migration-orchestration")({
  component: ServerMigrationOrchestration,
});