import { createFileRoute } from "@tanstack/react-router";
import CloudMigration from "@/pages/solutions/CloudMigration";

export const Route = createFileRoute("/solutions/cloud-migration")({
  component: CloudMigration,
});