import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import WebPageSchema from "@/components/WebPageSchema";
import ServiceSchema from "@/components/ServiceSchema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Clock, Database, CheckCircle, Target } from "lucide-react";
const features = [{
  icon: Shield,
  title: "Data Encryption",
  description: "Data encryption, in flight, between the source and the target"
}, {
  icon: Zap,
  title: "Automatic Failover",
  description: "Available automatic failover with server heartbeat monitor"
}, {
  icon: Database,
  title: "DNS Management",
  description: "Integrated DNS management"
}, {
  icon: Target,
  title: "Compression Support",
  description: "Support compression to minimize network impact"
}, {
  icon: Clock,
  title: "Bandwidth Throttling",
  description: "Available bandwidth throttling options"
}, {
  icon: CheckCircle,
  title: "Comprehensive API",
  description: "A comprehensive API for integration"
}, {
  icon: Shield,
  title: "Alerting & Reporting",
  description: "Alerting and reporting features"
}, {
  icon: Target,
  title: "Non-Disruptive Testing",
  description: "Easy, non-disruptive testing"
}];
const deliverables = [{
  icon: Zap,
  title: "No delays, no data loss",
  description: "Continuous replication ensures zero data loss and rapid recovery"
}, {
  icon: Clock,
  title: "Rapid failovers prevent downtime",
  description: "Instant failover capabilities minimize business disruption"
}, {
  icon: Shield,
  title: "Negligible performance impact",
  description: "Lightweight solution that doesn't burden primary systems"
}, {
  icon: Database,
  title: "Physical systems support",
  description: "Comprehensive support for diverse IT environments"
}];
export default function DisasterRecovery() {
  return <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="Enterprise Disaster Recovery Solutions – UAE, KSA & MENA | S2 Management"
        description="Comprehensive disaster recovery and business continuity solutions across MENA. Advanced DR orchestration, automated failover, RTO optimization, and 24/7 monitoring for enterprise clients in UAE, KSA, and Middle East."
        keywords="disaster recovery solutions UAE, business continuity planning KSA, DR orchestration MENA, automated failover, backup and recovery, RTO optimization Middle East, disaster recovery services, enterprise DR solutions"
        canonicalUrl="https://s2mgt.com/solutions/disaster-recovery"
        ogType="article"
      />
      <WebPageSchema
        title="Enterprise Disaster Recovery Solutions"
        description="Comprehensive disaster recovery and business continuity planning services"
        url="https://s2mgt.com/solutions/disaster-recovery"
        pageType="Service"
        breadcrumbs={[
          { name: "Home", url: "https://s2mgt.com/" },
          { name: "Solutions", url: "https://s2mgt.com/solutions" },
          { name: "Disaster Recovery", url: "https://s2mgt.com/solutions/disaster-recovery" }
        ]}
      />
      <ServiceSchema
        serviceName="Disaster Recovery Solutions"
        description="Enterprise disaster recovery planning, DR orchestration, and business continuity services"
        url="https://s2mgt.com/solutions/disaster-recovery"
        features={[
          "DR Orchestration & Automation",
          "Business Continuity Planning",
          "Automated Failover",
          "RTO/RPO Optimization",
          "24/7 Monitoring",
          "Recovery Testing"
        ]}
        category="Disaster Recovery Services"
      />
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-4 relative overflow-hidden md:py-[55px]">
          <div className="container mx-auto px-2 md:px-4">
            <div className="mx-auto">
              {/* Floating Background Container with Gradient Border */}
              <div className="relative p-0.5 rounded-2xl bg-gradient-to-r from-primary via-blue-500 to-secondary">
                <div className="bg-slate-800/95 backdrop-blur-sm rounded-2xl shadow-2xl p-4 md:p-6">
                  <div className="max-w-6xl mx-auto pl-8">
                    <div className="grid lg:grid-cols-2 gap-4 items-center justify-items-start">
                    {/* Left Content */}
                    <div>
                      <Badge variant="outline" className="mb-3 border-primary/40 text-primary bg-primary/10">
                        Data Protection Solutions
                      </Badge>
                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Disaster Recovery
                      </h1>
                      <p className="text-base md:text-lg text-slate-200 mb-4 leading-relaxed">
                        Ensure maximum uptime for your Windows and Linux servers with comprehensive DR solutions featuring continuous replication and automated failover.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button size="default" className="text-base px-6 relative border-2 border-transparent bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300" onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=Disaster%20Recovery%20Consultation', '_blank')}>
                          <span className="relative z-10">Schedule Consultation</span>
                          <div className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                        </Button>
                      </div>
                    </div>
                    
                    {/* Right Image Placeholder */}
                    <div className="relative flex justify-center lg:justify-start lg:pl-8">
                      <div className="w-96 h-72 bg-gradient-to-br from-primary/20 via-blue-500/20 to-secondary/20 rounded-lg flex items-center justify-center border border-white/10 px-[11px] mx-[60px]">
                        
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-[11px]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed mb-6">
                    IT organizations face various causes of downtime, ranging from infrequent natural disasters to common issues like user errors, cyberattacks, or patching problems, ensuring that some systems will experience downtime annually. The financial impact of downtime can be substantial, costing thousands of dollars per hour for revenue-generating systems and leading to significant productivity losses for business systems.
                  </p>
                  <p className="text-lg leading-relaxed">
                    DR tools help IT organizations ensure maximum uptime for their Windows and Linux servers by preventing data loss and downtime. It achieves this through continuous replication, maintaining a secondary copy without burdening the primary system or network. The DR solution supports diverse IT environments, including physical, virtual, and cloud-based source systems and target environments, making it a comprehensive replication choice for mixed IT infrastructures.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Features</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <feature.icon className="h-8 w-8 text-primary" />
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
          </div>
        </section>

        {/* What We Deliver Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">What We Deliver</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {deliverables.map((item, index) => <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <item.icon className="h-8 w-8 text-teal-500" />
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
          </div>
        </section>

        {/* Ideal For & Key Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Ideal For */}
                <div>
                  <Card className="border-blue-200 bg-blue-50/50">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3 text-blue-700">
                        <Target className="h-6 w-6" />
                        <span>Ideal For</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Organizations with critical business operations</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Companies requiring minimal downtime</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Enterprises with mixed IT environments</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Businesses needing compliance adherence</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Key Benefits */}
                <div>
                  <Card className="border-teal-200 bg-teal-50/50">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3 text-teal-700">
                        <CheckCircle className="h-6 w-6" />
                        <span>Key Benefits</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span>Continuous data replication with zero data loss</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span>Automated failover and recovery processes</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span>Minimal performance impact on production systems</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span>Support for diverse IT environments</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Card>
                <CardContent className="p-12">
                  <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Business?</h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Ensure your infrastructure is protected with our comprehensive disaster recovery solutions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg">Get DR Assessment</Button>
                    <Button variant="outline" size="lg">Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
}