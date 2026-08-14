import { createFileRoute } from "@tanstack/react-router";
import EndpointBackup from "@/pages/solutions/EndpointBackup";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/solutions/endpoint-backup")({
  component: EndpointBackup,
  head: () =>
    seo({
      title: "Official Distributor of OpenText Core Endpoint Backup Solutions",
      description: "S2, the official MENA distributor for OpenText Core Endpoint Backup, delivers automated device & data protection against human error, malware & theft.",
      keywords: "endpoint backup MENA, cloud backup UAE, device protection Middle East, automated backup Saudi Arabia, endpoint security, remote device backup, enterprise endpoint protection",
      canonical: "https://s2mgt.com/solutions/endpoint-backup",
    }),
});
