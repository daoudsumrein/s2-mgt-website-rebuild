import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Server, 
  Workflow, 
  Search, 
  Cloud, 
  Lock,
  ArrowRight,
  CheckCircle,
  Database,
  Eye,
  Users,
  Mail,
  Key
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const dataProtectionSolutions = [
  {
    icon: Server,
    title: "Disaster Recovery",
    description: "Comprehensive DR planning and orchestration",
    link: "/solutions/disaster-recovery"
  },
  {
    icon: Workflow,
    title: "Server Migration",
    description: "Seamless any-to-any server migrations",
    link: "/solutions/server-migration"
  },
  {
    icon: Search,
    title: "DR & Migration Orchestration",
    description: "Automated workflow orchestration",
    link: "/solutions/dr-orchestration"
  },
  {
    icon: Database,
    title: "Endpoint Cloud Backup",
    description: "Cloud-based endpoint protection",
    link: "/solutions/endpoint-backup"
  },
  {
    icon: Server,
    title: "Servers Cloud Backup",
    description: "Server backup and replication",
    link: "/solutions/server-backup"
  },
  {
    icon: Database,
    title: "On Prem Backup",
    description: "Local backup solutions",
    link: "/solutions/onprem-backup"
  },
  {
    icon: Mail,
    title: "Email Archiving",
    description: "Compliance and continuity",
    link: "/solutions/email-archiving"
  }
];

const cybersecuritySolutions = [
  {
    icon: Shield,
    title: "Endpoint Protection",
    description: "Advanced endpoint security",
    link: "/solutions/endpoint-protection"
  },
  {
    icon: Eye,
    title: "EDR",
    description: "Endpoint Detection and Response",
    link: "/solutions/edr"
  },
  {
    icon: Search,
    title: "MDR",
    description: "Managed Detection and Response",
    link: "/solutions/mdr"
  },
  {
    icon: Users,
    title: "Security Awareness",
    description: "User security training",
    link: "/solutions/security-awareness"
  },
  {
    icon: Mail,
    title: "Email Protection",
    description: "Email threat protection",
    link: "/solutions/email-protection"
  },
  {
    icon: Key,
    title: "Email Encryption",
    description: "Secure email communications",
    link: "/solutions/email-encryption"
  }
];

