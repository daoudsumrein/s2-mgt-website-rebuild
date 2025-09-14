import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, Database, Settings, CheckCircle, AlertTriangle, Server, FileX, Target, ArrowRight } from "lucide-react";
const features = [{
  icon: Database,
  title: "Isolation backup data in an offline, undiscoverable vault",
  description: "Secure offline storage that remains invisible to potential attackers"
}, {
  icon: Lock,
  title: "Secured with multi-factor authentication (MFA)",
  description: "Prevents credential-based attacks with robust authentication"
}, {
  icon: Eye,
  title: "Intelligence equipped with smart sensors",
  description: "Monitor and source data integrity with advanced detection capabilities"
}, {
  icon: CheckCircle,
  title: "Ensures only clean data enters the vault",
  description: "Verifies data integrity before storage to prevent contamination"
}, {
  icon: Shield,
  title: "Immutability ensures data cannot be modified, deleted, or corrupted",
  description: "Protected data remains unchanged and secure from tampering"
}, {
  icon: Settings,
  title: "NIST cybersecurity framework compliance",
  description: "Meets industry standards for comprehensive security"
}, {
  icon: Server,
  title: "Zero Trust Architecture",
  description: "Never trust, always verify approach to security"
}, {
  icon: Database,
  title: "Randomized vault connectivity",
  description: "Unpredictable connection patterns enhance security"
}, {
  icon: AlertTriangle,
  title: "Real-time threat detection",
  description: "Immediate identification and response to security threats"
}, {
  icon: FileX,
  title: "Tamper-Resistant Vault",
  description: "Protected storage that resists unauthorized modifications"
}];
const deliverables = [{
  icon: Shield,
  title: "Last Line of Defense Against Ransomware",
  description: "Ultimate protection when all other security measures fail"
}, {
  icon: Database,
  title: "Secure Offline Data Vault",
  description: "Isolated storage environment protected from online threats"
}, {
  icon: CheckCircle,
  title: "Clean, Verified Backup Sets",
  description: "Guaranteed integrity of backup data for reliable recovery"
}, {
  icon: Server,
  title: "Resilient Backup Infrastructure",
  description: "Robust system designed to withstand cyber attacks"
}, {
  icon: Lock,
  title: "Enhanced Backup Security Layer",
  description: "Additional protection for critical backup systems"
}, {
  icon: Settings,
  title: "Compliance-Ready Backup Environment",
  description: "Meeting regulatory requirements for data protection"
}, {
  icon: AlertTriangle,
  title: "Reduced Risk of Data Tampering",
  description: "Minimized exposure to data manipulation threats"
}, {
  icon: Eye,
  title: "Operational Continuity in Crisis",
  description: "Maintained business operations during security incidents"
}];
export default function RansomwareProtection() {
  const heroAnimation = useScrollAnimation({
    threshold: 0.3
  });
  return <>
      <SEOHead title="Ransomware Protection Solutions | S2 Management Solutions" description="Advanced ransomware protection with isolated backup vaults, smart monitoring, and tamper-resistant storage. Your last line of defense against cyber threats." keywords="ransomware protection, backup security, cyber resilience, data vault, immutable backups, threat detection" />
      <div className="min-h-screen flex flex-col">
        <Navigation />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 md:py-16 relative overflow-hidden h-[75vh] flex items-center justify-center particle-container">
            {/* Animated background particles */}
            <div className="absolute inset-0 pointer-events-none z-0 particle-field">
              {/* CSS Background particles */}
              <div className="absolute inset-0 opacity-20 particles-bg" style={{
                backgroundImage: `
                  radial-gradient(2px 2px at 20px 30px, rgba(239, 68, 68, 0.4), transparent),
                  radial-gradient(1px 1px at 40px 70px, rgba(239, 68, 68, 0.3), transparent),
                  radial-gradient(3px 3px at 90px 40px, rgba(239, 68, 68, 0.5), transparent),
                  radial-gradient(1px 1px at 130px 80px, rgba(239, 68, 68, 0.2), transparent)
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
                      backgroundColor: '#EF4444',
                      opacity: Math.random() * 0.6 + 0.2,
                      animation: `particleFloat${i % 3} ${Math.random() * 15 + 10}s infinite linear`,
                      animationDelay: `${Math.random() * 10}s`,
                      boxShadow: '0 0 10px rgba(239, 68, 68, 0.3)'
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
                        backgroundColor: '#EF4444',
                        opacity: Math.random() * 0.7 + 0.3,
                        boxShadow: '0 0 8px rgba(239, 68, 68, 0.4)'
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
                <div className="relative bg-slate-900/90 border-2 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 backdrop-blur-sm shadow-2xl hover:shadow-red-500/20 transition-all duration-500 hover:-translate-y-2 group overflow-hidden hero-card" style={{ borderColor: "#EF4444" }}>
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                  
                  {/* Content Grid */}
                  <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center relative z-10">
                    {/* Left Content */}
                    <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
                      <Badge variant="outline" className="border-red-500/50 text-red-400 bg-red-500/10 hover:bg-red-500/20 hover:border-red-400 hover:scale-105 transition-all duration-300 px-3 sm:px-4 py-1.5 sm:py-2 relative overflow-hidden group/badge text-xs sm:text-sm">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/badge:translate-x-full transition-transform duration-500" />
                        <span className="relative">Cybersecurity Solutions</span>
                      </Badge>
                      
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        <span className="bg-gradient-to-r from-red-400 via-orange-500 to-red-600 bg-clip-text text-transparent animate-pulse hover:scale-105 transition-transform duration-300 cursor-default inline-block" style={{
                          backgroundSize: '300% 300%',
                          animation: 'gradientShift 4s ease-in-out infinite'
                        }}>
                          Ransomware Protection
                        </span>
                      </h1>
                      
                      <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                        Advanced ransomware defense systems with isolated backup vaults as your last line of defense against cyber threats.
                      </p>
                      
                      <Button size="lg" className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg hover:shadow-red-500/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 relative overflow-hidden group/btn px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold w-full sm:w-auto" onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=Ransomware%20Protection%20Consultation', '_blank')}>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500" />
                        <span className="relative">Schedule Consultation</span>
                      </Button>
                    </div>
                    
                    {/* Right Image */}
                    <div className="order-first lg:order-last">
                      <div className="relative overflow-hidden h-[200px] sm:h-[280px] md:h-[320px] lg:h-[360px] group/media hover:scale-[1.02] hover:shadow-lg hover:shadow-red-500/20 transition-all duration-400 rounded-lg sm:rounded-xl">
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 via-red-500/20 to-secondary/20 rounded-lg flex items-center justify-center border border-white/10">
                          <div className="text-center">
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Shield className="w-16 h-16 text-red-400 mx-auto mb-4" />
                            </motion.div>
                            <p className="text-red-300 text-lg font-semibold">AirGap Protection</p>
                            <p className="text-red-200/80 text-sm mt-2">Isolated Defense</p>
                          </div>
                        </div>
                        
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5 opacity-0 group-hover/media:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Hero Content */}
          <section className="pt-6 pb-0 bg-white">
            <div className="max-w-4xl mx-auto px-6">
              <div className="text-center mb-24">
                <h1 className="text-5xl font-light text-gray-900 mb-6">
                  AirGap Ransomware Protection
                </h1>
                <p className="text-xl text-gray-600 mb-8 font-light">
                  Your Last Line of Defence Against Ransomware
                </p>
                <div className="w-24 h-px bg-gray-300 mx-auto"></div>
              </div>
            </div>
          </section>

          {/* Problem Statement */}
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="py-12 md:py-16"
          >
            <div className="container mx-auto px-4">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-red-50 border-l-4 border-red-400 p-8 max-w-4xl mx-auto hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-50/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                <h2 className="text-2xl font-medium text-gray-900 mb-4 relative z-10">Your Backups Are At Risk</h2>
                <p className="text-gray-700 leading-relaxed mb-4 relative z-10">
                  For a long time, data backups have been the mainstay of ransomware recovery. Organizations rely on 
                  backups as the primary approach for their cyber resiliency strategy.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4 relative z-10">
                  Cyber criminals know this and have set their sights on your backup and data protection infrastructure, 
                  with the aim of corrupting, encrypting, or deleting them. This makes it very challenging to execute a 
                  reliable and timely recovery and allows attackers to ask for more extreme ransoms.
                </p>
                <p className="text-gray-700 leading-relaxed relative z-10">
                  For many organizations, the challenge now is to protect that backup infrastructure. Backups should 
                  provide the isolation needed from cyber-attacks, immutability from destructive threats, and, most 
                  importantly, the intelligence to know if that data has already been compromised.
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* Solution Overview */}
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="py-12 md:py-16"
          >
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-light text-gray-900 text-center mb-12">
                    The Arrosoft AirGap Advantage
                  </h2>
                  <div className="text-center mb-16">
                    <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6">
                      Arrosoft AirGap Ransomware Protection is designed to be the last line of defense against ransomware attacks. 
                      It is used when all other methods have become powerless and cannot be recovered.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                      Arrosoft AirGap is a vendor-agnostic offline data protection solution that backs up your data and stores 
                      it in a secure offline data vault with multiple layers of defence. These layers include isolation, 
                      intelligence and immutability.
                    </p>
                  </div>
                </motion.div>

                {/* Three Pillars */}
                <div className="grid md:grid-cols-3 gap-12">
                  {[
                    {
                      number: 1,
                      title: "ISOLATION",
                      description: "Cybercriminals cannot corrupt data they do not know exists. AirGap isolates your backups using randomized port opening times to prevent the data from being discovered by attackers. Multi-factor authentication further isolates the AirGap vault from compromised network credentials.",
                      color: "blue"
                    },
                    {
                      number: 2,
                      title: "INTELLIGENCE",
                      description: "Arrosoft AirGap deploys specially designed intelligent sensors to monitor and alert if the source data has been compromised. If suspicious behaviour is detected, AirGap isolates the infected server to prevent the corrupted data from being backed up. This ensures that the data in the AirGap vault is always clean.",
                      color: "green"
                    },
                    {
                      number: 3,
                      title: "IMMUTABILITY",
                      description: "Arrosoft AirGap deploys advanced technology to lock down the protected data and ensures that it cannot be tampered with, corrupted or destroyed. This includes protecting the backup database and catalogs to ensure that the data is recoverable even if the backup infrastructure has been damaged.",
                      color: "purple"
                    }
                  ].map((pillar, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 50, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      whileHover={{ 
                        y: -15, 
                        scale: 1.05,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                        transition: { duration: 0.3 }
                      }}
                      viewport={{ once: true }}
                      className="text-center bg-white hover:bg-slate-50 rounded-xl p-8 transition-all duration-300 border-2 border-transparent hover:border-blue-200 cursor-pointer relative overflow-hidden group shadow-lg"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                      
                      <motion.div 
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                        className={`w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full text-white font-bold relative z-10 ${
                          pillar.color === 'blue' ? 'bg-blue-600' : 
                          pillar.color === 'green' ? 'bg-green-600' : 
                          'bg-purple-600'
                        }`}
                      >
                        {pillar.number}
                      </motion.div>
                      
                      <h3 className="text-lg font-medium text-gray-900 mb-4 relative z-10">{pillar.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                        {pillar.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Architecture Diagram */}
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="py-12 md:py-16 bg-muted/30"
          >
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <motion.h3 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-2xl font-light text-gray-900 text-center mb-8"
                >
                  Example Architecture
                </motion.h3>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-4 shadow-sm border hover:shadow-lg transition-all duration-300"
                >
                  <img src="/lovable-uploads/254b6e8a-1f01-4f1f-842c-1e5098b969c3.png" alt="AirGap Ransomware Protection Architecture Diagram showing Primary Site, Secondary Site, Software Integration, Backup Data flow, and AirGap Vault with security features" className="w-full h-auto rounded" />
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Technical Details */}
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="py-12 md:py-16"
          >
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-blue-50 border border-blue-200 rounded-lg p-8 hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                  <h3 className="text-xl font-medium text-gray-900 mb-4 relative z-10">Built on NIST Cybersecurity Framework</h3>
                  <p className="text-gray-700 leading-relaxed mb-4 relative z-10">
                    Arrosoft AirGap is built based on the NIST Cybersecurity Framework to provide the highest level of data protection. 
                    Working hand-in-hand with your existing backup software, AirGap introduces new and unique capabilities which will 
                    supercharge your backup's ability to defend against and recover from a ransomware attack.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4 relative z-10">
                    These capabilities include the ability to connect the AirGap vault to the backup server based on a randomized schedule 
                    to make it more difficult for attackers to locate the vault. AirGap also deploys sensors throughout your environment to 
                    monitor the production data in your servers. These sensors report any abnormal activities and will lock down the vault if 
                    suspicious behaviour is detected.
                  </p>
                  <p className="text-gray-700 leading-relaxed relative z-10">
                    Once the vault has been locked, it can only be unlocked using the built-in multi-factor authentication system. Arrosoft 
                    AirGap utilizes the world's latest enterprise zero-trust concept and permissionless design to create the cleanest and 
                    purest backup space for your precious data.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Packages */}
          

          {/* CTA Section */}
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="py-12 md:py-16"
          >
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-2xl font-light text-gray-900 mb-6"
                >
                  Contact us today to find out how Arrosoft AirGap can be your last line of defense against ransomware attacks.
                </motion.h2>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                  <Button 
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 hover:from-blue-700 hover:to-blue-800 hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Contact Sales <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}><ArrowRight className="w-4 h-4" /></motion.div>
                  </Button>
                  <div className="text-gray-600 text-center sm:text-left">
                    <p className="mb-1">info@s2mgt.com</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>
        </main>

        <Footer />
      </div>
    </>;
}