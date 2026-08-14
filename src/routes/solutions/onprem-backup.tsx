import { createFileRoute } from "@tanstack/react-router";
import OnPremBackup from "@/pages/solutions/OnPremBackup";

export const Route = createFileRoute("/solutions/onprem-backup")({ component: OnPremBackup });