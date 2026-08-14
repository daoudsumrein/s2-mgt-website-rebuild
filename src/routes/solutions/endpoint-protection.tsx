import { createFileRoute } from "@tanstack/react-router";
import EndpointProtection from "@/pages/solutions/EndpointProtection";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/solutions/endpoint-protection")({
  component: EndpointProtection,
  head: () =>
    seo({
      title: "Endpoint Protection with EDR Solutions | Advanced Security for MENA Enterprises",
      description: "Comprehensive endpoint protection with EDR functionality for MENA region. Real-time threat detection, automated remediation, and cloud-based management for enterprise endpoints.",
      keywords: "endpoint protection EDR MENA, endpoint security UAE, cybersecurity Middle East, threat protection Saudi Arabia, automated remediation",
      canonical: "https://s2mgt.com/solutions/endpoint-protection",
    }),
});
