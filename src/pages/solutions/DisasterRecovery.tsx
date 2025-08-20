import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
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
      <SEOHead title="Disaster Recovery Solutions MENA - Business Continuity & Data Protection | S2 Solutions" description="Comprehensive disaster recovery solutions for MENA region. Ensure maximum uptime for Windows and Linux servers with continuous replication, automated failover, and comprehensive DR tools." keywords="disaster recovery MENA, business continuity UAE, DR solutions Middle East, server replication, automated failover, data protection Saudi Arabia, enterprise DR tools" canonicalUrl="https://s2mgt.com/solutions/disaster-recovery" />
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 relative overflow-hidden min-h-screen flex items-center justify-center">
          {/* Animated background particles */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `
                  radial-gradient(2px 2px at 20px 30px, rgba(74, 144, 226, 0.3), transparent),
                  radial-gradient(2px 2px at 40px 70px, rgba(74, 144, 226, 0.2), transparent),
                  radial-gradient(1px 1px at 90px 40px, rgba(74, 144, 226, 0.4), transparent),
                  radial-gradient(1px 1px at 130px 80px, rgba(74, 144, 226, 0.3), transparent)
                `,
                backgroundRepeat: 'repeat',
                backgroundSize: '150px 150px',
                animation: 'float 20s infinite linear'
              }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              {/* Hero Container */}
              <div className="relative bg-slate-900/90 border-2 border-blue-500 rounded-2xl p-6 md:p-12 backdrop-blur-sm shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                
                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
                  {/* Left Content */}
                  <div className="space-y-6">
                    <Badge 
                      variant="outline" 
                      className="border-blue-500/50 text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-400 hover:scale-105 transition-all duration-300 px-4 py-2 relative overflow-hidden group/badge"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/badge:translate-x-full transition-transform duration-500" />
                      <span className="relative">Disaster Recovery Solution</span>
                    </Badge>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      <span 
                        className="bg-gradient-to-r from-blue-400 via-blue-500 to-green-400 bg-clip-text text-transparent animate-pulse hover:scale-105 transition-transform duration-300 cursor-default inline-block"
                        style={{
                          backgroundSize: '300% 300%',
                          animation: 'gradientShift 4s ease-in-out infinite'
                        }}
                      >
                        Carbonite Availability
                      </span>
                    </h1>
                    
                    <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-lg">
                      Ensure maximum uptime for your Windows and Linux servers with comprehensive DR solutions featuring continuous replication and automated failover.
                    </p>
                    
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 relative overflow-hidden group/btn px-8 py-3 text-lg font-semibold w-full sm:w-auto"
                      onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=Disaster%20Recovery%20Consultation', '_blank')}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500" />
                      <span className="relative">Schedule Consultation</span>
                    </Button>
                  </div>
                  
                  {/* Right Media Section */}
                  <div className="order-first lg:order-last">
                    <div className="relative bg-gradient-to-br from-slate-800 to-slate-700 border border-blue-500/20 rounded-xl overflow-hidden group/video hover:border-blue-500 transition-all duration-400 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20">
                      {/* Video Container */}
                      <div className="absolute inset-0 p-0 m-0">
                        <iframe 
                          src="https://player.vimeo.com/video/724980545?badge=0&autopause=0&player_id=0&app_id=58479&controls=1&title=0&byline=0&portrait=0" 
                          className="w-full h-full border-none rounded-xl object-cover"
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                          title="Disaster Recovery Solutions"
                          style={{ margin: 0, padding: 0, display: 'block' }}
                        />
                      </div>
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-45 from-blue-500/10 via-transparent to-blue-500/10 opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 pointer-events-none" />
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