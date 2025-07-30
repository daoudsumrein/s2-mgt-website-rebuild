import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Clock, Shield, Target, Eye, Zap, Monitor, Workflow, Cloud, Database, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Continuous Monitoring and Response",
    description: "24/7 security monitoring and immediate response capabilities"
  },
  {
    icon: Shield,
    title: "Threat Neutralization",
    description: "Advanced threat detection and neutralization technologies"
  },
  {
    icon: Target,
    title: "Customizable Response Strategies",
    description: "Tailored response strategies to meet your specific security needs"
  },
  {
    icon: Eye,
    title: "Unified Visibility",
    description: "Complete visibility across your entire security infrastructure"
  },
  {
    icon: Cloud,
    title: "Cloud SIEM",
    description: "Cloud-native security information and event management"
  },
  {
    icon: Workflow,
    title: "More than 500 Integrations",
    description: "Extensive integration capabilities with existing security tools"
  },
  {
    icon: Zap,
    title: "SOAR for Customized Workflows",
    description: "Security orchestration and automated response workflows"
  },
  {
    icon: Users,
    title: "Human Factor",
    description: "SOC analysts and threat hunters for enhanced security operations"
  },
  {
    icon: Database,
    title: "Data Ingestion",
    description: "Comprehensive data collection and analysis capabilities"
  },
  {
    icon: Target,
    title: "Data Correlation and Alerting",
    description: "Advanced correlation engine for accurate threat detection"
  },
  {
    icon: Shield,
    title: "Response Actions",
    description: "Executes response actions such as isolating, remediating, or scanning devices"
  },
  {
    icon: Monitor,
    title: "Extensive OS and Platform Support",
    description: "Wide compatibility across operating systems and platforms"
  },
  {
    icon: Cloud,
    title: "Microsoft Solution Integration",
    description: "Deep integration with Microsoft security solutions"
  }
];

const deliverables = [
  "Simplified security operations",
  "Improved security outcomes",
  "Lowered security costs",
  "Cloud-native, scalable, flexible, and reliable solution",
  "In-house support and award-winning support",
  "Enhanced protection",
  "Manages business risk"
];

export default function MDR() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Managed Detection and Response (MDR) Services | MENA Cybersecurity"
        description="Professional MDR services for MENA enterprises. 24/7 security monitoring, threat hunting, and incident response by expert security analysts."
        keywords="MDR services MENA, managed detection response UAE, cybersecurity monitoring Middle East, security operations Saudi Arabia"
        canonicalUrl="https://s2mgt.com/solutions/mdr"
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
                        Cybersecurity Solutions
                      </Badge>
                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Managed Detection & Response
                      </h1>
                      <p className="text-base md:text-lg text-slate-200 mb-4 leading-relaxed">
                        Professional 24/7 security monitoring, threat hunting, and incident response by expert security analysts.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button size="default" className="text-base px-6 relative border-2 border-transparent bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300" onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=MDR%20Service%20Consultation', '_blank')}>
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
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Simplified Security Platform</h2>
              <Card>
                <CardContent className="p-8">
                  <p className="text-lg mb-6">
                    MDR is a platform designed to simplify security for endpoints. It provides threat detection, response, and management by integrating with security stacks, offering expert analysis, threat hunting, threat intelligence, and human response.
                  </p>
                  <p className="text-lg mb-6">
                    This cloud-native solution features a unified dashboard with multi-tenant support, powerful workflow automation, and over 500 integrations, making security operations simpler, outcomes improved, and costs lowered.
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
              {features.map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <feature.icon className="h-8 w-8 text-primary" />
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            </div>
          </div>
        </section>

        {/* What We Deliver Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">What We Deliver</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {deliverables.map((deliverable, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-teal-500 mt-1 flex-shrink-0" />
                        <span className="text-sm font-medium">{deliverable}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ideal For & Key Benefits */}
        <section className="py-16 bg-muted/30">
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
                        {[
                          "Organizations lacking in-house SOC capabilities",
                          "Companies requiring 24/7 security monitoring",
                          "Businesses in regulated industries",
                          "Enterprises with limited security resources",
                          "Organizations needing expert threat analysis",
                          "Companies requiring rapid incident response"
                        ].map((item, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Key Benefits */}
                <div>
                  <Card className="border-teal-200 bg-teal-50/50">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3 text-teal-700">
                        <Shield className="h-6 w-6" />
                        <span>Key Benefits</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          "24/7 expert security monitoring",
                          "Rapid threat detection and response",
                          "Reduced security team workload",
                          "Enhanced threat intelligence",
                          "Cost-effective security operations",
                          "Improved security posture"
                        ].map((item, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}