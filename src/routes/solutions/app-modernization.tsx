import { createFileRoute } from "@tanstack/react-router";
import AppModernization from "@/pages/solutions/AppModernization";

export const Route = createFileRoute("/solutions/app-modernization")({
  component: AppModernization,
});