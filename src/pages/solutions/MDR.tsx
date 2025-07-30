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
        <section className="bg-gradient-to-br from-background via-muted/50 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
                <Badge variant="outline" className="mb-4">
                  Cybersecurity Solutions
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Managed Detection & Response (MDR)
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                  Professional 24/7 security monitoring, threat hunting, and incident response by expert security analysts to simplify security for endpoints.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="text-lg px-8">Request Consultation</Button>
                  <Button variant="outline" size="lg" className="text-lg px-8">Service Overview</Button>
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

        {/* Deliverables Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Deliverables</h2>
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
      </main>
      
      <Footer />
    </div>
  );
}