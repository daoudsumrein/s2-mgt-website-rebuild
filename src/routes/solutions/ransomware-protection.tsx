import { createFileRoute } from "@tanstack/react-router";
import RansomwareProtection from "@/pages/solutions/RansomwareProtection";

export const Route = createFileRoute("/solutions/ransomware-protection")({
  component: RansomwareProtection,
});