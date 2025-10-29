import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function TDSPage() {
  return (
    <>
      <SEOHead
        title="TDS TransitionManager GCC | Official Partner for UAE & Saudi Arabia"
        description="Official TDS TransitionManager partner in the UAE, Saudi Arabia & GCC. Plan and orchestrate IT migrations with certified support, dependency mapping & automation."
        keywords="TDS TransitionManager, TransitionManager UAE, TransitionManager Saudi Arabia, TransitionManager GCC partner, IT migration orchestration, dependency mapping software, digital transformation UAE, data center migration Saudi Arabia, IT modernization GCC"
        canonicalUrl="https://s2mgt.com/vendors/tds"
        ogImage="https://s2mgt.com/src/assets/transitionmanager-insight.png"
        ogTitle="Official TDS TransitionManager Partner for GCC"
        ogDescription="Certified TransitionManager partner in UAE & Saudi Arabia offering migration planning, orchestration, and dependency mapping for enterprise IT modernization."
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          {/* Hero Section */}
          <section
            className="pt-24 sm:pt-32 pb-16 sm:pb-20 bg-background relative bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/lovable-uploads/1f2a065f-da31-4139-963d-9275169e01e8.png)" }}
          >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 items-center">
                <div className="lg:col-span-2">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 leading-tight text-cyan-300">
                    TransitionManager®
                  </h1>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-2 text-white leading-tight">
                    One Platform.
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8 text-white leading-tight">
                    Three Core Capabilities.
                  </div>

                  <p className="text-sm sm:text-base text-white/90 mb-4 leading-relaxed font-medium">
                    The platform built to provide clear <span className="font-semibold text-cyan-300">insight</span>{" "}
                    into IT and let teams <span className="font-semibold text-lime-300">orchestrate</span>,{" "}
                    <span className="font-semibold text-orange-300">accelerate</span> and de-risk migration,
                    modernization, and other IT transformation initiatives.
                  </p>

                  <p className="text-sm sm:text-base text-white/90 leading-relaxed font-medium">
                    <strong className="text-white">TransitionManager's</strong> three modules address the unique
                    challenges of complex migrations, modernizations, and transformations.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:gap-4 mt-6 lg:mt-0">
                  <Button
                    className="h-12 sm:h-14 lg:h-16 text-left justify-start text-white font-semibold text-sm sm:text-base relative px-4 sm:px-6"
                    style={{ backgroundColor: "#00C6F8" }}
                    onClick={() =>
                      document.getElementById("insight")?.scrollIntoView({ behavior: "smooth", block: "center" })
                    }
                  >
                    INSIGHT
                    <span className="absolute right-3 sm:right-5 text-lg sm:text-xl">↓</span>
                  </Button>
                  <Button
                    className="h-12 sm:h-14 lg:h-16 text-left justify-start text-white font-semibold text-sm sm:text-base relative px-4 sm:px-6"
                    style={{ backgroundColor: "#9DCF65" }}
                    onClick={() =>
                      document.getElementById("orchestrate")?.scrollIntoView({ behavior: "smooth", block: "center" })
                    }
                  >
                    ORCHESTRATE
                    <span className="absolute right-3 sm:right-5 text-lg sm:text-xl">↓</span>
                  </Button>
                  <Button
                    className="h-12 sm:h-14 lg:h-16 text-left justify-start text-white font-semibold text-sm sm:text-base relative px-4 sm:px-6"
                    style={{ backgroundColor: "#F69B5F" }}
                    onClick={() =>
                      document.getElementById("accelerate")?.scrollIntoView({ behavior: "smooth", block: "center" })
                    }
                  >
                    ACCELERATE
                    <span className="absolute right-3 sm:right-5 text-lg sm:text-xl">↓</span>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Three Core Capabilities */}
          <section className="py-16 sm:py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                {/* Insight */}
                <div
                  id="insight"
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div
                    className="px-6 py-5 flex items-center justify-center"
                    style={{ backgroundColor: "white", borderBottom: "3px solid #00C6F8" }}
                  >
                    <img
                      src="/lovable-uploads/transitionmanager-insight.png"
                      alt="TransitionManager Insight"
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-start text-gray-700 text-sm leading-relaxed">
                        <span className="font-bold mr-3 mt-1 text-lg" style={{ color: "#00C6F8" }}>
                          •
                        </span>
                        Integrate with data sources – CMDB, DCIM, ITSM, etc.*
                      </li>
                      <li className="flex items-start text-gray-700 text-sm leading-relaxed">
                        <span className="font-bold mr-3 mt-1 text-lg" style={{ color: "#00C6F8" }}>
                          •
                        </span>
                        Capture vital data; make it immediately actionable
                      </li>
                      <li className="flex items-start text-gray-700 text-sm leading-relaxed">
                        <span className="font-bold mr-3 mt-1 text-lg" style={{ color: "#00C6F8" }}>
                          •
                        </span>
                        Consolidate data, gain a single pane of glass view
                      </li>
                      <li className="flex items-start text-gray-700 text-sm leading-relaxed">
                        <span className="font-bold mr-3 mt-1 text-lg" style={{ color: "#00C6F8" }}>
                          •
                        </span>
                        Breakdown IT and business silos – no user count limits
                      </li>
                      <li className="flex items-start text-gray-700 text-sm leading-relaxed">
                        <span className="font-bold mr-3 mt-1 text-lg" style={{ color: "#00C6F8" }}>
                          •
                        </span>
                        Track relevant IT and business data for all IT assets
                      </li>
                      <li className="flex items-start text-gray-700 text-sm leading-relaxed">
                        <span className="font-bold mr-3 mt-1 text-lg" style={{ color: "#00C6F8" }}>
                          •
                        </span>
                        Visualize dependency connections between all assets
                      </li>
                      <li className="flex items-start text-gray-700 text-sm leading-relaxed">
                        <span className="font-bold mr-3 mt-1 text-lg" style={{ color: "#00C6F8" }}>
                          •
                        </span>
                        Enterprise-wide insight aggregate of multiple systems of record
                      </li>
                      <li className="flex items-start text-gray-700 text-sm leading-relaxed">
                        <span className="font-bold mr-3 mt-1 text-lg" style={{ color: "#00C6F8" }}>
                          •
                        </span>
                        Accurate and actionable asset information
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Orchestrate */}
                <div
                  id="orchestrate"
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div
                    className="px-6 py-5 flex items-center justify-center"
                    style={{ backgroundColor: "white", borderBottom: "3px solid #9DCF65" }}
                  >
                    <img
                      src="/lovable-uploads/transitionmanager-orchestrate-green.png"
                      alt="TransitionManager Orchestrate"
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-start text-gray-700 text-sm leading-relaxed">
                        <span className="font-bold mr-3 mt-1 text-lg" style={{ color: "#9DCF65" }}>
                          •
                        </span>
                        Proven methodologies – repeatable, consistent results
                      </li>
                      <li className="flex items-start text-gray-700 text-sm leading-relaxed">
                        <span className="font-bold mr-3 mt-1 text-lg" style={{ color: "#9DCF65" }}>
                          •
                        </span>
                        Visualize apps, infrastructure, and their dependencies
                      </li>
                      <li className="flex items-start text-gray-700 text-sm leading-relaxed">
                        <span className="font-bold mr-3 mt-1 text-lg" style={{ color: "#9DCF65" }}>
                          •
                        </span>
                        Analyze dependencies, identify gaps and conflicts
                      </li>
                      <li className="flex items-start text-gray-700 text-sm leading-relaxed">
                        <span className="font-bold mr-3 mt-1 text-lg" style={{ color: "#9DCF65" }}>
                          •
                        </span>
                        Efficient event planning inherently mitigates risks
                      </li>
                      <li className="flex items-start text-gray-700 text-sm leading-relaxed">
                        <span className="font-bold mr-3 mt-1 text-lg" style={{ color: "#9DCF65" }}>
                          •
                        </span>
                        Generate dynamic workflows that scale automatically
                      </li>
                      <li className="flex items-start text-gray-700 text-sm leading-relaxed">
                        <span className="font-bold mr-3 mt-1 text-lg" style={{ color: "#9DCF65" }}>
                          •
                        </span>
                        Sequence automated and manual tasks precisely
                      </li>
                      <li className="flex items-start text-gray-700 text-sm leading-relaxed">
                        <span className="font-bold mr-3 mt-1 text-lg" style={{ color: "#9DCF65" }}>
                          •
                        </span>
                        Identify repeatable planning strategies – accelerate efforts
                      </li>
                      <li className="flex items-start text-gray-700 text-sm leading-relaxed">
                        <span className="font-bold mr-3 mt-1 text-lg" style={{ color: "#9DCF65" }}>
                          •
                        </span>
                        Understand and track against critical path
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Accelerate */}
                <div
                  id="accelerate"
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 md:col-span-2 lg:col-span-1"
                >
                  <div
                    className="px-6 py-5 flex items-center justify-center"
                    style={{ backgroundColor: "white", borderBottom: "3px solid #F69B5F" }}
                  >
                    <img
                      src="/lovable-uploads/transitionmanager-accelerate-orange.png"
                      alt="TransitionManager Accelerate"
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-start text-gray-700 text-sm leading-relaxed">
                        <span className="font-bold mr-3 mt-1 text-lg" style={{ color: "#F69B5F" }}>
                          •
                        </span>
                        Accelerate migration projects – virtually eliminate risk
                      </li>
                      <li className="flex items-start text-gray-700 text-sm leading-relaxed">
                        <span className="font-bold mr-3 mt-1 text-lg" style={{ color: "#F69B5F" }}>
                          •
                        </span>
                        Optimize resources, centralize data, collaborate real-time
                      </li>
                      <li className="flex items-start text-gray-700 text-sm leading-relaxed">
                        <span className="font-bold mr-3 mt-1 text-lg" style={{ color: "#F69B5F" }}>
                          •
                        </span>
                        Enhance project experience and build team confidence
                      </li>
                      <li className="flex items-start text-gray-700 text-sm leading-relaxed">
                        <span className="font-bold mr-3 mt-1 text-lg" style={{ color: "#F69B5F" }}>
                          •
                        </span>
                        Secure transformations with behind-firewall local app
                      </li>
                      <li className="flex items-start text-gray-700 text-sm leading-relaxed">
                        <span className="font-bold mr-3 mt-1 text-lg" style={{ color: "#F69B5F" }}>
                          •
                        </span>
                        Meet security compliance benchmarks – control your data
                      </li>
                      <li className="flex items-start text-gray-700 text-sm leading-relaxed">
                        <span className="font-bold mr-3 mt-1 text-lg" style={{ color: "#F69B5F" }}>
                          •
                        </span>
                        An integrated, end-to-end toolchain of all disparate tools
                      </li>
                      <li className="flex items-start text-gray-700 text-sm leading-relaxed">
                        <span className="font-bold mr-3 mt-1 text-lg" style={{ color: "#F69B5F" }}>
                          •
                        </span>
                        Launch each integrated task from a single platform
                      </li>
                      <li className="flex items-start text-gray-700 text-sm leading-relaxed">
                        <span className="font-bold mr-3 mt-1 text-lg" style={{ color: "#F69B5F" }}>
                          •
                        </span>
                        Easy credential management for third-party tools
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Overview Section */}
          <section className="py-16 sm:py-20 bg-background text-center">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8 text-foreground">
                  Transform Your IT Infrastructure with Confidence
                </h2>
                <div className="relative w-full aspect-video max-w-3xl mx-auto">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/e_W0pd2WS34?si=C5iM3PD4XPdAja3C&start=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="rounded-lg shadow-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-16 sm:py-20 bg-card text-card-foreground">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-8 sm:mb-12 text-foreground">
                Ready to Transform Your IT?
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-6xl mx-auto">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-primary">
                    Connect with Our UAE Team
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                    As your regional TransitionManager® distributor in the United Arab Emirates, we're committed to
                    helping organizations across the Middle East achieve successful IT transformations.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                    Our expert team understands the unique challenges facing businesses in the region and provides
                    comprehensive support throughout your transformation journey.
                  </p>
                  <p className="font-semibold mb-3 sm:mb-4 text-foreground text-sm sm:text-base">Our Services:</p>
                  <div className="text-sm sm:text-base text-muted-foreground space-y-1 sm:space-y-2">
                    <p>• Regional expertise and localized support</p>
                    <p>• Proven track record in IT transformations</p>
                    <p>• Comprehensive training and onboarding</p>
                    <p>• Ongoing technical support</p>
                    <p>• Customized implementation strategies</p>
                  </div>
                </div>
                <ContactForm />
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
