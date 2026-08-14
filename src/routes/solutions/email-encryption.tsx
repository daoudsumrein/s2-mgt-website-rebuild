import { createFileRoute } from "@tanstack/react-router";
import EmailEncryption from "@/pages/solutions/EmailEncryption";

export const Route = createFileRoute("/solutions/email-encryption")({
  component: EmailEncryption,
});