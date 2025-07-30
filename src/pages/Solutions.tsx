import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Server, Workflow, Search, Cloud, Lock, ArrowRight, CheckCircle, Database, Eye, Users, Mail, Key } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
const dataProtectionSolutions = [{
  icon: Server,
  title: "Disaster Recovery",
  description: "Comprehensive DR planning and orchestration",
  link: "/solutions/disaster-recovery"
}, {
  icon: Workflow,
  title: "Server Migration",
  description: "Seamless any-to-any server migrations",
  link: "/solutions/server-migration"
}, {
  icon: Search,
  title: "DR & Migration Orchestration",
  description: "Automated workflow orchestration",
  link: "/solutions/dr-orchestration"
}, {
  icon: Database,
  title: "Endpoint Cloud Backup",
  description: "Cloud-based endpoint protection",
  link: "/solutions/endpoint-backup"
}, {
  icon: Server,
  title: "Servers Cloud Backup",
  description: "Server backup and replication",
  link: "/solutions/server-backup"
}, {
  icon: Database,
  title: "On Prem Backup",
  description: "Local backup solutions",
  link: "/solutions/onprem-backup"
}, {
  icon: Cloud,
  title: "Cloud-to-Cloud Backup",
  description: "SaaS data protection and backup",
  link: "/solutions/cloud-to-cloud-backup"
}, {
  icon: Mail,
  title: "Email Archiving",
  description: "Compliance and continuity",
  link: "/solutions/email-archiving"
}];
const cybersecuritySolutions = [{
  icon: Eye,
  title: "Servers and Data Protection",
  description: "Insider threat protection and access control",
  link: "/solutions/servers-data-protection"
}, {
  icon: Shield,
  title: "Endpoint Protection with EDR",
  description: "Comprehensive endpoint security with detection and response",
  link: "/solutions/endpoint-protection"
}, {
  icon: Lock,
  title: "Ransomware Protection",
  description: "Advanced ransomware defense systems",
  link: "/solutions/ransomware-protection"
}, {
  icon: Search,
  title: "MDR",
  description: "Managed Detection and Response",
  link: "/solutions/mdr"
}, {
  icon: Users,
  title: "Security Awareness",
  description: "User security training",
  link: "/solutions/security-awareness"
}, {
  icon: Mail,
  title: "Email Protection",
  description: "Email threat protection",
  link: "/solutions/email-protection"
}, {
  icon: Key,
  title: "Email Encryption",
  description: "Secure email communications",
  link: "/solutions/email-encryption"
}];
export default function Solutions() {
  const [hoveredSection, setHoveredSection] = useState<'data' | 'cyber' | null>(null);
  return <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="IT Solutions & Digital Transformation Services MENA | S2 Management Solutions" description="Comprehensive IT solutions for MENA enterprises: data protection and cybersecurity solutions. Serving UAE, Saudi Arabia, and Middle East since 2013." keywords="IT solutions MENA, data protection UAE, cybersecurity solutions Middle East, disaster recovery Saudi Arabia, endpoint protection, email security" canonicalUrl="https://s2mgt.com/solutions" />
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-4 relative overflow-hidden md:py-[55px]">
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
                        Solutions Portfolio
                      </Badge>
                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Two-Pillar Solution Portfolio
                      </h1>
                      <p className="text-base md:text-lg text-slate-200 mb-4 leading-relaxed">
                        S2 delivers comprehensive solutions across two core areas: Data Protection and Cybersecurity, providing complete coverage for your enterprise infrastructure needs.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button size="default" className="text-base px-6 relative border-2 border-transparent bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300" onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=IT%20Solutions%20Consultation', '_blank')}>
                          <span className="relative z-10">Request Consultation</span>
                          <div className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                        </Button>
                      </div>
                    </div>
                    
                    {/* Right - Interactive Wheel */}
                    <div className="relative flex justify-center lg:justify-start lg:pl-8">
                      <div className="w-96 h-72 flex items-center justify-center px-[11px] mx-[60px]">
                        <div className="relative w-[280px] h-[280px]">
                          {/* Main SVG Wheel */}
                          <svg viewBox="0 0 200 200" className="w-full h-full">
                            <defs>
                              <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                                <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3" />
                              </filter>
                            </defs>
                            
                            {/* Data Protection Semi-Circle (Left Half) */}
                            <path d="M 100 100 L 99 100 L 99 20 A 80 80 0 0 0 99 180 L 99 100 Z" fill="hsl(var(--primary) / 0.8)" stroke="hsl(var(--primary))" strokeWidth="2" filter="url(#shadow)" />
                            
                            {/* Cybersecurity Semi-Circle (Right Half) */}
                            <path d="M 100 100 L 101 100 L 101 20 A 80 80 0 0 1 101 180 L 101 100 Z" fill="rgb(20 184 166)" stroke="rgb(13 148 136)" strokeWidth="2" filter="url(#shadow)" />
                            
                            {/* Center S2 Circle */}
                            <circle cx="100" cy="100" r="18" fill="white" stroke="#ddd" strokeWidth="2" filter="url(#shadow)" />
                            
                            {/* S2 Logo */}
                            <image x="85" y="85" width="30" height="30" href="/lovable-uploads/abad019c-82ea-40d6-ab24-2bcf8726240d.png" />
                            
                            {/* Data Protection Text - positioned in left semicircle */}
                            <text x="50" y="95" textAnchor="middle" className="text-xs font-medium" fill="white">
                              Data
                            </text>
                            <text x="50" y="107" textAnchor="middle" className="text-xs font-medium" fill="white">
                              Protection
                            </text>
                            
                            {/* Cybersecurity Text - positioned in right semicircle */}
                            <text x="150" y="95" textAnchor="middle" className="text-xs font-medium" fill="white">
                              Cyber
                            </text>
                            <text x="150" y="107" textAnchor="middle" className="text-xs font-medium" fill="white">
                              Security
                            </text>
                          </svg>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Categories Grid */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Data Protection Column */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Database className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-bold">Data Protection Solutions</h2>
                </div>
                <div className="space-y-4">
                  {dataProtectionSolutions.map((solution, index) => {
                  const IconComponent = solution.icon;
                  return <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-3">
                            <IconComponent className="h-5 w-5 text-primary" />
                            <div className="flex-1">
                              <h3 className="font-semibold">{solution.title}</h3>
                              <p className="text-sm text-muted-foreground">{solution.description}</p>
                            </div>
                            <Button size="sm" variant="ghost" asChild>
                              <Link to={solution.link}>
                                <ArrowRight className="h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>;
                })}
                </div>
              </div>

              {/* Cybersecurity Column */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Shield className="h-8 w-8 text-teal-500" />
                  <h2 className="text-2xl font-bold">Cybersecurity Solutions</h2>
                </div>
                <div className="space-y-4">
                  {cybersecuritySolutions.map((solution, index) => {
                  const IconComponent = solution.icon;
                  return <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-3">
                             <IconComponent className="h-5 w-5 text-teal-500" />
                            <div className="flex-1">
                              <h3 className="font-semibold">{solution.title}</h3>
                              <p className="text-sm text-muted-foreground">{solution.description}</p>
                            </div>
                            <Button size="sm" variant="ghost" asChild>
                              <Link to={solution.link}>
                                <ArrowRight className="h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>;
                })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Secure and Protect Your Infrastructure?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how S2's data protection and cybersecurity solutions can strengthen your enterprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Request Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
}