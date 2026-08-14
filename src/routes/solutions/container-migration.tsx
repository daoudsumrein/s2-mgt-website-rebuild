import { createFileRoute } from "@tanstack/react-router";
import ContainerMigration from "@/pages/solutions/ContainerMigration";

export const Route = createFileRoute("/solutions/container-migration")({
  component: ContainerMigration,
});