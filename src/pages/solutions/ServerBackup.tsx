import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Server, Cloud, RefreshCw, HardDrive, Shield, Zap, CheckCircle, Target, Clock, CloudDownload } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Continuous Incremental Backups",
    description: "Incremental backups performed hourly and continuously, with customizable retention policies to support ongoing business operations"
  },
  {
    icon: Server,
    title: "Fast Virtual Recovery",
    description: "Fast recovery for virtual environments, including VMware and Hyper-V"
  },
  {
    icon: RefreshCw,
    title: "Versatile Restore Capabilities",
    description: "Versatile restore capabilities, from full system failover to precise recovery of individual files, folders, or application level data"
  },
  {
    icon: Zap,
    title: "Instant VM Restoration",
    description: "Instant VM restoration, ensuring minimal downtime"
  },
  {
    icon: Cloud,
    title: "Cloud-Based Failover",
    description: "Optional cloud based failover for mission critical applications"
  },
  {
    icon: Shield,
    title: "Immutable Backup",
    description: "Immutable backup technology for enhanced security and ransomware protection"
  },
  {
    icon: HardDrive,
    title: "Broad Compatibility",
    description: "Broad compatibility with various platforms, operating systems, and virtualization technologies"
  }
];

const deliverables = [
  {
    icon: Cloud,
    title: "Operational Continuity",
    features: [
      "Minimize operational disruptions with fast and efficient cloud-based failover",
      "24/7 monitoring and automated failover processes",
      "Seamless transition between primary and backup systems"
    ]
  },
  {
    icon: Server,
    title: "Rapid VM Recovery",
    features: [
      "Quickly recover virtual machines to restore services with minimal delay",
      "Instant boot capabilities for critical VMs",
      "Granular recovery options for specific applications"
    ]
  },
  {
    icon: Shield,
    title: "Data Protection",
    features: [
      "Protect critical data with secure, reliable backup and recovery processes",
      "End-to-end encryption for data in transit and at rest",
      "Multi-layer security protocols and access controls"
    ]
  },
  {
    icon: Zap,
    title: "Intelligent Technology",
    features: [
      "Leverage intelligent backup technology for enhanced performance and reliability",
      "AI-driven optimization for backup scheduling and storage",
      "Automated testing and validation of backup integrity"
    ]
  },
  {
    icon: CheckCircle,
    title: "Cyber Resilience",
    features: [
      "Strengthen your business's cyber resilience with end-to-end data protection",
      "Rapid recovery capabilities for business continuity",
      "Comprehensive disaster recovery planning and execution"
    ]
  }
];

const keyBenefits = [
  "Protection against cyberattacks and ransomware",
  "Recovery from accidental mistakes and system malfunctions",
  "Business continuity during natural disasters",
  "Minimal operational disruptions",
  "Scalable solution for organizations of any size"
];

const idealFor = [
  "Organizations with critical virtual infrastructure",
  "Businesses requiring minimal downtime tolerance",
  "Companies with mission-critical applications",
  "Enterprises seeking cloud-based disaster recovery",
  "Organizations needing regulatory compliance"
];

