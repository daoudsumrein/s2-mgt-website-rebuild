import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Clock, Database, CheckCircle, Target } from "lucide-react";
const features = [{
  icon: Shield,
  title: "Data Encryption",
  description: "Data encryption, in flight, between the source and the target"
}, {
  icon: Zap,
  title: "Automatic Failover",
  description: "Available automatic failover with server heartbeat monitor"
}, {
  icon: Database,
  title: "DNS Management",
  description: "Integrated DNS management"
}, {
  icon: Target,
  title: "Compression Support",
  description: "Support compression to minimize network impact"
}, {
  icon: Clock,
  title: "Bandwidth Throttling",
  description: "Available bandwidth throttling options"
}, {
  icon: CheckCircle,
  title: "Comprehensive API",
  description: "A comprehensive API for integration"
}, {
  icon: Shield,
  title: "Alerting & Reporting",
  description: "Alerting and reporting features"
}, {
  icon: Target,
  title: "Non-Disruptive Testing",
  description: "Easy, non-disruptive testing"
}];
const deliverables = [{
  icon: Zap,
  title: "No delays, no data loss",
  description: "Continuous replication ensures zero data loss and rapid recovery"
}, {
  icon: Clock,
  title: "Rapid failovers prevent downtime",
  description: "Instant failover capabilities minimize business disruption"
}, {
  icon: Shield,
  title: "Negligible performance impact",
  description: "Lightweight solution that doesn't burden primary systems"
}, {
  icon: Database,
  title: "Physical systems support",
  description: "Comprehensive support for diverse IT environments"
}];
export default function DisasterRecovery() {
  // Scroll animation hooks for different sections
  const heroAnimation = useScrollAnimation({
    threshold: 0.3
  });
  const problemAnimation = useScrollAnimation({
    threshold: 0.2
  });
  const benefitsAnimation = useScrollAnimation({
    threshold: 0.2
  });
  const workflowAnimation = useScrollAnimation({
    threshold: 0.2
  });
  const platformAnimation = useScrollAnimation({
    threshold: 0.2
  });
  const featuresAnimation = useScrollAnimation({
    threshold: 0.2
  });
  const distributorAnimation = useScrollAnimation({
    threshold: 0.2
  });
  return <div className="min-h-screen flex flex-col">
      <SEOHead title="OpenText (Carbonite) Distributor MENA | UAE, KSA, Qatar" description="S2 Management Official MENA distributor of OpenText Carbonite Availability. Real-time replication, automated failover & 24/7 protection." keywords="Carbonite MENA, OpenText Availability, Carbonite distributor UAE, Carbonite distributor Saudi Arabia, Carbonite Qatar, Carbonite Oman, Carbonite Bahrain, Carbonite Kuwait, disaster recovery MENA, business continuity UAE, real-time replication, automated failover, enterprise data protection, RPO RTO solutions, OpenText partner Middle East" canonicalUrl="https://s2mgt.com/solutions/opentext-carbonite-availability" />
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
                      <span className="relative">Disaster Recovery Solution</span>
                    </Badge>
                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-green-400 bg-clip-text text-transparent animate-pulse hover:scale-105 transition-transform duration-300 cursor-default inline-block" style={{
                      backgroundSize: '300% 300%',
                      animation: 'gradientShift 4s ease-in-out infinite'
                    }}>
                        OpenText Availability
                      </span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                      Ensure maximum uptime for your Windows and Linux servers with comprehensive DR solutions featuring continuous replication and automated failover.
                    </p>
                    
                    <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 relative overflow-hidden group/btn px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold w-full sm:w-auto" onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=Disaster%20Recovery%20Consultation', '_blank')}>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500" />
                      <span className="relative">Schedule Consultation</span>
                    </Button>
                  </div>
                  
                  {/* Right Media Section */}
                  <div className="order-first lg:order-last">
                    <div className="relative overflow-hidden h-[200px] sm:h-[280px] md:h-[320px] lg:h-[360px] group/video hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-400 rounded-lg sm:rounded-xl">
                      {/* Video Container */}
                      <div className="absolute inset-0">
                        <iframe src="https://player.vimeo.com/video/724980545?badge=0&autopause=0&player_id=0&app_id=58479&controls=1&title=0&byline=0&portrait=0" className="w-full h-full border-none rounded-xl" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="Disaster Recovery Solutions" />
                      </div>
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5 opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </section>

        {/* Problem & Solution Section */}
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
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
                The Cost of Downtime is Rising
              </h2>
              <p className="text-lg text-center text-slate-600 max-w-4xl mx-auto mb-12">
                From natural disasters to user errors and cyber attacks, IT systems face constant threats. 
                Every hour of downtime costs thousands in lost revenue and productivity.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 relative overflow-hidden group cursor-pointer"
              >
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                    className="mb-6"
                  >
                    <div className="text-5xl text-red-500">
                      <i className="fas fa-exclamation-triangle"></i>
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4">The Challenge</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Organizations face multiple downtime risks daily - hardware failures, human errors, cyber attacks, and natural disasters. Traditional backup solutions often result in significant data loss and extended recovery times.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 relative overflow-hidden group cursor-pointer"
              >
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                    className="mb-6"
                  >
                    <div className="text-5xl text-blue-500">
                      <i className="fas fa-shield-alt"></i>
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4">The Solution</h3>
                  <p className="text-slate-600 leading-relaxed">
                    OpenText Availability provides continuous real-time replication with byte-level precision, ensuring minimal data loss and near-instantaneous failover capabilities across any environment.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Key Benefits Section */}
        <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div ref={benefitsAnimation.ref} initial={{
            opacity: 0,
            y: 50
          }} animate={benefitsAnimation.isInView ? {
            opacity: 1,
            y: 0
          } : {
            opacity: 0,
            y: 50
          }} transition={{
            duration: 0.8,
            ease: "easeOut"
          }}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
                Why Choose OpenText Availability?
              </h2>
              <p className="text-lg text-center text-slate-300 max-w-4xl mx-auto mb-12">
                Proven technology that delivers enterprise-grade protection with minimal performance impact
              </p>
            </motion.div>
            
            {/* Stats Grid */}
            <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto" initial={{
            opacity: 0,
            scale: 0.9
          }} animate={benefitsAnimation.isInView ? {
            opacity: 1,
            scale: 1
          } : {
            opacity: 0,
            scale: 0.9
          }} transition={{
            duration: 0.6,
            delay: 0.2,
            ease: "easeOut"
          }}>
              <motion.div 
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm transition-all duration-300 relative overflow-hidden group cursor-pointer"
              >
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">99.9%</div>
                  <div className="text-sm text-slate-300 font-medium">Uptime Achieved</div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm transition-all duration-300 relative overflow-hidden group cursor-pointer"
              >
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">&lt;30s</div>
                  <div className="text-sm text-slate-300 font-medium">Failover Time</div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm transition-all duration-300 relative overflow-hidden group cursor-pointer"
              >
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">0</div>
                  <div className="text-sm text-slate-300 font-medium">Performance Impact</div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm transition-all duration-300 relative overflow-hidden group cursor-pointer"
              >
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">256</div>
                  <div className="text-sm text-slate-300 font-medium">AES Encryption</div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {deliverables.map((benefit, index) => (
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
                  className="bg-white/5 border-white/10 backdrop-blur-sm rounded-xl p-6 relative overflow-hidden group cursor-pointer"
                >
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                      className="mb-6"
                    >
                      <benefit.icon className="h-12 w-12 text-blue-400" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                    <p className="text-slate-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 bg-white"
        >
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
                How It Works
              </h2>
              <p className="text-lg text-center text-slate-600 max-w-4xl mx-auto mb-12">
                Patented replication technology that captures changes at the byte level and replicates them between any source and target environment
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: "fas fa-cogs",
                  title: "Deploy & Configure",
                  description: "Install the technology on all servers being protected and configure target secondary environments through the management console.",
                  color: "blue"
                },
                {
                  icon: "fas fa-seedling",
                  title: "Initial Seeding", 
                  description: "Complete initial data replication with encrypted transmission and three-tier compression to minimize network impact.",
                  color: "green"
                },
                {
                  icon: "fas fa-sync-alt",
                  title: "Real-Time Sync",
                  description: "Continuous byte-level change capture and real-time replication keeps your secondary systems perfectly synchronized.",
                  color: "purple"
                },
                {
                  icon: "fas fa-rocket",
                  title: "Instant Failover",
                  description: "In case of outage, automatic or manual failover redirects users to secondary systems in seconds with minimal disruption.",
                  color: "orange"
                }
              ].map((step, index) => (
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
                  className="text-center bg-slate-50 hover:bg-white rounded-xl p-8 transition-all duration-300 border-2 border-transparent hover:border-blue-200 cursor-pointer relative overflow-hidden group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                    className={`text-5xl mb-6 ${
                      step.color === 'blue' ? 'text-blue-500' : 
                      step.color === 'green' ? 'text-green-500' : 
                      step.color === 'purple' ? 'text-purple-500' : 'text-orange-500'
                    }`}
                  >
                    <i className={step.icon}></i>
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Failover Diagram Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 bg-gradient-to-br from-gray-50 to-gray-100"
        >
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
                Seamless Failover in Action
              </h2>
              <p className="text-lg text-center text-slate-600 max-w-4xl mx-auto mb-12">
                See how OpenText Availability ensures business continuity with continuous replication and instant failover
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="overflow-hidden relative group">
                  <img src="/lovable-uploads/75dbbe95-acbf-4db9-8719-50b578aa327c.png" alt="OpenText Availability Failover Process - Shows primary system replicating to target system, then automatic failover when primary fails" className="w-full h-auto object-contain rounded-xl transition-transform duration-300 hover:scale-105 group-hover:shadow-lg" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
                </div>
              </motion.div>
              
              <div className="space-y-6">
                {[
                  {
                    icon: "fas fa-play-circle",
                    title: "Normal Operations",
                    description: "Primary system operates normally while changes are continuously replicated to the target system in real-time, ensuring virtually no data loss.",
                    color: "green"
                  },
                  {
                    icon: "fas fa-exchange-alt",
                    title: "Automatic Failover",
                    description: "When primary system failure is detected, automatic or manual failover activates the target system, ensuring near-zero downtime and seamless user experience.",
                    color: "blue"
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.4 + index * 0.2,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      y: -10, 
                      scale: 1.02,
                      boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                      transition: { duration: 0.3 }
                    }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 relative overflow-hidden group cursor-pointer"
                  >
                    {/* Background gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-transparent ${
                      step.color === 'green' ? 'to-green-50' : 'to-blue-50'
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    {/* Shine effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-transparent ${
                      step.color === 'green' ? 'via-green-500/10' : 'via-blue-500/10'
                    } to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none`} />
                    
                    <div className="relative z-10">
                      <div className="flex items-center mb-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                          className={`w-12 h-12 ${
                            step.color === 'green' ? 'bg-gradient-to-br from-green-500 to-green-600' : 'bg-gradient-to-br from-blue-500 to-purple-500'
                          } rounded-lg flex items-center justify-center text-white mr-4`}
                        >
                          <i className={`${step.icon} text-lg`}></i>
                        </motion.div>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
              {[
                {
                  icon: "fas fa-sync",
                  title: "Continuous Sync",
                  description: "Real-time replication ensures target system is always current",
                  color: "blue"
                },
                {
                  icon: "fas fa-bolt",
                  title: "Instant Detection",
                  description: "Heartbeat monitoring detects failures within seconds",
                  color: "purple"
                },
                {
                  icon: "fas fa-rocket",
                  title: "Zero Downtime",
                  description: "Users seamlessly redirected to target system",
                  color: "green"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.6 + index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -12, 
                    scale: 1.05,
                    boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                    transition: { duration: 0.3 }
                  }}
                  viewport={{ once: true }}
                  className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 relative overflow-hidden group cursor-pointer"
                >
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-transparent ${
                    feature.color === 'blue' ? 'to-blue-50' : 
                    feature.color === 'purple' ? 'to-purple-50' : 'to-green-50'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Shine effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-transparent ${
                    feature.color === 'blue' ? 'via-blue-500/10' : 
                    feature.color === 'purple' ? 'via-purple-500/10' : 'via-green-500/10'
                  } to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none`} />
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                      className={`text-4xl mb-4 ${
                        feature.color === 'blue' ? 'text-blue-500' : 
                        feature.color === 'purple' ? 'text-purple-500' : 'text-green-500'
                      }`}
                    >
                      <i className={feature.icon}></i>
                    </motion.div>
                    <h4 className="font-bold mb-2">{feature.title}</h4>
                    <p className="text-sm text-slate-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Platform Support Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 bg-white"
        >
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
                Universal Platform Support
              </h2>
              <p className="text-lg text-center text-slate-600 max-w-4xl mx-auto mb-12">
                Protect all your critical systems regardless of underlying infrastructure
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: "fas fa-desktop",
                  title: "Operating Systems",
                  items: ["Windows Server", "Red Hat Enterprise Linux", "Oracle Enterprise Linux", "SUSE Linux Enterprise", "CentOS", "Ubuntu"],
                  color: "blue"
                },
                {
                  icon: "fas fa-cube",
                  title: "Virtualization", 
                  items: ["VMware ESXi (Native Integration)", "Microsoft Hyper-V (Native Integration)", "Any Hypervisor Platform", "Physical to Virtual Migration", "Virtual to Physical Migration"],
                  color: "purple"
                },
                {
                  icon: "fas fa-cloud",
                  title: "Cloud Platforms",
                  items: ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform", "VMware vCloud Director", "Hybrid Cloud Architectures", "Any Cloud Platform"],
                  color: "green"
                }
              ].map((platform, index) => (
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
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    transition: { duration: 0.3 }
                  }}
                  viewport={{ once: true }}
                  className="bg-slate-50 hover:bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-200 cursor-pointer relative overflow-hidden group"
                >
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-transparent ${
                    platform.color === 'blue' ? 'to-blue-50' : 
                    platform.color === 'purple' ? 'to-purple-50' : 'to-green-50'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Shine effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-transparent ${
                    platform.color === 'blue' ? 'via-blue-500/10' : 
                    platform.color === 'purple' ? 'via-purple-500/10' : 'via-green-500/10'
                  } to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none`} />
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                      className={`text-4xl mb-6 ${
                        platform.color === 'blue' ? 'text-blue-500' : 
                        platform.color === 'purple' ? 'text-purple-500' : 'text-green-500'
                      }`}
                    >
                      <i className={platform.icon}></i>
                    </motion.div>
                    <h4 className="font-bold text-lg mb-4 text-gray-800">{platform.title}</h4>
                    <ul className="space-y-2 text-slate-600">
                      {platform.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="font-medium transition-colors duration-200 hover:text-slate-800">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Advanced Features Section */}
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
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Advanced Features
              </h2>
              <p className="text-lg text-center text-slate-600 mb-12 max-w-4xl mx-auto">
                Enterprise-grade capabilities designed for mission-critical environments
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: "fas fa-lock",
                  title: "Data Encryption",
                  description: "Data encryption, in flight, between the source and the target",
                  color: "blue"
                },
                {
                  icon: "fas fa-magic",
                  title: "Automatic Failover", 
                  description: "Available automatic failover with server heartbeat monitor",
                  color: "green"
                },
                {
                  icon: "fas fa-database",
                  title: "DNS Management",
                  description: "Integrated DNS management",
                  color: "purple"
                },
                {
                  icon: "fas fa-compress",
                  title: "Compression Support",
                  description: "Support compression to minimize network impact", 
                  color: "orange"
                },
                {
                  icon: "fas fa-tachometer-alt",
                  title: "Bandwidth Throttling",
                  description: "Available bandwidth throttling options",
                  color: "red"
                },
                {
                  icon: "fas fa-code",
                  title: "Comprehensive API",
                  description: "A comprehensive API for integration",
                  color: "indigo"
                },
                {
                  icon: "fas fa-bell",
                  title: "Alerting & Reporting", 
                  description: "Alerting and reporting features",
                  color: "yellow"
                },
                {
                  icon: "fas fa-check-circle",
                  title: "Non-Disruptive Testing",
                  description: "Easy, non-disruptive testing",
                  color: "pink"
                }
              ].map((feature, index) => (
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
                  
                  <div className="relative z-10 text-center">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                      className="mb-6"
                    >
                      <div className={`text-4xl ${
                        feature.color === 'blue' ? 'text-blue-500' :
                        feature.color === 'green' ? 'text-green-500' :
                        feature.color === 'purple' ? 'text-purple-500' :
                        feature.color === 'orange' ? 'text-orange-500' :
                        feature.color === 'red' ? 'text-red-500' :
                        feature.color === 'indigo' ? 'text-indigo-500' :
                        feature.color === 'yellow' ? 'text-yellow-500' : 'text-pink-500'
                      }`}>
                        <i className={feature.icon}></i>
                      </div>
                    </motion.div>
                    <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Official Distributor Section */}
        <section className="py-16 text-white relative overflow-hidden" style={{
        backgroundColor: '#0B1328'
      }}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`
          }} />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div ref={distributorAnimation.ref} initial={{
            opacity: 0,
            y: 50
          }} animate={distributorAnimation.isInView ? {
            opacity: 1,
            y: 0
          } : {
            opacity: 0,
            y: 50
          }} transition={{
            duration: 0.8,
            ease: "easeOut"
          }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Official Authorized Distributor</h2>
              <p className="text-lg text-blue-100 max-w-4xl mx-auto">We are the preferred Official OpenText/Carbonite Availability distributor, ensuring authentic licensing and professional support</p>
            </motion.div>
            
            <motion.div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto" initial={{
            opacity: 0,
            scale: 0.95
          }} animate={distributorAnimation.isInView ? {
            opacity: 1,
            scale: 1
          } : {
            opacity: 0,
            scale: 0.95
          }} transition={{
            duration: 0.8,
            delay: 0.3,
            ease: "easeOut"
          }}>
              <div>
                <Card className="bg-white/10 border-white/20 backdrop-blur-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-xl">✓</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Officially Authorized</h3>
                    </div>
                    <p className="text-blue-100 leading-relaxed">
                      Direct partnership with OpenText ensures you receive genuine software licenses, official updates, and comprehensive warranty coverage.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-6">
                <Card className="bg-white/10 border-white/20 backdrop-blur-lg transition-all duration-300 hover:bg-white/20">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-white font-bold">🏆</span>
                      </div>
                      <h4 className="text-white font-bold text-lg">Exclusive Rights</h4>
                    </div>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      Only legal distributor with exclusive rights to sell and support OpenText Availability solutions.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 border-white/20 backdrop-blur-lg transition-all duration-300 hover:bg-white/20">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-white font-bold">🛡️</span>
                      </div>
                      <h4 className="text-white font-bold text-lg">Guaranteed Authenticity</h4>
                    </div>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      Protect yourself from counterfeit software and unauthorized licensing with our official distribution.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 border-white/20 backdrop-blur-lg transition-all duration-300 hover:bg-white/20">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-white font-bold">📞</span>
                      </div>
                      <h4 className="text-white font-bold text-lg">Direct Support Line</h4>
                    </div>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      Access to official OpenText technical support and our certified expert team.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={distributorAnimation.isInView ? {
            opacity: 1,
            y: 0
          } : {
            opacity: 0,
            y: 30
          }} transition={{
            duration: 0.8,
            delay: 0.6,
            ease: "easeOut"
          }}>
              <Card className="bg-amber-400/10 border-amber-400/30 backdrop-blur-lg mt-12 max-w-4xl mx-auto">
              <CardContent className="p-8 text-center">
                <h3 className="text-amber-400 font-bold text-xl mb-4 flex items-center justify-center">
                  <span className="mr-2">⚠️</span>
                  Beware of Unauthorized Resellers
                </h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Purchasing from unauthorized sources may result in invalid licenses, no support coverage, and potential legal compliance issues. 
                  Ensure your investment is protected by working directly with the official distributor.
                </p>
                <div className="flex flex-wrap justify-center gap-8">
                  <div className="text-center min-w-[8rem]">
                    <div className="text-lg font-bold text-blue-400 mb-1">✓ Valid Licensing</div>
                    <div className="text-sm text-blue-200">With Official Distributor</div>
                  </div>
                  <div className="text-center min-w-[8rem]">
                    <div className="text-lg font-bold text-blue-400 mb-1">✓ Technical Support</div>
                    <div className="text-sm text-blue-200">Direct Access to OpenText</div>
                  </div>
                  <div className="text-center min-w-[8rem]">
                    <div className="text-lg font-bold text-blue-400 mb-1">✓ Software Updates</div>
                    <div className="text-sm text-blue-200">Latest Features & Security</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </motion.div>
          </div>
        </section>

        {/* Final Call to Action Section */}
        <section className="py-16 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Eliminate Downtime?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto font-normal">
              Protect your critical systems with proven high availability and disaster recovery technology
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="bg-white text-gray-800 hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg font-semibold px-8 py-4 text-lg" onClick={() => window.location.href = '/contact'}>
                Contact Us Today
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
}