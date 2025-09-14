import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Cloud, Mail, Shield, Server, Eye, Users, Target } from "lucide-react";

const deliverables = [
  {
    icon: Cloud,
    title: "Cloud-to-Cloud Backup",
    features: [
      "Fully automated backup for Microsoft 365 (Outlook, OneDrive, SharePoint, Teams)",
      "Google Workspace (Gmail, Drive, Calendar, Contacts)",
      "Point-in-time restore and unlimited retention",
      "MSP multi-tenant dashboard for client management"
    ]
  },
  {
    icon: Mail,
    title: "Email Continuity & Archiving",
    features: [
      "Keep email live during Microsoft or Google outages",
      "Seamless web access for users",
      "Automatic journaling and tamper-proof archive",
      "Legal hold, DLP, and eDiscovery support"
    ]
  },
  {
    icon: Server,
    title: "Endpoint Backup & Protection",
    features: [
      "Policy-driven backup for laptops, desktops, remote users",
      "Silent deployment and encrypted transmission",
      "Geo-redundant restore with role-based access",
      "Ideal for hybrid workforces and MSP endpoint fleets"
    ]
  },
  {
    icon: Shield,
    title: "Advanced Threat Protection (ATP)",
    features: [
      "Phishing, malware, and spoof detection",
      "Attachment sandboxing and URL rewrite",
      "Ransomware kill chain detection",
      "Policy-based rules for users/groups"
    ]
  },
  {
    icon: Eye,
    title: "Webroot (AV, EDR, DNS Protection)",
    features: [
      "Lightweight, MSP-ready endpoint security",
      "Antivirus, DNS filtering, Endpoint Detection & Response (EDR)",
      "Single dashboard for fleet visibility",
      "Agent-based with low resource impact"
    ]
  },
  {
    icon: Target,
    title: "Pilr MDR for MSPs",
    features: [
      "Managed Detection & Response platform built for MSPs",
      "24/7 threat hunting and alert triage",
      "Connects with Webroot, OpenText, and third-party sensors",
      "Compliance reporting and ticket integration"
    ]
  }
];

const technologies = [
  {
    name: "OpenText Secure Cloud Backup",
    purpose: "Cloud-to-cloud SaaS backup"
  },
  {
    name: "OpenText Email Continuity",
    purpose: "Email uptime + web access"
  },
  {
    name: "OpenText Endpoint Protection",
    purpose: "Workstation backup & restore"
  },
  {
    name: "Webroot AV / DNS / EDR",
    purpose: "Lightweight MSP-friendly endpoint protection"
  },
  {
    name: "Pilr MDR",
    purpose: "Managed detection & response + 24/7 SOC-as-a-Service"
  }
];

const outcomes = [
  "One cloud-native platform for backup, continuity, protection",
  "Zero vendor bloat — deploy what you need",
  "MSPs can offer multi-tenant, margin-friendly services",
  "Real-time threat visibility and response",
  "Peace of mind across all data endpoints"
];

const idealFor = [
  "Organizations using M365 / GWS and worried about data loss",
  "MSPs looking to launch full Secure Cloud bundles",
  "Regulated businesses needing retention & recovery",
  "Remote-first and BYOD-heavy environments",
  "Any company serious about uptime, threats, and audit readiness"
];

export default function SecureCloud() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
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
                      <span className="relative">Solutions</span>
                    </Badge>
                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-green-400 bg-clip-text text-transparent animate-pulse hover:scale-105 transition-transform duration-300 cursor-default inline-block" style={{
                        backgroundSize: '300% 300%',
                        animation: 'gradientShift 4s ease-in-out infinite'
                      }}>
                        Secure Cloud
                      </span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                      Complete SaaS & Endpoint Protection for Cloud-First Businesses and MSPs
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                      <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 relative overflow-hidden group/btn px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold w-full sm:w-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500" />
                        <span className="relative">Book White-Label Demo</span>
                      </Button>
                      <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/40 px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold w-full sm:w-auto">
                        Download Datasheet
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
              <h2 className="text-3xl font-bold mb-6 text-center">Overview</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-center mb-8">
                  Cloud doesn't eliminate your responsibility — it reshapes it.
                </p>
                <p className="text-center mb-8">
                  S2 delivers a modern Secure Cloud portfolio built for data protection, endpoint resilience, business continuity, 
                  and threat mitigation, designed around OpenText Secure Cloud, Webroot, and Pilr MDR technologies.
                </p>
                <p className="text-center">
                  This stack is ideal for direct clients and MSPs building their own Secure Cloud bundles, with 
                  <strong> central management, policy enforcement, and full auditability</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">What We Deliver</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {deliverables.map((deliverable, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <deliverable.icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{deliverable.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {deliverable.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
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

        {/* Technologies Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Technologies We Use</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold">Platform/Tool</th>
                      <th className="text-left py-3 px-4 font-semibold">Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {technologies.map((tech, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3 px-4 font-medium">{tech.name}</td>
                        <td className="py-3 px-4 text-muted-foreground">{tech.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Ideal For & Outcomes Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      Ideal For
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {idealFor.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      Outcomes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Launch Your Secure Cloud Stack?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Want to launch your own Secure Cloud stack as an MSP?<br />
                Let S2 help you deliver a complete service — under your brand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Book White-Label Secure Cloud MSP Demo</Button>
                <Button variant="outline" size="lg">Contact Specialist</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}