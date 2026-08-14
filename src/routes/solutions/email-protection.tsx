import { createFileRoute } from "@tanstack/react-router";
import EmailProtection from "@/pages/solutions/EmailProtection";

export const Route = createFileRoute("/solutions/email-protection")({
  component: EmailProtection,
});