import { createFileRoute } from "@tanstack/react-router";
import AppModernization from "@/pages/solutions/AppModernization";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/solutions/app-modernization")({
  component: AppModernization,
  head: () =>
    seo({
      title: "Application Modernization & Digital Transformation MENA | S2 Solutions",
      description: "Legacy application modernization and digital transformation services for MENA enterprises. Expert IT transformation, cloud migration, and application orchestration across UAE, Saudi Arabia, and Middle East.",
      keywords: "application modernization MENA, digital transformation UAE, IT transformation Middle East, legacy modernization Saudi Arabia, cloud migration, app modernization, digital transformation services",
      canonical: "https://s2mgt.com/solutions/app-modernization",
    }),
});
