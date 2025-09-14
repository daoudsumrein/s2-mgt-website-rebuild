import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Laptop, AlertTriangle, Eye, Lock, Zap, Cloud, Settings, CheckCircle, Users, Target, Monitor, Database, RefreshCw, FileText, Info, Clock, Server, Activity, BarChart3, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect } from "react";

const features = [
  {
    icon: Shield,
    title: "Proactive, Predictive, and Multi-layered Security",
    description: "Advanced threat protection with multiple defense layers"
  },
  {
    icon: Lock,
    title: "Multi-Shield Protection",
    description: "Comprehensive security across all attack vectors"
  },
  {
    icon: Eye,
    title: "Patented Evasion Shield Technology",
    description: "Proprietary technology to detect evasion techniques"
  },
  {
    icon: AlertTriangle,
    title: "Script Shield",
    description: "Advanced protection against malicious scripts"
  },
  {
    icon: Cloud,
    title: "Cloud-Based Management Console",
    description: "Intuitive, award-winning management interface"
  },
  {
    icon: Zap,
    title: "Cloud-Driven Processing",
    description: "Real-time machine learning and cloud computing power"
  },
  {
    icon: Settings,
    title: "Automated Updates",
    description: "Continuous protection with automatic security updates"
  },
  {
    icon: CheckCircle,
    title: "Automated Alerting and Remediation",
    description: "Instant response and automated threat remediation"
  },
  {
    icon: Laptop,
    title: "Device Isolation",
    description: "Quarantine compromised devices to prevent spread"
  },
  {
    icon: Users,
    title: "Process Tree Visualization",
    description: "Visual mapping of process relationships and activities"
  }
];

const benefitCards = [
  {
    icon: Shield,
    title: "Multi-Shield Protection",
    description: "Seven-layer defense including real-time behavior, core system, web threat, identity, phishing, evasion, and offline shields. Patented Evasion Shield detects file-based, fileless, obfuscated, and encrypted attacks."
  },
  {
    icon: Zap,
    title: "Real-Time AI Defense",
    description: "Built on BrightCloud Threat Intelligence platform, combining artificial intelligence and machine learning to combat rapidly shifting threats. Trusted by 140+ network, security, and technology vendors worldwide."
  },
  {
    icon: Cloud,
    title: "Cloud-Based Management",
    description: "Award-winning, intuitive management console with RESTful API and 40+ third-party integrations. Cloud processing handles intensive malware analysis, with agent updates in just 3 seconds."
  },
  {
    icon: CheckCircle,
    title: "Automated Operations",
    description: "Purpose-built for managed service providers and SMBs. No signatures or definitions to update—threat prevention occurs in real-time from the cloud with reduced false positives."
  }
];

const securityFeatures = [
  {
    icon: Eye,
    title: "Behavioral Analysis",
    description: "Advanced behavior monitoring detects and blocks unknown threats in real-time without signature updates."
  },
  {
    icon: Lock,
    title: "Script Shield Protection",
    description: "Prevents malicious behaviors in PowerShell, JavaScript, and VBScript environments with advanced script analysis."
  },
  {
    icon: Monitor,
    title: "Device Isolation",
    description: "Instantly isolate compromised endpoints while preserving essential communications for rapid containment."
  },
  {
    icon: Database,
    title: "Process Tree Visualization",
    description: "Forensic-level insights with clear visualization of threat origins and pathways for effective investigation."
  }
];

const resilienceFeatures = [
  {
    icon: FileText,
    title: "Automated Reporting",
    description: "Regular reporting scheduled for content, timing, and circulation with visibility across multiple sites and locations."
  },
  {
    icon: Info,
    title: "Regulatory Compliance",
    description: "Help organizations adapt and comply with changing regulations through comprehensive security controls."
  },
  {
    icon: Clock,
    title: "Transparent Operations",
    description: "Agent updates occur in just 3 seconds and are completely transparent to users with minimal system impact."
  },
  {
    icon: Users,
    title: "MSP & SMB Ready",
    description: "Purpose-built solutions specifically designed for managed service providers and small-to-medium businesses."
  }
];

const protectionStages = [
  {
    number: "1",
    title: "Predictive Prevention",
    description: "Prevents malware infiltration and stops unknown files from executing if they display malicious behavior patterns."
  },
  {
    number: "2",
    title: "Monitor & Journal",
    description: "Continuously monitors and journals file activity until proper classification, maintaining detailed forensic records."
  },
  {
    number: "3",
    title: "Automated Remediation",
    description: "Automatically rolls back system changes to pre-infected state when threats are confirmed and contained."
  }
];

