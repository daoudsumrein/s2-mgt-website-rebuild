import { createFileRoute } from "@tanstack/react-router";
import EmailEncryption from "@/pages/solutions/EmailEncryption";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/solutions/email-encryption")({
  component: EmailEncryption,
  head: () =>
    seo({
      title: "Email Encryption Solutions | Secure Communications MENA",
      description: "Enterprise email encryption solutions for MENA region. End-to-end encryption, digital signatures, and secure document exchange for business communications.",
      keywords: "email encryption MENA, secure email UAE, encrypted communications Middle East, email security Saudi Arabia",
      canonical: "https://s2mgt.com/solutions/email-encryption",
    }),
});
