import { createFileRoute } from "@tanstack/react-router";
import NotFound from "@/pages/NotFound";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/$")({
  component: NotFound,
  head: () =>
    seo({
      title: "Page Not Found - S2 Management Solutions",
      description: "The page you're looking for doesn't exist. Return to S2 Management Solutions homepage for IT transformation and cybersecurity solutions.",
      keywords: "404 error, page not found, S2 Management Solutions",
    }),
});
