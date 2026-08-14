import { createFileRoute } from "@tanstack/react-router";
import SecureCloud from "@/pages/solutions/SecureCloud";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/solutions/secure-cloud")({
  component: SecureCloud,
  head: () =>
    seo({
      title: "OpenText Secure Cloud for MSPs | Backup, Endpoint & MDR | S2",
      description: "Launch a white-label Secure Cloud stack with OpenText Secure Cloud backup, Webroot endpoint and DNS protection, email continuity, and Pilr MDR for MSPs in MENA.",
      keywords: "OpenText Secure Cloud MENA, MSP secure cloud UAE, cloud to cloud backup Saudi Arabia, email continuity Middle East, Webroot endpoint protection, Pilr MDR, white-label MSP stack",
      canonical: "https://s2mgt.com/solutions/secure-cloud",
    }),
});
