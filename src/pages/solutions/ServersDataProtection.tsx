import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Shield, Server, Database, Key, Lock, CheckCircle, FileX, Users, Eye, AlertTriangle, Layers, Zap, Target, UserCheck, TrendingDown, Clock } from "lucide-react";

export default function ServersDataProtection() {
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
                        Servers and Data Protection
                      </h1>
                      <p className="text-base md:text-lg text-slate-200 mb-4 leading-relaxed">
                        Advanced cybersecurity platform that minimizes exposure by making critical data and infrastructure invisible to unauthorized users.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button size="default" className="text-base px-6 relative border-2 border-transparent bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300" onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=Server%20Protection%20Consultation', '_blank')}>
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

        {/* Product Content Section */}
        <section id="product-content" className="bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            
            {/* Hero Content - Mobile First */}
            <motion.div 
              className="text-center py-12 sm:py-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                You Can't Hack What
                <span className="block text-blue-600 mt-1">You Can't See</span>
              </h2>
              
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed px-2">
                Arrosoft Stealth operates much like a stealth fighter, using advanced materials and design to evade detection. Just as stealth aircraft avoid radar, our solution employs sophisticated methods to obscure sensitive data from hackers.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 mx-2 sm:mx-0">
                <p className="text-blue-800 font-medium text-sm sm:text-base">
                  This dual approach ensures only authorized entities can interact with hidden assets, significantly reducing cyberattack risk and enhancing your security posture.
                </p>
              </div>
            </motion.div>

            {/* Insider Threat Problem - Mobile Stacked */}
            <motion.div 
              className="mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-red-50 rounded-2xl p-6 sm:p-8 border border-red-100">
                <div className="flex items-start gap-3 sm:gap-4 mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                  </div>
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

                {/* Threat Types - Mobile Stacked */}
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0">
                  {[
                    {
                      icon: Users,
                      title: "Malicious Insiders",
                      description: "Employees or contractors intentionally stealing data or causing damage",
                      impact: "High financial and reputational risk"
                    },
                    {
                      icon: AlertTriangle,
                      title: "Unintentional Threats",
                      description: "Accidental data exposure or security breaches from legitimate users",
                      impact: "Operational disruption and compliance issues"
                    },
                    {
                      icon: Target,
                      title: "Privileged Access Abuse",
                      description: "Misuse of legitimate access credentials to bypass traditional security",
                      impact: "Intellectual property theft and fraud"
                    }
                  ].map((threat, index) => {
                    const Icon = threat.icon;
                    return (
                      <div key={index} className="bg-white rounded-lg p-4 border border-red-200">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="w-4 h-4 text-red-600" />
                          </div>
                          <div>
                            <h3 className="text-sm font-semibold text-gray-900 mb-1">{threat.title}</h3>
                            <p className="text-xs text-gray-600 mb-2">{threat.description}</p>
                            <p className="text-xs text-red-600 font-medium">{threat.impact}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Solution Approach - Mobile First */}
            <motion.div 
              className="mb-12 sm:mb-16" 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">The Stealth Defense Solution</h2>
                <p className="text-sm sm:text-base text-gray-600 px-2 leading-relaxed">
                  Mitigating insider threats requires robust access controls, continuous monitoring, comprehensive security training, and fostering a culture of security awareness. Arrosoft Stealth addresses these challenges through innovative stealth technology.
                </p>
              </div>
              
              <div className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Advanced Invisibility</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Employs sophisticated methods to obscure the presence of sensitive data and systems from hackers, making critical assets effectively invisible to potential adversaries.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Dual Authentication</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Incorporates robust authentication mechanisms to verify the identity of users and devices before granting access to protected resources.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Core Capabilities - Mobile Stacked */}
            <motion.div 
              className="mb-12 sm:mb-16" 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Three Pillars of Protection</h2>
                <p className="text-sm sm:text-base text-gray-600 px-2 leading-relaxed">
                  Comprehensive protection across your entire infrastructure with three core capabilities designed to secure what matters most.
                </p>
              </div>
              
              <div className="space-y-6 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0">
                {[
                  {
                    icon: Server,
                    title: "Protect Your Servers",
                    description: "You can't hack what you can't see. Arrosoft Stealth restricts critical systems from unauthorized access on your network.",
                    detail: "Complete network-level protection for all critical infrastructure"
                  },
                  {
                    icon: Database,
                    title: "Protect Your Data", 
                    description: "Arrosoft Stealth hides critical data files and folders and limits access to only select privileged users.",
                    detail: "Advanced file-level security with granular access controls"
                  },
                  {
                    icon: Key,
                    title: "Protect Your Access",
                    description: "Limit and protect your access to critical systems and data by using active authentication and zero-trust security.",
                    detail: "Multi-factor authentication with continuous verification"
                  }
                ].map((capability, index) => {
                  const Icon = capability.icon;
                  return (
                    <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{capability.title}</h3>
                      <p className="text-sm text-gray-600 mb-3 leading-relaxed">{capability.description}</p>
                      <p className="text-xs text-blue-600 font-medium">{capability.detail}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Technical Features - Mobile Optimized */}
            <motion.div 
              className="mb-12 sm:mb-16" 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Stealth Defense Technology</h2>
                <p className="text-sm sm:text-base text-gray-600 px-2 mb-6 leading-relaxed">
                  Establishes a stealth isolation zone at the driver layer, effectively preventing hackers and ransomware from accessing server sites or file folders by exploiting security gaps and system vulnerabilities.
                </p>
                <div className="bg-yellow-50 rounded-lg px-4 py-3 border border-yellow-200 mx-2 sm:mx-0">
                  <p className="text-yellow-800 text-sm font-medium">
                    Driver-layer protection that operates below traditional security measures
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0">
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
                    <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors flex flex-col h-full">
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">{feature.description}</p>
                  </div>
                  <div className="bg-white rounded-lg px-3 py-2 border border-gray-200 mt-auto">
                    <p className="text-xs text-green-600 font-semibold">{feature.benefit}</p>
                  </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Benefits Section - Mobile First */}
            <motion.div 
              className="mb-12 sm:mb-16" 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Key Benefits & Outcomes</h2>
                <p className="text-sm sm:text-base text-gray-600 px-2 leading-relaxed">
                  Experience comprehensive protection with measurable security improvements across your organization.
                </p>
              </div>
              
              <div className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0">
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
                    <div key={index} className="flex gap-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Server Protection Overview - Mobile Stacked */}
            <motion.div 
              className="mb-12 sm:mb-16" 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 sm:p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Multi-Layered Server Protection</h2>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-2">
                    Arrosoft Stealth protects your database, file and application servers and backup servers in a comprehensive multi-layered approach, ensuring complete coverage across your entire infrastructure.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  {[
                    { name: "Database Servers", desc: "Core data protection", icon: Database },
                    { name: "File Servers", desc: "Document security", icon: Server },
                    { name: "Application Servers", desc: "Runtime protection", icon: Layers },
                    { name: "Backup Servers", desc: "Recovery safeguards", icon: Shield }
                  ].map((server, index) => {
                    const Icon = server.icon;
                    return (
                      <div key={index} className="text-center bg-white rounded-xl p-4 border border-gray-200 hover:border-blue-300 transition-colors">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                        </div>
                        <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-1">{server.name}</h3>
                        <p className="text-xs text-gray-500">{server.desc}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Complete Infrastructure Coverage</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Seamless integration with existing infrastructure</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Zero downtime deployment across all server types</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Centralized management and monitoring dashboard</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Architecture Diagram - Mobile Optimized */}
            <motion.div 
              className="mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">System Architecture Overview</h2>
                <p className="text-sm sm:text-base text-gray-600 px-2 leading-relaxed">
                  See how Stealth Defense integrates seamlessly with your existing infrastructure to provide comprehensive protection across all server types and user access points.
                </p>
              </div>
              
              {/* Mobile-optimized diagram container */}
              <div className="bg-black rounded-2xl p-4 sm:p-8 min-h-[300px] sm:min-h-[400px] flex items-center justify-center mx-2 sm:mx-0">
                <img 
                  src="/lovable-uploads/7c739278-4362-4df9-98e6-9890d08a4303.png" 
                  alt="Stealth Defense System Architecture - Shows how Stealth Defense protects Active Directory, Web Server, Oracle DB, Backup Server, and vCenter Server with Security Broker access controls"
                  className="w-full h-full object-contain max-w-full max-h-full rounded-lg"
                />
              </div>
            </motion.div>

            {/* Call to Action - Mobile Optimized */}
            <motion.div 
              className="text-center pb-12 sm:pb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 sm:p-8 text-white mx-2 sm:mx-0">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ready to Make Your Assets Invisible?</h2>
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
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}