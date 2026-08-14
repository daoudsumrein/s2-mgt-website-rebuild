import { createFileRoute } from "@tanstack/react-router";
import ServersDataProtection from "@/pages/solutions/ServersDataProtection";

export const Route = createFileRoute("/solutions/servers-data-protection")({
  component: ServersDataProtection,
});