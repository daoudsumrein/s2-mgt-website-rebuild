import { createFileRoute } from "@tanstack/react-router";
import EndpointProtection from "@/pages/solutions/EndpointProtection";

export const Route = createFileRoute("/solutions/endpoint-protection")({
  component: EndpointProtection,
});