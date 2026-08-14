import { createFileRoute } from "@tanstack/react-router";
import EndpointBackup from "@/pages/solutions/EndpointBackup";

export const Route = createFileRoute("/solutions/endpoint-backup")({ component: EndpointBackup });