import { createFileRoute } from "@tanstack/react-router";
import EmailArchiving from "@/pages/solutions/EmailArchiving";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/solutions/email-archiving")({
  component: EmailArchiving,
  head: () =>
    seo({
      title: "Email Archiving Solutions MENA - Compliance & Data Retention | S2 Solutions",
      description: "Professional email archiving solutions for MENA enterprises. Complete email archiving with compliance features, data retention policies, and secure storage. Serving UAE, Saudi Arabia, and Middle East.",
      keywords: "email archiving MENA, email compliance UAE, data retention Middle East, email storage Saudi Arabia, archiving solutions, compliance archiving",
      canonical: "https://s2mgt.com/solutions/email-archiving",
    }),
});
