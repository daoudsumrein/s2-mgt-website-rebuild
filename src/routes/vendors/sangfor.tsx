import { createFileRoute } from "@tanstack/react-router";
import SangforPage from "@/pages/vendors/Sangfor";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/vendors/sangfor")({
  component: SangforPage,
  head: () =>
    seo({
      title: "Sangfor HCI & Security Solutions | S2 Management",
      description: "Hyper-converged infrastructure and next-generation firewall solutions by Sangfor. Cost-effective infrastructure and security for enterprise environments.",
      keywords: "Sangfor partner, hyper-converged infrastructure, NGAF firewall, HCI solutions, network security, infrastructure consolidation",
      canonical: "https://s2mgt.com/vendors/sangfor",
    }),
});
