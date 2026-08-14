import { createFileRoute } from "@tanstack/react-router";
import TDSPage from "@/pages/vendors/TDS";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/vendors/tds")({
  component: TDSPage,
  head: () =>
    seo({
      title: "TDS TransitionManager | Official Partner UAE & KSA",
      description: "Exclusive TDS TransitionManager partner for the Middle East, including UAE, Saudi Arabia & GCC. Plan and orchestrate IT migrations with certified support, dependency mapping & automation.",
      keywords: "TDS TransitionManager, TransitionManager UAE, TransitionManager Saudi Arabia, TransitionManager GCC partner, IT migration orchestration, dependency mapping software, digital transformation UAE, data center migration Saudi Arabia, IT modernization GCC",
      canonical: "https://s2mgt.com/vendors/tds",
      ogImage: "https://s2mgt.com/src/assets/transitionmanager-insight.png",
    }),
});
