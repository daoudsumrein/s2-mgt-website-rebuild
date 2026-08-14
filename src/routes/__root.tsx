import { useEffect } from "react";
import type { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts,
  useRouter,
} from "@tanstack/react-router";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import NotFound from "@/pages/NotFound";
import { reportLovableError } from "@/lib/lovable-error-reporting";

import appCss from "../styles.css?url";

const organizationJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "S2 Management Solutions",
  alternateName: "S2 Solutions",
  url: "https://s2mgt.com",
  logo: "https://s2mgt.com/brand/s2-logo.png",
  description:
    "S2 Management Solutions is the official MENA distributor for OpenText, TDS, appCURE, NAKIVO, and Arrosoft. We deliver enterprise backup & replication, data protection, disaster recovery orchestration, business continuity, and IT resilience solutions.",
  foundingDate: "2013",
  location: [
    {
      "@type": "Place",
      name: "UAE Office",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Office 101, Building 10, Dubai Internet City",
        addressLocality: "Dubai",
        addressCountry: "United Arab Emirates",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "25.096883822536483",
        longitude: "55.16362955334217",
      },
      telephone: "+97141234567",
    },
    {
      "@type": "Place",
      name: "Saudi Arabia Office",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Building No. 7036, Saiyda St., P.O. Box: 12796",
        addressLocality: "Riyadh",
        addressCountry: "Saudi Arabia",
      },
      geo: { "@type": "GeoCoordinates", latitude: "24.7136", longitude: "46.6753" },
      telephone: "+966550846532",
    },
  ],
  areaServed: [
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "Bahrain" },
    { "@type": "Country", name: "Kuwait" },
    { "@type": "Country", name: "Oman" },
    { "@type": "Country", name: "Qatar" },
    { "@type": "Country", name: "Egypt" },
    { "@type": "Country", name: "Jordan" },
    { "@type": "Country", name: "Lebanon" },
    { "@type": "Country", name: "Iraq" },
    { "@type": "Country", name: "Syria" },
    { "@type": "Country", name: "Yemen" },
    { "@type": "Country", name: "Palestine" },
    { "@type": "Country", name: "Libya" },
    { "@type": "Country", name: "Tunisia" },
    { "@type": "Country", name: "Algeria" },
    { "@type": "Country", name: "Morocco" },
    { "@type": "Country", name: "Sudan" },
    { "@type": "Country", name: "Mauritania" },
  ],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: "25.096883822536483",
      longitude: "55.16362955334217",
    },
    geoRadius: "4000",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: "+97141234567",
      areaServed: "AE",
      url: "https://s2mgt.com/contact",
    },
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: "+966550846532",
      areaServed: "SA",
      url: "https://s2mgt.com/contact",
    },
    { "@type": "ContactPoint", contactType: "customer support", url: "https://s2mgt.com/support" },
    { "@type": "ContactPoint", contactType: "billing", url: "https://s2mgt.com/billing" },
  ],
  sameAs: [
    "https://www.linkedin.com/company/s2management/",
    "https://www.opentext.com",
    "https://www.transitionaldata.com/",
    "https://www.appcure.io",
    "https://www.nakivo.com",
    "https://www.arrosoft.com",
  ],
  brand: [
    { "@type": "Brand", name: "OpenText" },
    { "@type": "Brand", name: "TDS (TransitionManager)" },
    { "@type": "Brand", name: "appCURE" },
    { "@type": "Brand", name: "NAKIVO" },
    { "@type": "Brand", name: "Arrosoft" },
  ],
  knowsAbout: [
    "OpenText Carbonite",
    "Carbonite",
    "Carbonite Availability",
    "Opentext Availability",
    "Carbonite Migrate",
    "DoubleTake",
    "TDS TransitionManager",
    "appCURE application modernization",
    "NAKIVO Backup & Replication",
    "Arrosoft data protection solutions",
    "backup and replication",
    "data protection",
    "disaster recovery orchestration",
    "business continuity",
    "IT resilience",
    "cybersecurity solutions",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IT Solutions and Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Backup & Replication",
          description: "Enterprise-grade backup and replication solutions for business continuity.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Disaster Recovery Orchestration",
          description: "Automated DR orchestration and resilience planning for enterprises.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Data Protection & Cybersecurity",
          description: "Comprehensive data protection and enterprise cybersecurity solutions.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "IT Transformation",
          description: "Digital modernization and IT infrastructure transformation services.",
        },
      },
    ],
  },
});

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "AE-DU" },
      { name: "geo.placename", content: "Dubai, UAE" },
      { name: "geo.position", content: "25.276987;55.296249" },
      { name: "ICBM", content: "25.276987, 55.296249" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:site_name", content: "S2 Management Solutions" },
      { property: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "icon",
        href: "/lovable-uploads/fe3bd2a5-dd8f-4976-ae4b-b206b6aec68e.png",
        type: "image/png",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap",
      },
    ],
    scripts: [
      { src: "https://www.google.com/recaptcha/api.js", async: true, defer: true },
      { type: "application/ld+json", children: organizationJsonLd },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
  errorComponent: RootErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ScrollToTop />
        <Outlet />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

function RootErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  console.error(error);

  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-6">
      <div className="w-full max-w-md text-center">
        <h1 className="mb-2 text-xl font-semibold text-foreground">This page didn't load</h1>
        <p className="mb-6 text-muted-foreground">
          Something went wrong on our end. You can try again or head back home.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <button
            className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
            onClick={() => {
              void router.invalidate();
              reset();
            }}
          >
            Try again
          </button>
          <a
            className="rounded-md border border-border bg-card px-4 py-2 text-foreground"
            href="/"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}