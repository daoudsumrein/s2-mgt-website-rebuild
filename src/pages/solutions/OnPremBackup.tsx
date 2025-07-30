import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Server, HardDrive, Zap, Cloud, Shield, Monitor, Settings, CheckCircle, Target, Award, DollarSign, Clock, RotateCcw } from "lucide-react";

const features = [
  {
    icon: Settings,
    title: "All-in-One Platform",
    description: "Comprehensive, all-in-one platform covering all data protection needs"
  },
  {
    icon: Cloud,
    title: "Diverse Environment Support",
    description: "Support for diverse environments, including physical, virtual, cloud, hybrid, and SaaS"
  },
  {
    icon: RotateCcw,
    title: "Adaptive Recovery",
    description: "Adaptive recovery options tailored to meet varying business continuity requirements"
  },
  {
    icon: HardDrive,
    title: "Flexible Deployment",
    description: "Flexible deployment models to fit on-premises, cloud, or hybrid infrastructures"
  },
  {
    icon: Server,
    title: "Storage Integration",
    description: "Seamless integration with leading storage technologies for optimized performance"
  },
  {
    icon: Zap,
    title: "Infinite Scalability",
    description: "Infinite scalability to grow with your business across locations, workloads, and users"
  },
  {
    icon: Shield,
    title: "High-Speed Backups",
    description: "High-speed, reliable backups that safeguard workloads across virtual machines, cloud platforms, physical servers, SaaS applications, and hybrid systems"
  },
  {
    icon: RotateCcw,
    title: "Instant Restore",
    description: "Instant restore capabilities to recover VMs, servers, files, folders, or application data directly to original or alternative locations"
  },
  {
    icon: Shield,
    title: "Ransomware Defense",
    description: "Built-in ransomware defense to enhance cyber resilience and data integrity"
  },
  {
    icon: CheckCircle,
    title: "Compliance Standards",
    description: "Meets key cybersecurity and data protection compliance standards"
  },
  {
    icon: Monitor,
    title: "Infrastructure Monitoring",
    description: "Real-time IT infrastructure monitoring, including VMware environments"
  },
  {
    icon: Cloud,
    title: "BaaS for MSPs",
    description: "Backup-as-a-Service (BaaS) offerings tailored for Managed Service Providers (MSPs)"
  }
];

const deliverables = [
  {
    icon: Zap,
    title: "2X Faster Performance",
    description: "2X faster with native change tracking technology for enhanced backup speed"
  },
  {
    icon: DollarSign,
    title: "Lower TCO",
    description: "49% lower TCO than other market vendors, providing significant cost savings"
  },
  {
    icon: Award,
    title: "High Customer Rating",
    description: "4.8/5 average rating for saving time and money from satisfied customers"
  },
  {
    icon: RotateCcw,
    title: "Multiple Recovery Options",
    description: "12+ Recovery options to restore lost/deleted data with precision and flexibility"
  },
  {
    icon: Clock,
    title: "Quick Deployment",
    description: "5 minutes to deploy, configure and run the backup job for immediate protection"
  }
];

const keyBenefits = [
  "Award-winning platform with proven track record",
  "Unified dashboard for simplified management",
  "Cost-effective solution with lower TCO",
  "Fast deployment and configuration",
  "Comprehensive protection for all environments",
  "Built-in cyber resilience features"
];

const idealFor = [
  "Small and medium businesses (SMBs)",
  "Large enterprises with complex infrastructures",
  "Managed Service Providers (MSPs)",
  "Organizations requiring on-premises data control",
  "Companies with hybrid IT environments",
  "Businesses needing compliance adherence"
];

export default function OnPremBackup() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="On-Premises Backup Solutions MENA - Local Data Protection | S2 Solutions"
        description="Enterprise on-premises backup solutions for MENA region. Local data protection with high-performance platforms offering fast recovery, deduplication, and secure storage. Serving UAE, Saudi Arabia, and Middle East."
        keywords="on-premises backup MENA, local backup UAE, enterprise backup Middle East, data protection Saudi Arabia, backup appliance, deduplication, fast recovery"
        canonicalUrl="https://s2mgt.com/solutions/onprem-backup"
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
                  <div className="max-w-5xl mx-auto pl-4">
                    <div className="grid lg:grid-cols-2 gap-4 items-center justify-items-start">
                    {/* Left Content */}
                    <div>
                      <Badge variant="outline" className="mb-3 border-primary/40 text-primary bg-primary/10">
                        Backup Solutions
                      </Badge>
                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        On Prem Backup
                      </h1>
                      <p className="text-base md:text-lg text-slate-200 mb-4 leading-relaxed">
                        Comprehensive on-premise backup solutions with rapid recovery and local data control
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button size="default" className="text-base px-6 relative border-2 border-transparent bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300" onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=On%20Premise%20Backup%20Consultation', '_blank')}>
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
                    A <strong>speedy, cost-effective, and award-winning platform</strong> that unifies backup, replication, instant recovery and infrastructure monitoring within a single intuitive dashboard.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Engineered for SMBs, large enterprises, and managed service providers alike, it <strong>neutralizes modern data-protection challenges</strong> and plugs in effortlessly to today's leading virtualization environments and storage technologies.
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
                  <h2 className="text-3xl font-bold mb-4">Ready to Experience Award-Winning Data Protection?</h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Deploy enterprise-grade backup and recovery in just 5 minutes with our proven platform.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg">Schedule Platform Demo</Button>
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