import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Eye, Lock, Users, Database, Server, FileX, UserCheck, CheckCircle, Target, Award, TrendingDown, Clock } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Invisibility Protection",
    description: "Makes critical files and servers invisible to unauthorized users, reducing attack surface"
  },
  {
    icon: Lock,
    title: "Advanced Access Controls",
    description: "Prevents unauthorized interactions with sensitive assets through sophisticated controls"
  },
  {
    icon: UserCheck,
    title: "Strong Authentication",
    description: "Robust authentication mechanisms for comprehensive user and device verification"
  },
  {
    icon: Shield,
    title: "Insider Threat Mitigation",
    description: "Protects against both malicious and accidental insider threats from within the organization"
  },
  {
    icon: Database,
    title: "Data Breach Prevention",
    description: "Significantly reduces risk of data breaches, intellectual property theft, and fraud"
  },
  {
    icon: CheckCircle,
    title: "Compliance Support",
    description: "Helps maintain regulatory compliance while reducing legal and financial exposure"
  },
  {
    icon: Users,
    title: "Trust Enhancement",
    description: "Improves customer and partner trust through enhanced data protection measures"
  },
  {
    icon: Server,
    title: "Silent Operation",
    description: "Operates transparently without disrupting legitimate business workflows"
  },
  {
    icon: TrendingDown,
    title: "Minimal Overhead",
    description: "Enhances overall cybersecurity posture with minimal operational impact"
  }
];

const deliverables = [
  {
    icon: Server,
    title: "Protect Your Servers",
    description: "Comprehensive server protection against unauthorized access and insider threats"
  },
  {
    icon: Database,
    title: "Protect Your Data",
    description: "Advanced data protection mechanisms to safeguard sensitive information"
  },
  {
    icon: Lock,
    title: "Protect Your Access",
    description: "Secure access controls ensuring only verified users reach critical assets"
  }
];

const keyBenefits = [
  "Reduces attack surface through invisibility technology",
  "Prevents both malicious and accidental insider threats",
  "Maintains regulatory compliance automatically",
  "Operates without disrupting business workflows",
  "Enhances customer and partner trust",
  "Minimal overhead with maximum protection"
];

const idealFor = [
  "Organizations with sensitive intellectual property",
  "Companies handling confidential customer data",
  "Financial institutions and healthcare providers",
  "Government agencies and defense contractors",
  "Businesses with high-value digital assets",
  "Companies requiring strict compliance adherence"
];

export default function ServersDataProtection() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Servers and Data Protection Solutions MENA - Insider Threat Protection | S2 Solutions"
        description="Advanced servers and data protection solutions for MENA region. Protect against insider threats with invisibility technology and access controls. Serving UAE, Saudi Arabia, and Middle East."
        keywords="server protection MENA, data protection UAE, insider threats Middle East, cybersecurity Saudi Arabia, access control, data security"
        canonicalUrl="https://s2mgt.com/solutions/servers-data-protection"
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
                Servers and Data Protection
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                Advanced cybersecurity platform that minimizes exposure by making critical data and infrastructure invisible to unauthorized users, defending against insider threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">Request Security Demo</Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-white text-slate-900 border-white hover:bg-white/90">Learn More</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Overview</h2>
              <Card>
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed mb-6">
                    <strong>Insider threats</strong> whether intentional or accidental pose a growing risk to organizations, often originating from employees, contractors, or partners who already have legitimate access. These threats can lead to severe consequences, including data breaches, financial loss, reputational harm, and operational disruption.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Our cutting-edge cybersecurity platform <strong>minimizes exposure by making critical data and infrastructure invisible</strong> to unauthorized users. The solution hides sensitive files and servers while enforcing strict authentication, ensuring that only verified users and devices can access protected assets.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Platform Features</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <feature.icon className="h-8 w-8 text-primary" />
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
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
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {deliverables.map((item, index) => (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <div className="flex flex-col items-center space-y-3">
                        <item.icon className="h-12 w-12 text-teal-500" />
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
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
                        {idealFor.map((item, index) => (
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
                        <CheckCircle className="h-6 w-6" />
                        <span>Key Benefits</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {keyBenefits.map((benefit, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
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

        {/* Call to Action Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Card>
                <CardContent className="p-12">
                  <h2 className="text-3xl font-bold mb-4">Ready to Protect Against Insider Threats?</h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Secure your critical assets with advanced invisibility technology and access controls.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg">Schedule Security Demo</Button>
                    <Button variant="outline" size="lg">Download Datasheet</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}