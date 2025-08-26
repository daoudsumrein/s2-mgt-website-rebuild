import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Cloud, 
  Shield, 
  Clock, 
  Database, 
  CheckCircle, 
  ArrowRight, 
  Mail,
  Users,
  FileText,
  Zap,
  Lock,
  RefreshCw
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Cloud,
    title: "Windows & Linux Server Support",
    description: "Complete protection for Windows and Linux servers with automated backup and replication capabilities"
  },
  {
    icon: Shield,
    title: "Ransomware Protection",
    description: "Advanced threat detection and immutable backups to protect against sophisticated attacks"
  },
  {
    icon: Clock,
    title: "Point-in-Time Recovery",
    description: "Granular restore capabilities with unlimited retention and instant recovery options"
  },
  {
    icon: Database,
    title: "Unlimited Storage",
    description: "No storage limits or per-server restrictions - backup everything without worrying about costs"
  }
];

const deliverables = [
  {
    icon: Mail,
    title: "Server & Application Backup",
    features: [
      "Complete Windows Server protection",
      "Linux server backup and recovery",
      "Application-consistent backups",
      "Database protection (SQL, Oracle, MySQL)",
      "Active Directory and Exchange Server backup"
    ]
  },
  {
    icon: FileText,
    title: "File System & Data Protection",
    features: [
      "Full file system backup",
      "Incremental and differential backups",
      "Version history preservation",
      "File-level recovery",
      "Cross-platform data migrations"
    ]
  },
  {
    icon: Users,
    title: "Enterprise Management",
    features: [
      "Centralized backup management",
      "Multi-site server protection",
      "Automated backup scheduling",
      "Real-time monitoring and alerts",
      "Role-based access control"
    ]
  }
];

const protectionFeatures = [
  "Automated daily backups with customizable schedules",
  "Agent-based and agentless backup options",
  "Regulatory compliance (GDPR, HIPAA, SOX)",
  "Multi-site backup replication for data sovereignty",
  "Enterprise-grade encryption in transit and at rest",
  "Role-based access control and authentication",
  "Comprehensive audit trails and reporting"
];

const technologies = [
  {
    name: "OpenText Server Backup",
    purpose: "Primary server backup and replication platform"
  },
  {
    name: "Windows VSS Integration",
    purpose: "Application-consistent Windows server backups"
  },
  {
    name: "Linux LVM Snapshots",
    purpose: "Complete Linux server protection"
  },
  {
    name: "AES-256 Encryption",
    purpose: "Enterprise security standards"
  }
];

const outcomes = [
  "100% protection of server data with no gaps",
  "Instant recovery from hardware failures",
  "Compliance-ready data retention policies",
  "Reduced IT overhead with automated protection",
  "Protection against data corruption and ransomware"
];

const idealFor = [
  "Organizations with critical Windows and Linux servers",
  "Companies requiring compliance and data governance",
  "Businesses with on-premises server infrastructure",
  "Enterprises needing reliable disaster recovery",
  "IT departments seeking centralized backup management"
];

export default function OpenTextServerBackup() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="OpenText Server Backup Solutions MENA - Enterprise Server Protection | S2 Solutions"
        description="Enterprise OpenText server backup solutions for MENA region. Complete server backup and replication with unlimited storage, ransomware protection, and compliance features. Serving UAE, Saudi Arabia, and Middle East."
        keywords="server backup MENA, OpenText server backup UAE, server backup Middle East, server replication Saudi Arabia, server data protection, enterprise backup, server disaster recovery"
        canonicalUrl="https://s2mgt.com/solutions/OpenText-Server-Backup"
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
            <div className="max-w-7xl mx-auto">
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
                      <span className="relative">Server Backup Solution</span>
                    </Badge>
                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      <span 
                        className="bg-gradient-to-r from-blue-400 via-blue-500 to-green-400 bg-clip-text text-transparent animate-pulse hover:scale-105 transition-transform duration-300 cursor-default inline-block"
                        style={{
                          backgroundSize: '300% 300%',
                          animation: 'gradientShift 4s ease-in-out infinite'
                        }}
                      >
                        OpenText Server Backup
                      </span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                      Comprehensive OpenText server backup and replication solutions for Windows and Linux servers with automated protection and instant recovery capabilities.
                    </p>
                    
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 relative overflow-hidden group/btn px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold w-full sm:w-auto"
                      onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=OpenText%20Server%20Backup%20Consultation', '_blank')}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500" />
                      <span className="relative">Schedule Consultation</span>
                    </Button>
                  </div>
                  
                  {/* Right Media Section */}
                  <div className="relative flex justify-center lg:justify-start lg:pl-8">
                    <div className="w-96 h-72 bg-gradient-to-br from-primary/20 via-blue-500/20 to-secondary/20 rounded-lg flex items-center justify-center border border-white/10">
                      
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
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Cloud className="h-6 w-6 text-primary" />
                    <span>Complete Server Data Protection</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Your server infrastructure contains critical business data that requires comprehensive protection. 
                    S2's OpenText server backup solutions provide enterprise-grade backup and replication for Windows and Linux servers 
                    with automated backups, unlimited storage, and instant recovery capabilities. 
                    <strong> Protect against hardware failures, data corruption, ransomware attacks, and ensure compliance 
                    with data retention requirements.</strong>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <IconComponent className="h-8 w-8 text-primary mt-1" />
                          <div>
                            <h3 className="font-semibold mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* What We Deliver */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">What We Deliver</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {deliverables.map((deliverable, index) => {
                  const IconComponent = deliverable.icon;
                  return (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-3">
                          <IconComponent className="h-6 w-6 text-teal-500" />
                          <span>{deliverable.title}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {deliverable.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Built-in Protection Features */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Built-in Protection Features</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {protectionFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Lock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Ideal For & Expected Outcomes */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Ideal For */}
                <div>
                  <Card className="border-blue-200 bg-blue-50/50">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3 text-blue-700">
                        <Users className="h-6 w-6" />
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

                {/* Expected Outcomes */}
                <div>
                  <Card className="border-teal-200 bg-teal-50/50">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3 text-teal-700">
                        <CheckCircle className="h-6 w-6" />
                        <span>Expected Outcomes</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {outcomes.map((outcome, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                            <span>{outcome}</span>
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

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Protect Your Server Data Today</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't leave your critical server infrastructure vulnerable. Let S2 implement comprehensive OpenText server backup protection for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Schedule Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Contact Specialist</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}