export default function Solutions() {
  const [hoveredSection, setHoveredSection] = useState<'data' | 'cyber' | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="IT Solutions & Digital Transformation Services MENA | S2 Management Solutions"
        description="Comprehensive IT solutions for MENA enterprises: data protection and cybersecurity solutions. Serving UAE, Saudi Arabia, and Middle East since 2013."
        keywords="IT solutions MENA, data protection UAE, cybersecurity solutions Middle East, disaster recovery Saudi Arabia, endpoint protection, email security"
        canonicalUrl="https://s2mgt.com/solutions"
      />
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">Solutions</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Two-Pillar Solution Portfolio
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                S2 delivers comprehensive solutions across two core areas: Data Protection and Cybersecurity,
                providing complete coverage for your enterprise infrastructure needs.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Wheel Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative flex items-center justify-center">
                <div className="relative w-96 h-96">
                  {/* Main Circle */}
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    {/* Data Protection Half */}
                    <path
                      d="M 100 100 L 100 10 A 90 90 0 0 1 190 100 Z"
                      fill="hsl(var(--primary) / 0.1)"
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                      className="cursor-pointer transition-all duration-300 hover:fill-primary/20"
                      onMouseEnter={() => setHoveredSection('data')}
                      onMouseLeave={() => setHoveredSection(null)}
                    />
                    
                    {/* Cybersecurity Half */}
                    <path
                      d="M 100 100 L 190 100 A 90 90 0 0 1 100 190 A 90 90 0 0 1 10 100 Z"
                      fill="hsl(var(--secondary) / 0.1)"
                      stroke="hsl(var(--secondary))"
                      strokeWidth="2"
                      className="cursor-pointer transition-all duration-300 hover:fill-secondary/20"
                      onMouseEnter={() => setHoveredSection('cyber')}
                      onMouseLeave={() => setHoveredSection(null)}
                    />
                    
                    {/* Center Circle */}
                    <circle
                      cx="100"
                      cy="100"
                      r="25"
                      fill="hsl(var(--background))"
                      stroke="hsl(var(--border))"
                      strokeWidth="2"
                    />
                    
                    {/* Labels */}
                    <text x="145" y="70" textAnchor="middle" className="text-sm font-semibold fill-current">
                      Data
                    </text>
                    <text x="145" y="85" textAnchor="middle" className="text-sm font-semibold fill-current">
                      Protection
                    </text>
                    
                    <text x="55" y="140" textAnchor="middle" className="text-sm font-semibold fill-current">
                      Cybersecurity
                    </text>
                    
                    <text x="100" y="105" textAnchor="middle" className="text-xs font-medium fill-current">
                      S2
                    </text>
                  </svg>

                  {/* Floating Solution Branches */}
                  {hoveredSection === 'data' && (
                    <div className="absolute inset-0 pointer-events-none">
                      {dataProtectionSolutions.map((solution, index) => {
                        const angle = (index * 51.4) - 90; // Distribute across top half
                        const radius = 150;
                        const x = Math.cos((angle * Math.PI) / 180) * radius;
                        const y = Math.sin((angle * Math.PI) / 180) * radius;
                        
                        return (
                          <div
                            key={solution.title}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-fade-in"
                            style={{
                              left: `calc(50% + ${x}px)`,
                              top: `calc(50% + ${y}px)`,
                            }}
                          >
                            <Card className="w-48 pointer-events-auto shadow-lg">
                              <CardContent className="p-3">
                                <div className="flex items-center space-x-2 mb-1">
                                  <solution.icon className="h-4 w-4 text-primary" />
                                  <h4 className="text-sm font-semibold">{solution.title}</h4>
                                </div>
                                <p className="text-xs text-muted-foreground mb-2">{solution.description}</p>
                                <Button size="sm" variant="outline" asChild className="w-full h-7 text-xs">
                                  <Link to={solution.link}>Learn More</Link>
                                </Button>
                              </CardContent>
                            </Card>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {hoveredSection === 'cyber' && (
                    <div className="absolute inset-0 pointer-events-none">
                      {cybersecuritySolutions.map((solution, index) => {
                        const angle = (index * 60) + 90; // Distribute across bottom half
                        const radius = 150;
                        const x = Math.cos((angle * Math.PI) / 180) * radius;
                        const y = Math.sin((angle * Math.PI) / 180) * radius;
                        
                        return (
                          <div
                            key={solution.title}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-fade-in"
                            style={{
                              left: `calc(50% + ${x}px)`,
                              top: `calc(50% + ${y}px)`,
                            }}
                          >
                            <Card className="w-48 pointer-events-auto shadow-lg">
                              <CardContent className="p-3">
                                <div className="flex items-center space-x-2 mb-1">
                                  <solution.icon className="h-4 w-4 text-secondary" />
                                  <h4 className="text-sm font-semibold">{solution.title}</h4>
                                </div>
                                <p className="text-xs text-muted-foreground mb-2">{solution.description}</p>
                                <Button size="sm" variant="outline" asChild className="w-full h-7 text-xs">
                                  <Link to={solution.link}>Learn More</Link>
                                </Button>
                              </CardContent>
                            </Card>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-muted-foreground">
                  Hover over each section to explore our comprehensive solution portfolio
                </p>
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
                    return (
                      <Card key={index} className="hover:shadow-md transition-shadow">
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
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Cybersecurity Column */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Shield className="h-8 w-8 text-secondary" />
                  <h2 className="text-2xl font-bold">Cybersecurity Solutions</h2>
                </div>
                <div className="space-y-4">
                  {cybersecuritySolutions.map((solution, index) => {
                    const IconComponent = solution.icon;
                    return (
                      <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-3">
                            <IconComponent className="h-5 w-5 text-secondary" />
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
                      </Card>
                    );
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
    </div>
  );
}