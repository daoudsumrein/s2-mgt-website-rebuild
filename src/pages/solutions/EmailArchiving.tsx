import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Shield, Database, Search, HardDrive, Users, CheckCircle, Target, FileText, Building, TrendingUp, BookOpen } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description: "Assistance with regulatory compliance helps companies to meet a growing number of compliance requirements and obligations under the GDPR"
  },
  {
    icon: Database,
    title: "Data Loss Protection",
    description: "Protection against data loss, safeguard the integrity of the archive. Even PST files can be centrally archived and protected"
  },
  {
    icon: HardDrive,
    title: "Storage Optimization",
    description: "Reduce storage requirements, rule-based deletion of emails from the server after archiving, de-duplication, and compression help you to save storage space"
  },
  {
    icon: FileText,
    title: "Simplified Backup & Restore",
    description: "Simplified backup & restore, reduced data volumes on the email server and one-click restore options for users mean shorter backup and restore times"
  },
  {
    icon: TrendingUp,
    title: "Increased Productivity",
    description: "Increase productivity, users benefit from the fast full-text search function, intuitive operation and the elimination of mailbox quotas"
  },
  {
    icon: Mail,
    title: "Email Service Independence",
    description: "Independence from the email service is an additional security measure for your email data"
  }
];

const deliverables = [
  {
    icon: Database,
    title: "Centralized Storage",
    features: [
      "Centralized storage of business-critical information",
      "Automated archiving of all email communications",
      "Seamless integration with Microsoft Outlook",
      "Long-term data availability and protection regardless of volume"
    ]
  },
  {
    icon: Shield,
    title: "Data Preservation",
    features: [
      "Preservation of classified company data",
      "Tamper-proof archive integrity",
      "Secure storage with advanced encryption",
      "Protection against data corruption and loss"
    ]
  },
  {
    icon: FileText,
    title: "Information Management",
    features: [
      "Information management enhancement",
      "Intelligent categorization and indexing",
      "Advanced search and retrieval capabilities",
      "Efficient data organization and access"
    ]
  },
  {
    icon: Building,
    title: "Corporate Strategy Support",
    features: [
      "Support corporate strategy execution",
      "Strategic data insights and analytics",
      "Business intelligence from archived communications",
      "Enhanced decision-making capabilities"
    ]
  },
  {
    icon: Users,
    title: "Communication Improvement",
    features: [
      "Business communication improvement",
      "Enhanced collaboration and transparency",
      "Better communication audit trails",
      "Improved organizational knowledge sharing"
    ]
  },
  {
    icon: CheckCircle,
    title: "Compliance & Risk Management",
    features: [
      "Compliance and risk mitigation",
      "Regulatory adherence and reporting",
      "Legal discovery and e-discovery support",
      "Risk assessment and management tools"
    ]
  },
  {
    icon: TrendingUp,
    title: "Data Utilization",
    features: [
      "Efficient data utilization",
      "Optimized storage and performance",
      "Cost-effective data management",
      "Improved operational efficiency"
    ]
  },
  {
    icon: BookOpen,
    title: "Educational Resources",
    features: [
      "Educational resources and training",
      "User adoption and best practices",
      "Ongoing support and guidance",
      "Knowledge transfer and skill development"
    ]
  }
];

const keyBenefits = [
  "Automatic storage of all emails in centralized archive",
  "Full user access to archived messages",
  "Seamless Microsoft Outlook integration",
  "Fast full-text search functionality",
  "Elimination of mailbox quotas",
  "Enhanced data security and protection"
];

const idealFor = [
  "Organizations requiring GDPR compliance",
  "Companies with growing email volumes",
  "Businesses seeking storage optimization",
  "Enterprises needing data loss protection",
  "Organizations requiring audit trails",
  "Companies with regulatory obligations"
];

