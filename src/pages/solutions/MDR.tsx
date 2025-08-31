import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Clock, Shield, Target, Eye, Zap, Monitor, Workflow, Cloud, Database, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function MDR() {
  const { ref: introRef, isInView: introInView } = useScrollAnimation();
  const { ref: benefitsRef, isInView: benefitsInView } = useScrollAnimation();
  const { ref: featuresRef, isInView: featuresInView } = useScrollAnimation();
  const { ref: dashboardRef, isInView: dashboardInView } = useScrollAnimation();
  const { ref: reasonsRef, isInView: reasonsInView } = useScrollAnimation();

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
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <Badge variant="outline" className="mb-3 border-primary/40 text-primary bg-primary/10">
                          Cybersecurity Solutions
                        </Badge>
                      </motion.div>
                      <motion.h1 
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                      >
                        Managed Detection & Response
                      </motion.h1>
                      <motion.p 
                        className="text-base md:text-lg text-slate-200 mb-4 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                      >
                        Professional 24/7 security monitoring, threat hunting, and incident response by expert security analysts.
                      </motion.p>
                      <motion.div 
                        className="flex flex-col sm:flex-row gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                      >
                        <Button size="default" className="text-base px-6 relative border-2 border-transparent bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300" onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=MDR%20Service%20Consultation', '_blank')}>
                          <span className="relative z-10">Schedule Consultation</span>
                          <div className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                        </Button>
                      </motion.div>
                    </motion.div>
                    
                    {/* Right Image Placeholder */}
                    <motion.div 
                      className="relative flex justify-center lg:justify-start lg:pl-8"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      <div className="w-96 h-72 bg-gradient-to-br from-primary/20 via-blue-500/20 to-secondary/20 rounded-lg flex items-center justify-center border border-white/10 px-[11px] mx-[60px]">
                        
                      </div>
                    </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16" ref={introRef}>
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 50 }}
              animate={introInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                OpenText Core MDR: Enterprise-Grade Security for MSPs
              </h2>
              <p className="text-xl max-w-4xl mx-auto text-muted-foreground leading-relaxed">
                Enhance your security operations with scalable, co-managed MDR solutions. OpenText Core MDR redefines cybersecurity for MSPs, providing enterprise-grade protection through a comprehensive SOC-as-a-service model designed to be scalable and flexible, with no hardware requirements or CapEx commitments.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Card className="border-l-4 border-l-blue-800 relative group overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-blue-800/20">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-800/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-full transition-all duration-700 transform skew-x-12"></div>
                    <CardHeader className="relative z-10">
                      <CardTitle className="text-2xl text-blue-800">MSP Security Challenges</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 relative z-10">
                      <p className="text-muted-foreground">MSPs face numerous challenges when it comes to managing cybersecurity for their clients:</p>
                      <ul className="space-y-2 text-muted-foreground">
                        {[
                          "Limited resources and complex security tools",
                          "Overwhelming volume of sophisticated threats", 
                          "Ineffective incident response capabilities",
                          "Higher operational risks and costs",
                          "Difficulty building in-house SOC capabilities"
                        ].map((item, index) => (
                          <motion.li 
                            key={index}
                            className="flex items-start space-x-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Card className="border-l-4 border-l-blue-600 relative group overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-blue-600/20">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-full transition-all duration-700 transform skew-x-12"></div>
                    <CardHeader className="relative z-10">
                      <CardTitle className="text-2xl text-blue-600">OpenText Core MDR Solution</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 relative z-10">
                      <p className="text-muted-foreground">Our comprehensive platform addresses these challenges by combining:</p>
                      <ul className="space-y-2 text-muted-foreground">
                        {[
                          "Advanced threat detection with 24/7/365 monitoring",
                          "Expert SOC analysts and threat hunters",
                          "Cutting-edge technology including SIEM and SOAR", 
                          "Seamless integration with existing tools",
                          "Scalable co-managed SOC operations"
                        ].map((item, index) => (
                          <motion.li 
                            key={index}
                            className="flex items-start space-x-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                          >
                            <motion.div
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            </motion.div>
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16" ref={benefitsRef}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.h2 
                className="text-3xl font-bold text-center mb-12"
                initial={{ opacity: 0, y: 50 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Comprehensive Security Benefits
              </motion.h2>
              
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Shield,
                    title: "24/7/365 SOC Monitoring",
                    description: "Advanced threat detection with continuous monitoring by expert SOC analysts and threat hunters for real-time protection and rapid incident response.",
                    color: "from-blue-500 to-blue-600"
                  },
                  {
                    icon: Users,
                    title: "Automation + Human Expertise", 
                    description: "Perfect blend of automated threat detection and expert human analysis, reducing operational burdens while improving incident response times.",
                    color: "from-green-500 to-green-600"
                  },
                  {
                    icon: Zap,
                    title: "No Hardware or CapEx",
                    description: "Cost-effective scalability with no hardware requirements, CapEx commitments, or long-term contracts. Deploy with lightweight, non-intrusive agents.",
                    color: "from-yellow-500 to-yellow-600"
                  },
                  {
                    icon: Cloud,
                    title: "Seamless Integration",
                    description: "Integrates with 500+ third-party security tools and popular PSA platforms, streamlining operations without disrupting current systems.",
                    color: "from-purple-500 to-purple-600"
                  },
                  {
                    icon: Target,
                    title: "Scalable & Flexible Model",
                    description: "Subscription-based model lets MSPs scale month-to-month with no hidden fees, minimum requirements, or long-term commitments.",
                    color: "from-indigo-500 to-indigo-600"
                  },
                  {
                    icon: CheckCircle,
                    title: "Regulatory Compliance",
                    description: "Stay compliant with industry standards like NIST, PCI, and SOC 2 with built-in compliance features and automated reporting.",
                    color: "from-teal-500 to-teal-600"
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -15, scale: 1.05 }}
                    className="h-full"
                  >
                    <Card className="text-center relative group overflow-hidden border-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 hover:shadow-2xl transition-all duration-500 hover:shadow-blue-500/25 h-full">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-1000 transform skew-x-12"></div>
                      <CardContent className="p-8 relative z-10 h-full flex flex-col">
                        <motion.div 
                          className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center shadow-lg`}
                          whileHover={{ 
                            rotate: [0, -10, 10, -10, 0],
                            scale: 1.1
                          }}
                          transition={{ duration: 0.6 }}
                        >
                          <benefit.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-700 transition-colors duration-300">{benefit.title}</h3>
                        <p className="text-muted-foreground group-hover:text-gray-700 transition-colors duration-300 flex-1">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Features Section */}
        <section className="py-16 bg-muted/30" ref={featuresRef}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.h2 
                className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 50 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Advanced Security Capabilities
              </motion.h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Database,
                    title: "SIEM & SOAR Integration",
                    description: "Automate threat detection, response, and remediation workflows with integrated security information and event management plus security orchestration, automation and response capabilities.",
                    color: "from-blue-500 to-blue-600"
                  },
                  {
                    icon: Monitor,
                    title: "Enhanced EDR",
                    description: "Achieve total endpoint protection with real-time threat detection, advanced endpoint monitoring, and comprehensive visibility across your network infrastructure.",
                    color: "from-green-500 to-green-600"
                  },
                  {
                    icon: Workflow,
                    title: "Unified PSA",
                    description: "Streamline ticketing and vulnerability management with integrated professional services automation, simplifying workflow management and client communications.",
                    color: "from-purple-500 to-purple-600"
                  },
                  {
                    icon: Shield,
                    title: "Advanced Endpoint Protection",
                    description: "Benefit from proactive monitoring and real-time global threat intelligence, providing comprehensive protection against sophisticated cyber threats.",
                    color: "from-orange-500 to-orange-600"
                  },
                  {
                    icon: Clock,
                    title: "Rapid Incident Response",
                    description: "Provides MSPs with rapid incident response paths for urgent threats, plus continuous proactive threat hunting for comprehensive risk management.",
                    color: "from-red-500 to-red-600"
                  },
                  {
                    icon: Cloud,
                    title: "Effortless Deployment",
                    description: "Deploy seamlessly with a lightweight, non-intrusive agent-based monitoring solution that requires minimal setup and maintenance overhead.",
                    color: "from-teal-500 to-teal-600"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="h-full"
                  >
                    <Card className="relative group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:shadow-blue-600/20 border-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 h-full">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-1000 transform skew-x-12"></div>
                      <CardContent className="p-6 relative z-10 h-full flex flex-col">
                        <div className="flex items-start space-x-4 h-full">
                          <motion.div 
                            className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg`}
                            whileHover={{ 
                              rotate: [0, -15, 15, -15, 0],
                              scale: 1.1 
                            }}
                            transition={{ duration: 0.6 }}
                          >
                            <feature.icon className="w-6 h-6 text-white" />
                          </motion.div>
                          <div className="flex flex-col h-full">
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">{feature.title}</h3>
                            <p className="text-muted-foreground group-hover:text-gray-700 transition-colors duration-300 flex-1">{feature.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Section */}
        <section className="py-16" ref={dashboardRef}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.h2 
                className="text-3xl font-bold text-center mb-12"
                initial={{ opacity: 0, y: 50 }}
                animate={dashboardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Comprehensive Security Dashboard
              </motion.h2>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={dashboardInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <h3 className="text-2xl font-semibold text-blue-600 mb-4">Real-Time Visibility & Control</h3>
                  <p className="text-muted-foreground mb-6">
                    The OpenText Core MDR console provides comprehensive visibility into your security posture with real-time monitoring, detailed analytics, and actionable insights. Track alerts, vulnerabilities, platform status, and security metrics all from a single, intuitive interface.
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    {[
                      { label: "Alert Management", desc: "Monitor both solved and open alerts with detailed categorization" },
                      { label: "Vulnerability Tracking", desc: "Applications, patches, and critical security updates" },
                      { label: "Platform Status", desc: "Real-time system health and performance metrics" },
                      { label: "Threat Intelligence", desc: "Advanced analytics and security insights" }
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start space-x-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={dashboardInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      >
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.5 }}
                        >
                          <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        </motion.div>
                        <span><strong>{item.label}:</strong> {item.desc}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50, scale: 0.9 }}
                  animate={dashboardInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 50, scale: 0.9 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-muted/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 relative group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-full transition-all duration-1000 transform skew-x-12"></div>
                    <CardContent className="p-6 relative z-10">
                      <div className="bg-slate-800 rounded-lg overflow-hidden border">
                        <div className="bg-blue-600 text-white p-4 text-center">
                          <h4 className="font-semibold">OpenText Core MDR Console</h4>
                        </div>
                        <div className="p-6 grid grid-cols-2 gap-4">
                          {[
                            { num: "212", label: "Solved Alerts" },
                            { num: "55", label: "Open Alerts" },
                            { num: "592", label: "Applications" },
                            { num: "6", label: "Patches" }
                          ].map((metric, index) => (
                            <motion.div 
                              key={index}
                              className="text-center bg-blue-50 rounded-lg p-4 border border-blue-200"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={dashboardInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                              whileHover={{ scale: 1.05, backgroundColor: "rgb(239 246 255)" }}
                            >
                              <div className="text-3xl font-bold text-blue-600">{metric.num}</div>
                              <div className="text-xs text-muted-foreground uppercase tracking-wide">{metric.label}</div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 bg-muted/30" ref={reasonsRef}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.h2 
                className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 50 }}
                animate={reasonsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Top 5 Reasons MSPs Choose OpenText Core MDR
              </motion.h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    number: "1",
                    title: "Seamless Integration with Existing Tools",
                    description: "Integrates with more than 500 third-party security tools, including popular PSA tools, for easy adoption without disrupting current systems. Works seamlessly with your existing infrastructure.",
                    color: "from-blue-500 to-blue-600"
                  },
                  {
                    number: "2", 
                    title: "Scalable & Flexible with No Long-term Contracts",
                    description: "A subscription-based model lets MSPs scale month to month with no long-term commitments, hidden fees, or minimum requirements. Perfect for growing businesses.",
                    color: "from-green-500 to-green-600"
                  },
                  {
                    number: "3",
                    title: "Automation with Human Expertise",
                    description: "Combines automation with 24/7/365 expert analysis, ensuring threats are swiftly detected, prioritized, and addressed by experienced SOC analysts.",
                    color: "from-purple-500 to-purple-600"
                  },
                  {
                    number: "4",
                    title: "Enhanced EDR with SIEM and SOAR Capabilities",
                    description: "Extends EDR with advanced SIEM and SOAR, offering real-time monitoring, automated responses, and rapid threat detection capabilities.",
                    color: "from-orange-500 to-orange-600"
                  },
                  {
                    number: "5",
                    title: "Rapid Incident Response & Proactive Threat Hunting",
                    description: "Provides MSPs with rapid incident response paths for urgent threats, plus continuous threat hunting for proactive risk management and prevention.",
                    color: "from-red-500 to-red-600"
                  }
                ].map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 60, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
                    whileHover={{ y: -20, scale: 1.05 }}
                    className="h-full"
                  >
                    <Card className="relative group overflow-hidden border-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 hover:shadow-2xl transition-all duration-500 hover:shadow-blue-500/25 h-full">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-1000 transform skew-x-12"></div>
                      <motion.div 
                        className={`absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br ${reason.color} text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg`}
                        whileHover={{ 
                          rotate: [0, -15, 15, -15, 0],
                          scale: 1.2
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        {reason.number}
                      </motion.div>
                      <CardContent className="pt-12 p-6 relative z-10 h-full flex flex-col">
                        <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-700 transition-colors duration-300">{reason.title}</h3>
                        <p className="text-muted-foreground text-sm group-hover:text-gray-700 transition-colors duration-300 flex-1">{reason.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Deployment & Support Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.h2 
                className="text-3xl font-bold text-center mb-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Effortless Deployment & Ongoing Support
              </motion.h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: CheckCircle,
                    title: "Simple Onboarding",
                    description: "From onboarding to offboarding, OpenText Core MDR manages security operations efficiently with minimal setup requirements.",
                    color: "from-green-500 to-green-600"
                  },
                  {
                    icon: Zap,
                    title: "Lightweight Agents",
                    description: "Non-intrusive agent-based monitoring solution that doesn't impact system performance or user experience.",
                    color: "from-yellow-500 to-yellow-600"
                  },
                  {
                    icon: Users,
                    title: "Expert Support", 
                    description: "Ongoing support and rapid incident response from experienced cybersecurity professionals and threat hunters.",
                    color: "from-blue-500 to-blue-600"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                    whileHover={{ y: -10, scale: 1.05 }}
                  >
                    <Card className="text-center relative group overflow-hidden border-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 hover:shadow-2xl transition-all duration-500 hover:shadow-blue-500/25">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-1000 transform skew-x-12"></div>
                      <CardContent className="p-8 relative z-10">
                        <motion.div 
                          className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center shadow-lg`}
                          whileHover={{ 
                            rotate: [0, -20, 20, -20, 0],
                            scale: 1.2
                          }}
                          transition={{ duration: 0.6 }}
                        >
                          <item.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-700 transition-colors duration-300">{item.title}</h3>
                        <p className="text-muted-foreground group-hover:text-gray-700 transition-colors duration-300">{item.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cost Benefits Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.h2 
                className="text-3xl font-bold text-center mb-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Cost-Effective Security Operations
              </motion.h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "No CapEx Investment",
                    description: "Eliminate upfront capital expenditure with our subscription-based model",
                    color: "border-l-blue-600"
                  },
                  {
                    title: "No Hardware Costs",
                    description: "Cloud-based solution requires no physical infrastructure or maintenance",
                    color: "border-l-green-600"
                  },
                  {
                    title: "No Long-term Commitments",
                    description: "Flexible month-to-month scaling without binding contracts or hidden fees",
                    color: "border-l-purple-600"
                  },
                  {
                    title: "Reduced Operational Overhead",
                    description: "Automation and expert oversight reduce the need for internal security staff",
                    color: "border-l-orange-600"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.05 }}
                  >
                    <Card className={`text-center border-l-4 ${item.color} relative group overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 hover:shadow-xl transition-all duration-500`}>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-700 transform skew-x-12"></div>
                      <CardContent className="p-6 relative z-10">
                        <h3 className="text-lg font-semibold text-blue-600 mb-3 group-hover:text-blue-700 transition-colors duration-300">{item.title}</h3>
                        <p className="text-muted-foreground text-sm group-hover:text-gray-700 transition-colors duration-300">{item.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="max-w-4xl mx-auto text-center bg-muted/50 backdrop-blur-sm shadow-xl relative group overflow-hidden border-0 bg-gradient-to-br from-white via-gray-50 to-gray-100">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-full transition-all duration-1000 transform skew-x-12"></div>
                <CardContent className="p-12 relative z-10">
                  <motion.h2 
                    className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Ready to Enhance Your Security Operations?
                  </motion.h2>
                  <motion.p 
                    className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    Discover how OpenText Core MDR can transform your cybersecurity services with scalable, co-managed protection. By combining automation with expert human oversight, OpenText Core MDR reduces operational burdens, improves incident response times, and provides comprehensive security for your business.
                  </motion.p>
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300" onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=OpenText%20Core%20MDR%20Demo', '_blank')}>
                        Book a Demo
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg hover:border-blue-700 transition-all duration-300">
                        Learn More
                      </Button>
                    </motion.div>
                  </motion.div>
                  <motion.p 
                    className="text-sm text-muted-foreground"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                  >
                    To learn more about OpenText Core Managed Detection and Response or to schedule a demo, contact your OpenText account representative.
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}