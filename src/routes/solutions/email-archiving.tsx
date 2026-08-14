import { createFileRoute } from "@tanstack/react-router";
import EmailArchiving from "@/pages/solutions/EmailArchiving";

export const Route = createFileRoute("/solutions/email-archiving")({ component: EmailArchiving });