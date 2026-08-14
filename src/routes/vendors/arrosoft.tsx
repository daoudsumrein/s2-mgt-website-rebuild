import { createFileRoute } from "@tanstack/react-router";
import ArrosoftPage from "@/pages/vendors/Arrosoft";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/vendors/arrosoft")({
  component: ArrosoftPage,
  head: () =>
    seo({
      title: "Arrosoft - Data Security Solutions | S2 Technical Solutions",
      description: "Partner with Arrosoft for excellent data protection solutions and services. Redefining the standard in data security for your clients.",
      keywords: "Arrosoft, data security, data protection, cybersecurity solutions, S2 Technical Solutions",
      canonical: "https://s2mgt.com/vendors/arrosoft",
    }),
});
