import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Server, Laptop, Cloud, HardDrive, Shield, CheckCircle, Target, AlertTriangle } from "lucide-react";

const deliverables = [
  {
    icon: Server,
    title: "Server & VM Backup",
    features: [
      "OpenText Secure Cloud Backup for Microsoft 365, Google Workspace & cloud workloads",
      "NAKIVO for agentless on-premises VM & server backup",
      "Windows, Linux, VMware, Hyper-V supported",
      "Near-instant recovery and versioning"
    ]
  },
  {
    icon: Laptop,
    title: "Endpoint Backup",
    features: [
      "OpenText Endpoint Protection for laptops, remote users, and field staff",
      "Cloud-managed backups with policy enforcement",
      "Silent, non-intrusive deployment",
      "Encryption and device loss recovery"
    ]
  },
  {
    icon: Cloud,
    title: "Cloud-to-Cloud Protection",
    features: [
      "Backup for Microsoft 365: Outlook, OneDrive, SharePoint, Teams",
      "Google Workspace: Gmail, Drive, Calendar, Contacts",
      "Storage redundancy with GDPR & local compliance options"
    ]
  },
  {
    icon: HardDrive,
    title: "On-Prem Backup",
    features: [
      "Agentless backup for servers and virtual machines using NAKIVO",
      "Support for NAS/SAN, image-based recovery, and deduplication",
      "Backup to local disk, remote repository, or cloud"
    ]
  }
];

const protectionFeatures = [
  "Ransomware-proof backup architecture with immutability (via AirGap & NAKIVO)",
  "Zero Trust endpoint backup with role-based restore",
  "Policy-based retention for compliance and cost optimization",
  "Email alerts, activity logs, and full restore testing"
];

const technologies = [
  {
    name: "OpenText Endpoint Protection",
    role: "Cloud-managed laptop/desktop backup"
  },
  {
    name: "OpenText Secure Cloud Backup",
    role: "SaaS backup for M365 & Google Workspace"
  },
  {
    name: "NAKIVO",
    role: "Agentless backup for VMs, servers, NAS"
  },
  {
    name: "Arrosoft AirGap (Optional)",
    role: "Air-gapped backup & ransomware layer"
  }
];

const outcomes = [
  "360° data protection — cloud, server, endpoint",
  "Fast restore, even at scale",
  "Ransomware recovery confidence",
  "Cloud-native or on-prem backup, your choice",
  "Compliance-friendly, encrypted, and efficient"
];

const idealFor = [
  "SMBs to mid-market with hybrid infrastructures",
  "Remote workforce environments",
  "Regulated sectors (finance, legal, healthcare)",
  "Organizations needing policy-controlled cloud retention",
  "MSPs offering backup-as-a-service"
];

export default function DataProtection() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Data Protection & Backup Solutions MENA - Enterprise Data Security | S2 Solutions"
        description="Comprehensive data protection and backup solutions for MENA enterprises. Carbonite partner offering endpoint, server, cloud-to-cloud backup with advanced cybersecurity features across UAE and Middle East."
        keywords="data protection MENA, backup solutions UAE, Carbonite backup Middle East, endpoint backup Saudi Arabia, cloud backup solutions, data security MENA, enterprise backup, ransomware protection"
        canonicalUrl="https://s2mgt.com/solutions/data-protection"
      />
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 md:py-16 relative overflow-hidden h-[75vh] flex items-center justify-center">
          {/* Animated background particles */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: `
                radial-gradient(2px 2px at 20px 30px, rgba(74, 144, 226, 0.3), transparent),
                radial-gradient(2px 2px at 40px 70px, rgba(74, 144, 226, 0.2), transparent),
                radial-gradient(1px 1px at 90px 40px, rgba(74, 144, 226, 0.4), transparent),
                radial-gradient(1px 1px at 130px 80px, rgba(74, 144, 226, 0.3), transparent)
              `,
              backgroundRepeat: 'repeat',
              backgroundSize: '150px 150px',
              animation: 'float 20s infinite linear'
            }} />
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
                    <Badge variant="outline" className="border-blue-500/50 text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-400 hover:scale-105 transition-all duration-300 px-3 sm:px-4 py-1.5 sm:py-2 relative overflow-hidden group/badge text-xs sm:text-sm">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/badge:translate-x-full transition-transform duration-500" />
                      <span className="relative">Data Protection Solutions</span>
                    </Badge>
                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-green-400 bg-clip-text text-transparent animate-pulse hover:scale-105 transition-transform duration-300 cursor-default inline-block" style={{
                        backgroundSize: '300% 300%',
                        animation: 'gradientShift 4s ease-in-out infinite'
                      }}>
                        Data Protection & Backup
                      </span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                      Servers, Endpoints, Cloud – Always Covered with end-to-end data protection ensuring your critical systems are secure, recoverable, and compliant.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                      <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 relative overflow-hidden group/btn px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold w-full sm:w-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500" />
                        <span className="relative">Request Backup Audit</span>
                      </Button>
                      <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/40 px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold w-full sm:w-auto">
                        Learn More
                      </Button>
                    </div>
                  </div>
                  
                  {/* Right Content - Can be added later if needed */}
                  <div className="hidden lg:block">
                    {/* Placeholder for future content */}
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
                    S2 delivers end-to-end data protection that ensures your critical systems — whether on-prem, in the cloud, or at the edge — are always <strong>secure, recoverable, and compliant</strong>.
                  </p>
                  <p className="text-lg leading-relaxed">
                    We combine OpenText Secure Cloud, NAKIVO, and endpoint protection technologies to provide resilient backup strategies tailored to modern IT environments. Whether you're backing up a single site or hundreds of endpoints across regions — our solutions are <strong>agentless, policy-driven, and optimized for fast restore, ransomware protection, and minimal downtime</strong>.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What We Deliver Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">What We Deliver</h2>
              <div className="grid md:grid-cols-2 gap-8">
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

        {/* Built-In Protection Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Built-In Protection</h2>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-center space-x-3">
                    <Shield className="h-8 w-8 text-primary" />
                    <CardTitle className="text-2xl text-center">Advanced Security Features</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {protectionFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <AlertTriangle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Technologies We Use</h2>
              <Card>
                <CardContent className="p-8">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-semibold">Platform/Tool</th>
                          <th className="text-left py-3 px-4 font-semibold">Role</th>
                        </tr>
                      </thead>
                      <tbody>
                        {technologies.map((tech, index) => (
                          <tr key={index} className="border-b last:border-b-0">
                            <td className="py-3 px-4 font-medium">{tech.name}</td>
                            <td className="py-3 px-4 text-muted-foreground">{tech.role}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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

        {/* Call to Action Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Card>
                <CardContent className="p-12">
                  <h2 className="text-3xl font-bold mb-4">Is Your Backup Strategy Still Relying on Hope?</h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Let S2 modernize your protection stack from edge to cloud. Request a backup audit or free POC today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg">Request Backup Audit</Button>
                    <Button variant="outline" size="lg">Start Free POC</Button>
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