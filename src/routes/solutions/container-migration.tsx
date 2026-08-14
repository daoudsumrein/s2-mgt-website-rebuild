import { createFileRoute } from "@tanstack/react-router";
import ContainerMigration from "@/pages/solutions/ContainerMigration";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/solutions/container-migration")({
  component: ContainerMigration,
  head: () =>
    seo({
      title: "Container Migration - Kubernetes & OpenShift Migration | S2 Technologies",
      description: "Effortless Kubernetes and OpenShift migration with CloudCasa. Secure, scalable, and cloud-native migration across clusters, clouds, and environments with zero vendor lock-in.",
      keywords: "kubernetes migration, openshift migration, container migration, cloudcasa, cluster migration, multi-cloud migration",
      canonical: "https://s2mgt.com/solutions/container-migration",
    }),
});