const trustStats = [
  { value: "140+", label: "Technology Vendors Trust BrightCloud" },
  { value: "40+", label: "Third-Party Integrations" },
  { value: "3sec", label: "Agent Update Time" },
  { value: "7", label: "Protection Shields" },
  { value: "Zero", label: "Signature Updates Required" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

export default function EndpointProtection() {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation();
  const { ref: benefitsRef, isInView: benefitsInView } = useScrollAnimation();
  const { ref: featuresRef, isInView: featuresInView } = useScrollAnimation();
  const { ref: resilienceRef, isInView: resilienceInView } = useScrollAnimation();
  const { ref: stagesRef, isInView: stagesInView } = useScrollAnimation();
  const { ref: ctaRef, isInView: ctaInView } = useScrollAnimation();

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Endpoint Protection with EDR Solutions | Advanced Security for MENA Enterprises"
        description="Comprehensive endpoint protection with EDR functionality for MENA region. Real-time threat detection, automated remediation, and cloud-based management for enterprise endpoints."
        keywords="endpoint protection EDR MENA, endpoint security UAE, cybersecurity Middle East, threat protection Saudi Arabia, automated remediation"
        canonicalUrl="https://s2mgt.com/solutions/endpoint-protection"
      />
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-4 relative overflow-hidden md:py-[55px]">
          {/* Particle Container */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none particle-container">
            {/* Background overlay with subtle gradient */}
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: `
                radial-gradient(2px 2px at 20px 30px, rgba(20, 184, 166, 0.3), transparent),
                radial-gradient(2px 2px at 40px 70px, rgba(20, 184, 166, 0.2), transparent),
                radial-gradient(1px 1px at 90px 40px, rgba(20, 184, 166, 0.4), transparent),
                radial-gradient(1px 1px at 130px 80px, rgba(20, 184, 166, 0.3), transparent)
              `,
              backgroundRepeat: 'repeat',
              backgroundSize: '150px 150px',
              animation: 'float 20s infinite linear'
            }} />
            
            {/* Individual floating particles */}
            {[...Array(25)].map((_, i) => {
              const size = Math.random() * 6 + 2;
              return (
                <div
                  key={i}
                  className="absolute particle-dot transition-all duration-300"
                  style={{
                    '--particle-size': `${size}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    backgroundColor: '#14B8A6',
                    opacity: Math.random() * 0.6 + 0.2,
                    animation: `particleFloat${i % 3} ${Math.random() * 15 + 10}s infinite linear`,
                    animationDelay: `${Math.random() * 10}s`,
                    boxShadow: '0 0 10px rgba(20, 184, 166, 0.3)'
                  } as React.CSSProperties}
                />
              );
            })}
            
            {/* Orbiting particles */}
            {[...Array(8)].map((_, i) => {
              const size = Math.random() * 4 + 2;
              return (
                <div
                  key={`orbit-${i}`}
                  className="absolute transition-all duration-300 particle-orbit"
                  style={{
                    left: `${30 + Math.random() * 40}%`,
                    top: `${30 + Math.random() * 40}%`,
                    animation: `orbit${i % 2} ${Math.random() * 20 + 15}s infinite linear`,
                    animationDelay: `${Math.random() * 8}s`
                  }}
                >
                  <div
                    className="particle-dot"
                    style={{
                      '--particle-size': `${size}px`,
                      backgroundColor: '#14B8A6',
                      opacity: Math.random() * 0.7 + 0.3,
                      boxShadow: '0 0 8px rgba(20, 184, 166, 0.4)'
                    } as React.CSSProperties}
                  />
                </div>
              );
            })}
          </div>

          <div className="container mx-auto px-2 md:px-4 relative z-10">
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
                        Endpoint Protection with EDR
                      </h1>
                      <p className="text-base md:text-lg text-slate-200 mb-4 leading-relaxed">
                        Comprehensive endpoint security with detection and response capabilities for real-time threat protection.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button size="default" className="text-base px-6 relative border-2 border-transparent bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300" onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=Endpoint%20Protection%20Consultation', '_blank')}>
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

        {/* Hero Content Section */}
        <motion.section
          ref={heroRef}
          className="py-16 md:py-24 bg-background"
          initial={{ opacity: 0 }}
          animate={heroInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Advanced Endpoint Protection
              </h1>
              <p className="text-xl text-muted-foreground max-width-3xl mx-auto">
                Secure users anywhere with AI-powered, real-time threat detection and automated remediation against malware, ransomware, phishing, cryptomining, and zero-day attacks.
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <motion.div
              ref={benefitsRef}
              variants={containerVariants}
              initial="hidden"
              animate={benefitsInView ? "visible" : "hidden"}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
            >
              {benefitCards.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.3 + index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -15, 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    transition: { duration: 0.3 }
                  }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 relative overflow-hidden group cursor-pointer"
                >
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                      className="mb-6"
                    >
                      <benefit.icon className="h-12 w-12 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Advanced Security Features */}
        <motion.section
          ref={featuresRef}
          className="py-16 md:py-24 bg-muted/30"
          initial={{ opacity: 0 }}
          animate={featuresInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Advanced Security Features
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Powered by world-class threat intelligence, trusted by 140+ network, security, and technology vendors worldwide.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
              className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
            >
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6,
                    delay: 0.3 + index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -15, 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    transition: { duration: 0.3 }
                  }}
                  viewport={{ once: true }}
                  className="bg-slate-50 hover:bg-white rounded-xl p-6 transition-all duration-300 border-2 border-transparent hover:border-blue-200 cursor-pointer relative overflow-hidden group"
                >
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                        className="text-blue-500"
                      >
                        <feature.icon className="h-10 w-10 flex-shrink-0 mt-1" />
                      </motion.div>
                      <div>
                        <h4 className="font-bold text-lg mb-3 group-hover:text-blue-600 transition-colors">
                          {feature.title}
                        </h4>
                        <p className="text-slate-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Comprehensive Cyber Resilience */}
        <motion.section
          ref={resilienceRef}
          className="py-16 md:py-24 bg-background"
          initial={{ opacity: 0 }}
          animate={resilienceInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={resilienceInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Comprehensive Cyber Resilience
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Build organizational resilience with prevention, detection, response, recovery, investigation, and compliance capabilities in one unified platform.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={resilienceInView ? "visible" : "hidden"}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            >
              {resilienceFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6,
                    delay: 0.3 + index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -15, 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    transition: { duration: 0.3 }
                  }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 relative overflow-hidden group cursor-pointer"
                >
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                        className="text-purple-500"
                      >
                        <feature.icon className="h-10 w-10 flex-shrink-0 mt-1" />
                      </motion.div>
                      <div>
                        <h4 className="font-bold text-lg mb-3 group-hover:text-purple-600 transition-colors">
                          {feature.title}
                        </h4>
                        <p className="text-slate-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Three-Stage Protection Model */}
        <motion.section
          ref={stagesRef}
          className="py-16 md:py-24 bg-muted/30"
          initial={{ opacity: 0 }}
          animate={stagesInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={stagesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="backdrop-blur-sm border-primary/20">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
                    Three-Stage Protection Model
                  </CardTitle>
                  <CardDescription className="text-lg max-w-3xl mx-auto">
                    Unlike traditional single-opportunity detection approaches, our next-generation protection provides three-stage defense with reduced false positives and no signature updates required.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={stagesInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-3 gap-8"
                  >
                    {protectionStages.map((stage, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        transition={{ 
                          duration: 0.3,
                          delay: index * 0.2 
                        }}
                        className="flex items-start gap-4"
                      >
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0"
                        >
                          {stage.number}
                        </motion.div>
                        <div>
                          <h4 className="font-semibold text-lg mb-2">
                            {stage.title}
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {stage.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section with Trust Stats */}
        <motion.section
          ref={ctaRef}
          className="py-16 md:py-24 bg-background"
          initial={{ opacity: 0 }}
          animate={ctaInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="backdrop-blur-sm border-primary/20">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
                    Award-Winning Endpoint Security
                  </CardTitle>
                  <CardDescription className="text-lg max-w-3xl mx-auto">
                    Join organizations worldwide leveraging OpenText's unified cybersecurity platform. From prevention and detection to response, recovery, and compliance—build cyber resilience with fewer infections, security incidents, and productivity losses.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={ctaInView ? "visible" : "hidden"}
                    className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center"
                  >
                    {trustStats.map((stat, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }}
                        transition={{ 
                          duration: 0.3,
                          delay: index * 0.1 
                        }}
                        className="space-y-2"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={ctaInView ? { scale: 1 } : {}}
                          transition={{ 
                            duration: 0.5,
                            delay: 0.5 + index * 0.1,
                            type: "spring",
                            stiffness: 200
                          }}
                          className="text-2xl md:text-3xl font-bold text-primary"
                        >
                          {stat.value}
                        </motion.div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>
      </main>
      
      <Footer />
    </div>
  );
}