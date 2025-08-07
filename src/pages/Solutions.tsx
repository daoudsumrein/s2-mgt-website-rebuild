import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Server, Workflow, Search, Cloud, Lock, ArrowRight, CheckCircle, Database, Eye, Users, Mail, Key } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
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
  const [activeSection, setActiveSection] = useState<'data' | 'cyber' | null>(null);
  const [particles, setParticles] = useState<Array<{
    id: number, 
    x: number, 
    y: number, 
    delay: number,
    size: number,
    speed: number,
    direction: number
  }>>([]);

  useEffect(() => {
    // Generate floating particles with more properties for movement
    const newParticles = Array.from({length: 20}, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 6,
      size: Math.random() * 3 + 1, // 1-4px
      speed: Math.random() * 20 + 10, // 10-30s duration
      direction: Math.random() * 360 // random direction
    }));
    setParticles(newParticles);
  }, []);

  const handleSectionHover = (section: 'data' | 'cyber') => {
    setActiveSection(section);
  };

  const handleSectionLeave = () => {
    setActiveSection(null);
  };

  const handleSectionClick = (section: 'data' | 'cyber') => {
    // Add click animation and scroll to solutions
    const solutionsSection = document.getElementById('solutions-grid');
    if (solutionsSection) {
      solutionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead 
        title="IT Solutions & Digital Transformation Services MENA | S2 Management Solutions" 
        description="Comprehensive IT solutions for MENA enterprises: data protection and cybersecurity solutions. Serving UAE, Saudi Arabia, and Middle East since 2013." 
        keywords="IT solutions MENA, data protection UAE, cybersecurity solutions Middle East, disaster recovery Saudi Arabia, endpoint protection, email security" 
        canonicalUrl="https://s2mgt.com/solutions" 
      />
      <Navigation />
      
      <main className="flex-1">
        {/* Interactive Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen relative overflow-hidden">
          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="absolute rounded-full animate-pulse"
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  backgroundColor: `hsl(var(--primary) / ${0.4 + Math.random() * 0.3})`,
                  animationDelay: `${particle.delay}s`,
                  animationDuration: `${particle.speed}s`,
                  animation: `floatMove ${particle.speed}s infinite, pulse 2s infinite`,
                  transform: `rotate(${particle.direction}deg)`
                }}
              />
            ))}
          </div>

          {/* Additional moving particles with different effects */}
          <div className="absolute inset-0 pointer-events-none">
            {particles.slice(0, 8).map((particle) => (
              <div
                key={`glow-${particle.id}`}
                className="absolute rounded-full"
                style={{
                  left: `${(particle.x + 20) % 100}%`,
                  top: `${(particle.y + 30) % 100}%`,
                  width: `${particle.size * 1.5}px`,
                  height: `${particle.size * 1.5}px`,
                  backgroundColor: `hsl(var(--secondary) / ${0.2 + Math.random() * 0.2})`,
                  animation: `floatCircle ${particle.speed * 1.5}s infinite, glowPulse ${particle.speed * 0.8}s infinite`,
                  animationDelay: `${particle.delay * 1.5}s`,
                  filter: 'blur(0.5px)'
                }}
              />
            ))}
          </div>


          <div className="container mx-auto px-4 min-h-screen flex items-center">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
              {/* Left Content */}
              <div className="z-10">
                <Badge variant="outline" className="mb-6 border-primary/40 text-primary bg-primary/10 backdrop-blur-sm">
                  Solutions Portfolio
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-400 to-teal-400 bg-clip-text text-transparent">
                  Two-Pillar Solution Portfolio
                </h1>
                <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                  S2 delivers comprehensive solutions across two core areas: Data Protection and Cybersecurity, providing complete coverage for your enterprise infrastructure needs.
                </p>
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=IT%20Solutions%20Consultation', '_blank')}
                >
                  Request Consultation
                </Button>
              </div>

              {/* Interactive Circle Visualization */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Main Circle Container */}
                  <div 
                    className={`relative w-96 h-96 cursor-pointer transition-all duration-500 ${
                      activeSection ? 'scale-105' : 'hover:scale-102'
                    }`}
                  >
                    {/* Background Circle with Gradient */}
                    <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                      activeSection === 'data' ? 'bg-gradient-to-r from-primary to-blue-500 shadow-2xl shadow-primary/30' :
                      activeSection === 'cyber' ? 'bg-gradient-to-r from-teal-500 to-green-400 shadow-2xl shadow-teal-500/30' :
                      'bg-gradient-to-r from-primary to-teal-500'
                    }`} />
                    
                    {/* Inner Circle */}
                    <div className="absolute inset-4 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center overflow-hidden">
                      {/* Default Content */}
                      <div className={`text-center transition-all duration-500 ${
                        activeSection ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
                      }`}>
                        <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-primary to-teal-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                          S2
                        </div>
                        <div className="text-white font-semibold text-lg">Two-Pillar Solution</div>
                        <div className="text-slate-400 text-sm mt-2">Hover to explore</div>
                      </div>

                      {/* Data Protection Content */}
                      <div className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-500 ${
                        activeSection === 'data' ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                      }`}>
                        <h3 className="text-2xl font-bold text-primary mb-4">DATA PROTECTION</h3>
                        <p className="text-slate-200 text-sm px-8 leading-relaxed">
                          Comprehensive data backup, recovery, and protection solutions to safeguard your critical business information.
                        </p>
                      </div>

                      {/* Cybersecurity Content */}
                      <div className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-500 ${
                        activeSection === 'cyber' ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                      }`}>
                        <h3 className="text-2xl font-bold text-teal-400 mb-4">CYBER SECURITY</h3>
                        <p className="text-slate-200 text-sm px-8 leading-relaxed">
                          Advanced cybersecurity solutions including threat detection, prevention, and response to protect your infrastructure.
                        </p>
                      </div>
                    </div>

                    {/* Interactive Hover Areas */}
                    <div 
                      className="absolute top-0 left-0 w-1/2 h-full rounded-l-full cursor-pointer"
                      onMouseEnter={() => handleSectionHover('data')}
                      onMouseLeave={handleSectionLeave}
                      onClick={() => handleSectionClick('data')}
                    />
                    <div 
                      className="absolute top-0 right-0 w-1/2 h-full rounded-r-full cursor-pointer"
                      onMouseEnter={() => handleSectionHover('cyber')}
                      onMouseLeave={handleSectionLeave}
                      onClick={() => handleSectionClick('cyber')}
                    />
                  </div>

                  {/* Info Cards */}
                  <div className={`absolute -bottom-20 left-1/2 transform -translate-x-1/2 flex gap-6 transition-all duration-500 ${
                    activeSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    <Card className="w-48 bg-slate-800/80 backdrop-blur-sm border-primary/30">
                      <CardContent className="p-4 text-center">
                        <h4 className="font-semibold text-primary mb-2">Data Protection</h4>
                        <p className="text-sm text-slate-300">Advanced backup & recovery solutions</p>
                      </CardContent>
                    </Card>
                    <Card className="w-48 bg-slate-800/80 backdrop-blur-sm border-teal-500/30">
                      <CardContent className="p-4 text-center">
                        <h4 className="font-semibold text-teal-400 mb-2">Cyber Security</h4>
                        <p className="text-sm text-slate-300">Comprehensive threat protection</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Categories Grid */}
        <section id="solutions-grid" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Explore Our Solutions</h2>
              <p className="text-muted-foreground text-lg">Choose from our comprehensive portfolio of enterprise solutions</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Data Protection Column */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-8">
                  <Database className="h-10 w-10 text-primary" />
                  <h3 className="text-3xl font-bold">Data Protection Solutions</h3>
                </div>
                <div className="space-y-4">
                  {dataProtectionSolutions.map((solution, index) => {
                    const IconComponent = solution.icon;
                    return (
                      <Card key={index} className="group hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border-l-4 border-l-primary/30 hover:border-l-primary">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-4">
                            <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                              <IconComponent className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-lg mb-1">{solution.title}</h4>
                              <p className="text-muted-foreground">{solution.description}</p>
                            </div>
                            <Button size="sm" variant="ghost" asChild className="opacity-70 group-hover:opacity-100 transition-opacity">
                              <Link to={solution.link}>
                                <ArrowRight className="h-5 w-5" />
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Cybersecurity Column */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-8">
                  <Shield className="h-10 w-10 text-teal-500" />
                  <h3 className="text-3xl font-bold">Cybersecurity Solutions</h3>
                </div>
                <div className="space-y-4">
                  {cybersecuritySolutions.map((solution, index) => {
                    const IconComponent = solution.icon;
                    return (
                      <Card key={index} className="group hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border-l-4 border-l-teal-500/30 hover:border-l-teal-500">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-4">
                            <div className="p-3 rounded-lg bg-teal-500/10 group-hover:bg-teal-500/20 transition-colors">
                              <IconComponent className="h-6 w-6 text-teal-500" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-lg mb-1">{solution.title}</h4>
                              <p className="text-muted-foreground">{solution.description}</p>
                            </div>
                            <Button size="sm" variant="ghost" asChild className="opacity-70 group-hover:opacity-100 transition-opacity">
                              <Link to={solution.link}>
                                <ArrowRight className="h-5 w-5" />
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}