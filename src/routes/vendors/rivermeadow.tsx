import { createFileRoute } from "@tanstack/react-router";
import RiverMeadowPage from "@/pages/vendors/RiverMeadow";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/vendors/rivermeadow")({
  component: RiverMeadowPage,
  head: () =>
    seo({
      title: "RiverMeadow Workload Mobility Platform | S2 Management",
      description: "Automated workload migration platform enabling fast, secure movement of Windows and Linux servers to any cloud environment with minimal downtime.",
      keywords: "RiverMeadow partner, cloud migration, workload mobility, OS modernization, automated migration, disaster recovery",
      canonical: "https://s2mgt.com/vendors/rivermeadow",
    }),
});
