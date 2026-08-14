import { createFileRoute } from "@tanstack/react-router";
import ServersDataProtection from "@/pages/solutions/ServersDataProtection";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/solutions/servers-data-protection")({
  component: ServersDataProtection,
  head: () =>
    seo({
      title: "Servers and Data Protection Solutions MENA - Insider Threat Protection | S2 Solutions",
      description: "Advanced servers and data protection solutions for MENA region. Protect against insider threats with invisibility technology and access controls. Serving UAE, Saudi Arabia, and Middle East.",
      keywords: "server protection MENA, data protection UAE, insider threats Middle East, cybersecurity Saudi Arabia, access control, data security",
      canonical: "https://s2mgt.com/solutions/servers-data-protection",
    }),
});
