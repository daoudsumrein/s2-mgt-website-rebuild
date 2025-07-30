import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Shield, AlertTriangle, Filter, Lock, Eye, Users, Monitor, Settings, TrendingUp, CheckCircle } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "High catch rate (99.9%)",
    description: "Exceptional threat detection accuracy with minimal false positives"
  },
  {
    icon: Users,
    title: "24/7/365 live threat analyst team",
    description: "Round-the-clock monitoring by expert threat analysts"
  },
  {
    icon: Shield,
    title: "Identity/impersonation protection",
    description: "Advanced protection against identity-based attacks and impersonation"
  },
  {
    icon: Lock,
    title: "Link protection",
    description: "Real-time URL analysis and malicious link protection"
  },
  {
    icon: AlertTriangle,
    title: "Attachment quarantine",
    description: "Secure quarantine and analysis of suspicious email attachments"
  },
  {
    icon: Mail,
    title: "Message retraction and internal mail filtering for Microsoft 365",
    description: "Advanced filtering and message control for Microsoft 365 environments"
  },
  {
    icon: Settings,
    title: "Fast and simple implementation",
    description: "Quick deployment with minimal configuration requirements"
  },
  {
    icon: Monitor,
    title: "Easy-to-use portal",
    description: "Intuitive management portal for simplified administration"
  },
  {
    icon: Eye,
    title: "Dashboards for intuitive management",
    description: "Comprehensive dashboards for monitoring and management"
  },
  {
    icon: Filter,
    title: "Customizable filtering",
    description: "Flexible filtering rules tailored to your organization's needs"
  },
  {
    icon: TrendingUp,
    title: "Comprehensive logging and reporting",
    description: "Detailed logs and reports for compliance and analysis"
  },
  {
    icon: Mail,
    title: "Mobile access",
    description: "Mobile-friendly access for on-the-go management"
  }
];

const deliverables = [
  "Provides enhanced security for business-critical communications",
  "Single Management Console Offers a unified console for managing multiple email security products",
  "Enhanced Security Status in Regulated Industries",
  "Consolidates cybersecurity solutions under one vendor",
  "Reduced False Positives/Negatives"
];

export default function EmailProtection() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Email Protection Solutions | Advanced Email Security MENA"
        description="Comprehensive email protection for MENA enterprises. Advanced threat protection, anti-phishing, and email security solutions for business communication."
        keywords="email protection MENA, email security UAE, anti-phishing Middle East, email threat protection Saudi Arabia"
        canonicalUrl="https://s2mgt.com/solutions/email-protection"
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
                Email Threat Protection
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                Advanced email protection with multi-layered filtering to block phishing, ransomware, impersonation, and business email compromise while allowing legitimate communications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">Request Demo</Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-white text-slate-900 border-white hover:bg-white/90">Security Assessment</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Secure Business Communications</h2>
              <Card>
                <CardContent className="p-8">
                  <p className="text-lg mb-6">
                    Email Threat Protection is a solution specifically designed to secure business email communications. It provides multi-layered filtering for inbound, outbound, and internal messages, effectively blocking malicious threats such as phishing, ransomware, impersonation, business email compromise (BEC), and spam, while allowing legitimate emails through.
                  </p>
                  <p className="text-lg mb-6">
                    The solution is powered by artificial intelligence, automated traffic analysis, and machine learning, resulting in a high catch rate with extremely low false positives.
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
                        <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
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