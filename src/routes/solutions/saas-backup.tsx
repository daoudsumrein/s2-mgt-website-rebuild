import { createFileRoute } from "@tanstack/react-router";
import SaasBackup from "@/pages/solutions/SaasBackup";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/solutions/saas-backup")({
  component: SaasBackup,
  head: () =>
    seo({
      title: "SaaS Backup Solutions MENA - Microsoft 365, Google Workspace & Salesforce | S2",
      description: "CloudAlly SaaS backup for MENA enterprises. Automated, secure cloud-to-cloud backup and recovery for Microsoft 365, Google Workspace, Salesforce, Dropbox and Box.",
      keywords: "SaaS backup MENA, Microsoft 365 backup UAE, Google Workspace backup Saudi Arabia, Salesforce backup Middle East, Dropbox backup, CloudAlly, cloud-to-cloud backup",
      canonical: "https://s2mgt.com/solutions/saas-backup",
    }),
});
