import { createFileRoute } from "@tanstack/react-router";
import MDR from "@/pages/solutions/MDR";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/solutions/mdr")({
  component: MDR,
  head: () =>
    seo({
      title: "Managed Detection and Response (MDR) Services | MENA Cybersecurity",
      description: "Professional MDR services for MENA enterprises. 24/7 security monitoring, threat hunting, and incident response by expert security analysts.",
      keywords: "MDR services MENA, managed detection response UAE, cybersecurity monitoring Middle East, security operations Saudi Arabia",
      canonical: "https://s2mgt.com/solutions/mdr",
    }),
});
