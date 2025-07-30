import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Server, Cloud, RefreshCw, HardDrive, Shield, Zap, CheckCircle, Target, Clock, CloudDownload } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Continuous Incremental Backups",
    description: "Incremental backups performed hourly and continuously, with customizable retention policies to support ongoing business operations"
  },
  {
    icon: Server,
    title: "Fast Virtual Recovery",
    description: "Fast recovery for virtual environments, including VMware and Hyper-V"
  },
  {
    icon: RefreshCw,
    title: "Versatile Restore Capabilities",
    description: "Versatile restore capabilities, from full system failover to precise recovery of individual files, folders, or application level data"
  },
  {
    icon: Zap,
    title: "Instant VM Restoration",
    description: "Instant VM restoration, ensuring minimal downtime"
  },
  {
    icon: Cloud,
    title: "Cloud-Based Failover",
    description: "Optional cloud based failover for mission critical applications"
  },
  {
    icon: Shield,
    title: "Immutable Backup",
    description: "Immutable backup technology for enhanced security and ransomware protection"
  },
  {
    icon: HardDrive,
    title: "Broad Compatibility",
    description: "Broad compatibility with various platforms, operating systems, and virtualization technologies"
  }
];

const deliverables = [
  {
    icon: Cloud,
    title: "Operational Continuity",
    features: [
      "Minimize operational disruptions with fast and efficient cloud-based failover",
      "24/7 monitoring and automated failover processes",
      "Seamless transition between primary and backup systems"
    ]
  },
  {
    icon: Server,
    title: "Rapid VM Recovery",
    features: [
      "Quickly recover virtual machines to restore services with minimal delay",
      "Instant boot capabilities for critical VMs",
      "Granular recovery options for specific applications"
    ]
  },
  {
    icon: Shield,
    title: "Data Protection",
    features: [
      "Protect critical data with secure, reliable backup and recovery processes",
      "End-to-end encryption for data in transit and at rest",
      "Multi-layer security protocols and access controls"
    ]
  },
  {
    icon: Zap,
    title: "Intelligent Technology",
    features: [
      "Leverage intelligent backup technology for enhanced performance and reliability",
      "AI-driven optimization for backup scheduling and storage",
      "Automated testing and validation of backup integrity"
    ]
  },
  {
    icon: CheckCircle,
    title: "Cyber Resilience",
    features: [
      "Strengthen your business's cyber resilience with end-to-end data protection",
      "Rapid recovery capabilities for business continuity",
      "Comprehensive disaster recovery planning and execution"
    ]
  }
];

const keyBenefits = [
  "Protection against cyberattacks and ransomware",
  "Recovery from accidental mistakes and system malfunctions",
  "Business continuity during natural disasters",
  "Minimal operational disruptions",
  "Scalable solution for organizations of any size"
];

const idealFor = [
  "Organizations with critical virtual infrastructure",
  "Businesses requiring minimal downtime tolerance",
  "Companies with mission-critical applications",
  "Enterprises seeking cloud-based disaster recovery",
  "Organizations needing regulatory compliance"
];

export default function ServerBackup() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Server Cloud Backup Solutions MENA - Enterprise Server Protection | S2 Solutions"
        description="Professional server cloud backup solutions for MENA enterprises. Secure Windows and Linux server protection with ransomware recovery and enterprise-grade security. Serving UAE, Saudi Arabia, and Middle East."
        keywords="server backup MENA, cloud server backup UAE, enterprise backup Middle East, Windows server backup Saudi Arabia, Linux backup, virtual machine backup, database backup"
        canonicalUrl="https://s2mgt.com/solutions/server-backup"
      />
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 border-white/20 text-white">
                Data Protection Solutions
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Servers Cloud Backup
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                Simple yet dependable backup and recovery solution for critical business data and infrastructure with ransomware protection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">Request Server Assessment</Button>
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
                    Cyberattacks, accidental mistakes, system malfunctions, and unexpected events like natural disasters shape risks to critical business data and infrastructure that are extensive and ever growing.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Organizations, regardless of size, require a <strong>simple yet dependable backup and recovery solution</strong> that ensures data remains secure, intact, and accessible, while also reducing operational disruptions to a minimum.
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
                  <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Server Infrastructure?</h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Ensure business continuity with enterprise-grade server backup and recovery solutions designed for critical environments.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg">Schedule Infrastructure Assessment</Button>
                    <Button variant="outline" size="lg">Download Technical Guide</Button>
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