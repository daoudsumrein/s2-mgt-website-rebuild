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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
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
                      <div className="w-96 h-72 bg-gradient-to-br from-primary/20 via-blue-500/20 to-secondary/20 rounded-lg flex items-center justify-center border border-white/10 px-[11px] mx-[60px]">
                        <div className="relative w-[280px] h-[280px]">
                          {/* Main SVG Wheel */}
                          <svg viewBox="0 0 200 200" className="w-full h-full">
                            <defs>
                              <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                                <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3" />
                              </filter>
                              
                              {/* Gradient for Data Protection text - bright and vibrant */}
                              <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#ffed4e" />
                                <stop offset="100%" stopColor="#ff6b35" />
                              </linearGradient>
                              
                              {/* Gradient for Cybersecurity text - bright and vibrant */}
                              <linearGradient id="cyberGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#00f5ff" />
                                <stop offset="100%" stopColor="#fff" />
                              </linearGradient>
                              
                              {/* Abstract organic line pattern for Data Protection side */}
                              <pattern id="dataPattern" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                                <path d="M0 12 Q8 8 12 12 Q17 16 25 12" stroke="white" strokeWidth="0.8" strokeOpacity="0.06" fill="none" />
                                <path d="M5 0 Q12 7 20 5 Q22 8 25 10" stroke="white" strokeWidth="0.6" strokeOpacity="0.04" fill="none" />
                                <path d="M0 20 Q10 15 15 20 Q20 25 25 22" stroke="rgba(255,255,255,0.03)" strokeWidth="1" fill="none" />
                              </pattern>
                              
                              {/* Abstract organic line pattern for Cybersecurity side */}
                              <pattern id="cyberPattern" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
                                <path d="M0 11 Q6 6 11 11 Q16 16 22 11" stroke="white" strokeWidth="0.7" strokeOpacity="0.05" fill="none" />
                                <path d="M4 0 Q11 8 18 2 Q20 6 22 8" stroke="rgba(255,255,255,0.03)" strokeWidth="0.8" fill="none" />
                                <path d="M0 18 Q8 14 14 18 Q18 22 22 20" stroke="white" strokeWidth="0.5" strokeOpacity="0.04" fill="none" />
                              </pattern>
                            </defs>
                            
                            {/* Data Protection Semi-Circle (Left Half) - enlarged and separated */}
                            <path d="M 100 100 L 96 100 L 96 10 A 90 90 0 0 0 96 190 L 96 100 Z" fill="hsl(var(--primary) / 0.8)" stroke="hsl(var(--primary))" strokeWidth="2" filter="url(#shadow)" />
                            <path d="M 100 100 L 96 100 L 96 10 A 90 90 0 0 0 96 190 L 96 100 Z" fill="url(#dataPattern)" />
                            
                            {/* Cybersecurity Semi-Circle (Right Half) - enlarged and separated */}
                            <path d="M 100 100 L 104 100 L 104 10 A 90 90 0 0 1 104 190 L 104 100 Z" fill="rgb(20 184 166)" stroke="rgb(13 148 136)" strokeWidth="2" filter="url(#shadow)" />
                            <path d="M 100 100 L 104 100 L 104 10 A 90 90 0 0 1 104 190 L 104 100 Z" fill="url(#cyberPattern)" />
                            
                            {/* Decorative elements for Data Protection side */}
                            <circle cx="30" cy="65" r="2" fill="white" fillOpacity="0.4" />
                            <circle cx="40" cy="135" r="1.5" fill="white" fillOpacity="0.3" />
                            <circle cx="60" cy="45" r="1.2" fill="white" fillOpacity="0.35" />
                            
                            {/* Decorative elements for Cybersecurity side */}
                            <circle cx="170" cy="65" r="2" fill="white" fillOpacity="0.4" />
                            <circle cx="160" cy="135" r="1.5" fill="white" fillOpacity="0.3" />
                            <circle cx="140" cy="45" r="1.2" fill="white" fillOpacity="0.35" />
                            
                            {/* Center S2 Circle */}
                            <circle cx="100" cy="100" r="18" fill="white" stroke="#ddd" strokeWidth="2" filter="url(#shadow)" />
                            
                            {/* S2 Logo */}
                            <image x="85" y="85" width="30" height="30" href="/lovable-uploads/abad019c-82ea-40d6-ab24-2bcf8726240d.png" />
                            
                            {/* Data Protection Text with white color and moved left */}
                            <text x="44" y="97" textAnchor="middle" className="font-black tracking-wide" fill="white" style={{fontSize: '9px', fontFamily: '"Inter", "Helvetica Neue", sans-serif', textShadow: '0 1px 2px rgba(0,0,0,0.3)'}}>
                              DATA
                            </text>
                            <text x="44" y="107" textAnchor="middle" className="font-black tracking-wide" fill="white" style={{fontSize: '9px', fontFamily: '"Inter", "Helvetica Neue", sans-serif', textShadow: '0 1px 2px rgba(0,0,0,0.3)'}}>
                              PROTECTION
                            </text>
                            
                            {/* Cybersecurity Text with bright gradient and smaller styling */}
                            <text x="152" y="97" textAnchor="middle" className="font-black tracking-wide" fill="url(#cyberGradient)" style={{fontSize: '9px', fontFamily: '"Inter", "Helvetica Neue", sans-serif', textShadow: '0 1px 2px rgba(0,0,0,0.3)'}}>
                              CYBER
                            </text>
                            <text x="152" y="107" textAnchor="middle" className="font-black tracking-wide" fill="url(#cyberGradient)" style={{fontSize: '9px', fontFamily: '"Inter", "Helvetica Neue", sans-serif', textShadow: '0 1px 2px rgba(0,0,0,0.3)'}}>
                              SECURITY
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

      </main>
      <Footer />
    </div>;
}