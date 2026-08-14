import { createFileRoute } from "@tanstack/react-router";
import EmailProtection from "@/pages/solutions/EmailProtection";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/solutions/email-protection")({
  component: EmailProtection,
  head: () =>
    seo({
      title: "Email Protection Solutions | Advanced Email Security MENA",
      description: "Comprehensive email protection for MENA enterprises. Advanced threat protection, anti-phishing, and email security solutions for business communication.",
      keywords: "email protection MENA, email security UAE, anti-phishing Middle East, email threat protection Saudi Arabia",
      canonical: "https://s2mgt.com/solutions/email-protection",
    }),
});
