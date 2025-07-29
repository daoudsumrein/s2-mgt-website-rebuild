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
              <div className="relative flex items-center justify-center min-h-[800px]">
                <div className="relative w-[700px] h-[700px]">
                  {/* Container for wheel interaction */}
                  <div 
                    className="absolute inset-0"
                    onMouseLeave={() => setHoveredSection(null)}
                  >
                    {/* Main SVG Wheel */}
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      <defs>
                        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3"/>
                        </filter>
                      </defs>
                      
                      {/* Data Protection Semi-Circle (Left Half) */}
                      <path
                        d="M 100 100 L 100 20 A 80 80 0 0 0 100 180 Z"
                        fill="#87CEEB"
                        stroke="#5A9FCD"
                        strokeWidth="2"
                        className={`cursor-pointer transition-all duration-300 ${hoveredSection === 'cyber' ? 'opacity-20' : 'opacity-100'}`}
                        filter="url(#shadow)"
                        onMouseEnter={() => setHoveredSection('data')}
                      />
                      
                      {/* Cybersecurity Semi-Circle (Right Half) */}
                      <path
                        d="M 100 100 L 100 20 A 80 80 0 0 1 100 180 Z"
                        fill="#00ffd0"
                        stroke="#00C7A3"
                        strokeWidth="2"
                        className={`cursor-pointer transition-all duration-300 ${hoveredSection === 'data' ? 'opacity-20' : 'opacity-100'}`}
                        filter="url(#shadow)"
                        onMouseEnter={() => setHoveredSection('cyber')}
                      />
                      
                      {/* Center S2 Circle */}
                      <circle
                        cx="100"
                        cy="100"
                        r="25"
                        fill="white"
                        stroke="#ddd"
                        strokeWidth="2"
                        filter="url(#shadow)"
                      />
                      
                      {/* S2 Text */}
                      <text x="100" y="107" textAnchor="middle" className="text-lg font-bold" fill="#333">
                        S2
                      </text>
                      
                      {/* Section Labels - Only show when not hovering */}
                      {!hoveredSection && (
                        <>
                          <text x="60" y="90" textAnchor="middle" className="text-sm font-semibold" fill="#333">
                            Data
                          </text>
                          <text x="60" y="105" textAnchor="middle" className="text-sm font-semibold" fill="#333">
                            Protection
                          </text>
                          
                          <text x="140" y="90" textAnchor="middle" className="text-sm font-semibold" fill="#333">
                            Cyber
                          </text>
                          <text x="140" y="105" textAnchor="middle" className="text-sm font-semibold" fill="#333">
                            Security
                          </text>
                        </>
                      )}
                    </svg>

                    {/* Data Protection Solution Segments */}
                    {hoveredSection === 'data' && (
                      <div className="absolute inset-0 animate-fade-in">
                        <svg viewBox="0 0 200 200" className="w-full h-full">
                          {dataProtectionSolutions.map((solution, index) => {
                            const totalSolutions = dataProtectionSolutions.length;
                            const angleStep = 360 / totalSolutions;
                            const startAngle = -90 + (index * angleStep); // Start from top
                            const endAngle = startAngle + angleStep;
                            
                            const startAngleRad = (startAngle * Math.PI) / 180;
                            const endAngleRad = (endAngle * Math.PI) / 180;
                            
                            const outerRadius = 80;
                            const innerRadius = 25;
                            
                            const x1 = 100 + Math.cos(startAngleRad) * innerRadius;
                            const y1 = 100 + Math.sin(startAngleRad) * innerRadius;
                            const x2 = 100 + Math.cos(startAngleRad) * outerRadius;
                            const y2 = 100 + Math.sin(startAngleRad) * outerRadius;
                            const x3 = 100 + Math.cos(endAngleRad) * outerRadius;
                            const y3 = 100 + Math.sin(endAngleRad) * outerRadius;
                            const x4 = 100 + Math.cos(endAngleRad) * innerRadius;
                            const y4 = 100 + Math.sin(endAngleRad) * innerRadius;
                            
                            const largeArcFlag = angleStep > 180 ? 1 : 0;
                            
                            const pathData = `
                              M ${x1} ${y1}
                              L ${x2} ${y2}
                              A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${x3} ${y3}
                              L ${x4} ${y4}
                              A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x1} ${y1}
                              Z
                            `;
                            
                            const textAngle = startAngle + (angleStep / 2);
                            const textRadius = (outerRadius + innerRadius) / 2;
                            const textX = 100 + Math.cos((textAngle * Math.PI) / 180) * textRadius;
                            const textY = 100 + Math.sin((textAngle * Math.PI) / 180) * textRadius;
                            
                            return (
                              <g key={solution.title}>
                                <path
                                  d={pathData}
                                  fill="#87CEEB"
                                  stroke="white"
                                  strokeWidth="2"
                                  className="cursor-pointer hover:fill-[#5A9FCD] transition-colors duration-200"
                                  filter="url(#shadow)"
                                />
                                <text
                                  x={textX}
                                  y={textY}
                                  textAnchor="middle"
                                  dominantBaseline="middle"
                                  className="text-xs font-medium pointer-events-none"
                                  fill="white"
                                  transform={`rotate(${textAngle > 90 && textAngle < 270 ? textAngle + 180 : textAngle} ${textX} ${textY})`}
                                >
                                  {solution.title}
                                </text>
                              </g>
                            );
                          })}
                          
                          {/* Center S2 Circle */}
                          <circle
                            cx="100"
                            cy="100"
                            r="25"
                            fill="white"
                            stroke="#ddd"
                            strokeWidth="2"
                            filter="url(#shadow)"
                          />
                          <text x="100" y="107" textAnchor="middle" className="text-lg font-bold" fill="#333">
                            S2
                          </text>
                        </svg>
                      </div>
                    )}

                    {/* Cybersecurity Solution Segments */}
                    {hoveredSection === 'cyber' && (
                      <div className="absolute inset-0 animate-fade-in">
                        <svg viewBox="0 0 200 200" className="w-full h-full">
                          {cybersecuritySolutions.map((solution, index) => {
                            const totalSolutions = cybersecuritySolutions.length;
                            const angleStep = 360 / totalSolutions;
                            const startAngle = -90 + (index * angleStep); // Start from top
                            const endAngle = startAngle + angleStep;
                            
                            const startAngleRad = (startAngle * Math.PI) / 180;
                            const endAngleRad = (endAngle * Math.PI) / 180;
                            
                            const outerRadius = 80;
                            const innerRadius = 25;
                            
                            const x1 = 100 + Math.cos(startAngleRad) * innerRadius;
                            const y1 = 100 + Math.sin(startAngleRad) * innerRadius;
                            const x2 = 100 + Math.cos(startAngleRad) * outerRadius;
                            const y2 = 100 + Math.sin(startAngleRad) * outerRadius;
                            const x3 = 100 + Math.cos(endAngleRad) * outerRadius;
                            const y3 = 100 + Math.sin(endAngleRad) * outerRadius;
                            const x4 = 100 + Math.cos(endAngleRad) * innerRadius;
                            const y4 = 100 + Math.sin(endAngleRad) * innerRadius;
                            
                            const largeArcFlag = angleStep > 180 ? 1 : 0;
                            
                            const pathData = `
                              M ${x1} ${y1}
                              L ${x2} ${y2}
                              A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${x3} ${y3}
                              L ${x4} ${y4}
                              A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x1} ${y1}
                              Z
                            `;
                            
                            const textAngle = startAngle + (angleStep / 2);
                            const textRadius = (outerRadius + innerRadius) / 2;
                            const textX = 100 + Math.cos((textAngle * Math.PI) / 180) * textRadius;
                            const textY = 100 + Math.sin((textAngle * Math.PI) / 180) * textRadius;
                            
                            return (
                              <g key={solution.title}>
                                <path
                                  d={pathData}
                                  fill="#00ffd0"
                                  stroke="white"
                                  strokeWidth="2"
                                  className="cursor-pointer hover:fill-[#00C7A3] transition-colors duration-200"
                                  filter="url(#shadow)"
                                />
                                <text
                                  x={textX}
                                  y={textY}
                                  textAnchor="middle"
                                  dominantBaseline="middle"
                                  className="text-xs font-medium pointer-events-none"
                                  fill="white"
                                  transform={`rotate(${textAngle > 90 && textAngle < 270 ? textAngle + 180 : textAngle} ${textX} ${textY})`}
                                >
                                  {solution.title}
                                </text>
                              </g>
                            );
                          })}
                          
                          {/* Center S2 Circle */}
                          <circle
                            cx="100"
                            cy="100"
                            r="25"
                            fill="white"
                            stroke="#ddd"
                            strokeWidth="2"
                            filter="url(#shadow)"
                          />
                          <text x="100" y="107" textAnchor="middle" className="text-lg font-bold" fill="#333">
                            S2
                          </text>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-muted-foreground">
                  {hoveredSection === 'data' && "Data Protection Solutions"}
                  {hoveredSection === 'cyber' && "Cybersecurity Solutions"}
                  {!hoveredSection && "Hover over each section to explore our solutions"}
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
                  <Shield className="h-8 w-8" style={{ color: '#00ffd0' }} />
                  <h2 className="text-2xl font-bold">Cybersecurity Solutions</h2>
                </div>
                <div className="space-y-4">
                  {cybersecuritySolutions.map((solution, index) => {
                    const IconComponent = solution.icon;
                    return (
                      <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-3">
                            <IconComponent className="h-5 w-5" style={{ color: '#00ffd0' }} />
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