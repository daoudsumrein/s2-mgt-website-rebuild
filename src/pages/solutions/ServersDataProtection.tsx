import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Server, Database, Key, Lock, CheckCircle, FileX, Users, Eye, AlertTriangle, Layers, Zap, Target, UserCheck, TrendingDown, Clock } from "lucide-react";

export default function ServersDataProtection() {
  const heroAnimation = useScrollAnimation({
    threshold: 0.3
  });

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Servers and Data Protection Solutions MENA - Insider Threat Protection | S2 Solutions"
        description="Advanced servers and data protection solutions for MENA region. Protect against insider threats with invisibility technology and access controls. Serving UAE, Saudi Arabia, and Middle East."
        keywords="server protection MENA, data protection UAE, insider threats Middle East, cybersecurity Saudi Arabia, access control, data security"
        canonicalUrl="https://s2mgt.com/solutions/servers-data-protection"
      />
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 md:py-16 relative overflow-hidden h-[75vh] flex items-center justify-center particle-container">
          {/* Animated background particles */}
          <div className="absolute inset-0 pointer-events-none z-0 particle-field">
            {/* CSS Background particles */}
            <div className="absolute inset-0 opacity-20 particles-bg" style={{
              backgroundImage: `
                radial-gradient(2px 2px at 20px 30px, rgba(20, 184, 166, 0.4), transparent),
                radial-gradient(1px 1px at 40px 70px, rgba(20, 184, 166, 0.3), transparent),
                radial-gradient(3px 3px at 90px 40px, rgba(20, 184, 166, 0.5), transparent),
                radial-gradient(1px 1px at 130px 80px, rgba(20, 184, 166, 0.2), transparent)
              `,
              backgroundRepeat: 'repeat',
              backgroundSize: '200px 200px',
              animation: 'float 25s infinite linear'
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

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              ref={heroAnimation.ref}
              initial={{ opacity: 0, y: 50 }}
              animate={heroAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-7xl mx-auto"
            >
              {/* Hero Container */}
              <div className="relative bg-slate-900/90 border-2 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 backdrop-blur-sm shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 group overflow-hidden hero-card" style={{ borderColor: "#14B8A6" }}>
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                
                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center relative z-10">
                  {/* Left Content */}
                  <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
                    <Badge variant="outline" className="border-blue-500/50 text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-400 hover:scale-105 transition-all duration-300 px-3 sm:px-4 py-1.5 sm:py-2 relative overflow-hidden group/badge text-xs sm:text-sm">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/badge:translate-x-full transition-transform duration-500" />
                      <span className="relative">Cybersecurity Solutions</span>
                    </Badge>
                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-green-400 bg-clip-text text-transparent animate-pulse hover:scale-105 transition-transform duration-300 cursor-default inline-block" style={{
                        backgroundSize: '300% 300%',
                        animation: 'gradientShift 4s ease-in-out infinite'
                      }}>
                        Servers and Data Protection
                      </span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                      Advanced cybersecurity platform that minimizes exposure by making critical data and infrastructure invisible to unauthorized users.
                    </p>
                    
                    <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 relative overflow-hidden group/btn px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold w-full sm:w-auto" onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=Server%20Protection%20Consultation', '_blank')}>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500" />
                      <span className="relative">Schedule Consultation</span>
                    </Button>
                  </div>
                  
                  {/* Right Image */}
                  <div className="order-first lg:order-last">
                    <div className="relative overflow-hidden h-[200px] sm:h-[280px] md:h-[320px] lg:h-[360px] group/media hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-400 rounded-lg sm:rounded-xl">
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 via-blue-500/20 to-secondary/20 rounded-lg flex items-center justify-center border border-white/10">
                        <div className="text-center">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Shield className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                          </motion.div>
                          <p className="text-blue-300 text-lg font-semibold">Stealth Defense</p>
                          <p className="text-blue-200/80 text-sm mt-2">Invisible Protection</p>
                        </div>
                      </div>
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5 opacity-0 group-hover/media:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Value Proposition */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 bg-gradient-to-br from-slate-50 to-blue-50"
        >
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center py-12 sm:py-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                You Can't Hack What
                <span className="block text-blue-600 mt-1 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent animate-pulse">You Can't See</span>
              </h2>
              
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed px-2 max-w-4xl mx-auto">
                Arrosoft Stealth operates much like a stealth fighter, using advanced materials and design to evade detection. Just as stealth aircraft avoid radar, our solution employs sophisticated methods to obscure sensitive data from hackers.
              </p>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 mx-2 sm:mx-0 border border-blue-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <p className="text-blue-800 font-medium text-sm sm:text-base">
                  This dual approach ensures only authorized entities can interact with hidden assets, significantly reducing cyberattack risk and enhancing your security posture.
                </p>
              </motion.div>
            </motion.div>

            {/* Insider Threat Problem - Enhanced */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-12 sm:mb-16"
            >
              <div className="bg-red-50 rounded-2xl p-6 sm:p-8 border border-red-100 hover:border-red-200 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                
                <div className="flex items-start gap-3 sm:gap-4 mb-6 relative z-10">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0"
                  >
                    <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                  </motion.div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">The Growing Insider Threat Crisis</h2>
                    <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
                      Insider threats originating from employees, contractors, or partners with legitimate access pose significant risks to businesses. These threats can be malicious or unintentional, leading to financial loss, reputational damage, and operational disruption.
                    </p>
                    <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
                      Insiders can more easily bypass security measures, resulting in data breaches, intellectual property theft, and fraud. This incurs remediation costs, legal consequences, and erodes customer and partner trust.
                    </p>
                  </div>
                </div>

                {/* Threat Types - Enhanced Grid */}
                <div className="grid md:grid-cols-3 gap-8 relative z-10">
                  {[
                    {
                      icon: Users,
                      title: "Malicious Insiders",
                      description: "Employees or contractors intentionally stealing data or causing damage",
                      impact: "High financial and reputational risk",
                      color: "red"
                    },
                    {
                      icon: AlertTriangle,
                      title: "Unintentional Threats",
                      description: "Accidental data exposure or security breaches from legitimate users",
                      impact: "Operational disruption and compliance issues",
                      color: "orange"
                    },
                    {
                      icon: Target,
                      title: "Privileged Access Abuse",
                      description: "Misuse of legitimate access credentials to bypass traditional security",
                      impact: "Intellectual property theft and fraud",
                      color: "red"
                    }
                  ].map((threat, index) => {
                    const Icon = threat.icon;
                    return (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                        whileHover={{ 
                          y: -15, 
                          scale: 1.05,
                          boxShadow: "0 20px 40px rgba(239, 68, 68, 0.15)",
                          transition: { duration: 0.3 }
                        }}
                        viewport={{ once: true }}
                        className="bg-white rounded-xl p-6 text-center transition-all duration-300 border-2 border-transparent hover:border-red-200 cursor-pointer relative overflow-hidden group/card"
                      >
                        <motion.div 
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ duration: 0.3 }}
                          className="text-5xl mb-6 text-red-500"
                        >
                          <Icon className="w-12 h-12 mx-auto" />
                        </motion.div>
                        <h3 className="text-xl font-bold mb-4">{threat.title}</h3>
                        <p className="text-gray-600 mb-4">{threat.description}</p>
                        <p className="text-red-600 font-medium text-sm">{threat.impact}</p>
                        <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 rounded-xl" />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Solution Approach - Enhanced */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-12 sm:mb-16"
            >
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">The Stealth Defense Solution</h2>
                <p className="text-sm sm:text-base text-gray-600 px-2 leading-relaxed">
                  Mitigating insider threats requires robust access controls, continuous monitoring, comprehensive security training, and fostering a culture of security awareness.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Eye,
                    title: "Advanced Invisibility",
                    description: "Employs sophisticated methods to obscure the presence of sensitive data and systems from hackers, making critical assets effectively invisible to potential adversaries.",
                    color: "blue"
                  },
                  {
                    icon: Shield,
                    title: "Dual Authentication",
                    description: "Incorporates robust authentication mechanisms to verify the identity of users and devices before granting access to protected resources.",
                    color: "green"
                  }
                ].map((solution, index) => {
                  const Icon = solution.icon;
                  return (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 50, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                      whileHover={{ 
                        y: -10, 
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                      viewport={{ once: true }}
                      className={`bg-gradient-to-br ${solution.color === 'blue' ? 'from-blue-50 to-blue-100 border-blue-200' : 'from-green-50 to-green-100 border-green-200'} rounded-xl p-6 border transition-all duration-300 hover:shadow-lg relative overflow-hidden group`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className={`w-12 h-12 ${solution.color === 'blue' ? 'bg-blue-600' : 'bg-green-600'} rounded-xl flex items-center justify-center mb-4 relative z-10`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 relative z-10">{solution.title}</h3>
                      <p className="text-sm text-gray-700 leading-relaxed relative z-10">
                        {solution.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Core Capabilities - Enhanced */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-12 sm:mb-16"
            >
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Three Pillars of Protection</h2>
                <p className="text-sm sm:text-base text-gray-600 px-2 leading-relaxed">
                  Comprehensive protection across your entire infrastructure with three core capabilities designed to secure what matters most.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Server,
                    title: "Protect Your Servers",
                    description: "You can't hack what you can't see. Arrosoft Stealth restricts critical systems from unauthorized access on your network.",
                    detail: "Complete network-level protection for all critical infrastructure",
                    color: "blue"
                  },
                  {
                    icon: Database,
                    title: "Protect Your Data", 
                    description: "Arrosoft Stealth hides critical data files and folders and limits access to only select privileged users.",
                    detail: "Advanced file-level security with granular access controls",
                    color: "purple"
                  },
                  {
                    icon: Key,
                    title: "Protect Your Access",
                    description: "Limit and protect your access to critical systems and data by using active authentication and zero-trust security.",
                    detail: "Multi-factor authentication with continuous verification",
                    color: "green"
                  }
                ].map((capability, index) => {
                  const Icon = capability.icon;
                  return (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 50, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      whileHover={{ 
                        y: -15, 
                        scale: 1.05,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                        transition: { duration: 0.3 }
                      }}
                      viewport={{ once: true }}
                      className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-200 transition-all duration-300 relative overflow-hidden group cursor-pointer"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <motion.div 
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                        className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 relative z-10"
                      >
                        <Icon className="w-6 h-6 text-blue-600" />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 relative z-10">{capability.title}</h3>
                      <p className="text-sm text-gray-600 mb-3 leading-relaxed relative z-10">{capability.description}</p>
                      <p className="text-xs text-blue-600 font-medium relative z-10">{capability.detail}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Technical Features */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-12 sm:mb-16"
            >
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Stealth Defense Technology</h2>
                <p className="text-sm sm:text-base text-gray-600 px-2 mb-6 leading-relaxed">
                  Establishes a stealth isolation zone at the driver layer, effectively preventing hackers and ransomware from accessing server sites or file folders.
                </p>
                <div className="bg-yellow-50 rounded-lg px-4 py-3 border border-yellow-200 mx-2 sm:mx-0">
                  <p className="text-yellow-800 text-sm font-medium">
                    Driver-layer protection that operates below traditional security measures
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Lock,
                    title: "Kernel Protection",
                    description: "This feature secures the operating system's kernel mode. Even if a hacker gains system administrator privileges, Stealth Defense's protection cannot be disabled or altered.",
                    benefit: "Unbreachable core protection"
                  },
                  {
                    icon: FileX,
                    title: "Anti-Erasing",
                    description: "Stealth Defense guarantees that files in isolation and protection cannot be deleted or overwritten by hackers or ransomware.",
                    benefit: "100% data integrity assurance"
                  },
                  {
                    icon: CheckCircle,
                    title: "White List",
                    description: "Only authorized processes have access to files within the Stealth Defense Area.",
                    benefit: "Zero unauthorized access"
                  }
                ].map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 50, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      whileHover={{ 
                        y: -10, 
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                      viewport={{ once: true }}
                      className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors flex flex-col h-full relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-4 relative z-10"
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="flex-1 relative z-10">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                        <p className="text-sm text-gray-600 mb-3 leading-relaxed">{feature.description}</p>
                      </div>
                      <div className="bg-white rounded-lg px-3 py-2 border border-gray-200 mt-auto relative z-10">
                        <p className="text-xs text-green-600 font-semibold">{feature.benefit}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Benefits Section */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="mb-12 sm:mb-16"
            >
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Key Benefits & Outcomes</h2>
                <p className="text-sm sm:text-base text-gray-600 px-2 leading-relaxed">
                  Experience comprehensive protection with measurable security improvements across your organization.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Shield,
                    title: "Significantly Reduced Risk",
                    description: "Dramatically lowers the probability of successful targeted cyberattacks through invisibility"
                  },
                  {
                    icon: Zap,
                    title: "Enhanced Security Posture",
                    description: "Strengthens overall organizational security through multi-layered protection approach"
                  },
                  {
                    icon: Eye,
                    title: "Advanced Stealth Technology",
                    description: "Sophisticated methods to obscure sensitive data presence from potential adversaries"
                  },
                  {
                    icon: Lock,
                    title: "Robust Authentication",
                    description: "Comprehensive identity verification for users and devices before access granted"
                  }
                ].map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                      viewport={{ once: true }}
                      className="flex gap-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 relative z-10"
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </motion.div>
                      <div className="relative z-10">
                        <h3 className="text-base font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Architecture Diagram Section */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="mb-12 sm:mb-16"
            >
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">System Architecture Overview</h2>
                <p className="text-sm sm:text-base text-gray-600 px-2 leading-relaxed">
                  See how Stealth Defense integrates seamlessly with your existing infrastructure to provide comprehensive protection.
                </p>
              </div>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-black rounded-2xl p-4 sm:p-8 min-h-[300px] sm:min-h-[400px] flex items-center justify-center mx-2 sm:mx-0 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                <img 
                  src="/lovable-uploads/7c739278-4362-4df9-98e6-9890d08a4303.png" 
                  alt="Stealth Defense System Architecture - Shows how Stealth Defense protects Active Directory, Web Server, Oracle DB, Backup Server, and vCenter Server with Security Broker access controls"
                  className="w-full h-full object-contain max-w-full max-h-full rounded-lg relative z-10"
                />
              </motion.div>
            </motion.div>

            {/* Call to Action */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-center pb-12 sm:pb-16"
            >
              <div className="bg-gradient-to-r from-[#D13742] to-[#4D207C] rounded-2xl p-6 sm:p-8 text-white mx-2 sm:mx-0 relative overflow-hidden group hover:shadow-2xl hover:shadow-[#D13742]/25 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                <div className="relative z-10">
                  <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">Ready to Make Your Assets Invisible?</h2>
                  <p className="text-sm sm:text-base text-blue-100 mb-6 leading-relaxed">
                    Experience the power of stealth technology and protect what matters most to your organization.
                  </p>
                  <div className="space-y-3 sm:flex sm:items-center sm:justify-center sm:gap-4 sm:space-y-0">
                    <div className="text-center">
                      <p className="text-blue-100 text-sm">Contact us today</p>
                      <p className="text-white font-medium">info@s2mgt.com</p>
                    </div>
                    <div className="text-center">
                      <p className="text-blue-100 text-sm">Learn more</p>
                      <a href="https://www.arrosoft.com/en/services/protect/stealth-defense" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-blue-200 transition-colors">www.arrosoft.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}