export default function EmailArchiving() {
  const heroAnimation = useScrollAnimation({ threshold: 0.3 });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Email Archiving Solutions MENA - Compliance & Data Retention | S2 Solutions</title>
        <meta name="description" content="Professional email archiving solutions for MENA enterprises. Complete email archiving with compliance features, data retention policies, and secure storage. Serving UAE, Saudi Arabia, and Middle East." />
        <meta name="keywords" content="email archiving MENA, email compliance UAE, data retention Middle East, email storage Saudi Arabia, archiving solutions, compliance archiving" />
        <link rel="canonical" href="https://s2mgt.com/solutions/email-archiving" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Email Archiving Solutions MENA - Compliance & Data Retention | S2 Solutions" />
        <meta property="og:description" content="Professional email archiving solutions for MENA enterprises. Complete email archiving with compliance features, data retention policies, and secure storage. Serving UAE, Saudi Arabia, and Middle East." />
        <meta property="og:url" content="https://s2mgt.com/solutions/email-archiving" />
        <meta property="og:image" content="https://s2mgt.com/assets/s2-logo.png" />
        <meta property="og:site_name" content="S2 Management Solutions" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Email Archiving Solutions MENA - Compliance & Data Retention | S2 Solutions" />
        <meta name="twitter:description" content="Professional email archiving solutions for MENA enterprises. Complete email archiving with compliance features, data retention policies, and secure storage. Serving UAE, Saudi Arabia, and Middle East." />
        <meta name="twitter:image" content="https://s2mgt.com/assets/s2-logo.png" />
      </Helmet>
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
                      <span className="relative">Compliance Solutions</span>
                    </Badge>
                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      <span 
                        className="bg-gradient-to-r from-blue-400 via-blue-500 to-green-400 bg-clip-text text-transparent animate-pulse hover:scale-105 transition-transform duration-300 cursor-default inline-block pb-4"
                        style={{
                          backgroundSize: '300% 300%',
                          animation: 'gradientShift 4s ease-in-out infinite'
                        }}
                      >
                        Email Archiving
                      </span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                      Comprehensive email archiving solutions for compliance, legal discovery, and business continuity with automated data retention and seamless access.
                    </p>
                    
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 relative overflow-hidden group/btn px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold w-full sm:w-auto"
                      onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=Email%20Archiving%20Consultation', '_blank')}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500" />
                      <span className="relative">Schedule Consultation</span>
                    </Button>
                  </div>
                  
                  {/* Right Media Section */}
                  <div className="order-first lg:order-last">
                    <div className="relative overflow-hidden h-[200px] sm:h-[280px] md:h-[320px] lg:h-[360px] group/video hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-400 rounded-lg sm:rounded-xl">
                      {/* Video Container */}
                      <div className="absolute inset-0">
                        <iframe 
                          src="https://www.youtube.com/embed/zP8x4HFmJ-I?si=EhhBeYBwh4OOUJmE" 
                          className="w-full h-full border-none rounded-xl"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                          title="YouTube video player"
                        />
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
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: '#E65F1E' }}>
                Why Enterprise Email Archiving Is Critical for Your Business
              </h2>
              <p className="text-lg text-center text-slate-600 mb-12 max-w-4xl mx-auto">
                MailStore Server has been the trusted choice for tens of thousands of organizations worldwide since 2006. Ensure regulatory compliance, reduce storage costs, and maintain business continuity with our proven email archiving solution.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "fas fa-shield-alt",
                  title: "Regulatory Compliance",
                  description: "Meet GDPR, SOX, and industry-specific regulations with tamper-proof archiving, legal hold capabilities, and comprehensive audit trails.",
                  color: "blue"
                },
                {
                  icon: "fas fa-database",
                  title: "Storage Optimization",
                  description: "Reduce storage requirements by up to 70% through intelligent de-duplication, compression, and automated retention policies.",
                  color: "green"
                },
                {
                  icon: "fas fa-search-plus",
                  title: "Instant Search & Recovery",
                  description: "Powerful full-text search across emails and attachments with one-click restore capabilities for users and administrators.",
                  color: "purple"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`text-4xl mb-6 relative z-10 ${
                      benefit.color === 'blue' ? 'text-blue-500' : 
                      benefit.color === 'green' ? 'text-green-500' : 
                      'text-purple-500'
                    }`}
                  >
                    <i className={benefit.icon}></i>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-4 relative z-10">{benefit.title}</h3>
                  <p className="text-slate-600 relative z-10">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
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
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: '#E65F1E' }}>
                Comprehensive Email Archiving Features
              </h2>
              <p className="text-lg text-center text-slate-600 mb-12 max-w-4xl mx-auto">
                Powerful archiving capabilities with universal compatibility, advanced search, and enterprise-grade security.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
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
                  className="bg-slate-50 hover:bg-white rounded-xl p-6 text-center transition-all duration-300 border-2 border-transparent hover:border-blue-200 cursor-pointer relative overflow-hidden group"
                >
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                      className="text-4xl mb-4" style={{ color: '#E65F1E' }}
                    >
                      <feature.icon size={48} />
                    </motion.div>
                    <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                    <p className="text-slate-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Deliverables Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16" style={{ backgroundColor: '#F8F7F4' }}
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: '#E65F1E' }}>
                What You Get With Our Email Archiving Solution
              </h2>
              <p className="text-lg text-center text-slate-600 mb-12 max-w-4xl mx-auto">
                Complete email archiving implementation with training, support, and ongoing maintenance to ensure your success.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {deliverables.map((deliverable, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.1 + index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -15, 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    transition: { duration: 0.3 }
                  }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 relative overflow-hidden group cursor-pointer"
                >
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                      className="text-3xl mb-4" style={{ color: '#E65F1E' }}
                    >
                      <deliverable.icon size={36} />
                    </motion.div>
                    <h3 className="text-lg font-bold mb-4">{deliverable.title}</h3>
                    <ul className="space-y-2">
                      {deliverable.features.map((item, idx) => (
                        <li key={idx} className="text-slate-600 text-sm flex items-start gap-2">
                          <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Benefits & Use Cases */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 bg-white"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <i className="fas fa-check-circle text-green-500 text-3xl"></i>
                    Key Benefits
                  </h3>
                  <div className="space-y-3">
                    {keyBenefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        whileHover={{ x: 10, transition: { duration: 0.2 } }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 transition-all duration-300"
                      >
                        <CheckCircle size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <i className="fas fa-bullseye text-blue-500 text-3xl"></i>
                    Ideal For
                  </h3>
                  <div className="space-y-3">
                    {idealFor.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        whileHover={{ x: -10, transition: { duration: 0.2 } }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 transition-all duration-300"
                      >
                        <Target size={20} className="text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 text-center" style={{ backgroundColor: '#F8F7F4' }}
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#E65F1E' }}>
                Ready to Implement Email Archiving?
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Join tens of thousands of organizations worldwide who trust our email archiving solutions. Get started with a free consultation and implementation plan.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 px-8 py-3 text-lg font-semibold"
                  onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=Email%20Archiving%20Consultation', '_blank')}
                >
                  <i className="fas fa-calendar-alt mr-2"></i>
                  Schedule Free Consultation
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}