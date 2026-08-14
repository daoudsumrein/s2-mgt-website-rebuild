import { createFileRoute } from "@tanstack/react-router";
import DROrchestration from "@/pages/solutions/DROrchestration";

export const Route = createFileRoute("/solutions/disaster-recovery-orchestration")({
  component: DROrchestration,
});