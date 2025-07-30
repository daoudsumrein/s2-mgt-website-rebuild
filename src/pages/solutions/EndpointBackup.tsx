import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Laptop, Shield, Cloud, Settings, Globe, HeadphonesIcon, CheckCircle, Target } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Complete Data Protection",
    description: "Complete your data protection approach, as company information often resides on employee devices without adequate security"
  },
  {
    icon: Cloud,
    title: "Reduce Impact of Data Loss",
    description: "Lessen the impact of data loss and security breaches"
  },
  {
    icon: Settings,
    title: "Optimized Performance",
    description: "Safeguard data while optimizing both network efficiency and user experience"
  },
  {
    icon: CheckCircle,
    title: "Continuous Operation",
    description: "Guarantee continuous operation and simplify processes while lowering expenses"
  },
  {
    icon: Shield,
    title: "Advanced Threat Protection",
    description: "Diminish the threat posed by ransomware, misplaced or stolen equipment, and human mistakes"
  }
];

const deliverables = [
  {
    icon: Shield,
    title: "Comprehensive Protection",
    features: [
      "Protection against data loss, data breaches, and ransomware",
      "Advanced threat detection and mitigation",
      "Real-time monitoring and alerts"
    ]
  },
  {
    icon: Cloud,
    title: "Flexible Deployment",
    features: [
      "Flexible deployment options for various environments",
      "Cloud-based and hybrid deployment models",
      "Scalable architecture for organizations of any size"
    ]
  },
  {
    icon: Settings,
    title: "Storage Optimization",
    features: [
      "Provide deduplication and encrypted data to optimize storage",
      "Intelligent compression algorithms",
      "Cost-effective storage management"
    ]
  },
  {
    icon: Laptop,
    title: "Centralized Management",
    features: [
      "Single dashboard for Administration and Management",
      "Unified policy management across all endpoints",
      "Comprehensive reporting and analytics"
    ]
  },
  {
    icon: Globe,
    title: "Global Tracking",
    features: [
      "Global location tracking to track lost or stolen endpoint devices",
      "Remote device management capabilities",
      "Asset inventory and compliance reporting"
    ]
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    features: [
      "Availability of 24/7 support",
      "Expert technical assistance",
      "Proactive monitoring and maintenance"
    ]
  }
];

const keyBenefits = [
  "Automated backup for all endpoint devices",
  "Protection across vast geographical areas",
  "Simplified management regardless of scale",
  "Enhanced security for distributed environments",
  "Reduced operational complexity and costs"
];

const idealFor = [
  "Organizations with distributed workforce",
  "Companies with remote employees",
  "Enterprises with BYOD policies",
  "Businesses requiring compliance with data regulations",
  "Organizations seeking to reduce data loss risks"
];

export default function EndpointBackup() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Endpoint Cloud Backup Solutions MENA - Automated Device Protection | S2 Solutions"
        description="Complete endpoint cloud backup solutions for MENA enterprises. Automated protection for all endpoint devices with advanced security, global tracking, and 24/7 support. Serving UAE, Saudi Arabia, and Middle East."
        keywords="endpoint backup MENA, cloud backup UAE, device protection Middle East, automated backup Saudi Arabia, endpoint security, remote device backup, enterprise endpoint protection"
        canonicalUrl="https://s2mgt.com/solutions/endpoint-backup"
      />
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-4 md:py-6 relative overflow-hidden">
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
                        Backup Solutions
                      </Badge>
                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Endpoint Cloud Backup
                      </h1>
                      <p className="text-base md:text-lg text-slate-200 mb-4 leading-relaxed">
                        Secure, automated endpoint backup solutions with cloud-based protection for all your devices and data
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button size="default" className="text-base px-6 relative border-2 border-transparent bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300" onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=Endpoint%20Backup%20Consultation', '_blank')}>
                          <span className="relative z-10">Schedule Consultation</span>
                          <div className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                        </Button>
                      </div>
                    </div>
                    
                    {/* Right Image Placeholder */}
                    <div className="relative flex justify-center lg:justify-start lg:pl-8">
                      <div className="w-96 h-72 bg-gradient-to-br from-primary/20 via-blue-500/20 to-secondary/20 rounded-lg flex items-center justify-center border border-white/10">
                        
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
              <h2 className="text-3xl font-bold mb-8 text-center">Overview</h2>
              <Card>
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed mb-6">
                    Endpoint Backup offers a <strong>complete and automated backup solution</strong> for all endpoint devices and their resident data. Safeguarding data from accidental deletion, malicious software, and theft becomes increasingly complex when protection spans vast geographical areas and intricate network configurations.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Endpoint Backup <strong>streamlines the management efforts</strong> involved in implementing data protection throughout an organization, regardless of its scale, dispersion, or environmental complexity.
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
              <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <feature.icon className="h-8 w-8 text-blue-500" />
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
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <item.icon className="h-8 w-8 text-teal-500" />
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {item.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-teal-500 mt-1 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
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
                  <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Endpoints?</h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Protect your distributed workforce with comprehensive endpoint backup solutions designed for modern enterprises.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg">Schedule Endpoint Assessment</Button>
                    <Button variant="outline" size="lg">Download Solution Brief</Button>
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