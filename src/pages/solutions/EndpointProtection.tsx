import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Laptop, AlertTriangle, Eye, Lock, Zap, Cloud, Settings, CheckCircle, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Proactive, Predictive, and Multi-layered Security",
    description: "Advanced threat protection with multiple defense layers"
  },
  {
    icon: Lock,
    title: "Multi-Shield Protection",
    description: "Comprehensive security across all attack vectors"
  },
  {
    icon: Eye,
    title: "Patented Evasion Shield Technology",
    description: "Proprietary technology to detect evasion techniques"
  },
  {
    icon: AlertTriangle,
    title: "Script Shield",
    description: "Advanced protection against malicious scripts"
  },
  {
    icon: Cloud,
    title: "Cloud-Based Management Console",
    description: "Intuitive, award-winning management interface"
  },
  {
    icon: Zap,
    title: "Cloud-Driven Processing",
    description: "Real-time machine learning and cloud computing power"
  },
  {
    icon: Settings,
    title: "Automated Updates",
    description: "Continuous protection with automatic security updates"
  },
  {
    icon: CheckCircle,
    title: "Automated Alerting and Remediation",
    description: "Instant response and automated threat remediation"
  },
  {
    icon: Laptop,
    title: "Device Isolation",
    description: "Quarantine compromised devices to prevent spread"
  },
  {
    icon: Users,
    title: "Process Tree Visualization",
    description: "Visual mapping of process relationships and activities"
  }
];

const deliverables = [
  "Fully Remote Endpoint Management and Control",
  "Highly Automated, Low-Cost Operation",
  "Hassle-Free Deployment",
  "Superior Efficacy Against Zero-Day Threats",
  "Reduced Infections and Incidents",
  "Empowered Human Defenders",
  "Fulfillment of Cyber-Insurance Requirements",
  "Simplified Security",
  "Holistic Security Portfolio",
  "High-Efficacy Products and Compliant Experience"
];

export default function EndpointProtection() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Endpoint Protection with EDR Solutions | Advanced Security for MENA Enterprises"
        description="Comprehensive endpoint protection with EDR functionality for MENA region. Real-time threat detection, automated remediation, and cloud-based management for enterprise endpoints."
        keywords="endpoint protection EDR MENA, endpoint security UAE, cybersecurity Middle East, threat protection Saudi Arabia, automated remediation"
        canonicalUrl="https://s2mgt.com/solutions/endpoint-protection"
      />
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 border-white/20 text-white">
                Cybersecurity Solutions
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Endpoint Protection with EDR Functionality
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                A comprehensive, automated solution designed to secure users anywhere with highly effective real-time protection against malware, ransomware, phishing, and cryptomining attacks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">Request Consultation</Button>
                <Button variant="outline" size="lg" className="text-lg px-8 border-white/20 text-white hover:bg-white hover:text-slate-900">Learn More</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Comprehensive Endpoint Security
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                <p className="mb-6">
                  Our solution offers an award-winning, intuitive management console, over 40 third-party integrations, a RESTful API, and fully automated endpoint detection, prevention, and remediation.
                </p>
                <p>
                  It complements an organization's cyber resilience strategy by leveraging cloud computing and real-time machine learning to continuously monitor and adapt endpoint defenses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Advanced Protection Features
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive endpoint protection with cutting-edge security capabilities
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {features.map((feature, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <feature.icon className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Key Deliverables
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Tangible benefits and outcomes from our endpoint protection solution
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {deliverables.map((deliverable, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CheckCircle className="h-8 w-8 text-secondary mb-2" />
                    <CardTitle className="text-lg">{deliverable}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Strengthen Your Endpoint Security?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Contact us to learn how our endpoint protection solution can safeguard your organization against advanced threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  Schedule Consultation
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  Download Datasheet
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}