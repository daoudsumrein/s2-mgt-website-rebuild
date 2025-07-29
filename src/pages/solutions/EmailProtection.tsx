import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Shield, AlertTriangle, Filter, Lock, Eye } from "lucide-react";

const protections = [
  {
    icon: Shield,
    title: "Advanced Threat Protection",
    description: "Protection against sophisticated email-borne threats including zero-day attacks"
  },
  {
    icon: AlertTriangle,
    title: "Anti-Phishing",
    description: "Advanced phishing detection using AI and machine learning algorithms"
  },
  {
    icon: Filter,
    title: "Spam Filtering",
    description: "Intelligent spam filtering with customizable policies and quarantine management"
  },
  {
    icon: Lock,
    title: "Malware Protection",
    description: "Real-time scanning and sandboxing of email attachments and URLs"
  },
  {
    icon: Eye,
    title: "Email Security Analytics",
    description: "Comprehensive reporting and analytics on email security threats and trends"
  },
  {
    icon: Mail,
    title: "Business Email Compromise",
    description: "Protection against BEC attacks and email account compromise scenarios"
  }
];

export default function EmailProtection() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Email Protection Solutions | Advanced Email Security MENA"
        description="Comprehensive email protection for MENA enterprises. Advanced threat protection, anti-phishing, and email security solutions for business communication."
        keywords="email protection MENA, email security UAE, anti-phishing Middle East, email threat protection Saudi Arabia"
        canonicalUrl="https://s2mgt.com/solutions/email-protection"
      />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">Cybersecurity Solutions</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Advanced Email Protection
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive email security solutions to protect against advanced threats, phishing, and business email compromise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Request Demo</Button>
                <Button variant="outline" size="lg">Security Assessment</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Protection Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Email Protection Features</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Multi-layered email security protection designed to stop advanced threats before they reach your inbox.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {protections.map((protection, index) => (
                <Card key={index}>
                  <CardHeader>
                    <protection.icon className="h-10 w-10 text-primary mb-4" />
                    <CardTitle>{protection.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{protection.description}</CardDescription>
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
              <h2 className="text-3xl font-bold text-center mb-12">Email Security Benefits</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Business Continuity</h3>
                  <p className="text-muted-foreground">
                    Ensure uninterrupted business communication with reliable email security that doesn't impact productivity.
                  </p>
                  <h3 className="text-xl font-semibold">Data Protection</h3>
                  <p className="text-muted-foreground">
                    Protect sensitive business information from email-based data exfiltration and unauthorized access.
                  </p>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Compliance</h3>
                  <p className="text-muted-foreground">
                    Meet regulatory requirements for email security and maintain audit trails for compliance reporting.
                  </p>
                  <h3 className="text-xl font-semibold">Easy Management</h3>
                  <p className="text-muted-foreground">
                    Centralized management console with automated policies and minimal administrative overhead.
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