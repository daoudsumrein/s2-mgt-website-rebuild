import { createFileRoute } from "@tanstack/react-router";
import DataProtection from "@/pages/solutions/DataProtection";

export const Route = createFileRoute("/solutions/data-protection")({ component: DataProtection });