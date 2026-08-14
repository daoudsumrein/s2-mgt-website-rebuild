import { createFileRoute } from "@tanstack/react-router";
import Security from "@/pages/solutions/Security";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/solutions/security")({
  component: Security,
  head: () =>
    seo({
      title: "Cybersecurity & Ransomware Protection MENA - Enterprise Security Solutions | S2",
      description: "Advanced cybersecurity and ransomware protection for MENA enterprises. Multi-layered threat defense, endpoint security, email protection, and managed detection & response (MDR) services across UAE and Middle East.",
      keywords: "cybersecurity MENA, ransomware protection UAE, enterprise security Middle East, endpoint protection Saudi Arabia, email security, MDR services, threat detection MENA, cyber defense solutions",
      canonical: "https://s2mgt.com/solutions/security",
    }),
});
