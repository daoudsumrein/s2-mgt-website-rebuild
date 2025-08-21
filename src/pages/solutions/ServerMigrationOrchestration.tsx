import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Workflow, Settings, Monitor, Zap, CheckCircle, Target, Search, Network, Database, FileText, Clock, Users, Shield, Server, ArrowRight } from "lucide-react";
const features = [{
  icon: Network,
  title: "Dependency Analyzer",
  description: "Visually identify application relationships and server dependencies using an interactive map for seamless migration planning"
}, {
  icon: Database,
  title: "Automated Data Ingestion",
  description: "Automatically gather migration data from CMDBs, files, and databases to accelerate server migration discovery"
}, {
  icon: Settings,
  title: "Migration Rules Engine",
  description: "Implement business and IT parameters throughout each phase of server migration to transform data, evaluate scenarios, and enforce organizational policies"
}, {
  icon: Database,
  title: "Consolidated Migration Repository",
  description: "Enhance team collaboration with unified access to server migration data and documentation"
}, {
  icon: FileText,
  title: "Automated Migration Runbooks",
  description: "Automated runbooks to mitigate risks during server migrations and system modifications"
}, {
  icon: Monitor,
  title: "Migration Progress Views",
  description: "Custom views and reports to track migration progress and improve efficiency with saved queries"
}, {
  icon: Clock,
  title: "Real-time Migration Management",
  description: "Actively oversee server migration projects in real-time with data tailored to specific roles and responsibilities"
}];
const deliverables = ["Minimizes migration risks and human errors during server transitions", "Guarantees correct sequencing and completion of migration tasks", "Reduces migration execution time, enabling greater scale and speed", "Maintains security standards and compliance during server moves", "Enables IT teams to focus on strategic initiatives rather than manual migration tasks", "Provides comprehensive visibility into migration dependencies and impacts"];
export default function ServerMigrationOrchestration() {
  // Scroll animation hooks for different sections
  const heroAnimation = useScrollAnimation({
    threshold: 0.3
  });
  return <div className="min-h-screen flex flex-col">
      <SEOHead title="Server Migration Orchestration Solutions MENA - Automated Migration Management | S2 Solutions" description="Advanced server migration orchestration for MENA enterprises. Automated server moves, dependency mapping, and migration workflow automation. Serving UAE, Saudi Arabia, and Middle East." keywords="server migration orchestration MENA, automated server migration UAE, migration workflow Middle East, server move automation Saudi Arabia, infrastructure migration orchestration" canonicalUrl="https://s2mgt.com/solutions/server-migration-orchestration" />
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
            <motion.div ref={heroAnimation.ref} initial={{
            opacity: 0,
            y: 50
          }} animate={heroAnimation.isInView ? {
            opacity: 1,
            y: 0
          } : {
            opacity: 0,
            y: 50
          }} transition={{
            duration: 0.8,
            ease: "easeOut"
          }} className="max-w-7xl mx-auto">
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
                      <span className="relative">Migration Orchestration</span>
                    </Badge>
                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-green-400 bg-clip-text text-transparent animate-pulse hover:scale-105 transition-transform duration-300 cursor-default inline-block" style={{
                      backgroundSize: '300% 300%',
                      animation: 'gradientShift 4s ease-in-out infinite'
                    }}>
                        Server Migration Orchestration
                      </span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                      Transforming complex data center migrations from overwhelming challenges into streamlined, successful projects with 19 years of proven expertise and methodology.
                    </p>
                    
                    <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 relative overflow-hidden group/btn px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold w-full sm:w-auto" onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=Server%20Migration%20Orchestration%20Consultation', '_blank')}>
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

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-br from-primary to-blue-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div {...useScrollAnimation()} className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-8">
                <motion.div className="text-5xl lg:text-6xl font-black mb-3 bg-gradient-to-b from-white to-blue-100 bg-clip-text text-transparent" initial={{
                scale: 0.5,
                opacity: 0
              }} whileInView={{
                scale: 1,
                opacity: 1
              }} transition={{
                duration: 0.6,
                delay: 0.1
              }}>
                  19
                </motion.div>
                <p className="text-sm uppercase tracking-wider font-medium opacity-90">Years Migration Expertise</p>
              </div>
              <div className="p-8">
                <motion.div className="text-5xl lg:text-6xl font-black mb-3 bg-gradient-to-b from-white to-blue-100 bg-clip-text text-transparent" initial={{
                scale: 0.5,
                opacity: 0
              }} whileInView={{
                scale: 1,
                opacity: 1
              }} transition={{
                duration: 0.6,
                delay: 0.2
              }}>
                  50%
                </motion.div>
                <p className="text-sm uppercase tracking-wider font-medium opacity-90">Average Time Reduction</p>
              </div>
              <div className="p-8">
                <motion.div className="text-5xl lg:text-6xl font-black mb-3 bg-gradient-to-b from-white to-blue-100 bg-clip-text text-transparent" initial={{
                scale: 0.5,
                opacity: 0
              }} whileInView={{
                scale: 1,
                opacity: 1
              }} transition={{
                duration: 0.6,
                delay: 0.3
              }}>
                  100%
                </motion.div>
                <p className="text-sm uppercase tracking-wider font-medium opacity-90">Project Success Rate</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Problem Introduction */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div {...useScrollAnimation()}>
              <h2 className="text-3xl lg:text-5xl font-bold text-center mb-6 text-foreground">
                The Reality of Data Center Migrations
              </h2>
            </motion.div>
            
            <motion.div {...useScrollAnimation()} className="max-w-4xl mx-auto">
              <Card className="p-8 lg:p-12 border-l-4 border-l-orange-500 bg-card shadow-lg">
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Data center migrations are significant undertakings for any organization.</strong> They are large, complicated projects requiring disparate business units to work together for successful execution.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Through these complex projects, unexpected hurdles are inevitable - either through business changes or discovery of previously unknown factors. These highly visible projects often go over budget or behind schedule.
                  </p>
                  
                  <div className="bg-amber-50 dark:bg-amber-950/20 p-6 rounded-xl border-l-4 border-orange-500">
                    <p className="text-lg text-foreground leading-relaxed">
                      <strong>The Core Problem:</strong> When IT teams examine the complexities involved and realize how much they don't know, they find themselves paralyzed - leaving infrastructure transformation opportunities incomplete.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Three Critical Challenges */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div {...useScrollAnimation()} className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">
                Three Critical Challenges Organizations Face
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                After 19 years specializing in data center migrations, we've identified the common obstacles that cause projects to fail:
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {[{
              title: "Infrastructure Knowledge Gap",
              description: "Organizations don't trust their knowledge of IT infrastructure and application dependencies, leading to incomplete planning and unexpected complications during migration execution."
            }, {
              title: "Data Validation Uncertainty",
              description: "Teams are uncertain how to validate data accuracy and currency, resulting in migrations based on outdated or incorrect information that can cause critical system failures."
            }, {
              title: "Limited Tools & Methodology",
              description: "Organizations lack experience and access to best tools and methodologies for managing complex projects, leaving them vulnerable to costly mistakes and extended timelines."
            }].map((challenge, index) => <motion.div key={index} initial={{
              opacity: 0,
              x: -30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.6,
              delay: index * 0.2
            }} whileHover={{
              x: 10
            }} className="relative">
                  <Card className="p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-orange-500">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                          {index + 1}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold mb-4 text-foreground">
                          {challenge.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                          {challenge.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Solution Overview */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div {...useScrollAnimation()} className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">
                The TransitionManager Solution
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our migration consultants leverage TransitionManager software to orchestrate all essential phases of complex data migration with proven methodologies.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[{
              number: "1",
              title: "Infrastructure Visibility",
              description: "Comprehensive view of IT infrastructure with centralized data repository from multiple sources including auto-discovery tools, application lists, and spreadsheets.",
              color: "bg-primary"
            }, {
              number: "2",
              title: "Intelligent Planning",
              description: "Build confidence in migration decisions through detailed dependency maps and logical move group determination with real-time monitoring dashboards.",
              color: "bg-green-500"
            }, {
              number: "3",
              title: "Accelerated Execution",
              description: "Achieve 50% average time reduction through rigorous planning, automated orchestration, and proven execution methodologies with full visibility and control.",
              color: "bg-orange-500"
            }].map((feature, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} whileHover={{
              y: -8
            }} className="text-center">
                  <Card className="p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 bg-card">
                    <motion.div className={`w-20 h-20 ${feature.color} text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg`} whileHover={{
                  scale: 1.1,
                  rotate: 5
                }} transition={{
                  duration: 0.3
                }}>
                      {feature.number}
                    </motion.div>
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Three-Phase Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div {...useScrollAnimation()} className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">
                Proven Three-Phase Migration Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our systematic methodology ensures successful migration outcomes through comprehensive orchestration of complex data center moves.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[{
              number: "1",
              title: "Discovery Phase",
              description: "Gain clear view of IT infrastructure including all assets and dependencies. Consolidate data from multiple sources into centralized, accurate repository. Validate assets through expert interviews, capturing critical tribal knowledge unexposed by auto-discovery tools.",
              benefits: ["Centralized data repository from multiple sources", "Streamlined asset validation process", "Tribal knowledge capture through expert interviews", "Accurate and up-to-date infrastructure inventory"],
              color: "bg-primary",
              textColor: "text-primary"
            }, {
              number: "2",
              title: "Analysis & Planning",
              description: "Build confidence in migration decisions through detailed dependency maps. Determine logical move groups and create step-by-step execution plans. Monitor progress via real-time dashboards with comprehensive task assignment and team collaboration.",
              benefits: ["Confident migration decision making with accurate data", "Detailed asset dependency mapping and visualization", "Logical move group and bundle determination", "Centralized program management platform", "Real-time progress monitoring and dashboards"],
              color: "bg-green-500",
              textColor: "text-green-500"
            }, {
              number: "3",
              title: "Execution",
              description: "Accelerated migration event with 50% average time reduction. Delegate detailed tasks while maintaining command and control. Clear ownership, communication, and visibility improve team ability to respond quickly to inevitable changes.",
              benefits: ["50% reduction in migration time on average", "Automated runbook generation for proper sequencing", "Clear task ownership and timely communication", "Full visibility and quick response to changes", "Maintained command and control throughout execution"],
              color: "bg-orange-500",
              textColor: "text-orange-500"
            }].map((phase, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} className="relative">
                  <Card className="p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card">
                    {/* Number Badge */}
                    <motion.div className={`w-16 h-16 ${phase.color} text-white rounded-full flex items-center justify-center text-2xl font-black shadow-lg mb-6 mx-auto`} whileHover={{
                  scale: 1.1
                }} transition={{
                  duration: 0.3
                }}>
                      {phase.number}
                    </motion.div>
                    
                    <h3 className={`text-xl lg:text-2xl font-semibold mb-4 text-center ${phase.textColor}`}>
                      {phase.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {phase.description}
                    </p>
                    <ul className="space-y-2">
                      {phase.benefits.map((benefit, benefitIndex) => <li key={benefitIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-green-600 dark:text-green-400 font-medium text-sm">
                            {benefit}
                          </span>
                        </li>)}
                    </ul>
                  </Card>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Platform Capabilities */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div {...useScrollAnimation()} className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">
                Complete Platform Capabilities
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Comprehensive tools designed to handle every aspect of complex IT migrations and digital transformations with intelligent automation.
              </p>  
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[{
              title: "Work Together Seamlessly",
              description: "Help teams understand IT environment, create organized plans, and execute migrations smoothly and efficiently across all business and technical silos.",
              color: "border-l-primary",
              titleColor: "text-primary",
              features: ["Break down barriers between business and IT teams", "Collect and display all data in one central location", "Show how applications connect and depend on each other", "Quickly identify which systems should move together", "Improve communication with experts and decision-makers", "Create automatic reports and visual dashboards"]
            }, {
              title: "Smart Analysis and Planning",
              description: "Advanced tools that examine your entire IT environment and create detailed plans to ensure successful migrations with minimal risk and maximum efficiency.",
              color: "border-l-green-500",
              titleColor: "text-green-500",
              features: ["Tailor analysis tools to match specific project needs", "Examine complete IT infrastructure at any scale", "Check security requirements, compliance rules, and system importance", "Find hidden patterns using automated examination tools", "Design plans that keep applications running during moves", "Generate detailed workflows automatically and quickly"]
            }, {
              title: "Execute Large Projects Efficiently",
              description: "Handle massive migrations with confidence using automated tools and live monitoring to manage resources, track progress, and minimize risks.",
              color: "border-l-orange-500",
              titleColor: "text-orange-500",
              features: ["Connect and automate third-party migration tools", "Create reliable execution plans with proven methods", "Calculate resource needs to get maximum results", "Monitor and control all activities in real-time", "Speed up projects by coordinating multiple work streams", "Spot potential problems before they cause delays"]
            }].map((capability, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }}>
                  <Card className={`p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${capability.color} bg-card`}>
                    <h3 className={`text-2xl font-semibold mb-4 ${capability.titleColor}`}>
                      {capability.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {capability.description}
                    </p>
                    <ul className="space-y-3">
                      {capability.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </li>)}
                    </ul>
                  </Card>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent bg-[length:20px_20px] bg-[linear-gradient(45deg,transparent_49%,rgba(0,181,241,0.1)_50%,transparent_51%)]" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div {...useScrollAnimation()} className="text-center">
              <h2 className="text-3xl lg:text-5xl font-bold mb-12 text-white">
                Proven Results That Transform Your Business
              </h2>
              
              <motion.div {...useScrollAnimation()} className="bg-primary/10 p-12 lg:p-16 rounded-3xl border border-primary/20 backdrop-blur-sm max-w-4xl mx-auto mb-12">
                <motion.div className="text-6xl lg:text-8xl font-black text-primary mb-4" initial={{
                scale: 0.5,
                opacity: 0
              }} whileInView={{
                scale: 1,
                opacity: 1
              }} transition={{
                duration: 0.8
              }}>
                  50%
                </motion.div>
                <p className="text-2xl lg:text-3xl font-semibold mb-6 text-white">
                  Average Migration Time Reduction
                </p>
                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                  The rigor of our discovery, analysis and planning process leads to accelerated and efficient migration events, consistently delivering significant time savings across all project types and scales.
                </p>
              </motion.div>
              
              <motion.div {...useScrollAnimation()} className="bg-white/10 p-8 lg:p-12 rounded-2xl max-w-4xl mx-auto backdrop-blur-sm">
                <h3 className="text-green-400 text-2xl lg:text-3xl font-semibold mb-6">
                  Complete Command & Control
                </h3>
                <p className="text-lg lg:text-xl leading-relaxed text-gray-200">
                  Project managers can delegate detailed tasks to the software while retaining command and control of the overall project. Clear task ownership, timely communication, and full visibility throughout the process significantly improves the team's ability to respond quickly, factor in inevitable changes, and continue with planned migration execution.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-primary to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div {...useScrollAnimation()}>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Ready to Transform Your Data Center Migration?
              </h2>
              <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
                Don't let complex migrations paralyze your infrastructure transformation. Partner with TDS and experience the power of TransitionManager orchestration.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold w-full sm:w-auto" onClick={() => window.location.href = '#contact'}>
                  Start Your Migration
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold w-full sm:w-auto" onClick={() => window.location.href = '#demo'}>
                  Schedule Discovery Call
                </Button>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl inline-block">
                <p className="font-semibold text-lg">
                  ✓ 19 Years Migration Expertise &nbsp;&nbsp;|&nbsp;&nbsp; ✓ 50% Faster Execution &nbsp;&nbsp;|&nbsp;&nbsp; ✓ 100% Project Success Rate
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        

        {/* What We Deliver Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Migration Orchestration Deliverables</h2>
              <Card>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {deliverables.map((deliverable, index) => <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-teal-500 mt-1 flex-shrink-0" />
                        <span className="text-sm">{deliverable}</span>
                      </div>)}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Ideal For & Key Benefits */}
        

        {/* Call to Action Section */}
        
      </main>
      <Footer />
    </div>;
}