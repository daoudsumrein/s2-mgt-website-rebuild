import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import WebPageSchema from "@/components/WebPageSchema";
import ServiceSchema from "@/components/ServiceSchema";
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
        title="Enterprise Data Protection & Backup Solutions – UAE, KSA & MENA | S2 Management"
        description="Comprehensive enterprise data protection solutions across MENA. Advanced backup technologies, VM protection, endpoint security, cloud data protection, and ransomware defense for businesses in UAE, KSA, and Middle East."
        keywords="enterprise data protection UAE, backup solutions KSA, VM backup and replication MENA, endpoint data protection, cloud backup services, ransomware protection Middle East, data security solutions, enterprise backup"
        canonicalUrl="https://s2mgt.com/solutions/data-protection"
        ogType="article"
      />
      <WebPageSchema
        title="Enterprise Data Protection Solutions"
        description="Comprehensive data protection, backup, and recovery solutions for enterprise clients"
        url="https://s2mgt.com/solutions/data-protection"
        pageType="Service"
        breadcrumbs={[
          { name: "Home", url: "https://s2mgt.com/" },
          { name: "Solutions", url: "https://s2mgt.com/solutions" },
          { name: "Data Protection", url: "https://s2mgt.com/solutions/data-protection" }
        ]}
      />
      <ServiceSchema
        serviceName="Data Protection Solutions"
        description="Comprehensive enterprise data protection, backup, and recovery services"
        url="https://s2mgt.com/solutions/data-protection"
        features={[
          "Server & VM Backup",
          "Endpoint Data Protection",
          "Cloud Backup Services",
          "Ransomware Protection",
          "Automated Recovery",
          "Compliance Support"
        ]}
        category="Data Protection Services"
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
                Data Protection & Backup
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                Servers, Endpoints, Cloud – Always Covered with end-to-end data protection ensuring your critical systems are secure, recoverable, and compliant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">Request Backup Audit</Button>
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