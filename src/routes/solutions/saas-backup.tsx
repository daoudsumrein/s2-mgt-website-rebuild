import { createFileRoute } from "@tanstack/react-router";
import SaasBackup from "@/pages/solutions/SaasBackup";

export const Route = createFileRoute("/solutions/saas-backup")({ component: SaasBackup });