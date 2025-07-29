import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Clock, Shield, Target, Eye, Zap } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Expert Security Team",
    description: "Dedicated security analysts providing 24/7 monitoring and threat response"
  },
  {
    icon: Clock,
    title: "Round-the-Clock Monitoring",
    description: "Continuous security monitoring across all endpoints and network infrastructure"
  },
  {
    icon: Shield,
    title: "Threat Intelligence",
    description: "Real-time threat intelligence feeds to identify emerging threats and attack patterns"
  },
  {
    icon: Target,
    title: "Proactive Hunting",
    description: "Advanced threat hunting to discover hidden threats and persistent attackers"
  },
  {
    icon: Eye,
    title: "Incident Investigation",
    description: "Comprehensive incident investigation and forensic analysis capabilities"
  },
  {
    icon: Zap,
    title: "Rapid Remediation",
    description: "Fast containment and remediation of security incidents to minimize impact"
  }
];

export default function MDR() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Managed Detection and Response (MDR) Services | MENA Cybersecurity"
        description="Professional MDR services for MENA enterprises. 24/7 security monitoring, threat hunting, and incident response by expert security analysts."
        keywords="MDR services MENA, managed detection response UAE, cybersecurity monitoring Middle East, security operations Saudi Arabia"
        canonicalUrl="https://s2mgt.com/solutions/mdr"
      />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">Cybersecurity Solutions</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Managed Detection & Response (MDR)
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Expert-led security services providing 24/7 monitoring, threat hunting, and incident response capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Request Consultation</Button>
                <Button variant="outline" size="lg">Service Overview</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">MDR Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive managed detection and response services delivered by certified security experts.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index}>
                  <CardHeader>
                    <service.icon className="h-10 w-10 text-primary mb-4" />
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our MDR Services?</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Expert Security Team</h3>
                  <p className="text-muted-foreground">
                    Access to a dedicated team of certified security analysts and threat hunters without the overhead of building an in-house SOC.
                  </p>
                  <h3 className="text-xl font-semibold">Cost Effective</h3>
                  <p className="text-muted-foreground">
                    Reduce security operations costs while improving coverage and response times with our managed service model.
                  </p>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Rapid Response</h3>
                  <p className="text-muted-foreground">
                    Mean time to detection under 15 minutes and rapid incident response to minimize business impact from security events.
                  </p>
                  <h3 className="text-xl font-semibold">Continuous Improvement</h3>
                  <p className="text-muted-foreground">
                    Regular security assessments and recommendations to strengthen your security posture and reduce risk exposure.
                  </p>
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