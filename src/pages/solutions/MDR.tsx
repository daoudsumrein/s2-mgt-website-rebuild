import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Clock, Shield, Target, Eye, Zap, Monitor, Workflow, Cloud, Database, CheckCircle } from "lucide-react";

export default function MDR() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Managed Detection and Response (MDR) Services | MENA Cybersecurity"
        description="Professional MDR services for MENA enterprises. 24/7 security monitoring, threat hunting, and incident response by expert security analysts."
        keywords="MDR services MENA, managed detection response UAE, cybersecurity monitoring Middle East, security operations Saudi Arabia"
        canonicalUrl="https://s2mgt.com/solutions/mdr"
      />
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
                        Cybersecurity Solutions
                      </Badge>
                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Managed Detection & Response
                      </h1>
                      <p className="text-base md:text-lg text-slate-200 mb-4 leading-relaxed">
                        Professional 24/7 security monitoring, threat hunting, and incident response by expert security analysts.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button size="default" className="text-base px-6 relative border-2 border-transparent bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300" onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=MDR%20Service%20Consultation', '_blank')}>
                          <span className="relative z-10">Schedule Consultation</span>
                          <div className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                        </Button>
                      </div>
                    </div>
                    
                    {/* Right Image Placeholder */}
                    <div className="relative flex justify-center lg:justify-start lg:pl-8">
                      <div className="w-96 h-72 bg-gradient-to-br from-primary/20 via-blue-500/20 to-secondary/20 rounded-lg flex items-center justify-center border border-white/10 px-[11px] mx-[60px]">
                        
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20 opacity-0 animate-fade-in [animation-delay:0.2s]">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                OpenText Core MDR: Enterprise-Grade Security for MSPs
              </h2>
              <p className="text-xl max-w-4xl mx-auto text-muted-foreground leading-relaxed">
                Enhance your security operations with scalable, co-managed MDR solutions. OpenText Core MDR redefines cybersecurity for MSPs, providing enterprise-grade protection through a comprehensive SOC-as-a-service model designed to be scalable and flexible, with no hardware requirements or CapEx commitments.
              </p>
            </div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                <Card className="border-l-4 border-l-blue-800 opacity-0 animate-fade-in [animation-delay:0.4s] hover:transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-blue-800">MSP Security Challenges</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">MSPs face numerous challenges when it comes to managing cybersecurity for their clients:</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Limited resources and complex security tools</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Overwhelming volume of sophisticated threats</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Ineffective incident response capabilities</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Higher operational risks and costs</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Difficulty building in-house SOC capabilities</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-blue-600 opacity-0 animate-fade-in [animation-delay:0.6s] hover:transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-blue-600">OpenText Core MDR Solution</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">Our comprehensive platform addresses these challenges by combining:</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Advanced threat detection with 24/7/365 monitoring</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Expert SOC analysts and threat hunters</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Cutting-edge technology including SIEM and SOAR</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Seamless integration with existing tools</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Scalable co-managed SOC operations</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 opacity-0 animate-fade-in [animation-delay:0.8s]">
                Comprehensive Security Benefits
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Shield,
                    title: "24/7/365 SOC Monitoring",
                    description: "Advanced threat detection with continuous monitoring by expert SOC analysts and threat hunters for real-time protection and rapid incident response."
                  },
                  {
                    icon: Users,
                    title: "Automation + Human Expertise", 
                    description: "Perfect blend of automated threat detection and expert human analysis, reducing operational burdens while improving incident response times."
                  },
                  {
                    icon: Zap,
                    title: "No Hardware or CapEx",
                    description: "Cost-effective scalability with no hardware requirements, CapEx commitments, or long-term contracts. Deploy with lightweight, non-intrusive agents."
                  },
                  {
                    icon: Cloud,
                    title: "Seamless Integration",
                    description: "Integrates with 500+ third-party security tools and popular PSA platforms, streamlining operations without disrupting current systems."
                  },
                  {
                    icon: Target,
                    title: "Scalable & Flexible Model",
                    description: "Subscription-based model lets MSPs scale month-to-month with no hidden fees, minimum requirements, or long-term commitments."
                  },
                  {
                    icon: CheckCircle,
                    title: "Regulatory Compliance",
                    description: "Stay compliant with industry standards like NIST, PCI, and SOC 2 with built-in compliance features and automated reporting."
                  }
                ].map((benefit, index) => (
                  <Card key={index} className={`text-center opacity-0 animate-fade-in [animation-delay:${1 + index * 0.1}s] hover:transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:border-blue-600`}>
                    <CardContent className="p-8">
                      <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center group-hover:animate-pulse">
                        <benefit.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent opacity-0 animate-fade-in [animation-delay:1.6s]">
                Advanced Security Capabilities
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Database,
                    title: "SIEM & SOAR Integration",
                    description: "Automate threat detection, response, and remediation workflows with integrated security information and event management plus security orchestration, automation and response capabilities."
                  },
                  {
                    icon: Monitor,
                    title: "Enhanced EDR",
                    description: "Achieve total endpoint protection with real-time threat detection, advanced endpoint monitoring, and comprehensive visibility across your network infrastructure."
                  },
                  {
                    icon: Workflow,
                    title: "Unified PSA",
                    description: "Streamline ticketing and vulnerability management with integrated professional services automation, simplifying workflow management and client communications."
                  },
                  {
                    icon: Shield,
                    title: "Advanced Endpoint Protection",
                    description: "Benefit from proactive monitoring and real-time global threat intelligence, providing comprehensive protection against sophisticated cyber threats."
                  },
                  {
                    icon: Clock,
                    title: "Rapid Incident Response",
                    description: "Provides MSPs with rapid incident response paths for urgent threats, plus continuous proactive threat hunting for comprehensive risk management."
                  },
                  {
                    icon: Cloud,
                    title: "Effortless Deployment",
                    description: "Deploy seamlessly with a lightweight, non-intrusive agent-based monitoring solution that requires minimal setup and maintenance overhead."
                  }
                ].map((feature, index) => (
                  <Card key={index} className={`opacity-0 animate-fade-in [animation-delay:${1.8 + index * 0.1}s] hover:transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:border-blue-600`}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto opacity-0 animate-fade-in [animation-delay:2.4s]">
              <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Security Dashboard</h2>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-600 mb-4">Real-Time Visibility & Control</h3>
                  <p className="text-muted-foreground mb-6">
                    The OpenText Core MDR console provides comprehensive visibility into your security posture with real-time monitoring, detailed analytics, and actionable insights. Track alerts, vulnerabilities, platform status, and security metrics all from a single, intuitive interface.
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Alert Management:</strong> Monitor both solved and open alerts with detailed categorization</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Vulnerability Tracking:</strong> Applications, patches, and critical security updates</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Platform Status:</strong> Real-time system health and performance metrics</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Threat Intelligence:</strong> Advanced analytics and security insights</span>
                    </li>
                  </ul>
                </div>
                <Card className="bg-muted/50 backdrop-blur-sm shadow-xl">
                  <CardContent className="p-6">
                    <div className="bg-slate-800 rounded-lg overflow-hidden border">
                      <div className="bg-blue-600 text-white p-4 text-center">
                        <h4 className="font-semibold">OpenText Core MDR Console</h4>
                      </div>
                      <div className="p-6 grid grid-cols-2 gap-4">
                        <div className="text-center bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <div className="text-3xl font-bold text-blue-600">212</div>
                          <div className="text-xs text-muted-foreground uppercase tracking-wide">Solved Alerts</div>
                        </div>
                        <div className="text-center bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <div className="text-3xl font-bold text-blue-600">55</div>
                          <div className="text-xs text-muted-foreground uppercase tracking-wide">Open Alerts</div>
                        </div>
                        <div className="text-center bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <div className="text-3xl font-bold text-blue-600">592</div>
                          <div className="text-xs text-muted-foreground uppercase tracking-wide">Applications</div>
                        </div>
                        <div className="text-center bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <div className="text-3xl font-bold text-blue-600">6</div>
                          <div className="text-xs text-muted-foreground uppercase tracking-wide">Patches</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent opacity-0 animate-fade-in [animation-delay:2.6s]">
                Top 5 Reasons MSPs Choose OpenText Core MDR
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    number: "1",
                    title: "Seamless Integration with Existing Tools",
                    description: "Integrates with more than 500 third-party security tools, including popular PSA tools, for easy adoption without disrupting current systems. Works seamlessly with your existing infrastructure."
                  },
                  {
                    number: "2", 
                    title: "Scalable & Flexible with No Long-term Contracts",
                    description: "A subscription-based model lets MSPs scale month to month with no long-term commitments, hidden fees, or minimum requirements. Perfect for growing businesses."
                  },
                  {
                    number: "3",
                    title: "Automation with Human Expertise",
                    description: "Combines automation with 24/7/365 expert analysis, ensuring threats are swiftly detected, prioritized, and addressed by experienced SOC analysts."
                  },
                  {
                    number: "4",
                    title: "Enhanced EDR with SIEM and SOAR Capabilities",
                    description: "Extends EDR with advanced SIEM and SOAR, offering real-time monitoring, automated responses, and rapid threat detection capabilities."
                  },
                  {
                    number: "5",
                    title: "Rapid Incident Response & Proactive Threat Hunting",
                    description: "Provides MSPs with rapid incident response paths for urgent threats, plus continuous threat hunting for proactive risk management and prevention."
                  }
                ].map((reason, index) => (
                  <Card key={index} className={`relative opacity-0 animate-fade-in [animation-delay:${2.8 + index * 0.1}s] hover:transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:border-blue-600`}>
                    <div className="absolute -top-4 left-6 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {reason.number}
                    </div>
                    <CardContent className="pt-10 p-6">
                      <h3 className="text-lg font-semibold mb-3">{reason.title}</h3>
                      <p className="text-muted-foreground text-sm">{reason.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Deployment & Support Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto opacity-0 animate-fade-in [animation-delay:3.3s]">
              <h2 className="text-3xl font-bold text-center mb-12">Effortless Deployment & Ongoing Support</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: CheckCircle,
                    title: "Simple Onboarding",
                    description: "From onboarding to offboarding, OpenText Core MDR manages security operations efficiently with minimal setup requirements."
                  },
                  {
                    icon: Zap,
                    title: "Lightweight Agents",
                    description: "Non-intrusive agent-based monitoring solution that doesn't impact system performance or user experience."
                  },
                  {
                    icon: Users,
                    title: "Expert Support", 
                    description: "Ongoing support and rapid incident response from experienced cybersecurity professionals and threat hunters."
                  }
                ].map((item, index) => (
                  <Card key={index} className="text-center hover:transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:border-blue-600">
                    <CardContent className="p-8">
                      <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cost Benefits Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto opacity-0 animate-fade-in [animation-delay:3.5s]">
              <h2 className="text-3xl font-bold text-center mb-12">Cost-Effective Security Operations</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "No CapEx Investment",
                    description: "Eliminate upfront capital expenditure with our subscription-based model"
                  },
                  {
                    title: "No Hardware Costs",
                    description: "Cloud-based solution requires no physical infrastructure or maintenance"
                  },
                  {
                    title: "No Long-term Commitments",
                    description: "Flexible month-to-month scaling without binding contracts or hidden fees"
                  },
                  {
                    title: "Reduced Operational Overhead",
                    description: "Automation and expert oversight reduce the need for internal security staff"
                  }
                ].map((item, index) => (
                  <Card key={index} className="text-center border-l-4 border-l-blue-600 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-blue-600 mb-3">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto text-center bg-muted/50 backdrop-blur-sm shadow-xl opacity-0 animate-fade-in [animation-delay:3.7s]">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Ready to Enhance Your Security Operations?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Discover how OpenText Core MDR can transform your cybersecurity services with scalable, co-managed protection. By combining automation with expert human oversight, OpenText Core MDR reduces operational burdens, improves incident response times, and provides comprehensive security for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg" onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=OpenText%20Core%20MDR%20Demo', '_blank')}>
                    Book a Demo
                  </Button>
                  <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                    Learn More
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  To learn more about OpenText Core Managed Detection and Response or to schedule a demo, contact your OpenText account representative.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}