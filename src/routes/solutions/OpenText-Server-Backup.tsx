import { createFileRoute } from "@tanstack/react-router";
import OpenTextServerBackup from "@/pages/solutions/OpenTextServerBackup";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/solutions/OpenText-Server-Backup")({
  component: OpenTextServerBackup,
  head: () =>
    seo({
      title: "OpenText Server Backup Solutions MENA - Enterprise Server Protection | S2 Solutions",
      description: "Enterprise OpenText server backup solutions for MENA region. Complete server backup and replication with unlimited storage, ransomware protection, and compliance features. Serving UAE, Saudi Arabia, and Middle East.",
      keywords: "server backup MENA, OpenText server backup UAE, server backup Middle East, server replication Saudi Arabia, server data protection, enterprise backup, server disaster recovery",
      canonical: "https://s2mgt.com/solutions/OpenText-Server-Backup",
    }),
});
