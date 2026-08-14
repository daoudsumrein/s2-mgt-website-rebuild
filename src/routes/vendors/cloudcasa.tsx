import { createFileRoute } from "@tanstack/react-router";
import CloudCasaPage from "@/pages/vendors/CloudCasa";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/vendors/cloudcasa")({
  component: CloudCasaPage,
  head: () =>
    seo({
      title: "CloudCasa - Kubernetes Data Protection & Migration | S2 Management",
      description: "Enterprise-grade Kubernetes backup and disaster recovery with CloudCasa. Secure, scalable protection for containers and VMs across multi-cloud and hybrid infrastructures.",
      keywords: "CloudCasa, Kubernetes backup, Kubernetes disaster recovery, container backup, multi-cloud backup, Kubernetes migration, CNCF, OpenShift, Rancher, Tanzu",
      canonical: "https://s2mgt.com/vendors/cloudcasa",
    }),
});
