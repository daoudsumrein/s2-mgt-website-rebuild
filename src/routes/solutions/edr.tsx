import { createFileRoute } from "@tanstack/react-router";
import EDR from "@/pages/solutions/EDR";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/solutions/edr")({
  component: EDR,
  head: () =>
    seo({
      title: "Endpoint Detection and Response (EDR) Solutions | MENA Cybersecurity",
      description: "Advanced EDR solutions for MENA enterprises. Real-time threat detection, behavioral analytics, and automated incident response for comprehensive endpoint security.",
      keywords: "EDR solutions MENA, endpoint detection response UAE, cybersecurity Middle East, threat hunting Saudi Arabia, incident response",
      canonical: "https://s2mgt.com/solutions/edr",
    }),
});
