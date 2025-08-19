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
          <section className="pt-32 pb-20 bg-background relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/lovable-uploads/1f2a065f-da31-4139-963d-9275169e01e8.png)' }}>
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
                <div className="lg:col-span-2">
                  <h1 className="text-5xl font-bold mb-2 leading-tight text-cyan-300">
                    TransitionManager®
                  </h1>
                  <div className="text-4xl font-semibold mb-2 text-white leading-tight">
                    One Platform.
                  </div>
                  <div className="text-4xl font-semibold mb-8 text-white leading-tight">
                    Three Core Capabilities.
                  </div>
                  
                  <p className="text-base text-white/90 mb-4 leading-relaxed font-medium">
                    The platform built to provide clear <span className="font-semibold text-cyan-300">insight</span> into IT and let teams <span className="font-semibold text-lime-300">orchestrate</span>, <span className="font-semibold text-orange-300">accelerate</span> and de-risk migration, modernization, and other IT transformation initiatives.
                  </p>
                  
                  <p className="text-base text-white/90 leading-relaxed font-medium">
                    <strong className="text-white">TransitionManager's</strong> three modules address the unique challenges of complex migrations, modernizations, and transformations.
                  </p>
                </div>
                
                <div className="flex flex-col gap-4">
                  <Button 
                    className="h-16 text-left justify-start text-white font-semibold text-base relative"
                    style={{ backgroundColor: '#00C6F8' }}
                    onClick={() => document.getElementById('insight')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                  >
                    INSIGHT
                    <span className="absolute right-5 text-xl">↓</span>
                  </Button>
                  <Button 
                    className="h-16 text-left justify-start text-white font-semibold text-base relative"
                    style={{ backgroundColor: '#9DCF65' }}
                    onClick={() => document.getElementById('orchestrate')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                  >
                    ORCHESTRATE
                    <span className="absolute right-5 text-xl">↓</span>
                  </Button>
                  <Button 
                    className="h-16 text-left justify-start text-white font-semibold text-base relative"
                    style={{ backgroundColor: '#F69B5F' }}
                    onClick={() => document.getElementById('accelerate')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                  >
                    ACCELERATE
                    <span className="absolute right-5 text-xl">↓</span>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Three Core Capabilities */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
                {/* Insight */}
                <Card id="insight" className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-background">
                  <CardContent className="p-10">
                    <div className="flex items-center mb-6">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4"
                        style={{ backgroundColor: '#00C6F8' }}
                      >
                        📊
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        TransitionManager Insight
                      </h3>
                    </div>
                    <ul className="text-left space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="font-bold mr-3 mt-0.5" style={{ color: '#00C6F8' }}>•</span>
                        Integrate with data sources – CMDB, DCIM, ITSM, etc.*
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-3 mt-0.5" style={{ color: '#00C6F8' }}>•</span>
                        Capture vital data; make it immediately actionable
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-3 mt-0.5" style={{ color: '#00C6F8' }}>•</span>
                        Consolidate data, gain a single pane of glass view
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-3 mt-0.5" style={{ color: '#00C6F8' }}>•</span>
                        Breakdown IT and business silos – no user count limits
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-3 mt-0.5" style={{ color: '#00C6F8' }}>•</span>
                        Track relevant IT and business data for all IT assets
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-3 mt-0.5" style={{ color: '#00C6F8' }}>•</span>
                        Visualize dependency connections between all assets
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-3 mt-0.5" style={{ color: '#00C6F8' }}>•</span>
                        Enterprise-wide insight aggregate of multiple systems of record
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-3 mt-0.5" style={{ color: '#00C6F8' }}>•</span>
                        Accurate and actionable asset information
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-3 mt-0.5" style={{ color: '#00C6F8' }}>•</span>
                        Scenario-based analysis – faster adoption of emerging tech
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Orchestrator */}
                <Card id="orchestrate" className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-background">
                  <CardContent className="p-10">
                    <div className="flex items-center mb-6">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4"
                        style={{ backgroundColor: '#9DCF65' }}
                      >
                        🎯
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        TransitionManager Orchestrate
                      </h3>
                    </div>
                    <ul className="text-left space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="font-bold mr-3 mt-0.5" style={{ color: '#9DCF65' }}>•</span>
                        Proven methodologies – repeatable, consistent results
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-3 mt-0.5" style={{ color: '#9DCF65' }}>•</span>
                        Visualize apps, infrastructure, and their dependencies
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-3 mt-0.5" style={{ color: '#9DCF65' }}>•</span>
                        Analyze dependencies, identify gaps and conflicts
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-3 mt-0.5" style={{ color: '#9DCF65' }}>•</span>
                        Efficient event planning inherently mitigates risks
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-3 mt-0.5" style={{ color: '#9DCF65' }}>•</span>
                        Generate dynamic workflows that scale automatically
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-3 mt-0.5" style={{ color: '#9DCF65' }}>•</span>
                        Sequence automated and manual tasks precisely
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-3 mt-0.5" style={{ color: '#9DCF65' }}>•</span>
                        Identify repeatable planning strategies – accelerate efforts
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-3 mt-0.5" style={{ color: '#9DCF65' }}>•</span>
                        Manage tasks real time for all asset types
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-3 mt-0.5" style={{ color: '#9DCF65' }}>•</span>
                        Understand and track against critical path
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Accelerate */}
                <Card id="accelerate" className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-background">
                  <CardContent className="p-10">
                    <div className="flex items-center mb-6">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4"
                        style={{ backgroundColor: '#F69B5F' }}
                      >
                        ⚡
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        TransitionManager Accelerate
                      </h3>
                    </div>
                    <ul className="text-left space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="font-bold mr-3 mt-0.5" style={{ color: '#F69B5F' }}>•</span>
                        Accelerate migration projects – virtually eliminate risk
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-3 mt-0.5" style={{ color: '#F69B5F' }}>•</span>
                        Optimize resources, centralize data, collaborate real-time
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-3 mt-0.5" style={{ color: '#F69B5F' }}>•</span>
                        Enhance project experience and build team confidence
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-3 mt-0.5" style={{ color: '#F69B5F' }}>•</span>
                        Secure transformations with behind-firewall local app*
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-3 mt-0.5" style={{ color: '#F69B5F' }}>•</span>
                        Meet security compliance benchmarks – control your data
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-3 mt-0.5" style={{ color: '#F69B5F' }}>•</span>
                        An integrated, end-to-end toolchain of all disparate tools
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-3 mt-0.5" style={{ color: '#F69B5F' }}>•</span>
                        Launch each integrated task from a single platform
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-3 mt-0.5" style={{ color: '#F69B5F' }}>•</span>
                        Easy credential management for third-party tools
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-3 mt-0.5" style={{ color: '#F69B5F' }}>•</span>
                        Perform full audits for automated activities
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-3 mt-0.5" style={{ color: '#F69B5F' }}>•</span>
                        Optimize expert time by simplifying once-expert responsibilities
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Overview Section */}
          <section className="py-20 bg-background text-center">
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