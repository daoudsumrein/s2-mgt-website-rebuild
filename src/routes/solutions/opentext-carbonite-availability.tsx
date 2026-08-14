import { createFileRoute } from "@tanstack/react-router";
import DisasterRecovery from "@/pages/solutions/DisasterRecovery";

export const Route = createFileRoute("/solutions/opentext-carbonite-availability")({
  component: DisasterRecovery,
});