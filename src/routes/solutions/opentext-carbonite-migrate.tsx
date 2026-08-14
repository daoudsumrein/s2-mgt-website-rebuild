import { createFileRoute } from "@tanstack/react-router";
import ServerMigration from "@/pages/solutions/ServerMigration";

export const Route = createFileRoute("/solutions/opentext-carbonite-migrate")({
  component: ServerMigration,
});