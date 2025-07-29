import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Laptop, AlertTriangle, Eye, Lock, Zap } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Advanced Threat Protection",
    description: "Real-time protection against malware, ransomware, and zero-day threats"
  },
  {
    icon: Laptop,
    title: "Multi-Platform Support",
    description: "Comprehensive protection for Windows, Mac, iOS, and Android devices"
  },
  {
    icon: AlertTriangle,
    title: "Behavioral Analysis",
    description: "AI-powered detection of suspicious activities and anomalous behavior"
  },
  {
    icon: Eye,
    title: "Continuous Monitoring",
    description: "24/7 surveillance of endpoint activities and security status"
  },
  {
    icon: Lock,
    title: "Data Loss Prevention",
    description: "Prevent sensitive data from leaving your organization"
  },
  {
    icon: Zap,
    title: "Rapid Response",
    description: "Automated remediation and instant threat containment"
  }
];

export default function EndpointProtection() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Endpoint Protection Solutions | Advanced Security for MENA Enterprises"
        description="Comprehensive endpoint protection services for MENA region. Advanced threat detection, behavioral analysis, and real-time security monitoring for enterprise endpoints."
        keywords="endpoint protection MENA, endpoint security UAE, cybersecurity Middle East, threat protection Saudi Arabia, endpoint detection"
        canonicalUrl="https://s2mgt.com/solutions/endpoint-protection"
      />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">Cybersecurity Solutions</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Advanced Endpoint Protection
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive security solutions to protect your endpoints from advanced threats and ensure business continuity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Request Consultation</Button>
                <Button variant="outline" size="lg">Learn More</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Key Features</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our endpoint protection solution provides comprehensive security coverage for all your devices.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <feature.icon className="h-10 w-10 text-primary mb-4" />
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Endpoint Protection?</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Complete Protection</h3>
                  <p className="text-muted-foreground">
                    Advanced threat detection and prevention across all endpoint types, ensuring comprehensive security coverage for your organization.
                  </p>
                  <h3 className="text-xl font-semibold">Easy Management</h3>
                  <p className="text-muted-foreground">
                    Centralized console for managing security policies, monitoring threats, and generating compliance reports across all endpoints.
                  </p>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Minimal Impact</h3>
                  <p className="text-muted-foreground">
                    Lightweight agent ensures protection without compromising system performance or user productivity.
                  </p>
                  <h3 className="text-xl font-semibold">Expert Support</h3>
                  <p className="text-muted-foreground">
                    24/7 security operations center support with rapid incident response and threat intelligence updates.
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