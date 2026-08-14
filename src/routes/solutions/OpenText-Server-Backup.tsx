import { createFileRoute } from "@tanstack/react-router";
import OpenTextServerBackup from "@/pages/solutions/OpenTextServerBackup";

export const Route = createFileRoute("/solutions/OpenText-Server-Backup")({
  component: OpenTextServerBackup,
});