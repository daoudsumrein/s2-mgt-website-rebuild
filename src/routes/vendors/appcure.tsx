import { createFileRoute } from "@tanstack/react-router";
import AppCUREVendorPage from "@/pages/vendors/AppCUREVendor";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/vendors/appcure")({
  component: AppCUREVendorPage,
  head: () =>
    seo({
      title: "appCURE Application Modernization Partner | S2 Management",
      description: "S2 delivers appCURE application modernization in MENA. Capture, transform and deploy legacy Windows applications with the CURE methodology for cloud, VDI and modern desktops.",
      keywords: "appCURE MENA, application modernization UAE, Windows application migration Saudi Arabia, CURE methodology, application packaging, VDI migration Middle East",
      canonical: "https://s2mgt.com/vendors/appcure",
    }),
});