export default function ServerBackup() {
  const heroAnimation = useScrollAnimation({ threshold: 0.3 });

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Server Cloud Backup Solutions MENA - Enterprise Server Protection | S2 Solutions"
        description="Professional server cloud backup solutions for MENA enterprises. Secure Windows and Linux server protection with ransomware recovery and enterprise-grade security. Serving UAE, Saudi Arabia, and Middle East."
        keywords="server backup MENA, cloud server backup UAE, enterprise backup Middle East, Windows server backup Saudi Arabia, Linux backup, virtual machine backup, database backup"
        canonicalUrl="https://s2mgt.com/solutions/server-backup"
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
                      <span className="relative">Server Backup Solutions</span>
                    </Badge>
                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      <span 
                        className="bg-gradient-to-r from-blue-400 via-blue-500 to-green-400 bg-clip-text text-transparent animate-pulse hover:scale-105 transition-transform duration-300 cursor-default inline-block"
                        style={{
                          backgroundSize: '300% 300%',
                          animation: 'gradientShift 4s ease-in-out infinite'
                        }}
                      >
                        Server Cloud Backup
                      </span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                      Enterprise-grade server backup solutions with cloud replication, immutable storage, and rapid recovery capabilities for Windows and Linux environments.
                    </p>
                    
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 relative overflow-hidden group/btn px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold w-full sm:w-auto"
                      onClick={() => window.open('https://outlook.live.com/calendar/0/deeplink/compose?subject=Server%20Backup%20Consultation', '_blank')}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500" />
                      <span className="relative">Schedule Consultation</span>
                    </Button>
                  </div>
                  
                  {/* Right Media Section */}
                  <div className="order-first lg:order-last">
                    <div className="relative overflow-hidden h-[200px] sm:h-[280px] md:h-[320px] lg:h-[360px] group/media hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-400 rounded-lg sm:rounded-xl">
                      {/* Placeholder for Server Backup Visual */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-slate-700/30 to-green-500/20 rounded-xl border border-blue-500/30 flex items-center justify-center">
                        <div className="text-center text-slate-300">
                          <CloudDownload className="h-16 w-16 mx-auto mb-4 text-blue-400" />
                          <h3 className="text-lg font-semibold mb-2">Server Backup Demo</h3>
                          <p className="text-sm opacity-80">Interactive demo coming soon</p>
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

        {/* CloudAlly Content Sections */}
        <style>{`
          .cloudally-section {
            padding: 3rem 0;
          }
          
          .cloudally-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }
          
          .cloudally-section-title {
            font-size: 1.75rem;
            font-weight: 700;
            text-align: center;
            margin-bottom: 1rem;
          }
          
          .cloudally-section-subtitle {
            font-size: 1rem;
            text-align: center;
            color: #64748b;
            margin-bottom: 2rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
          }
          
          .cloudally-cta-button {
            background: #f97316;
            color: white;
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 8px;
            font-weight: 600;
            text-decoration: none;
            display: inline-block;
            transition: background 0.3s;
          }
          
          .cloudally-cta-button:hover {
            background: #ea580c;
          }
          
          .cloudally-cta-secondary {
            background: #00008b;
            color: white;
          }
          
          .cloudally-cta-secondary:hover {
            background: #0000cd;
          }
          
          .cloudally-benefits-grid {
            display: grid;
            gap: 1.5rem;
            margin-bottom: 2rem;
          }
          
          .cloudally-benefit-card {
            background: white;
            padding: 2rem 1.5rem;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            text-align: center;
            transition: transform 0.3s;
          }
          
          .cloudally-benefit-card:hover {
            transform: translateY(-5px);
          }
          
          .cloudally-benefit-icon {
            font-size: 2.5rem;
            color: #1a6aff;
            margin-bottom: 1rem;
          }
          
          .cloudally-distributor-highlights {
            display: grid;
            gap: 1.5rem;
            margin-bottom: 3rem;
          }
          
          .cloudally-distributor-card {
            background: #f5f5f5;
            padding: 2rem 1.5rem;
            border-radius: 12px;
            text-align: center;
            transition: all 0.3s;
          }
          
          .cloudally-distributor-card:hover {
            border: 2px solid #1a6aff;
            background: white;
          }
          
          .cloudally-distributor-icon {
            font-size: 2.5rem;
            color: #1a6aff;
            margin-bottom: 1.5rem;
          }
          
          .cloudally-regional-benefits {
            background: #1a6aff;
            color: white;
            padding: 2rem;
            border-radius: 16px;
            margin-bottom: 2rem;
          }
          
          .cloudally-benefits-columns {
            display: grid;
            gap: 1rem;
          }
          
          .cloudally-benefit-row {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 0.5rem;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 8px;
          }
          
          .cloudally-distributor-cta {
            background: #f5f5f5;
            padding: 2rem;
            border-radius: 16px;
            text-align: center;
            border: 2px solid #1a6aff;
          }
          
          .cloudally-platform-grid {
            display: grid;
            gap: 1.5rem;
          }
          
          .cloudally-platform-card {
            background: white;
            padding: 2rem 1.5rem;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            text-align: center;
            border-top: 4px solid #1a6aff;
          }
          
          .cloudally-features-grid {
            display: grid;
            gap: 1rem;
          }
          
          .cloudally-feature-item {
            background: white;
            padding: 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            display: flex;
            gap: 1rem;
          }
          
          .cloudally-feature-icon {
            font-size: 1.5rem;
            color: #059669;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: rgba(5, 150, 105, 0.1);
            flex-shrink: 0;
          }
          
          .cloudally-security-features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 1rem;
            margin-top: 2rem;
          }
          
          .cloudally-security-badge {
            text-align: center;
            padding: 1.5rem 1rem;
            background: #f5f5f5;
            border-radius: 12px;
            transition: all 0.3s;
          }
          
          .cloudally-security-badge:hover {
            background: #1a6aff;
            color: white;
          }
          
          .cloudally-comparison-grid {
            display: grid;
            gap: 1rem;
            margin-top: 2rem;
          }
          
          .cloudally-comparison-item {
            background: white;
            padding: 1.5rem;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            border-left: 4px solid #059669;
          }
          
          .cloudally-industry-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            margin-top: 2rem;
          }
          
          .cloudally-industry-card {
            padding: 1.5rem;
            text-align: center;
            border: 2px solid #e2e8f0;
            border-radius: 12px;
            transition: all 0.3s;
          }
          
          .cloudally-industry-card:hover {
            border-color: #1a6aff;
            background: #f5f5f5;
          }
          
          @media (min-width: 640px) {
            .cloudally-benefits-grid {
              grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            }
            .cloudally-platform-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            .cloudally-features-grid {
              grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            }
            .cloudally-comparison-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            .cloudally-distributor-cta > div {
              flex-direction: row;
              justify-content: center;
            }
            .cloudally-benefits-columns {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          
          @media (min-width: 768px) {
            .cloudally-section {
              padding: 4rem 0;
            }
            .cloudally-section-title {
              font-size: 2.25rem;
            }
            .cloudally-benefits-grid {
              grid-template-columns: repeat(3, 1fr);
            }
            .cloudally-platform-grid {
              grid-template-columns: repeat(4, 1fr);
            }
            .cloudally-distributor-highlights {
              grid-template-columns: repeat(3, 1fr);
            }
            .cloudally-comparison-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
        `}</style>

        {/* Main Value Proposition */}
        <section className="cloudally-section" style={{background: '#f5f5f5'}}>
          <div className="cloudally-container">
            <h2 className="cloudally-section-title">Why Enterprise SaaS Data Protection Is Critical for Business Success</h2>
            <p className="cloudally-section-subtitle">Native cloud storage isn't backup. Protect your business-critical data from accidental deletion, ransomware attacks, and compliance violations with CloudAlly's enterprise-grade SaaS backup solutions trusted by 16,000+ organizations.</p>
            
            <div className="cloudally-benefits-grid">
              <div className="cloudally-benefit-card">
                <div className="cloudally-benefit-icon">
                  <i className="fas fa-cloud-upload-alt"></i>
                </div>
                <h3 style={{fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem'}}>Unlimited AWS Backup</h3>
                <p>Secure your data with unlimited storage on Amazon Web Services infrastructure, with immutable snapshots that protect against ransomware and accidental deletion.</p>
              </div>
              <div className="cloudally-benefit-card">
                <div className="cloudally-benefit-icon">
                  <i className="fas fa-undo-alt"></i>
                </div>
                <h3 style={{fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem'}}>One-Click Restore</h3>
                <p>Restore individual files, entire folders, or complete user accounts with granular point-in-time recovery. Cross-platform restore capabilities ensure maximum flexibility.</p>
              </div>
              <div className="cloudally-benefit-card">
                <div className="cloudally-benefit-icon">
                  <i className="fas fa-lock"></i>
                </div>
                <h3 style={{fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem'}}>Stringent Security</h3>
                <p>Bank-grade AES-256 encryption, OAuth authentication, and compliance with HIPAA, GDPR, and SOC 2 standards ensure your data remains secure and compliant.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Official Distributor Section */}
        <section className="cloudally-section" style={{background: 'white', borderTop: '4px solid #1a6aff'}}>
          <div className="cloudally-container">
            <h2 className="cloudally-section-title">Official OpenText CloudAlly Distributor for Middle East & North Africa</h2>
            <p className="cloudally-section-subtitle">We are the authorized OpenText partner providing CloudAlly enterprise SaaS backup solutions across the MENA region with dedicated local support, training, and implementation services.</p>
            
            <div className="cloudally-distributor-highlights">
              <div className="cloudally-distributor-card">
                <div className="cloudally-distributor-icon">
                  <i className="fas fa-certificate"></i>
                </div>
                <h3 style={{fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem'}}>Authorized OpenText Partner</h3>
                <p>Official distributor status with direct access to OpenText engineering support and latest product updates for the Middle East & North Africa region.</p>
              </div>
              <div className="cloudally-distributor-card">
                <div className="cloudally-distributor-icon">
                  <i className="fas fa-globe-americas"></i>
                </div>
                <h3 style={{fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem'}}>Regional MENA Expertise</h3>
                <p>Deep understanding of Middle East & North Africa compliance requirements including data residency, local regulations, and Arabic language support.</p>
              </div>
              <div className="cloudally-distributor-card">
                <div className="cloudally-distributor-icon">
                  <i className="fas fa-users-cog"></i>
                </div>
                <h3 style={{fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem'}}>Dedicated Local Support</h3>
                <p>Arabic and English speaking technical experts providing implementation, training, and ongoing support across Dubai, Saudi Arabia, Egypt, and the entire MENA region.</p>
              </div>
            </div>
            
            <div className="cloudally-regional-benefits">
              <h3 style={{textAlign: 'center', fontSize: '1.25rem', marginBottom: '1.5rem'}}>Why Choose Our MENA Regional Partnership</h3>
              <div className="cloudally-benefits-columns">
                <div>
                  <div className="cloudally-benefit-row">
                    <i className="fas fa-check-circle" style={{color: '#f97316'}}></i>
                    <span>Local data center selection (Dubai, Bahrain)</span>
                  </div>
                  <div className="cloudally-benefit-row">
                    <i className="fas fa-check-circle" style={{color: '#f97316'}}></i>
                    <span>Arabic language interface available</span>
                  </div>
                  <div className="cloudally-benefit-row">
                    <i className="fas fa-check-circle" style={{color: '#f97316'}}></i>
                    <span>MENA timezone support coverage</span>
                  </div>
                </div>
                <div>
                  <div className="cloudally-benefit-row">
                    <i className="fas fa-check-circle" style={{color: '#f97316'}}></i>
                    <span>Regional compliance expertise</span>
                  </div>
                  <div className="cloudally-benefit-row">
                    <i className="fas fa-check-circle" style={{color: '#f97316'}}></i>
                    <span>Local currency pricing options</span>
                  </div>
                  <div className="cloudally-benefit-row">
                    <i className="fas fa-check-circle" style={{color: '#f97316'}}></i>
                    <span>On-site implementation services</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="cloudally-distributor-cta">
              <div>
                <h3 style={{fontSize: '1.25rem', marginBottom: '1rem'}}>Ready to Secure Your MENA Organization's Data?</h3>
                <p>Contact our regional CloudAlly experts for a personalized consultation and implementation plan tailored to your Middle East business requirements.</p>
                <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem'}}>
                  <a href="mailto:support@cloudally.com?subject=MENA%20CloudAlly%20Consultation" className="cloudally-cta-button">Schedule MENA Consultation</a>
                  <a href="tel:+14243041959" className="cloudally-cta-button cloudally-cta-secondary">Call Our Regional Team</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Coverage Section */}
        <section className="cloudally-section" style={{background: 'white'}}>
          <div className="cloudally-container">
            <h2 className="cloudally-section-title">Complete Microsoft 365, Google Workspace & Salesforce Backup Coverage</h2>
            <p className="cloudally-section-subtitle">Manage all your enterprise cloud backup needs from a single dashboard with comprehensive coverage across major SaaS platforms including Microsoft 365, Google Workspace, Salesforce, and Dropbox Business.</p>
            
            <div className="cloudally-platform-grid">
              <div className="cloudally-platform-card">
                <div style={{fontSize: '2.5rem', marginBottom: '1rem', color: '#0078d4'}}>
                  <i className="fab fa-microsoft"></i>
                </div>
                <h3>Microsoft 365</h3>
                <p><strong>Complete Coverage:</strong></p>
                <ul style={{listStyle: 'none', textAlign: 'left', marginTop: '1rem'}}>
                  <li style={{fontSize: '0.875rem', color: '#64748b', marginBottom: '0.25rem'}}>• Exchange Online (Emails, Calendars)</li>
                  <li style={{fontSize: '0.875rem', color: '#64748b', marginBottom: '0.25rem'}}>• SharePoint Online (Sites, Lists)</li>
                  <li style={{fontSize: '0.875rem', color: '#64748b', marginBottom: '0.25rem'}}>• OneDrive for Business</li>
                  <li style={{fontSize: '0.875rem', color: '#64748b', marginBottom: '0.25rem'}}>• Microsoft Teams & Groups</li>
                </ul>
              </div>
              <div className="cloudally-platform-card">
                <div style={{fontSize: '2.5rem', marginBottom: '1rem', color: '#4285f4'}}>
                  <i className="fab fa-google"></i>
                </div>
                <h3>Google Workspace</h3>
                <p><strong>Full Protection:</strong></p>
                <ul style={{listStyle: 'none', textAlign: 'left', marginTop: '1rem'}}>
                  <li style={{fontSize: '0.875rem', color: '#64748b', marginBottom: '0.25rem'}}>• Gmail (Messages, Labels)</li>
                  <li style={{fontSize: '0.875rem', color: '#64748b', marginBottom: '0.25rem'}}>• Google Drive (Files, Folders)</li>
                  <li style={{fontSize: '0.875rem', color: '#64748b', marginBottom: '0.25rem'}}>• Calendar & Contacts</li>
                  <li style={{fontSize: '0.875rem', color: '#64748b', marginBottom: '0.25rem'}}>• Tasks & Shared Drives</li>
                </ul>
              </div>
              <div className="cloudally-platform-card">
                <div style={{fontSize: '2.5rem', marginBottom: '1rem', color: '#00a1e0'}}>
                  <i className="fab fa-salesforce"></i>
                </div>
                <h3>Salesforce</h3>
                <p><strong>Comprehensive Backup:</strong></p>
                <ul style={{listStyle: 'none', textAlign: 'left', marginTop: '1rem'}}>
                  <li style={{fontSize: '0.875rem', color: '#64748b', marginBottom: '0.25rem'}}>• CRM Data & Metadata</li>
                  <li style={{fontSize: '0.875rem', color: '#64748b', marginBottom: '0.25rem'}}>• Custom Objects & Fields</li>
                  <li style={{fontSize: '0.875rem', color: '#64748b', marginBottom: '0.25rem'}}>• Chatter Feeds & Files</li>
                  <li style={{fontSize: '0.875rem', color: '#64748b', marginBottom: '0.25rem'}}>• Configuration Settings</li>
                </ul>
              </div>
              <div className="cloudally-platform-card">
                <div style={{fontSize: '2.5rem', marginBottom: '1rem', color: '#1a6aff'}}>
                  <i className="fab fa-dropbox"></i>
                </div>
                <h3>Dropbox Business</h3>
                <p><strong>Complete Coverage:</strong></p>
                <ul style={{listStyle: 'none', textAlign: 'left', marginTop: '1rem'}}>
                  <li style={{fontSize: '0.875rem', color: '#64748b', marginBottom: '0.25rem'}}>• Files & Folders</li>
                  <li style={{fontSize: '0.875rem', color: '#64748b', marginBottom: '0.25rem'}}>• Shared Links & Permissions</li>
                  <li style={{fontSize: '0.875rem', color: '#64748b', marginBottom: '0.25rem'}}>• Version History</li>
                  <li style={{fontSize: '0.875rem', color: '#64748b', marginBottom: '0.25rem'}}>• Team Folders & Metadata</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="cloudally-section" style={{background: '#f5f5f5'}}>
          <div className="cloudally-container">
            <h2 className="cloudally-section-title">Advanced Enterprise Backup Features & Compliance Capabilities</h2>
            <p className="cloudally-section-subtitle">CloudAlly's advanced backup capabilities are designed for enterprise requirements with automated daily backups, unlimited retention, cross-platform restore, and the simplicity your IT team needs.</p>
            
            <div className="cloudally-features-grid">
              <div className="cloudally-feature-item">
                <div className="cloudally-feature-icon">
                  <i className="fas fa-sync-alt"></i>
                </div>
                <div>
                  <h4 style={{fontWeight: 600, marginBottom: '0.5rem'}}>Automated Daily Backups</h4>
                  <p>Configurable backup frequency up to 3x daily with incremental backups to minimize storage and bandwidth usage.</p>
                </div>
              </div>
              <div className="cloudally-feature-item">
                <div className="cloudally-feature-icon">
                  <i className="fas fa-history"></i>
                </div>
                <div>
                  <h4 style={{fontWeight: 600, marginBottom: '0.5rem'}}>Point-in-Time Restore</h4>
                  <p>Access historical snapshots and restore data from any point in time with unlimited retention periods.</p>
                </div>
              </div>
              <div className="cloudally-feature-item">
                <div className="cloudally-feature-icon">
                  <i className="fas fa-server"></i>
                </div>
                <div>
                  <h4 style={{fontWeight: 600, marginBottom: '0.5rem'}}>BYOS (Bring Your Own Storage)</h4>
                  <p>Use your own AWS, Azure, or Google Cloud storage for complete data sovereignty and compliance control.</p>
                </div>
              </div>
              <div className="cloudally-feature-item">
                <div className="cloudally-feature-icon">
                  <i className="fas fa-exchange-alt"></i>
                </div>
                <div>
                  <h4 style={{fontWeight: 600, marginBottom: '0.5rem'}}>Cross-Platform Restore</h4>
                  <p>Restore data across different platforms and users - migrate from Google to Microsoft or vice versa seamlessly.</p>
                </div>
              </div>
              <div className="cloudally-feature-item">
                <div className="cloudally-feature-icon">
                  <i className="fas fa-search"></i>
                </div>
                <div>
                  <h4 style={{fontWeight: 600, marginBottom: '0.5rem'}}>Granular Search & Restore</h4>
                  <p>Advanced search capabilities to find specific files, emails, or data points quickly and restore them individually.</p>
                </div>
              </div>
              <div className="cloudally-feature-item">
                <div className="cloudally-feature-icon">
                  <i className="fas fa-download"></i>
                </div>
                <div>
                  <h4 style={{fontWeight: 600, marginBottom: '0.5rem'}}>Export Flexibility</h4>
                  <p>Export data in multiple formats (PST, EML, PDF, native formats) for compliance, legal discovery, or migration purposes.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Compliance Section */}
        <section className="cloudally-section" style={{background: 'white'}}>
          <div className="cloudally-container">
            <h2 className="cloudally-section-title">ISO 27001, HIPAA & GDPR Compliant Security Standards</h2>
            <p className="cloudally-section-subtitle">Enterprise-level security controls and regulatory compliance certifications including ISO 27001, HIPAA, GDPR, and SOC 2 Type II to protect your most sensitive business data and meet strict regulatory requirements.</p>
            
            <div className="cloudally-security-features">
              <div className="cloudally-security-badge">
                <i className="fas fa-certificate" style={{fontSize: '2rem', marginBottom: '1rem', color: '#1a6aff'}}></i>
                <h4>ISO 27001</h4>
                <p>Information Security Management</p>
              </div>
              <div className="cloudally-security-badge">
                <i className="fas fa-user-shield" style={{fontSize: '2rem', marginBottom: '1rem', color: '#1a6aff'}}></i>
                <h4>HIPAA Compliant</h4>
                <p>Healthcare Data Protection</p>
              </div>
              <div className="cloudally-security-badge">
                <i className="fas fa-balance-scale" style={{fontSize: '2rem', marginBottom: '1rem', color: '#1a6aff'}}></i>
                <h4>GDPR Ready</h4>
                <p>EU Data Protection Regulation</p>
              </div>
              <div className="cloudally-security-badge">
                <i className="fas fa-shield-virus" style={{fontSize: '2rem', marginBottom: '1rem', color: '#1a6aff'}}></i>
                <h4>SOC 2 Type II</h4>
                <p>Security & Availability Controls</p>
              </div>
              <div className="cloudally-security-badge">
                <i className="fas fa-key" style={{fontSize: '2rem', marginBottom: '1rem', color: '#1a6aff'}}></i>
                <h4>AES-256 Encryption</h4>
                <p>Data at Rest & in Transit</p>
              </div>
              <div className="cloudally-security-badge">
                <i className="fas fa-lock" style={{fontSize: '2rem', marginBottom: '1rem', color: '#1a6aff'}}></i>
                <h4>Immutable Storage</h4>
                <p>Ransomware Protection</p>
              </div>
            </div>
            
            <div style={{marginTop: '3rem', textAlign: 'center'}}>
              <h3 style={{marginBottom: '2rem'}}>Additional Security Features</h3>
              <div style={{display: 'grid', gap: '1rem', marginTop: '2rem'}}>
                <div style={{padding: '1.5rem', background: '#f5f5f5', borderRadius: '12px', textAlign: 'center'}}>
                  <h4>OAuth & MFA Authentication</h4>
                  <p>Secure access with multi-factor authentication and OAuth 2.0 protocols</p>
                </div>
                <div style={{padding: '1.5rem', background: '#f5f5f5', borderRadius: '12px', textAlign: 'center'}}>
                  <h4>IP Address Restrictions</h4>
                  <p>Control access with IP allowlisting and geographic restrictions</p>
                </div>
                <div style={{padding: '1.5rem', background: '#f5f5f5', borderRadius: '12px', textAlign: 'center'}}>
                  <h4>Global Data Centers</h4>
                  <p>Choose your data location with AWS regions worldwide for data residency compliance</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose CloudAlly Section */}
        <section className="cloudally-section" style={{background: '#f5f5f5'}}>
          <div className="cloudally-container">
            <h2 className="cloudally-section-title">Why 16,000+ Organizations Trust CloudAlly</h2>
            <p className="cloudally-section-subtitle">CloudAlly goes beyond basic data protection to provide enterprise-grade features that native cloud storage simply cannot match.</p>
            
            <div className="cloudally-comparison-grid">
              <div className="cloudally-comparison-item">
                <h4 style={{fontWeight: 600, marginBottom: '0.5rem', display: 'flex', alignItems: 'center'}}>
                  <i className="fas fa-rocket" style={{color: '#059669', marginRight: '0.5rem'}}></i>
                  5-Minute Setup
                </h4>
                <p>Deploy enterprise backup in minutes, not months. Zero maintenance required after initial configuration.</p>
              </div>
              <div className="cloudally-comparison-item">
                <h4 style={{fontWeight: 600, marginBottom: '0.5rem', display: 'flex', alignItems: 'center'}}>
                  <i className="fas fa-headset" style={{color: '#059669', marginRight: '0.5rem'}}></i>
                  24/7 Tier-1 Support
                </h4>
                <p>Direct access to backup experts, not chatbots. Average response time under 4 hours for critical issues.</p>
              </div>
              <div className="cloudally-comparison-item">
                <h4 style={{fontWeight: 600, marginBottom: '0.5rem', display: 'flex', alignItems: 'center'}}>
                  <i className="fas fa-infinity" style={{color: '#059669', marginRight: '0.5rem'}}></i>
                  Unlimited Retention
                </h4>
                <p>Keep backups as long as you need. No forced deletion policies or hidden storage limits.</p>
              </div>
              <div className="cloudally-comparison-item">
                <h4 style={{fontWeight: 600, marginBottom: '0.5rem', display: 'flex', alignItems: 'center'}}>
                  <i className="fas fa-chart-line" style={{color: '#059669', marginRight: '0.5rem'}}></i>
                  99.9% Uptime SLA
                </h4>
                <p>Guaranteed availability backed by service level agreements and financial penalties for downtime.</p>
              </div>
              <div className="cloudally-comparison-item">
                <h4 style={{fontWeight: 600, marginBottom: '0.5rem', display: 'flex', alignItems: 'center'}}>
                  <i className="fas fa-tags" style={{color: '#059669', marginRight: '0.5rem'}}></i>
                  White-Label Options
                </h4>
                <p>MSPs and partners can rebrand CloudAlly with custom logos, domains, and support channels.</p>
              </div>
              <div className="cloudally-comparison-item">
                <h4 style={{fontWeight: 600, marginBottom: '0.5rem', display: 'flex', alignItems: 'center'}}>
                  <i className="fas fa-building" style={{color: '#059669', marginRight: '0.5rem'}}></i>
                  Enterprise Ready
                </h4>
                <p>SSO integration, custom contracts, and dedicated customer success managers for enterprise accounts.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Solutions Section */}
        <section className="cloudally-section" style={{background: 'white'}}>
          <div className="cloudally-container">
            <h2 className="cloudally-section-title">Trusted by Industries That Demand the Highest Standards</h2>
            <p className="cloudally-section-subtitle">CloudAlly serves organizations across regulated industries where data protection, compliance, and security are mission-critical requirements.</p>
            
            <div className="cloudally-industry-grid">
              <div className="cloudally-industry-card">
                <i className="fas fa-heartbeat" style={{fontSize: '2rem', color: '#dc2626', marginBottom: '1rem'}}></i>
                <h4>Healthcare</h4>
                <p>HIPAA-compliant backup for patient data protection and medical records retention requirements.</p>
              </div>
              <div className="cloudally-industry-card">
                <i className="fas fa-university" style={{fontSize: '2rem', color: '#1a6aff', marginBottom: '1rem'}}></i>
                <h4>Financial Services</h4>
                <p>SEC and FINRA compliant data archiving with immutable storage for regulatory examinations.</p>
              </div>
              <div className="cloudally-industry-card">
                <i className="fas fa-graduation-cap" style={{fontSize: '2rem', color: '#059669', marginBottom: '1rem'}}></i>
                <h4>Education</h4>
                <p>FERPA-compliant student data protection with special pricing for educational institutions.</p>
              </div>
              <div className="cloudally-industry-card">
                <i className="fas fa-gavel" style={{fontSize: '2rem', color: '#7c3aed', marginBottom: '1rem'}}></i>
                <h4>Legal</h4>
                <p>eDiscovery-ready backups with legal hold capabilities and chain of custody documentation.</p>
              </div>
              <div className="cloudally-industry-card">
                <i className="fas fa-industry" style={{fontSize: '2rem', color: '#ea580c', marginBottom: '1rem'}}></i>
                <h4>Manufacturing</h4>
                <p>Protect intellectual property and supply chain data with enterprise-grade security controls.</p>
              </div>
              <div className="cloudally-industry-card">
                <i className="fas fa-hand-holding-heart" style={{fontSize: '2rem', color: '#f59e0b', marginBottom: '1rem'}}></i>
                <h4>Non-Profit</h4>
                <p>Special pricing for non-profit organizations with the same enterprise-level features and support.</p>
              </div>
            </div>
            
            <div style={{textAlign: 'center', marginTop: '2rem', padding: '2rem', background: '#f5f5f5', borderRadius: '16px'}}>
              <h3 style={{marginBottom: '1rem', color: '#1a6aff'}}>Partner Program Benefits</h3>
              <p style={{marginBottom: '1.5rem'}}>Join our global network of MSPs, system integrators, and technology partners</p>
              <div style={{display: 'grid', gap: '0.5rem', marginTop: '1rem'}}>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.875rem'}}>
                  <i className="fas fa-check" style={{color: '#059669'}}></i> White-label solutions
                </span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.875rem'}}>
                  <i className="fas fa-check" style={{color: '#059669'}}></i> Partner portal access
                </span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.875rem'}}>
                  <i className="fas fa-check" style={{color: '#059669'}}></i> Technical training
                </span>
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.875rem'}}>
                  <i className="fas fa-check" style={{color: '#059669'}}></i> Marketing support
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Overview</h2>
              <Card>
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed mb-6">
                    Cyberattacks, accidental mistakes, system malfunctions, and unexpected events like natural disasters shape risks to critical business data and infrastructure that are extensive and ever growing.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Organizations, regardless of size, require a <strong>simple yet dependable backup and recovery solution</strong> that ensures data remains secure, intact, and accessible, while also reducing operational disruptions to a minimum.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <feature.icon className="h-8 w-8 text-primary" />
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
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
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">What We Deliver</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {deliverables.map((item, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <item.icon className="h-8 w-8 text-teal-500" />
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {item.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-teal-500 mt-1 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
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
                        {idealFor.map((item, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
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
                        {keyBenefits.map((benefit, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg">Schedule Infrastructure Assessment</Button>
                    <Button variant="outline" size="lg">Download Technical Guide</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}