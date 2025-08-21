import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Workflow, Settings, Monitor, Zap, CheckCircle, Target, Search, Network, Database, FileText, Clock, Users, Shield, Server, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Network,
    title: "Dependency Analyzer",
    description: "Visually identify application relationships and server dependencies using an interactive map for seamless migration planning"
  },
  {
    icon: Database,
    title: "Automated Data Ingestion",
    description: "Automatically gather migration data from CMDBs, files, and databases to accelerate server migration discovery"
  },
  {
    icon: Settings,
    title: "Migration Rules Engine",
    description: "Implement business and IT parameters throughout each phase of server migration to transform data, evaluate scenarios, and enforce organizational policies"
  },
  {
    icon: Database,
    title: "Consolidated Migration Repository",
    description: "Enhance team collaboration with unified access to server migration data and documentation"
  },
  {
    icon: FileText,
    title: "Automated Migration Runbooks",
    description: "Automated runbooks to mitigate risks during server migrations and system modifications"
  },
  {
    icon: Monitor,
    title: "Migration Progress Views",
    description: "Custom views and reports to track migration progress and improve efficiency with saved queries"
  },
  {
    icon: Clock,
    title: "Real-time Migration Management",
    description: "Actively oversee server migration projects in real-time with data tailored to specific roles and responsibilities"
  }
];

const deliverables = [
  "Minimizes migration risks and human errors during server transitions",
  "Guarantees correct sequencing and completion of migration tasks",
  "Reduces migration execution time, enabling greater scale and speed",
  "Maintains security standards and compliance during server moves",
  "Enables IT teams to focus on strategic initiatives rather than manual migration tasks",
  "Provides comprehensive visibility into migration dependencies and impacts"
];

export default function ServerMigrationOrchestration() {
  // Scroll animation hooks for different sections
  const heroAnimation = useScrollAnimation({ threshold: 0.3 });

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Server Migration Orchestration Solutions MENA - Automated Migration Management | S2 Solutions"
        description="Advanced server migration orchestration for MENA enterprises. Automated server moves, dependency mapping, and migration workflow automation. Serving UAE, Saudi Arabia, and Middle East."
        keywords="server migration orchestration MENA, automated server migration UAE, migration workflow Middle East, server move automation Saudi Arabia, infrastructure migration orchestration"
        canonicalUrl="https://s2mgt.com/solutions/server-migration-orchestration"
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
            <motion.div 
              ref={heroAnimation.ref}
              initial={{ opacity: 0, y: 50 }}
              animate={heroAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-7xl mx-auto"
            >
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
                      <span className="relative">Migration Orchestration</span>
                    </Badge>
                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      <span 
                        className="bg-gradient-to-r from-blue-400 via-blue-500 to-green-400 bg-clip-text text-transparent animate-pulse hover:scale-105 transition-transform duration-300 cursor-default inline-block"
                        style={{
                          backgroundSize: '300% 300%',
                          animation: 'gradientShift 4s ease-in-out infinite'
                        }}
                      >
                        Server Migration Orchestration
                      </span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                      Orchestrate and automate server migration workflows from discovery to completion with intelligent dependency mapping and risk mitigation.
                    </p>
                    
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 relative overflow-hidden group/btn px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold w-full sm:w-auto"
                      onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=Server%20Migration%20Orchestration%20Consultation', '_blank')}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500" />
                      <span className="relative">Schedule Consultation</span>
                    </Button>
                  </div>
                  
                  {/* Right Visual Section */}
                  <div className="order-first lg:order-last">
                    <div className="relative overflow-hidden h-[200px] sm:h-[280px] md:h-[320px] lg:h-[360px] group/visual hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-400 rounded-lg sm:rounded-xl">
                      {/* Migration Visual */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-blue-500/20 to-secondary/20 rounded-xl flex items-center justify-center border border-white/10">
                        <div className="text-center">
                          <Server className="h-16 w-16 md:h-24 md:w-24 text-primary/60 mx-auto mb-4" />
                          <div className="text-sm text-slate-400 font-medium">Migration Orchestration</div>
                        </div>
                      </div>
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5 opacity-0 group-hover/visual:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </section>

        {/* Overview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Intelligent Server Migration Planning</h2>
              <Card>
                <CardContent className="p-8">
                  <p className="text-lg mb-6">
                    Server migrations are critical business operations that require precise planning, execution, and monitoring. Traditional migration approaches often fail due to incomplete discovery, undocumented dependencies, and lack of orchestration, leading to unexpected downtime and business disruption.
                  </p>
                  <div className="grid md:grid-cols-1 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <Search className="h-6 w-6 text-primary mr-3" />
                        Migration Discovery
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Comprehensive discovery is the foundation of successful server migration. Our solution provides complete visibility of all servers, applications, and workloads across your infrastructure, ensuring no critical component is overlooked during the migration process.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <Network className="h-6 w-6 text-primary mr-3" />
                        Dependency Mapping
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Advanced dependency mapping reveals critical relationships between servers, applications, and services. Understanding these connections is essential for determining migration sequences, minimizing impact, and ensuring successful cutover with minimal downtime.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <Workflow className="h-6 w-6 text-primary mr-3" />
                        Migration Orchestration
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Automated orchestration transforms complex migration procedures into streamlined, repeatable processes. By automating migration steps, our solution reduces execution time, eliminates human error, and ensures consistent results across all migration phases.
                      </p>
                    </div>
                  </div>
                  <p className="text-lg mt-6 text-center font-medium">
                    S2 Management Solutions delivers intelligent server migration orchestration that combines robust discovery tools, advanced dependency analytics, and automated workflows to ensure successful migrations with minimal business impact.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Migration Orchestration Features</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <feature.icon className="h-8 w-8 text-primary" />
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Deliver Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Migration Orchestration Deliverables</h2>
              <Card>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {deliverables.map((deliverable, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-teal-500 mt-1 flex-shrink-0" />
                        <span className="text-sm">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Ideal For & Key Benefits */}
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
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Organizations planning data center migrations</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Companies migrating to cloud platforms</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Enterprises with complex server dependencies</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Businesses requiring minimal migration downtime</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Key Benefits */}
                <div>
                  <Card className="border-teal-200 bg-teal-50/50">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3 text-teal-700">
                        <CheckCircle className="h-6 w-6" />
                        <span>Key Benefits</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span>Automated migration workflow orchestration</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span>Comprehensive dependency analysis and mapping</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span>Risk mitigation through intelligent planning</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span>Real-time migration progress monitoring</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Orchestrate Your Server Migrations?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Experience intelligent server migration orchestration with automated workflows and comprehensive dependency mapping
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-primary hover:bg-gray-100 px-8 py-3"
                  onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=Server%20Migration%20Orchestration%20Demo', '_blank')}
                >
                  Schedule Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary px-8 py-3"
                  onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=Server%20Migration%20Orchestration%20Consultation', '_blank')}
                >
                  Get Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}