import { createFileRoute } from "@tanstack/react-router";
import Clients from "@/pages/Clients";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/clients")({
  component: Clients,
  head: () =>
    seo({
      title: "Our Clients - S2 Management Solutions",
      description: "Discover the diverse range of clients we serve across healthcare, finance, education, and manufacturing sectors with our data protection and cybersecurity solutions.",
      keywords: "S2 clients, cybersecurity clients, data protection customers, IT solutions clients",
      canonical: "https://s2mgt.com/clients",
    }),
});
