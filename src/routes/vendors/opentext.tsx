import { createFileRoute } from "@tanstack/react-router";
import OpenTextPage from "@/pages/vendors/OpenText";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/vendors/opentext")({
  component: OpenTextPage,
  head: () =>
    seo({
      title: "Official OpenText Distributor in Middle East, GCC & Africa",
      description: "Official OpenText distributor for the Middle East, GCC & Africa. We specialise in secure cloud, business continuity, and seamless migrations with expert regional support.",
      keywords: "official opentext distributor mena, opentext partner saudi arabia uae, opentext cybersecurity solutions gcc, opentext distributor middle east, opentext enterprise solutions mena region",
      canonical: "https://s2mgt.com/vendors/opentext",
    }),
});
