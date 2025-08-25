import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
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
  const heroAnimation = useScrollAnimation({ threshold: 0.3 });

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
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 md:py-16 relative overflow-hidden h-[75vh] flex items-center justify-center">
          {/* Animated background particles */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `
                  radial-gradient(2px 2px at 20px 30px, rgba(74, 144, 226, 0.3), transparent),
                  radial-gradient(2px 2px at 40px 70px, rgba(74, 144, 226, 0.2), transparent),
                  radial-gradient(1px 1px at 90px 40px, rgba(74, 144, 226, 0.4), transparent),
                  radial-gradient(1px 1px at 130px 80px, rgba(74, 144, 226, 0.3), transparent)
                `,
                backgroundRepeat: 'repeat',
                backgroundSize: '150px 150px',
                animation: 'float 20s infinite linear'
              }}
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              ref={heroAnimation.ref}
              initial={{ opacity: 0, y: 50 }}
              animate={heroAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-7xl mx-auto"
            >
              {/* Hero Container */}
              <div className="relative bg-slate-900/90 border-2 border-blue-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 backdrop-blur-sm shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                
                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center relative z-10">
                  {/* Left Content */}
                  <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
                    <Badge 
                      variant="outline" 
                      className="border-blue-500/50 text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-400 hover:scale-105 transition-all duration-300 px-3 sm:px-4 py-1.5 sm:py-2 relative overflow-hidden group/badge text-xs sm:text-sm"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/badge:translate-x-full transition-transform duration-500" />
                      <span className="relative">Server Backup Solutions</span>
                    </Badge>
                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      <span 
                        className="bg-gradient-to-r from-blue-400 via-blue-500 to-green-400 bg-clip-text text-transparent animate-pulse hover:scale-105 transition-transform duration-300 cursor-default inline-block"
                        style={{
                          backgroundSize: '300% 300%',
                          animation: 'gradientShift 4s ease-in-out infinite'
                        }}
                      >
                        Server Cloud Backup
                      </span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                      Enterprise-grade server backup solutions with cloud replication, immutable storage, and rapid recovery capabilities for Windows and Linux environments.
                    </p>
                    
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 relative overflow-hidden group/btn px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold w-full sm:w-auto"
                      onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=Server%20Backup%20Consultation', '_blank')}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500" />
                      <span className="relative">Schedule Consultation</span>
                    </Button>
                  </div>
                  
                  {/* Right Media Section */}
                  <div className="order-first lg:order-last">
                    <div className="relative overflow-hidden h-[200px] sm:h-[280px] md:h-[320px] lg:h-[360px] group/media hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-400 rounded-lg sm:rounded-xl">
                      {/* Placeholder for Server Backup Visual */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-slate-700/30 to-green-500/20 rounded-xl border border-blue-500/30 flex items-center justify-center">
                        <div className="text-center text-slate-300">
                          <CloudDownload className="h-16 w-16 mx-auto mb-4 text-blue-400" />
                          <h3 className="text-lg font-semibold mb-2">Server Backup Demo</h3>
                          <p className="text-sm opacity-80">Interactive demo coming soon</p>
                        </div>
                      </div>
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5 opacity-0 group-hover/media:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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