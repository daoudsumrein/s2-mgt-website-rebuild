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
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Endpoint Protection with EDR Solutions | Advanced Security for MENA Enterprises"
        description="Comprehensive endpoint protection with EDR functionality for MENA region. Real-time threat detection, automated remediation, and cloud-based management for enterprise endpoints."
        keywords="endpoint protection EDR MENA, endpoint security UAE, cybersecurity Middle East, threat protection Saudi Arabia, automated remediation"
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
                Endpoint Protection with EDR Functionality
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                A comprehensive, automated solution designed to secure users anywhere with highly effective real-time protection. Stops malware, ransomware, phishing, cryptomining, and other damaging attacks with award-winning management console and automated endpoint detection, prevention, and remediation.
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
                Our endpoint protection solution leverages cloud computing and real-time machine learning to continuously monitor and adapt endpoint defenses.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <feature.icon className="h-10 w-10 text-primary mb-4" />
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">What You Get</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {deliverables.map((deliverable, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-background rounded-lg">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{deliverable}</span>
                  </div>
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