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
        title="TransitionManager® - IT Transformation Platform | S2 Management"
        description="The platform built to provide clear insight into IT and let teams orchestrate, accelerate and de-risk migration, modernization, and other IT transformation initiatives."
        keywords="TransitionManager, IT transformation, migration planning, dependency mapping, orchestration, TDS partner"
        canonicalUrl="https://s2mgt.com/vendors/tds"
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          {/* Hero Section */}
          <section className="pt-20 pb-20 text-center bg-muted/30">
            <div className="container mx-auto px-4">
              <h1 className="text-5xl font-bold mb-4 text-foreground">
                TransitionManager®
              </h1>
              <div className="text-2xl font-semibold mb-4 text-primary">
                One Platform. Three Core Capabilities.
              </div>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                The platform built to provide clear insight into IT and let teams orchestrate, accelerate and de-risk migration, modernization, and other IT transformation initiatives.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <a href="#contact">
                  Get Started
                </a>
              </Button>
            </div>
          </section>

          {/* Three Core Capabilities */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
                Three Core Capabilities
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
                {/* Insight */}
                <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4" style={{ borderTopColor: '#00C6F8' }}>
                  <CardContent className="p-12">
                    <div className="w-40 h-40 mx-auto mb-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00C6F8', opacity: 0.1 }}>
                      <img 
                        src="https://www.transitionaldata.com/uploads/2025/02/TransitionManager-Insight.png" 
                        alt="TransitionManager Insight" 
                        className="w-32 h-32 object-contain"
                      />
                    </div>
                    <h3 className="text-2xl font-semibold mb-6" style={{ color: '#00C6F8' }}>
                      Insight
                    </h3>
                    <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                      Gain comprehensive visibility into your IT environment with enterprise-wide insight aggregation from multiple systems of record.
                    </p>
                    <ul className="text-left space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-3 mt-0.5">•</span>
                        Integrate with data sources – CMDB, DCIM, ITSM, etc.
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-3 mt-0.5">•</span>
                        Capture vital data; make it immediately actionable
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-3 mt-0.5">•</span>
                        Consolidate data, gain a single pane of glass view
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-3 mt-0.5">•</span>
                        Breakdown IT and business silos – no user count limits
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-3 mt-0.5">•</span>
                        Track relevant IT and business data for all IT assets
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-3 mt-0.5">•</span>
                        Visualize dependency connections between all assets
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-3 mt-0.5">•</span>
                        Scenario-based analysis for faster tech adoption
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Orchestrator */}
                <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4" style={{ borderTopColor: '#9DCF65' }}>
                  <CardContent className="p-12">
                    <div className="w-40 h-40 mx-auto mb-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#9DCF65', opacity: 0.1 }}>
                      <img 
                        src="https://www.transitionaldata.com/uploads/2025/02/TransitionManager-Orchestrate-Green.png" 
                        alt="TransitionManager Orchestrator" 
                        className="w-32 h-32 object-contain"
                      />
                    </div>
                    <h3 className="text-2xl font-semibold mb-6" style={{ color: '#9DCF65' }}>
                      Orchestrator
                    </h3>
                    <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                      Leverage proven methodologies for repeatable, consistent results with intelligent workflow generation and task sequencing.
                    </p>
                    <ul className="text-left space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-3 mt-0.5">•</span>
                        Proven methodologies – repeatable, consistent results
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-3 mt-0.5">•</span>
                        Visualize apps, infrastructure, and their dependencies
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-3 mt-0.5">•</span>
                        Analyze dependencies, identify gaps and conflicts
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-3 mt-0.5">•</span>
                        Efficient event planning inherently mitigates risks
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-3 mt-0.5">•</span>
                        Generate dynamic workflows that scale automatically
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-3 mt-0.5">•</span>
                        Sequence automated and manual tasks precisely
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-3 mt-0.5">•</span>
                        Understand and track against critical path
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Accelerate */}
                <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4" style={{ borderTopColor: '#F69B5F' }}>
                  <CardContent className="p-12">
                    <div className="w-40 h-40 mx-auto mb-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F69B5F', opacity: 0.1 }}>
                      <img 
                        src="https://www.transitionaldata.com/uploads/2025/02/TransitionManager-Accelerate-Orange.png" 
                        alt="TransitionManager Accelerate" 
                        className="w-32 h-32 object-contain"
                      />
                    </div>
                    <h3 className="text-2xl font-semibold mb-6" style={{ color: '#F69B5F' }}>
                      Accelerate
                    </h3>
                    <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                      Accelerate migration projects while virtually eliminating risk through optimized resources and real-time collaboration.
                    </p>
                    <ul className="text-left space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-3 mt-0.5">•</span>
                        Accelerate migration projects – virtually eliminate risk
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-3 mt-0.5">•</span>
                        Optimize resources, centralize data, collaborate real-time
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-3 mt-0.5">•</span>
                        Enhance project experience and build team confidence
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-3 mt-0.5">•</span>
                        Secure transformations with behind-firewall local app
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-3 mt-0.5">•</span>
                        Meet security compliance benchmarks
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-3 mt-0.5">•</span>
                        Integrated, end-to-end toolchain of disparate tools
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-3 mt-0.5">•</span>
                        Easy credential management for third-party tools
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-3 mt-0.5">•</span>
                        Perform full audits for automated activities
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Overview Section */}
          <section className="py-20 bg-muted/30 text-center">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-semibold mb-8 text-foreground">
                  Transform Your IT Infrastructure with Confidence
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  TransitionManager's three integrated modules address the unique challenges of complex migrations, modernizations, and transformations, providing enterprise-wide visibility and control over your IT transformation journey.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  As your trusted regional distributor in the UAE, we provide localized expertise, comprehensive training, and ongoing support to ensure your IT transformation success across the Middle East region.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 bg-card text-card-foreground">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-semibold text-center mb-12 text-foreground">
                Ready to Transform Your IT?
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-primary">
                    Connect with Our UAE Team
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    As your regional TransitionManager® distributor in the United Arab Emirates, we're committed to helping organizations across the Middle East achieve successful IT transformations.
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Our expert team understands the unique challenges facing businesses in the region and provides comprehensive support throughout your transformation journey.
                  </p>
                  <p className="font-semibold mb-4 text-foreground">Our Services:</p>
                  <div className="text-muted-foreground space-y-2">
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