import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Server, Cloud, RefreshCw, HardDrive, Shield, Zap, CheckCircle, Target, Clock, CloudDownload } from "lucide-react";
const features = [{
  icon: Clock,
  title: "Continuous Incremental Backups",
  description: "Incremental backups performed hourly and continuously, with customizable retention policies to support ongoing business operations"
}, {
  icon: Server,
  title: "Fast Virtual Recovery",
  description: "Fast recovery for virtual environments, including VMware and Hyper-V"
}, {
  icon: RefreshCw,
  title: "Versatile Restore Capabilities",
  description: "Versatile restore capabilities, from full system failover to precise recovery of individual files, folders, or application level data"
}, {
  icon: Zap,
  title: "Instant VM Restoration",
  description: "Instant VM restoration, ensuring minimal downtime"
}, {
  icon: Cloud,
  title: "Cloud-Based Failover",
  description: "Optional cloud based failover for mission critical applications"
}, {
  icon: Shield,
  title: "Immutable Backup",
  description: "Immutable backup technology for enhanced security and ransomware protection"
}, {
  icon: HardDrive,
  title: "Broad Compatibility",
  description: "Broad compatibility with various platforms, operating systems, and virtualization technologies"
}];
const deliverables = [{
  icon: Cloud,
  title: "Operational Continuity",
  features: ["Minimize operational disruptions with fast and efficient cloud-based failover", "24/7 monitoring and automated failover processes", "Seamless transition between primary and backup systems"]
}, {
  icon: Server,
  title: "Rapid VM Recovery",
  features: ["Quickly recover virtual machines to restore services with minimal delay", "Instant boot capabilities for critical VMs", "Granular recovery options for specific applications"]
}, {
  icon: Shield,
  title: "Data Protection",
  features: ["Protect critical data with secure, reliable backup and recovery processes", "End-to-end encryption for data in transit and at rest", "Multi-layer security protocols and access controls"]
}, {
  icon: Zap,
  title: "Intelligent Technology",
  features: ["Leverage intelligent backup technology for enhanced performance and reliability", "AI-driven optimization for backup scheduling and storage", "Automated testing and validation of backup integrity"]
}, {
  icon: CheckCircle,
  title: "Cyber Resilience",
  features: ["Strengthen your business's cyber resilience with end-to-end data protection", "Rapid recovery capabilities for business continuity", "Comprehensive disaster recovery planning and execution"]
}];
const keyBenefits = ["Protection against cyberattacks and ransomware", "Recovery from accidental mistakes and system malfunctions", "Business continuity during natural disasters", "Minimal operational disruptions", "Scalable solution for organizations of any size"];
const idealFor = ["Organizations with critical virtual infrastructure", "Businesses requiring minimal downtime tolerance", "Companies with mission-critical applications", "Enterprises seeking cloud-based disaster recovery", "Organizations needing regulatory compliance"];
export default function ServerBackup() {
  const heroAnimation = useScrollAnimation({
    threshold: 0.3
  });
  return <div className="min-h-screen flex flex-col">
      <SEOHead title="Server Cloud Backup Solutions MENA - Enterprise Server Protection | S2 Solutions" description="Professional server cloud backup solutions for MENA enterprises. Secure Windows and Linux server protection with ransomware recovery and enterprise-grade security. Serving UAE, Saudi Arabia, and Middle East." keywords="server backup MENA, cloud server backup UAE, enterprise backup Middle East, Windows server backup Saudi Arabia, Linux backup, virtual machine backup, database backup" canonicalUrl="https://s2mgt.com/solutions/server-backup" />
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
                      <span className="relative">Server Backup Solutions</span>
                    </Badge>
                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-green-400 bg-clip-text text-transparent animate-pulse hover:scale-105 transition-transform duration-300 cursor-default inline-block" style={{
                      backgroundSize: '300% 300%',
                      animation: 'gradientShift 4s ease-in-out infinite'
                    }}>
                        Opentext Cloud to Cloud
                      </span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                      CloudAlly secures data for Microsoft 365, Google Workspace, Salesforce, and Dropbox with daily backups, point-in-time recovery, and trusted enterprise-grade protection.
                    </p>
                    
                    <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 relative overflow-hidden group/btn px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold w-full sm:w-auto" onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=Server%20Backup%20Consultation', '_blank')}>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500" />
                      <span className="relative">Schedule Consultation</span>
                    </Button>
                  </div>
                  
                  {/* Right Media Section */}
                  <div className="order-first lg:order-last">
                    <div className="relative overflow-hidden h-[200px] sm:h-[280px] md:h-[320px] lg:h-[360px] group/media hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-400 rounded-lg sm:rounded-xl">
                      {/* Vimeo Video */}
                      <div className="absolute inset-0">
                        <iframe
                          src="https://player.vimeo.com/video/799559127?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                          title="CloudAlly Demo"
                          className="w-full h-full border-none rounded-xl"
                        />
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
        <motion.section initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-4">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} viewport={{
            once: true
          }}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Why Enterprise SaaS Data Protection Is Critical for Business Success
              </h2>
              <p className="text-lg text-center text-slate-600 mb-12 max-w-4xl mx-auto">
                Native cloud storage isn't backup. Protect your business-critical data from accidental deletion, ransomware attacks, and compliance violations with CloudAlly's enterprise-grade SaaS backup solutions trusted by 16,000+ organizations.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[{
              icon: "fas fa-cloud-upload-alt",
              title: "Unlimited AWS Backup",
              description: "Secure your data with unlimited storage on Amazon Web Services infrastructure, with immutable snapshots that protect against ransomware and accidental deletion.",
              color: "blue"
            }, {
              icon: "fas fa-undo-alt",
              title: "One-Click Restore",
              description: "Restore individual files, entire folders, or complete user accounts with granular point-in-time recovery. Cross-platform restore capabilities ensure maximum flexibility.",
              color: "green"
            }, {
              icon: "fas fa-lock",
              title: "Stringent Security",
              description: "Bank-grade AES-256 encryption, OAuth authentication, and compliance with HIPAA, GDPR, and SOC 2 standards ensure your data remains secure and compliant.",
              color: "purple"
            }].map((benefit, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 50
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.3 + index * 0.1
            }} whileHover={{
              y: -10,
              scale: 1.02,
              transition: {
                duration: 0.3
              }
            }} viewport={{
              once: true
            }} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div whileHover={{
                scale: 1.1,
                rotate: 5
              }} transition={{
                duration: 0.3
              }} className={`text-4xl mb-6 relative z-10 ${benefit.color === 'blue' ? 'text-blue-500' : benefit.color === 'green' ? 'text-green-500' : 'text-purple-500'}`}>
                    <i className={benefit.icon}></i>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-4 relative z-10">{benefit.title}</h3>
                  <p className="text-slate-600 relative z-10">{benefit.description}</p>
                </motion.div>)}
            </div>
          </div>
        </motion.section>

        {/* Official Distributor Section */}
        <motion.section initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="py-16 bg-white border-t-4 border-blue-600">
          <div className="container mx-auto px-4">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} viewport={{
            once: true
          }}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Official OpenText CloudAlly Distributor for Middle East & North Africa
              </h2>
              <p className="text-lg text-center text-slate-600 mb-12 max-w-4xl mx-auto">
                We are the authorized OpenText partner providing CloudAlly enterprise SaaS backup solutions across the MENA region with dedicated local support, training, and implementation services.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[{
              icon: "fas fa-certificate",
              title: "Authorized OpenText Partner",
              description: "Official distributor status with direct access to OpenText engineering support and latest product updates for the Middle East & North Africa region.",
              color: "blue"
            }, {
              icon: "fas fa-globe-americas",
              title: "Regional MENA Expertise",
              description: "Deep understanding of Middle East & North Africa compliance requirements including data residency, local regulations, and Arabic language support.",
              color: "green"
            }, {
              icon: "fas fa-users-cog",
              title: "Dedicated Local Support",
              description: "Arabic and English speaking technical experts providing implementation, training, and ongoing support across Dubai, Saudi Arabia, Egypt, and the entire MENA region.",
              color: "purple"
            }].map((card, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 50,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              y: 0,
              scale: 1
            }} transition={{
              duration: 0.6,
              delay: 0.3 + index * 0.1
            }} whileHover={{
              y: -15,
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              transition: {
                duration: 0.3
              }
            }} viewport={{
              once: true
            }} className="bg-slate-50 hover:bg-white rounded-xl p-8 text-center transition-all duration-300 border-2 border-transparent hover:border-blue-200 cursor-pointer relative overflow-hidden group">
                  <motion.div whileHover={{
                scale: 1.2,
                rotate: 10
              }} transition={{
                duration: 0.3
              }} className={`text-5xl mb-6 ${card.color === 'blue' ? 'text-blue-500' : card.color === 'green' ? 'text-green-500' : 'text-purple-500'}`}>
                    <i className={card.icon}></i>
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                  <p className="text-slate-600">{card.description}</p>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                </motion.div>)}
            </div>
            
            
            
            
          </div>
        </motion.section>

        {/* Platform Coverage Section */}
        <motion.section initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} viewport={{
            once: true
          }}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Complete Microsoft 365, Google Workspace & Salesforce Backup Coverage
              </h2>
              <p className="text-lg text-center text-slate-600 mb-12 max-w-4xl mx-auto">
                Manage all your enterprise cloud backup needs from a single dashboard with comprehensive coverage across major SaaS platforms including Microsoft 365, Google Workspace, Salesforce, and Dropbox Business.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[{
              icon: "fab fa-microsoft",
              title: "Microsoft 365",
              subtitle: "Complete Coverage:",
              features: ["Exchange Online (Emails, Calendars)", "SharePoint Online (Sites, Lists)", "OneDrive for Business", "Microsoft Teams & Groups"],
              color: "#0078d4"
            }, {
              icon: "fab fa-google",
              title: "Google Workspace",
              subtitle: "Full Protection:",
              features: ["Gmail (Messages, Labels)", "Google Drive (Files, Folders)", "Calendar & Contacts", "Tasks & Shared Drives"],
              color: "#4285f4"
            }, {
              icon: "fab fa-salesforce",
              title: "Salesforce",
              subtitle: "Comprehensive Backup:",
              features: ["CRM Data & Metadata", "Custom Objects & Fields", "Chatter Feeds & Files", "Configuration Settings"],
              color: "#00a1e0"
            }, {
              icon: "fab fa-dropbox",
              title: "Dropbox Business",
              subtitle: "Complete Coverage:",
              features: ["Files & Folders", "Shared Links & Permissions", "Version History", "Team Folders & Metadata"],
              color: "#1a6aff"
            }].map((platform, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 50,
              rotateY: -15
            }} whileInView={{
              opacity: 1,
              y: 0,
              rotateY: 0
            }} transition={{
              duration: 0.6,
              delay: 0.3 + index * 0.1
            }} whileHover={{
              y: -10,
              scale: 1.02,
              rotateY: 5,
              transition: {
                duration: 0.3
              }
            }} viewport={{
              once: true
            }} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 text-center relative overflow-hidden group" style={{
              borderTopColor: platform.color
            }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-transparent to-slate-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div whileHover={{
                scale: 1.1,
                rotate: 10
              }} transition={{
                duration: 0.3
              }} className="text-5xl mb-4 relative z-10" style={{
                color: platform.color
              }}>
                    <i className={platform.icon}></i>
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 relative z-10">{platform.title}</h3>
                  <p className="font-semibold mb-4 relative z-10">{platform.subtitle}</p>
                  <ul className="text-left space-y-1 relative z-10">
                    {platform.features.map((feature, featureIndex) => <motion.li key={featureIndex} initial={{
                  opacity: 0,
                  x: -10
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  duration: 0.4,
                  delay: 0.5 + featureIndex * 0.1
                }} viewport={{
                  once: true
                }} className="text-sm text-slate-600 flex items-center gap-2">
                        <motion.span whileHover={{
                    scale: 1.2
                  }} className="w-1 h-1 bg-current rounded-full flex-shrink-0" />
                        {feature}
                      </motion.li>)}
                  </ul>
                </motion.div>)}
            </div>
          </div>
        </motion.section>

        {/* Key Features Section */}
        <motion.section initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="py-16 bg-gradient-to-br from-slate-50 to-green-50">
          <div className="container mx-auto px-4">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} viewport={{
            once: true
          }}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Advanced Enterprise Backup Features & Compliance Capabilities
              </h2>
              <p className="text-lg text-center text-slate-600 mb-12 max-w-4xl mx-auto">
                CloudAlly's advanced backup capabilities are designed for enterprise requirements with automated daily backups, unlimited retention, cross-platform restore, and the simplicity your IT team needs.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[{
              icon: "fas fa-sync-alt",
              title: "Automated Daily Backups",
              description: "Configurable backup frequency up to 3x daily with incremental backups to minimize storage and bandwidth usage.",
              color: "green"
            }, {
              icon: "fas fa-history",
              title: "Point-in-Time Restore",
              description: "Access historical snapshots and restore data from any point in time with unlimited retention periods.",
              color: "blue"
            }, {
              icon: "fas fa-server",
              title: "BYOS (Bring Your Own Storage)",
              description: "Use your own AWS, Azure, or Google Cloud storage for complete data sovereignty and compliance control.",
              color: "purple"
            }, {
              icon: "fas fa-exchange-alt",
              title: "Cross-Platform Restore",
              description: "Restore data across different platforms and users - migrate from Google to Microsoft or vice versa seamlessly.",
              color: "orange"
            }, {
              icon: "fas fa-search",
              title: "Granular Search & Restore",
              description: "Advanced search capabilities to find specific files, emails, or data points quickly and restore them individually.",
              color: "teal"
            }, {
              icon: "fas fa-download",
              title: "Export Flexibility",
              description: "Export data in multiple formats (PST, EML, PDF, native formats) for compliance, legal discovery, or migration purposes.",
              color: "indigo"
            }].map((feature, index) => <motion.div key={index} initial={{
              opacity: 0,
              x: index % 2 === 0 ? -50 : 50
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.6,
              delay: 0.3 + index * 0.1
            }} whileHover={{
              scale: 1.02,
              y: -5,
              transition: {
                duration: 0.3
              }
            }} viewport={{
              once: true
            }} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 flex gap-4 relative overflow-hidden group">
                  <motion.div whileHover={{
                scale: 1.1,
                rotate: 5
              }} transition={{
                duration: 0.3
              }} className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xl ${feature.color === 'green' ? 'bg-green-500' : feature.color === 'blue' ? 'bg-blue-500' : feature.color === 'purple' ? 'bg-purple-500' : feature.color === 'orange' ? 'bg-orange-500' : feature.color === 'teal' ? 'bg-teal-500' : 'bg-indigo-500'}`}>
                    <i className={feature.icon}></i>
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-transparent to-slate-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                </motion.div>)}
            </div>
          </div>
        </motion.section>

        {/* Security & Compliance Section */}
        <motion.section initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} viewport={{
            once: true
          }}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                ISO 27001, HIPAA & GDPR Compliant Security Standards
              </h2>
              <p className="text-lg text-center text-slate-600 mb-12 max-w-4xl mx-auto">
                Enterprise-level security controls and regulatory compliance certifications including ISO 27001, HIPAA, GDPR, and SOC 2 Type II to protect your most sensitive business data and meet strict regulatory requirements.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
              {[{
              icon: "fas fa-certificate",
              title: "ISO 27001",
              desc: "Information Security Management",
              color: "blue"
            }, {
              icon: "fas fa-user-shield",
              title: "HIPAA Compliant",
              desc: "Healthcare Data Protection",
              color: "green"
            }, {
              icon: "fas fa-balance-scale",
              title: "GDPR Ready",
              desc: "EU Data Protection Regulation",
              color: "purple"
            }, {
              icon: "fas fa-shield-virus",
              title: "SOC 2 Type II",
              desc: "Security & Availability Controls",
              color: "red"
            }, {
              icon: "fas fa-key",
              title: "AES-256 Encryption",
              desc: "Data at Rest & in Transit",
              color: "orange"
            }, {
              icon: "fas fa-lock",
              title: "Immutable Storage",
              desc: "Ransomware Protection",
              color: "teal"
            }].map((badge, index) => <motion.div key={index} initial={{
              opacity: 0,
              scale: 0.8,
              rotateY: -20
            }} whileInView={{
              opacity: 1,
              scale: 1,
              rotateY: 0
            }} transition={{
              duration: 0.6,
              delay: 0.3 + index * 0.1
            }} whileHover={{
              scale: 1.05,
              y: -10,
              rotateY: 10,
              backgroundColor: "#1a6aff",
              color: "white",
              transition: {
                duration: 0.3
              }
            }} viewport={{
              once: true
            }} className="bg-slate-50 hover:bg-blue-600 hover:text-white rounded-xl p-6 text-center transition-all duration-300 cursor-pointer group">
                  <motion.i whileHover={{
                scale: 1.2,
                rotate: 10
              }} transition={{
                duration: 0.3
              }} className={`${badge.icon} text-4xl mb-4 ${badge.color === 'blue' ? 'text-blue-500' : badge.color === 'green' ? 'text-green-500' : badge.color === 'purple' ? 'text-purple-500' : badge.color === 'red' ? 'text-red-500' : badge.color === 'orange' ? 'text-orange-500' : 'text-teal-500'} group-hover:text-white`} />
                  <h4 className="font-bold mb-2">{badge.title}</h4>
                  <p className="text-sm opacity-80">{badge.desc}</p>
                </motion.div>)}
            </div>
            
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.8
          }} viewport={{
            once: true
          }} className="text-center">
              <h3 className="text-2xl font-bold mb-8">Additional Security Features</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[{
                title: "OAuth & MFA Authentication",
                description: "Secure access with multi-factor authentication and OAuth 2.0 protocols",
                icon: "fas fa-fingerprint"
              }, {
                title: "IP Address Restrictions",
                description: "Control access with IP allowlisting and geographic restrictions",
                icon: "fas fa-map-marker-alt"
              }, {
                title: "Global Data Centers",
                description: "Choose your data location with AWS regions worldwide for data residency compliance",
                icon: "fas fa-globe"
              }].map((feature, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 30
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 0.9 + index * 0.1
              }} whileHover={{
                scale: 1.02,
                y: -5,
                transition: {
                  duration: 0.3
                }
              }} viewport={{
                once: true
              }} className="bg-slate-50 hover:bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                    <motion.i whileHover={{
                  scale: 1.1
                }} className={`${feature.icon} text-3xl text-blue-500 mb-4`} />
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-slate-600 text-sm">{feature.description}</p>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>)}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Why Choose CloudAlly Section */}
        <motion.section initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-4">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} viewport={{
            once: true
          }}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Why 16,000+ Organizations Trust CloudAlly
              </h2>
              <p className="text-lg text-center text-slate-600 mb-12 max-w-4xl mx-auto">
                CloudAlly goes beyond basic data protection to provide enterprise-grade features that native cloud storage simply cannot match.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[{
              icon: "fas fa-rocket",
              title: "5-Minute Setup",
              description: "Deploy enterprise backup in minutes, not months. Zero maintenance required after initial configuration.",
              color: "green"
            }, {
              icon: "fas fa-headset",
              title: "24/7 Tier-1 Support",
              description: "Direct access to backup experts, not chatbots. Average response time under 4 hours for critical issues.",
              color: "blue"
            }, {
              icon: "fas fa-infinity",
              title: "Unlimited Retention",
              description: "Keep backups as long as you need. No forced deletion policies or hidden storage limits.",
              color: "purple"
            }, {
              icon: "fas fa-chart-line",
              title: "99.9% Uptime SLA",
              description: "Guaranteed availability backed by service level agreements and financial penalties for downtime.",
              color: "orange"
            }, {
              icon: "fas fa-tags",
              title: "White-Label Options",
              description: "MSPs and partners can rebrand CloudAlly with custom logos, domains, and support channels.",
              color: "teal"
            }, {
              icon: "fas fa-building",
              title: "Enterprise Ready",
              description: "SSO integration, custom contracts, and dedicated customer success managers for enterprise accounts.",
              color: "indigo"
            }].map((item, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 50,
              rotateX: -15
            }} whileInView={{
              opacity: 1,
              y: 0,
              rotateX: 0
            }} transition={{
              duration: 0.6,
              delay: 0.3 + index * 0.1
            }} whileHover={{
              y: -10,
              scale: 1.02,
              rotateX: 5,
              transition: {
                duration: 0.3
              }
            }} viewport={{
              once: true
            }} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-green-500 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-start gap-4 relative z-10">
                    <motion.div whileHover={{
                  scale: 1.2,
                  rotate: 10
                }} transition={{
                  duration: 0.3
                }} className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-xl ${item.color === 'green' ? 'bg-green-500' : item.color === 'blue' ? 'bg-blue-500' : item.color === 'purple' ? 'bg-purple-500' : item.color === 'orange' ? 'bg-orange-500' : item.color === 'teal' ? 'bg-teal-500' : 'bg-indigo-500'}`}>
                      <i className={item.icon}></i>
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                        {item.title}
                      </h4>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </motion.section>

        {/* Industry Solutions Section */}
        <motion.section initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} viewport={{
            once: true
          }}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Trusted by Industries That Demand the Highest Standards
              </h2>
              <p className="text-lg text-center text-slate-600 mb-12 max-w-4xl mx-auto">
                CloudAlly serves organizations across regulated industries where data protection, compliance, and security are mission-critical requirements.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[{
              icon: "fas fa-heartbeat",
              title: "Healthcare",
              description: "HIPAA-compliant backup for patient data protection and medical records retention requirements.",
              color: "#dc2626"
            }, {
              icon: "fas fa-university",
              title: "Financial Services",
              description: "SEC and FINRA compliant data archiving with immutable storage for regulatory examinations.",
              color: "#1a6aff"
            }, {
              icon: "fas fa-graduation-cap",
              title: "Education",
              description: "FERPA-compliant student data protection with special pricing for educational institutions.",
              color: "#059669"
            }, {
              icon: "fas fa-gavel",
              title: "Legal",
              description: "eDiscovery-ready backups with legal hold capabilities and chain of custody documentation.",
              color: "#7c3aed"
            }, {
              icon: "fas fa-industry",
              title: "Manufacturing",
              description: "Protect intellectual property and supply chain data with enterprise-grade security controls.",
              color: "#ea580c"
            }, {
              icon: "fas fa-hand-holding-heart",
              title: "Non-Profit",
              description: "Special pricing for non-profit organizations with the same enterprise-level features and support.",
              color: "#f59e0b"
            }].map((industry, index) => <motion.div key={index} initial={{
              opacity: 0,
              scale: 0.8,
              rotateY: -20
            }} whileInView={{
              opacity: 1,
              scale: 1,
              rotateY: 0
            }} transition={{
              duration: 0.6,
              delay: 0.3 + index * 0.1
            }} whileHover={{
              scale: 1.05,
              y: -10,
              borderColor: "#1a6aff",
              backgroundColor: "#f8fafc",
              transition: {
                duration: 0.3
              }
            }} viewport={{
              once: true
            }} className="p-6 text-center border-2 border-slate-200 hover:border-blue-500 rounded-xl transition-all duration-300 cursor-pointer relative overflow-hidden group">
                  <motion.i whileHover={{
                scale: 1.2,
                rotate: 10
              }} transition={{
                duration: 0.3
              }} className={`${industry.icon} text-5xl mb-4`} style={{
                color: industry.color
              }} />
                  <h4 className="text-xl font-bold mb-3">{industry.title}</h4>
                  <p className="text-slate-600">{industry.description}</p>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-slate-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                </motion.div>)}
            </div>
            
            
          </div>
        </motion.section>

        {/* Overview Section */}
        

        {/* Features Section */}
        

        {/* What We Deliver Section */}
        

        {/* Ideal For & Key Benefits */}
        

        {/* Call to Action Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Card>
                <CardContent className="p-12">
                  <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Server Infrastructure?</h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Ensure business continuity with enterprise-grade server backup and recovery solutions designed for critical environments.
                  </p>
                  <div className="flex justify-center">
                    <Button size="lg" onClick={() => window.location.href = '/contact'}>Contact Us</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
}