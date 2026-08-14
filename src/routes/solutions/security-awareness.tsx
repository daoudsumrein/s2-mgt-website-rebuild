import { createFileRoute } from "@tanstack/react-router";
import SecurityAwareness from "@/pages/solutions/SecurityAwareness";

export const Route = createFileRoute("/solutions/security-awareness")({
  component: SecurityAwareness,
});