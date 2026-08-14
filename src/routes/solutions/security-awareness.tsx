import { createFileRoute } from "@tanstack/react-router";
import SecurityAwareness from "@/pages/solutions/SecurityAwareness";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/solutions/security-awareness")({
  component: SecurityAwareness,
  head: () =>
    seo({
      title: "Security Awareness Training | Human Firewall Development MENA",
      description: "Comprehensive security awareness training programs for MENA enterprises. Phishing simulations, interactive training, and human risk management solutions.",
      keywords: "security awareness training MENA, cybersecurity training UAE, phishing simulation Middle East, security education Saudi Arabia",
      canonical: "https://s2mgt.com/solutions/security-awareness",
    }),
});
